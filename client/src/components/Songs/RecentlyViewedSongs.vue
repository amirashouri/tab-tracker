<template>
    <panel title="Recent Viewed Songs">
        <v-data-table
         :headers="headers"
         :items="histories">
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
import SongHistoryService from '../../services/SongHistoryService'

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
      histories: [],
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
      this.histories = (await SongHistoryService.index()).data
    }
  }
}
</script>

<style scoped>

</style>
