Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/

		var bar1 = "<div style='height:22px;border-radius:2px;width:100%;border:1px solid #4887F1'><div style='background-color:#4887F1;height:20px;border-radius:2px;width:70%'></div></div>";
		var bar2 = "<div style='height:22px;border-radius:2px;width:100%;border:1px solid #4887F1'><div style='background-color:#4887F1;height:20px;border-radius:2px;width:40%'></div></div>";

		
		var bars = [bar1, bar2]
		$j.each(bars, function( i,bar ) {
  			$j("#Questions").after(bar + "<br>");
		});
});