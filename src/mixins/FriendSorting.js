import Friend from '@/vuex-orm_models/FriendModel.js'
import NonFacebookFriend from '@/vuex-orm_models/NonFacebookFriendModel.js'

export const friendSorting = {
  computed: {
    invitedFriends() {
      return Friend.query().where('invited', true).get()
    },
    selectedFriends() {
      return Friend.query().where('selected', true).get()
    },
    remainingInvites() {
      return (
        this.maxInvites -
        this.selectedFriends.length -
        this.emailFriends.length -
        this.phoneFriends.length
      )
    },
    emailFriends() {
      return NonFacebookFriend.query()
        .where('email', (email) => email !== '')
        .get()
    },
    phoneFriends() {
      return NonFacebookFriend.query()
        .where('phone', (phone) => phone !== '')
        .get()
    },
    onlyEmailFriends() {
      return this.getItemsFromList1NotIn2(this.emailFriends, this.phoneFriends)
    },
    onlyPhoneFriends() {
      return this.getItemsFromList1NotIn2(this.phoneFriends, this.emailFriends)
    },
    emailAndPhoneFriends() {
      return this.getItemsInBothLists(this.phoneFriends, this.emailFriends)
    },
    invitedEmailFriends() {
      return NonFacebookFriend.query({
        where: (friend) => friend.email !== '' && friend.invited,
      }).get()
    },
    invitedPhoneFriends() {
      return NonFacebookFriend.query({
        where: (friend) => friend.phone !== '' && friend.invited,
      }).get()
    },
  },
  methods: {
    isEqual(friend1, friend2) {
      // An equality operator for two NonFacebookFriends
      return (
        friend1.name === friend2.name &&
        friend1.phone === friend2.phone &&
        friend1.email === friend2.email
      )
    },
    isItemInList(item, list) {
      for (let i = 0; i < list.length; i++) {
        if (this.isEqual(item, list[i])) {
          return true
        }
      }
      return false
    },
    getItemsFromList1NotIn2(listOfFriends1, listOfFriends2) {
      let itemsNotIn2 = []
      for (let i = 0; i < listOfFriends1.length; i++) {
        if (!this.isItemInList(listOfFriends1[i], listOfFriends2)) {
          itemsNotIn2.push(listOfFriends1[i])
        }
      }
      return itemsNotIn2
    },
    getItemsInBothLists(listOfFriends1, listOfFriends2) {
      let bothList = []
      for (let i = 0; i < listOfFriends1.length; i++) {
        if (this.isItemInList(listOfFriends1[i], listOfFriends2)) {
          bothList.push(listOfFriends1[i])
        }
      }
      return bothList
    },
  },
}
