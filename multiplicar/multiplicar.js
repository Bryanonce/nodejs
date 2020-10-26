//requires
const fs = require('fs');
const colors = require('colors');
let crearArchivo = (base,limite,pantalla=true)=>{
	return new Promise((resolve,reject)=>{
		const fs = require('fs');
		let data = '';
		let mensaje = '';
		for(let i=0; i <= limite; i++){
			data += `${base} * ${i} = ${base*i}\n`;			
		};
		if(pantalla){
			mensaje = `tablas/tabla-${base}.txt`;
			fs.writeFile(mensaje, data, (err) => {
		 	if (err) reject(err);
		});
		}else{
			console.log('**********************************'.green);
			console.log(`=========   tabla de ${base}   =========`.red);
			console.log('**********************************'.green);
			console.log(data)
			mensaje = "Proceso terminado";
		}
		resolve(mensaje);		
	})
}
module.exports={
	crearArchivo
}	