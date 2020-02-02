<template>
 <q-dialog v-model="dialog" :position="position">
      <q-card  class="q-px-md bg-white" >
        <q-input
            v-model="searchText"
            placeholder="Pesquisa"
            class="bg-white"
        >        
        </q-input>
      </q-card>
    </q-dialog>
</template>

<script>
    import { mapActions, mapGetters , mapState} from 'vuex'

    export default {
        name: "SearchComponent",
        props : ['object'],
        data () {
            return {
                text: '',
                 dialog: true,
                position: 'top'
            }
        },

          computed: {
            ...mapState('palavra', ['palavraSearchKey']),

                 toggleDialog : {
                get () {
                    if (this.form === true){
                    return this.form
                    }
 
                },
                set () {
                    return false
                }
            },

            searchText: {
                get() {
                    return this.object.type === 'palavra' ? this.palavraSearchKey :  ''
                },
                set(val) {
                    this.object.type === 'palavra' ? this.setPalavraSearchKey (val) : ''
                }
            }
        },

         methods: {
            ...mapActions('palavra', ['setPalavraSearchKey']),
        },

        watch: {
            text(val){
                   this.$emit('texto' , val)
            }

        }

        
    }
</script>

<style scoped lang="stylus">

</style>