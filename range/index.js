document.addEventListener('DOMContentLoaded', () => {

    const data = [
        [ [], [1, 6500, 2, 15000], [2, 12000, 4, 30000], [3, 18000, 7, 52500], [4, 24000, 12, 90000], [6, 35000, 16, 127500] ],
        [ [], [], [1, 7000, 2, 15000], [2, 13000, 5, 37500], [3, 19000, 10, 75000], [5, 30000, 13, 112500] ],
        [ [], [], [], [1, 7000, 3, 22500], [2, 13000, 8, 60000], [4, 24000, 11, 97500] ],
        [ [], [], [], [], [1, 7000, 5, 37500], [3, 18000, 10, 75000] ],
        [ [], [], [], [], [], [2, 12000, 5, 37500] ],
    ];


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
        const startVal = parseInt(rangeStart.value);
        const endVal = parseInt(rangeEnd.value);

        if(startVal ===  endVal){

            dataDisplay([0,0,0,0]);

        } else {
            dataDisplay(data[startVal][endVal]);
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
