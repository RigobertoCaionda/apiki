import styled from 'styled-components';
export const Container = styled.div`
	@media(max-width: 600px) {
		padding: 0 5px;
	}
	@media (min-width: 768px) and (max-width: 1024px) {
		padding: 0 15px;
	}
`;
export const PageBanner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #fff;
	height: 310px;
	background-color: #009cde;
`;
export const TitleBig = styled.h1`
	margin-bottom: 20px;
	font-size: 3.1rem;
	@media(max-width: 600px) {
		& {
			font-size: 2.2rem;
			color: ${props=>props.showMenu ? 'transparent' : '#fff'};
		}
	}
`;
export const TitleSmall = styled.h4`
	font-weight: normal;
	font-size: 1rem;
	@media(max-width: 600px) {
		& {
			font-size: 1.6rem;
			text-align: center;
			color: ${props=>props.showMenu ? 'transparent' : '#fff'};
		}
	}
`;
export const ContainerSmall = styled.div`
	width: 770px;
	margin-left: 100px;
	padding-top: 70px;
	color: #67676b;
	@media(max-width: 600px) {
		& {
			width: 100%;
			margin-left: 0;
			padding: 30px 13px 0 13px;
		}
	}
	@media(min-width: 768px) and (max-width: 1024px) {
		& {
			width: 100%;
			margin-left: 0;
			padding: 30px 30px 0 30px;
		}
	}
`;
export const TextContainer = styled.div`
	margin-bottom: 30px;
`;
export const Title = styled.h1`
	margin-bottom: 15px;
`;
export const TitleSm = styled.h3`
	margin-bottom: 15px;
`;
export const Text = styled.p`
	font-size: 1rem;
`;
export const ImageArea = styled.div`
	margin-bottom: 20px;
`;
export const Image = styled.img`
	width: 100%;
`;
export const SliderArea = styled.div`
	overflow: hidden;
`;
export const SliderTitle = styled.h1``;
export const OptArea = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	background-color: #e9f7fd;
	border: 1px solid #ccc;
	margin-bottom: 20px;
`;
export const SliderImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const ShareArea = styled.div`
	cursor: pointer;
`;
export const NextPreviousArea = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const FullSizeArea = styled.div`
	cursor: pointer;
`;
export const NextButton = styled.div`
	cursor: pointer;
`;
export const NumberArea = styled.div``;
export const PreviousButton = styled.div`
	cursor: pointer;
`;
export const ApikiCodeArea = styled.div`
	a {
		text-decoration: none;
		font-weight: bold;
		color: #e36000;
	}
`;
export const SliderWidth = styled.div`
	width: calc(770px * ${props=>props.total});
	display: flex;
	transition: all ease 0.3s;
	min-height: 300px;
	margin-left: -${props=>props.margin}px;
`;
export const Slider = styled.div``;
export const SliderImgContainer = styled.div`
	width: 100%;
	height: 350px;
`;
export const FormArea = styled.div`
	width: 1200px;
	margin: 180px auto 50px auto;
	background-color: #f1f1f1;
	border-radius: 20px;
	padding: 100px 0 80px 0;
	@media(max-width: 600px) {
		& {
			width: 100%;
			margin: 20px 0px 5px 0;
			padding: 20px;
		}
	}
	@media(min-width: 768px) and (max-width: 1024px) {
		& {
			width: 100%;
			margin: 20px 0px 5px 0;
			padding: 20px;
		}
	}
`;
export const FormTitle1 = styled.h2`
	color: #808285;
	font-weight: normal;
	margin-bottom: 10px;
`;
export const FormTitle2 = styled.h4`
	font-weight: normal;
	margin-bottom: 50px;
	color: #a8a8a8;
`;
export const TitlesContainer = styled.div``;
export const FormContainer = styled.div`
	width: 850px;
	margin: auto;
	@media(max-width: 600px) {
		& {
			width: 100%;
			margin: 0;
		}
	}
	@media (min-width: 768px) and (max-width: 1024px) {
		width: 100%;
		margin: 0;
	}
`;
export const Form = styled.form`
	.buttonInput {
		align-items: flex-end;
		button {
			width: 27%;
			padding: 17px 30px;
			font-size: 1rem;
			color: #fff;
			background-color: #e36000;
			border: 0;
			outline: 0;
			border-radius: 12px;
			cursor: pointer;
		}
		button: hover {
			background-color: #800080;
		}
	}
	@media(max-width: 600px) {
		& {
			.buttonInput {
				button {
					width: 75%;
					padding: 17px 0;
				}
			}
		}
	}
	@media (min-width: 768px) and (max-width: 1024px) {
		& {
			.buttonInput {
				button {
					width: 40%;
					padding: 17px 0;
				}
			}
		}
	}
`;
export const InputArea = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	label {
		margin-bottom: 18px;
		font-size: 1rem;
		color: #a8a8a8;
	}
	input {
		outline: 0;
		padding: 17px;
		border-radius: 10px;
		border: 1px solid #e6e6e6;
		font-size: 1rem;
	}
	.fileInput {
		background-color: #fff;
	}
	small {
		font-size: 0.9rem;
		color: #a8a8a8;
	}
	table {
		border-color: #dbdbdb;
		th {
			text-align: left;
			padding: 10px;
			color: #a8a8a8;
		}
	
		td {
			padding: 10px;
			.plus-less {
				display: flex;
				align-items: center;
				div {
					margin-right: 5px;
					cursor: pointer;
				}
			}
			input {
				width: 100%;
			}
		}
	}
`;
export const SelectArea = styled.div`
	margin-bottom: 20px;
	h2 {
		color: #808285;
		margin-bottom: 18px;
	}
	h4 {
		font-weight: normal;
		color: #a8a8a8;
		margin-bottom: 18px;
	}
	span {
		color: #a8a8a8;
	}
`;
export const Selects = styled.div`
	.checkbox--div {
		margin-bottom: 3px;
	}
`;
export const ProgressBar = styled.div`
	background-color: #d0d6e6;
	height: 8px;
`;
export const Progress = styled.div`
	background-color: #989fbc;
	width: calc((${props=>props.currentPhoto} / ${props=>props.totImg}) * 100%);
	height: inherit;
`;