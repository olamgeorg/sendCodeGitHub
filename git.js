
/// GET DATE///
const box = document.getElementById('box')
// const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
 function displayDate(){
    box.innerHTML=Date()
 }


 function hide(){
   document.getElementById('box').style.display='none';
   box.innerHTML=Date()
 }
 function show(){
   document.getElementById('box').style.display="block";
   box.innerHTML=Date()
 }