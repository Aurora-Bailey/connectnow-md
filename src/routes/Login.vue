<template>
  <div class="login page">



    <md-layout md-gutter>
      <md-layout md-flex-medium="33" md-flex-small="20" md-hide-xsmall></md-layout>
      <md-layout md-flex-medium="33" md-flex-small="60" md-flex-xsmall="100">


        <md-whiteframe class="login-box">

          <md-toolbar class="login-box-header md-theme-default md-large">
            <md-icon class="md-size-3x">account_circle</md-icon>
          </md-toolbar>


          <md-tabs md-fixed>
            <md-tab md-label="Login">
              <form novalidate >
                <md-input-container>
                  <md-icon>perm_identity</md-icon>
                  <label>Email / Username</label>
                  <md-input type="text"></md-input>
                </md-input-container>

                <md-input-container>
                  <md-icon>lock_outline</md-icon>
                  <label>Password</label>
                  <md-input type="password"></md-input>
                </md-input-container>
              </form>
              <md-button class="md-default">Cancel</md-button>
              <span style="flex: 1"></span>
              <md-button class="login-submit-button md-primary md-raised">Log In</md-button>
            </md-tab>

            <md-tab md-label="Signup">
              <form novalidate >
                <md-subheader>Personal Information</md-subheader>

                <md-input-container>
                  <md-icon>face</md-icon>
                  <label>First Name</label>
                  <md-input type="text"></md-input>
                </md-input-container>

                <md-input-container>
                  <md-icon>face</md-icon>
                  <label>Last Name</label>
                  <md-input type="text"></md-input>
                </md-input-container>

                <md-input-container>
                  <md-icon>email</md-icon>
                  <label>Email Address</label>
                  <md-input type="email"></md-input>
                </md-input-container>

                <md-input-container>
                  <md-icon>my_location</md-icon>
                  <label>Zip Code</label>
                  <md-input type="number"></md-input>
                </md-input-container>

                <div class="field-group">
                  <md-input-container>
                    <md-icon>cake</md-icon>
                    <label for="month">Month</label>
                    <md-select name="month" id="signup-month" v-model="month">
                      <md-option value="fight_club">Fight Club</md-option>
                      <md-option value="godfather">Godfather</md-option>
                      <md-option value="godfather_ii">Godfather II</md-option>
                      <md-option value="godfather_iii">Godfather III</md-option>
                      <md-option value="godfellas">Godfellas</md-option>
                      <md-option value="pulp_fiction">Pulp Fiction</md-option>
                      <md-option value="scarface">Scarface</md-option>
                    </md-select>
                  </md-input-container>

                  <md-input-container>
                    <label for="day">Day</label>
                    <md-select name="day" id="day" v-model="day">
                      <md-option value="australia">Australia</md-option>
                      <md-option value="brazil">Brazil</md-option>
                      <md-option value="japan">Japan</md-option>
                      <md-option value="united_states">United States</md-option>
                    </md-select>
                  </md-input-container>

                  <md-input-container>
                    <label for="year">Year</label>
                    <md-select name="year" id="year" v-model="year">
                      <md-option value="arial">Arial</md-option>
                      <md-option value="calibri">Calibri</md-option>
                      <md-option value="cambria">Cambria</md-option>
                      <md-option value="comic_sans">Comic Sans</md-option>
                      <md-option value="consolas">Consolas</md-option>
                      <md-option value="courier">Courier</md-option>
                      <md-option value="droid_sans">Droid Sans</md-option>
                      <md-option value="georgia">Georgia</md-option>
                      <md-option value="helvetica">Helvetica</md-option>
                      <md-option value="impact">Impact</md-option>
                      <md-option value="roboto">Roboto</md-option>
                      <md-option value="segoe_ui">Segoe UI</md-option>
                      <md-option value="times_new_roman">Times New Roman</md-option>
                      <md-option value="ubuntu">Ubuntu</md-option>
                      <md-option value="verdana">Verdana</md-option>
                    </md-select>
                  </md-input-container>
                </div>

                <md-subheader>Account Information</md-subheader>

                <md-input-container>
                  <md-icon>perm_identity</md-icon>
                  <label>Username</label>
                  <md-input type="text"></md-input>
                </md-input-container>

                <md-input-container>
                  <md-icon>lock_outline</md-icon>
                  <label>Password</label>
                  <md-input type="password"></md-input>
                </md-input-container>

                <md-input-container>
                  <md-icon>lock_outline</md-icon>
                  <label>Confirm Password</label>
                  <md-input type="password"></md-input>
                </md-input-container>
              </form>
              <md-button class="md-default">Cancel</md-button>
              <span style="flex: 1"></span>
              <md-button class="login-submit-button md-primary md-raised">Sign Up</md-button>
            </md-tab>
          </md-tabs>






        </md-whiteframe>


      </md-layout>
      <md-layout md-flex-medium="33" md-flex-small="20" md-hide-xsmall></md-layout>
    </md-layout>

  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      month: "",
      day: "",
      year: ""
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
.login-submit-button {
  float: right
}
.field-group {
  display: flex;
}
.field-group .md-select {
  min-width: 0;
  margin-left: 12px
}
</style>
