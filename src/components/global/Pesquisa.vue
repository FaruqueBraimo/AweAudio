<template>
    <div class="q-pa-md " style="width: 100% "  >
        <q-input
            rounded
            outlined
            dense
            v-model="searchText"
             bg-color="grey-1"
          

            
           
            placeholder="Pesquise ..."
        >
            <template v-slot:prepend>
                <q-icon name="search" />
            </template>
            <template v-slot:append>
                <q-btn icon="short_text" @click="text = ''" flat round/>
            </template>
        </q-input>
    </div>
</template>

<script>
    import { mapActions, mapGetters , mapState} from 'vuex'

    export default {
        name: "SearchComponent",
        props : ['object'],
        data () {
            return {
                text: ''
            }
        },

          computed: {
            ...mapState('palavra', ['palavraSearchKey']),

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