var counter = document.querySelector('#Input-Box');
var count = document.getElementById('Count');
var submitbutton = document.getElementById('Submit-Button');

counter.addEventListener('input',function(event){
    const currval = counter.value;
    const numval = currval.replace(/[^0-9]/, '').slice(0,1);
    counter.value = numval;
});

submitbutton.addEventListener('click',function(){
    if(counter.value == '')return;
    
});

submitbutton.addEventListener('keydown',function(event){
    if(counter.value == '')return;
    
});
