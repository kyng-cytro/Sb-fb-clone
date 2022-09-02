import Friend from '@/vuex-orm_models/FriendModel.js'
import EventFriend from '@/vuex-orm_models/EventFriendModel.js'
import GroupFriend from '@/vuex-orm_models/GroupFriendModel.js'

export const FriendPopulation = {
  data() {
    return {}
  },
  methods: {
    /**
     * A method that can be used to retrieve a friend from the local database using the friend's imageSource
     *
     * @param {string} imageSource A string representing the image source of a friend's profile picture. Note that this uniquely identifies a friend
     * @returns {object} Returns a JS Object from the VUEX-ORM database representing the friend associated with that image source
     */
    getFriendByImageSource(imageSource) {
      let friends = this.friends
      for (let i = 0; i < friends.length; i++) {
        if (friends[i].imageSource == imageSource) {
          return friends[i]
        }
      }
    },

    /**
     * A method that can be used to retrieve a friend from the local database using the friend's imageSource
     *
     * @param {string} name A string of the friend's name. Note that this uniquely identifies a friend (when using the generic.json file)
     * @returns {object} Returns a JS Object from the VUEX-ORM database representing the friend associated with that image source
     */
    getFriendByName(name) {
      let friends = this.friends
      for (let i = 0; i < friends.length; i++) {
        if (friends[i].name === name) {
          return friends[i]
        }
      }
    },

    /**
     * Adds a friend to the database given the name of the group or event
     *
     * @param {string} categoryName the name of the group or event
     * @param {array} friendList the list of JS Objects representing friends associated with that group or event
     * @param {string} category in either "group" or "event"
     */
    addFriendWithCategory(categoryName, friendList, category) {
      // Note, this code depends on the Friend model already having been updated
      let friendIDs = []

      // For every friend in our supplied list, search for them in the Friend model (db)
      // so we can get their uid and then add them to our friendID [] array
      for (let i = 0; i < friendList.length; i++) {
        // If using generic profile photos, you need unique names; however,
        // if using unique profile photos, use the `getFriendsByImageSource`
        let friend = this.getFriendByName(friendList[i].name)

        if (!friend) {
          // Friend was not found
          continue
        }

        friendIDs.push(friend.id)
      }
      if (category === 'group') {
        GroupFriend.insert({
          data: {
            groupName: categoryName,
            friends: friendIDs,
          },
        })
      } else if (category === 'event') {
        EventFriend.insert({
          data: {
            eventName: category,
            friends: friendIDs,
          },
        })
      }
    },

    /**
     * Adds a friend/group list to the database
     *
     * @param {array} friendsByGroup a list of objects. Each of these objects contains: (1) a list of friends associated with a group, (2) a group name
     */
    addAllGroupFriends(friendsByGroup) {
      for (let i = 0; i < friendsByGroup.length; i++) {
        this.addFriendWithCategory(
          friendsByGroup[i].groupName,
          friendsByGroup[i].friends,
          'group',
        )
      }
    },

    /**
     * Similar to addAllGroupFriends except for events (note, you may find a more efficient way to do this, Lucas.)
     *
     * @param {array} friendsByEvent
     */
    addAllEventFriends(friendsByEvent) {
      for (let i = 0; i < friendsByEvent.length; i++) {
        this.addFriendWithCategory(
          friendsByEvent[i].eventName,
          friendsByEvent[i].friends,
          'group',
        )
      }
    },

    /**
     * Adds a friend to the local VUEX-ORM database
     *
     * @param {object} friend A JS Object containing a name and imageSource field
     */
    addFriend(friend) {
      Friend.insert({ data: friend })
    },

    /**
     * Adds an array of friends to the VUEX-ORM database
     *
     * @param {array} friends
     */
    addFriends(friends) {
      Friend.insert({ data: friends })
    },

    /**
     * Sets the 'selected' flag for all the friends in the VUEX-ORM database to either true or false.
     * TODO: This may need to be updated because it does not properly reflect how Facebook's current system works
     *
     * @param {boolean} select select is true if you want to select them all, false otherwise
     */
    selectOrDeselectAllFriends(select) {
      let numberOfFriends = this.friends.length
      for (let i = 0; i < numberOfFriends; i++) {
        Friend.update({
          where: this.friends[i].id,
          data: {
            selected: select,
          },
        })
      }
    },
  },
  computed: {
    friends() {
      return Friend.all()
    },
  },
}
