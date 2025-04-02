//your code here
let dragIndex = 0;
let dropIndex = 0;
let clone="";

const images = document.querySelectorAll(".image");

function drag(event){
	event.dataTransfer.setData("text", event.target.id);
}

function drop(event){
	event.preventDefault();
	clone = event.target.cloneNode(true);
	let data=event.dataTransfer.getData("text");
	const parentNode = document.getElementById("parent");
	let nodelist = parentNode.childNodes;

	nodelist.forEach((list, index) => {
		if(list.id == data)
		{
			dragIndex = index;//storing the dragged element index
		}
	});
//inserting 
    parentNode.insertBefore(clone, document.getElementById(data));
    //replacing
    parentNode.replaceChild(document.getElementById(data), event.target);
}
	

function allowDrop(event){
	event.preventDefault();
}

const dragdrop = (image) =>{
	//do something
	//console.log(image)
	image.ondragstart = drag;
	image.ondragover = allowDrop;
	image.ondrop = drop;
}

images.forEach(dragdrop);





