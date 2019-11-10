<template>
  <v-layout column>
    <v-flex xs6 >
      <panel title="Songs">
        <v-btn
          slot="action"
          class="cyan accent-2"
          fab
          light
          absolute
          middle
          @click="navigateTo({name: 'songs-create'})"
          right>
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id" class="song">
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
                @click="navigateTo({name: 'song', params: {songId: song.id}})">
                View
              </v-btn>
            </v-flex>
            <v-flex s6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/globals/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: [
        {
          title: 'Float On',
          artist: 'Modest mouse',
          album: 'Good News For People Who',
          albumImageUrl: 'https://en.wikipedia.org/wiki/Float_On_(Modest_Mouse_song)#/media/File:Modest_Mouse-Float_on-_album_cover.jpg'
        }
      ]
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
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
