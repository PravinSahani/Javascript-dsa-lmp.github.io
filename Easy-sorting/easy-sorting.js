function easySorting(arr)
  {
    for(let i=0; i<5; i++){
      for(let j=i; j>=1; j--){
        if(arr[j]< arr[j-1]){
          let temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp;
        }
        else {
          break;
        }
      }
    }
    
    return arr;
  }

 console.log(easySorting(['AB','CD','EF','MG']));