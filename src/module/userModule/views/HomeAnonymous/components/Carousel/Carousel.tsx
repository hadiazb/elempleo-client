import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

// import TinySlider from 'tiny-slider-react';

import { getUniversities } from '../../../../../../redux/actions/universitiesActions';

const Carousel: React.FC = ({
	getUniversities,
	carouselReducer,
}: any): JSX.Element => {
	useEffect(() => {
		(() => {
			if (carouselReducer.universities.length === 0) {
				getUniversities();
			}
		})();
	}, [carouselReducer.universities.length, getUniversities]);
	console.log(carouselReducer);
	return (
		<div>
			{carouselReducer.loading ? (
				<p>Cargando</p>
			) : (
				<Fragment>
					{carouselReducer.error && <p>Hay un error</p>}
					{carouselReducer.universities.length > 0 ? (
						<p>Data</p>
					) : (
						<p>No hay data </p>
					)}
				</Fragment>
			)}
		</div>
	);
};

const mapStateToProps = ({ carouselReducer }: any) => {
	return { carouselReducer };
};

const mapDispatchToProps = { getUniversities };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Carousel);
