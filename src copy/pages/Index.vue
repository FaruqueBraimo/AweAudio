<template>

<q-page v-if="mostrar" class="q-py-md">

  <!-- <pesquisa
  @texto="texto=$event"
   :object="{
              canShowAddBtn: true,
              type: 'palavra'
            }"
  /> -->

  <dicionario-component
  :texto="texto"
  
  />


 

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