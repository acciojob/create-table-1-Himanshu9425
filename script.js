function insert_Row() {
    //Write your code here
	let t1 = document.querySelector("#sampleTable");
	let newrow=t1.insertRow(0);
	let cell1=newrow.insertCell(0);
	let cell2=newrow.insertCell(1);
 
	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";
	
  
  
}
