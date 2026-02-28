# Weather App

Application meteo responsive developpee avec Next.js, realisee dans le cadre d'un exercice de positionnement / auto-apprentissage CDA DevOps.

L'application permet de rechercher une ville et d'afficher en temps reel les donnees meteo actuelles via l'API OpenWeather.

## Objectif du projet

Ce depot presente un projet front-end simple permettant de :

- consommer une API externe depuis une route API Next.js
- manipuler l'etat avec les hooks React
- afficher dynamiquement des donnees meteo
- gerer les etats de chargement et d'erreur
- configurer une variable d'environnement pour securiser la cle API

## Fonctionnalites

- recherche d'une ville
- affichage de la temperature actuelle et du ressenti
- affichage de la description meteo et de l'icone associee
- affichage de l'humidite
- affichage de la vitesse et de la direction du vent
- affichage de la visibilite
- affichage des heures de lever et coucher du soleil
- bascule entre systeme metrique et imperial
- ecran de chargement
- gestion d'erreur si la ville n'est pas trouvee

## Stack technique

- Next.js
- React
- CSS Modules
- API Routes Next.js
- OpenWeather API

## Structure du projet

```text
.
|- components/      # Composants d'interface
|- pages/           # Pages Next.js et route API
|  |- api/data.js   # Proxy serveur vers OpenWeather
|- public/icons/    # Icones meteo et pictogrammes
|- services/        # Fonctions utilitaires et conversions
|- styles/          # Styles globaux et modules CSS
```

## Installation

1. Cloner le depot :

```bash
git clone https://github.com/<ton-username>/weather-app.git
cd weather-app
```

2. Installer les dependances :

```bash
npm install
```

3. Creer un fichier d'environnement local :

```bash
cp .env.example .env.local
```

Sur Windows PowerShell, si `cp` ne fonctionne pas :

```powershell
Copy-Item .env.example .env.local
```

4. Ajouter ta cle API OpenWeather dans `.env.local` :

```env
OPENWEATHER_API_KEY="your_api_key_here"
```

5. Lancer le serveur de developpement :

```bash
npm run dev
```

6. Ouvrir l'application dans le navigateur :

```text
http://localhost:3000
```

## Scripts disponibles

- `npm run dev` : lance l'application en mode developpement
- `npm run build` : construit l'application pour la production
- `npm run start` : demarre la version de production
- `npm run lint` : lance ESLint

## Configuration

L'application utilise une variable d'environnement cote serveur :

- `OPENWEATHER_API_KEY` : cle API necessaire pour interroger OpenWeather

Important :

- ne pas versionner une vraie cle API dans `.env.example`
- utiliser `.env.local` pour les secrets locaux

## Fonctionnement

Le front envoie une requete `POST` vers la route interne `pages/api/data.js`.

Cette route API :

- recupere la ville saisie
- interroge l'API OpenWeather
- renvoie la reponse JSON au front

Le composant principal stocke ensuite cette reponse dans le state React `weatherData`, puis distribue les donnees aux composants d'affichage.

## Ameliorations possibles

- ajouter des tests unitaires et/ou tests d'integration
- gerer proprement les erreurs reseau et les codes HTTP
- eviter les doubles reponses dans la route API
- ajouter une recherche au clic en plus de la touche Entree
- afficher des previsions sur plusieurs jours
- dockeriser le projet pour un deploiement plus simple
- ajouter une pipeline CI/CD

## Auteur

Projet repris et personnalise a partir d'un projet source existant, puis adapte dans le cadre de l'exercice.
