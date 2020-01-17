<template>
    <q-layout view="lHh Lpr lFf">

    <q-header elevated class="bg-light-green-6">
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

      </q-toolbar>
    </q-header>
<transition
  appear
  enter-active-class="animated fadeInLeft"
  leave-active-class="animated fadeOutLeft"
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
                <q-icon name="menu_book" />
              </q-item-section>

              <q-item-section   >
               Dicionário
              </q-item-section>
            </q-item>



            <q-item clickable v-ripple to="diario"  active-color="light-green-6">
              <q-item-section avatar>
                <q-icon name="timer" />
              </q-item-section>

              <q-item-section>
               Pratique
              </q-item-section>
            </q-item>

            
            <q-item clickable v-ripple to="favoritos" >
              <q-item-section avatar>
                 <q-icon name="favorite" />
              </q-item-section>

              <q-item-section>
                Favoritos
              </q-item-section>
            </q-item>

            
            <q-item clickable v-ripple to="historico">
              <q-item-section avatar>
                <q-icon name="history" />
              </q-item-section>

              <q-item-section>
               Histórico
              </q-item-section>
            </q-item>




            <q-item clickable v-ripple to="definicoes">
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>
                Definicoes
              </q-item-section>             
            </q-item>
            <q-item clickable v-ripple to="share">
              <q-item-section avatar>
                <q-icon name="share" />
              </q-item-section>

              <q-item-section>
                Compartilhar
              </q-item-section>  
            </q-item>
          </q-list>
        </q-scroll-area>
        <q-img class="absolute-top" src="statics/cul2.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Culssume Abacar</div>
            <div>@Ella</div>
          </div>
        </q-img>
      </q-drawer>
</transition>

     

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
import { mapActions, mapState } from 'vuex'
export default {
  
  name: 'MyLayout',
    computed: {
           ...mapState ('palavra', [
               'palavras'
           ]),},

  data () {
    return {
      leftDrawerOpen: false,
       drawer: false,
    
    }

    
  }

,
computed:{

titulo (){
  let caminho =  this.$route.fullPath

  if ( caminho == "/") return "Ekoty"
  else if  ( caminho == "/") return "Ekoty"
  else if  ( caminho == "/about") return "About"
  else if  ( caminho == "/palavradodia") return "Palavra do dia"
  else if  ( caminho == "/favoritos") return "Favoritos"

  else if  ( caminho == "/definicoes") return "Definiçoes"
  else if  ( caminho == "/historico") return "histórico"
    else if  ( caminho == "/diario") return "Pratique"

  else return "Definição"


},

icon (){
  let caminho =  this.$route.fullPath
  let icon = ''          
             if ( caminho.search("/palavra")) icon = "menu"
                
              else icon =  "arrow_back"

              return icon
}
}
,
 methods:{
        drawerOrNor(){
            if (this.icon == 'arrow_back') {
              this.$router.go(-1)
            } 
            else {
              this.drawer = !this.drawer  
            }
        }

}}
</script>
