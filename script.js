function insert_Row() {
    //Write your code here
	let t1 = document.querySelector("#sampleTable");
	let newrow=t1.insertRow();
	let cell1=newrow.insertCell(0);
	let cell2=newrow.insertCell(1);
 
	cell1.textContent="New cell1";
	cell2.textContent="New cell2";
	
  
  
}
