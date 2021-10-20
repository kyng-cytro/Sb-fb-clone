import { Model } from '@vuex-orm/core';

export default class faceLight extends Model {
    static entity = 'faceLight';

    static fields() {
        return {

            enabled: this.boolean(false)
        }
    }
}