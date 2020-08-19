import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { renderCheapCards, renderFastCards } from './cardListFunctions';
import * as actions from '../../Redux/Actions/actions';

function CardList({ cardList, sidebar, tabs, getAllTickets }) {
	const [ ticketsLength, setTicketsLength ] = useState(10);

	useEffect(
		() => {
			getAllTickets().catch((err) => {});
		},
		[ getAllTickets ]
	);
	const { all, no, t1, t2, t3 } = sidebar;
	const loadMore = (
		<button
			className="load-more"
			onClick={() => {
				setTicketsLength(ticketsLength + 10);
			}}
		>
			Загрузить еще
		</button>
	);

	const antIcon = <LoadingOutlined style={{ fontSize: 42 }} spin />;
	const loader = (
		<div className="loader">
			<Spin indicator={antIcon} />
		</div>
	);
	return (
		<div className="card-list">
			{console.log(cardList)}
			{cardList !== null ? tabs.cheap ? (
				renderCheapCards(cardList, sidebar, ticketsLength)
			) : (
				renderFastCards(cardList, sidebar, ticketsLength)
			) : (
				loader
			)}
			{cardList.length == 0 ? loader : null}
			{!all && !no && !t1 && !t2 && !t3 ? null : loadMore}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		cardList: state.contentReducer,
		sidebar: state.sideBarReducer,
		tabs: state.tabsReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
