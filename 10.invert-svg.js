/**
 * The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of 
 * the SVG area (not the top). To do this, the y coordinate needs a value of 100. If the data point value were 1, 
 * you would start with a y coordinate of 100 to set the bar at the bottom. Then you need to account for the height of 
 * the bar of 1, so the final y coordinate would be 99.
The y coordinate that is y = heightOfSVG - heightOfBar would place the bars right-side-up.
Change the callback function for the y attribute to set the bars right-side-up. Remember 
that the height of the bar is 3 times the data value d.
Note
In general, the relationship is y = h - m * d, where m is the constant that scales the data points.
 */
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
         // Add your code below this line
         return h-d*3
         
         
         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>