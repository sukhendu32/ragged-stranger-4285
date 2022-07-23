
let count=100;

window.addEventListener("load",function(){
    
     console.log("in");
      
    let id=setInterval(function(){
      
        if(count==306){
          clearInterval(id)
          document.getElementById("rmv").style.display="none"
          document.getElementById("display").innerText="INDIA WON BY 1 RUN"
        }
  
        if(count==103){
          document.getElementById("score2").innerText=4;
        }

        if(count==110){
            document.getElementById("score2").innerText=5;

            count=count+6;
        }

        if(count==120){
            count=count+6;
        }

        if(count==130){
            count=304
        }
  
      document.getElementById("score").innerText=count;
      count++;
     
     },1000)

})




