import styled from 'styled-components';
export const LinkArea = styled.a`
	width: 55px;
	height: 55px;
	border-radius: 50%;
	border: 1px solid #c5c5c5;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 30px;
	.MuiSvgIcon-root {
			font-size: 1.8rem;
		}
	&: hover {
		transform: scale(1.19);
		background-color: #e9e9e9;
		.MuiSvgIcon-root {
			fill: #040404;
		}
	}
	&: last-child {
		margin-right: 0;
	}
	@media(max-width: 600px) {
		width: 45px;
		height: 45px;
		margin-right: 15px;
	}
	@media (min-width: 768px) and (max-width: 1024px) {
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}
`;