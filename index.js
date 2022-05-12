import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';

import signInRouter from './Routers/signInRouter.js';
import signUpRouter from './Routers/signUpRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(signUpRouter);
app.use(signInRouter);
app.get('/', (req, res) => {
	res.send('app no ar');
});

app.listen(process.env.PORT, () => {
	console.log(
		chalk.bold.green(`BackEND aberto na porta ${process.env.PORT}`)
	);
});
