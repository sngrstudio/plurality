import type { FC, PropsWithChildren } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'

const Result: FC<{}> = () => {
  return (
    <ResultProvider>
      <ResultComponent />
    </ResultProvider>
  )
}

const ResultComponent: FC<{}> = () => {
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
      {data.map((entry, i) => (
        <div key={i}>{JSON.stringify(entry)}</div>
      ))}
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
