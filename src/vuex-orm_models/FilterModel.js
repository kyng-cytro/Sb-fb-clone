import { Model } from '@vuex-orm/core'

export default class FiltersValues extends Model {
  static entity = 'FiltersValues'

  static fields() {
    return {
      id: this.uid(),
      isFamily: this.boolean(false),
      isMajorEvent: this.boolean(false),
      lastThreeDays: this.boolean(false),
      lastWeek: this.boolean(false),
      lastTwoWeeks: this.boolean(false),
      lastMonth: this.boolean(false),
      isUserViewOnly: this.boolean(true),
    }
  }
}
