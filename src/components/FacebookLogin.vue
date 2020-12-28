<template>
  <VFacebookLogin
    v-model="connection"
    :app-id="facebookAppId"
    :login-options="facebookLoginOptions"
    @sdk-init="facebookSDKInitialized"
    @login="userLoggedIn"
    @logout="userLoggedOut"
  >
  </VFacebookLogin>
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
    ...mapActions(['setSDK', 'login', 'logout', 'fetchGroups']),
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
        const { accessToken: token, userID: userId } = response.authResponse
        this.login({ token, userId }).then(() => this.$emit('user-logged-in'))
      }
    },
    userLoggedOut(response) {
      if (response) {
        this.logout().then(() => this.$emit('user-logged-out'))
      }
    }
  },
  components: {
    VFacebookLogin
  }
}
</script>
