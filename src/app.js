import express from "express";
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import reactViews from 'url'

// criando uma instancia do express
const app = express()

// rota padrao
app.get('/', (req, res) => {
    response.render('index', {tittle: 'Livro API', message: 'Teste'})
})

// armazenando o caminho absoluto do diretorio do arquivo atual
const __dirname = path.join(dirname(fileURLToPath(import.meta.url)), '../');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())



// rota loop

app.get('/loop', (req, res) => {
    const livros = [
        { autor: 'desconhecido', editora: 'desconhecida', ano: 1990, edicao: 1, genero: 'Fantasia' }
    ]
    res.render('loop', {tittle: 'Loop page', livros})
})

app.get('/if', (req, res) => {
    res.render('if', {tittle: 'if', is3D: true})
})


// configurando o express para servir arquivos estaticos do diretorio public
app.use(express.static(path.join(__dirname, 'public')))

export default app