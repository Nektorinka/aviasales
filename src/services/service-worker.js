export default class ServiceWorker {
	searchId = null;
	error = null;

	async getSearchId() {
		try {
			let response = await fetch('https://front-test.beta.aviasales.ru/search');
			if (response.ok) {
				this.searchId = await response.json();
			} else {
				console.log('err');
			}
		} catch (err) {
			this.error = err;
		}
	}

	async getTickets() {
		try {
			let response = await fetch(
				'https://front-test.beta.aviasales.ru/tickets?searchId=' + this.searchId.searchId
			);
			if (response.ok) {
				let tickets = await response.json();
				// console.log(tickets);
				return tickets;
			} else {
				console.log('err');
			}
		} catch (err) {
			this.error = err;
		}
	}
}
