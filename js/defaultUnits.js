(function () {
	var cupFactor = 0.000236588237;
	var poundFactor	 = 0.45359237;
	//------------------------------------------
	importUnits({
		//------------------------------------------
		// ANGLE
		"radian":{dim:{}, factor:1, alias:["radian", "radians", "rad", "rads"]},
		"degree":{dim:{}, factor:Math.PI/180, alias:["degree", "degrees", "deg", "degs"]},
		//------------------------------------------
		// LENGTH
		"meter":{dim:{L:1}, factor:1, alias:["meter", "meters", "metre", "metres", "m"]},	
		"centimeter":{dim:{L:1}, factor:0.01, alias:["centimeter", "centimeters", "centimetre", "centimetres", "cm"]},
		"milimeter":{dim:{L:1}, factor:0.001, alias:["milimeter", "milimeters", "milimetre", "milimetres", "mm"]},
		"micron":{dim:{L:1}, factor:1e-6, alias:["micron", "microns"]},
		"kilometer":{dim:{L:1}, factor:1000, alias:["kilometer", "kilometers", "kilometre", "kilometres", "km"]},
		"inch":{dim:{L:1}, factor:0.0254, alias:["inch", "inches", "in", '"', "''"]},
		"foot":{dim:{L:1}, factor:0.3048, alias:["foot", "feet", "ft", "'"]},
		"yard":{dim:{L:1}, factor:0.9144, alias:["yard", "yards", "yd", "yds"]},
		"mile":{dim:{L:1}, factor:1609.344, alias:["mile", "miles", "mi"]},
		"lightyear":{dim:{L:1}, factor:9.4605284e15, alias:["lightyear", "lightyears"]},
		"parsec":{dim:{L:1}, factor:3.08568025e16, alias:["parsec", "parsecs"]},
		//------------------------------------------
		// AREA
		"acre":{dim:{L:2}, factor:Math.pow(1609.344,2)/640 , alias:["acre", "acres"]},
		//------------------------------------------
		// VOLUME
		"liter":{dim:{L:3}, factor:0.001, alias:["liter", "liters", "litre", "litres", "ltr"]},
		"mililiter":{dim:{L:3}, factor:1e-6, alias:["mililiter", "mililiters", "ml"]},
		"gallon":{dim:{L:3}, factor:cupFactor*16, alias:["gallon", "gallons", "gal", "gals"]},
		"quart":{dim:{L:3}, factor:cupFactor*4, alias:["quart", "quarts", "qt", "qts"]},
		"pint":{dim:{L:3}, factor:cupFactor*2, alias:["pint", "pints", "pt", "pts"]},
		"cup":{dim:{L:3}, factor:cupFactor, alias:["cup", "cups"]},
		"tablespoon":{dim:{L:3}, factor:cupFactor/16, alias:["tablespoon", "tablespoons", "tbsp", "tblsp"]},
		"teaspoon":{dim:{L:3}, factor:cupFactor/48, alias:["teaspoon", "teaspoons", "tsp"]},
		//------------------------------------------
		// TIME
		"microsecond":{dim:{T:1}, factor:1e-6, alias:["microsecond", "microseconds", "microsec", "microsecs"]},
		"milisecond":{dim:{T:1}, factor:1e-3, alias:["milisecond", "miliseconds", "milisec", "milisecs","ms"]},
		"second":{dim:{T:1}, factor:1, alias:["second", "seconds", "sec", "secs", "s"]},
		"minute":{dim:{T:1}, factor:60, alias:["minute", "minutes", "min", "mins"]},
		"hour":{dim:{T:1}, factor:3600, alias:["hour", "hours", "hr", "hrs", "h"]},
		"day":{dim:{T:1}, factor:3600*24, alias:["day", "days"]},
		"month":{dim:{T:1}, factor:3600*24*365.242199/12, alias:["month", "months"]},
		"year":{dim:{T:1}, factor:3600*24*365.242199, alias:["year", "years", "yr", "yrs"]},
		"decade":{dim:{T:1}, factor:10*3600*24*365.242199, alias:["decade", "decades"]},
		"score":{dim:{T:1}, factor:20*3600*24*365.242199, alias:["score"]},
		"century":{dim:{T:1}, factor:100*3600*24*365.242199, alias:["century", "centuries"]},
		"millenium":{dim:{T:1}, factor:1000*3600*24*365.242199, alias:["millenium", "millenia"]},
		//------------------------------------------
		// MASS
		"kilogram":{dim:{M:1}, factor:1, alias:["kilogram", "kilograms", "kg"]},
		"gram":{dim:{M:1}, factor:1e-3, alias:["gram", "grams", "g"]},
		"miligram":{dim:{M:1}, factor:1e-6, alias:["miligram", "miligrams", "mg"]},
		"pound":{dim:{M:1}, factor:poundFactor, alias:["pound", "pounds", "lb", "lbs"]}, // not really mass
		"stone":{dim:{M:1}, factor:14*poundFactor, alias:["stone", "stones"]}, // not really mass?
		"ton":{dim:{M:1}, factor:2000*poundFactor, alias:["ton", "tons"]}, // not really mass
		//------------------------------------------
		// SPEED
		"mph":{dim:{L:1, T:-1}, factor:1609.344/3600, alias:["mph"]},
		"kph":{dim:{L:1, T:-1}, factor:1000/3600, alias:["kph"]},
		//------------------------------------------
		// CONSTANTS (careful!)
		//"G": {dim{L:3,T:-2,M:-1}, factor:6.67384e-11, alias:["G"]}, // From http://physics.nist.gov, 1/29/2012
		//"h": {dim{L:2,T:-1,M:1}, factor:6.62606957e-34, alias:["h"]}, // From http://physics.nist.gov, 1/29/2012
		//"c": {dim:{L:1,T:-1}, factor:299792458, alias:["c"]}, // From http://physics.nist.gov, 1/29/2012
		"pi": {dim:{}, factor:Math.PI, alias:["pi", "Pi", "PI"], constant: true},
		"e": {dim:{}, factor:Math.E, alias:["e", "E"], constant: true} //
	});
})();