import cors from "cors"
import express from "express"
import appConfig from "./2-utils/appConfig"
import catchAll from "./3-middleware/catch-all"
import routeNotFound from "./3-middleware/route-not-found"
import sanitize from "./3-middleware/sanitize";
import companniesControllers from "./6-controllers/companies-controllers"
const server = express()

server.use(cors());
server.use(express.json());
server.use(sanitize); 
server.use('/api', companniesControllers);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`))