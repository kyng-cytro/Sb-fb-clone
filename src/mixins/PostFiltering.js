import FacebookLite from '@/vuex-orm_models/FacebookLiteModel.js'
export const PostFiltering = {
  name: 'PostFiltering',
  methods: {
    filterPosts(posts, filter) {
      if (!FacebookLite.find(1).enabled) {
        return posts
      }
      function getDifferenceInTime(date1, date2) {
        return Math.abs(date1.getTime() - date2.getTime())
      }
      function getNumDaysBetween(date1, date2) {
        return getDifferenceInTime(date1, date2) / (1000 * 60 * 60 * 24)
      }

      let newPosts = []
      // In production, you can just create a new date like this:
      let currentDate = new Date()
      for (let i = 0; i < posts.length; i++) {
        let post = posts[i]
        post.date = new Date(post.date) // Convert the string date to a js date object
        // Here's how this branching works. If the filter is checked but the post doesn't meet any one of those filters, we continue to the next iteration of the loop
        if (filter.lastMonth) {
          if (!(currentDate.getMonth() - post.date.getMonth() <= 1)) {
            continue
          }
        } else if (filter.lastTwoWeeks) {
          if (!(getNumDaysBetween(currentDate, post.date) <= 14)) {
            continue
          }
        } else if (filter.lastWeek) {
          if (!(getNumDaysBetween(currentDate, post.date) <= 7)) {
            continue
          }
        } else if (filter.lastThreeDays) {
          if (!(getNumDaysBetween(currentDate, post.date) <= 3)) {
            continue
          }
        }

        //TAGS
        if (filter.isMajorEvent && !post.filter.isMajorEvent) {
          continue
        }

        //PEOPLE
        if (filter.isFamily && !post.friend.isFamily) {
          continue
        }
        newPosts.push(post)
      }

      // Sort the filtered posts by the date:
      newPosts.sort((post1, post2) => {
        return post2.date - post1.date
      })

      return newPosts
    },
  },
}
