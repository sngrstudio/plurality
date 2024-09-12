import { type FC } from 'react'
import Button from '../generic/button'
import Icon from '~icons/material-symbols/arrow-drop-down-rounded'
import { $open } from './state'

export const RegionChooserToggleButton: FC = () => {
  return (
    <Button
      className='flex items-center rounded-full bg-zinc-50/[.75] px-4 py-2 shadow backdrop-blur-xl'
      onClick={() => $open.set(true)}
    >
      <div className='flex-1 border-r border-zinc-300 pr-2'>
        <span>Pilih Kabupaten/Kota</span>
      </div>
      <div className='pl-2'>
        <Icon className='text-zinc-500' />
      </div>
    </Button>
  )
}

export default RegionChooserToggleButton
