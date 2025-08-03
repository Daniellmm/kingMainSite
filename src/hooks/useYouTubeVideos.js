// hooks/useYouTubeVideos.js
import { useState, useEffect } from 'react'
import YouTubeService from '../services/YouTubeService'

const useYouTubeVideos = (
  apiKey,
  channelId,
  maxResults = 4,
  playlistId = null,
) => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const youtubeService = new YouTubeService(apiKey, channelId)
        let latestVideos
        if (playlistId) {
          latestVideos = await youtubeService.getPlaylistVideos(
            playlistId,
            maxResults,
          )
        } else {
          latestVideos = await youtubeService.getLatestVideos(maxResults)
        }
        setVideos(latestVideos)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Failed to fetch YouTube videos:', err)
      } finally {
        setLoading(false)
      }
    }

    if (apiKey && (channelId || playlistId)) {
      fetchVideos()
    }

    const interval = setInterval(fetchVideos, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [apiKey, channelId, maxResults, playlistId])

  return { videos, loading, error }
}

export default useYouTubeVideos
