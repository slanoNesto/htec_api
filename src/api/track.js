import resource from 'resource-router-middleware';
import track from '../models/track.model';

export default ({ config, db }) => resource({

	id : 'track',

	index({ params }, res) {
		res.json(track);
	},
});
