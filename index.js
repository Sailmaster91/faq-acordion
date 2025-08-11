
//const respuestas = pregunta.querySelectorAll(".faq-response")
const buttonPlus = document.querySelectorAll(".faq-icon");

const mostrarRespuesta = (evento) =>{
    
    if(!evento.closest("li")) return;
    const respuesta = evento.closest("li").querySelector(".faq-response");
    if(respuesta){respuesta.classList.toggle('active')
    }
    
    
}

const cambiarIcono = (icono) => {
    
    if(icono.dataset.status == 'open')
    {
        icono.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26">
        <path fill="#AD28EB" d="M13 0a13 13 0 1 0 13 13A13 13 0 0 0 13 0Zm5.5 14h-4v4a1 1 0 0 1-2 0v-4H8.5a1 1 0 0 1 0-2H12v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2Z"></path>
        </svg>`;
        
        icono.dataset.status = 'close';
    }
    else if(icono.dataset.status == 'close')
    {   
        icono.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26">
        <path fill="#301534"
        d="M13 0a13 13 0 1 0 13 13A13 13 0 0 0 13 0Zm5.5 14H7.5a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2Z" />
        </svg>`;

        icono.dataset.status = 'open';
    }
}
/*
buttonPlus.forEach((boton) => {
    boton.addEventListener('click', (e)=> mostrarRespuesta(e.target))
});
*/
const lista = document.getElementById('lista');
 

lista.addEventListener('click', (e)=>{
    const boton = e.target.closest('.faq-icon');
      
   
    if(boton)
    {
         const icono = boton.querySelector('svg');
    if(!icono.dataset.status)
    {
        icono.dataset.status = 'close';
    }

        cambiarIcono(icono);
        mostrarRespuesta(boton);
    }
})

