import type { FC } from 'react'

export interface ChoiceCardProps {
  title: string
}

const ChoiceCard: FC<ChoiceCardProps> = ({ title }) => {
  return <div>{title}</div>
}

export default ChoiceCard
