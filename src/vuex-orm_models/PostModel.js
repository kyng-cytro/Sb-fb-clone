import { Model } from '@vuex-orm/core';

export default class Post extends Model {
    static entity = 'posts'; // This is the table name for the local database

    static fields() { // These are like columns for the database table
        return {
            id: this.uid(), // id is assumeed to be the primary key (can be overridden) uid generates a unique ID for single client (not UUID)
            imgSrc: this.string(''), 
            friend: this.attr(0), // this.attr is a generic field which accepts any value.
            text: this.string(''),
            date: this.string(''),
            numComments: this.attr(0),
            numShares: this.attr(0),
            numLikes: this.attr(0),
            filter: this.attr(0)
        }
    }
}