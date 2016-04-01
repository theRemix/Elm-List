module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  paths: {
    watched: ["app","src"]
  },
  server: {
    port: 3000
  },
  plugins: {
    elmBrunch: {
      mainModules: ["src/Main.elm"],
      outputFolder: "./public"
    }
  }
};
