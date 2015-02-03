# qualtrics_analytics
Creates personalized bar graphs for Qualtrics users based on embedded data. 


1) Create a "Text Question" in Qualtrics.<br>
2) Open the html editor of the question in Qualtrics, and add a list of numerical data. The numbers must be between 0 and 100. You can enter static content, or use embedded data. Also add a placeholder div. This will be where the analytics are inserted. The html will look like this:

```html
<div id="analyticsData">
<ul>
 <li>${e://Field/Topic1}</li>
 <li>${e://Field/Topic2}</li>
 <li>${e://Field/Topic3}</li>
 <li>${e://Field/Topic4}</li>
</ul>
</div>
<div id="analyticsContainer">[Analytics will go here]</div>
````

3) Click "Add Javascript" in the question, and copy question_embed.js into the script editor<br>
4) Finally, go to Look & Feel, Header of the survey and add the following:

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" rel="stylesheet" /><script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script><script>
var $j = jQuery.noConflict();
</script>
```

When the question loads, it will read the data from the list, and generate a bar graph for each item. 
