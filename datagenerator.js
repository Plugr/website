var Firebase = require('firebase');

var ref = new Firebase('https://hiveio.firebaseio.com/');

var user = 'riyer' //changes based on user input

var sensorPorts = 4

var portValues = []

var portAvailability = [] //true means available , false means not available



checkPortAvailability()



function checkPortAvailability(){
    ref.child("users").child(user).child('ports').on("value", function(snapshot) {
        var index = 0
        snapshot.forEach(function(childSnapshot){
            console.log(childSnapshot.child('type').val())
            if(childSnapshot.child('type').val() == 'empty'){
                portAvailability[index] = false
            }else{
                portAvailability[index] = true
            }

            index++
        })
    });  
}

setInterval(function(){
        


    for(var j = 0; j < sensorPorts; j++){
        if(portAvailability[j]){
            portValues[j] = Math.random() * 1000 //legitimate value of port1
        }else{
            portValues[j] = 'empty'
        }
    }

    for(var i = 0; i < sensorPorts; i++){
        
            ref.child('users').child(user).child('ports').child('port' + (i+1)).update({
                value: portValues[i]
            })
    }
                                                 

    
}, 500)



