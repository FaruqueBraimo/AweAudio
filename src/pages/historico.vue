<template>

<q-page class="q-pa-md">
 
<div class="absolute-center" v-if="hisMode == false "> 

        <div class="text-body1">
        {{hisText}} 
        </div>
</div>
 
<transition
  appear
  enter-active-class="animated pulse"
  leave-active-class="animated bounceOut"
>
<q-list class="rounded-borders">
             <template   v-for="(i,id ) in historicos"  >
                  <q-item class="q-mb-sm" clickable v-ripple :key="id" > 
                    
                      <q-item-section @click="details(id)" >
                          <q-item-label class="text-body1"   >{{i.traducao}}</q-item-label>
                          <q-item-label caption lines="1">{{i.dataAcesso | filterDate}}</q-item-label>
                      </q-item-section>
              <q-item-section side>
                          <q-btn
                             
                              outline
                              no-caps
                              flat
                              icon="delete"
                              rounded
                              size="sm"
                              color="red-4"
                              @click="remove(id)"
                          />
                      </q-item-section>
                  </q-item>
                  
                  <q-separator :key="i.index"/>    

                 
              </template>
          </q-list> 

       
   </transition>
   

    <div class="hello">
  <h4>Bundle of most known networks</h4>
  <vue-goodshare></vue-goodshare>

  <h4>Mobile networks</h4>
  <vue-goodshare bundle="mobile"></vue-goodshare>

  <h4>Single elements with options</h4>
  <vue-goodshare-facebook 
   button_design="outline"
   page_url="https://vuejsfeed.com/" 
   title_social="Facebook"
   has_counter
   has_icon 
   ></vue-goodshare-facebook>

  <vue-goodshare-twitter 
   button_design="gradient"
   page_url="https://vuejsfeed.com/" 
   has_icon 
   has_square_edges
  ></vue-goodshare-twitter>

</div> 

</q-page>
</template>



<script>
import { mapActions, mapState } from 'vuex'
import { filter } from 'minimatch'
  import { date } from 'quasar'
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
import VueGoodshare from 'vue-goodshare'

export default {

components:{
    VueGoodshareTwitter,
    VueGoodshareFacebook,
    VueGoodshare
  },
data () {
    return {

    hisMode:false,
      saveObject: {
          his : '',
         
        } ,
    }
 
  }
  ,

  computed: {
           ...mapState ('palavra', [
               'palavras'
           ]),
           
           hisText() {
                return 'Sem histórico'
           }
           ,
           historicos () {
                let historico = {}

            Object.keys(this.palavras).forEach((key,index) => {
              
                let hist = this.palavras[key]

                    if (hist.his == true) {

                    if (index<50){
                    
                        historico[key] = hist

                    }}
                 
            })
             
     if (  Object.keys(historico).length)    {
       
       this.hisMode = true
     }  
     
     else{
           
       this.hisMode = false
       this.hisText
     }
            
            return historico
}


           }


    
           
           ,
  
  


  
     methods:{
...mapActions('palavra', [
               'addPalavra', 'updatePalavra'
           ]),

      remove(id) {
                // this.saveObjet.hisFalse = true
        this.saveObject.his = false
       this.updatePalavra ({
                        id: id,
                        updates: this.saveObject
                    })
            }
      
        ,
      details(id){
               this.$router.push('palavra/' + id)
        this.saveObject.his = true

                this.updatePalavra ({
                        id: id,
                        updates: this.saveObject
                    })
            }
 
     }
    ,
 filters: {
            filterDate (val) {
                let timeStamp = val.seconds * 100;
                let data  =  new Date(timeStamp);
                let formattedString = date.formatDate(data, 'DD - MM - YYYY')
                return formattedString  ? 'Acessado aos: ' + formattedString : 'Nunca Acessado'
            }

  }



}
</script>