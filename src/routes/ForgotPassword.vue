<template>
  <div class="forgot-password page no-sidebar">
    <md-layout md-gutter>
      <md-layout md-flex-large="33" md-flex-medium="25" md-flex-small="20" md-hide-xsmall></md-layout>
      <md-layout md-flex-large="33" md-flex-medium="50" md-flex-small="60" md-flex-xsmall="100">
        <md-whiteframe class="forgot-password-box">
          <md-toolbar class="forgot-password-box-header md-theme-default md-large">
            <md-icon class="md-size-3x">lock_outline</md-icon>
          </md-toolbar>

          <div class="padded-content">
            <form validate id="login-form" @submit.prevent="sendReset()" v-if="!sent">
              <md-subheader>Send a password reset email.</md-subheader>
              <md-input-container>
                <md-icon>mail</md-icon>
                <label>Email Address</label>
                <md-input required type="text" v-model="email"></md-input>
              </md-input-container>
            </form>

            <div class="response" v-if="sent">
              <md-icon class="md-size-3x md-primary" v-if="success">check_circle</md-icon>
              <md-icon class="md-size-3x md-warn" v-if="!success">cancel</md-icon>
              <p>{{message}}</p>
            </div>

            <div class="button-bar">
              <md-button @click="back()">Back</md-button>
              <span style="flex: 1"></span>
              <md-button class="md-primary md-raised" @click="sendReset()" v-if="!sent">Send</md-button>
            </div>
          </div>
        </md-whiteframe>

      </md-layout>
      <md-layout md-flex-large="33" md-flex-medium="25" md-flex-small="20" md-hide-xsmall></md-layout>
    </md-layout>
  </div>
</template>
<script>
export default {
  name: 'forgot-password',
  data () {
    return {
      email: "",
      sent: false,
      success: true,
      message: ''
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    sendReset: function (e) {
      if (this.sent) return false

      this.$api('forgot_password', this.email, (data) => {
        // Console log any errors
        if (data.error) { console.log(data); return false }

        this.sent = true
        this.success = data.success
        this.message = data.message
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.forgot-password {
}
.forgot-password-box {
  width: 100%;
}
.forgot-password-box-header {
  text-align: center;
}
.button-bar {
  display: flex;
}
.padded-content {
  padding: 16px
}
.response {
  text-align: center;
}
.sent-to-email {
  color: green;
}
</style>
