import mongoose from "mongoose";

export default {
  init: (config) => {
    mongoose.connect(config.database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
      .then(() => {
        console.log("MongoDB connected!");
      })
      .catch((error) => {
        console.error('Database Error:', error.message);
        // Exit process with failure
        process.exit(1);
      });
  }
};