import { Model } from '@vuex-orm/core'

export default class NonFacebookFriend extends Model {
  static entity = 'nonFacebookFriends'

  static fields() {
    return {
      id: this.uid(),
      name: this.string(''),
      phone: this.string(''),
      email: this.string(''),
      selected: this.boolean(false), // Whether or not this friend is selected for invitation
    }
  }
}
