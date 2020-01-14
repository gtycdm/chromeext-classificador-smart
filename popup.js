document.addEventListener('DOMContentLoaded', function() {
    const checkPageButton = document.getElementById('generateOutrosBtn');
    const inputIterationBtn = document.getElementById('inputIteration');
    const inputIterationMSBtn = document.getElementById('inputIterationMS');

    checkPageButton.addEventListener('click', function() {
    chrome.tabs.executeScript(null,{code:`
    (function(){
        const execOutros  = async (times=1,delayMs=200)=>{
          const d = document; 
          const delay = async t => new Promise(resolve => setTimeout(resolve, t));
          const element = d.querySelector('input.form-control');
          const btn = d.querySelector('#index-btn');
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
          nativeInputValueSetter.call(element, 'Ou');
          const ev3 = new Event('focus',{bubbles:true})
          const ev2 = new Event('input', { bubbles: true});
         
          
          const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
          function simulateMouseClick(element=d.querySelector('#formg > div > div > div > div > div > div > ul > li')){
            mouseClickEvents.forEach(mouseEventType =>
              element.dispatchEvent(
                new MouseEvent(mouseEventType, {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    buttons: 1
                })
              )
            );
          }
        
          for(let i = 0;i<times;i++){
            console.log(element)
             await  delay(delayMs)
             nativeInputValueSetter.call(element, 'Ou');
              element.dispatchEvent(ev2);
              element.dispatchEvent(ev3);
              await  delay(200)
              simulateMouseClick();
              await  delay(200)
              simulateMouseClick(btn);
          }
          alert('Outros Finished!!')
         
        }
        execOutros(${parseInt(inputIterationBtn.value) },${parseInt(inputIterationMSBtn.value)})
      })();
    
    `})
     
    }, false);
  }, false);