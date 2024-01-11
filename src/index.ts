import { AppDataSource } from "./data-source"
import * as express from "express"
import router from "./route"
import * as cors from "cors"
import "dotenv/config"

AppDataSource.initialize()
    .then(async () => {
        const app = express()

        //cors
        app.use(cors({
            origin: '*',
<<<<<<< HEAD
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }))
        app.use(express.json())
        app.use("/api/v1", router)
=======
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }))
        app.use(express.json())
        app.use("/data", router)
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a

        console.log("PORT:", process.env.PORT);
        app.listen(process.env.PORT, () => console.log(`server running`))


    }).catch(error => console.log(error))
