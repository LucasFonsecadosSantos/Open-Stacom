const jsonServer = require('json-server')
const fileSystem = require('fs')
const server = jsonServer.create()
//const router = jsonServer.router('../mocks/data.json')
//const middlewares = jsonServer.defaults()

const cors = require("cors")

var databaseSet = [];

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSucessStatus: 200,
  methods: 'POST, PUT, GET'
}

server.use(cors(corsOptions));
server.use(jsonServer.bodyParser)

const getIDFromURL = (url) => {
  let tokens = url.split('/');
  return tokens[tokens.length - 1];
}

const isAuthorized = (req) => {

  if (req.method == 'GET') {
    console.log(databaseSet)
    for (let i=0; i<databaseSet.length; i++) {
      if (databaseSet[i].token == req.get('AUTH_TOKEN') && databaseSet[i].databaseFileName.substring(0, databaseSet[i].databaseFileName.length - 5) == getIDFromURL(req.originalUrl)) {
        return true;
      }
    }
    return false;
    //return req.get('AUTH_TOKEN') == "aopdjkopaksdopsd";
  }
}

server.post('/event/create', (req, res, next) => {
  databaseFile = `${req.body.id}.json`
  databaseSet.push( { "databaseFileName": databaseFile, "token": req.body.token} )
  fileSystem.writeFile(databaseFile, `{"event":[${JSON.stringify(req.body)}]}`, (err) => console.log(err))
  router = jsonServer.router(databaseFile)

  res.sendStatus(200)
})

server.get('/templates', (req, res, next) => {



});

server.get('/close/:id', (req, res, next) => {

  fileSystem.unlink(`${req.params.id}.json`, (err) => {
    console.log(err)
  })
  res.sendStatus(200)

})

server.use( ( req, res, next ) => {

  console.log(getIDFromURL(req.originalUrl))
  if (isAuthorized(req)) {
    router = jsonServer.router(`${getIDFromURL(req.originalUrl)}.json`)
    server.use(router)
    next()
  } else {
    res.sendStatus(400)
  }
} );

//server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
