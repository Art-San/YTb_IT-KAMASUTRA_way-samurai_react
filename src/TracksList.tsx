import { useEffect, useState } from 'react'

export function TracksList() {
  const [tracks, setTracks] = useState<Array<any> | null>(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setTracks(json))

    // return () => {

    // }
  }, [])

  if (tracks === null) return <div className="">Loading....</div>
  if (tracks.length === 0) return <div className="">No tracks</div>

  return (
    <ul>
      {tracks.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
