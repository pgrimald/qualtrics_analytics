Qualtrics.SurveyEngine.addOnload(function()
{	
	//get bar values from analyticsData Div, put into array
	var barValueArray = [];
	$j("#analyticsData ul li").each(function() {
		barValueArray.push($j(this).text()); 
	});
	
	
	//hide the analyticsData
	$j("#analyticsData").hide();
	
	
	//construct the bars	
	var outerdiv = "<div style='height:22px;border-radius:2px;width:100%;border:1px solid #4887F1'>";
	var bars = [];
	for (i=0;i<4;i++){
		bars.push(outerdiv + getInnerDiv(barValueArray[i]) + "</div></div>");
	};
	
	
	//construct the full report (includes labels)
	var analyticsReport = "";
	var topicLabels = ["Topic A", "Topic B", "Topic C", "Topic D"];
	
	$j.each(bars, function( i,bar ) {
		analyticsReport = analyticsReport + topicLabels[i] + bar + "<br>";
	});
	
	
	//wrap the report (can format width here)
	analyticsReport = "<div id='analyticswrapper' style= width:80%>" + analyticsReport + "</div><br>";
	
	//display report on page
	$j("#Questions").after(analyticsReport);
});


function getInnerDiv(pValue){
    var theDiv = "<div style='background-color:#4887F1;height:20px;border-radius:2px;width:"+pValue+"%'>";
	return theDiv
}