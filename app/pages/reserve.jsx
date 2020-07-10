import { useState } from 'react'
import { MdAccountBox, MdEventSeat } from 'react-icons/md'
import { Steps } from '../components'

const { Step } = Steps;

const STEPS = [
	{
		title: 'Step 1',
		content: 'Provide your data',
		icon: <MdAccountBox />,
		subtitle: 'Step 1',
		description: 'This is Step 1',
	},
	{
		title: 'Step 2',
		content: 'Choose the date and your desired seat',
		icon: <MdEventSeat />,
	},
	{
		title: 'Step 3',
		content: 'Confirm'
	},
]

const ReservePage = () => {
	const [currentStep, setCurrentStep] = useState(0)

	const next = () => {
		setCurrentStep(step => step + 1)
	}

	const prev = () => {
		setCurrentStep(step => step - 1)
	}

	const end = () => {
		console.log('Processing complete!')
	}

	return (
		<>
			<Steps current={currentStep} steps={STEPS} />
			<section>
				{STEPS[currentStep].content}
			</section>
			<div className="steps-action">
				{currentStep < STEPS.length - 1 && (
					<button type="button" onClick={next}>
						Next
					</button>
				)}
				{currentStep === STEPS.length - 1 && (
					<button type="button" onClick={end}>
						Done
					</button>
				)}
				{currentStep > 0 && (
					<button type="button" style={{ margin: '0 8px' }} onClick={prev}>
						Previous
					</button>
				)}
			</div>
		</>
	)
}

export default ReservePage
