import express from 'express'

import pokemonesRouter from './routes/pokemones.routes'
import tipoPokemonRouter from './routes/tipoPokemones.routes'

const app = express()

const port = process.env.PORT ?? 3000

app.use(express.json())

app.use('/api/pokemones', pokemonesRouter)
app.use('/api/tipo-pokemones', tipoPokemonRouter)

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
)
