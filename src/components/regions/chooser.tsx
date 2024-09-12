import {
  type FC,
  type PropsWithChildren,
  type HTMLAttributes,
  useRef,
  useEffect
} from 'react'
import { useStore } from '@nanostores/react'
import { $open } from './state'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx/lite'
import Button from '../generic/button'
import CloseIcon from '~icons/material-symbols/close-rounded'

export interface RegionChooserProps extends HTMLAttributes<HTMLDivElement> {}

const RegionChooser: FC<PropsWithChildren<RegionChooserProps>> = ({
  children,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const openTL = useRef<any>()
  const open = useStore($open)

  useGSAP(() => {
    openTL.current = gsap.timeline({ paused: true }).from(ref.current, {
      y: '-100%',
      ease: 'power2.out'
    })
  })

  useEffect(() => {
    open ? openTL.current.play() : openTL.current.reverse()
  }, [open])

  return (
    <div
      className={clsx(
        'fixed inset-0 z-[99] h-screen overflow-y-scroll bg-zinc-800/[.9] p-4 backdrop-blur md:p-8',
        className
      )}
      ref={ref}
      {...props}
    >
      <div className='absolute inset-0 z-[2] grid h-max max-w-screen-md grid-cols-2 gap-2 px-4 pb-4 pt-8 sm:grid-cols-3 md:m-auto md:grid-cols-4 md:p-0'>
        <div className='col-span-2 mb-4 flex items-center justify-between text-zinc-50 sm:col-span-3 sm:mb-6 md:col-span-4'>
          <span className='text-lg font-bold sm:text-xl'>
            Pilih Kabupaten/Kota
          </span>
          <Button onClick={() => $open.set(false)}>
            <CloseIcon />
          </Button>
        </div>
        {children}
      </div>
      <div
        role='button'
        className='absolute inset-0 z-[1]'
        onClick={() => $open.set(false)}
      />
    </div>
  )
}

export default RegionChooser
