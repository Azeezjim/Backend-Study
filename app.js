const http = require('http')

const saver = http.createServer((req, res )=> {
  console.log(req.url, req.headers, req.method)
  const url = req.url
  if (url === '/') {
    res.write('<html>')
    res.write('<head><hi>Welcome Page</hi></head>')
    res.write('<body><form action="/message" action="POST"><input test="text" name="message" ><button type="submit"></button></form></body>')
    res.write{'</html>'}
  }
  // process.emit()
  res.write('<html><h1>Hello devAzeezjim </h1></html>')
})

saver.listen(5005, () =>  console.log("listening..."))