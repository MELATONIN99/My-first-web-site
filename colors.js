var Links = {
    setColor:function(color){
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
                if (bodyElement.classList.contains('night')) {
                  localStorage.setItem('밤낮저장', 'night');
              } else {
                  localStorage.setItem('밤낮저장', 'day');
              }
          }
          document.addEventListener('DOMContentLoaded', function() {
            const savedValue = localStorage.getItem('밤낮저장');
            const bodyElement = document.querySelector('body');
            
            if (savedValue === 'night') {
                bodyElement.classList.add('night');
            }
        });
            
        //       // if(button.value !=='밤낮'){
        //       bodyElement.classList('night')  
        //        value = "night"
        //         localStorage.removeItem('밤낮저장','밤낮저어장');
        // }
      // }

// CLOCK SCRIPT
const clock = document.querySelector("#clock")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// getClock 을 바로 불러줘야 1초뒤에 시계가 작동하는게아닌
// 불러와서 바로작동가능
getClock();
setInterval(getClock, 1000);


    