function simulateMouseClick(element=document.querySelector('#formg > div > div > div > div > div > div > ul > li')){
    
    const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
    
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
window.onhashchange = function() { 
    //code  
    const isAtLocation = window.location.href.includes('admin/formularioextracao');
    if(isAtLocation){

    
        setTimeout(() => {
            let maindiv = document.querySelector('#formIndex > div.card-footer > div > div');
            const btn = document.createElement('button');
        btn.innerText='Outros'
        maindiv.append(btn) 
        btn.addEventListener('click',(e)=>{
           e.preventDefault();
            const d = document; 
        const element = d.querySelector('input.form-control');
        const btn = d.querySelector('#index-btn');
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(element, 'Ou');
        const ev3 = new Event('focus',{bubbles:true})
        const ev2 = new Event('input', { bubbles: true});
       
        
           nativeInputValueSetter.call(element, 'Ou');
            element.dispatchEvent(ev2);
            element.dispatchEvent(ev3);
            simulateMouseClick();
            simulateMouseClick(btn);
    
        })
        }, 2500);
    }
   
}