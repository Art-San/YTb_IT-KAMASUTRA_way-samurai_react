import { useState, useEffect } from 'react'
import { getTrack } from '../dal/api'
import type { Daum } from '../types'

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] = useState<Daum | null>(null)

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null)
      return
    }

    getTrack(trackId).then((json) => setTrackDetails(json))
  }, [trackId])

  return {
    trackDetails
  }
}
