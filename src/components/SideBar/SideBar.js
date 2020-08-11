import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Redux/Actions/actions';

function SideBar({ sidebar, allHandler, noHandler, t1Handler, t2Handler, t3Handler }) {
	const { all, no, t1, t2, t3 } = sidebar;

	useEffect(() => {
		if (no && t1 && t2 && t3 && !all) {
			allHandler();
		}
	});

	return (
		<div className="left-column">
			<h2 className="left-column__title">количество пересадок</h2>
			<div className="checkbox__item">
				<input type="checkbox" id="cAll" name="cc" checked={all} onChange={allHandler} />
				<label for="cAll" className="checkbox__custom-input">
					<span />Все
				</label>
			</div>
			<div className="checkbox__item">
				<input type="checkbox" id="cNo" name="cc" checked={no} onChange={noHandler} />
				<label for="cNo" className="checkbox__custom-input">
					<span />Без пересадок
				</label>
			</div>
			<div className="checkbox__item">
				<input type="checkbox" id="c1" name="cc" checked={t1} onChange={t1Handler} />
				<label for="c1" className="checkbox__custom-input">
					<span />1 пересадка
				</label>
			</div>
			<div className="checkbox__item">
				<input type="checkbox" id="c2" name="cc" checked={t2} onChange={t2Handler} />
				<label for="c2" className="checkbox__custom-input">
					<span />2 пересадки
				</label>
			</div>
			<div className="checkbox__item">
				<input type="checkbox" id="c3" name="cc" checked={t3} onChange={t3Handler} />
				<label for="c3" className="checkbox__custom-input">
					<span />3 пересадки
				</label>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		sidebar: state.sideBarReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
