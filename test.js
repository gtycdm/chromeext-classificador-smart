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
       await  delay(delayMs)
       nativeInputValueSetter.call(element, 'Ou');
        element.dispatchEvent(ev2);
        element.dispatchEvent(ev3);
        await  delay(200)
        simulateMouseClick();
        await  delay(200)
        simulateMouseClick(btn);
    }
   
  }
  execOutros(10,4000)
})();
