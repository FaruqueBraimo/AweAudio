<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-green-4">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          
          @click="drawer = !drawer "
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
     {{titulo}}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

     <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding  class="text-grey-9" >
            <q-item clickable v-ripple to="/" exact>
              <q-item-section avatar>
                <q-icon name="menu_book" />
              </q-item-section>

              <q-item-section   >
               Dicionário
              </q-item-section>
            </q-item>

           

            <q-item clickable v-ripple >
              <q-item-section avatar>
                <q-icon name="text_format" />
              </q-item-section>

              <q-item-section>
                Palavra do dia
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

            
            <q-item clickable v-ripple >
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

            <q-item clickable v-ripple to="about">
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                About
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  

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

  if ( caminho == "/") return "MozBantu"
  else if  ( caminho == "/") return "MozBantu"
  else if  ( caminho == "/about") return "About"
  else if  ( caminho == "/palavradodia") return "Palavra do dia"
  else if  ( caminho == "/favoritos") return "Favoritos"

  else if  ( caminho == "/definicoes") return "Definiçoes"
  else return "Definição"


}

}


}
</script>
