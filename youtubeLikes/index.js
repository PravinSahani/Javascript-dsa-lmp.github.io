let data =0;
let counter = document.getElementById("counter");
counter.innerText = data;
function increment(){
    data = data +1
    counter.innerText = data;
}
function decrement(){
    if(data===0){
        return;
    }
    data = data-1;
    counter.innerText = data;
}