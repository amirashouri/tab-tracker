<template>
  <div>
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
        <router-link
        class="home"
        tag="span"
        :to="{name: 'songs'}">
          TabTracker
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn text dark :to="{name: 'songs'}">
          BROWSE
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-if="!$store.state.isLogedIn" text dark :to="{name: 'login'}">
          LOGIN
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn v-if="!$store.state.isLogedIn" text dark :to="{name: 'register'}">
          SIGN UP
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn v-if="$store.state.isLogedIn" text dark @click="logout">
          LOGOUT
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
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
