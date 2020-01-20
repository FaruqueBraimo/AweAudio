<template>
    <tr>
        <td class="text-left">
        
          
        </td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right q-gutter-md">
           

            <q-btn
                color="white"
                text-color="primary"
                flat
                round
                icon="edit"
                @click="$emit('editCandidate', candidate)"
            >
              <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                Editar candidato
              </q-tooltip>
            </q-btn>

            <q-btn
                color="white"
                text-color="red"
                flat
                round
                icon="delete"
                @click="$emit('deleteCandidate', candidate)"
            >

              <q-tooltip content-class="bg-red" :offset="[10, 10]">
                Remover candidato
              </q-tooltip>
            </q-btn>


        </td>


        
    </tr>
</template>

<script>
    import pdf from 'vue-pdf'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "CandidatesTableRowComponent",
        components: {
            pdf
        },
        props: ['candidate', 'positions'],
          data () {
            return {
              isFunc: false,
              showCV: false
            }
          },
        computed: {
            ...mapGetters('candidate', [
                'positionNames', 'candidateImage'
            ]),

        },

      methods: {
      },
      watch: {
        isFunc (val) {
          if (val) {
            this.$emit('confirm', val)
            alert(val)

          }
        }
      }
    }
</script>

<style scoped>
</style>
