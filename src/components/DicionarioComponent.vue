<template>

<q-page>
<q-list class="rounded-borders">
              
              <template   v-for="i in 20"  >
                  <q-item class="q-mb-sm" clickable v-ripple :key="i" > 
                    

                      <q-item-section @click="details(1)" >
                          <q-item-label>Comer</q-item-label>
                          <q-item-label caption lines="1">Acessado aos : 31/01/2012</q-item-label>
                      </q-item-section>
              <q-item-section side>
                          <q-btn
                             
                              outline
                              no-caps
                              flat
                              icon="volume_up"
                              rounded
                              size="sm"
                              color="green-4"
                              @click="audio()"
                          />
                      </q-item-section>
                  </q-item>
                  
                  <q-separator :key="i.index"/>    

                 
              </template>

          </q-list> 
  

 
</q-page>
</template>



<script>
export default {

  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
    
  }

  ,
     methods:{


      audio() {
          alert('odjaa')
      },

      details(id){
               this.$router.push('palavra/' + id)
            }
 
  }
}
</script>