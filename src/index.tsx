import ReactDOM from 'react-dom';
import App from './app/App';

import { Provider } from 'react-redux';
import Store from './redux/store/index';

import './styles/Global.css';

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,

	document.getElementById('root')
);
