import { Request, Response } from 'express'

export const pokemones = (req: Request, res: Response): any => {
  return fetch('https://pokeapi.co/api/v2/pokemon')
    .then(async (response) => {
      if (response.ok) return await response.json()

      return res
        .status(500)
        .json({ status: 500, message: 'internal server error' })
    })
    .then(async (data) => {
      const results: any[] = data.results
      const pokemones = results.map(async (result) => {
        const resp = await fetch(result.url)
        const pokemon = await resp.json()

        return [pokemon]
      })

      return await Promise.all(pokemones)
        .then((pokemon) => res.json(pokemon))
        .catch((err) => {
          console.error(err)
          return res
            .status(500)
            .json({ status: 500, message: 'internal server error' })
        })
    })
    .catch((err) => {
      console.error(err)
      return res
        .status(500)
        .json({ status: 500, message: 'internal server error' })
    })
}
