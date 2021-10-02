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
		FormTitle1, FormTitle2,
		TitlesContainer, FormContainer,
		Form, InputArea,
		SelectArea, Selects, ProgressBar, Progress
	} from './styled';
	import {Link} from 'react-router-dom';
	import {useState, useRef} from 'react';
	import TableRowItem from '../../components/TableRowItem';
	import ShareIcon from '@material-ui/icons/Share';
	import AspectRatioIcon from '@material-ui/icons/AspectRatio';
	import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
	import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Page = ({showMenu, setShowMenu}) => {
	let TotalImages;//Para ser global
	let currentSlide = useRef(0);//Eu podia simplesmente colocar que currentSlide = 5, mas coloquei num useRef para que nao seja rerenderizado
	const [margin, setMargin] = useState(0);
	const [currentPhoto, setCurrentPhoto] = useState(1);
	let SliderImgContainerWidth = useRef();//Tamanho da imagem
	const [totImg, setTotImg] = useState(0);
	const [inputQuantity, setInputQuantity] = useState([0]);

	const appearTotalImages = () => {
		TotalImages = document.querySelectorAll('.slider--width img').length;
		setTotImg(TotalImages);
	}
	setTimeout(()=>{
		appearTotalImages();//Devo esperar esse tempinho para permitir que as imagens sejam renderizadas, caso contrario retorna 0
	}, 0.1);

	const handleNextClick = () => {
		currentSlide.current++;
		setCurrentPhoto(currentPhoto + 1);
		if (currentSlide.current > (TotalImages - 1)) {
			currentSlide.current = 0;
			setCurrentPhoto(1);
		}
		updateMargin(currentSlide.current);
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
					<TitleBig showMenu={showMenu}>Carreira</TitleBig>
					<TitleSmall showMenu={showMenu}>Chegue mais, vem ser um Apiker!</TitleSmall>
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

							<ProgressBar>
								<Progress currentPhoto={currentPhoto} totImg={totImg}></Progress>
							</ProgressBar>

							<OptArea>
								<ShareArea><ShareIcon style={{width: 20, color: '#000'}}/></ShareArea>
								<NextPreviousArea>
									<PreviousButton onClick={handlePrevClick}>
										<ArrowBackIosIcon style={{width: 20, color: '#000'}}/>
									</PreviousButton>
									<NumberArea>{currentPhoto} of {totImg}</NumberArea>
									<NextButton onClick={handleNextClick}>
										<ArrowForwardIosIcon style={{width: 20, color: '#000'}}/>
									</NextButton>
								</NextPreviousArea>
									<FullSizeArea>
										<AspectRatioIcon style={{width: 20, color: '#000'}}/>
									</FullSizeArea>
							</OptArea>
							<ApikiCodeArea>
								<Link to="/apiki_cultura">Código de cultura da Apiki </Link>
									 from <Link to="/apiki_wordpress"> Apiki Wordpress</Link>
							</ApikiCodeArea>
						</Slider>
					</SliderArea>
				</ContainerSmall>

				<FormArea>
					<FormContainer>
						<TitlesContainer>
							<FormTitle1>Oportunidades de Carreira na Apiki</FormTitle1>
							<FormTitle2>Chega mais, vem ser um Apiker!</FormTitle2>
							<FormTitle1 style={{marginBottom: 25}}>Dados pessoais</FormTitle1>
						</TitlesContainer>

						<Form action="/apiker_page">
							<InputArea>
								<label>Seu nome completo*</label>
								<input type="text" />
								<label>Nome</label>
							</InputArea>

							<InputArea>
								<label>E-mail*</label>
								<input type="email" />
							</InputArea>

							<InputArea>
								<label>Telefone com DDD*</label>
								<input type="text" />
							</InputArea>

							<InputArea>
								<label>URL do seu perfil no LinkedIn</label>
								<input type="text" placeholder="https://"/>
							</InputArea>

							<InputArea>
								<label>Seus perfis em outras redes sociais*</label>
								<table border="1" cellSpacing="0">
									<tr>
										<th>Nome da rede social</th>
										<th>Endereço do seu perfil</th>
										<th></th>
									</tr>

									{inputQuantity.map((item, key)=>(
											<TableRowItem setInputQuant={setInputQuantity} 
												inputQuantity={inputQuantity} key={key} index={key}/>
										))}
								</table>
							</InputArea>

							<InputArea>
								<label>Em qual Estado você reside atualmente?*</label>
								<input type="text" />
							</InputArea>

							<InputArea>
								<label>Em qual Cidade você reside atualmente?*</label>
								<input type="text" />
							</InputArea>

							<SelectArea>
								<h2>Função</h2>
								<h4>Qual a vaga do seu interesse?*</h4>
								<Selects>
									<div className="checkbox--div">
										<input type="checkbox" /> <span>Desenvolvedor Back-end</span>
									</div>
									<div className="checkbox--div">
										<input type="checkbox" /> <span>Tech Lead</span>
									</div>
									<div className="checkbox--div">
										<input type="checkbox" /> <span>DevOps</span>
									</div>
									<div className="checkbox--div">
										<input type="checkbox" /> <span>Design Leadership (UX Manager)</span>
									</div>
									<div className="checkbox--div">
										<input type="checkbox" /> <span>
											Nenhuma. Me avise quando surgir uma oportunidade</span>
									</div>
								</Selects>
								
							</SelectArea>

							<InputArea>
								<label>Qual sua pretensão salarial?*</label>
								<input type="text" />
							</InputArea>

							<InputArea>
								<label>Envie seu Currículo*</label>
								<input type="file" className="fileInput"/>
								<small>
									Tipos de arquivo aceitos: jpg, png, pdf, doc, Máx. tamanho do arquivo: 64 MB.</small>
							</InputArea>

							<InputArea className="buttonInput">
								<button type="submit">Quero ser um Apiker!</button>
							</InputArea>
						</Form>
					</FormContainer>
				</FormArea>
			</Container>
		);
}
export default Page;