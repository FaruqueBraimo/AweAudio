<template>
  <div id="q-app" class="text-grey-9">
    <router-view  v-if="$q.platform.is.mobile">

    </router-view>

    <q-card
      class="my-card absolute-center q-pa-xl"
      
      v-else
    >
      <q-card-section class="text-center">
          <q-icon name="desktop_access_disabled"  size="50px"/>
      </q-card-section>


    <div class=" text-h5" >
              Esta aplicação só funciona nos dispositivos mobiles
          <div class="text-caption text-center"> 
            faruquebraimo@gmail.com
          </div>
    </div>
    </q-card>
  </div>

    

</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'App',

   computed: {
  
                   ...mapGetters ('config',['darkStatus'])

           },
  created () {

        this.darkStatus


        this.listenPalavraRealTimeChanges ()
        
     this.$q.addressbarColor.set('#03A9F4')

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