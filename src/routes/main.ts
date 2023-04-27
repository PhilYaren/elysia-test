import {App} from "../index";


export function mainRouter (app:App) {
    app.get('/', () => {
        return 'Hello World!'
    })
    return app
}
