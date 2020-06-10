import express, {Application} from 'express'
import morgan from 'morgan'

export default class App {
    
    public app: Application;
    private port : number;

    constructor(port:number = 4000) {
        this.port = port;
        this.app = express();
        this.configMiddlewares();
    }

    private configMiddlewares():void {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    public startServer(): void {
        this.app.listen(this.port);
        console.log(`Server is running on port ${this.port}`)
    } 

}
