import { Model } from '@vuex-orm/core';

export default class faceLight extends Model {
    static entity = 'faceLight';

    static fields() {
        return {
            id: this.uid(),
            enabled: this.boolean(false)
        }
    }
}