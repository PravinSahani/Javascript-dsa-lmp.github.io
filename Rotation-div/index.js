let count =0;
function rotateBy180(){
    count = count+1;
    if(count %2 !==0){
        document.getElementById("box").
        style="transform: rotate(180deg);"
    }
    else{
        document.getElementById("box").
        style="transform: rotate(-180deg);"
    }
    document.getElementById("box").
    innerHTML = count;
}