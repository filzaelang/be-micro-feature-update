import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
<<<<<<< HEAD
    database: "beMicro",
=======
    database: "beMicroFull",
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
