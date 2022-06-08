// IMPORTS
const path = require("path")
const f = require('fastify')({ logger: false })
const fastifyStatic = require('fastify-static')



//STATIC DIRS
f.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
    prefix: '/public/',
})


// HTML PAGES
f.get('/', (request, reply) => {
    reply.sendFile('/assets/pages/index.html')

})






// ROUTING


const PORT = process.env.PORT || 8080;
// START SERVER
const start = async() => {
    try {
        await f.listen(PORT)
    } catch (err) {
        f.log.error(err)
        console.log(err)
        process.exit(1)
    }
}
start().then(r => r)