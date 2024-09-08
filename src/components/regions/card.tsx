import { type FC, type HTMLAttributes, useRef } from 'react'
import type { GetImageResult } from 'astro'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx/lite'

export interface RegionCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  logo: GetImageResult | string
}

const RegionCard: FC<RegionCardProps> = ({
  name,
  logo,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const clickTapTL = useRef<any>()

  useGSAP(() => {
    clickTapTL.current = gsap
      .timeline()
      .to(ref.current, { scale: 0.95, ease: 'power2.out' })
      .pause()
  })

  const handleClickTap = () => {
    clickTapTL.current.play()
  }

  const handleClickTapRelease = () => {
    clickTapTL.current.timeScale(2).reverse()
  }

  return (
    <div
      className={clsx(
        'flex aspect-square select-none flex-col items-center rounded-lg bg-white/[.4] p-2 shadow',
        className
      )}
      role='button'
      onPointerDown={handleClickTap}
      onPointerUp={handleClickTapRelease}
      ref={ref}
      {...props}
    >
      <div className='flex flex-1 flex-col justify-center'>
        <img
          className='aspect-square h-auto w-[50px] object-contain'
          src={typeof logo === 'string' ? logo : logo.src}
          srcSet={typeof logo === 'string' ? undefined : logo.srcSet.attribute}
          alt=''
          {...(typeof logo === 'string' ? {} : logo.attributes)}
        />
      </div>
      <div className='flex flex-1 flex-col justify-center'>
        <span className='text-center font-bold leading-tight'>{name}</span>
      </div>
    </div>
  )
}

export default RegionCard
