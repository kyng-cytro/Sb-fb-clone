export default function filterPosts(posts, filter) {// eslint-disable-line no-unused-vars
    if (filter == null || posts.length < 1) {
        return;
    }
    console.log(posts);
    console.log(filter);
    function getDifferenceInTime(date1, date2) {
        return Math.abs(date1.getTime() - date2.getTime())
    }
    function getNumDaysBetween(date1, date2) {
        return getDifferenceInTime(date1, date2) / (1000 * 60 * 60 * 24);
    }

    let newPosts = []
    // In production, you can just create a new date like this: 
    // let currentDate = new Date();
    let currentDate = new Date('11/16/2021');
    for (let i=0; i < posts.length; i++) {
        let post = posts[i];
        let addToList = true;
        if (filter.lastMonth) {
            if (currentDate.getMonth() - post.date.getMonth() <= 1) {
            }
        } else if (filter.lastTwoWeeks) {
            if (getNumDaysBetween(currentDate, post.date) <= 14) {
            }
        } else if (filter.lastWeek) {
            if (getNumDaysBetween(currentDate, post.date) <= 7) {
            }
        } else if (filter.lastThreeDays) {
            if (getNumDaysBetween(currentDate, post.date) <= 3) {
            }
        } else {
            console.log("None of the date things are checked");
            if (filter.isMajorEvent && post.filter.isMajorEvent) {
            }
            else if (filter.isFamily && post.friend.isFamily) {
            }
        }
        if (addToList) {
            newPosts.push(post);
            continue;
        }
    }
    return newPosts;
}
