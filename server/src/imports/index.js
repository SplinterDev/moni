import expressImports from "./express.imports";
import mongooseImports from "./mongoose.imports";

export default {
  init: (config) => {
    mongooseImports.init(config);
    return expressImports.init();
  }
};