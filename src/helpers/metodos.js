const obtenerEstudianteApi = async (id) => {
    const data = await fetch(`http://localhost:8081/API/Matricula/V1/estudiantes/${id}`).then((r) => r.json());
    console.log(data)
    return data
}

const getEstudiante = async (id) => {
    return await obtenerEstudianteApi(id)
}

export default getEstudiante