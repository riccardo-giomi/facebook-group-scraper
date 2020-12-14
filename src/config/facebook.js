export default {
  appId: String(process.env.VUE_APP_FACEBOOK_APP_ID),
  loginOptions: {
    scope: 'email,groups_access_member_info'
  }
}
