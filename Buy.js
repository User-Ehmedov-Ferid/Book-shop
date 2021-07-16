var security = 
[{
    email : "admin" , 
    password : "admin"
    
}];
var x;
var enteremail;
var enterpassword;
function control(){
   enteremail =  document.getElementById("email").value;
   enterpassword = document.getElementById("password").value;
    for(x of security){
        if((x.email == enteremail)&&(x.password==enterpassword)){
            return true;            
        }
    }
}    
function confirmed(){
    control();
    if(control()){
        alert("The order was confirmed");
    }else{
        alert("The order wasn't confirmed. Please  enter your email or password  correctly ");
    }
}


