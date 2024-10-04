//importamos mysql
import mysql from 'mysql2'//aca tenemos toda la funcionalidad de mysql para poder funcionar
let todos   //es una variable global

//crear la conexion
const conector = mysql.createConnection({/**createconection realiza un objeto de coneccion */
  host:'localhost',
  user:'root',
  password:'',
  database:'agenda_contactos'/**nombre de la base de datos en el xampp */

})


//hay que saber si conecta o no para esto hacemos una funcion
const conectar = ()=>{  //la funcion se llama conectar
    conector.connect(err =>{ //recoge en una claback el error
        if(err)throw err//si hay un error la aplicacion crashea pero si no sale el cartel de conectado
        console.log('conectado')
    })
}


const agregarContacto = (numero ,nombre) => {
    const sql = `INSERT INTO agenda (id_contacto, numero_contacto, nombre_contacto) VALUES (${null},${numero},"${nombre}") ` 
    conector.query(sql, function(err, result, filed){
      if(err)throw err//lanza el error
      console.log(result)//imprime en consola si se ingreso el contacto
    
  })
}

const obtenerContactos = ()=>{
  const sql = 'SELECT * FROM agenda'
  conector.query(sql, function(err, result, field){/**es una calback que resibe 3 parametros el error,el resultado y las filas afectadas */
    todos = result  /**me devuelve un array */
  })
  return todos
}

const borrarContacto = id =>{  /**creamos la funcion */
  const sql = `DELETE FROM agenda where id_contacto=${id}`/**el id_contacto es el de la base de datos */
  conector.query(sql)
}







//lo exportamos para que despues se pueda importar
export{conectar, agregarContacto, obtenerContactos, borrarContacto}