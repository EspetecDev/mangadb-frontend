import Image from 'next/image'
import LastReleases from '../components/LastReleases';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar/>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="place-items-center"><LastReleases/></div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </main>
  )
}
