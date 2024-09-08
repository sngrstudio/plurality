import {
  type FC,
  type PropsWithChildren,
  type HTMLAttributes,
  useRef
  /*useState*/
} from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
import clsx from 'clsx/lite'

export interface RegionChooserProps extends HTMLAttributes<HTMLDivElement> {}

const RegionChooser: FC<PropsWithChildren<RegionChooserProps>> = ({
  children,
  className,
  ...props
}) => {
  // const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  // useGSAP(() => {}, { dependencies: [open] })

  return (
    <div
      className={clsx(
        'h-screen overflow-y-scroll bg-zinc-800/[.9] p-4 backdrop-blur md:p-8',
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
