# Canteen Menu behind Nginx (mentor demo)

A small Node.js API and an Nginx reverse proxy. Nginx is the only service published to your laptop.

```
Browser -> 127.0.0.1:8090 -> nginx (port 80) -> app (port 3000)
```

## Start

```bash
docker compose up -d --build
curl -s -w ' [%{http_code}]\n' http://127.0.0.1:8090/api/menu
```

The first request returns **502 Bad Gateway**. That is the planned mistake: `nginx/nginx.conf` sends requests to the wrong port.

## Useful commands

| Command | What it shows |
| --- | --- |
| `docker compose logs nginx` | Nginx errors, including the upstream address it tried |
| `docker compose logs app` | The port the app listens on, and every request it receives |
| `docker compose exec nginx nginx -t` | Checks `nginx.conf` for mistakes |
| `docker compose exec nginx nginx -s reload` | Loads the edited `nginx.conf` without stopping Nginx |

## Stop

```bash
docker compose down
```
