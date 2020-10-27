import imports from './src/imports';
import routes from './src/routes';
import config from './src/config';

const app = imports.init(config);
routes.init(app);

// start Express server
app.listen(config.port, () => {
  console.log(`Server started at http://localhost:${config.port}`);
});