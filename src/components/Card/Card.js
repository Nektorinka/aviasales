import React from 'react';

export default function Card() {
	return (
		<div className="card-list__item">
			<div className="card-list__title">
				<span className="card-list__coast">13 400 Р</span>
				<img src="../src/static/S7 Logo.png" alt="LOGO__COMPANY" className="card-list__image" />
			</div>
			<div className="card-list__result">
				<div className="card-list__column">
					<span className="card-list__city">MOW – HKT</span>
					<span className="card-list__time">10:45 – 08:00</span>
				</div>
				<div className="card-list__column">
					<span className="card-list__city">В пути</span>
					<span className="card-list__time">21ч 15м</span>
				</div>
				<div className="card-list__column">
					<span className="card-list__city">2 пересадки</span>
					<span className="card-list__time">HKG, JNB</span>
				</div>
			</div>
			<div className="card-list__result">
				<div className="card-list__column">
					<span className="card-list__city">MOW – HKT</span>
					<span className="card-list__time">11:20 – 00:50</span>
				</div>
				<div className="card-list__column">
					<span className="card-list__city">В пути</span>
					<span className="card-list__time">13ч 30м</span>
				</div>
				<div className="card-list__column">
					<span className="card-list__city">1 пересадка</span>
					<span className="card-list__time">HKG</span>
				</div>
			</div>
		</div>
	);
}
