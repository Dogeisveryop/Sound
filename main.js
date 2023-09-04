function start() {
    navigator.mediaDevices.getUserMedia({audio : true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1qLQUloai/model.json",modelready );
 }
 
 function modelready(){
     classifier.classify(gotresult);
 }
 
 function gotresult( error , result ) {
     console.log("Got the results");
     if (error) {
         console.log(error);
     } else {
         console.log(result);
 
         number_r = Math.floor(Math.random()*255)+1 ;
         number_g = Math.floor(Math.random()*255)+1 ;
         number_b = Math.floor(Math.random()*255)+1 ;
 
         document.getElementById("sound").innerHTML = "I can hear - "+result[0].label ;
         document.getElementById("accuracy").innerHTML = "Accuracy - "+(result[0].confidence*100).toFixed(2)+" % " ;
 
         document.getElementById("sound").style.color = "rgb("+number_r+" , "+number_g+" , "+number_b+")" ;
         document.getElementById("accuracy").style.color = "rgb("+number_r+" , "+number_g+" , "+number_b+")" ;
 
         img1 = document.getElementById("alien1") ;
         
         if (result[0].label == "Meow") {
             img1.src = "Cat.jpeg" ;
             
         }
         else if (result[0].label == "Roar") {
             img1.src = "Lion.jpeg" ;
             
         }
         else if (result[0].label == "Bark") {
             img1.src ="Dog.jpeg" ;
             
         }
         else {
             img1.src = "Parrot.jpeg" ;
             
         }
 
     }
 }