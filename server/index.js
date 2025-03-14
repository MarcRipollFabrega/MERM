//Tutorial https://www.youtube-nocookie.com/embed/dJbd7BYofp4?playlist=dJbd7BYofp4&autoplay=1&iv_load_policy=3&loop=1&start=

import express from 'express'; // Importem Express en el package s'ha de haber configurat per llegir moduls   "type": "module", linia 5
import {PORT} from './config.js'
const app = express(); //Assignem express a la constant app

app.listen(PORT) // Port de express
console.log("Servidor en el port: "+ PORT); // Missatge per informar que la conexió s'ha fet