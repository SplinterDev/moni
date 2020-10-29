export default {
  init: (app) => {
    app.get( "/api", (req, res) => {
      res.json({"message":"API works!"});
    });

    app.use('/api/tags', require('./transaction.routes'));
  }
}