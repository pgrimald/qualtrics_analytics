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
	
	//construct full report (in table form)
	var analyticsReport = $j('<table/>');
	var topicLabels = ["Types of Signals", "Signals and Vectors", "Discrete Time Systems", "Convolution"];
	
	analyticsReport.append( '<tr><th></th><th width=15% style="text-align:center">0</th><th width=15% style="text-align:center">25</th><th width=15% style="text-align:center">50</th><th width=15% style="text-align:center">75</th><th width=15% style="text-align:center">100</th></tr>' );

	$j.each(bars, function(i,bar) {
		analyticsReport.append( '<tr><td>' + topicLabels[i] + '</td><td width=75% colspan=5>' + bar + '</td><td>&nbsp&nbsp' + barValueArray[i] + '%</td></tr><tr><td>&nbsp</td></tr>' );
	});
	
	//styling the report
	analyticsReport.css("width", "100%");
	
	//wrap the report (can add style here to report here, including width)
	//analyticsReport = "<div id='analyticswrapper' style= width:100%>" + analyticsReport + "</div><br>";
	
	//display report on page
	$j("#analyticsContainer").replaceWith(analyticsReport);
});


function getInnerDiv(pValue){
    var theDiv = "<div style='background-color:#4887F1;height:20px;border-radius:2px;width:"+pValue+"%'>";
	return theDiv
}
