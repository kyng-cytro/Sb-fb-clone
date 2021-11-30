// Including lint command so that function doesn't have to be used
export default class PostTags {
    constructor(isMajorEvent, isPostViewOnly) { // eslint-disable-line no-unused-vars
        this.isMajorEvent = isMajorEvent;
        this.isPostViewOnly = isPostViewOnly; //This is an important distinction. This refers to whether the post itself is view only
    }
}