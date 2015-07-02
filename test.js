var Firebase = require("firebase");

var ref = new Firebase("https://plugr.firebaseio.com/");


setInterval(function(){
    ref.child("riyer").update({
        moistureSensor: Math.random() * 100,
        lightSensor: Math.random() * 100,
        temperatureSensor: Math.random() * 100

    })
    
    ref.child("rjohnson").update({
        moistureSensor: Math.random() * 100,
        lightSensor: Math.random() * 100,
        temperatureSensor: Math.random() * 100

    })
    
    ref.child("ajain").update({
        moistureSensor: Math.random() * 100,
        lightSensor: Math.random() * 100,
        temperatureSensor: Math.random() * 100

    })
    
    ref.child("srucker").update({
        moistureSensor: Math.random() * 100,
        lightSensor: Math.random() * 100,
        temperatureSensor: Math.random() * 100

    })
}, 100)

