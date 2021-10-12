import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import TinySlider from 'tiny-slider-react';

import NotFoundRecourse from '../NotFoundRecouse/NotFoundRecourse';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';

import { settings } from './setting';
import { getUniversities } from '../../../../../../redux/actions/universitiesActions';

import './carousel.css';

const Carousel: React.FC<CarouselProps> = ({
	getUniversities,
	carouselReducer,
}): JSX.Element => {
	useEffect(() => {
		(() => {
			if (carouselReducer.universities.length === 0) {
				getUniversities();
			}
		})();
	}, [carouselReducer.universities.length, getUniversities]);

	return (
		<div className='carousel'>
			{carouselReducer.loading ? (
				<p>Cargando</p>
			) : (
				<Fragment>
					{carouselReducer.error && (
						<ErrorMessage error={carouselReducer.error} />
					)}
					{carouselReducer.universities.length > 0 ? (
						<div className='carousel__container'>
							<TinySlider settings={settings}>
								{carouselReducer.universities.map((image) => (
									<a
										href={image.link}
										key={image.id}
										className='link'
									>
										<img
											src={image.image}
											alt={image.imageDescription}
											className='link__image'
										/>
										<p className='link__text'>{image.name}</p>
									</a>
								))}
							</TinySlider>
						</div>
					) : (
						<Fragment>
							{!carouselReducer.error && (
								<NotFoundRecourse text='Carousel' />
							)}
						</Fragment>
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

interface CarouselReducer {
	universities: Carousel[];
	loading: boolean;
	error: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Carousel {
	id: number;
	image: string;
	name: string;
	imageDescription: string;
	status: boolean;
	link: string;
}
interface CarouselProps {
	carouselReducer: CarouselReducer;
	getUniversities: any;
}
