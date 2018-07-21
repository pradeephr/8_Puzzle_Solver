
var found=0;
var nodeNum=0;
var finalNode;
var N=3;
// arr state to be initialized before starting the search.
var leftBorderArr=new Array();
var rightBorderArr=new Array();
var topBorderArr=new Array();
var bottomBorderArr=new Array();

function Node(arr,index,depth,height){
		
		this.id=nodeNum++;
		this.arr=arr;
		this.parent=null;
		this.i=index;
		this.depth=depth;
		this.height=height;
	
	
	 this.getRightChild =function(){
		if(rightBorderArr.indexOf(this.i)>-1){
		   return null;
		}
		else{
			let tempArr=this.arr.slice();
			let i=this.i;
			var t=tempArr[i];
			tempArr[i]=tempArr[i+1]
			tempArr[i+1]=t;
			var rightChild=new Node(tempArr,i+1,this.depth+1,this.height+1);
			rightChild.parent=this;
			return rightChild;
		} 
	}
	
	this.getLeftChild= function(){
		if(leftBorderArr.indexOf(this.i)>-1){
		   return null;
		}
		else{
			let tempArr=this.arr.slice();
			let i=this.i;
			var t=tempArr[i];
			tempArr[i]=tempArr[i-1]
			tempArr[i-1]=t;
			var leftChild=new Node(tempArr,i-1,this.depth+1,this.height+1);
			leftChild.parent=this;
			return leftChild;
		} 
	}
	
	this.getTopChild= function(){
		if(topBorderArr.indexOf(this.i)>-1){
		   return null;
		}
		else{
			let tempArr=this.arr.slice();
			let i=this.i;
			let t=tempArr[i];
			tempArr[i]=tempArr[i-N]
			tempArr[i-N]=t;
			let topChild=new Node(tempArr,i-N,this.depth+1,this.height+1);
			topChild.parent=this;
			return topChild;
		} 
	}
	
	this.getBottomChild =function(){
		if(bottomBorderArr.indexOf(this.i)>-1){
		   return null;
		}
		else{
			let tempArr=this.arr.slice();
			let i=this.i;
			let t=tempArr[i];
			tempArr[i]=tempArr[i+N]
			tempArr[i+N]=t;
			let bottomChild=new Node(tempArr,i+N,this.depth+1,this.height+1);
			bottomChild.parent=this;
			return bottomChild;
		} 
	}
	
	this.equals =function(node2){
		if(node2==null || this.arr.length !== node2.arr.length)
	    	return false;
		for(var i = this.arr.length; i--;) 
		    if(this.arr[i] !== node2.arr[i])
		        return false;		
		return true;
	}
	
	this.finalState =function(){
		for(var i = this.arr.length; i--;) 
		    if(this.arr[i] !=i)
		        return false;		
		return true;
	}
	
	 this.searchAtDepth=function(root,depth){
		if(depth==-1){
			if(root.finalState()){
				finalNode=root;
				found=1;
			}
		}
		else{
			let child=null;
			child=root.getRightChild();
			if(child!=null && !child.equals(this.parent))
				this.searchAtDepth(child,depth-1);
			child=root.getLeftChild();
			if(child!=null && !child.equals(this.parent))
				this.searchAtDepth(child,depth-1);
			child=root.getTopChild();
			if(child!=null && !child.equals(this.parent))
				this.searchAtDepth(child,depth-1);
			child=root.getBottomChild();
			if(child!=null && !child.equals(this.parent))
				this.searchAtDepth(child,depth-1);
			return;				
		}		
	}
}
function iterativeDFS(root){
	var depth=0;
	buildMatrix(N,root.arr);
	while(found==0){
		initMatrix();
		root.searchAtDepth(root,depth);
		depth+=1;
	}; 
}

function main(n,arr){
	var index=0;
	N=n;
	for(var i=0;i<N;i++){
		topBorderArr[i]=i;
		bottomBorderArr[i]=(N*(N-1))+i;
		leftBorderArr[i]=N*i;
		rightBorderArr[i]=(N*i)+(N-1);
	}
	for(var i=0;i<N*N;i++)
	   if(arr[i]==0)
	    	index=i;
	var root=new Node(arr,index,0,0);
	found=0;
	iterativeDFS(root);
	while(finalNode!=null){
		getNodeAtLevel(finalNode.id,finalNode.height,finalNode.arr);
		finalNode=finalNode.parent;
	}
}
