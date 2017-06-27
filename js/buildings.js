
    // Extract the width and height that was computed by CSS.
      var chartDiv = document.getElementById("vis");
      var width = chartDiv.clientWidth;
      var height = chartDiv.clientHeight;

      // load the external svg from a file
      d3.xml("../svg/170627buildingonly.svg").mimeType("image/svg+xml").get(function(error, xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      d3.select("div#vis")
        .each(function() {
          this.appendChild(importedNode);
        })
        styleImportedSVGbasic()
      }); 


      function styleImportedSVGbasic () {
      	// d3.selectAll("#Labels").attr("visibility", "hidden") //HIDES certain elements 
      	// d3.selectAll("#Underlay").attr("visibility", "")//SHOWS
        d3.select('svg')
          .append('text')
          .attr("class","intro")
          .attr("x",10)
          .attr("y",50)
          .style("fill", "#000000")
          // .text("basic info")
      }


      // function styleImportedSVG () { 
      //  // third room on left 
      //  d3.select('#room3')
      //     .on('mouseover', function() {
      //       d3.selectAll('.elements3, .st140, .st141') //this is for whatever remains highlighted 
      //         .style('fill-opacity', 1)
      //         .style('stroke-opacity', 1)
      //       d3.selectAll('#Labels, .st137, .st138, .elements2') //this is for the rest that are hidden
      //         .style('fill-opacity', 0.1)
      //         .style('stroke-opacity', 0.3)
      //     })
      //     .on('mouseout', function() {
      //       d3.selectAll('#Labels, .st137, .st138, .elements2')//have to do this again here because 137 and 138 are outside of the room2 div
      //         .style('fill-opacity', 1)
      //         .style('stroke-opacity', 1)
      //     })
      //     .on('click', function() {
      //     	d3.select(this)
      //        .append('text')
      //       	.attr("class","extraInfo")
      //       	.attr("x",200)
      //       	.attr("y",200)
      //       	.style("stroke", "#000000")
      //       	.style("fill", "#000000")
      //       	.text("Info")
      //     })

      //  // second room on left 
      //  d3.select('#room2')
      //     .on('mouseover', function() {
      //       d3.selectAll('.elements2, .st137, .st138') //this is for whatever remains highlighted 
      //         .style('fill-opacity', 1)
      //         .style('stroke-opacity', 1)
      //       d3.selectAll('#Labels, .elements3, .st140, .st141')
      //         .style('fill-opacity', 0.1)
      //         .style('stroke-opacity', 0.3)
      //     })
      //     .on('mouseout', function() {
      //       d3.selectAll('#Labels, .st140, .st141, .elements3')
      //         .style('fill-opacity', 1)
      //         .style('stroke-opacity', 1)
      //       d3.select(".extraInfo").remove(); //removes on mouseout. NECESSARY??????
      //     })
      //     .on('click', function() {
      //     	d3.select(this)
      //        .append('text')
      //       	.attr("class","extraInfo")
      //       	.attr("x",200)
      //       	.attr("y",400)
      //       	.attr("text-anchor", "middle")
      //       	.style("fill", "black")
      //       	.text("Info")
      //     })
      // }
   
   function styleImportedSVG2 () {
      d3.selectAll('.st0, .st1, .st2')
          .on('mouseover', function() {
            d3.select(this) //this is for whatever remains highlighted 
              .style('stroke', 'black')
              .style('stroke-width', '2')
              .style('stroke-linecap', 'butt')
              .style('stroke-linejoin', 'miter')
          })
          .on('mouseout', function() {
            d3.select(this)//have to do this again here because 137 and 138 are outside of the room2 div
              .style('stroke-width', '0')
          })
      d3.selectAll('.st0')
          .on('click', function() {
            d3.selectAll('.st1, .st0, .st2')
              .style('fill', originalColor)
              .style('fill-opacity', 1)
              .style('stroke-opacity', 1)
            d3.selectAll('.st1, .st2')
              .style('fill','black')
              .style('fill-opacity', 0.3)
              .style('stroke-opacity', 0.3)
          })
      d3.selectAll('.st1')
          .on('click', function() {
            d3.selectAll('.st1, .st0, .st2')
              .style('fill', originalColor)
              .style('fill-opacity', 1)
              .style('stroke-opacity', 1)
            d3.selectAll('.st2, .st0')
              .style('fill','black')
              .style('fill-opacity', 0.3)
              .style('stroke-opacity', 0.3)
          })
      d3.selectAll('.st2')
          .on('click', function() {
            d3.selectAll('.st1, .st0, .st2')
              .style('fill', originalColor)
              .style('fill-opacity', 1)
              .style('stroke-opacity', 1)
            d3.selectAll('.st0, .st1')
              .style('fill','black')
              .style('fill-opacity', 0.3)
              .style('stroke-opacity', 0.3)
          })

      d3.selectAll('g#Underlay')
        .on('click', function() {
            d3.selectAll('.st1, .st0, .st2')
              .style('fill', originalColor)
              .style('fill-opacity', 1)
              .style('stroke-opacity', 1)
          })

      var originalColor
      d3.selectAll('.st0, .st1, .st2')
          .attr("fill", function(d) {
           d.oldColor = d3.select(this).attr("fill");
          return originalColor;
        });
      }
   //SWITCHING BTW IMGS   
 		d3.select("#unbuilding").on("click", function(){
      d3.selectAll("svg").remove();
 			
      d3.xml("../svg/170627detail_building-01.svg").mimeType("image/svg+xml").get(function(error, xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      d3.select("div#vis")
        .each(function() {
          this.appendChild(importedNode);
        })
        // styleImportedSVG()
      });
      d3.xml("../svg/170627chartonly-04.svg").mimeType("image/svg+xml").get(function(error, xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      d3.select("div#visSide")
        .each(function() {
          this.appendChild(importedNode);
        })
        // styleImportedSVG()
      });
 		});

 		d3.select("#twolanguages").on("click", function(){
      d3.selectAll("svg").remove();

      d3.xml("../svg/typology_mockups-02.svg").mimeType("image/svg+xml").get(function(error, xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      d3.select("div#vis")
        .each(function() {
          this.appendChild(importedNode);
        })
        styleImportedSVG2()
      });
 		});

    d3.select("#boring").on("click", function(){
      d3.selectAll("svg").remove();

      d3.xml("../typology_mockups-03.svg").mimeType("image/svg+xml").get(function(error, xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      d3.select("div#vis")
        .each(function() {
          this.appendChild(importedNode);
        })
        styleImportedSVG3()
      });
    });