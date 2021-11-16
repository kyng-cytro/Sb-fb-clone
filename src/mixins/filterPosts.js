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
    let currentDate = new Date('November 16, 2021');
    for (let i=0; i < posts.length; i++) {
        let post = posts[i];
        if (filter.lastMonth) {
            if (currentDate.getMonth() - post.date.getMonth() <= 1) {
                newPosts.push(post);
                continue;
            }
        } else if (filter.lastTwoWeeks) {
            if (getNumDaysBetween(currentDate, post.date) <= 14) {
                newPosts.push(post);
                continue;
            }
        } else if (filter.lastWeek) {
            if (getNumDaysBetween(currentDate, post.date) <= 7) {
                newPosts.push(post);
                continue;
            }
        } else if (filter.lastThreeDays) {
            if (getNumDaysBetween(currentDate, post.date) <= 3) {
                newPosts.push(post);
                continue;
            }
        }
        console.log("None of the date things are checked");
        if (filter.majorEvents && post.filter.majorEvents) {
            newPosts.push(post);
            continue;
        }
        else if (filter.family && post.filter.family) {
            newPosts.push(post);
            continue;
        }
    }
    return newPosts;
}
