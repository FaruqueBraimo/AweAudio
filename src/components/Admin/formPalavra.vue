<template>
    <q-dialog
        v-model="toggleDialog"
        @show="onShowDialog"
    >
        <q-card style="width: 80vw;">
            <q-card-section class="row items-center">
                <div class="text-h6">Candidato</div>
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
                                v-model="saveObject.name"
                                label="Nome do candidato *"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                            />
                        </div>
                        <div
                            v-if="saveObject.image"
                            :class="{'col-2' : !!saveObject.image}"
                            style="height: 57px">
                            <div class="q-ml-lg flex flex-center"
                                 style="height: 100%">
                                <q-btn
                                    flat
                                >
                                    <q-avatar rounded>
                                        <q-img :src="saveObject.image" spinner-color="white" />
                                    </q-avatar>
                                </q-btn>
                            </div>
                        </div>
                    </div>

                  <q-select
                      filled
                      v-model="saveObject.professions"
                      :options="options"
                      label="Profissão"
                      multiple
                      emit-value
                      map-options
                  >
                    <template v-slot:option="scope">
                      <q-item
                        v-bind="scope.itemProps"
                        v-on="scope.itemEvents"
                      >
                        <q-item-section>
                          <q-item-label v-html="scope.opt.label" ></q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-checkbox  v-model="saveObject.professions" :val="scope.opt.value" />
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>

                    <div class="row">
                        <div class="col-6">
                            <q-input
                                filled
                                v-model="saveObject.contact"
                                class="col-xs-6"
                                label="Telefone *"
                                type="number"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                            />
                        </div>
                        <div class="col-6 q-pl-md">
                            <q-input
                                filled
                                v-model="saveObject.birthDate"
                                label="Data de nascimento *"
                                mask="##-##-####"
                                hint="DD-MM-AAAA"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                            />
                        </div>
                    </div>

                    <q-input
                        filled
                        v-model="saveObject.bairro"
                        label="Bairro *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                    />

                    <q-input
                        filled
                        v-model="saveObject.address"
                        label="Endereco *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                    />

                  
                    <q-input
                        filled
                        v-model="saveObject.school"
                        label="Formação Acadêmica"
                        autogrow
                        type="textarea"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                    />

                    <q-input
                        filled
                        v-model="saveObject.experience"
                        label="Experiência"
                        autogrow
                        type="textarea"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                    />

                      <q-input
                        filled
                        v-model="saveObject.description"
                        label="Observações"
                        autogrow
                        type="textarea"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Preencha este campo']"
                    />

                    <q-separator class="q-mt-xl"/>

                    <div class="row">
                        <q-btn
                            rounded
                            :label="selectedId ? 'Actualizar' : 'Gravar'"
                            type="submit"
                            color="primary"
                            class="col-8"
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
        name: "DialogAddEditCandidate",
        props: ['dialogCandidate', 'editObjectCandidate'],
        data () {
            return {
                saveObject: {},
                model: [],
            }
        },
        computed: {
            ...mapState ('position', ['positions']),

            toggleDialog : {
                get () {
                    return this.dialogCandidate
                },
                set (val) {
                    this.$emit('closeDialog')
                }
            },
            selectedId () {
                return this.editObjectCandidate ? this.editObjectCandidate.id : null
            },
            options () {
                let arrs = []
                Object.keys(this.positions).forEach(id => {
                    arrs.push({
                        label: this.positions[id].label,
                        value: id,
                    })
                })
                return arrs
            }
        },
        mounted () {
            this.initialize ()

        },
        methods: {

            ...mapActions('candidate', [
                'addCandidate',
                'updateCandidate'
            ]),

            showMessage () {
                alert('Por favor, aguarde, ainda estamos a trabalhar para que seja possível carregar a imagem do perfil.')
            },
            initialize () {
                this.saveObject = {
                    name: '',
                    professions: [],
                    contact: '',
                    birthDate: '',
                    bairro: '',
                    address: '',
                    description: '',
                    experience : '',
                    school : '',
                    // positions: [],
                }
            },
            onSubmit () {

                if (this.selectedId) {

                    delete this.saveObject.id //deletando Id

                    this.updateCandidate ({
                        id: this.selectedId,
                        updates: this.saveObject
                    })

                } else {
                    this.addCandidate (this.saveObject)

                }

            //    TODO: Fechar a dialog depois de add ou edit - (By Jose Seie, help wanted)


            },

            onShowDialog () {
                if (this.editObjectCandidate) {
                    this.saveObject = this.editObjectCandidate
                } else {
                    this.initialize ()
                }


            },

            onReset () {
                this.initialize ()
            }

        }

    }
</script>

<style scoped>

</style>