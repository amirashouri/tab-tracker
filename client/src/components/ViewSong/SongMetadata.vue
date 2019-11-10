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
                    @click="navigateTo({name: 'edit-song', params: {songId: song.id}})">
                Edit
              </v-btn>
              </v-flex>
              <v-flex s6>
                <img class="album-image" :src="song.albumImageUrl" />
                <br>
                {{song.album}}
              </v-flex>
            </v-layout>
        </panel>
</template>

<script>
import Panel from '@/components/globals/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
