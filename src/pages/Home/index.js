import {
		Container, TitleBig, 
		TitleSmall, PageBanner,
		ContainerSmall, Title,
		Text, TextContainer,
		TitleSm, ImageArea,
		Image, SliderArea,
		SliderTitle, OptArea,
		SliderImage, ShareArea,
		NextPreviousArea, FullSizeArea,
		PreviousButton, NumberArea,
		NextButton, ApikiCodeArea,
		SliderWidth, Slider,
		SliderImgContainer,	FormArea,
		FormTitle1, FormTitle2
	} from './styled';
	import {Link} from 'react-router-dom';
	import {useState, useRef, useEffect} from 'react';
const Page = () => {
	let TotalImages;//Para ser global
	const [margin, setMargin] = useState(0);
	const [currentPhoto, setCurrentPhoto] = useState(1);
	let SliderImgContainerWidth = useRef();//Tamanho da imagem
	const [totImg, setTotImg] = useState(0);//Gambiarra para retornar o numero de imagens que temos
	useEffect(()=>{
		TotalImages = document.querySelectorAll('.slider--width img').length;
		setTotImg(TotalImages);
	},[currentPhoto]);/*Se vc nao colocar dentro de um useEffect, vai retornar zero pois quando o codigo 
		rodar ainda nenhuma imagem tera sido renderizada, so sera renderizada quando vc mudar algum item, 
		entao eu coloquei ele a monitorar o currentPhoto, desse jeito, sempre que currentPhoto mudar, ele vai 
		rerenderizar o let TotalImages (Sendo undefined) e depois vai entrar no useEffect e retornar o numero de 
		imagens*/

	let currentSlide = useRef(0);//Eu podia simplesmente colocar que currentSlide = 5, mas coloquei num useRef para que nao seja rerenderizado
	const handleNextClick = () => {
		currentSlide.current++;
		setCurrentPhoto(currentPhoto + 1);//Para mudar o display que mostra que foto esta a ser exibida
		if (currentSlide.current > (TotalImages - 1)) {
			currentSlide.current = 0;
			setCurrentPhoto(1);
		}
		updateMargin(currentSlide.current);//# entre useRef e useState, toda vez que vc usa um setState ha uma rerenderizacao
	}

	const handlePrevClick = () => {
		currentSlide.current--;
		setCurrentPhoto(currentPhoto - 1);
		if (currentSlide.current < 0) {
			currentSlide.current = (TotalImages - 1);
			setCurrentPhoto(3);
		}
		updateMargin(currentSlide.current);
	}

	const updateMargin = (currentSlide) => {
		let tam = SliderImgContainerWidth.current.clientWidth;
		let newMargin = currentSlide * tam;
		setMargin(newMargin);
	}

	return (
			<Container>
				<PageBanner>
					<TitleBig>Carreira</TitleBig>
					<TitleSmall>Chegue mais, vem ser um Apiker!</TitleSmall>
				</PageBanner>

				<ContainerSmall>
					<TextContainer>
						<Title>Por que trabalhar na Apiki?</Title>
						<Text>
							O trabalho consome boa parte das nossas vidas. Por isso, gostamos de estar 
								cercados de pessoas sensacionais, que confiamos e admiramos tanto pelo cérebro, 
									quanto pelo coração.
						</Text>
					</TextContainer>

					<TextContainer>
						<TitleSm>Fazemos de tudo para você se sentir em casa</TitleSm>
						<Text>Não olhamos sua roupa, seu cabelo, se você quer atuar da sua mesa ou deitado 
								no sofá. É conforto para trabalhar que você quer? 
								<br /><br />Então venha ser um Apiker!</Text>
					</TextContainer>

					<ImageArea>
						<Image src="/assets/image1.webp" />
					</ImageArea>

					<TextContainer>
						<TitleSm>Incentivamos a liberdade com responsabilidade</TitleSm>
						<Text>
							Acreditamos na liberdade que os cérebros criativos precisam para produzir.
							<br /><br />
						</Text>
						<Text>Na Apiki você é livre para fazer suas escolhas.<br /><br /></Text>
						<Text>
							No final do sprint quinzenal, contamos que todas as suas cards estejam em dia.
						</Text>
						<Text>
							Caso haja algum impedimento, nossas dailys são o momento ideal para te ajudar
								 a solucioná-lo.
						</Text>
					</TextContainer>

					<TextContainer>
						<TitleSm>Respeitamos por igual quem pensa diferente</TitleSm>
						<Text>
							Procuramos Apikers plurais, pois apoiamos a diversidade e não fazemos distinção
							 pela raça, clero, deficiência, gênero ou orientação sexual.
						</Text>
					</TextContainer>

					<TextContainer>
						<TitleSm>Valorizamos o Protagonismo</TitleSm>
						<Text>
							Os líderes são os responsáveis pelas tomadas de decisão, mas isso não impede 
							que cada colaborador desenvolva ações de protagonismo.<br /><br />
						</Text>
	
						<Text>
							Jamais apontamos um problema sem antes pensar em possíveis soluções.<br /><br />
						</Text>
						<Text>
							Jogamos limpo. Tentamos expor as dificuldades e expectativas com 
								transparência e não esperamos que outra pessoa assuma nossos compromissos.
							</Text>
					</TextContainer>
					<SliderArea>
						<SliderTitle>Conheça o Código de Cultura da Apiki</SliderTitle>

						<Slider>
							<SliderWidth margin={margin} total={totImg} className="slider--width">
								<SliderImgContainer ref={SliderImgContainerWidth}>
									<SliderImage src="/assets/cocacola1.png" />
								</SliderImgContainer>

								<SliderImgContainer>
									<SliderImage src="/assets/mocaLinda.jpg" />
								</SliderImgContainer>

								<SliderImgContainer>
									<SliderImage src="/assets/tubidy2.png" />
								</SliderImgContainer>

							</SliderWidth>

							<OptArea>
								<ShareArea></ShareArea>
								<NextPreviousArea>
									<PreviousButton onClick={handlePrevClick}>p</PreviousButton>
									<NumberArea>{currentPhoto} of {totImg}</NumberArea>
									<NextButton onClick={handleNextClick}>n</NextButton>
								</NextPreviousArea>
								<FullSizeArea></FullSizeArea>
							</OptArea>
							<ApikiCodeArea>
								<Link to="/apiki_cultura">Código de cultura da Apiki </Link>
									 from <Link to="/apiki_wordpress"> Apiki Wordpress</Link>
							</ApikiCodeArea>
						</Slider>
					</SliderArea>
				</ContainerSmall>

				<FormArea>
					<FormTitle1>Oportunidades de Carreira na Apiki</FormTitle1>
					<FormTitle2>Chega mais, vem ser um Apiker!</FormTitle2>
				</FormArea>
			</Container>
		);
}
export default Page;