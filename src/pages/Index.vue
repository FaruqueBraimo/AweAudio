<template>

<q-page v-if="mostrar"  >

  <pesquisa
  @texto="texto=$event"

   :object="{
              canShowAddBtn: true,
              type: 'palavra'
            }"
  />

  <dicionario-component
  :texto="texto"
  
  />


 <q-footer elevated class="">
        <div>
            <q-tabs
                indicator-color="transparent"
                active-color="light-green-6"
                no-caps
                class="bg-white text-grey-5 shadow-0 adjust-size "
            >

             <q-route-tab

                    to="/"
                    exact
                    icon="home"
                  

                   
                />

                  <q-route-tab

                    to="/diario"
                    exact
                    icon="timer"
                  
                />

              


                  <q-route-tab

                    to="/about"
                    exact
                    icon="info"
                   
                />   
            </q-tabs>
        </div>
    </q-footer>

</q-page>
<processamento v-else/>
</template>



<script>
    import DicionarioComponent from "../components/DicionarioComponent";
    import Pesquisa from "../components/global/Pesquisa";
    import Processamento from "../components/global/Processamento";


export default {
  components: {
    Pesquisa,DicionarioComponent,Processamento
    },

  data () {
    return {
      mostrar : false,
      texto : ''
    }
  
  },

    mounted () {

          setTimeout (() => {
              this.mostrar = true
          }, 500)

      }
      ,
       methods: {
    handleSwipe ({ evt, ...info }) {
      this.info = info

      // native Javascript event
      // console.log(evt)
    }
  

      }
}
</script>