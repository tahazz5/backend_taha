# backend_taha

Backend Express prêt à être partagé entre plusieurs apps, avec documentation API intégrée et architecture plus avancée (controllers/services/validators).

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

## Documentation API

- Swagger UI: `http://localhost:5000/api/docs`
- JSON OpenAPI: `http://localhost:5000/api/docs.json`

## Endpoints principaux (v1)

- Auth: `/api/v1/auth`
- Utilisateurs: `/api/v1/users`
- Posts: `/api/v1/posts`
- Produits: `/api/v1/products`

## Sécurité

Les routes protégées attendent un header `Authorization: Bearer <token>`.

## Variables d'environnement

Créez un fichier `.env` :

```
MONGODB_URI=mongodb://localhost:27017/myapp
PORT=5000
```
