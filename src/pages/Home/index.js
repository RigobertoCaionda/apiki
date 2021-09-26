import {
		Container,
		TitleBig, 
		TitleSmall,
		PageBanner,
		ContainerSmall,
		Title,
		Text,
		TextContainer,
		TitleSm,
		ImageArea,
		Image
	} from './styled';
const Page = () => {
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
				</ContainerSmall>
			</Container>
		);
}
export default Page;