<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-card flat bordered v-for="(palavra,id) in palavras" :key="id" style="width: 500px">
        <q-card-section  >
      
<div class="row"> 
  

       <div class="col-6 text-h6 q-pt-xs">
         <q-card-actions align="left">

           {{palavra.traducao}}
         
         </q-card-actions>   </div>
      
        <div class="col-6 q-pl-md">
         <q-card-actions align="right">
         <q-btn flat round color="teal" icon="volume_up" />
        <q-btn flat round :color="palavra.favorito==true ? 'red' : 'black' " icon="favorite" @click="favorito(id)"/>
          </q-card-actions>
              </div>  
              </div>
         
        </q-card-section>
         
        <q-separator />

          <q-card-section>              
              <div
                      class="text-caption text-italic	text-weight-bold "> Tradução 
              <p class="text-h6 text-capitalize		"> {{palavra.palavra}} </p>
              </div>

              <div
                      class="text-caption text-italic text-weight-bold	"> Pronuncia 
              <p class="text-body1 text-weight-regular"> " {{palavra.pronuncia}} " </p>
              </div>

        </q-card-section>  


          <q-separator />

          <q-card-section>              
              <div
                      class="text-caption text-italic	 text-weight-bold"> Exemplo  
              <p class="text-body1">" {{palavra.Exemplo_traducao}} " </p>
              </div>

              <div
                      class="text-caption text-italic	text-weight-bold">Tradução do exemplo
              <p class="text-body1">" {{palavra.Exemplo_koty}} " </p>
              </div>

        </q-card-section>     
      </q-card>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
import { log } from 'util'

export default {
  computed: {
           ...mapState ('palavra', [
               'palavras'
           ]),
           
           
           cor(){


           }
           
           
           },

  data () {
    return {
      skeletonAnimations: [
        'wave'
        
      ],
      saveObject: {
        favorito : false
        } 
    
  }
  
  },
    methods:{
        ...mapActions ('palavra', [
               'updatePalavra'
           ]),


      favorito(val){

            if (val){
             this.saveObject.favorito = !this.palavras[val].favorito 
              
            }
          this.updatePalavra ({
                        id: val,
                        updates: this.saveObject
                    })
      }
    }


}
</script>