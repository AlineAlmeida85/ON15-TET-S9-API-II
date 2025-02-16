const dbConfig = require("../models/dbConfig")

async function dbConnect(){
    return await dbConfig.bancoDeDados("filmes")
    
}

const getAll = async(request, response) => {
    const filmesJson = await dbConnect()
  
    response.status(200).send((filmesJson))
}

const getById = async(request, response) => {
  const filmesJson = await dbConnect()
  let idRequest = request.params.id
  let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

  response.status(200).send(filmeEncontrado)
}

const createMovie = async(request, response) => {
  let filmesJson = await dbConnect()
  let bodyRequest = request.body

    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: bodyRequest.title,
        Year: bodyRequest.Year,
        Rated: bodyRequest.Rated,
        Released: bodyRequest.Released,
        Runtime: bodyRequest.Runtime,
        Genre: bodyRequest.Genre,
        Director: bodyRequest.Director,
        Writer: bodyRequest.Writer,
        Actors: bodyRequest.Actors,
        Plot: bodyRequest.Plot,
        Language: bodyRequest.Language,
        Country: bodyRequest.Country,
        Awards: bodyRequest.Awards
    }
    filmesJson.push(novoFilme)
    
    response.status(201).send({
        "mensagem": "filmes cadastrado com sucesso",
        novoFilme
    })
}


module.exports ={
  getAll,
  getById,
  createMovie
}