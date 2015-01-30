Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/
		var outerdiv = "<div style='height:22px;border-radius:2px;width:100%;border:1px solid #4887F1'>";
		var bar1 = outerdiv + "<div style='background-color:#4887F1;height:20px;border-radius:2px;width:10%'></div></div>";
		var bar2 = outerdiv + "<div style='background-color:#4887F1;height:20px;border-radius:2px;width:20%'></div></div>";
		var bar3 = outerdiv + "<div style='background-color:#4887F1;height:20px;border-radius:2px;width:30%'></div></div>";
		var bar4 = outerdiv + "<div style='background-color:#4887F1;height:20px;border-radius:2px;width:40%'></div></div>";
		
		var bars = [bar1, bar2, bar3, bar4];
		var topicLabels = ["Topic A", "Topic B", "Topic C", "Topic D"];
	
		var analyticsReport = "";
	
		$j.each(bars, function( i,bar ) {
			analyticsReport = analyticsReport + topicLabels[i] + bar + "<br>";
  			//$j("#Questions").after(topics[i] + bar + "<br>"); //Vi--I constructed the div first before putting after, otherwise the order was reversed
		});
		
		//wrap the analytics for formatting
		analyticsReport = "<div id='analyticswrapper'>" + analyticsReport + "</div>";
	
		$j("#Questions").after(analyticsReport);
});

