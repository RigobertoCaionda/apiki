import {HeaderArea, Header, Logo, MenuArea, MenuOpener, MenuCloser} from './styled';
import {PageContainer} from '../../AppStyled';
import MenuItem from '../MenuItem';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const Page = ({showMenu, setShowMenu}) => {
	return (
			<HeaderArea>
				<PageContainer>
					<Header showMenu={showMenu}>
						<Link to="/" title="Empresa especializada em WordPress">
							<Logo src="/assets/apiki_logo.png" />
						</Link>
						<MenuArea>
							<MenuItem link="/sobre" title="Sobre a Apiki" 
								description="Conheça a empresa especializada em WordPress"/>
							<MenuItem link="/hospedagem" title="Hospedagem" 
								description="A melhor hospedagem para WordPress da América Latina"/>
							<MenuItem link="/desenvolvimento" title="Desenvolvimento" 
								description="Desenvolvimento personalizado em WordPress"/>
							<MenuItem link="/suporte" title="Suporte" 
								description="O time de especialistas em WordPress a sua disposição"/>
							<MenuItem link="/uxui" title="UX e UI" 
								description="Estratégias e Layouts exclusivos em WordPress"/>
							<MenuItem link="/growth" title="Growth" 
								description="Apoio para o crescimento do teu projeto digital"/>
							<MenuItem link="/atendimento" title="Atendimento" 
								description="Assim como fazemos tudo em WordPress, fazemos tudo para atender você."/>
						</MenuArea>
						{!showMenu && 
							<MenuOpener onClick={()=>setShowMenu(true)}>
								<MenuIcon style={{color: '#1b8dcd', fontSize: '2.7rem'}}/>
							</MenuOpener>}
						{showMenu && <MenuCloser onClick={()=>setShowMenu(false)}>
							<CloseIcon style={{color: '#1b8dcd', fontSize: '2.7rem'}}/>
						</MenuCloser>}
					</Header>
				</PageContainer>
			</HeaderArea>
		);
}
export default Page;