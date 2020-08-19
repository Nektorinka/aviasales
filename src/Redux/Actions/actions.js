import ServiceWorker from '../../services/service-worker';

export function allHandler() {
	return {
		type: 'ALL'
	};
}

export function noHandler() {
	return {
		type: 'NO'
	};
}

export function t1Handler() {
	return {
		type: 'T1'
	};
}

export function t2Handler() {
	return {
		type: 'T2'
	};
}

export function t3Handler() {
	return {
		type: 'T3'
	};
}

export function setTecketsInStore(tickets) {
	return {
		type: 'SET_TICKETS_IN_STORE',
		payload: tickets
	};
}

//Content actions
export const myService = new ServiceWorker();
export function getAllTickets() {
	return async function cb(dispatch) {
		try {
			if (myService.searchId === null) {
				await myService.getSearchId();
			}
			let tickets = await myService.getTickets();
			if (tickets.tickets && !tickets.stop) {
				await dispatch(setTecketsInStore(tickets.tickets));
				setTimeout(cb(dispatch), 800);
			}
		} catch (error) {
			setTimeout(cb(dispatch), 800);
		}
	};
}

// Tabs actions

export function cheapHandler() {
	return {
		type: 'CHEAP'
	};
}
export function fastHandler() {
	return {
		type: 'FAST'
	};
}
