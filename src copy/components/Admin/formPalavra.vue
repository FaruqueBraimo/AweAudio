<template>
    <q-dialog
        v-model="toggleDialog"
        @show="onShowDialog"
    >
        <q-card style="width: 80vw;">
            <q-card-section class="row items-center">
                <div class="text-h6">Palavras</div>
                <q-space />
                <q-btn
                    icon="close"
                    flat
                    round
                    dense
                    @click="$emit('closeDialog')"
                />
            </q-card-section>
            <q-card-section>
                <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                >
                    <div class="row">
                        <div :class="saveObject.image ? 'col-10' : 'col-12'">
                            <q-input
                                filled
                                v-model="saveObject.palavra"
                                label="Palavra *"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                            />
                        </div>
                       
                       
                    </div>

                

                  

                    <q-input
                        filled
                        v-model="saveObject.traducao"
                        label="Traducao *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                    />

                    <q-input
                        filled
                        v-model="saveObject.pronuncia"
                        label="Pronuncia "
                        
                    />

                  
                    <q-input
                        filled
                        v-model="saveObject.Exemplo_koty"
                        label="Exemplo em Koty"
                        autogrow
                        type="textarea"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                    />

                    <q-input
                        filled
                        v-model="saveObject.Exemplo_traducao"
                        label="Traducao"
                        autogrow
                        type="textarea"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                    />

                    <q-select filled v-model="saveObject.categoria" :options="options" label="Categoria" stack-label :dense="dense" :options-dense="denseOpts" />


                    <q-separator class="q-mt-xl"/>

                    <div class="row">
                        <q-btn
                            rounded
                            label=" Gravar"
                            type="submit"
                            color="primary"
                            class="col-12"
                        />
                        <!--<q-btn rounded label="Resetar" type="reset" color="primary" flat class="col-4" />-->
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "formPalavra",
        props: ['form'],
        data () {
            return {
                saveObject: {},
            
                 model: null,
                model2: null,
                 dense: false,
                denseOpts: false,

      options: [
        'Adverbio','Famiia', 'Adjectivo', 'Pronome', 'Verbo', 'Tempo' , 'Substantivo' ,'Comida', 'Animais' , 'Direccoes' , 'Numeros'
      ]
            }
        },
        computed: {
            ...mapState ('position', ['positions']),

            toggleDialog : {
                get () {
                    if (this.form === true){
                    return this.form
                    }
 
                },
                set (val) {
                    this.$emit('closeDialog')
                }
            },
            // selectedId () {
            //     return this.editObjectCandidate ? this.editObjectCandidate.id : null
            // },
            // options () {
            //     let arrs = []
            //     Object.keys(this.positions).forEach(id => {
            //         arrs.push({
            //             label: this.positions[id].label,
            //             value: id,
            //         })
            //     })
            //     return arrs
            // }
        },
        mounted () {
            this.initialize ()

        },
        methods: {

            ...mapActions('palavra', [
               'addPalavra', 'updatePalavra'
           ]),

           
            initialize () {
                this.saveObject = {
                    // name: '',
                    // professions: [],
                    // contact: '',
                    // birthDate: '',
                    // bairro: '',
                    // address: '',
                    // description: '',
                    // experience : '',
                    // school : '',
                    // positions: [],
                }
            },
            onSubmit () {

            //     if (this.selectedId) {

            //         delete this.saveObject.id //deletando Id

            //         this.updateCandidate ({
            //             id: this.selectedId,
            //             updates: this.saveObject
            //         })

            //     } else {
                    this.addPalavra(this.saveObject)

            //     }



            },

            onShowDialog () {
                // if (this.editObjectCandidate) {
                //     this.saveObject = this.editObjectCandidate
                // } else {
                //     this.initialize ()
                // }


            },

            onReset () {
                this.initialize ()
            }

        }
        

    }
</script>

<style scoped>

</style>