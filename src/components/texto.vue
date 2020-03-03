<template>
<q-page class="q-px-md q-py-xl">
  

  <div class="row">
 <div class=" col-6 q-pl-md">
  <q-btn  no-caps unelevated label="Colar Texto" color="light-blue" @click="paste" />
  </div>

   <div class=" col- 6 q-pl-md">
  <q-btn  no-caps unelevated label="Limpar Campo" color="deep-orange" @click="text =' ' " />
  </div>
  
  </div>
 
<div class=" q-pa-md" style="max-width: 500px">
    <q-input
      v-model="text"
      filled
      type="textarea"
      placeholder="Escreve aqui"
      class="text-body1"

    />



  </div>

<div class=" row  text-center ">
   <transition
  appear
  enter-active-class="animated pulse"
  leave-active-class="animated zoomOut"
>
<div class="col 
justify-center item-center">
     <q-btn  v-if="text!=''" unelevated fab icon="mic_none" color="light-blue" @click="audio"/>


</div>
               
                   </transition>

</div>



</q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { date } from 'quasar'

export default {

 data () {
    return {
      lorem: ''
, favMode:false,
      text: '',
        voiceSelect: 'pt-BR',

      saveObject: {
          his : true,

        
        } 
    }
   
  }
  ,


  computed: {
           ...mapState ('palavra', [
               'palavras'
           ]),
           
            

        }
           
           ,
 
     methods:{
...mapActions('palavra', [
               'addPalavra', 'updatePalavra'
           ]),


      paste() {
          navigator.clipboard.readText()
       .then((text)=>{
            if(text === ''){
               this.$q.notify({
          message: 'Você não copiou nenhuem texto ainda...',
          icon: 'announcement',
          color: 'red',
      })
          }
          else{
                this.text = text

          }

        
      
        });      },

         audio() {
          this.$speechTalk(this.voiceSelect, this.text) 
          
          },
     
  },
   filters: {
        
}}
</script>