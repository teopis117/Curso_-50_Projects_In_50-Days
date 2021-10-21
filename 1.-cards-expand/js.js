// con querySelectorAll podemos seleccionar a todos los panels de nuestra pagina
const panels= document.querySelectorAll('.panel');


// hacemos un foreache para que cuando hagamos un click en cada panel pase un evento
panels.forEach((iterador)=>
{
iterador.addEventListener('click',()=>
{
//  removemos los actives  con esta funcion antes de agregar uno mas
    removerclases();
    iterador.classList.add('active');
})
});


function removerclases()
{
    panels.forEach((panel)=>
    {
        panel.classList.remove('active');
    })
}