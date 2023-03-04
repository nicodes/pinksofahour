/** Gets most recent N videos from Pink Sofa Hour youtube channel */
async function getRecentFromChannel(maxResults: number = 5) {
  const requestUrl =
    "https://www.googleapis.com/youtube/v3/search?" +
    `key=${import.meta.env.GOOGLE_API_KEY}` +
    `&channelId=${import.meta.env.YOUTUBE_CHANNEL_ID}` +
    "&part=snippet,id" +
    "&order=date" +
    `&maxResults=${maxResults}`;

  const response = await fetch(requestUrl);
  const data = await response.json();

  const videos = [...data.items].map((item: any) => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url,
    };
  });

  return videos;
}

export default {
  getRecentFromChannel,
};
