// This model file references from an event name to a list of FriendModel objects
import { Model } from '@vuex-orm/core'

export default class EventFriend extends Model {
  static entity = 'eventFriends' // This is the table name for the local database
  static fields() {
    return {
      id: this.uid(),
      eventName: this.string(''),
      friends: this.attr([]), // This will be a list of ids to the friendModels
    }
  }
}
