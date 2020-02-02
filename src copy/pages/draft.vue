<template>

<q-page>

   <transition
  appear
  enter-active-class="animated pulse"
  leave-active-class="animated zoomOut"
  v-if="texto.length==0"
>
<q-list class="rounded-borders">
            
              <template  v-for="(i,id) in palavras" >
                  <q-item class="q-mb-sm" clickable v-ripple :key="id" > 
                      <q-item-section @click="details(id)" >
                          <q-item-label class="text-body1">
                            
                            
                            {{i.traducao}}</q-item-label>
                          <q-item-label caption lines="1" v-if="i.dataAcesso"> {{i.dataAcesso | filterDate}}</q-item-label>
                      </q-item-section>
              <q-item-section side>
                          <q-btn
                             
                              outline
                              no-caps
                              flat
                              icon="record_voice_over"
                              rounded
                              size="sm"
                              color="light-green-6"
                              @click="audio(i.palavra)"
                          />
                      </q-item-section>
                  </q-item>
                  
                  <q-separator :key="i.traducao"/>    

                 
              </template>

          </q-list> 
          </transition>


 <transition
  appear
  enter-active-class="animated pulse"
  leave-active-class="animated zoomOut"
  v-if="texto.length!=0"
>
<q-list class="rounded-borders">
            
              <template  >
                  <q-item class="q-mb-sm" clickable v-ripple  > 
                      <q-item-section @click="details(palavrasFiltradas)" >
                          <q-item-label class="text-body1">
                            
                            
                            {{palavrasFiltradas.traducao}}</q-item-label>
                          <q-item-label caption lines="1" v-if="palavrasFiltradas.dataAcesso"> {{palavrasFiltradas.dataAcesso | filterDate}}</q-item-label>
                      </q-item-section>
              <q-item-section side>
                          <q-btn
                             
                              outline
                              no-caps
                              flat
                              icon="record_voice_over"
                              rounded
                              size="sm"
                              color="light-green-6"
                              @click="audio(palavrasFiltradas.palavra)"
                          />
                      </q-item-section>
                  </q-item>
                  
                  <q-separator />    

                 
              </template>

          </q-list> 
          </transition>

  
</q-page>
</template>



<script>
import { mapActions, mapState } from 'vuex'
  import { date } from 'quasar'

export default {
props : ['texto'],

  computed: {
           ...mapState ('palavra', [
               'palavras'
           ]),

              palavrasFiltradas(){
                 
                 let favorito = {}

            Object.keys(this.palavras).forEach(key => {
              
                let fav = this.palavras[key].traducao
              
                  if (this.texto) {

                  
                   if(fav == this.texto) {

                      favorito = this.palavras[key]
                   }
                  }
                
            })
            return favorito
              }
       },


    


  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
,
        text: 'oi',
      voiceSelect: 'pt-BR',
      saveObject: {
        his : true,
        dataAcesso : new Date

        } 
    
    }
    
  }

  ,
     methods:{
...mapActions('palavra', [
               'addPalavra', 'updatePalavra'
           ]),

      audio(val) {
          this.$speechTalk(this.voiceSelect, val) 
          
          },

      details(id){
        this.$router.push('palavra/' + id)
                 this.updatePalavra ({
                        id: id,
                        updates: this.saveObject
                    })
            }
 
  }
  ,
   filters: {
            filterDate (val) {
                let timeStamp = val.seconds * 1000;
                let data  =  new Date(timeStamp);
                let formattedString = date.formatDate(data, 'DD - MM - YYYY')
                return formattedString  ? 'Acessado aos: ' + formattedString : 'Nunca Acessado'
            }
}}

</script>