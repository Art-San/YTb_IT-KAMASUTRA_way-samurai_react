import { useState } from 'react'
import { TracksList } from './ui/TracksList.'
import { TrackDetail } from './ui/TrackDetail'

export function MainPage() {
  const [trackId, setTrackId] = useState<string | null>(null)

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id)
  }
  return (
    <div className=" flex gap-10">
      <TracksList selectedTrackId={trackId} onTrackSelect={handleTrackSelect} />
      <TrackDetail trackId={trackId} />
    </div>
  )
}
