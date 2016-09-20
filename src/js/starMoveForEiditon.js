function starMove(obj,attar,target,fn){
    clearInterval(obj.timer);
    var k=0;
    obj.timer= setInterval(function(){
    	k++;
	    var current=parseInt(getStyle(obj,attar));
	    if(attar=="opacity"){
	    	current=parseInt(getStyle(obj,attar)*100);
	    }
	    if(attar=="scrollTop"){
	    	current=obj[attar];
	    }
	    //匀速版
	    //var speed=target>current?10:-10;
		var speed=(target-current)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
          console.log(current,target,speed,k)
		if(current==target){
		    clearInterval(obj.timer);
		   
		    if(fn){
			fn();
		    }
		   return;
		    //此处如果加上return会存在误差“1”；但不影响执行
		}

		if(attar=="opacity"){
			console.log(current,target);
			obj.style[attar]=(current+speed)/100;			
		}
		else if(attar=="scrollTop"){
			obj[attar]=current+speed;
		}
		else{
		    obj.style[attar]=current+speed+"px";
		}
    },60)
}



function getStyle(obj,attar){
    var oStyle=0;
    if(window.getComputedStyle){
	oStyle=getComputedStyle(obj);
    }
    else{
	oStyle=obj.currentStyle;
    }
    return oStyle[attar];
}
 function showBtn(allBtn, index) {
	// 清空所有按钮
	for (var j = 0; j < allBtn.length; j++) {
		allBtn[j].style.background = "red";
	}
	allBtn[index].style.background = "green";		
}
