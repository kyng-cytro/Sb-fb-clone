import { Model } from '@vuex-orm/core'

export default class User extends Model {
  static entity = 'users' // This is the table name for the local database

  static fields() {
    // These are like columns for the database table
    return {
      id: this.uid(), // id is assumeed to be the primary key (can be overridden) uid generates a unique ID for single client (not UUID)
      name: this.string(''), // The argument passed is the default value used when instantiating the model class
      imageSource: this.string(''), // this.attr is a generic field which accepts any value.
    }
  }
}
