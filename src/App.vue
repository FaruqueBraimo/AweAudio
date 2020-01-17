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

<style>

@import url('https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed&display=swap');

#q-app {
font-family: 'Fira Sans Extra Condensed', sans-serif;

}


</style>