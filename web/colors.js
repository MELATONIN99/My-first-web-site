var Links = {
    setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    // alist[i].style.color = color;
    // i = i + 1;
    //   } 
      $('a').css('color', color);
     }
    }
  var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
  
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
    }
            function nightDayHandler(event) {
                const bodyElement = document.querySelector('body');
                bodyElement.classList.toggle('night');

                const button = event.target;
              //         if(button.value ==='밤낮'){
              //           value = "day"
                      
              //         } 
              //         else {
              //         const bodyElement = document.querySelector('body');
              //         bodyElement.classList('night')  
              //          value = "night"
                
                
              //   }
              // }
              if(button.value !=='밤낮'){
              const bodyElement = document.querySelector('body');
              bodyElement.classList('night')  
               value = "night"
        
        
        }
      }

    
    // function nightDayHandler(){
    //     var target = document.querySelector('body');
    //       if(self.value ==='night'){
    //       self.value ='day';
          
    

        
    // } else {
    // self.value ='night';
    // }}
