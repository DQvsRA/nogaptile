(function () {
	var params = {
		sizes : [
			{ 	min:0,     max:380,   cols: 1,    fixed: true },
			{ 	min:380,   max:760,   cols: 2,    fixed: true },
			{ 	min:760,   max:1000,  cols: 4  },
			{ 	min:1000,  max:1280,  cols: 6  },
			{ 	min:1280,  max:1600,  cols: 8  },
			{ 	min:1600,  max:1920,  cols: 10 },
			{ 	min:1920,  max:2680,  cols: 12 }
		],
		max_width_dimension 	: 1,
		max_height_dimension 	: 1,
		static_proportion 		: false, // "1x1"
		insequense				: false, // fit last tile in row to cell width 
		squarescale				: true, // scale tiles proportionally when resize
		makegap					: true, // append gap to layout
		gap_markup				: "gap", // gap markup (inner html if string or module if element)
		gap_backgound			: "#232323", // gap background-color
		gap_extend				: true, // merge gap with each others while they less then considition (max_width_dimension and max_height_dimension)
		mergewithgap			: true, // merge gap with around tile that match gap size and condition (max_width_dimension and max_height_dimension)
		movelastcelltoclosegap	: true, // move last tile to gap if mergewithgap do not solve them
		onResize				: null
	}
	MakeTiles("gallery", 23, 150, params.max_width_dimension, params.max_height_dimension);
	new NGT("gallery", params);
})();

    

