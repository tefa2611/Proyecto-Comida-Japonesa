const barra = document.getElementById('barra');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

/*Filtro Platillos*/
const btntodos = document.querySelector('.todos');
const btnsushi = document.querySelector('.sushi');
const btnsoba = document.querySelector('.soba');
const btnonigiri = document.querySelector('.onigiri');
const btnbento = document.querySelector('.bento');
const btnsopa = document.querySelector('.sopa');
const btnsashimi = document.querySelector('.sashimi');
const btndumpling = document.querySelector('.dumpling');
const contenedor = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
  platillos();
})


if (barra) {
    barra.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/*Detalle del producto*/
let preveiwContainer = document.querySelector('.pro-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.pro-container .pro').forEach(pro =>{
  pro.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = pro.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

/*Filtro de platillos*/
const platillos = () =>{
  let platillosArreglo = [];
  const platillos = document.querySelectorAll('.platillo');

  platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

  const dumpling = platillosArreglo.filter(dumpling=> dumpling.getAttribute('data-platillo') === 'dumpling');
  const sashimi = platillosArreglo.filter(sashimi => sashimi.getAttribute('data-platillo') === 'sashimi');
  const sopa = platillosArreglo.filter(sopa => sopa.getAttribute('data-platillo') === 'sopa');
  const sushi = platillosArreglo.filter(sushi => sushi.getAttribute('data-platillo') === 'sushi');
  const bento = platillosArreglo.filter(bento => bento.getAttribute('data-platillo') === 'bento');
  const sobaudon = platillosArreglo.filter(sobaudon => sobaudon.getAttribute('data-platillo') === 'sobaudon');
  const onigiri = platillosArreglo.filter(onigiri => onigiri.getAttribute('data-platillo') === 'onigiri');

  mostrarPlatillos(dumpling, sashimi, sopa, sushi, bento, sobaudon, onigiri, platillosArreglo);
}
const mostrarPlatillos = (dumpling, sashimi, sopa, sushi, bento, sobaudon, onigiri, todos) =>{
  btndumpling.addEventListener('click', ()=>{
    limpiarHTML(contenedor);
    dumpling.forEach(dumpling=> contenedor.appendChild(dumpling));
  });

  btntodos.addEventListener('click', ()=>{
    limpiarHTML(contenedor);
    todos.forEach(todos=> contenedor.appendChild(todos));
  });

  btnsushi.addEventListener('click', ()=>{
    limpiarHTML(contenedor);
    sushi.forEach(sushi=> contenedor.appendChild(sushi));
  });

  btnsoba.addEventListener('click', ()=>{
    limpiarHTML(contenedor);
    sobaudon.forEach(sobaudon=> contenedor.appendChild(sobaudon));
  });

  btnonigiri.addEventListener('click', ()=>{
    limpiarHTML(contenedor);
    onigiri.forEach(onigiri=> contenedor.appendChild(onigiri));
  });

  btnbento.addEventListener('click', ()=>{
    limpiarHTML(contenedor);
    bento.forEach(bento=> contenedor.appendChild(bento));
  });

  btnsopa.addEventListener('click', ()=>{
    limpiarHTML(contenedor);
    sopa.forEach(sopa=> contenedor.appendChild(sopa));
  });

  btnsashimi.addEventListener('click', ()=>{
    limpiarHTML(contenedor);
    sashimi.forEach(sashimi=> contenedor.appendChild(sashimi));
  });
}
const limpiarHTML = (contenedor) =>{
  while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild);
  }
}