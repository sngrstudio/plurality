import type { Story, StoryDefault } from '@ladle/react'
import Component, { type ChoiceCardProps } from './card'

export const ChoiceCard: Story<ChoiceCardProps> = (props) => (
  <Component {...props} />
)

ChoiceCard.args = {
  campaignName: 'Nurhadi-Aldo',
  coalitionName: 'Koalisi Indonesia Tronjal-Tronjol Maha Asyik',
  slogan: '#SmackQueenYaQueen',
  className: ''
}

ChoiceCard.storyName = 'Card'

export default {
  title: 'Choice'
} satisfies StoryDefault
