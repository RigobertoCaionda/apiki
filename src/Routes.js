import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
const Page = ({showMenu, setShowMenu}) => {
	return (
			<Switch>
				<Route exact path="/">
					<Home showMenu={showMenu} setShowMenu={setShowMenu}/>
				</Route>

				<Route>
					<div>Pagina nao encontrada!</div>
				</Route>
			</Switch>
		);
}
export default Page;