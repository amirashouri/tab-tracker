<template>
  <v-layout>
    <v-flex xs6>
      <songs-bookmarks v-if="isLogedIn" />
      <recently-viewed-songs v-if="isLogedIn" class="mt-2" />
    </v-flex>
    <v-flex :class="{xs12: !isLogedIn, xs6: isisLogedIn}" class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import {mapState} from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isLogedIn'
    ])
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
