var coolstuff = function(){
    var csss = document.getElementById('cool').className;
    if (csss == 'cool') {
        document.getElementById('cool').className = 'cool red';

    }else{
        document.getElementById('cool').className = 'cool';

    }
}
var saymyname = function (name) {
    alert('Your name is: '+name);
}
var car = {
mark: 'DACIA',
model: 'Duster',
color: 'grey',
isTurnedOn: false,
numberOfWheel: 4,
seats: [
'seat 1',
'seat 2',
'seat 3',
'seat 4',
'seat 5'
],

turnOn: function () {
	this.isTurnedOn = true;
},
fly: function () {
	alert('fly');

},
switchcar: function (isOn) {
	console.log("Turn car " + isOn);
	if (isOn == true){
		this.isTurnedOn = true;
	}else{
		this.isTurnedOn = false;
	}
}

}

console.log('hello there friends!');