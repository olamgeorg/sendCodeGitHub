
/// GET DATE///     click and learn 
// const box = document.getElementById('box')
// // const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');
//  function displayDate(){
//     box.innerHTML=Date()
//  }


//  function hide(){
//    document.getElementById('box').style.display='none';
//    box.innerHTML=Date()
//  }
//  function show(){
//    document.getElementById('box').style.display="block";
//    box.innerHTML=Date()
//  }


////////////TOGET DROP-WON///////
function myFunction(){
  document.getElementById('myDropdown').classList.toggle('show');

}
window.onclick = function(event){
  if(!event.target.matches('.dropbtn')){
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for(let i = 0; i < dropdowns.length; i++){
      openDrop = dropdowns[i];
      if(openDrop.classList.contains('show')){
        openDrop.classList.remove('show')
      }
      
    }
  }
}
