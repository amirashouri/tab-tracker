<template>
    <panel title="Bookmarks">
        <v-data-table
         :headers="headers"
         :items="bookmarks">
            <template slot="items" slot-scope="props">
                <td class="text-xs-right">
                    {{props.item.title}}
                </td>

                <td class="text-xs-right">
                    {{props.item.artist}}
                </td>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksServce from '../../services/BookmarksService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      bookmarks: [],
      options: {
        sortBy: 'date',
        descending: true
      }
    }
  },
  computed: {
    ...mapState([
      'isLogedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isLogedIn) {
      this.bookmarks = (await BookmarksServce.index()).data
    }
  }
}
</script>

<style scoped>

</style>
