import express from 'express'//importamos express,con esto tenemos expres listo para trabajar
import { agregarContacto,obtenerContactos, borrarContacto } from './src/mysql_conector.js'//aca importo la funcion conectar,agregarContacto,etc
let todos
const app = express()//iniciamos express,dentro  de app tenemos un objeto con toda la funcionalidad de express

//iniciamos el servidor
app.listen('8000',function(){//le decimos en que puerto lo va a escuchar y le pasamos una funcion una claback
    console.log('aplicacion iniciada en el puerto 8000---')

})


//configuracion de nuestro servidor y del los archivo staticos
app.set('views','./vistas')//le esta diciendo a node que las vistas van a estar en la carpeta llamada vistas
app.set('view engine','pug')//para renderizar usamos pug


//cconfiguracion de archivos estaticos
app.use(express.static('./vistas'))//  ./ es nuestra carpeta raiz
app.use(express.static('./src'))//le decimos de donde lo vamos a sacar nuestros archivos estaticos,reenderizamos las vistas
app.use(express.static('./css'))//aplicamos los estilos




app.get('/',function(req,res){//la ruta inicial es '/'  ,req es peticion y res es respuesta
//res.send('aplicacion iniciada todo va bien')
todos = obtenerContactos()/**en mysql_conector me devolvia todos que era todos los contactos */
res.render('index',{titulo:'Aplicacion de contacto',contactos:todos})//aca le digo que se valla a index.pug pero la extencion .pug no se pone y me reenderiza a la carpeta vistas
})//titulo es un objeto...todo es lo que resibo de mysql_conector.js y es un array de objetos

app.get('/agregar/:numero/:nombre',function(req,res){//capturamos el nombre y el numero viene en la peticion
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(numero,nombre)//agrega en la base de datos con una funcion que esta en mysql_conector.js
    res.redirect('/')//nos lleva a  la url inicial
    
    console.log(numero, nombre)

})

app.get('/borrar/:id', function(req,res){
    let id = req.params.id  /**estamos recogiendo el id que viene por la url */
    borrarContacto(id)
    res.redirect('/')
})



