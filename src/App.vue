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


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});
console.log(deferredPrompt);


// buttonInstall.addEventListener('click', (e) => {
//   // Hide the app provided install promotion
//   hideMyInstallPromotion();
//   // Show the install prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice.then((choiceResult) => {
//     if (choiceResult.outcome === 'accepted') {
//       console.log('User accepted the install prompt');
//     } else {
//       console.log('User dismissed the install prompt');
//     }
//   })
// });
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