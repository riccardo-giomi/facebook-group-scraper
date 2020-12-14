<template>
  <v-facebook-login
    v-model="connection"
    :app-id="facebookAppId"
    :login-options="facebookLoginOptions"
    @sdk-init="facebookSDKInitialized"
    @login="userLoggedIn"
    @logout="userLoggedOut"
  ></v-facebook-login>
</template>

<script>
import facebook from '@/config/facebook'
import VFacebookLogin from 'vue-facebook-login-component'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FacebookLogin',
  data() {
    return {
      connection: {},
      facebookAppId: facebook.appId,
      facebookLoginOptions: facebook.loginOptions
    }
  },
  computed: mapGetters({ loggedIn: 'getLoggedIn' }),
  methods: {
    ...mapActions(['setSDK', 'setLoginStatus', 'fetchGroups']),
    facebookSDKInitialized({ FB }) {
      FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          this.userLoggedIn(response)
        }
      })
      this.setSDK(FB)
    },
    userLoggedIn(response) {
      if (response && response.status === 'connected') {
        const authResponse = response.authResponse
        this.setLoginStatus({
          loggedIn: true,
          token: authResponse.accessToken,
          userId: authResponse.userID
        })
        this.fetchGroups()
      }
    },
    userLoggedOut(response) {
      if (response && response.status !== 'connected') {
        this.setLoginStatus({
          loggedIn: false,
          token: '',
          userId: ''
        })
      }
    }
  },
  components: {
    VFacebookLogin
  }
}
</script>
