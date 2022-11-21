const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_filmes": "/filmes",
  "/adicionar_filme": "/filmes",
  "/editar_filme/:id": "/filmes/:id",
  "/deletar_filme/:id": "/filmes/:id",

  "/todos_os_cinemas": "/cinemas",
  "/adicionar_cinema": "/cinemas",
  "/editar_cinema/:id": "/cinemas/:id",
  "/deletar_cinema/:id": "/cinemas/:id",

  "/todos_os_produtos": "/produtos",
  "/adicionar_produto": "/produtos",
  "/editar_produto/:id": "/profutos/:id",
  "/deletar_produto/:id": "/produtos/:id",

  "/todos_os_cultureshop": "/cultureshop",
  "/adicionar_cultureshop": "/cultureshop",
  "/editar_cultureshop/:id": "/cultureshop/:id",
  "/deletar_cultureshop/:id": "/cultureshop/:id"
  }))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
