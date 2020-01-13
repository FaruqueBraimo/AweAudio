

<template>
    

<q-page class="q-pa-sm">

<div class="q-py-sm q-px-md text-h6">
  Gategorias Populares
</div>

 <div>

<div class="row">
  <div class="col  q-ma-sm " >

 <q-card clickable v-ripple class="my-card" style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="blue-grey" text-color="white" icon="emoji_people" />
      </q-card-section>
      <q-card-section class="text-center	">
         Saudacoes
      </q-card-section>
        <q-card-section class="text-center	">
    <q-linear-progress :value="progress"  color="blue-grey" />
      </q-card-section>
    </q-card>

  </div>
  <div class="col  q-ma-sm" >
    
<q-card clickable v-ripple  class="my-card" @click="$router.push('/questao')" style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="light-blue" text-color="white" icon="local_parking" />
      </q-card-section>
      <q-card-section class="text-center	">
         Pronomes
      </q-card-section>

        <q-card-section class="text-center	">
    <q-linear-progress :value="progress"  color="light-blue"  />
      </q-card-section>
    </q-card>
  </div>

</div>

 
<div class="row">
  <div class="col  q-ma-sm" >
    
 <q-card  class="my-card" disabled style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px;
          shadow-2	;
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>

        
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="deep-orange" text-color="white" icon="local_dining" />
      </q-card-section>
      <q-card-section class="text-center	">
         Comida
      </q-card-section>

      <q-card-section class="text-center	">
    <q-linear-progress :value="progress"  color="deep-orange" />
      </q-card-section>
    </q-card>
  </div>
  <div class="col q-ma-sm" >
    
<q-card clickable v-ripple class="my-card"  style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="teal" text-color="white" icon="wc" />
      </q-card-section>
      <q-card-section class="text-center	">
         Familia
      </q-card-section>
        <q-card-section class="text-center	">
    <q-linear-progress :value="progress "  color="teal" />
      </q-card-section>
    </q-card>
  </div>

</div>

 </div>


<div class="row">
  <div class="col  q-ma-sm" >
    
 <q-card clickable v-ripple class="my-card" disabled style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px;
          shadow-2	;
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>

        
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="pink-4" text-color="white" icon="spellcheck" />
      </q-card-section>
      <q-card-section class="text-center	">
         Adjectivos
      </q-card-section>

      <q-card-section class="text-center	">
    <q-linear-progress :value="progress"  color="pink-4" />
      </q-card-section>
    </q-card>
  </div>
  <div class="col q-ma-sm" >
    
<q-card clickable v-ripple class="my-card"  style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="green-5" text-color="yellow" icon="wb_sunny" />
      </q-card-section>
      <q-card-section class="text-center	">
         Tempo
      </q-card-section>
        <q-card-section class="text-center	">
    <q-linear-progress :value="progress "  color="green-5" />
      </q-card-section>
    </q-card>
  </div>

</div>

<div class="row">
  <div class="col  q-ma-sm" >
    
 <q-card clickable v-ripple class="my-card" disabled style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px;
          shadow-2	;
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>

        
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="light-blue-10" text-color="white" icon="pets" />
      </q-card-section>
      <q-card-section class="text-center	">
         Animais
      </q-card-section>

      <q-card-section class="text-center	">
    <q-linear-progress :value="progress"  color="light-blue-10" />
      </q-card-section>
    </q-card>
  </div>
  <div class="col q-ma-sm" >
    
<q-card clickable v-ripple class="my-card"  style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="brown-6" text-color="white" icon="directions" />
      </q-card-section>
      <q-card-section class="text-center	">
         direccoes
      </q-card-section>
        <q-card-section class="text-center	">
    <q-linear-progress :value="progress "  color="brown-6" />
      </q-card-section>
    </q-card>
  </div>

</div>

<div class="row">
  <div class="col  q-ma-sm" >
    
 <q-card clickable v-ripple class="my-card" disabled style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px;
          shadow-2	;
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>

        
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="purple-10" text-color="white" icon="sort_by_alpha" />
      </q-card-section>
      <q-card-section class="text-center	">
         Substantivos
      </q-card-section>

      <q-card-section class="text-center	">
    <q-linear-progress :value="progress"  color="purple-10" />
      </q-card-section>
    </q-card>
  </div>
  <div class="col q-ma-sm" >
    
<q-card clickable v-ripple class="my-card"  style="  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px
          
          ">

   <div class="row">
     <div class="col-6 items-start">
      <q-item-section side>
            <q-btn icon="star" flat round color="grey" />
        </q-item-section>
     </div>

      <div class="col-6 text-right q-pl-sm	">
      <q-item-section class="text-right q-pl-lg">
            <q-btn icon="more_horiz" flat round color="grey" />
        </q-item-section>
     </div>

   </div>
     

      <q-card-section class="text-center	">
          <q-avatar  size="65px"  color="warning" text-color="white" icon="looks_one" />
      </q-card-section>
      <q-card-section class="text-center	">
         Numeros
      </q-card-section>
        <q-card-section class="text-center	">
    <q-linear-progress :value="progress "  color="warning" />
      </q-card-section>
    </q-card>
  </div>

</div>


</q-page>


</template>


<script>
export default {
  data () {
    return {
      progress: 0.4,
    }





  },
  
}
</script>