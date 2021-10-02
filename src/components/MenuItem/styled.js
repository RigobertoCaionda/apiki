import styled from 'styled-components';
export const LinkArea = styled.a`
	margin-right: 22px;
	text-decoration: none;
	font-size: 0.9rem;
	color: #67676b;
	&: last-child {
		margin-right: 0;
	}
	&: hover {
		color: #e36000;
	}

	@media(max-width: 600px) {
		& {
			width: 100%;
			margin-bottom: 20px;
			margin-right: 0;
			font-size: 1rem;
		}
	}
`;