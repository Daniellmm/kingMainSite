
class YouTubeService {
  constructor(apiKey, channelId) {
    this.apiKey = apiKey;
    this.channelId = channelId;
    this.baseUrl = 'https://www.googleapis.com/youtube/v3';
  }

  async getLatestVideos(maxResults = 4) {
    try {
      const response = await fetch(
        `${this.baseUrl}/search?key=${this.apiKey}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transform the data to include video URLs and thumbnails
      return data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url, // or 'medium' for smaller thumbnails
        publishedAt: item.snippet.publishedAt,
        videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        embedUrl: `https://www.youtube.com/embed/${item.id.videoId}`
      }));
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      return [];
    }
  }
}

export default YouTubeService;