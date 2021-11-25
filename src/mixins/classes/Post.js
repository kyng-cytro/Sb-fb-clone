// function to create a universally unique id
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

// Including lint command so that function doesn't have to be used
export default class Post {
    constructor(imgSrc, friend, text, date, numComments, numShares, numLikes, filter) { // eslint-disable-line no-unused-vars
        this.id = uuidv4();
        this.imgSrc = imgSrc;
        this.friend = friend;
        this.text = text;
        this.date = date;
        this.numComments = numComments;
        this.numShares = numShares;
        this.numLikes = numLikes;
        this.filter = filter;
    }
}