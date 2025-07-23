// hooks/useYouTubeVideos.js
import { useState, useEffect } from 'react'
import YouTubeService from '../services/YouTubeService'

const useYouTubeVideos = (apiKey, channelId, maxResults = 4) => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const youtubeService = new YouTubeService(apiKey, channelId)
        const latestVideos = await youtubeService.getLatestVideos(maxResults)
        setVideos(latestVideos)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Failed to fetch YouTube videos:', err)
      } finally {
        setLoading(false)
      }
    }

    if (apiKey && channelId) {
      fetchVideos()
    }

    // Optional: Set up periodic refresh (every 30 minutes)
    const interval = setInterval(fetchVideos, 30 * 60 * 1000)

    return () => clearInterval(interval)
  }, [apiKey, channelId, maxResults])

  return { videos, loading, error }
}

export default useYouTubeVideos
