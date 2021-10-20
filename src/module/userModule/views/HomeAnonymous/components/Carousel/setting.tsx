import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getConfig } from '../../../../../../redux/actions/configActions';

export const useSettingsCarousel = () => {
	const [settings, setSettings] = useState<any>({
		items: 1,
		swipeAngle: false,
		speed: 1000,
		slideBy: 'page',
		mode: 'carousel',
		lazyload: true,
		nav: false,
		mouseDrag: true,
		controls: true,
		controlsPosition: 'top',
		controlsText: ['', ''],
		loop: true,
		autoplay: true,
		autoplayButtonOutput: false,
		arrowKeys: true,
		autoplayTimeout: 3000,
		center: false,
		responsive: {
			300: {
				items: 2,
			},
			640: {
				items: 3,
			},
			1024: {
				items: 4,
			},
		},
	});
	const configReducer = useSelector(
		(store: any) => store.configReducer
	);
	const dispatch = useDispatch();

	useEffect(() => {
		(() => {
			if (configReducer.config.length === 0) {
				dispatch(getConfig());
			}
			if (configReducer.config.length > 0) {
				setSettings({
					...settings,
					autoplayTimeout: 8000,
				});
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [configReducer.config, dispatch]);

	return settings;
};

export const settings: any = {
	items: 1,
	swipeAngle: false,
	speed: 1000,
	slideBy: 'page',
	mode: 'carousel',
	lazyload: true,
	nav: false,
	mouseDrag: true,
	controls: true,
	controlsPosition: 'top',
	controlsText: ['', ''],
	loop: true,
	autoplay: true,
	autoplayButtonOutput: false,
	arrowKeys: true,
	autoplayTimeout: 8000,
	center: false,
	responsive: {
		300: {
			items: 2,
		},
		640: {
			items: 3,
		},
		1024: {
			items: 4,
		},
	},
};
