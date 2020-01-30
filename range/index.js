document.addEventListener('DOMContentLoaded', () => {

     const rangeStart = document.getElementById('start');
     const rangeEnd = document.getElementById('end');


    rangeStart.addEventListener('change', heandler);
    rangeEnd.addEventListener('change', heandler);


    const result = () => {
        console.log('test');
    }


   function heandler() {
        if(rangeStart.value >  rangeEnd.value || rangeEnd.value < rangeStart.value){
            rangeEnd.value = rangeStart.value = this.value;
        }
        result();
   }



});
