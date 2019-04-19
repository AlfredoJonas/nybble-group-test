# Nybble Group Test

This is a project to build a test for a Nybble enterprise

## Getting Started

To get you started you can simply clone the repository.

### Install Dependencies

We have two type of dependencies in this project: development tools and application specific packages. They are both managed with npm in package.json as devDependencies and dependencies.

```
npm install
```

## Directory Layout

```
  src/                  --> all of the source files for the application
  app/                  --> static app assets
  main.ts               --> main application module
  index.html            --> app layout file (the main html template file of the app)
```

### Running the App

The project comes preconfigured with a local development webserver. It is a webpack-dev-server, that supports hot reload for a typescript files but not for a sass styles.  You can start this webserver with `npm start`.

Now browse to the app at `http://localhost:3000/`.
