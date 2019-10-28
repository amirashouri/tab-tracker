<template>
  <div>
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
        <span
        class="home"
        @click="navigateTo({name:'root'})">
          TabTracker
        </span>
      </v-toolbar-title>
      <!-- <v-toolbar-items>
        <v-btn text dark>
          BROWSE
        </v-btn>
      </v-toolbar-items> -->
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-if="!$store.state.isLogedIn" text dark @click="navigateTo({name:'login'})">
          LOGIN
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn v-if="!$store.state.isLogedIn" text dark @click="navigateTo({name:'register'})">
          SIGN UP
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
    // logout () {
    //   this.$store.dispatch('setToken', null)
    //   this.$store.dispatch('setUser', null)
    //   this.$router.push({
    //     name: 'songs'
    //   })
    // }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
