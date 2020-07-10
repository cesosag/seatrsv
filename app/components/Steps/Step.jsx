import React from 'react'
import { Badge, Content, Description, StepWrapper, Title } from './styles'

const Step = ({ description, completed, current, icon, title }) => {
	return (
		<StepWrapper>
			<Badge completed={completed} current={current}>{icon}</Badge>
			<Content>
				<Title completed={completed} current={current}>{title}</Title>
				<Description completed={completed} current={current}>{description}</Description>
			</Content>
		</StepWrapper>
	)
}

export default Step
