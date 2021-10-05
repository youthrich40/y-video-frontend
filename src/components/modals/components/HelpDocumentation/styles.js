import styled from 'styled-components'
import HexLogo from 'assets/hexborder.svg'

export const Back = styled.div`
	position: fixed;
	display: flex;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0,0,0, 0.2);
`
export const Container = styled.div`
	margin: auto;
	width: 80vw;
	max-height: 70vh;
	height: auto;
	overflow-y: scroll !important;
	background-color: white;
	border-radius: 5px;
	position: relative;
	text-align: center;


	::-webkit-scrollbar {
		display: block !important;
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #DDDDDD;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--light-blue);
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: var(--navy-blue);
	}

	& h1 {
		border-bottom: 2px solid #0582ca;
		padding-top: 5px;
		height: 30px;
	}

	& #content {
		width: 80%;
		margin: auto auto auto auto;
		text-align: left;
		position: relative;

		& .large-img{
			flex-direction: column;
			& img {
				width: 100%;
			}
		}

		& .section {
			font-size: 1.5rem !important;
			padding: 10px;
			display: flex;

			border: 2.5px solid rgba(200, 200, 200, .7);
			border-radius: 10px;
			padding: 10px;
			margin: 25px 0px;
			position: relative;

			& h3 {
				margin-left: -12px;
				margin-top: -12px;
				width: calc(100% + 4px);
				padding: 5px 10px;
				margin-bottom: 5px;
				background-color: rgba(5, 130, 202, 0.2);
				border-radius: 10px 10px 0px 0px;
			}

			& p {
				margin: auto;
				flex: 1;
				line-height: 20px;

				& img {
					float: right;
					margin: auto;
					padding: 5px;
					border: .1px solid transparent;
					border-radius: 10px;
				}
			}

			& li {
				padding: 3px 0px 3px 0px;

				& .icon {
					position: relative;
					top: 5px;
					width: 20px;
					height: 20px;
				}
			}
		}

		& .flex-column {
			flex-direction: column;
		}
	}

`
export const CloseHelp = styled.span`
	height: 30px;
	width: 30px;

	& img {
		width: 30px;
		height: 30px;
    position: absolute;
    top: 10px;
    right: 20px;
	}
`

export const Tutorial = styled.div`
`