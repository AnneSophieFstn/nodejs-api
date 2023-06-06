# Gestion d'attribution d'ordinateurs

## Description

Créer une application sécurisée qui permet de gérer l'attribution des postes informatiques aux visiteurs d'un centre culturel sur les horaires d'ouverture.

## Fonctionnalités

- En tant qu'administrateur, l'administrateur doit pouvoir se connecter à une interface sécurisée.
- En tant qu'administrateur, l'administrateur doit pouvoir créer | modifier | supprimer un utilisateur.
- En tant qu'administrateur, l'administrateur doit pouvoir créer | modifier | supprimer un ordinateur.
- En tant qu'administrateur, l'administrateur doit pouvoir attribuer un ordinateur à un utilisateur à une date et sur un créneau horaire.
- En tant qu'administrateur, l'administrateur doit pouvoir voir toutes les attributions.
- En tant qu'administrateur, l'administrateur doit pouvoir supprimer une attribution.

## Sécurité

L'administrateur devra **obligatoirement** se connecter pour accéder à l'application.
Un token lui sera attribué sous un temps valide.

## Technologies

**Backend:**

- Node Js

**Base de données:**

- Mongo DB

## Installer et exécuter le projet

Renommer le fichier .env.example en .env et renseigner les différentes informations.

1. Installer node modules
   $ cd ./server/
   $ npm install

2. Configurer la base de données
   Dans le fichier **database.js**, il faudra configurer le nom de votre base de données:

   `.connect("name-of-database")`

3. Lancer le projet
   `npm start`

## Test

Les test sont à exécuter sur un logiciel qui va permettre de tester une **API**.
Pour ma part, j'ai utilisé **POSTMAN**.

Les tests peuvent être lancés à l’aide de la commande:

$ cd ./server/
$ npm test
