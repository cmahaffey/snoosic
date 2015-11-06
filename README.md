# Snoosic
## Music from the hivemind. 

![snoosic logo](http://i.imgur.com/F2VbfbF.png)

### What is Snoosic?

**Snoosic** is crowdsourcing playlist aggregator that curates playlists for various music subreddits on Reddit.com. 

**Snoosic** leverages the Reddit and Spotify APIs to index the highest voted submissions into “best of” playlists sourced for redditors, by redditors.

### Why did we build this? 

**Snoosic** was built knowing Reddit is perhaps one of the best content discovery platforms on the web. Music is an extremely popular topic on Reddit as there are hundreds of subreddits dedicated to sharing music within each community. These subreddits are rich in content, and offer subscribers the opportunity to discover songs from like-minded people. 

With songs and content being shared from a wide array of sources (YouTube, Spotify, Soundcloud, Bandcamp, etc.), it is nearly impossible to listen to the top music of each subreddit uninterrupted. 

### How did we solve the issue?

**Snoosic** first taps into the Reddit API to index and identify the best content from music-based subreddits. 

Once **Snoosic** has identified the top-rated content, it parses each submission's title into a text string which is then searched using the Spotify API. 

As results begin to come in, **Snoosic** generates Spotify playlists that users can stream. 

What does this mean? User-friendly streams for each music subreddit! 

![narwhal gif](http://i.imgur.com/Chl0i.gif)

###About Snoosic

**Snoosic** was built using a MEAN stack (MongoDB, Express, Angular.js, Node.js)

### Meet the Team

![Snoosic Squad](http://i.imgur.com/EnEeCGl.png)
