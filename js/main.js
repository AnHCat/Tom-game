var timer=null;
window.onload=function(){
//	点击相应的按钮 ,播放相应的图片：动画名称，图片总数。
	document.getElementById("cymbal").onclick=function(){
		
		startAnimation("cymbal",13);
	}
	document.getElementById("drink").onclick=function(){
		
		startAnimation("drink",81);
	}
	document.getElementById("eat").onclick=function(){
		
		startAnimation("eat",40);
	}
	document.getElementById("fart").onclick=function(){
		
		startAnimation("fart",28);
	}
	document.getElementById("pie").onclick=function(){
		
		startAnimation("pie",24);
	}
	document.getElementById("scratch").onclick=function(){
		
		startAnimation("scratch",56);
	}
}
//播放动画的方法：动画名称和图片总数
function startAnimation(name,count){
	clearInterval(timer);
	var index=0;
	var img=document.getElementById("cat");
	 timer=setInterval(function(){
		//判断是否继续播放
		if(++index<count){
			img.src=getImageName(name,index)
		}
		else{
			//没有继续播放的图片，清楚播放器
			clearInterval(timer);
		}
	},500);
}

//图片路径
//根据动画名和图片索引返回图片名
function getImageName(name,index){
// img/Animations/angry/angry_00.jpg
	return  "img/Animations/"+name+"/"+name+"_"+getIndex(index)+".jpg";
}
//实现%2功能，如：1输出01,11输出11
function getIndex(index){
//	若小于10,拼接一个0
	if(index<10){
		return "0"+index;
	}
	else{
		return index;
	}
}
