import { type FC, useState } from 'react'
import clsx from 'clsx/lite'
import * as Label from '@radix-ui/react-label'
import * as Checkbox from '@radix-ui/react-checkbox'

export interface ChoiceCardProps {
  campaignName: string
  coalitionName?: string | undefined
  slogan?: string | undefined
  className?: string | undefined
}

const ChoiceCard: FC<ChoiceCardProps> = ({
  campaignName,
  coalitionName,
  slogan,
  className
}) => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(
    'indeterminate'
  )
  return (
    <Label.Root>
      <Checkbox.Root
        className={clsx(
          'border',
          checked === true && 'border-green-500',
          checked !== true && 'border-zinc-500',
          className
        )}
        checked={checked}
        onCheckedChange={setChecked}
      >
        <div className='flex flex-col items-center gap-y-1 px-2 pb-2'>
          <div className='text-lg font-bold'>{campaignName}</div>
          <div className=''>{coalitionName}</div>
          <div className='text-sm italic text-zinc-700'>{slogan}</div>
        </div>
      </Checkbox.Root>
    </Label.Root>
  )
}

export default ChoiceCard
