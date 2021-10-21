import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getConfig } from '../../../../../../redux/actions/configActions';

export const useSettings = () => {
	const [settings, setSettings] = useState<any>({
		items: 1,
		swipeAngle: false,
		speed: 1000,
		slideBy: 'page',
		mode: 'gallery',
		lazyload: true,
		nav: true,
		mouseDrag: true,
		controls: false,
		controlsPosition: 'top',
		controlsText: ['<', '>'],
		loop: true,
		autoplay: true,
		autoplayButtonOutput: false,
		arrowKeys: true,
		autoplayTimeout: 8000,
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
					autoplayTimeout: configReducer.config[0].timeBanner,
				});
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [configReducer.config, dispatch]);

	return settings;
};
