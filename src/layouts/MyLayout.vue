<template>
    <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-light-blue"  >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          drawerOrNor
          @click="drawerOrNor"
          :icon="icon"
          aria-label="Menu"
        />
        
        <q-toolbar-title>
          {{titulo}}
        </q-toolbar-title>
      <q-space ></q-space>
          <q-btn flat round dense icon="wb_sunny"  color="yellow" class="q-mr-xs"  v-if="noite===true" @click="light"/>
            <q-btn flat round dense icon="brightness_3"  color="white" class="q-mr-xs" @click="dark"  v-if="noite!=true" />


      </q-toolbar>
    </q-header>






<transition
  appear
  
>

     <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="600"
        
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding  class="text-grey-9"  >
     
            <q-item clickable v-ripple to="/" exact  >
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section   >
               Início
              </q-item-section>
            </q-item>



            <q-item clickable v-ripple to="/about"  active-color="light-blue">
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
               About
              </q-item-section>
            </q-item>

            
          
          </q-list>
        </q-scroll-area>
        <q-img class="absolute-top bg-light-blue"   style="height: 150px ">
           <div class="absolute-center bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="statics/boy-avatar.png">
            </q-avatar>
            <div class="text-white text-center"> @FBraimo</div>
          </div>
        </q-img>
      </q-drawer>
</transition

>

<q-footer elevated class="" v-if="this.$route.fullPath == '/'"  >
        <div>
            <q-tabs
                indicator-color="transparent"
                active-color=" light-blue"
                no-caps
                class="bg-white text-grey-5 shadow-0 adjust-size "
            >

             <q-route-tab

                    to="/profile"
                    exact
                    icon="grade"
                  

                   
                />

                  <q-route-tab

                    to="/"
                    exact

                  
                >

           <q-spinner-grid
          color="light-blue"
          size="1.7em"
        />

                  </q-route-tab>



              


                  <q-route-tab

                    to="/about"
                    exact
                    icon="info"
                   
                />   
            </q-tabs>
        </div>
    </q-footer>
  
  
    <q-page-container>
     
      <router-view />
    </q-page-container>
  </q-layout>
</template>



<style  lang="css">
    .q-tab-full {
        min-height: 0;
        padding: 5px 10px;
        margin-bottom: 5px;
    }




</style>

<script>
    import { mapActions, mapGetters , mapState} from 'vuex'
import { EventBus } from '../functions/bus.js';



export default {
  
  name: 'MyLayout',
  
   created (){
   EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
});
  }
  ,

  data () {
    return {
      leftDrawerOpen: false,
       drawer: false,
       noite: false,
       hear: false,
       object:{
         type : 'palavra'
       }
    
    }

    
  }

  

,
computed:{

 ...mapState ('palavra', [
               'palavras'
           ]),

              ...mapGetters ('config',['darkLabel']),


           listen(){
             let pesquisa = false
            
  EventBus.$on('i-got-clicked', data => {

    pesquisa = data
});

    return pesquisa
           },

titulo (){
  let caminho =  this.$route.fullPath

  if ( caminho == "/") return "Aweaudio"
  else if  ( caminho == "/") return "Ekoty"
  else if  ( caminho == "/about") return "About"
  else if  ( caminho == "/palavradodia") return "Palavra do dia"
  

  else return "Detalhes"


},

icon (){
  let caminho =  this.$route.fullPath
  let icon = ''          
             if ( caminho.search("/palavra")) icon = "menu"
                
              else icon =  "arrow_back"

              return icon
}

,
 
                   
            searchText: {
                get() {
                    return this.object.type === 'palavra' ? this.palavraSearchKey :  ''
                },
                set(val) {
                   
                    this.object.type === 'palavra' ? this.setPalavraSearchKey (val) : ''
                     if(val){
                      this.hear = true 
                    }  
                }
            }


}


,

 methods:{

   ...mapActions('config', [
               'addDark', 'updateDark'
           ]),

          dark(){
               this.addDark()
               this.noite = true

 
  

          }
            ,

          light(){
                this.updateDark()
                 this.noite = false
            },

        drawerOrNor(){
            if (this.icon == 'arrow_back') {
              this.$router.go(-1)
            } 
            else {
              this.drawer = !this.drawer  
            }
        },

                    ...mapActions('palavra', ['setPalavraSearchKey']),


}

  ,

  beforeUpdate(){
  }
  ,
 updated(){

         console.log(this.searchText)

   this.searchText =   ''
   
     EventBus.$on('i-got-clicked', data => {

    this.pesquisa = data
     this.hear = false
    console.log( 'pesquisa' , this.pesquisa)



});



   
 }

  ,
  destroyed(){
    EventBus.$off('i-got-clicked');

  }


}
</script>
