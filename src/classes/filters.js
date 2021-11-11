import { Model } from '@vuex-orm/core';

export default class Filters extends Model {
  static entity = 'Filters';

  static fields() {
    return {
      id: this.uid(),
      family: this.boolean(false),
      majorEvents: this.boolean(false),
      lastThreeDays: this.boolean(false),
      lastWeek: this.boolean(false),
      lastTwoWeeks: this.boolean(false),
      lastMonth: this.boolean(false),
      selected: this.boolean(false)
    }
  }
}