import type { FC } from 'react'
import type { GetImageResult } from 'astro'
import type { CollectionEntry } from 'astro:content'
import type { Coalition } from './card.astro'
import clsx from 'clsx/lite'

export interface PollCardProps {
  choice: CollectionEntry<'candidate'>
  image: GetImageResult
  coalition: Coalition
}

const PollCard: FC<PollCardProps> = ({ choice, image, coalition }) => {
  return (
    <label className='relative cursor-pointer'>
      <input type='checkbox' className='peer sr-only' />
      <div className='ring ring-transparent peer-checked:ring-blue-500'>
        <div className='flex justify-center'>
          <span className='aspect-[1/1] font-bold'>{choice.data.number}</span>
        </div>
        <img
          className='aspect-[4/3] object-contain object-center'
          src={image.src}
          srcSet={image.srcSet.attribute}
          {...image.attributes}
          alt=''
        />
        <div className='flex flex-col justify-center'>
          {choice.data.candidates.map((c, i) => (
            <span
              className={clsx(
                'text-center text-sm',
                c.status === 'main-candidate' && 'font-bold',
                c.status === 'running-mate' && 'italic'
              )}
              key={i}
            >
              {c.name.name}
            </span>
          ))}
        </div>
        <div className='flex flex-wrap justify-center gap-1 py-1'>
          {coalition.map((c, i) => (
            <img
              className='h-[16px] w-auto'
              src={c.logo.src}
              srcSet={c.logo.srcSet.attribute}
              {...c.logo.attributes}
              alt=''
              key={i}
            />
          ))}
        </div>
      </div>
    </label>
  )
}

export default PollCard
