import {
  type FC,
  type HTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  useRef
} from 'react'
import type { GetImageResult } from 'astro'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx/lite'
import { $open } from './state'

export interface RegionCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  logo: GetImageResult | string
  action: (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void
}

const RegionCard: FC<RegionCardProps> = ({
  name,
  logo,
  action,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const clickTapTL = useRef<any>()

  useGSAP(() => {
    clickTapTL.current = gsap
      .timeline({ paused: true })
      .to(ref.current, { scale: 0.95, ease: 'power2.out' })
  })

  const handleClickTap = () => {
    clickTapTL.current.play()
  }

  const handleClickTapRelease = () => {
    clickTapTL.current.timeScale(2).reverse()
  }

  const handleClick = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    action(e)
    $open.set(false)
  }

  return (
    <div
      className={clsx(
        'flex aspect-square select-none flex-col items-center gap-2 rounded-lg bg-zinc-50/[.75] p-4 shadow backdrop-blur-xl',
        className
      )}
      role='button'
      onPointerDown={handleClickTap}
      onPointerUp={handleClickTapRelease}
      onClick={handleClick}
      ref={ref}
      {...props}
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
      <div className='flex flex-1 flex-col justify-start'>
        <span className='text-center text-lg font-bold leading-tight'>
          {name}
        </span>
      </div>
    </div>
  )
}

export default RegionCard
