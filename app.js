const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
//let argv2 = process.argv;
let base = argv.base;
let limite = argv.limite;
let fin = base;
comando = argv._[0];
switch(comando){
	case 'listar':
		if(!isNaN(base)){
			for(let i=base;i<=fin;i++){
			crearArchivo(i,limite,false)
			.then((creado)=>{
				console.log(creado);
			}) 
			}
		}else{
			console.log("La base debe ser un número")
		}
		break;
	case 'crear':
		if(!isNaN(base)){
			for(let i=base;i<=fin;i++){
			crearArchivo(i,limite)
			.then((creado)=>{
				console.log(`El proyecto ha sido creado en el directorio ${creado.underline.red}`);
			}) 
			}
		}else{
			console.log("La base debe ser un número")
		}
		break;
	default:
		console.log("Comando no reconocido");
}
//
		
