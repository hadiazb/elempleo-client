import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import TinySlider from 'tiny-slider-react';

import NotFoundRecourse from '../NotFoundRecouse/NotFoundRecourse';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../../../components/Spinner/Spinner';

import { getImages } from '../../../../../../redux/actions/bannerActions';
import { useSettings } from './setting';

import './banner.css';

const Banner: React.FC<BannerProps> = ({
	bannersReducer,
	getImages,
}): JSX.Element => {
	const settings = useSettings();

	useEffect(() => {
		(() => {
			if (bannersReducer.banners.length === 0) {
				getImages();
			}
		})();
	}, [bannersReducer.banners.length, getImages]);

	return (
		<div className='banner'>
			{bannersReducer.loading ? (
				<Spinner height='100%' />
			) : (
				<Fragment>
					{bannersReducer.error && (
						<ErrorMessage error={bannersReducer.error} />
					)}
					{bannersReducer.banners.length > 0 ? (
						<TinySlider settings={settings}>
							{bannersReducer.banners.map((img) => (
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
						<Fragment>
							{!bannersReducer.error && (
								<NotFoundRecourse text='Banner' />
							)}
						</Fragment>
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

interface Banners {
	id: number;
	imgDesktop: string;
	imgMobile: string;
	imgDescription: string;
	title: string;
	subtitle: string;
}
interface BannersReducer {
	banners: Banners[];
	loading: boolean;
	error: string;
}

interface BannerProps {
	bannersReducer: BannersReducer;
	getImages: any;
}
