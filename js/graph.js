var matrix
var keepDisplay=true;

function appendArrows(level){
	var y=(150*(level+1))+((level)*25)+2;
	var arrowContainer=matrix.append("g")
	.attr("class","arrows");
	arrowContainer.append("path")
	.attr("d","M70 "+y+" L80 "+(y+10)+" L90 "+y)
	.attr("class","animate-arrow");
	arrowContainer.append("path")
	.attr("d","M70 "+(y+10)+" L80 "+(y+20)+" L90 "+(y+10))
	.attr("class","animate-arrow");

}

function initMatrix(){
	d3.select("svg").remove();
	matrix=d3.select("#matrix")
		.append("svg")
		.attr("width","1000%")
		.attr("height","1000%")
		.style("display","block")
		.style("overflow","visible");
}

function getLevel(level){
	if(document.getElementById("level"+level))
		return d3.select("#level"+level);
	else{
		matrix
		.append("g")
		.style("float","center")
		.attr("x","0")
		.attr("transform","translate(0,"+175*level+")")
		.attr("width","100%")
		.attr("height","100%")
		.style("display","block")
		.style("stroke","#000000")
		.attr("id","level"+level)
		.style("overflow","scroll");
	}
	return d3.select("#level"+level);
}

function createMatrix(level,data){
	var row=level.selectAll("rowClass")
		.data(data)
		.enter()
		.append("g")
		.attr("class","rowClass");
	
	var col=row.selectAll("g")
			.data(function(d){return d;})
			.enter()
			.append("g");
	col
		.append("rect")
		.attr("x",function(d){return d.x;})
		.attr("y",function(d){return d.y;})
		.attr("width",function(d){return d.width;})
		.attr("height",function(d){return d.height;})
		
		.style("stroke","red");
	col
		.append("text")
		.text(function(d){return d.text;})
		.attr("x",function(d){return (d.x+(d.width/2));})
		.attr("y",function(d){return (d.y+(d.height/2));})
		.attr("fill","white")
		.attr("text-anchor","middle")
		.attr("stroke","white")
		.attr("alignment-baseline","central");
}

function addNodeAtLevel(node,levelName,data){
	node="node"+node;
	var level=getLevel(levelName);
	var lastSvg=level.selectAll("svg.node");
	appendArrows(levelName);
	var len=lastSvg["_groups"][0].length;
	var x=0;
	if(len>0)
		x=152+parseInt(lastSvg["_groups"][0][len-1].getAttribute("x"));
	
	var rowLevel=level
	.append("g")
	.attr("width","152px")
	.attr("height","152px")
	.attr("x",x)
	.style("overflow","scroll")
	.style("display","block")
	.style("margin","auto")
	.attr("class","node")
	.attr("id",node);
	var matrixData=buildMatrix(3,data);
	createMatrix(rowLevel,matrixData);
}

function removeNodeAtLevel(node,level){
	d3.select("#node"+node).remove();
}
function getNodeAtLevel(node,level,data){
	if(!document.getElementById("#node"+node))
		addNodeAtLevel(node,level,data);
}

$("#solve").click(function(){
	var arr=new Array();
	var inputArr=$("#inputMatrix").text().trim();
	for(var i=0;i<N*N;i++)
		arr.push(+inputArr.charAt(i));
	console.log($("#inputMatrix").text());
	main(N,arr);
	if(Number.isInteger($("#N").val()))
		main($("#N").val());
});

