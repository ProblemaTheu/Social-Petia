import express from "express"
import bodyParser from "body-parser";
/* import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)) */

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.render("login.ejs")
});

app.get("/login", (req, res) => {
    res.render("login.ejs")
});

app.post("/login", (req, res) => {
    
    console.log(req.body)
    /* eu sei que minha requisicao vem em req.body.email e req.body.password */
    
    /* bater o email no banco de dados:
        se não tiver:
            mensagem de "usuario não cadastrado, mas registre aqui (seta para register)"
        se tiver:
            bater senha com a que esta no banco de dados
        se não bater a senha:
            mensagem de senha incorreta
        se bater: 
            redirect para main page    
    */
    
});

app.get("/register", (req, res) => {
    res.render("register.ejs")
});

app.post("/register", (req, res) => {

    console.log(req.body)
    /* eu sei que minha resposta vem em req.body.email e req.body.password */

    /* verificar se o email é um email valido e seria legal se isso fosse dito pro usuario logo qnd ele terminasse de digitar mas acho q nao é aq
        depois verificar se a senha tem 1 letra maiuscula e 1 letra especial
        criar os dados no banco de dados 
        redirecionar para a main page

    */
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});