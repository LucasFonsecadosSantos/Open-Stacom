const jsonServer = require('json-server')
const fileSystem = require('fs')
const server = jsonServer.create()
const router = jsonServer.router('./temp/db.json')
//const middlewares = jsonServer.defaults()

const cors = require("cors")

var databaseSet = [];

var corsOptions = {
  origin: '*',
  optionsSucessStatus: 200,
  methods: 'PUT, GET'
}

server.use(cors(corsOptions));
server.use(jsonServer.bodyParser)


const getIDFromURL = (url) => {
  let tokens = url.split('/');
  return tokens[tokens.length - 1];
}

const isAuthorized = (req) => {

  return true;
  // if (req.method == 'GET' || req.method == 'PUT') {

  //   for (let i=0; i<databaseSet.length; i++) {
  //     if (databaseSet[i].token == req.get('AUTH_TOKEN') && databaseSet[i].databaseFileName.substring(0, databaseSet[i].databaseFileName.length - 5) == getIDFromURL(req.originalUrl)) {
  //       return true;
  //     }
  //   }
  //   return false;
  //   //return req.get('AUTH_TOKEN') == "aopdjkopaksdopsd";
  // } else if (req.method == 'POST') {
  //   return true;
  // }
}

// server.get('/close/:id', (req, res, next) => {

//   fileSystem.unlink(`${req.params.id}.json`, (err) => {
//     console.log(err)
//   })
//   res.sendStatus(200)

// })
server.use(cors(corsOptions));
server.use(router)

server.use( ( req, res, next ) => {

  if (isAuthorized(req)) {
    next()
  } else {
    res.sendStatus(400)
  }
});

server.listen(3000, () => {
  console.log('JSON Server is running')
})
