var numSquares=6;
var colors=generate_random_colors(numSquares);
var squares =   document.querySelectorAll(".square");
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var pickedColor=pick_color();
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var displayColor=document.getElementById("displayColor");
displayColor.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");

easybtn.addEventListener("click",function(){
     easybtn.classList.add("selected");
     hardbtn.classList.remove("selected");
     numSquares=3;
      colors=generate_random_colors(numSquares);
      pickedColor=pick_color();
   displayColor.textContent=pickedColor;
   for(var i=0;i<squares.length;i++){
   	if(colors[i]){
	squares[i].style.backgroundColor=colors[i];
}
else{
	squares[i].style.display="none";
}
}
});
hardbtn.addEventListener("click",function(){
     hardbtn.classList.add("selected");
     easybtn.classList.remove("selected");
     numSquares=6;
     colors=generate_random_colors(numSquares);
      pickedColor=pick_color();
   displayColor.textContent=pickedColor;
   for(var i=0;i<squares.length;i++){
   	
	squares[i].style.backgroundColor=colors[i];

	squares[i].style.display="block";
}
});
resetButton.addEventListener("click",function(){
   colors=generate_random_colors(numSquares);
   pickedColor=pick_color();
   displayColor.textContent=pickedColor;
   this.textContent="New Colors";
    messageDisplay.textContent="";
   for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
}
    h1.style.backgroundColor="steelblue";
   
});

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
    	var clickedColor = this.style.backgroundColor;
    	if(clickedColor===pickedColor){
    		messageDisplay.textContent="correct!";
    		change_colors(clickedColor);
    		h1.style.backgroundColor=clickedColor;
    		resetButton.textContent=" Play Again "
    	}
    	else{
    		this.style.backgroundColor="black";
    		messageDisplay.textContent="try again";
    	}
    });
}
function change_colors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pick_color(){
	var i=Math.floor(Math.random()*colors.length);
	return colors[i];
}
function generate_random_colors(num){
	var arr=[]
	for(var i=0;i<num;i++){
      arr.push(random_colors())
	}
	return arr;
}
function random_colors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
