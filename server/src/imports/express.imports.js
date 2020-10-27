import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from 'path';

export default {
  init: () => {
    const app = express();

    // middlewares
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../../../build')));
    app.use(express.urlencoded({ extended: false }));

    return app;
  }
};