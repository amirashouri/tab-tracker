<template >
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
        <v-btn
            dark
            class="cyan"
            :to="{
              name: 'edit-song',
              params () {
                return {
                  songId : song.id
                }
              }
            }">
          Edit
        </v-btn>

        <v-btn
            v-if="isLogedIn && !bookmark"
            dark
            class="cyan"
            @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn
            v-if="isLogedIn && bookmark"
            dark
            class="cyan"
            @click="unsetAsBookmark">
          Unset As Bookmark
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isLogedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isLogedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
        console.log('the watch method:', this.isLogedIn, this.bookmark)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style >
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 60%;
  margin: 0 auto;
}
</style>
