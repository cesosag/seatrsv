import React from 'react'
import Step from './Step'
import { StepsContainer } from './styles'

const Steps = ({ steps, current }) => {
	return (
		<StepsContainer>
			{steps.map(({ title, icon, ...props }, i) => (
				<Step
					key={`${title}-${i + 1}`}
					title={title}
					icon={icon || i + 1}
					current={i <= current}
					completed={i < current}
					{...props}/>
			))}
		</StepsContainer>
	)
}

export default Steps
