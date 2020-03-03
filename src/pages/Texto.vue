<template>

<q-page>

<transition
  appear
  enter-active-class="animated fadeInLeft"
  leave-active-class="animated fadeInLeft"
>

  <texto/>


</transition>


</q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { date } from 'quasar'
    import texto from "../components/texto";


export default {
  components:{
    texto
  }

        
}
</script>