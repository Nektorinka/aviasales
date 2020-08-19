export function setDuration(duration) {
	const day = Math.floor(duration / 1440);
	const hours = Math.floor(duration / 60) - day * 24;
	const minutes = duration - day * 1440 - hours * 60;
	let res = '';
	if (day) {
		res = day + 'д';
	}
	if (hours) {
		res = res + ' ' + hours + 'ч';
	}
	if (minutes) {
		res = res + ' ' + minutes + 'м';
	}
	return res;
}

export function setStops(stops) {
	const stop = stops.length;

	if (stop === 0) {
		return 'Без пересадок';
	}
	if (stop === 1) {
		return '1 пересадка';
	}
	if (1 < stop && stop < 5) {
		return `${stop} пересадки`;
	}
	if (4 < stop) {
		return `${stop} пересадок`;
	}
}

export class TransferDate {
	constructor(date) {
		this.date = new Date(date);
	}

	getHoursFrom() {
		let res = this.date.getHours();
		if (res < 10) {
			return `0${res}`;
		} else {
			return `${res}`;
		}
	}

	getMinutesFrom() {
		let res = this.date.getMinutes();
		if (res < 10) {
			return `0${res}`;
		} else {
			return `${res}`;
		}
	}

	getHoursTo(duration) {
		const milliseconds = this.date.getTime();
		const newDate = new Date(milliseconds + duration * 100);
		let res = new Date(newDate).getHours();
		if (res < 10) {
			return `0${res}`;
		} else {
			return `${res}`;
		}
	}

	getMinutesTo(duration) {
		const milliseconds = this.date.getTime();
		const newDate = new Date(milliseconds + duration * 100);
		let res = new Date(newDate).getMinutes();
		if (res < 10) {
			return `0${res}`;
		} else {
			return `${res}`;
		}
	}
}
