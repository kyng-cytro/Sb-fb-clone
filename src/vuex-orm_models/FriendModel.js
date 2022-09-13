import { Model } from '@vuex-orm/core'

export default class Friend extends Model {
  static entity = 'friends' // This is the table name for the local database

  static primaryKey = 'id'

  static fields() {
    // These are like columns for the database table
    return {
      id: this.uid(), // id is assumed to be the primary key (can be overridden) uid generates a unique ID for single client (not UUID)
      isFamily: this.boolean(false),
      isFavorites: this.boolean(false),
      name: this.string(''), // The argument passed is the default value used when instantiating the model class
      imageSource: this.string(''), // this.attr is a generic field which accepts any value.
      numOfMutualFriends: this.attr(0),
      selected: this.boolean(false), // Whether or not this friend is selected for invitation
      invited: this.boolean(false), // Whether or not this friend has been invited
    }
  }
}
