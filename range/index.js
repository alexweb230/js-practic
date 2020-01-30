document.addEventListener('DOMContentLoaded', () => {

     const rangeStart = document.getElementById('start');
     const rangeEnd = document.getElementById('end');
     let dayThis = document.querySelector('.day_this');
     let dayOther = document.querySelector('.day_other');
     let moneyThis = document.querySelector('.money_this');
     let moneOther = document.querySelector('.money_other');


    rangeStart.addEventListener('change', heandler);
    rangeEnd.addEventListener('change', heandler);

    const dataDisplay = arr => {
        const [day, money, dayO, moneyO] = arr;
        dayThis.textContent = day;
        dayOther.textContent = dayO;
        moneyThis.textContent = money;
        moneOther.textContent = moneyO;

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

//1:12:35
