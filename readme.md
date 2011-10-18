tumbleTag
=========

A jQuery plugin that grabs all tags across all Tumblr posts and displays them as a list of unique tags. 


##How it works

* Get a Tumblr [API Key](http://www.tumblr.com/oauth/apps). 

* Include the tumbleTag.js

* Call it like this:

```
$(document).ready(function() {
    $(".tag_list").tumbleTag('blog.tumblr.com', 'API KEY');
});

```

* The CSS used to style the tags are in the class .tag_list and .tag_cloud. You are welcome to change these.

```
.tag_cloud ul{
   margin-top: 10px;
   margin-bottom: 10px;
}

.tag_list li {
 margin: 5px;
 padding: 5px 5px 5px 5px;
 display: block;
 float: left;
 background-color: #EEE;
 border-radius:2px;
}

.tag_list a {
    font-size: 11px !important;
    font-family: "Helvetica Neue", Helvetica, san-serif;
    font-weight: lighter;
    letter-spacing: .1em;
    color: #303030;
    text-transform: uppercase;
}

.tag_list li a:hover { 
background-color: black;
color: white; 
}

```

* In the HTML of your blog create a div where the tags are going to be displayed. 

```
<div class="tag_cloud">
    <ul class="tag_list">
    </ul>
</div>
```

ENJOY.