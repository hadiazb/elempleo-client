import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import TinySlider from 'tiny-slider-react';
import NotFoundBanner from '../NotFoundBanner/NotFoundBanner';

import { getImages } from '../../../../../../redux/actions/bannerActions';
import { settings } from './setting';

import './banner.css';

const Banner: React.FC = ({
	bannersReducer,
	getImages,
}: any): JSX.Element => {
	useEffect(() => {
		(async () => {
			if (bannersReducer.banners.length === 0) {
				getImages();
			}
		})();
	}, [bannersReducer.banners.length, getImages]);

	return (
		<div className='banner'>
			{bannersReducer.loading ? (
				<p>Cargando</p>
			) : (
				<Fragment>
					{bannersReducer.error && (
						<p>Hay un error {bannersReducer.error}</p>
					)}
					{bannersReducer.banners.length > 0 ? (
						<TinySlider settings={settings}>
							{bannersReducer.banners.map((img: any) => (
								<div key={img.id} className='banner__container'>
									<img
										className='banner__container__image tns-lazy-img'
										src={img.imgDesktop}
										data-src={img.imgDesktop}
										alt={img.imgDescription}
									/>
									<div className='banner__container__content'>
										<h2 className='title'>{img.title}</h2>
										<p className='subtitle'>{img.subtitle}</p>
									</div>
								</div>
							))}
						</TinySlider>
					) : (
						<NotFoundBanner />
					)}
				</Fragment>
			)}
		</div>
	);
};

const mapStateToProps = ({ bannersReducer }: any) => {
	return { bannersReducer };
};

const mapDispatchToProps = { getImages };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Banner);
