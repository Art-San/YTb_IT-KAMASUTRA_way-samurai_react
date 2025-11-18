import { useTracks } from '../bll/useTracks'
import { TrackItem } from './TrackItem'

export function TracksList({
  selectedTrackId,
  onTrackSelect
}: {
  selectedTrackId: string | null
  onTrackSelect: (id: string) => void
}) {
  const { tracks, refresh } = useTracks()

  if (tracks === null) return <div className="">Loading....</div>
  if (tracks.length === 0) return <div className="">No tracks</div>

  const handleRefreshClick = () => {
    refresh()
  }

  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId)
  }

  console.log(selectedTrackId)
  return (
    <div className=" w-full flex-col mx-auto">
      <button onClick={handleRefreshClick}>Refresh</button>
      <hr />
      <ul>
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            isSelected={track.id === selectedTrackId}
            onSelect={handleClick}
            track={track}
          />
        ))}
      </ul>
    </div>
  )
}
