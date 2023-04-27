import {App} from "../index";

import { mainRouter } from './main'
import {apiGroup} from './api'

export function routes(app: App) {
  app.group('/', mainRouter);
  app.group('/api', apiGroup);
  return app;
}

export { apiGroup, mainRouter }
