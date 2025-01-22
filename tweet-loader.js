// First load the tweet card HTML structure
fetch('tweet-card.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('tweet-card-container').innerHTML = html;
        
        // Then initialize the tweet
        const tweetId = '1867688942973174153';
        
        // Add Twitter widgets script if it's not already loaded
        if (!window.twttr) {
            const script = document.createElement('script');
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.head.appendChild(script);
        }
        
        // Create tweet embed using Twitter's widget
        window.twttr?.ready((twttr) => {
            twttr.widgets.createTweet(tweetId, document.getElementById('tweetEmbed'))
                .then(function (el) {
                    if (!el) {
                        document.getElementById('tweetEmbed').textContent = 'Failed to load tweet';
                    }
                });
        });
    })
    .catch(error => {
        console.error('Error loading tweet card:', error);
    }); 