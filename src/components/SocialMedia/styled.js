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
	&: hover {
		transform: scale(1.19);
		background-color: #e9e9e9;
	}
	&: last-child {
		margin-right: 0;
	}
	@media(max-width: 600px) {
		width: 45px;
		height: 45px;
		margin-right: 15px;
	}
`;