// JavaScript Document
$(function() {
    $("map area").click(function(e) {
        e.preventDefault(); // Prevents the link from disappearing
        $('#myModal').modal("show");
        if ($(this).attr("id") == "gallon") {
            $("#feedback").css("color", "black");
            $("#feedback").html("This gallon container should not be filled all the way to the top, as this can cause overflow. Fill water up to the 1-gallon marker. Before you pump the container, make sure both entries for the straw and for the pump are sealed tightly.");
        }
        if ($(this).attr("id") == "pump") {
            $("#feedback").css("color", "black");
            $("#feedback").html("The water pump has a unique design that allows you to carry the pump by locking the pump in to prevent it from moving. 3-4 pumps should be sufficient to create a strong flow through the pump. Assure that the pump is screwed into the gallon container before pumping.");
        }
        if ($(this).attr("id") == "wand") {
            $("#feedback").css("color", "black");
            $("#feedback").html("The spray wand is the end point where the cleaning solution will spray from. Pressing down on the blue handle will allow you to spray the solution. If the solution is coming out as a singular stream, unscrew the tip of the wand slightly to allow maximum surface area coverage when spraying.");
        }
        if ($(this).attr("id") == "hose") {
            $("#feedback").css("color", "black");
            $("#feedback").html("The reinforced hose is essential in allowing the cleaning solution to be transferred from the container to the hose. Assure that there are no holes or tears and that the hose is not bent.");
        }
        if ($(this).attr("id") == "straw") {
            $("#feedback").css("color", "black");
            $("#feedback").html("The straw is the beginning location of the cleaning solution being drawn out. Assure that the straw is straight and that the blue screw is attached tightly to the gallon container.");
        }
    });
});