const http = require('http');
const items = [{ id: 1, dish: 'Masala Dosa', price: 40 }, { id: 2, dish: 'Veg Biryani', price: 70 }, { id: 3, dish: 'Filter Coffee', price: 15 }];
const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url} from ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`);
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok' }));
  if (req.url === '/api/menu') return res.end(JSON.stringify(items));
  if (req.url === '/') return res.end(JSON.stringify({ app: 'Canteen Menu', try: '/api/menu' }));
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Not found' }));
});
const port = Number(process.env.PORT || 3000);
server.listen(port, () => console.log(`Canteen Menu app listening on port ${port}`));
