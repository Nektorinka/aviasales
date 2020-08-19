export default class ServiceWorker {
	searchId = null;
	error = null;

	async getSearchId() {
		try {
			let response = await fetch('https://front-test.beta.aviasales.ru/search');
			if (response.ok) {
				this.searchId = await response.json();
			} else {
				console.log('ошибка получения search_id');
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
				return tickets;
			} else {
				console.log('ошибка получения данных');
			}
		} catch (err) {
			this.error = err;
		}
	}
}
