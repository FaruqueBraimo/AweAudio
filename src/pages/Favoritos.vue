<template>

<q-page class="q-pa-md">
 
<q-list class="rounded-borders">
              
              <template   v-for="i in favoritos"  >
                  <q-item class="q-mb-sm" clickable v-ripple :key="i.nome" > 
                    

                      <q-item-section @click="details(1)" >
                          <q-item-label class="text-body1"   >{{i.traducao}}</q-item-label>
                          <q-item-label caption lines="1">Acessado aos : 31/01/2012</q-item-label>
                      </q-item-section>
              <q-item-section side>
                          <q-btn
                             
                              outline
                              no-caps
                              flat
                              icon="volume_up"
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
  

 
</q-page>
</template>



<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
           ...mapState ('palavra', [
               'palavras'
           ]),
           
           
           favoritos () {
                let favoritos = {}

            Object.keys(this.palavras).forEach(key => {
              
                let fav = this.palavras[key]
              
                if (fav.favorito==true) {

                   favoritos[key] = fav
                 
                }
            })
            return favoritos
        }

           }
           
           ,
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
,
      saveObjet: {

        name : 'comer'
      }
    }
    
  }

  ,
     methods:{
...mapActions('palavra', [
               'addPalavra'
           ]),

      audio() {
          alert('odjaa')
      },

      details(id){
               this.$router.push('palavra/' + id)
              //  this.addPalavra(this.saveObjet);
            }
 
  }
}
</script>