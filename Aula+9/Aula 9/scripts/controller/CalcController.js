

// criando uma classe
class CalcController { 

    constructor(){  // método construtor
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.initialize(); // método de inicialização

    }

    initialize(){
       this.setDisplayTime();
        setInterval(() => {
       this.setDisplayTime();
        }, 1000);

    }

       setDisplayTime(){
       
        this.displayDate = this.currentDate.toLocaleDateString( this._locale,{day:"2-digit",month:"long",year:"numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString( this._locale);
       };
            
        
    

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
         this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
         this._dateEl.innerHTML = value;
    }




    // Encapsulamento
    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){

        this._displayCalcEl.innerHTML = valor;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(valor){

        this._currentDate = valor;

    }

 

}