<template>
    <panel title="Tab">
        <textarea
            readonly
            v-model="song.tab">
        </textarea>
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
  }
}
</script>

<style>
textarea {
  width: 100%;
  height: 600px;
  border-style: none;
  border-color: transparent;
  font-family: monospace;
  border: none;
  overflow: auto;
  padding: 40px;
}
</style>
