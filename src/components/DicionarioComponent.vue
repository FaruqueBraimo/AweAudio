<template >
<q-page>
   <transition
  appear
  enter-active-class="animated pulse"
  leave-active-class="animated zoomOut"
>
<q-list class="rounded-borders"    >
            
              <template  >
                  <q-item class="q-mb-sm" clickable v-ripple  > 
                      <q-item-section @click="details()" >
                          <q-item-label class="text-body1">
                            Boas Vindas
                            
                           </q-item-label>
                      </q-item-section>
              <q-item-section side>
                          <q-btn
                             
                              outline
                              no-caps
                              flat
                              icon="record_voice_over"
                              rounded
                              size="sm"
                              color="light-blue"
                              @click="audio('Oi, seja bem vindo, para converter texto em áudio clique no botão abaixo , com sinal mais!')"
                          />
                      </q-item-section>
                   
                  </q-item>
                     <q-separator/>
                  
                   <q-item class="q-mb-sm" clickable v-ripple > 
                      <q-item-section @click="details()" >
                          <q-item-label class="text-body1">
                           Texto longo sobre FRELIMO
                            
                           </q-item-label>
                      </q-item-section>
              <q-item-section side>
                          <q-btn
                             unelevated
                              outline
                              no-caps
                              flat
                              icon="record_voice_over"
                              rounded
                              size="sm"
                              color="light-blue"
                              @click="audio('Brada,não tive tempo de copiar aquele texto.')"
                          />
                      </q-item-section>
                   
                  </q-item>
                 
              </template>

          </q-list> 
          </transition>

  
</q-page>
</template>



<script>
    import { mapActions, mapGetters , mapState} from 'vuex'
  import { date } from 'quasar'

export default {
  computed: {
           ...mapState ('palavra', [
               'palavras'
           ]),
                   ...mapGetters ('palavra',['searchPalavras'])

           
           
           },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
,
        text: 'oi',
      voiceSelect: 'pt-BR',
      saveObject: {
        his : true,
        dataAcesso : new Date,
        frelimo : 'A mentira não faz História de uma Nação” Fanuel Guidion Mahluza, o homem que deu o nome “FRELIMO” ao movimento de libertação de Moçambique.    '

        } 
    
    }
    
  }

  ,
     methods:{
...mapActions('palavra', [
               'addPalavra', 'updatePalavra'
           ]),

      handleSwipe ({ evt, ...info }) {
      this.info = info

      // native Javascript event
      // console.log(evt)
    },

      audio(val) {
          this.$speechTalk(this.voiceSelect, val) 
          
          },

      details(id){

        this.$q.notify('Toque no Icone ao lado para ouvir o áudio')
      
            }
 
  }
  ,
   filters: {
     
            filterDate (val) {
                let timeStamp = val.seconds * 1000;
                let data  =  new Date(timeStamp);
                let formattedString = date.formatDate(data, 'DD - MM - YYYY')
                return formattedString  ? 'Acessado aos: ' + formattedString :  'Nunca Acessado'
            }
}}

</script>