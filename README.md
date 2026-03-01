# Weather App

Projet d'adaptation d'une application meteo existante realise dans le cadre d'un exercice de positionnement / auto-apprentissage CDA DevOps.

Le point de depart du projet est le depot source suivant :

```text
https://github.com/madzadev/weather-app
```

## Contexte du brief

L'objectif est d'adapter une interface meteo destinee a des ecrans d'information pour un reseau de transports en commun.

Le brief impose les evolutions suivantes :

- remplacer l'API OpenWeather par l'API Open-Meteo
- supprimer la recherche manuelle de ville dans l'interface
- utiliser une ville pre-configuree via un fichier de configuration
- rafraichir automatiquement les donnees meteo toutes les heures
- conserver une structure de projet claire et exploitable

## Prerequis

- HTML / CSS
- JavaScript
- `fetch`
- Git
- npm

## Stack technique

- Next.js
- React
- CSS Modules
- API Routes Next.js

## Structure du projet

```text
.
|- components/      # Composants d'interface
|- pages/           # Pages Next.js et route API
|  |- api/data.js   # Recuperation des donnees meteo
|- public/icons/    # Icones de l'interface
|- services/        # Fonctions utilitaires
|- styles/          # Styles globaux et modules CSS
```

## Fonctionnalites actuellement presentes

Dans son etat actuel, l'application permet :

- d'afficher des donnees meteo courantes pour une ville
- d'afficher la temperature et le ressenti
- d'afficher l'humidite
- d'afficher la vitesse et la direction du vent
- d'afficher la visibilite
- d'afficher les heures de lever et coucher du soleil
- de gerer un etat de chargement
- de gerer un etat d'erreur
- de basculer entre systeme metrique et imperial

## Ecart entre le brief et l'etat actuel

Le projet d'origine repose sur OpenWeather et incluait un champ de recherche utilisateur.

Le brief demande au contraire :

- une source de donnees basee sur Open-Meteo
- une ville definie dans un fichier de configuration
- un rafraichissement automatique toutes les heures

Ces points doivent donc etre pris en compte dans l'adaptation finale du projet.

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

3. Lancer le serveur de developpement :

```bash
npm run dev
```

4. Ouvrir l'application :

```text
http://localhost:3000
```

## Scripts disponibles

- `npm run dev` : lance l'application en mode developpement
- `npm run build` : genere la version de production
- `npm run start` : lance la version de production
- `npm run lint` : verifie le code avec ESLint

## Logique generale de l'application

L'application charge les donnees meteo depuis une route API Next.js.

Le composant principal :

- declenche un appel HTTP
- recupere la reponse JSON
- stocke les donnees dans le state React `weatherData`
- transmet ces donnees aux composants de presentation

Les composants affichent ensuite les informations meteo sous forme de cartes et de blocs d'information.

## Criteres de qualite du brief

Le rendu attendu doit notamment garantir :

- le respect integral des consignes
- la lisibilite des informations affichees
- la bonne restitution des donnees meteo de la ville configuree
- le rafraichissement effectif des donnees toutes les heures
- une structure de code propre et coherent avec l'application existante

## Ameliorations possibles

- finaliser la migration complete vers Open-Meteo
- ajouter un fichier de configuration dedie a la ville
- mettre en place un rafraichissement automatique via `setInterval` ou logique equivalente
- renforcer la gestion des erreurs reseau et des reponses API
- ajouter des tests
- preparer une containerisation Docker
- ajouter une pipeline CI/CD

## Auteur

Projet adapte et personnalise a partir d'un projet existant dans le cadre d'un exercice technique.
