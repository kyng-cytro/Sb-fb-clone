import { Model } from '@vuex-orm/core';

export default class Post extends Model {
    static entity = 'friends'; // This is the table name for the local database

    static fields() { // These are like columns for the database table
        return {
            id: this.uid(), // id is assumeed to be the primary key (can be overridden) uid generates a unique ID for single client (not UUID)
            isFamily: this.boolean(false),
            name: this.string(''), // The argument passed is the default value used when instantiating the model class
            imgSrc: this.string(''), // this.attr is a generic field which accepts any value.
            numOfMutualFriends: this.attr(0),
            selected: this.boolean(false) // Whether or not this friend is selected for invitation
        }
    }
}