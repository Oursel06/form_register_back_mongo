# form_register_back_mongo

Ce projet est une API Node.js avec MongoDB permettant la gestion de posts (exemple d'enregistrement de formulaire).

## Prérequis

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (local ou distant)
- (Optionnel) Docker & Docker Compose

## Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/votre-utilisateur/form_register_back_mongo.git
cd form_register_back_mongo
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer la base de données**

Par défaut, l'application se connecte à MongoDB sur `mongodb://localhost:27017/form_register_back_mongo`. Pour modifier l'URL de connexion, créez un fichier `.env` à la racine du projet :

```
MONGO_URL=mongodb://localhost:27017/form_register_back_mongo
PORT=3000
```

## Lancement du projet

### En local

```bash
npm start
```

L'API sera accessible sur [http://localhost:3000](http://localhost:3000) par défaut.

### Avec Docker

1. Construire et lancer les conteneurs :

```bash
docker-compose up --build
```

2. L'API sera disponible sur [http://localhost:3000](http://localhost:3000)

## Structure du projet

- `api/` : Logique principale de l'API
- `model/` : Modèles Mongoose
- `routes/` : Définition des routes
- `test/` : Tests unitaires
- `app.js` : Configuration de l'application Express
- `server.js` : Point d'entrée du serveur

## Tests

Pour lancer les tests :

```bash
npm test
```

## Déploiement

Le projet est déployé sur Vercel et accessible à l'adresse suivante :

👉 [https://form-register-back-mongo.vercel.app/](https://form-register-back-mongo.vercel.app/)
