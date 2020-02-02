<template>
<q-page class="q-pa-md">
    <div class="absolute-center" v-if="favMode == false "> 

        <div class="a" >
        {{favText}} 
        </div>
</div>


  <!-- Wrapping only one DOM element, defined by QBtn -->

 <transition
  appear
  enter-active-class="animated pulse"
  leave-active-class="animated pulse"
>
<q-list class="rounded-borders">
  
              <template   v-for="(i,id) in favoritos"  >

                  <q-item class="q-mb-sm" clickable v-ripple :key="i.nome" > 
                      <q-item-section @click="details(id)" >
                          <q-item-label class="text-body1"   >{{i.traducao}}</q-item-label>
                          <q-item-label caption lines="1">{{i.dataAcesso | filterDate}}</q-item-label>
                      </q-item-section>
              <q-item-section side>
                          <q-btn
                              outline
                              no-caps
                              flat
                              icon="record_voice_over"
                              rounded
                              size="sm"
                              color="green-4"
                              @click="audio()"
                          />
                      </q-item-section>
                  </q-item>                 
                  <q-separator :key="i.index"/>       
              </template>
           
          </q-list> 
               </transition>

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
           
             favText() {
                return 'Sem favoritos'
           }
           ,
           favoritos () {
                let favoritos = {}

            Object.keys(this.palavras).forEach(key => {
              
                let fav = this.palavras[key]
              
                if (fav.favorito==true) {

                   favoritos[key] = fav
                 
                }
            })
    
    if (  Object.keys(favoritos).length)    {
       
       this.favMode = true
     }  
     
     else{
           
       this.favMode = false
       this.favText
     }
            
            return favoritos
        }

        }
           
           ,
 
     methods:{
...mapActions('palavra', [
               'addPalavra', 'updatePalavra'
           ]),

      audio() {
          alert('odjaa')
      },
      details(id){
               this.$router.push('palavra/' + id)

                this.updatePalavra ({
                        id: id,
                        updates: this.saveObject
                    })
            } 
  },
   filters: {
            filterDate (val) {
                let timeStamp = val.seconds * 100;
                let data  =  new Date(timeStamp);
                let formattedString = date.formatDate(data, 'DD - MM - YYYY')
                return formattedString  ? 'Acessado aos: ' + formattedString : 'Nunca Acessado'
            }
}}
</script>