<template>
  <h1>Estudiante</h1>

  <div id="mensaje">
    <h2>Ingrese el ID del estudiante a buscar:</h2>
    <input type="text" v-model="id" placeholder="ID">
    <button v-on:click="obtenerEstudiante()">Buscar</button>
  </div>

  <div id="resultado">
    <h2>Nombre: {{nombre}}</h2>
    <h2>Apellido: {{apellido}}</h2>
    <h2>Fecha de nacimiento: {{fecha}}</h2>
    <h2>Sueldo: {{sueldo}}</h2>
  </div>
  </template>
  
  <script>
  import getEstudiante from "../helpers/metodos.js"

  export default {
    name: "Estudiante",
      data() {
        return {
          id:0,
	        nombre:"",
	        apellido:"",
	        fecha:"",
		sueldo:0
        }
      },
      methods: {
        async obtenerEstudiante() {
          const est = await getEstudiante(this.id)
          console.log("Consultado")
	        this.nombre = est.nombre
	        this.apellido = est.apellido
		this.fecha = est.fechaNacimiento
		this.sueldo = est.sueldo
        }
      }
  }
  </script>
  
  <style scoped>
  h1{
    text-align: center;
  }

  #mensaje{
    text-align: center;
    justify-content: center;
  }

  #mensaje button{
    text-align: center;
    background-color:cadetblue;
    padding: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 14px;
    margin: 10px;
    border-radius: 15%;
  }

  </style>