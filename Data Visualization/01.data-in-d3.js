/**
Select the body node, then select all h2 elements. Have D3 create and append an h2 tag for each item in the dataset array. 
The text in the h2 should say "New Title". Your code should use the data() and enter() methods. */

<body>
	<script>
		const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]; // Added code below this line const
		element=d3.select('body').selectAll('h2').data(dataset) .enter().append('h2').text('New Title');
	</script>
</body>;
