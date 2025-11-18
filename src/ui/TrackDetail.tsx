import { useTrackDetail } from '../bll/useTrackDetail'

type Props = {
  trackId: string | null
}

export function TrackDetail({ trackId }: Props) {
  const { trackDetails } = useTrackDetail(trackId)

  return (
    <div>
      <div className="">Details</div>
      {!trackDetails && !trackId && 'Track is not selected'}
      {!trackDetails && trackId && 'Loading...'}
      {trackDetails && trackId && trackDetails.id !== trackId && 'Loading...'}
      {trackDetails && (
        <div className="">
          <h3>{trackDetails.attributes?.title}</h3>
          <h4>Lyrics</h4>
          <p>{trackDetails.attributes?.lyrics ?? 'no '}</p>
        </div>
      )}
    </div>
  )
}
