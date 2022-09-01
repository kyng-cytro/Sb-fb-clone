import { Model } from '@vuex-orm/core'

export default class Event extends Model {
	static entity = 'event' // This is the table name for the local database

	static fields() {
		// These are like columns for the database table
		return {
			id: this.uid(), // id is assumed to be the primary key (can be overridden) uid generates a unique ID for single client (not UUID)
			name: this.string(''), // The argument passed is the default value used when instantiating the model class
			date: this.attr(new Date()), // this.attr is a generic field which accepts any value.
			time: this.attr(new Date().toISOString().split('T')[1].split('.')[0]), // this.attr is a generic field which accepts any value.
			location: this.string(''),
			description: this.string(''),
		}
	}
}
