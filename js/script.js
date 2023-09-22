const btnAnterior = document.querySelector('.btnAnterior')
const btnSiguiente = document.querySelector('.btnSiguiente')
const apiKey = '3e747184efcfd89223c4bfd040944e68'
let pagina = 1

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${pagina}`)

    if (respuesta.status !== 200) {
      return
    }
    const { results } = await respuesta.json()

    let peliculas = ''
    results.forEach(pelicula => {
      peliculas += `
        <div class='pelicula'>
          <img class='poster' src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'>
          <h3 class='titulo'>${pelicula.title}</h3>
          <p>${pelicula.overview}</p>
        </div>
      `
    })

    document.getElementById('contenedor').innerHTML = peliculas
  } catch (error) {
    console.log(error.message)
  }
}

cargarPeliculas();