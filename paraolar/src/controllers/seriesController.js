const dbConfig = require("../models/dbConfig")

async function dbConnect(){
    return await dbConfig.bancoDeDados("series")
    
}

const getAll = async(request, response) => {
    const seriesJson = await dbConnect()
  
    response.status(200).send((seriesJson))
}

const getById = async(request, response) => {
  const seriesJson = await dbConnect()
  let idRequest = request.params.id
  let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)

  response.status(200).send(serieEncontrada)
}

const createSerie = async(request, response) => {
  let seriesJson = await dbConnect()
  let bodyRequest = request.body

    let novaSerie = {
        id: (seriesJson.length)+1,
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
    seriesJson.push(novaSerie)
    
    response.status(201).send({
        "mensagem": "Série cadastrada com sucesso",
        novaSerie
    })
}


module.exports ={
  getAll,
  getById,
  createSerie
}