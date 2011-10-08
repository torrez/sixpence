(function() {
  var $;
  $ = jQuery;
  $.fn.sixpence = function(screen_name, url) {
    return this.each(function() {
      var $this, query_string;
      $this = $(this);
      query_string = "http://search.twitter.com/search.json?q=from:" + screen_name + "%20" + (encodeURIComponent(url));
      return $.ajax(query_string, {
        success: function(data) {
          var output, search;
          if (data && data.results && data.results.length > 0) {
            search = data.results[0];
            output = "                        <div class='sp-body'>                            <p class='sp-text'>" + search.text + "</p>                            <span class='sp-tools'>                                <a href='http://twitter.com/intent/favorite?tweet_id=" + search.id_str + "'><img src='http://si0.twimg.com/images/dev/cms/intents/icons/favorite.png' />Favorite</a>                                <a href='http://twitter.com/intent/retweet?tweet_id=" + search.id_str + "'><img src='http://si0.twimg.com/images/dev/cms/intents/icons/retweet.png' />Retweet</a>                                <a href='http://twitter.com/intent/tweet?in_reply_to=" + search.id_str + "'><img src='http://si0.twimg.com/images/dev/cms/intents/icons/reply.png' />Reply</a>                            </span>                            <p class='sp-footer'>                            generated by <a href='http://github.com/torrez/sixpence'>sixpence</a>                            </p>                        </div>";
            $this.append(output);
            return $this.show();
          } else {
            $this.empty();
            return $this.hide();
          }
        },
        dataType: 'jsonp'
      });
    });
  };
}).call(this);
