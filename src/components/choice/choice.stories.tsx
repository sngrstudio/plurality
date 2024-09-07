import type { Story } from '@ladle/react'
import Component, { type ChoiceCardProps } from './card'

export const ChoiceCard: Story<ChoiceCardProps> = (props) => (
  <Component {...props} />
)

ChoiceCard.args = {
  title: 'Pasangan Calon Mantap'
}
