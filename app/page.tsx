import ConditionalFetching from '@/components/ConditionalFetching'
import PaginationSWR from '@/components/PaginationSWR'
import RevalidationSWR from '@/components/RevalidationSWR'
import UseOfSWR from '@/components/UseOfSWR'
import nextSSRApi from '@/services/NextSSR'

export default async function Home() {
  const users = await nextSSRApi()
  console.log(users)
  console.log('hello')
  return (
    <main>
      <p>Home</p>
      {/* <UseOfSWR /> */}
      {/* <PaginationSWR /> */}
      <ConditionalFetching />
      {/* <RevalidationSWR /> */}
    </main>
  )
}
