(function (global) {	
	//------------------------------------------
	var UNIT = {};
	var CONSTANT = {};
	//------------------------------------------
	function importUnits(unit) {
		if (unit) {
			expandAliases(unit);
			for (var key in unit) {
				if (unit[key].constant) {
					CONSTANT[key] = unit[key];
				} else {
					UNIT[key] = unit[key];
				}
			}
		}
		return {UNIT: UNIT, CONSTANT: CONSTANT};
	}
	//------------------------------------------
	// expand object to include all alias units
	function expandAliases(unit) {
		for (var key in unit) {
			var alias = unit[key].alias, i = alias.length;
			while (i--) {
				unit[alias[i]] = unit[key];
			}
		}
	}
	//------------------------------------------
	return global.importUnits = importUnits;	
})(this);