import { type Story, type StoryDefault, action } from '@ladle/react'
import Component, { type RegionCardProps } from './card'

export const CHOICE_CARD_DEFAULT_NAME = 'Provinsi Kalimantan Tengah'
export const CHOICE_CARD_DEFAULT_LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Coat_of_arms_of_Central_Kalimantan.svg'
export const BACKGROUND_IMAGE =
  'https://upload.wikimedia.org/wikipedia/en/c/ce/Upacara_HUT_ke-79_RI_di_Istana_Garuda%2C_Nusantara_%28IKN%29_-_2024.jpg'

export const ChoiceCard: Story<RegionCardProps> = ({ className, ...props }) => (
  <Component {...props} action={action('onClick')} className='w-[190px]' />
)

ChoiceCard.args = {
  name: CHOICE_CARD_DEFAULT_NAME,
  logo: CHOICE_CARD_DEFAULT_LOGO
}

ChoiceCard.storyName = 'Card'

export default {
  title: 'Region',
  decorators: [
    (Component) => (
      <div
        className='bg-cover bg-center'
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        <div className='flex items-center justify-center gap-x-4 bg-zinc-800/[.9] p-4 backdrop-blur'>
          <Component />
        </div>
      </div>
    )
  ]
} satisfies StoryDefault
