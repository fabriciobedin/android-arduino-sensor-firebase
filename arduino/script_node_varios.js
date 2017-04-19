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
  
  
//path do banco
var rootRef = firebase.database().ref();


//jhonny five
var five = require("johnny-five");
var accel;
var board = new five.Board();



board.on("ready", function() {
  var light = new five.Light("A0");
  var valueLight = 0;
  	light.on("change", function() {
		if(valueLight != this.level){
			valueLight = this.level;
			console.log(valueLight);
			firebase.database().ref('sensor-luz').set({
	    		light : this.level
	    	})
		}
 	});


    // Create a new analog `Accelerometer` hardware instance.
    //
    // five.Accelerometer([ x, y[, z] ]);
    //
    // five.Accelerometer({
    //   pins: [ x, y[, z] ]
    //   freq: ms
    // });
    //
    accel = new five.Accelerometer({
    pins: ["A2", "A3", "A4"],

    // Adjust the following for your device.
    // These are the default values (LIS344AL)
    //
    sensitivity: 96, // mV/degree/seconds
    zeroV: 478 // volts in ADC
    });


    accel.on("data", function(data) {
      console.log("raw: ", data);
      firebase.database().ref('sensor-accel-raw').set({
          raw : ("raw", data)
        })
     


    });

    linha adicionada..
    ;
    ;
    

    // "acceleration"
    //
    // Fires once every N ms, equal to value of freg
    // Defaults to 500ms
    //
    accel.on("acceleration", function(data) {
//
      console.log("acceleration", data);
      firebase.database().ref('sensor-accel-acceleration').set({
          acceleration : ("acceleration", data)
        })

    });

    // "orientation"
    //
    // Fires when orientation changes
    //
    accel.on("orientation", function(data) {

      console.log("orientation", data);

      firebase.database().ref('sensor-accel-orientation').set({
          orientation : ("orientation", data)
        })
    

    });

    // "inclination"
    //
     //Fires when inclination changes
    //
    accel.on("inclination", function(data) {

      console.log("inclination", data);

     firebase.database().ref('sensor-accel-inclination').set({
          inclination : ("inclination", data)
        })


    });

    // "change"
    //
    // Fires when X, Y or Z has changed
    //
    accel.on("change", function(data) {

      console.log("change", data);
      firebase.database().ref('sensor-accel').set({
          change : ("change", data)
        })

      
    });


  //var hygrometer = new five.Hygrometer({
  //  pin: "A1"
  //});

  //hygrometer.on("change", function() {
  //  console.log(this.relativeHumidity + " %");

  //  firebase.database().ref('sensor-dht11').set({
   //       umidade : (this.relativeHumidity + " %")
  //      })
  //});


var temperature = new five.Thermometer({
    pin: "A1"
  });

  temperature.on("data", function() {
    console.log("celsius: %d", this.C);
    console.log("fahrenheit: %d", this.F);
    console.log("kelvin: %d", this.K);

    firebase.database().ref('sensor-dht11').set({
        temperatura : ("celsius: %d", this.C)
      })
  });



  });

