document.addEventListener('DOMContentLoaded', () => {

     const rangeStart = document.getElementById('start');
     const rangeEnd = document.getElementById('end');


    rangeStart.addEventListener('change', heandler);
    rangeEnd.addEventListener('change', heandler);




   function heandler() {
        if(rangeStart.value >  rangeEnd.value || rangeEnd.value < rangeStart.value){
            rangeEnd.value = rangeStart.value = this.value;
        }
   }






});
