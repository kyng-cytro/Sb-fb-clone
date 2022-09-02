# Instructions to start:

```
git clone https://github.com/BYU-STAPL/Sb-fb-clone.git
cd Sb-fb-clone
npm install
npm run serve
```

Go to `localhost:8080` in your browser

# sb-fb-clone

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Project Build

**_Note:_**
The project is setup with GitHub Actions so that any push to master will be reflected on the hciresearch webpage where we are hosting the website. However, if the workflow fails and you need to push changes manually, follow the instructions below.

**Manual Builds:**
Build your public files. The build can be done in your ssh connection to the hciresearch server; however, it is faster to build it on your local machine and copy the public files from `dist` to the remote server:

### Builds public files

```
cd Sb-fb-clone
npm i
npm run build
```

#### Note:

If you encounter the following error:
`Error: error:0308010C:digital envelope routines::unsupported`

then run this line of code `export NODE_OPTIONS=--openssl-legacy-provider` and rebuild your project.

### Copy public files to server

Now copy your public files to `/var/www/html/fb-lite`.

If you built the files on the remote server:

```
cp -rp dist/* /var/www/html/fb-lite
```

If you built the files on your local machine (recommended):

```
scp -rp dist/* [username]@[host]:[targetDir]
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Overview of Project Structure

Okay, so this is a Vue.js project. Here's a quick overview of the structure and an explanation for how to expand it.

(Note that in this overview and throughout the code, @ is an alias to the /src directory.)

## Components

Vue is really fancy because it allows developers to store related HTML, CSS, and JavaScript in one file called a component. These components can then be reused throughout the projects and can be inserted into other components. By building components together, developers can create a well-orgainzed project structure.

A Vue component ends with the extension `.vue` and contains HTML in the `<template>` tags, JavaScript in the `<script>` tags, and CSS in the `<style>` tags. (Note, use `<style scoped>` if you would like to reuse CSS selectors between components without overlap.)

Spend some time looking at the components to see how they can be connected together. Data is passed into components through their "props." A good example of this kind of component is the `FriendDisplay.vue` component in "@/components/Multipurpose/"

## Mixins

If code is shared between multiple Vue components, it can be helpful to extract that code into a "mixin" to reduce code duplication. The mixins in this project are found in the "@/mixins" folder. Most referneces to the Vuex-ORM local database are made through these mixins. Other things like filtering the posts or making dates look pretty have been extracted into these mixins.

### To use a mixin in a component

1. Import the mixin's JavaScript file at the top of the component's `<script>` tag
2. Add the name of this mixin to the component's `mixin` list.
   For example:

```
<script>
  import { DataPopulation } from "@/mixins/DataPopulation.js";
  export default {
    name: "App",
    mixins: [DataPopulation],
  }
</script>
```

## Router

The router manages which page is being displayed. Its code can be found in "@/router/index.js"

### Add a new page to the project

If you would like to add an additional page to the project:

1. Create a Vue component that holds the HTML, CSS, and JavaScript that you would like to have in this page. Store this Vue file in "@/views/"

2. Next, add an object like the one below, to the array called `routes` in index.js:

```
  {
    path: "/URLPath",
    name: "NameOfPage",

    component: () =>
      import(/* webpackChunkName: "ComponentName" */ "PathToVueComponent"),
  },
```

replacing "/URLPath", "NameOfPage", "ComponentName", and "PathToVueComponent". See other items in this list for examples.

### Add a link/button that routs to a page

To add a link or button that routs to one of the pages:

1. Wrap the HTML that you would like to act as a button with a router-link tag:

```
    <router-link :to="'/URLPath'">
        <!-- Your HTML here -->
    </router-link>
```

Vue will now automatically route the app to the page that has been registered with that URLPath.

## Vuex

Vuex is one way to manage the state of a Vue project. It behaves much like a database. This project has made use of the Vuex-ORM package, which makes it very easy to create database schemas (a.k.a. "models") and reduces how verbose the code is.

Tables of the local Vuex database can be found in the "@/vuex-orm_models" folder.

### Adding a new model to the database

If you would like to add a new model to the Vuex database:

1. Create a new JavaScript file and place it in the "@/vuex-orm_models" folder. You can copy, paste, and edit other models in that folder to create your own.
2. Next, open store.js (located in @/store.js).
3. Import the model into store.js (see the first few lines for examples)
4. Register the model in the database

Note that the state of the data in Vuex is lost if the page is refreshed.

### Accessing data stored in the Vuex-ORM database

If you would like to access data stored in the database in a component:

1. Import the Model in your `<script>` tag

```
  import ModelName from "@/vuex-orm_models/ModelFileName.js";
```

For example,

```
  import Friend from "@/vuex-orm_models/FriendModel.js";
```

2. Access the data using a query (see: https://vuex-orm.org/guide/data/retrieving.html)
   A common example is to get all the entries in the database. To do this for all the friends, you would call:
   `Friend.all();`

(Note, some Models in the database, namely FacebookLiteModel, UserModel, and FilterModel, only have one entry in the database because there is only one user, only one variable holding whether we are in FacebookLite mode, and only one set of post filters.)

## Assets

### Images

Images in the project are stored in "@/assets/images/"

## JavaScript packages

This project relies on many packages found in the Node Package Manager. The project dependencies are located in `package.json` and the specific versions of these packages are recorded in `package-lock.json`. Both of these files are important.
All these packages are stored in `node_modules`, but this folder is not tracked by git because it's huge and it might be different for different system setups. So instead the `package.json` and `package-lock.json` files are tracked by git.

### Install packages from the package.json file

Run

```
npm install
```

### Add a new package to the project

Run

```
npm update
```

to update npm packages
Install the package. See the documentation for additional details: https://docs.npmjs.com/cli/v8/commands/npm-install
