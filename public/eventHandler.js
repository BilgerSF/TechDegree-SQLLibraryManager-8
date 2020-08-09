/*
Redirects to /books route when the search word has been erased
*/
const element = document.querySelector('.search');
element.addEventListener('keydown',(e)=>{

    if( (element.value.length <= 1) && (e.key === 'Backspace') ){
         window.location.href = '/books'
         element.value = '';
    }
    console.log(element.value.length)
});

//Hidde nav button when no more records
let rows = document.querySelectorAll('td').length/4
if(rows < 10){
    document.querySelector('.nav').nextElementSibling.hidden = true;
}