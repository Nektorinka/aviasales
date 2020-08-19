import React from 'react';
import { Alert } from 'antd';
import Card from '../Card/Card';

export function renderCheapCards(responceArray, sidebarState, maxTickets = 10) {
	const newArray = [ ...responceArray ];
	newArray.sort((a, b) => {
		return a.price - b.price;
	});

	let res = [];
	if (newArray !== null && sidebarState.all) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}
	if (newArray !== null && sidebarState.no) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0 && ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}
	if (newArray !== null && sidebarState.t1) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0 && ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}
	if (newArray !== null && sidebarState.t2) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0 && ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}
	if (newArray !== null && sidebarState.t3) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0 && ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}

	if (res.length === 0) {
		return <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />;
	} else {
		return res;
	}
}

export function renderFastCards(responceArray, sidebarState, maxTickets = 10) {
	const newArray = [ ...responceArray ];
	newArray.sort((a, b) => {
		return a.segments[0].duration - b.segments[0].duration;
	});

	let res = [];
	if (newArray !== null && sidebarState.all) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}
	if (newArray !== null && sidebarState.no) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0 && ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}
	if (newArray !== null && sidebarState.t1) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0 && ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}
	if (newArray !== null && sidebarState.t2) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0 && ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}
	if (newArray !== null && sidebarState.t3) {
		let sortArray = newArray.map((ticket, i) => {
			if (maxTickets > 0 && ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3) {
				maxTickets = maxTickets - 1;
				return <Card key={i} ticket={ticket} />;
			} else {
				return null;
			}
		});
		res = [ ...sortArray, ...res ];
	}

	if (res.length === 0) {
		return <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />;
	} else {
		return res;
	}
}
