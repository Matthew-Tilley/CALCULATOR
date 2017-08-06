$(document).ready(function()
{
	
	var inputs = [" "];
	var total_string;
	var operators_1 = ["+", "-", "-", "/"];
	var operators_2 = ["."];
	var nums = ["0,1,2,3,4,5,6,7,8,9"];
	
	
	function get_value(input)
	{
		
	}
	
	
	function update()
	{
		total_string = inputs.join("");
		$("#display").html(total_string);
	}
	
	
	function getTotal()
	{
		total_string = inputs.join("");
		
		$("#display").html(eval(total_string));
		
		$("button").on("click", function()
		{
			if (this.id === "AC")
				{
					inputs = [" "];
					update();
				}
			
		});
		
	}
	
	
	
	
	
});