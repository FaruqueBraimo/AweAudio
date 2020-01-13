

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
    <q-linear-progress :value="progress"  color="green-7" />
      </q-card-section>
    </q-card>

  </div>
  <div class="col  q-ma-sm" >
    
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
          <q-avatar  size="65px"  color="light-blue" text-color="white" icon="local_parking" />
      </q-card-section>
      <q-card-section class="text-center	">
         Pronomes
      </q-card-section>

        <q-card-section class="text-center	">
    <q-linear-progress :value="progress"  color="green-7"  />
      </q-card-section>
    </q-card>
  </div>

</div>

 
<div class="row">
  <div class="col  q-ma-sm" >
    
 <q-card clickable v-ripple class="my-card" style="  -webkit-box-sizing: border-box;
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
    <q-linear-progress :value="progress"  color="green-7" />
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
    <q-linear-progress :value="progress "  color="green-7" />
      </q-card-section>
    </q-card>
  </div>

</div>


 </div>



</q-page>







</template>


<script>
export default {
  data () {
    return {
      progress: 0.4,

          grupos :[
          {titulo: 'Saudacoes' ,icon : 'wc'} , 
          {titulo: 'Pronomes' ,icon : 'wc'}  ,
          {titulo: 'Comida' ,icon : 'wc'}  ,
          {titulo: 'Familia' ,icon : 'wc'}  ,




          ]

    }
  },
  
}
</script>