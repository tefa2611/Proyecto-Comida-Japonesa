(function(){
    const titlePfrecuentes = [...document.querySelectorAll('.pfrecuentes__title')];
    console.log(titlePfrecuentes)

    titlePfrecuentes.forEach(pfrecuentes =>{
        pfrecuentes.addEventListener('click', ()=>{
            let height = 0;
            let answer = pfrecuentes.nextElementSibling;
            let addPadding = pfrecuentes.parentElement.parentElement;

            addPadding.classList.toggle('pfrecuentes__padding--add');
            pfrecuentes.children[0].classList.toggle('pfrecuentes__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();