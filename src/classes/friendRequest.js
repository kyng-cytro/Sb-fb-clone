import { Model } from '@vuex-orm/core';

export default class Friend extends Model {
    static entity = 'friendRequests'; // This is the table name for the local database

    static fields() { // These are like columns for the database table
        return {
            id: this.uid(), // id is assumeed to be the primary key (can be overridden) uid generates a unique ID for single client (not UUID)
            name: this.string(''), // The argument passed is the default value used when instantiating the model class
            imgSrc: this.string(''), // this.attr is a generic field which accepts any value.
            daysUntilExpiration: this.attr(0),
            numOfMutualFriends: this.attr(0),
            state: this.string('pending'), // State might be "pending", "confirmed", or "deleted"
        }
    }
}