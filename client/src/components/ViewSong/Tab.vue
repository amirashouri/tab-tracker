<template>
    <panel title="Tab">
        <textarea
            readonly
            v-model="song.tab">
        </textarea>
    </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
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
