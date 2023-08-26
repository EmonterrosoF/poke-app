import { Request, Response } from 'express'

export const getTipoPokemones = (req: Request, res: Response): any => {
  return fetch('https://pokeapi.co/api/v2/type')
    .then(async (response) => {
      console.log(response.ok)
      if (response.ok) return await response.json()

      return res
        .status(500)
        .json({ status: 500, message: 'internal server error' })
    })
    .then((data) => {
      console.log(data)
      return res.json(data.results)
    })
    .catch((err) => {
      console.log(err)
      return res
        .status(500)
        .json({ status: 500, message: 'internal server error' })
    })
}
