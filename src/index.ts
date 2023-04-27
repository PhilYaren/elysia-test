import { Elysia } from 'elysia'
import {apiGroup, routes} from "./routes";


const PORT = process.env.PORT || 3000

const app = new Elysia()

export type App = typeof app

app.group('/', routes)
// app.group('/api', apiGroup)



app.listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
})
