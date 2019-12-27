import express  from 'express'
import morgan from 'morgan'

const app = express()

app.set('port', process.env.PORT || 4000)

morgan('dev')
app.use(express.json())

app.get('/', async (req, res, next) =>{
    return res.json({
        success: true,
        body: "Hola Mundo"
    })
} )


export default app