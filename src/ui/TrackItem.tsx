type Props = {
  isSelected?: boolean
  onSelect: (trackId: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  track: any
}

export function TrackItem({ isSelected, onSelect, track }: Props) {
  const handleClick = () => onSelect?.(track.id)
  return (
    <li
      key={track.id}
      className={isSelected ? 'text-blue-800' : 'text-emerald-700'}
    >
      <div className="flex flex-col items-center">
        <div className=" cursor-pointer" onClick={handleClick}>
          {track.attributes.title}
        </div>
        <audio controls src={track.attributes.attachments[0].url}></audio>
      </div>
    </li>
  )
}
