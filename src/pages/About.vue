<template>
<q-page class=" " v-if="mostrar"> 
   
  <div class="text-body1 " >
        
    <q-card  flat class="my-card  text-weight-light touch "
    square
    >
      <q-card-section class=" text-justify customf">
       Este aplicativo contém  uma série de palavras em  <b class="text-italic">koty</b>, lingua materna de Angoche, traduzidas em português.
      </q-card-section>

       <q-card-section class="text text-justify	">
       As mesmas palavras não foram confirmadas por um especialista em Linguas <b class="text-italic">Bantu</b> ,elas foram coletadas pelo próprio desenvolvedor do aplicativo. Por tanto as palavras podem estar sujeitas a erros de grafia, de fonética e por aí vai. 
      </q-card-section>

      <q-card-section class="text-justify	"> 
          Se você encontrar algo que parece não fazer sentido ou  se estiver interressado em colaborar com mais palavras, por favor ,<b class="text-italic">feel free</b> em me contactar:
      </q-card-section>
    </q-card>
    

   </div> 
   
   <div class=" text-weight-light touch q-pl-md  fixed-bottom" >
    
     

        <div>
        <q-chip square> 
        <q-avatar icon="person" color="light-green-6" text-color="white" />
        Faruque Braimo
      </q-chip>
        </div>
       
          <div>
  <q-chip square>
        <q-avatar icon="email" color="light-green-6" text-color="white" />
        faruquebraimo@gmail.com
      </q-chip>

          </div>
     
       <q-chip square>
        <q-avatar icon="phone" color="light-green-6" text-color="white" />
        846771216
      </q-chip>
 
   </div>

</q-page>   
<processamento v-else/> 



</template>

<script>
    import Processamento from "../components/global/Processamento";


export default {
     data () {
    return {
      mostrar : false
    }
     },

    components: {Processamento},
      mounted () {

          setTimeout (() => {
              this.mostrar = true
          }, 500)

      }
}
</script>