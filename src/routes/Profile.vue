<template>
  <div class="profile page">
    <div class="narrow-wrapper-840">
      <md-layout md-gutter="16">
        <md-layout style="flex: 1;" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
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
        <md-layout style="flex: 1;" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
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
        <md-layout style="flex: 1;" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
          <md-whiteframe  class="container-module">
            <md-toolbar class="md-dense">
              <h2 class="md-title toolbar-title">Short Bio</h2>
              <!-- <md-button v-if="editBioMode" class="md-icon-button" v-on:click="editBioMode=!editBioMode">
                <md-icon>delete_forever</md-icon>
              </md-button> -->
              <md-button v-if="editBioMode" class="md-icon-button" v-on:click="editBioMode=!editBioMode">
                <md-icon>check_circle</md-icon>
              </md-button>
              <md-button v-if="!editBioMode" class="md-icon-button" v-on:click="editBioMode=!editBioMode">
                <md-icon>edit</md-icon>
              </md-button>
            </md-toolbar>
            <div class="module-content short-bio" v-if="!editBioMode">
              <h2 class="md-title">{{tagline}}</h2>
              <p>{{bio}}</p>
            </div>
            <div class="module-content" v-if="editBioMode">
              <form novalidate @submit.stop.prevent="">
                <md-input-container>
                  <label>Tagline</label>
                  <md-input v-model="tagline" maxlength="60"></md-input>
                </md-input-container>
                <md-input-container>
                  <label>Short Bio</label>
                  <md-textarea v-model="bio" style="min-height: 240px; max-height: none;"></md-textarea>
                </md-input-container>
              </form>
            </div>
          </md-whiteframe>
        </md-layout>
        <md-layout style="flex: 1;" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
          <md-whiteframe  class="container-module">
            <md-toolbar class="md-dense">
              <h2 class="md-title toolbar-title">Tags</h2>
              <!-- <md-button v-if="editTagMode" class="md-icon-button" v-on:click="editTagMode=!editTagMode">
                <md-icon>delete_forever</md-icon>
              </md-button> -->
              <md-button v-if="editTagMode" class="md-icon-button" v-on:click="editTagMode=!editTagMode">
                <md-icon>check_circle</md-icon>
              </md-button>
              <md-button v-if="!editTagMode" class="md-icon-button" v-on:click="editTagMode=!editTagMode">
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
                <div class="chip" v-for="(tag, index) in tags" :class="{'buttons-visible': editTagMode, 'chip-novice': tag.h === 1, 'chip-advanced': tag.h === 2, 'chip-expert': tag.h === 3}">
                  <span class="chip-text">{{tag.v}}</span>
                  <span class="chip-highlight-text" v-if="tag.h === 1">&nbsp;(Novice)</span>
                  <span class="chip-highlight-text" v-if="tag.h === 2">&nbsp;(Advanced)</span>
                  <span class="chip-highlight-text" v-if="tag.h === 3">&nbsp;(Expert)</span>
                  <md-button class="chip-button md-icon-button" v-on:click="highlightTag(index)">
                    <md-icon>star</md-icon>
                  </md-button>
                  <md-button class="chip-button md-icon-button" v-on:click="removeTag(index)">
                    <md-icon>cancel</md-icon>
                  </md-button>
                </div>
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
      editBioMode: false,
      editTagMode: false,
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tagline: 'Self Title or Tagline.',
      enterTag: '',
      tags: [{"v":"Budapest","h":3},{"v":"Oslo","h":3},{"v":"Stockholm","h":2},{"v":"Rome","h":1},{"v":"Dublin","h":1},{"v":"Riga","h":0},{"v":"Amsterdam","h":0},{"v":"Madrid","h":0},{"v":"Barcelona","h":0},{"v":"London","h":0},{"v":"Prague","h":0},{"v":"Vienna","h":0},{"v":"Lisbon","h":0},{"v":"Copenhagen","h":0},{"v":"Athens","h":0},{"v":"Munich","h":0},{"v":"Bucharest","h":0},{"v":"Berlin","h":0},{"v":"Helsinki","h":0},{"v":"Tallinn","h":0},{"v":"Zagreb","h":0},{"v":"Paris","h":0}]
    }
  },
  methods: {
    removeTag: function (index) {
      console.log('removing tag ' + index)
      this.tags.splice(index, 1)
    },
    addTag: function () {
      if (this.enterTag.replace(/\W/g, '') !== '') this.tags.push({v: this.enterTag, h: 0})
      this.enterTag = ''
    },
    highlightTag: function (index) {
      console.log(index)
      this.tags[index].h = (this.tags[index].h + 1) % 4
      this.tags.sort(function (a, b) {
        if (a.h > b.h) return -1
        if (a.h < b.h) return 1
        return 0
      })
      console.log(JSON.stringify(this.tags))
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
    white-space: pre-wrap;
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
