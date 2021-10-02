import styled from 'styled-components';
export const FooterArea = styled.footer`
	.footer-container {
			width: 1200px;
		}
	.footer-top {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 60px 0 80px 0;
		background-color: #2a2a2a;
		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #67676b;
			padding-bottom: 50px;
			.leftSide {
				width: 170px;
				img {
					width: 100%;
					height: auto;
				}
			}
			.rightSide {
				display: flex;
				align-items: center;
			}
		}
		.bottom {
			display: flex;
			padding-top: 70px;
			.address {
				width: 25%;
				.address-title {
					max-width: 75%;
					margin-bottom: 20px;
					color: #a8a8a8;
					font-weight: bold;
				}
				.address-desc {
					max-width: 75%;
					color: #a8a8a8;
					.link-container {
						margin-bottom: 5px;
						a {
							color: #fff;
							text-decoration: none;
							transition: all ease 0.3s;
							&: hover {
								color: #67676b;
							}
						}
					}
					
				}
			}
		}
	}
	.footer-bottom {
		background-color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #a8a8a8;
		padding: 35px 0 40px 0;
	}

	@media(max-width: 600px) {
		
		& {
			.footer-bottom {
				font-size: 0.8rem;
				text-align: center;
			}
			.footer-container {
				padding-left: 17px;
				padding-right: 17px;
				width: 100%;
				.bottom {
					flex-direction: column;
					.address {
						width: 100%;
						margin-bottom: 40px;
						.address-title {
							font-size: 1.1rem;
						}
					}
				}
				.top {
					flex-direction: column;
					align-items: flex-start;
					justify-content: flex-start;
					.leftSide {
						width: 140px;
						margin-bottom: 20px;
					}

				}
			}
		}
	}
	@media(min-width: 768px) and (max-width: 1024px) {
		& {
			.footer-container {
				padding-left: 20px;
				padding-right: 20px;
			}
			.footer-bottom {
				text-align: center;
			}
		}
	}
`;