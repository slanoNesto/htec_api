import resource from 'resource-router-middleware';
import cars from '../models/cars.model';

export default ({ config, db }) => resource({

	id : 'cars',

	index({ params }, res) {
		res.json(cars);
	},
});
