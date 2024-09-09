import type { Story, StoryDefault } from '@ladle/react'
import Component, {
  type RegionChooserProps,
  RegionChooserToggleButton
} from './chooser'
import Card, { type RegionCardProps } from './card'
import {
  CHOICE_CARD_DEFAULT_NAME,
  CHOICE_CARD_DEFAULT_LOGO,
  BACKGROUND_IMAGE
} from './card.stories'

interface RegionChooserArgs
  extends RegionChooserProps,
    Pick<RegionCardProps, 'name' | 'logo'> {
  n: number
}

export const ChoiceChooser: Story<RegionChooserArgs> = ({
  n,
  name,
  logo,
  className,
  ...props
}) => (
  <>
    <Component className='' {...props}>
      {Array.from({ length: n }).map((_, i) => (
        <Card key={i} className='' name={name} logo={logo} />
      ))}
    </Component>
    <RegionChooserToggleButton>
      <span>Toggle Chooser</span>
    </RegionChooserToggleButton>
  </>
)

ChoiceChooser.args = {
  n: 13,
  name: CHOICE_CARD_DEFAULT_NAME,
  logo: CHOICE_CARD_DEFAULT_LOGO
}

ChoiceChooser.storyName = 'Chooser'

export default {
  title: 'Region',
  decorators: [
    (Component) => (
      <div
        className='flex h-screen flex-col items-center justify-center bg-cover bg-center'
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        <Component />
      </div>
    )
  ]
} satisfies StoryDefault
