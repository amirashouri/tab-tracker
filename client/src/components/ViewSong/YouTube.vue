<template >
    <panel tiele="Youtube Video">
        <youtube
            :videoId="youtubeId"
            :player-width="700"
            :player-height="270">
        </youtube>
    </panel>
</template>

<script>
import Panel from '@/components/globals/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel,
    VueYouTubeEmbed
  }
}
</script>

<style >
</style>
