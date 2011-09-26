(function( $ ){

  $.fn.sixpence = function( screen_name, url ) {  

    return this.each(function() {
      var $this = $(this);
      var query_string = 'http://search.twitter.com/search.json?q=from:' + screen_name + '%20' + encodeURIComponent(url);

      $.get(query_string, function(data) {
        if (data && data.results && data.results.length > 0){
          var search = data.results[0];
          var output = '';
          output += '<div class=\'sp-body\'>';
          output += '<p class=\'sp-text\'>' + search.text + '</p>';
          output += '<p class=\'sp-tools\'><a href=\'http://twitter.com/intent/favorite?tweet_id=' + search.id_str +'\'><img ';
          output += 'src=\'http://si0.twimg.com/images/dev/cms/intents/icons/favorite.png\' /> Favorite</a> <a ';
          output += 'href=\'http://twitter.com/intent/retweet?tweet_id='+ search.id_str + '\'><img ';
          output += 'src=\'http://si0.twimg.com/images/dev/cms/intents/icons/retweet.png\' /> Retweet</a> ';
          output += '<a href=\'http://twitter.com/intent/tweet?in_reply_to='+ search.id_str + '\'><img ';
          output += 'src=\'http://si0.twimg.com/images/dev/cms/intents/icons/reply.png\' /> Reply</a></p>';
          output += '</div>';
          $this.append(output);
          $this.show();
        } else {
          $this.html('');
          $this.hide();
        }
      },
      'jsonp');
    });
  };
})( jQuery );