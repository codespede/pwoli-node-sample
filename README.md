# Pwoli with Raw NodeJS Sample Application

A sample Express.js app which uses Pwoli to show users how it works

## Try it out

Easiest way is to clone this repo into your local:

```
git clone https://github.com/internetmango/pwoli-node-sample.git
# cd into the directory
npm install
```

- Provide your DB credentials in the file config/config.json

- Initialize the DB with tables

```
node --experimental-json-modules dbinit.js
```
- For adding some seed data(dummy data) to the tables, please run:

```
sequelize db:seed:all
```
- Run the app
```
node --experimental-json-modules index.js
```

Point your browser to http://localhost:3500/items/list and you should see a page with a `GridView` where you can do CRUD operations for the items.

Point your browser to http://localhost:3500/items/api to see the RESTful API features mentioned in https://internetmango.github.io/pwoli/rest-api

## Using Mongoose as ORM

For using Mongoose as the ORM, please follow the below steps:
- Rename the file `orm-model-config-sample.cjs` to `orm-model-config.cjs` in your working directory.
- Run the app
```
node --experimental-json-modules index-mongo.js
- Then point your browser to the above URLs.