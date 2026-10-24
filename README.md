# Cibena Website

Statische Website für Cibena: HTML, CSS und JavaScript ohne Build-Prozess.

## Dateien

- `index.html` – One-Page-Website mit SPA-artigen Kacheln
- `impressum.html` – Platzhalter für gesetzliche Angaben
- `datenschutz.html` – Platzhalter für Datenschutzerklärung
- `assets/css/styles.css` – Design und responsive Layout
- `assets/js/main.js` – Umschalten der Leistungskacheln
- `assets/img/` – Logo und Bilder

## Anpassen

Bitte vor dem Livegang prüfen und ggf. anpassen:

- Telefonnummer in `index.html`
- E-Mail-Adresse in `index.html`
- Adresse im Footer
- Öffnungszeiten
- Impressum
- Datenschutzerklärung

## Hosting auf V-Server

### Variante Nginx

1. ZIP entpacken, z. B. nach `/var/www/cibena`.
2. Nginx Server Block auf diesen Ordner zeigen lassen:

```nginx
server {
    listen 80;
    server_name cibena.de www.cibena.de;
    root /var/www/cibena;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. Danach:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Für HTTPS empfiehlt sich Certbot/Let's Encrypt.
