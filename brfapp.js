/* 
BioRhythm Fertility App
16/06/2018
maxgdev

*/
function calcFertilePeriod(){
	/* 
	Fertile Period Offset = 9 to 14 days;
	
	You will most likely ovulate on day 14 (although it can be a day or two sooner or later), and your fertile window is from days nine to fourteen (six days). If you bleed the average five days, and you start having unprotected intercourse four days after your period ends, you can get pregnant.
	
	If Your Cycles Are Twenty-Eight Days Long
	If your cycles are the average, idealized 28 days long:

	You will most likely ovulate on day 14 (although it can be a day or two sooner or later), and your fertile window is from days nine to fourteen (six days).
	
	https://pregnancy.lovetoknow.com/wiki/How_Long_After_Your_Period_Can_You_Get_Pregnant
	
	Gender probability
	Girl: 9 - 12 days (pre Ovulation)
	Boy:  15 - 18 days (post Ovulation)
	Safe Periods:
		Days 6 - 8
		Days 18 - 28
		
	*/
	
	// Get user selected date
	var startDateEl = document.getElementById("startDate");
	var startDateVal = new Date(startDateEl.value);
	// convert date to moment object
	var momentStartDate = moment(startDateVal);
	// add 9 and 14 days to get fertile period
	var day9OfCycle = momentStartDate.add(9, 'd').format('YYYY-MM-DD');
	var day14OfCycle = momentStartDate.add(5, 'd').format('YYYY-MM-DD');
	// display fertile period as calender correct calender dates
	mylog(day9OfCycle, ' 9th Day of Cycle ');
	alert(day9OfCycle + " 9th Day of Cycle ")
	mylog(day14OfCycle, ' 14th Day of Cycle ');
	alert(day14OfCycle + " 14th Day of Cycle ");
	
}

// my Diagnostic log function
function mylog(content, comment){
	console.log("-------"+comment+"--------");
	console.log(content)
	console.log("-------"+comment+"--------");
}

