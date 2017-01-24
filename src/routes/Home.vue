<template>
  <div class="home page no-sidebar no-padding" v-on:scroll="captureScroll">


    <div class="picture-box like-minded-people">
      <h2>FIND LIKE-MINDED PEOPLE</h2>
      <p>WANT TO CONNECT WITH PEOPLE WHO SHARE YOUR PASSIONS AND INTERESTS IN LIFE? WE DO, TOO. THAT'S WHY WE CREATED CONNECT NOW — A PLATFORM FOR CONNECTING TO PEOPLE WHO LIKE WHAT YOU LIKE AND WANT TO MEET, HANG OUT WITH, OR JUST TALK TO SOMEONE LIKE YOU.</p>
    </div>

    <div class="content-box sign-up-process">
      <md-layout>
        <md-layout class="mini-content-box" md-flex-large="33" md-flex-medium="50" md-flex-small="50" md-flex-xsmall="100">
          <md-icon class="md-size-2x">person</md-icon>
          <div class="mini-info-box">
            <h2 class="info-title">Sign up</h2>
            <hr/>
            <p class="info"><router-link to="/login/signup">Sign up</router-link> for an account.</p>
          </div>
        </md-layout>
        <md-layout class="mini-content-box" md-flex-large="33" md-flex-medium="50" md-flex-small="50" md-flex-xsmall="100">
          <md-icon class="md-size-2x">account_box</md-icon>
          <div class="mini-info-box">
            <h2 class="info-title">Create a profile</h2>
            <hr/>
            <p class="info">Enter your basic information. Don't worry, no one will see anything except your first name and general location</p>
          </div>
        </md-layout>
        <md-layout class="mini-content-box" md-flex-large="33" md-flex-medium="50" md-flex-small="50" md-flex-xsmall="100">
          <md-icon class="md-size-2x">rowing</md-icon>
          <div class="mini-info-box">
            <h2 class="info-title">Add your interests</h2>
            <hr/>
            <p class="info">Add a list of things that you're interested in connecting for — this could be anything from brands you like, activities you're interested in, skills you know or want to learn, or ideas that excite you.</p>
          </div>
        </md-layout>
        <md-layout class="mini-content-box" md-flex-large="33" md-flex-medium="50" md-flex-small="50" md-flex-xsmall="100">
          <md-icon class="md-size-2x">equalizer</md-icon>
          <div class="mini-info-box">
            <h2 class="info-title">Share Your Proficiency</h2>
            <hr/>
            <p class="info">Let people know your level of skill or knowledge on topics — find people to learn from or share your knowledge with people who are just learning.</p>
          </div>
        </md-layout>
        <md-layout class="mini-content-box" md-flex-large="33" md-flex-medium="50" md-flex-small="50" md-flex-xsmall="100">
          <md-icon class="md-size-2x">compare_arrows</md-icon>
          <div class="mini-info-box">
            <h2 class="info-title">Connect!</h2>
            <hr/>
            <p class="info">Search for matches based on a variety of different filters — find the right people at the right times and have a great time in the process!</p>
          </div>
        </md-layout>
        <md-layout class="mini-content-box" md-flex-large="33" md-flex-medium="50" md-flex-small="50" md-flex-xsmall="100">
          <md-icon class="md-size-2x">groups</md-icon>
          <div class="mini-info-box">
            <h2 class="info-title">Groups</h2>
            <hr/>
            <p class="info">Form groups with your new friends and contacts — collaborating, meeting up, and interacting has never been this easy.</p>
          </div>
        </md-layout>
      </md-layout>
    </div>

    <div class="picture-box learn-from-the-greats">
      <h2>WANT TO LEARN FROM THE GREATS?</h2>
      <p>CONNECT TO PROS AND BEGINNERS ALIKE, SHARE YOUR KNOWLEDGE, AND LEARN FROM OTHER PEOPLE BY SHARING IDEAS, IMAGES, AND FILES THROUGH OUR PLATFORM. TELL US YOUR LEVEL OF SKILL IN A PARTICULAR AREA SO WE CAN HELP YOU CONNECT TO THE RIGHT INDIVIDUALS FOR WHATEVER YOU'RE TRYING TO DO.</p>
    </div>

    <div class="content-box about-connect-now">
      <md-layout>
        <md-layout class="mini-content-box" md-flex-large="50" md-flex-medium="50" md-flex-small="100" md-flex-xsmall="100">
          <div>
            <md-subheader class="md-primary large-header">About Connect Now</md-subheader>
            <p>We are a small team that believes that it's time for the way we connect to people to catch up with technology.</p>
            <p>Connect Now provides you with a platform that will allow you to connect to the right people so that you can spend more time doing what you want to do with people who are going to appreciate the same activities and less time wishing you knew more people that were into the same things as you. See an example to the left of how an example profile might highlight some interests</p>
          </div>
        </md-layout>
        <md-layout class="mini-content-box" md-flex-large="50" md-flex-medium="50" md-flex-small="100" md-flex-xsmall="100">
          <div style="flex: 1">
            <div class="proficiency-container">
              <div class="proficiency-header"><span class="proficiency-title">iPhone 7</span> <span class="proficiency-number">10/10</span></div>
              <md-progress :md-progress="100"></md-progress>
            </div>
            <div class="proficiency-container">
              <div class="proficiency-header"><span class="proficiency-title">Violin</span> <span class="proficiency-number">8/10</span></div>
              <md-progress :md-progress="80"></md-progress>
            </div>
            <div class="proficiency-container">
              <div class="proficiency-header"><span class="proficiency-title">Soccer</span> <span class="proficiency-number">6/10</span></div>
              <md-progress :md-progress="60"></md-progress>
            </div>
            <div class="proficiency-container">
              <div class="proficiency-header"><span class="proficiency-title">Car Mods</span> <span class="proficiency-number">4/10</span></div>
              <md-progress :md-progress="40"></md-progress>
            </div>
          </div>
        </md-layout>
      </md-layout>
    </div>

    <div class="footer">
      Copyright © 2016 Connect Now
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  methods: {
    captureScroll: function (e) {
      this.$root.$data.scroll = e.target.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
.content-box {
  padding: 12vw;

  @media (max-width: 600px) {
    padding: 12px;
  }
  @media (max-width: 960px) {
    padding: 6vw;
  }
}
.picture-box {
  text-align: center;
  font-size: 1.7vw;
  line-height: 2.6vw;
  padding: 12vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
}
.sign-up-process {
  .md-icon {
    margin: 0;
  }
}
.mini-content-box {
  padding: 12px 24px;

  @media (max-width: 960px) {
    padding: 12px;
  }
}
.mini-info-box {
  flex:1;
  margin-left: 24px;
}
.like-minded-people {
  background-image: url(../assets/like-minded-people.jpg);
}
.learn-from-the-greats {
  background-image: url(../assets/learn-from-the-greats.jpg);
}
.about-connect-now {
  .large-header {
    font-size: 36px;
    line-height: 42px;
    font-weight: normal;
    padding: 0;
  }
}
.proficiency-container {
  padding: 16px 0 0;

  .proficiency-header {
    text-align: center;
    margin: 8px 0;
    position: relative;
  }
  .proficiency-title {
    position: absolute;
    left: 0;
    top: 0;
  }
  .proficiency-number {
    font-weight: bold;
  }
}
.footer {
  text-align: center;
  padding: 24px;
}
</style>
