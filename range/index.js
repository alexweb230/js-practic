document.addEventListener('DOMContentLoaded', () => {

     const rangeStart = document.getElementById('start');
     const rangeEnd = document.getElementById('end');
     let dayThis = document.querySelector('.day_this');
     let dayO = document.querySelector('.day_other');
     let money = document.querySelector('.money_this');
     let moneO = document.querySelector('.money_other');


    rangeStart.addEventListener('change', heandler);
    rangeEnd.addEventListener('change', heandler);

    const dataDisplay = arr => {
        const [day, money, dayO, moneyO] = arr;

    }
    const result = () => {
        if(rangeStart.value ===  rangeEnd.value){
            console.log('test')
            dataDisplay([0,0,0,0]);
        }
    };


   function heandler() {
        if(rangeStart.value >  rangeEnd.value || rangeEnd.value < rangeStart.value){
            rangeEnd.value = rangeStart.value = this.value;
        }
        result();
   }



});
