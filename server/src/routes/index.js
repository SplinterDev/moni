import express from "express";

export default {
  init: (app) => {
    app.get( "/api", (req, res) => {
      res.json({"message":"API works!"});
    });

    app.use('/api/users', require('./user.routes'));
    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
    });
  }
}