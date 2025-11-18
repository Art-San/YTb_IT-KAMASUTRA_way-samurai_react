import { useState, useEffect } from 'react'
import { getTracksViaAPI } from '../dal/api'
import type { Daum } from '../types'

// Custom hook

export function useTracks() {
  const [tracks, setTracks] = useState<Array<Daum> | null>(null)

  function refresh() {
    setTracks(null)
    getTracksViaAPI().then((json) => {
      return setTracks(json.data)
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getTracksViaAPI().then((json) => setTracks(json.data))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return { tracks, refresh }
}
