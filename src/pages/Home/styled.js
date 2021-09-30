import styled from 'styled-components';
export const Container = styled.div`
	
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
`;
export const TitleSmall = styled.h4`
	font-weight: normal;
	font-size: 1rem;
`;
export const ContainerSmall = styled.div`
	width: 770px;
	margin-left: 100px;
	padding-top: 70px;
	color: #67676b;
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
	width: 15px;
	height: 15px;
	background-color: #000;
`;
export const NextPreviousArea = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const FullSizeArea = styled.div`
	width: 15px;
	height: 15px;
	background-color: #000;
`;
export const NextButton = styled.div``;
export const NumberArea = styled.div``;
export const PreviousButton = styled.div``;
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
`;
export const FormTitle1 = styled.h1`
	text-align: center;
`;
export const FormTitle2 = styled.h2`
	text-align: center;
`;