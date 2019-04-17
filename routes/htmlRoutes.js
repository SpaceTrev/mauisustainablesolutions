var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get('/style-main', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/home/index.html"));
  });
  app.get('/style-home', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/home/css/style.css"));
  });


  app.get("/collaborate", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/index.html"));
  });
  app.get('/style-collaborate', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/css/style.css"));
  });

  app.get("/sustainability-map-signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/index.html"));
  });
  app.get('/style-sustainability-map-signup', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/css/style.css"));
  });

  app.get("/sustainability-map-signup-paid", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid/index.html"));
  });
  app.get('/style-sustainability-map-signup-paid', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/paid/css/style.css"));
  });

  app.get("/sustainability-map-signup-public", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/public/index.html"));
  });
  app.get('/style-sustainability-map-signup-public', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/sustainability-map/public/css/style.css"));
  });

  app.get("/gofundme", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/gofundme/index.html"));
  });
  app.get('/style-gofundme', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/gofundme/css/style.css"));
  });

  app.get("/club-makena", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/club-makena/index.html"));
  });
  app.get('/style-club-makena', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/collaborate/sub-pages/club-makena/css/style.css"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/contact/index.html"));
  });
  app.get('/style-contact', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/contact/css/style.css"));
  });

  app.get("/events", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/index.html"));
  });
  app.get('/style-events', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/events/css/style.css"));
  });

  app.get("/map", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/map/index.html"));
  });
  app.get('/style-map', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/map/css/style.css"));
  });
  
  app.get("/media", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/media/index.html"));
  });
  app.get('/style-media', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/media/css/style.css"));
  });
  
  app.get("/mission", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/mission/index.html"));
  });
  app.get('/style-mission', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/mission/css/style.css"));
  });

  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/products/index.html"));
  });
  app.get('/style-products', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/products/css/style.css"));
  });
  

};
