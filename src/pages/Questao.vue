<template>
  
 <transition
  appear
  enter-active-class="animated fadeInLeft"
  leave-active-class="animated fadeOutLeft"
>
<q-page class="q-pa-sm  ex"

>

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


 <q-card class="my-card  " v-for="(questao,id) in questoes" :key="id">

      <q-card-section>
        <div class="text-h6">Selecione a tradução correta </div>
      </q-card-section>

        <q-card-section >
            <div class="text-subtitle2">Em  koty  <b > {{questao.questao}} </b> é : {{selecionado}}  </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical class="q-pa-lg">
        <div class="row q-pa-sm">
            <q-btn :ripple="false" :style="cliclicado1" @click="pressionar(1,questao.resposta, questao.id)" no-caps  push  class="col" style="border-radius: 8px">{{questao.resposta}}</q-btn>
            </div>
         <div class="row q-pa-sm">
            <q-btn :ripple="false"  :style="cliclicado2"  no-caps  push  class="col"  @click="pressionar(2,questao.possivelResposta1, questao.id)" style="border-radius: 8px">{{questao.possivelResposta1}}</q-btn>
            </div>
         <div class="row q-pa-sm">
            <q-btn :ripple="false" :style="cliclicado3" no-caps  push  class="col"   @click="pressionar(3,questao.possivelResposta2,questao.id)" style="border-radius: 8px">{{questao.possivelResposta2}}</q-btn>
            </div>
      </q-card-actions>
    </q-card>
</div>
<div class="row justify-center fixed-bottom q-pa-sm">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Enviar"
        class="q-mt-md full-width " 
        :color="color"
        @click="simulateSubmit"
        :disable="pressed===false"
        
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
   

</q-page>
 </transition>


</template>

<script>
import { date } from 'quasar'
let timeCounter ;

export default {
  data () {
    return {
      pressed: false,
      color : 'light-green-1',
      test: '',
      value1: 30,
      next: 1,
      timeCounter : 0,
      selecionado : '',
      submitting: false,
     progress1: 0.4,
      progress2: 0.1,
      press : '',
      resposta : '',
      soundExito : './statics/sound/win.mp3',
      soundError : './statics/sound/lose.mp3',
      id : '',
      questao: [
       {questao : 'Miyo',  possivelResposta1 : 'Aquele' , possivelResposta2: 'Tu',  resposta : 'Eu', feito: false} ,  
       {questao : 'Odjaa',  possivelResposta1 : 'Andar' , possivelResposta2: 'Olhar', resposta : 'Comer' ,feito: false} ,  
       {questao : 'Weyoh',  possivelResposta1 : 'Othó' , possivelResposta2: 'Porta', resposta : 'Tu', feito: false} ,  
       {questao : 'Wethetha',  possivelResposta1 : 'Escrever',possivelResposta2: 'Livro',resposta : 'Andar' , feito: false} ,  
       {questao : 'Ossahu',  possivelResposta1 : 'Levar' , possivelResposta2: 'Garrafa', resposta : 'Esquecer', feito: false} ,  
       {questao : 'Othulé',  possivelResposta1 : 'Copiar' , possivelResposta2: 'Lembar', resposta : 'Aquele', feito: false} ,  

      ]



      
    }
  },

  computed:{


        questoes(){
       let arrs = [];


          let   rand = Math.floor(Math.random() * this.questao.length);

                if((this.questao[rand].feito) === false){
                    arrs.push({
                        questao: this.questao[rand].questao,
                        possivelResposta1: this.questao[rand].possivelResposta1,
                        possivelResposta2 : this.questao[rand].possivelResposta2,
                        resposta: this.questao[rand].resposta,
                        id : rand
                    })
                
              if (this.next!=1){
                     

                     return arrs 

              } }   
                      
                return arrs 

        }
          ,

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

},

updated(){
  if(this.value1 == 1){
    this.gameOver()
  }
  
}


,

watch: {

next (val){

  if (val!=1)  {
     
     this.count()      
  }

}


}


        ,
  methods: {

        count (){
              
        var countDownDate = new  Date().getTime()
        countDownDate = date.addToDate(countDownDate, {seconds: 32 })

            
          this.timeCounter = setInterval(() => {
            
              var now = new Date().getTime();
                      var distance = countDownDate - now;
                        var seconds =   Math.floor((distance % (1000 * 30)) / 1000);
                        let newSecond = Math.floor((distance % (1000 * 30)) / 1000);
                         this.value1 = seconds;

                        if(this.next!=1){
                         this.value1 = newSecond   
                        }
            }, 1000) 

             

        },






        pressionar(val,resp,idSelected){

                  this.pressed = true
                  this.color = 'light-green-6'  
                  this.press = val
                  this.resposta = resp
                  this.selecionado = resp;
                  this.id = idSelected;
                  console.log( this.resposta)
        }
    ,



    gameOver(){

      const dialog = this.$q.dialog({
        title: 'Tempo excedido 🕛',
        message: 'Até a próxima   <span class="text-h6 q-pt-sm"> 👋 </span>',
        ok : 'Ok',
        html : true
        
      }).onOk(() => {
         this.$router.push('/diario')
        // console.log('OK')
      }).onDismiss(() => {
        clearTimeout(timer)
        // console.log('I am triggered on both OK and Cancel')
      })

      const timer = setTimeout(() => {

        dialog.hide()
        this.$router.push('/diario')
      }, 5000)
    

    },


    simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
      
        clearInterval(this.timeCounter)
        if (this.questao[this.id].resposta == this.resposta) {
        this.alertaCerto()
         this.pressed = false
        this.progress2 =  this.progress2+0.1;

        
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


      }).onOk(() => {
          this.pressed = false
           this.color = 'light-green-1'  
         this.press = 0
          this.selecionado = ''
           this.next++
      })
    },

/// color : #48D7FF    #78C800 #DDF4FF


    alertaCerto () {

        let tips = ['Waauu , você é inteligente...','Nice,tou feliz por ti ','Estás com muita sorte hoje, nem?','Viva, a vida é bela quando fazemos as escolhas certas', 'Estás me surpreender, que bom.' , 'Estás num bom caminho, continue assim ' , 'Que lindo...', 'Perfeito ao cubo...é nice acertar, nem ?']; 

      var rand = Math.floor(Math.random() * tips.length);    
      this.$q.dialog({
        title: 'Certa  resposta  <span class="text-h4 q-pl-lg q-pt-xl">  😂  </span>  ',
        message: tips[rand],
        position: 'bottom',
        color : '#78C800',
        style: 'background :#ccffcc ; color: green ; font-size: 16px ' ,
        ok : 'Continuar',
        html: true
      },  
      )
      .onOk(() => {
        this.next++
        this.selecionado = ''
        this.color = 'light-green-1'   
        this.pressed = false
        this.press = 0


      })
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