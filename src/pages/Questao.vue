<template>
  

<q-page class="q-pa-sm  ex">
  <div class="row q-mt-md q-x-md">
      <div class="col">
       <q-btn dense flat icon="close" @click="$router.push('/diario')">
        </q-btn>
      </div>
      <div class="col-9 q-mt-sm ">
    <q-linear-progress  stripe rounded style="height: 15px" :value="progress2" color="light-green-6"  /> 
      </div>
      <div class="col text-center q-mt-xs	">
        <q-knob
      :min="0"
      :max="30"
      v-model="value1"
      show-value
      size="25px"
      :thickness="0.22"
      color="grey-2"
      track-color="light-green-6"
      font-size = '0.5em'
      readonly

    />
      </div>
    </div>


<div class="q-pt-lg	" > 


 <q-card class="my-card  ">

      <q-card-section>
        <div class="text-h6">Selecione a traducao correta</div>
      </q-card-section>

        <q-card-section>
            <div class="text-subtitle2">Em  koty  <b > Miyo </b> é : {{selecionado}}  </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical class="q-pa-lg">
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
</div>
<div class="row justify-center fixed-bottom q-pa-sm">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Enviar"
        class="q-mt-md full-width"
        :color="color"
        @click="simulateSubmit"
        :disable=" pressed===false "
        
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
   

</q-page>



</template>

<script>
import { date } from 'quasar'

export default {
  data () {
    return {
      pressed: false,
      color : 'light-green-1',
      test: '',
      value1: 30,

      selecionado : '',
      submitting: false,
        progress1: 0.4,
      progress2: 0.62,
      press : '',
      resposta : '',
      soundExito : './statics/sound/win.mp3',
      soundError : './statics/sound/lose.mp3'




      
    }
  },

  computed:{

        cliclicado1(){

        if(this.press == 1){
            return {
                'color' : 'black',
                'background' : '#A3E4D755',
            }
                }
        },
        cliclicado2(){

        if(this.press == 2){
            return {
                'color' : 'black',
                'background' : '#A3E4D755',
            }
                }
        },
        cliclicado3(){

        if(this.press == 3){
            return {
                'color' : 'black',
                  'background' : '#A3E4D755',
              

            }
                }
        }
  
  
  
  },

  mounted () {
       
  this.count();

}





        ,
  methods: {

        count (){
        var countDownDate = new  Date().getTime()
        countDownDate = date.addToDate(countDownDate, {seconds: 30 })

	setInterval(() => {
  
     var now = new Date().getTime();
            var distance = countDownDate - now;
              var seconds = Math.floor((distance % (1000 * 30)) / 1000);
              this.value1 = seconds;
  }, 1000)

        },

        pressionar(val,resp){
        this.pressed = true
        this.color = 'light-green-6'  
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
        
        var audio = new Audio(this.soundExito);
        audio.play();

      
      }else{
        this.alertaErrado()
       
        var audio = new Audio(this.soundError);
        audio.play();
        }
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 2000)
    },
    alertaErrado (val) {

      let tipsErrors = ['Que azar eieinn...','Escolha com sabedoria,você é capáz ','Você pensou directo?, eu acho que não.','Lê o dicionário para aumentar as chances de acertar', 'Eu confio em ti,não desista' , 'Ohhh que pena, não desanime...! ' , 'Que tal a próxima?', 'Eu acho que da próxima vais acertar ']; 

      var rand = Math.floor(Math.random() * tipsErrors.length);    

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

        let tips = ['Waauu , você é inteligente...','Nice,tou feliz por ti ','Estás com muita sorte hoje, nem?','Viva, a vida é bela quando fazemos as escolhas certas', 'Estás me surpreender, que bom.' , 'Estás num bom caminho, continue assim ' , 'Que lindo...', 'Perfeito ao cubo...é nice acertar, nem ?']; 

      var rand = Math.floor(Math.random() * tips.length);    
      this.$q.dialog({
        title: 'Certa  resposta  <span class="text-h4 q-pl-lg q-pt-xl">  😂  </span>  ',
        message: tips[rand],
        position: 'bottom',
        color : 'green',
        style: 'background :#ccffcc ; color: green ; font-size: 16px ' ,
        ok : 'Continuar',
        html: true
        

      },
      
      
      )
    },
  }
  
}
</script>


<style>

@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans&display=swap');

.ex {
font-family: 'Alegreya Sans', sans-serif;

}


</style>