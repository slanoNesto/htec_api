import _ from 'lodash';
import resource from 'resource-router-middleware';
import track from '../models/track.model';

const SPEED_LIMITS = [50, 60, 80, 120];
const SPEED_LIMITS_MAX_COUNT = 4;
const TRAFFIC_LIGHTS_MAX_COUNT = 3;
const TRAFFIC_LIGHT_MIN_DURATION = 3;
const TRAFFIC_LIGHT_MAX_DURATION = 5;

export default ({ config, db }) => resource({

	id : 'track',

	index({ params }, res) {

		let positions = [];

		track.distance = getRandomInRange(50, 100);
		track.speed_limits = generateSpeedLimits(track.distance, positions);
		track.traffic_lights = generateTrafficLights(track.distance, positions);

		res.json(track);
	},
});

function getRandomInRange(min, max, exclude) {
	let random = Math.floor(Math.random() * (max - min + 1)) + min;
	if (exclude && _.includes(exclude, random)) {
		return getRandomInRange(min, max, exclude);
	} else {
		return random;
	}
}

function getRandomSpeed() {
	let index = getRandomInRange(0, 3);
	return SPEED_LIMITS[index];
}

function getRandomPosition(distance, positions) {
	let position = getRandomInRange(0, distance, positions);
	positions.push(position);
	return position;
}

function generateSpeedLimits(distance, positions) {
	let speedLimits = [];
	let count = getRandomInRange(1, SPEED_LIMITS_MAX_COUNT);
	for (let i = 0; i < count; i++) {
		speedLimits.push({
			position: getRandomPosition(distance, positions),
            speed: getRandomSpeed()
		});
	}
	return speedLimits;
}

function generateTrafficLights(distance, positions) {
	let trafficLights = [];
	let count = getRandomInRange(1, TRAFFIC_LIGHTS_MAX_COUNT);
	for (let i = 0; i < count; i++) {
		trafficLights.push({
			position: getRandomPosition(distance, positions),
			duration: getRandomInRange(TRAFFIC_LIGHT_MIN_DURATION, TRAFFIC_LIGHT_MAX_DURATION)
		});
	}
	return trafficLights;
}
