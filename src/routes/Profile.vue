<template>
  <div class="profile page">
    <div class="narrow-wrapper-840">
      <md-layout md-gutter="16">
        <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
          <md-whiteframe class="container-module">
            <md-toolbar class="md-dense">
              <h2 class="md-title toolbar-title">Profile Picture</h2>
              <md-button class="md-icon-button">
                <md-icon>edit</md-icon>
              </md-button>
            </md-toolbar>
            <div class="module-content large-profile-picture">
              <img src="https://placeimg.com/300/300/people/3" alt="People">
            </div>
          </md-whiteframe>
        </md-layout>
        <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
          <md-whiteframe  class="container-module">
            <md-toolbar class="md-dense">
              <h2 class="md-title toolbar-title">Account</h2>
            </md-toolbar>
            <div class="module-content">

              <md-list>
                <md-list-item>
                  <div class="md-list-text-container">
                    <span>Name</span>
                    <span>Robert Smith</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>edit</md-icon>
                  </md-button>
                </md-list-item>
                <md-list-item>
                  <div class="md-list-text-container">
                    <span>Display Name</span>
                    <span>Bob Smith</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>edit</md-icon>
                  </md-button>
                </md-list-item>
                <md-list-item>
                  <div class="md-list-text-container">
                    <span>Email</span>
                    <span>bob.smith@gmail.com</span>
                  </div>
                </md-list-item>
                <md-list-item>
                  <div class="md-list-text-container">
                    <span>Age</span>
                    <span>36</span>
                  </div>
                </md-list-item>
                <md-list-item>
                  <div class="md-list-text-container">
                    <span>City</span>
                    <span>Belgium, Brussels</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>edit</md-icon>
                  </md-button>
                </md-list-item>
                <md-list-item>
                  <div class="md-list-text-container">
                    <span>Password</span>
                    <span>************</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>edit</md-icon>
                  </md-button>
                </md-list-item>
              </md-list>


            </div>
          </md-whiteframe>
        </md-layout>
        <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
          <md-whiteframe  class="container-module">
            <md-toolbar class="md-dense">
              <h2 class="md-title toolbar-title">Short Bio</h2>
              <md-button class="md-icon-button">
                <md-icon>edit</md-icon>
              </md-button>
            </md-toolbar>
            <div class="module-content short-bio">
              <h2 class="md-title">Tagline Lorem Ipsum!</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </md-whiteframe>
        </md-layout>
        <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
          <md-whiteframe  class="container-module">
            <md-toolbar class="md-dense">
              <h2 class="md-title toolbar-title">Tags</h2>
              <md-button class="md-icon-button" v-on:click="editTagMode=!editTagMode">
                <md-icon>edit</md-icon>
              </md-button>
            </md-toolbar>
            <div class="module-content large-profile-picture">
              <form v-if="editTagMode" novalidate @submit.stop.prevent="addTag()">
                <md-input-container>
                  <label>Enter Tag</label>
                  <md-input v-model="enterTag" type="text"></md-input>
                  <md-button class="md-icon-button md-primary" v-on:click="addTag()">
                    <md-icon>arrow_forward</md-icon>
                  </md-button>
                </md-input-container>
              </form>
              <div class="tag-chips">
                <md-chip :md-deletable="editTagMode" v-for="(tag, index) in tags" v-on:delete="removeTag(index)" :class="{'chip-highlight': tag.h}">
                  <span v-on:click="highlightTag(index)">{{tag.v}} </span><span v-if="tag.h">(Highlight)</span>
                  <md-button class="md-icon-button md-dense">
                    <md-icon>star</md-icon>
                  </md-button>
                </md-chip>
              </div>
            </div>
          </md-whiteframe>
        </md-layout>
      </md-layout>

    </div>
  </div>
</template>
<script>
export default {
  name: 'profile',
  data () {
    return {
      editTagMode: false,
      enterTag: '',
      tags: []
    }
  },
  methods: {
    removeTag: function (index) {
      this.tags.splice(index, 1)
    },
    addTag: function () {
      if (this.enterTag.replace(/\W/g, '') !== '') this.tags.push({v: this.enterTag, h: false})
      this.enterTag = ''
    },
    highlightTag: function (index) {
      console.log(index)
      this.tags[index].h = !this.tags[index].h
    },
    asdf: function () {
      console.log('asdf')
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
}

.container-module {
  flex: 1;
  margin-bottom: 16px;
  max-width: 100%;
  overflow: auto;

  .module-content {
    padding: 16px;
  }

  .toolbar-title {
    flex: 1;
  }
}

.large-profile-picture {
  img {
    max-width: 100%;
    display: block;
    margin: auto;
    border-radius: 200px;
  }
}

.container-module .short-bio {
  padding: 24px;

  p {
    font-size: 18px;
    text-indent: 32px;
  }
}
.tag-chips {
  .md-chip {
    margin: 2px;

    &.chip-highlight {
      background-color: red;
      color: white;
      &:hover {
        background-color: pink;
        color: white;
      }
    }
  }
}

</style>
