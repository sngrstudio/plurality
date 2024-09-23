import type { FC, PropsWithChildren } from 'react'
import type { Candidates } from './result.astro'
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'

interface ResultProps {
  candidates: Candidates
}

const Result: FC<ResultProps> = ({ candidates }) => {
  return (
    <ResultProvider>
      <ResultComponent candidates={candidates} />
    </ResultProvider>
  )
}

const ResultComponent: FC<ResultProps> = ({ candidates }) => {
  const { data, error, isPending } = useQuery({
    queryKey: ['result'],
    queryFn: async () =>
      (await fetch('/result/data').then((res) => res.json())) as Array<{
        choice: string
        count: number
      }>
  })

  if (error) {
    return <div>Error</div>
  }

  if (isPending || !data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data
        .sort((a, b) => b.count - a.count)
        .map((entry, i) => {
          const candidate = candidates.find((e) => e.id === entry.choice)
          return (
            <div key={i}>
              <div>
                <img
                  className='w-[240px]'
                  src={candidate?.data.image?.src}
                  alt=''
                  srcSet={candidate?.data.image?.srcSet.attribute}
                  {...candidate?.data.image?.attributes}
                />
              </div>
              <div>{candidate?.data.campaignName}</div>
              <div>{`${entry.count} Suara`}</div>
            </div>
          )
        })}
    </div>
  )
}

const queryClient = new QueryClient()
const ResultProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default Result
