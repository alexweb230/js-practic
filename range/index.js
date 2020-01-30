document.addEventListener('DOMContentLoaded', () => {

     const rangeStart = document.getElementById('start');
     const rangeEnd = document.getElementById('end');


    rangeStart.addEventListener('change', heandler);
    rangeEnd.addEventListener('change', heandler);




   function heandler() {
       console.log('tt');
   }






});
