const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const midddlewares = jsonServer.defaults({
    static:'./build'
});
const PORT = process.env.PORT || 8000;
server.use(midddlewares);
server.use(jsonServer.rewriter({
    '/api/*':'/$1',
}))
server.use(router);
server.listen(PORT, ()=> {
    console.log('server is running')
})