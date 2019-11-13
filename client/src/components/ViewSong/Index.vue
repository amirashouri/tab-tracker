<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId" class="ml-2" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <tab :song="song" class="mt-2"/>
      </v-flex>
      <v-flex xs6>
        <lyrics :song="song" class="ml-2 mt-2"/>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'user',
      'isLogedIn',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (this.isLogedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>

</style>
