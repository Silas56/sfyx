function random(min,max){
	return min+parseInt(Math.random()*(max-min+1));
}
function randomFour(){
	var str='';
	for(var i=0;i<4;i++){
		str +=random(0,9);
	}
	return str;
}