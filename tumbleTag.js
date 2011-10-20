(function($) {
	//This custom selector for a case insensitive href match.
	$.extend($.expr[':'], {
	      'containshref': function(elem, i, match, array)
	      {
	          var $e=$(elem);
	        return ($e.attr('href') || '').toLowerCase()
	        .indexOf((match[3] || "").toLowerCase()) >= 0;
	      }
	    });
	
	$.fn.tumbleTag = function(subdomain, api_key) {	
		var $ul = this.first();
		var url = 'http://api.tumblr.com/v2/blog/' + subdomain + '/posts?api_key=' + api_key + '&jsonp=?';
	
		$.getJSON(url, function(data) {
			$.each(data.response.posts, function(idx, post) {
				$.each(post.tags, function(idx, tag) {
					if ($ul.find('a:containshref(' + tag + ')').length == 0) {
		                $ul.append($('<li />').append($('<a />').attr('href', '/tagged/' + tag).text(tag)));
		            }		
				});
			});
		});
	
		return this;
	}
})( jQuery );

// how you use it
//$(".tag_list").tumbleTag('savesafe.tumblr.com', 'API KEY');


