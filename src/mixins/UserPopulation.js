import User from '@/vuex-orm_models/UserModel.js'

export const UserPopulation = {
  methods: {
    addUser(user) {
      User.insert({ data: user })
    },
  },
  computed: {
    user() {
      return User.all()[0] // There is only one user, so we return the first
    },
    isUserLoggedIn() {
      return this.user
    },
    userName() {
      return this.user.name
    },
    userFirstname() {
      return this.userName.split(' ')[0]
    },
    userTestData() {
      return {
        imageSource:
          'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-1/c0.7.200.200a/p200x200/131309758_1238338269932761_3028502065604189970_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=zmBYIGK3Y7wAX-FWpkc&_nc_ht=scontent.fapa1-1.fna&oh=00_AT-YENhNoopOiXwBQP-i24XqKB_DmKd_94wQw58gx49yVg&oe=61F1BA3F',
        name: 'Anson Savage',
      }
    },
  },
}
