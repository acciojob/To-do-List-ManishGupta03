//your code here

//your code here
const input =document.getElementById("newTodoInput");
const oList=document.getElementById("todoList");
const button=document.getElementById("addTodoBtn");
button.addEventListener("click", onClick);
 function onClick(){
	if(input.value!==""){
		let list=document.createElement("li");
		list.innerText=input.value;
		oList.appendChild(list);
	}
	input.value="";
}