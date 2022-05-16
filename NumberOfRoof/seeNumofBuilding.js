function numberOfRoofs(arr)
  {
     max = arr[0];
	 let numofBuildings =1;
	 for(let i =0; i<arr.length; i++){
		 if(arr[i] < max){
			 continue;
		 }
		 else if(arr[i]>max){
			 numofBuildings++;
			 max = arr[i];
		 }
	 }
	 return numofBuildings;
  }