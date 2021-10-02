import {Link} from 'react-router-dom';
import {FooterArea} from './styled';
import SocialMedia from '../SocialMedia';
const Page = () => {
	return (
			<FooterArea>
				<div className="footer-top">
					<div className="footer-container">
						<div className="top">
							<div className="leftSide">
								<Link to="/"><img src="/assets/apiki_logo2.png" alt="" /></Link>
							</div>
							<div className="rightSide">
								<SocialMedia link="www.facebook.com" icon=""/>
								<SocialMedia link="www.instagram.com" icon=""/>
								<SocialMedia link="www.youtube.com" icon=""/>
								<SocialMedia link="www.twitter.com" icon=""/>
								<SocialMedia link="www.linkedin.com" icon=""/>
							</div>
						</div>
						<div className="bottom">
							<div className="address">
								<div className="address-title">Governador Valadares – MG</div>
								<div className="address-desc">
									Avenida Minas Gerais  700, Lojas 15 e 16, Centro. 
										CEP: 35010-151 +55 33 3278-1002
								</div>
							</div>

							<div className="address">
								<div className="address-title">São Paulo – SP</div>
								<div className="address-desc">
									Rua Oscar Freire, 2379 Pinheiros.  CEP: 05409-012
								</div>
							</div>
							<div className="address">
								<div className="address-title">Navegue</div>
								<div className="address-desc">
									<div className="link-container">
										<Link to="/empresa-especializada">Sobre a Apiki</Link>
									</div>
									<div className="link-container">
										<Link to="/carreira">Trabalhe na Apiki</Link>
									</div>
									<div className="link-container">
										<Link to="/blog">Blog</Link>
									</div>
									<div className="link-container">
										<Link to="/hospedagem">WP Host</Link>
									</div>
									<div className="link-container">
										<Link to="/manutencao">WP Care</Link>
									</div>
									<div className="link-container">
										<Link to="/">Pagina Inicial</Link>
									</div>
								</div>
							</div>
							<div className="address">
								<div className="address-title">Links Úteis</div>
								<div className="address-desc">
									<div className="link-container">
										<Link to="/seguranca">Segurança para Wordpress</Link>
									</div>
									<div className="link-container">
										<Link to="/performance">Performance para Wordpress</Link>
									</div>
									<div className="link-container">
										<Link to="/seo">SEO para Wordpress</Link>
									</div>
									<div className="link-container">
										<Link to="/sobre'wordpress">Sobre o Wordpress</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="footer-container">
						2021. Apiki WordPress. Todos os Direitos Reservados.
					</div>
				</div>
			</FooterArea>
		);
}
export default Page;