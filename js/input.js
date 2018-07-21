var curIndex=0;
var input=$("#inputMatrix");
function drawInputMatrix(n){
	input.html("");
	for(var i=0;i<n*n;i++){
		input.append("<div id='index"+i+"' onclick='move("+i+","+n+")'><span class='center'>"+i+"</span></div>");
	}
}

function move(index,n){
	var clickedBox=$("#index"+index);
	$("#error").text("");
	var curBox=$("#index"+curIndex);
	if(curIndex-1==index || curIndex+1==index || curIndex-n==index || curIndex+n==index){
		//move left
		curBox.text(clickedBox.text());
		clickedBox.text("0");
		curIndex=index;
	}
	else
		$("#error").text("invalid move");
}