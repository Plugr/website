var Firebase = require('firebase');

var ref = new Firebase('https://plugr.firebaseio.com/');


setInterval(function(){
    
    if(ref.child('users').child('riyer').child('port1').child('type') != ''){
        ref.child('users').child('riyer').child('port1').update({
            value: Math.random() * 1000   
        })
    }
                                                 
    if(ref.child('users').child('riyer').child('port2').child('type') != ''){
        ref.child('users').child('riyer').child('port2').update({
            value: Math.random() * 1000   
        })
    }  
                                                 
    
    if(ref.child('users').child('riyer').child('port3').child('type') != ''){
        ref.child('users').child('riyer').child('port3').update({
            value: Math.random() * 1000   
        })
    }
                                                 

    
}, 100)

