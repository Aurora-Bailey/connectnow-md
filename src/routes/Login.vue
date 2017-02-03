<template>
  <div class="login page no-sidebar">
    <div class="narrow-wrapper-480">
      <md-whiteframe class="login-box">
        <md-toolbar class="login-box-header md-theme-default md-large">
          <md-icon class="md-size-3x">account_circle</md-icon>
        </md-toolbar>

        <md-tabs md-centered md-theme="default-dark">
          <md-tab md-label="Sign in">
            <form validate id="login-form" @submit.prevent="sendLogin()">
              <md-input-container>
                <md-icon>mail</md-icon>
                <label>Email</label>
                <md-input required type="text" v-model="login.email"></md-input>
              </md-input-container>

              <md-input-container>
                <md-icon>lock_outline</md-icon>
                <label>Password</label>
                <md-input required type="password" v-model="login.password"></md-input>
              </md-input-container>
            </form>
            <div class="button-bar">
              <router-link to="/forgot_password" class="md-primary" tag="md-button">Forgot Password?</router-link>
              <!-- <span style="flex: 1"></span>
              <md-checkbox name="stay-signed-in">Stay Signed in</md-checkbox> -->
            </div>
            <div class="button-bar">
              <router-link to="/" class="md-default" tag="md-button">Cancel</router-link>
              <span style="flex: 1"></span>
              <md-button class="md-primary md-raised" @click="sendLogin()">Sign In</md-button>
            </div>
          </md-tab>

          <md-tab md-label="Create Account" :md-active="$route.params.tab === 'signup'">
            <form validate id="signup-form" @submit.prevent="sendSignup()">

              <md-subheader>Account Information</md-subheader>

              <md-input-container>
                <md-icon>email</md-icon>
                <label>Email Address</label>
                <md-input required type="email" v-model="signup.email"></md-input>
              </md-input-container>

              <md-input-container>
                <md-icon>perm_identity</md-icon>
                <label>Display Name (optional)</label>
                <md-input type="text" v-model="signup.display_name"></md-input>
              </md-input-container>

              <md-input-container>
                <md-icon>lock_outline</md-icon>
                <label>Password</label>
                <md-input required type="password"  v-model="signup.password"></md-input>
              </md-input-container>

              <md-input-container>
                <md-icon>lock_outline</md-icon>
                <label>Confirm Password</label>
                <md-input required type="password" v-model="signup.password_confirm"></md-input>
              </md-input-container>

              <md-subheader>Personal Information</md-subheader>

              <md-input-container>
                <md-icon>face</md-icon>
                <label>First Name</label>
                <md-input required type="text" v-model="signup.first_name"></md-input>
              </md-input-container>

              <md-input-container>
                <md-icon>face</md-icon>
                <label>Last Name</label>
                <md-input required type="text" v-model="signup.last_name"></md-input>
              </md-input-container>

              <md-input-container>
                <md-icon>my_location</md-icon>
                <label>Zip Code</label>
                <md-input required type="number" v-model="signup.zip_code"></md-input>
              </md-input-container>

              <div class="field-group">
                <md-icon>cake</md-icon>
                <md-input-container>
                  <label for="month">Month</label>
                  <md-select required name="month" id="signup-month" v-model="signup.birth_month">
                    <md-option value="1">Jan</md-option>
                    <md-option value="2">Feb</md-option>
                    <md-option value="3">Mar</md-option>
                    <md-option value="4">Apr</md-option>
                    <md-option value="5">May</md-option>
                    <md-option value="6">Jun</md-option>
                    <md-option value="7">Jul</md-option>
                    <md-option value="8">Aug</md-option>
                    <md-option value="9">Sep</md-option>
                    <md-option value="10">Oct</md-option>
                    <md-option value="11">Nov</md-option>
                    <md-option value="12">Dec</md-option>
                  </md-select>
                </md-input-container>

                <md-input-container>
                  <label for="day">Day</label>
                  <md-select required name="day" id="day" v-model="signup.birth_day">
                    <md-option :value="index" v-for="index in 32">{{index}}</md-option>
                  </md-select>
                </md-input-container>

                <md-input-container>
                  <label for="year">Year</label>
                  <md-select required name="year" id="year" v-model="signup.birth_year">
                    <md-option :value="new Date().getFullYear() - index - 12" v-for="index in 120">{{new Date().getFullYear() - index - 12}}</md-option>
                  </md-select>
                </md-input-container>
              </div>
              <md-input-container>
                <md-icon>wc</md-icon>
                <div class="radio-container">
                  <md-radio required v-model="signup.sex" name="signup-sex" class="md-primary" md-value="0">Female</md-radio>
                  <md-radio required v-model="signup.sex" name="signup-sex" class="md-primary" md-value="1">Male</md-radio>
                </div>
              </md-input-container>
            </form>
            <div class="legal">
              <p>By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use. You may receive SMS Notifications from Facebook and can opt out at any time.</p>
            </div>
            <div class="button-bar">
              <router-link to="/" class="md-default" tag="md-button">Cancel</router-link>
              <span style="flex: 1"></span>
              <md-button class="md-primary md-raised" @click="sendSignup()">Create Account</md-button>
            </div>
          </md-tab>
        </md-tabs>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      login: {
        email: "",
        password: ""
      },
      signup: {
        email: "",
        display_name: "",
        password: "",
        password_confirm: "",
        first_name: "",
        last_name: "",
        zip_code: "",
        birth_month: "",
        birth_day: "",
        birth_year: "",
        sex: ""
      }
    }
  },
  methods: {
    sendLogin: function (e) {

      this.$api('login', this.login, (data) => {
        // Console log any errors
        if (data.error) { console.log(data); return false }

        if (data.success) {
          window.localStorage.cn_auth = data.token
          this.$router.replace({ path: '/profile'})
        }
      })
    },
    sendSignup: function (e) {

      this.$api('signup', this.signup, (data) => {
        // Console log any errors
        if (data.error) { console.log(data); return false }

        if (data.success) {
          window.localStorage.cn_auth = data.token
          this.$router.replace({ path: '/profile'})
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
}
.login-box {
  width: 100%;
}
.login-box-header {
  text-align: center;
}
.forgot-password {
  padding: 16px
}
.field-group {
  display: flex;

  .md-icon {
    margin: 20px auto 4px;
    color: rgba(0, 0, 0, 0.54);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .md-input-container {
    flex: 1;
    margin-left: 12px
  }

  .md-select {
    min-width: 0;
  }
}
.legal {
  padding: 24px;
  font-size: 12px;
}
.button-bar {
  display: flex;
}
</style>

<!-- Non scoped css -->
<style lang="scss">
#signup-form {
  .radio-container {
    flex:1;
  }
  .md-radio {
    margin: 8px 8px 8px 12px;
  }
  .md-radio-label {
    position: relative;
    top: 0;
  }
}
</style>
