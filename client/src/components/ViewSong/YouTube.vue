<template >
    <panel title="Youtube Video">
        <youtube
            :videoId="youtubeId"
            :player-width="700"
            :player-height="270">
        </youtube>
    </panel>
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    VueYouTubeEmbed
  }
}
</script>

<style >
</style>
