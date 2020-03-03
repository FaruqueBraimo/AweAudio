<template>
<q-page class=" text-body1 text-justify" v-if="mostrar"> 
   
  <div class="  text-grey-9
 " >
        
    <q-card  flat class="my-card  "
    square
    >
      <q-card-section class="  ">
       Esta aplicação  foi desenvolvida com objectivo de transformar <b class="text-italic">um texto em áudio</b>.  
      </q-card-section>

       <q-card-section class=" 	">
      Especial agradecimento a turma <b class="text-italic">Informática-UEM-2017</b>, pois o desenvolvedor da aplicação, pertence a essa turma. 
      </q-card-section>

      <q-card-section class="	"> 
          Se você encontrar algo que parece não fazer sentido ou  se estiver interressado em colaborar, por favor ,<b class="text-italic">feel free</b> em me contactar:
      </q-card-section>
    </q-card>
    

   </div> 
   
   <div class=" text-weight-light touch q-pl-md   text-grey-9 fixed-bottom" >
    
     

        <div>
        <q-chip square> 
        <q-avatar icon="person" color="light-blue" text-color="white" />
        Faruque Braimo
      </q-chip>
        </div>
       
          <div>
  <q-chip square>
        <q-avatar icon="email" color="light-blue" text-color="white" />
        <a href="mailto:faruquebraimo@gmail.com" class="text-light-blue "> faruquebraimo@gmail.com </a> 
      </q-chip>

          </div>
     
       <q-chip square>
        <q-avatar icon="phone" color="light-blue" text-color="white" />
       <a href="tel:846771216" class="text-light-blue "> 846771216</a> 
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