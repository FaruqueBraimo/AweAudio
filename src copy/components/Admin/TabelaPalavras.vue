<template>



  <div class="q-pa-lg ">
    <q-markup-table >
        <thead class="">
    <tr>
        <th class="text-left ellipsis"></th>
        <th class="text-left  ellipsis">Palavra</th>
        <th class="text-left ellipsis">Traducao</th>

        <th  class="text-center ellipsis">Ação</th>
    </tr>
     </thead>
  <tbody v-for="(palavra,id) in palavras" :key="id">
     <tr>
        <td class="text-left">
            <!--Curso publicado-->
           
            <!--Curso em rascunho-->
           
        </td>
       
        <td class="text-left">{{palavra.palavra}}</td>
        <!--<td class="text-right" v-html="course.body"></td>-->
        <td class="text-left"> {{palavra.traducao}}</td>
        
        <td class="text-center q-gutter-md">
           
            <q-btn
                color="white"
                text-color="primary"
                flat
                round
                icon="edit"
               
            >
              <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                Editar Cursos
              </q-tooltip>
            </q-btn>

            <q-btn
                color="white"
                text-color="red"
                flat
                round
                icon="delete"
               
            >
              <q-tooltip content-class="bg-red" :offset="[10, 10]">
                Remover course
              </q-tooltip>
            </q-btn>


        </td>
    </tr>
   
      </tbody>
        </q-markup-table>

     <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="green-6" @click="$emit('form' , true)"/>
        </q-page-sticky>

  </div>
</template>







<script>


import { mapActions, mapState } from 'vuex'

export default {

computed: {
           ...mapState ('palavra', [
               'palavras'
           ]),},


        methods:{ 
      
                oi(){
                     this.age++
                }
                
                } ,


watch: {

   age: function(val){
        this.$emit('age' , val)
    }

},


  data () {
    return {

         filter: '',
          age:  '',  
           data:[],


      columns: [

,
         { name: 'palavra', align: 'left', label: 'Palavra', field: 'palavra' },

        { name: 'traducao', align: 'center', label: 'Traducao ', field: 'traducao', sortable: true , },

        { name: 'iron',align: 'center', label: 'Accão', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
    }
  }
}



</script>