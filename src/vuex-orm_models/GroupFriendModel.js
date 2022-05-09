// This model file references from a group name to a list of FriendModel objects
import { Model } from '@vuex-orm/core';

export default class GroupFriend extends Model {
    static entity = 'groupFriends'; // This is the table name for the local database
    static fields() {
            return {
            id: this.uid(),
            groupName: this.string(''),
            friends: this.attr([]) // This will be a list of ids to the friendModels
        }
    }
}
