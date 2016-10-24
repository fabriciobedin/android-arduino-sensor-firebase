var firebase = require('firebase');

//essa parte, é copiada do firebase
//após criar o projeto, abra a opção projeto Web e copie o código pra cá
//apenas o que está entre os traços abaixo
//------------------------------------------------------------------------------------
var config = {
    apiKey: "AIzaSyAFns36dXaJbFrRBYK_XsoU649M0loIPXo",
    authDomain: "cloudhomeautomation-cfde9.firebaseapp.com",
    databaseURL: "https://cloudhomeautomation-cfde9.firebaseio.com",
    storageBucket: "cloudhomeautomation-cfde9.appspot.com",
    messagingSenderId: "498048127162"
  };
  firebase.initializeApp(config);
//------------------------------------------------------------------------------------

//jhonny five
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var light = new five.Light("A0");
  var valueLight = 0;
  	light.on("change", function() {
		if(valueLight != this.level){
			valueLight = this.level;
			console.log(valueLight);
			firebase.database().ref('sensor').set({
	    		light : this.level
	    })
		}
 	});
});
