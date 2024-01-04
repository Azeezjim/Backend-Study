const http = require('http')
const fs = require('fs')

const saver = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method)
  const url = req.url
  if (url === '/') {
    res.write('<html>')
    res.write('<head><hi>Welcome Page</hi></head>')
    res.write('<body><form action="/message" action="POST"><input test="text" name="message" ><button type="submit">Semd</button></form></body>')
    res.write('</html>')
    return res.end
  }
  // process.emit()
  if (url === '/', method === 'POST') {
    fs.writeFileSync('message.tsx', 'Dummy')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end
  }
  res.write('<html>')
  res.write('<head><hi>Welcome Page</hi></head>')
  res.write('<body><h1>Welcome To The Welcome Page</h1></body>')
  res.write('</html>')
  res.end

})
saver.listen(5005, () => console.log("listening..."))