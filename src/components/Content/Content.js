import React from 'react';
import Tabs from '../Tabs/Tabs';
import CardList from '../CardList/CardList';

export default function Content() {
	return (
		<div className="right-column">
			<Tabs />
			<CardList />
		</div>
	);
}
