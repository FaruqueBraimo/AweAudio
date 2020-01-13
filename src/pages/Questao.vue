<template>
    


<q-page class="q-pa-lg items-center ">

    <q-linear-progress  stripe rounded style="height: 15px" :value="progress2" color="light-green-6" class="q-mb-md" /> 
 <q-card class="my-card items-center ">
      <q-card-section>
        <div class="text-h6">Selecione a traducao correta</div>
      </q-card-section>

        <q-card-section>
            <div class="text-subtitle2">Em  koty  <b > Miyo </b> é : {{selecionado}}  </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <div class="row q-pa-sm">
            <q-btn :ripple="false" :style="cliclicado1" @click="pressionar(1,'eu')" no-caps  push  class="col" style="border-radius: 8px">Eu</q-btn>
            </div>
         <div class="row q-pa-sm">
            <q-btn :ripple="false"  :style="cliclicado2"  no-caps  push  class="col"  @click="pressionar(2,'aquele')" style="border-radius: 8px">Aquele</q-btn>
            </div>
         <div class="row q-pa-sm">
            <q-btn :ripple="false" :style="cliclicado3" no-caps  push  class="col"   @click="pressionar(3,'voce')" style="border-radius: 8px">Voce</q-btn>
            </div>

      </q-card-actions>
    </q-card>

<div class="row justify-center">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Enviar"
        class="q-mt-md full-width"
        color="light-green-6"
        @click="simulateSubmit"
        
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
   

</q-page>



</template>

<script>
export default {
  data () {
    return {
      test: '',
      selecionado : '',
      submitting: false,
        progress1: 0.4,
      progress2: 0.62,
      press : '',
      resposta : '',
      soundExito : 'assets/tom/Civilisation.mp3'
    }
  },

  computed:{

        cliclicado1(){

        if(this.press == 1){
            return {
                'color' : '#ffff',
                'background' : '#559bc9',

            }
                }
        },
        cliclicado2(){

        if(this.press == 2){
            return {
                'color' : '#ffff',
                'background' : '#559bc9',
            }
                }
        },
        cliclicado3(){

        if(this.press == 3){
            return {
                'color' : '#ffff',
                'background' : '#559bc9',

            }
                }
        }
  
  
  
  }
        ,
  methods: {


        pressionar(val,resp){
        this.press = val
        this.resposta = resp
        this.selecionado = resp;
        console.log( this.resposta)
        }
    ,

    simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        console.log( this.resposta)

        if (this.resposta == 'eu'){
                    this.alertaCerto()
        
        if(this.soundExito) {
        var audio = new Audio(this.soundExito);
        audio.play();

      }


        }else{
        this.alertaErrado()

        }
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 2000)
    },
    alertaErrado (val) {

      let tipsErrors = ['Lê o dicionário para aumentar as chances de acertar', 'Eu confio em ti' , 'Ohhh que pena...! ' ]; 

      var rand = Math.floor(Math.random() * 3);    

      console.log(rand)

      this.$q.dialog({
        title: ' Resposta errada <span class="text-h4 q-pl-lg q-pt-xl"> 😢 </span>  ',
        message: tipsErrors[rand],
        position: 'bottom',
        color : 'white',
        style: 'background : #ff6666 ; color:  #ffff ; font-size: 16px ; animation-duration: 3s;  animation-name: slidein; -webkit-animation: jello-horizontal 0.9s both;  animation: jello-horizontal 0.9s both;  ' ,
        ok : 'Continuar',
        html: true


      })
    },

    alertaCerto () {
      this.$q.dialog({
        title: 'Certa  resposta  <span class="text-h4 q-pl-lg q-pt-xl">  😂  </span>  ',
        message: 'Manning nice, Contnue assim ,',
        position: 'bottom',
        color : 'green',
        style: 'background :#ccffcc ; color: green ; font-size: 16px ' ,
        ok : 'Continuar',
        html: true
        

      })
    },
  }
  
}
</script>