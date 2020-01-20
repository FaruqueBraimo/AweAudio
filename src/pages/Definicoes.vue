
<template>
<q-page v-if="mostrar" >

<div class="q-pa-sm">
    
<q-card class="my-card q-pa-sm" flat >
  
 
            <!-- this.$route.params.id; -->


      <q-card-actions >
          <div class="row">

               <div class="col-10 q-pa-sm">
                 Modo escuro
               </div> 

            <div class="col-2 ">                
              <q-toggle
            :label="pinkModel"
            color="green-4"
            false-value= "Desativado"
            true-value="Ativado"
            v-model="pinkModel"
            keep-color

    />

               </div> 

          </div>
      </q-card-actions>
    </q-card>
    

</div>

</q-page>
<processamento-def v-else/>

</template>

<script>
import { watch } from 'fs'
import ProcessamentoDef from "../components/global/ProcessamentoDef";
    import { mapActions, mapGetters , mapState} from 'vuex'


export default {
   

   components: {
    ProcessamentoDef
    },
data () {
    return {
   blueModel: true,
      pinkModel: 'Desativado',
      greenModel: 42,
      redModel: true,
      mostrar : false

    }
  },

  computed:{
    
         ...mapGetters ('config',['darkLabel']),
   
   
  }
,

updated(){
 
}
,
  mounted () {
          setTimeout (() => {
              this.mostrar = true
          }, 500)

        
      },

      

    methods:{
...mapActions('config', [
               'addDark', 'updateDark'
           ]),
    }

,
  watch: {
        pinkModel (newValue, oldValue) {
            if ( newValue === 'Ativado') {
                this.addDark()
            }

             if ( newValue === 'Desativado') {
                return    this.updateDark()

            }
            
        }




  }
  


 
}

</script>