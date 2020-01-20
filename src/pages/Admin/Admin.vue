<template>
<q-page>
<tabela-palavras 
  @form="form = $event"
/>
 
 <form-palavra
@closeDialog="closeDialog()"
:form="form"
 /> 
</q-page>


</template>

<script>

import TabelaPalavras  from '../../components/Admin/TabelaPalavras.vue'
import formPalavra  from '../../components/Admin/formPalavra.vue'

export default {
    
      data () {
    return {
            form : ''
    }
    
    }
    ,

    components:{
        TabelaPalavras,
        formPalavra



},

methods:{
    closeDialog(){
        this.form = false
    }
}



}
</script>