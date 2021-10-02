import styled from 'styled-components';

export const HeaderArea = styled.header`
	height: 75px;
	display: flex;
	align-items: center;
`;
export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all ease 0.4s;
	@media(max-width: 600px) {
		& {
			background-color: #fff;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			height: ${props=>props.showMenu ? '350px' : '70px'};
			overflow: hidden;
			padding: 20px 15px;
		}
	}
	@media(min-width: 768px) and (max-width: 1024px) {
		& {
			background-color: #fff;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			height: ${props=>props.showMenu ? '350px' : '70px'};
			overflow: hidden;
			padding: 20px 15px;
		}
	}
`;
export const Logo = styled.img`
	width: 130px;
	height: auto;
	@media(max-width: 600px) {
		& {
			width: 140px;
		}
	}
`;
export const MenuArea = styled.nav`
	display: flex;
	align-items: center;
	@media(max-width: 600px) {
		& {
			width: 100%;
			flex-direction: column;
			align-items: flex-start;
			margin-top: 15px;
			padding-left: 15px;
		}
	}
	@media(min-width: 768px) and (max-width: 1024px) {
		& {
			width: 100%;
			flex-direction: column;
			align-items: flex-start;
			margin-top: 15px;
			padding-left: 15px;
		}
	}
`;
export const MenuOpener = styled.div`
	display: none;
	position: absolute;
	right: 25px;
	cursor: pointer;
	@media(max-width: 600px) {
		& {
			display: block;
		}
	}
	@media(min-width: 768px) and (max-width: 1024px) {
		& {
			display: block;
		}
	}
`;
export const MenuCloser = styled.div`
	display: none;
	position: absolute;
	right: 25px;
	cursor: pointer;
	@media(max-width: 600px) {
		& {
			display: block;
		}
	}
	@media(min-width: 768px) and (max-width: 1024px) {
		& {
			display: block;
		}
	}
`;