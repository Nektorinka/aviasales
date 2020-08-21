import React from 'react';
import { setDuration, setStops, TransferDate } from './cardFunctions';

export default function Card(props) {
	const { ticket } = props;
	const { price, carrier, segments } = ticket;
	const from = segments[0];
	const to = segments[1];
	const img = `//pics.avs.io/99/36/${carrier}.png`;

	const dateFrom = new TransferDate(from.date);
	const dateTo = new TransferDate(to.date);

	return (
		<div className="card-list__item">
			<div className="card-list__title">
				<span className="card-list__coast">{price + ' ₽'}</span>
				<img src={img} alt="LOGO__COMPANY" className="card-list__image" />
			</div>
			<div className="card-list__result">
				<div className="card-list__column">
					<span className="card-list__city">
						{from.origin} – {from.destination}
					</span>
					<span className="card-list__time">
						{dateFrom.getHoursFrom()}:{dateFrom.getMinutesFrom()}– {dateTo.getHoursTo(from.duration)}:{dateTo.getMinutesTo(from.duration)}
					</span>
				</div>
				<div className="card-list__column">
					<span className="card-list__city">В пути</span>
					<span className="card-list__time">{setDuration(from.duration)}</span>
				</div>
				<div className="card-list__column">
					<span className="card-list__city">{setStops(from.stops)}</span>
					<span className="card-list__time">{from.stops.join(' ')}</span>
				</div>
			</div>
			<div className="card-list__result">
				<div className="card-list__column">
					<span className="card-list__city">
						{to.origin} – {to.destination}
					</span>
					<span className="card-list__time">
						{dateTo.getHoursFrom()}:{dateTo.getMinutesFrom()}– {dateTo.getHoursTo(to.duration)}:{dateTo.getMinutesTo(to.duration)}
					</span>
				</div>
				<div className="card-list__column">
					<span className="card-list__city">В пути</span>
					<span className="card-list__time">{setDuration(to.duration)}</span>
				</div>
				<div className="card-list__column">
					<span className="card-list__city">{setStops(to.stops)}</span>
					<span className="card-list__time">{to.stops.join(' ')}</span>
				</div>
			</div>
		</div>
	);
}
