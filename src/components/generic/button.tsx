import {
  type FC,
  type PropsWithChildren,
  type HTMLAttributes,
  useRef
} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx/lite'

export const Button: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
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

  return (
    <div
      {...props}
      className={clsx('', className)}
      onPointerDown={handleClickTap}
      onPointerUp={handleClickTapRelease}
      role='button'
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Button
