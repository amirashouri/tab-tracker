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
import Panel from '@/components/globals/Panel'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>

</style>
