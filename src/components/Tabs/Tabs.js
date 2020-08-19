import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Redux/Actions/actions';

function Tabs({ tabsState, cheapHandler, fastHandler }) {
	return (
		<div className="tabs">
			<button className={`tabs__tab  ${tabsState.cheap ? 'tabs__tab--active' : null}`} onClick={cheapHandler}>
				Самый дешевый
			</button>
			<button className={`tabs__tab  ${tabsState.fast ? 'tabs__tab--active' : null}`} onClick={fastHandler}>
				Самый быстрый
			</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		tabsState: state.tabsReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
