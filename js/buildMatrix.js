function buildMatrix(n,arr){
	var data= new Array();
	var xpos=1;
	var ypos=1;
	var width=50;
	var height=50;
	var startState=arr;
	var i=0;
	
	for(var row=0;row<n;row++){
		data.push(new Array());
		for(var col=0;col<n;col++){
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
				text: startState[i]
			});
			xpos+=width;
			i+=1;
		}
		xpos=1;
		ypos+=height;
	}
	 return data;
}












