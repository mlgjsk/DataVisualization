/**
 * Change the text() method so that each h2 element displays the corresponding value from the dataset array with a single 
 * space and "USD". For example, the first heading should be "12 USD".
 */

<body>
	<script>
		const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]; d3.select("body").selectAll("h2").data(dataset).enter()
		.append("h2").text((data)=>data+' USD')
	</script>
</body>;
