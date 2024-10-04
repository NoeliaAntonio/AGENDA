


const nombre=document.querySelector('#nombre')
const numero=document.querySelector('#numero')
const btnAgregar=document.querySelector('#btn_agregar')
const btnBorrar=document.getElementsByClassName('borrar')//me va a devolver un array de todos los elementos que tienen esta clase

btnAgregar.addEventListener('click', function(){//*le da funcionabilidad al boton/
    window.location.href = `agregar/${numero.value}/${nombre.value}`//cuando la pulsamos captura el nombre y el numero y lo manda a agregar

})

for(let i of btnBorrar){/**declaro una variable i y por cada uno de los elementos lo itero */
    i.addEventListener('click',function(){/**cuando se pulsa se realiza una funcion */
        let id= this.getAttribute('id')/**recoge el atributo id */
        window.location.href = `borrar/${id}`/**nos lleva a la url */
    })
}
