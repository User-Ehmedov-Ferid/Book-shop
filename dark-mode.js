var isdark = false;
      var dark = document.getElementById("background");
      var float1 = document.getElementById("small");
      var btn = document.getElementById("other");
      var sun1 = document.getElementById("sun");
      var moon1 = document.getElementById("moon");
      
      var remove = float1.removeChild(moon1);
      
      function black(){
        if(isdark){
          dark.style.backgroundColor = "black";
          float1.style.float = "right" ; 
          btn.style.backgroundColor = "whitesmoke"
          float1.style.backgroundColor = "#212529"
          
          
          float1.append(moon1);
          float1.removeChild(sun1);
          isdark = false;
        }else {
          dark.style.backgroundColor = "white";
          float1.style.float = "left" ;
          btn.style.backgroundColor = "#212529";
          float1.style.backgroundColor = "whitesmoke";
          
          moon1.remove();
          float1.append(sun1);
          isdark = true;
        }
      }