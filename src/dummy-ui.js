import 'babel-polyfill'
import express from 'express'
import webui from './webui'
import Store from './store'
import inMemoryStore from '../test/_in-memory-store'

const store = new Store(inMemoryStore())

const dummySpark = {
  getRoom: async () => ({ title: "Movers & Shakers" })
}

const dummyBot = {
  say: () => {}
}

const app = express()

webui.setupApp(app, dummySpark, store, dummyBot)

app.get('/', (req, res) => res.send(`
  <a href="/space/dummySpaceId-1234567890">
    Dummy Form
  </a>
`))

app.listen(4000, () => console.log('Dummy web UI listening http://localhost:4000'))
