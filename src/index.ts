/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { maxHeaderSize } from "http";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`)

		// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

	function askQuestion(query) {

		return new Promise(resolve => rl.question(query, ans => {
			resolve(ans);
		}))
	}
	
	 async function addNewPessoa() {
		var pessoaNova = {};
	
		pessoaNova.nome = await askQuestion("Qual o nome do aluno a ser registrado?");
		pessoaNova.nota = await askQuestion("Qual a nota do aluno a ser registrado?");
		return pessoaNova;
		}

	var numeroDeAlunos = 0;
	var listaDePessoas = [];

	numeroDeAlunos = await askQuestion("Qual o numero de estudantes a registrar?")

	for (let i = 0; i < numeroDeAlunos; i++) {
		listaDePessoas.push(await addNewPessoa());

	}
	console.table(listaDePessoas)
	let max = listaDePessoas[0]

	for (var i = 0; i < listaDePessoas.length; i++){
		if(listaDePessoas[i].nota >= max.nota){
			max = listaDePessoas[i];
			console.log(listaDePessoas[i] + " >= " +max)
		}
	}
	console.log("O aluno com a maior nota foi:")
	console.log(max)
});