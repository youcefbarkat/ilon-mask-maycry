var timer = null;
var count = 10;
var changeState = function (state){
	document.body.className = 'bodys'+state;
	clearInterval(timer);
	count = 10;
	document.getElementById('countdown').innerHTML = count;
if(state == 2){
	timer = setInterval(function () {
		count = count-1;
	document.getElementById('countdown').innerHTML = count;
	
	if (count  == 3 ) {	
document.getElementById('fuck').className = 'fuck show';
document.getElementById('rock').className = 'rock'	
		
	}
	if (count  == 6 ) {
		
document.getElementById('rock').className = 'rock show';
	}
     if (count  <= 0 ) {
		document.getElementById('fuck').className = 'fuck';
		changeState(3);

	}
},1000);


	
} else if (state == 3) {
	var success = setTimeout(function()
	{
		var random = Math.round(Math.random()*10);
		console.log('random',random);
		if (random >5) {
			changeState(4);

		} else{
			changeState(5);
		}
	},2000);

	
}




 }