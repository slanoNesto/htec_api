import { version } from '../../package.json';
import { Router } from 'express';
import track from './track';
import cars from './cars';

export default ({ config, db }) => {
	let api = Router();

	api.use('/track', track({ config, db }));
	api.use('/cars', cars({ config, db }));

	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
