/**
 * The positionData variable holds a 3-dimensional (3D) array. Use a D3 method to find the maximum value of the z coordinate 
 * (the third value) from the arrays and save it in the output variable.

Note
Fun fact - D3 can plot 3D arrays.
 */
<body>
	<script>
		const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]] // Add your code below this line const output =
		d3.max(positionData, (d)=>d[2]); // Change this line // Add your code above this line d3.select("body")
		.append("h2") .text(output)
	</script>
</body>;
