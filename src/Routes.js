import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
const Page = () => {
	return (
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route>
					<div>Pagina nao encontrada!</div>
				</Route>
			</Switch>
		);
}
export default Page;