var Firebase = require('firebase');

var ref = new Firebase('https://hiveio.firebaseio.com/');

var user = 'riyer' //changes based on user input    

setInterval(function(){
    
    if(ref.child('users').child('riyer').child('port1').child('type') != 'empty'){
        ref.child('users').child('riyer').child('port1').update({
            value: Math.random() * 1000   
        })
    }
                                                 
    if(ref.child('users').child('riyer').child('port2').child('type') != 'empty'){
        ref.child('users').child('riyer').child('port2').update({
            value: Math.random() * 1000   
        })
    }  
                                                 
    
    if(ref.child('users').child('riyer').child('port3').child('type') != 'empty'){
        ref.child('users').child('riyer').child('port3').update({
            value: Math.random() * 1000   
        })
    }
                                                 

    
}, 100)

