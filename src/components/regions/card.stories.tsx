import type { Story, StoryDefault } from '@ladle/react'
import Component, { type RegionCardProps } from './card'

export const ChoiceCard: Story<RegionCardProps> = ({ className, ...props }) => (
  <div className='flex h-full items-center justify-center bg-zinc-200 p-4'>
    <Component className='max-w-[150px]' {...props} />
  </div>
)

ChoiceCard.args = {
  name: 'Kalimantan Tengah',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Coat_of_arms_of_Central_Kalimantan.svg'
}

ChoiceCard.storyName = 'Card'

export default {
  title: 'Region'
} satisfies StoryDefault
