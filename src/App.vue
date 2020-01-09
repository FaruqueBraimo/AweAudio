<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created () {

        this.listenPalavraRealTimeChanges ()
        


    },


      methods: {
     ...mapActions('palavra', [
              'listenPalavraRealTimeChanges',
          ]),
}}
</script>
