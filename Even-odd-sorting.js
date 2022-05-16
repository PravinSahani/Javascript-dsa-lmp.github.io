function sortEvenOdd(arr, arrSize)
  {
    let i = 0;
    let r = arrSize-1;
    let k =0;
    while(i<r){
      while(arr[i] % 2 !=0){
        i++;
        k++;
      }
      while(arr[r] % 2 == 0 && i<r){
        r--;
      }
      if(i<r){
        let temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
      }
    }
    let odd = new Array(k);
    for(let i =0; i<k; i++){
      odd[i] = arr[i];
    }
    
    let even = new Array(arrSize-k);
    for(let i = 0; i<arrSize-k; i++){
      even[i] = arr[k+i];
    }
    
    odd.sort(function(a,b){return b-a;});
    even.sort(function(a,b){return a-b;});

    return odd.concat(even);
  }

  let sortedValue = sortEvenOdd([1,2,3,5,4,7,10],7);
  console.log(sortedValue);