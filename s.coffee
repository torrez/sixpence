$ = jQuery
$.fn.sixpence = (screen_name, url) ->
    this.each ->
        $this = $(this)
        query_string = "http://search.twitter.com/search.json?q=from:#{screen_name}%20#{encodeURIComponent url}";
        
        $.ajax query_string,
            success : (data) ->
                if data and data.results and data.results.length > 0
                    search = data.results[0]
                    output = "
                        <div class='sp-body'>
                            <p class='sp-text'>#{search.text}</p>
                            <span class='sp-tools'>
                                <a href='http://twitter.com/intent/favorite?tweet_id=#{search.id_str}'><img src='http://si0.twimg.com/images/dev/cms/intents/icons/favorite.png' />Favorite</a>
                                <a href='http://twitter.com/intent/retweet?tweet_id=#{search.id_str}'><img src='http://si0.twimg.com/images/dev/cms/intents/icons/retweet.png' />Retweet</a>
                                <a href='http://twitter.com/intent/tweet?in_reply_to=#{search.id_str}'><img src='http://si0.twimg.com/images/dev/cms/intents/icons/reply.png' />Reply</a>
                            </span>
                            <p class='sp-footer'>
                            generated with <a href='http://github.com/torrez/sixpence'>sixpence</a>
                            </p>
                        </div>"
                    $this.append(output)
                    $this.show()
                else
                    $this.empty()
                    $this.hide()
            dataType: 'jsonp'
