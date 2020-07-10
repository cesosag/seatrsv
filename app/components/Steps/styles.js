import styled from 'styled-components'

export const StepsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const Badge = styled.span`
	align-items: center;
	background-color: ${({ completed }) => completed ? 'indigo' : 'none'};
	border-radius: 50%;
	color: ${({ completed, current }) => current ? completed ? 'white' : 'indigo' : 'lightgray'};;
	display: flex;
	font-size: 22px;
	justify-content: center;
	height: 1.2em;
	transition: background-color 0.3s, color 0.3s;
	width: 1.2em;
`

export const Title = styled.h2`
	display: inline-block;
	color: ${({ current }) => current ? 'black' : 'lightgray'};
	line-height: 1;
	margin: 0;
	position: relative;
	text-transform: capitalize;
	transition: color 0.3s;

	&::after {
		border-top: 1px solid ${({ completed }) => completed ? 'indigo' : 'lightgray'};
		display: block;
		left: calc(100% + 0.25em);
		position: absolute;
		top: 50%;
		transition: border-top 0.3s;
		width: 50vw;
	}
`

export const StepWrapper = styled.div`
	align-items: baseline;
	display: flex;
	overflow: hidden;

	&:not(:last-child) {
		flex: 1 1;
		margin-right: 1em;

		& ${Title}::after {
			content: '';
		}
	}
`

export const Content = styled.div`
	margin-left: 0.2em;
`

export const Description = styled.p`
	color: ${({ current }) => current ? 'gray' : 'lightgray'};;
	line-height: 1;
	margin: 0;
	text-transform: none;
`
