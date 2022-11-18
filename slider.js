(function(){
    
    const sliders = [...document.querySelectorAll('.person__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   
  
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
  
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
  
    const changePosition = (add)=>{
        const currentPerson = document.querySelector('.person__body--show').dataset.id;
        value = Number(currentPerson);
        value+= add;
  
  
        sliders[Number(currentPerson)-1].classList.remove('person__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }
  
        sliders[value-1].classList.add('person__body--show');
  
    }
  
  })();