//var matrixData= buildMatrix(3,[4, 3, 2, 1, 0, 5, 6, 7, 8]);
var matrix=d3.select("#matrix")
			.append("svg")
			.attr("width","100%")
			.attr("height","100%")
			.attr("viewBox","0 0 500 500");
console.log(matrix);
/*var level=matrix
				.append("g")
				.style("width","100%")
				.style("float","center")
				.attr("id","level0");

var rectangle=level
				.append("g")
				.style("display","block")
				.style("margin","auto")
				.attr("id","node0");
var row=rectangle.selectAll("row")
			.data(matrixData)
			.enter()
			.append("g")
			.attr("class","row");
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
		.style("fill","white")
		.style("stroke","black");
var dataFill=col
		.append("text")
		.text(function(d){return d.text;})
		.attr("x",function(d){return (d.x+(d.width/2));})
		.attr("y",function(d){return (d.y+(d.height/2));})
		.attr("fill","red")
		.attr("text-anchor","middle")
		.attr("alignment-baseline","central")
		.attr("font-family","sans-serif")
		.attr("font-size","20px");
var Level=getLevel("level0");
console.log(Level);*/

/*var d=$.get("/UIVisualization/rest/nextMove",function(data){
	console.log(data);
});*/

