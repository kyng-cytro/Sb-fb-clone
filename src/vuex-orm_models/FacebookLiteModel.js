import { Model } from '@vuex-orm/core';

export default class FacebookLite extends Model {
    static entity = 'FacebookLite';

    static fields() {
        return {
            id: this.uid(),
            enabled: this.boolean(false)
        }
    }
}