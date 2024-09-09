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

export interface RegionChooserProps extends HTMLAttributes<HTMLDivElement> {}

export const RegionChooserToggleButton: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <button
      className='bg-zinc-50/[.75] px-4 py-2 shadow backdrop-blur-xl'
      onClick={() => $open.set(true)}
    >
      {children}
    </button>
  )
}

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
      <div className='mx-auto grid h-max max-w-screen-md grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
        {children}
      </div>
    </div>
  )
}

export default RegionChooser
