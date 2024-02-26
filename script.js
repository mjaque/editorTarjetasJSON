class EditorJSON {
	constructor(base){
		this.base = base
		this.iTitulo = base.querySelectorAll('input')[0]
		this.taDescripcion = base.querySelectorAll('textArea')[0]
		this.iVersion = base.querySelectorAll('input')[1]
		this.divTarjetas = base.querySelectorAll('div')[0]
		this.btnAgregarTarjeta = base.querySelectorAll('button')[0]
		this.btnGuardar = base.querySelectorAll('button')[1]
		
		this.btnAgregarTarjeta.onclick = this.agregarTarjeta.bind(this)
		this.btnGuardar.onclick = this.guardar.bind(this)
	}
	
	agregarTarjeta = () => {
		const divNuevaTarjeta = this.crearTarjeta( new Tarjeta(), this.divTarjetas.children.length )
		this.divTarjetas.appendChild(divNuevaTarjeta)
		const taNuevaPregunta = divNuevaTarjeta.querySelectorAll('textArea')[0]
		taNuevaPregunta.focus()
	}

	crearTarjeta = (tarjeta, index) => {
		const divTarjeta = document.createElement('div')
		divTarjeta.classList.add('tarjeta')
		
		const lblPregunta = document.createElement('label')
		divTarjeta.appendChild(lblPregunta)
		lblPregunta.textContent = `Pregunta ${index + 1}:`
		const taPregunta = document.createElement('textarea')
		divTarjeta.appendChild(taPregunta)
		taPregunta.value = tarjeta.pregunta
		
		const lblRespuesta = document.createElement('label')
		divTarjeta.appendChild(lblRespuesta)
		lblRespuesta.textContent = 'Respuesta:'
		const taRespuesta = document.createElement('textarea')
		divTarjeta.appendChild(taRespuesta)
		taRespuesta.value = tarjeta.respuesta
		
		const btnEliminar = document.createElement('span')
		divTarjeta.appendChild(btnEliminar)
		btnEliminar.classList.add('btnEliminar')
		btnEliminar.textContent = 'Eliminar'
		btnEliminar.onclick = () => {divTarjeta.remove()}
		
		return divTarjeta
	}
	
	guardar = () => {
		console.log('Pendiente')
		const tarjetas = new Tarjetas()
		tarjetas.titulo = this.iTitulo.value;
		tarjetas.descripcion = this.taDescripcion.value;
		tarjetas.version = this.iVersion.value;

		// Leer las preguntas y respuestas de los textareas y guardarlos en el array de preguntas
		this.divTarjetas.querySelectorAll('div').forEach((divPregunta, index) => {
			const tarjeta = new Tarjeta()
			tarjeta.pregunta = divPregunta.querySelectorAll('textarea')[0].value
			tarjeta.respuesta = divPregunta.querySelectorAll('textarea')[1].value
			tarjetas.tarjetas.push(tarjeta)
		})

		console.log(JSON.stringify(tarjetas));
	}
}

class Tarjetas {
	constructor(){
		this.titulo = null
		this.descripcion = null
		this.version = null
		this.tarjetas = []
	}
}

class Tarjeta{
	constructor(){
		this.pregunta = null
		this.respuesta = null
	}
}

window.onload = new EditorJSON(document.getElementById('editorJSON'))


