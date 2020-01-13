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


        <q-dialog
            v-model="showCV"
            maximized
            transition-show="slide-up"
            transition-hide="slide-down"
        >
            <q-card class="full-width">
                <q-bar>
                    <q-space />
                    <q-btn dense flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                </q-bar>

                <q-card-section>
                    <div class="text-h3 text-center"></div>
                </q-card-section>

                <q-card-section>
                    <pdf :src="candidate.cvUrl" style="width: 100%"></pdf>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Fechar" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

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
