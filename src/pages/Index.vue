<template>

<q-page v-if="mostrar" >

  <pesquisa/>
  <dicionario-component/>




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
      mostrar : false
    }
  
  },

    mounted () {

          setTimeout (() => {
              this.mostrar = true
          }, 500)

      }
}
</script>