import {App} from "../index";

export function apiGroup (app: App)  {
  app.get('/users', () => {
    return 'Hello World!'
  })
  return app
}

