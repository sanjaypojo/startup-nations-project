// sample data array

var visualization1 = d3plus.viz()
	.container("#viz-1-1")
	.data('./data/2015-11-01_RAI_country_data_formatted.csv') // data to use with the visualization
	.type("geo_map") // visualization type
	.coords("https://d3plus.org/topojson/countries.json") // pass topojson coordinates
	.id("formatted_continent_country_id") // key for which our data is unique on
	.text("country_name") // key to use for display text
	.color("n_selfrule") // key for coloring countries
	.tooltip("n_selfrule") // keys to place in tooltip
	.aggs({"n_selfrule": "mean"})
	.time({ "value": "year", "solo": 1980 })
	.draw() // finally, draw the visualization!

var visualization2 = d3plus.viz()
	.container("#viz-1-2")
	.data('./data/2015-11-01_RAI_country_data_formatted.csv') // data to use with the visualization
	.type("line") // visualization type
	.id("country_name") // key for which our data is unique on
	.text("country_name") // key to use for display text
	.x("year")
	.y("n_selfrule") // key for coloring countries
	.x({grid: false})
	.y({grid: false})
	.draw() // finally, draw the visualization!

var visualization3 = d3plus.viz()
	.container("#viz-1-3")
	.data('./data/2015-11-01_RAI_country_data_formatted.csv') // data to use with the visualization
	.type("line") // visualization type
	.id(["year", "country_name"]) // key for which our data is unique on
	.text("country_name") // key to use for display text
	.aggs({"n_selfrule": "mean"})
	.x("year")
	.y("n_selfrule") // key for coloring countries
	.y({range: [5, 8.5], grid: false})
	.x({grid: false})
	.draw() // finally, draw the visualization!

var visualization4 = d3plus.viz()
	.container("#viz-2")
	.data('./data/2015-11-01_RAI_country_data_formatted.csv') // data to use with the visualization
	.type("geo_map") // visualization type
	.coords("https://d3plus.org/topojson/countries.json") // pass topojson coordinates
	.id("formatted_continent_country_id") // key for which our data is unique on
	.text("country_name") // key to use for display text
	.color("n_instdepth") // key for coloring countries
	.tooltip("n_instdepth") // keys to place in tooltip
	.draw() // finally, draw the visualization!

var visualization5 = d3plus.viz()
	.container("#viz-3")
	.data('./data/2015-11-01_RAI_country_data_formatted.csv') // data to use with the visualization
	.type("geo_map") // visualization type
	.coords("https://d3plus.org/topojson/countries.json") // pass topojson coordinates
	.id("formatted_continent_country_id") // key for which our data is unique on
	.text("country_name") // key to use for display text
	.color("n_sharedrule") // key for coloring countries
	.tooltip("n_sharedrule") // keys to place in tooltip
	.aggs({"n_sharedrule": "mean"})
	.time({ "value": "year", "solo": 1980 })
	.draw() // finally, draw the visualization!
