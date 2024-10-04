en la terminal escrbir :
npm init -y  //coloco enter me devuelve en package.json con toda la configuracion

en el package.json intala automaticamente 
  {"name": "agenda",//es el nombre
  "version": "1.0.0",
  "main": "index.js",//es el archivo principal
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"//un escrip basico
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

.......................
sigo agregando dependencias en la terminal:
npm i express
npm i nodemon
nmp i mysql2
npm i pug


voy a trababajar con modulos hay gente que trabaja con requare pero yo voy a trabajar con modulos
index.js es el archivo principal

en el package.json tengo que avisarle que voy  trabajar con modulos entonces 
debajo del main debo escribir "type":"module",
y en el escripts como voy a trabajar con nodemon debo colocar debajo de test
"dev":"nodemon index.js"
esto permite que en mi consola cuando aga npm run dev se valla al scrip de "dev":"nodemon index.js"
osea hace una escucha al archivo index.js


////////////////////////
es un sencillo programa usando node,js y mysql2 que agrega y elimina

para leventar el servidor en la consola escribir node index.js   o npm run dev
para cerrar el servidor en la consola presiona ctol+cerrar
///////////////////////////

