export default function filterPosts(posts, filter) {// eslint-disable-line no-unused-vars
    function getDifferenceInTime(date1, date2) {
        return Math.abs(date1.getTime() - date2.getTime())
    }
    function getNumDaysBetween(date1, date2) {
        return getDifferenceInTime(date1, date2) / (1000 * 60 * 60 * 24);
    }

    let newPosts = []
    // In production, you can just create a new date like this: 
    // let currentDate = new Date();
    let currentDate = new Date('November 16, 2021');
    for (let i=0; i < posts.length; i++) {
        let post = posts[i];
        if (filter.lastMonth) {
            if (currentDate.getMonth() - post.date.getMonth() <= 1) {
                newPosts.add(post);
                continue;
            }
        } else if (filter.lastTwoWeeks) {
            if (getNumDaysBetween(currentDate, post.date) <= 14) {
                newPosts.add(post);
                continue;
            }
        } else if (filter.lastWeek) {
            if (getNumDaysBetween(currentDate, post.date) <= 7) {
                newPosts.add(post);
                continue;
            }
        } else if (filter.lastThreeDays) {
            if (getNumDaysBetween(currentDate, post.date) <= 3) {
                newPosts.add(post);
                continue;
            }
        }
        if (filter.majorEvents && post.filter.majorEvents) {
            newPosts.add(post);
            continue;
        }
        else if (filter.family && post.filter.family) {
            newPosts.add(post);
            continue;
        }
    }
    return newPosts;
}
