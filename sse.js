const http = requre('http')

http.createServer((req, res) => if(req.url === '/event'){
    res.writeHead(200,
        'Content-Type' : 'text/event-stream',
        'Cache-Control' : 'no-cache',

    )
}

)