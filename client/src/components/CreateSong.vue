<template>
  <v-layout >
    <v-flex xs4>
        <panel title="Song Metadata">
            <form
                name="tab-tracker-form"
                autocomplete="off">
                <v-text-field
                    label="Title"
                    v-model="song.title"
                    required
                    :rules="[required]"
                ></v-text-field>
                <v-text-field
                    label="Artist"
                    v-model="song.artist"
                    required
                    :rules="[required]"
                ></v-text-field>
                <v-text-field
                    label="Genre"
                    v-model="song.genre"
                    required
                    :rules="[required]"
                ></v-text-field>
                <v-text-field
                    label="Album"
                    v-model="song.album"
                    required
                    :rules="[required]"
                ></v-text-field>
                <v-text-field
                    label="Album Image Url"
                    v-model="song.albumImageUrl"
                    required
                    :rules="[required]"
                ></v-text-field>
                <v-text-field
                    label="Youtube Video Id"
                    v-model="song.youtubeId"
                    required
                    :rules="[required]"
                ></v-text-field>
            </form>
        </panel>
    </v-flex>

    <v-flex xs8>
        <panel title="Song Structure" class="ml-2">
            <v-text-field
              label="Tab"
              v-model="song.tab"
              multiline
              required
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              label="Lyrics"
              v-model="song.lyrics"
              required
              :rules="[required]"
              multiline
            ></v-text-field>
        </panel>
        <div class="danger-alert" v-if="error">
            {{error}}
        </div>
        <v-btn
          dark
          class="cyan"
          @click="create">
          Create Song
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        album: null,
        genre: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'required.',
      error: null
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFeildsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFeildsFilledIn) {
        this.error = 'Please fill All the required fields!'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
