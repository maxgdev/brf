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
	
	*/
	
	// Get user selected date
	// convert date to moment object
	// add 9 and 14 days to get fertile period
	// display fertile period as calender correct calender dates

}
// Function to test moment.js
function mtest(){
	var x = document.getElementById("startDate");
	var tempDate = new Date(x.value);
	var dayWrapper = moment(tempDate); 
	mylog(tempDate, 'Temp Date');
	alert(tempDate, 'Temp Date');
	// Output
	// Temp Date:  Sun Jun 10 2018 01:00:00 GMT+0100 (British Summer Time)
	mylog(dayWrapper.format('YYYY-MM-DD'), 'Moment Day Wrapper');
	var future = dayWrapper.add(10, 'd');
	mylog(future.format('YYYY-MM-DD'), 'future = dayWrapper+10');
	alert(future, 'future = dayWrapper+10');
}

// my Diagnostic log function
function mylog(content, comment){
	console.log("-------"+comment+"--------");
	console.log(content)
	console.log("-------"+comment+"--------");
}

