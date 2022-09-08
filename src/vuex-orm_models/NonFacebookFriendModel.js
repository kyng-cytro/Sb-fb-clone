import { Model } from '@vuex-orm/core'

export default class NonFacebookFriend extends Model {
  static entity = 'nonFacebookFriends'

  static fields() {
    return {
      id: this.uid(),
      name: this.attr(undefined),
      phone: this.attr(undefined),
      email: this.attr(undefined),
      selected: this.boolean(false), // Whether or not this friend is selected for invitation
      invited: this.boolean(false), // Whether or not this friend has been invited
    }
  }
}
