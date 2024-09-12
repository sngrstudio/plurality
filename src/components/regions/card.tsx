import { type FC } from 'react'
import type { GetImageResult } from 'astro'
import Button, { type ButtonProps } from '../generic/button'
import clsx from 'clsx/lite'
import { $open, $region } from './state'

export interface RegionCardProps extends ButtonProps {
  id: string
  name: string
  logo: GetImageResult | string
}

const RegionCard: FC<RegionCardProps> = ({
  id,
  name,
  logo,
  className,
  ...props
}) => {
  const handleClick = () => {
    $region.set(id)
    $open.set(false)
  }

  return (
    <Button
      {...props}
      className={clsx(
        'flex aspect-square select-none flex-col items-center gap-2 rounded-lg bg-zinc-50/[.75] p-4 shadow backdrop-blur-xl',
        className
      )}
      onClick={handleClick}
    >
      <div className='flex flex-1 flex-col justify-end'>
        <img
          className='aspect-square h-auto w-[75px] object-contain'
          src={typeof logo === 'string' ? logo : logo.src}
          srcSet={typeof logo === 'string' ? undefined : logo.srcSet.attribute}
          alt=''
          {...(typeof logo === 'string' ? {} : logo.attributes)}
        />
      </div>
      <div className='flex flex-1 flex-col justify-center'>
        <span className='text-center text-lg font-bold leading-tight'>
          {name}
        </span>
      </div>
    </Button>
  )
}

export default RegionCard
