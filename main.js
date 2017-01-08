$(function() {
	var obj = [];
	var store = "";
	var negative = 0;

// to deal with negative op right after another op.
	var negOp = 0;

	$(".-").on("click", function() {
		if (obj.length === 0) {
			$(".screen").html("-");
			negative = 1;
		} else if (negOp === 1) {
			$(".screen").html("-");
			negative = 1;
		}
	})


	$(".numbers button").on("click", function() {
//Store cleared if no operation pressed after equals.
		negOp = 0;
		if (window.prevOp == "=") {
			store = "";
			window.prevOp = "";
			obj = [];
		}

		if (negative === 1) {
			store = "-";
			negative = 0;
		}



		var myClass = $(this).attr("class");
		// Prevents 00 as the start of the number.
		if (store != "0" || myClass != 0) {
			if (store != "-0" || myClass != 0) {
				if (store == "0" && myClass != ".") {
					store = myClass;
					$(".screen").html(myClass);
				} else if (store == "-0" && myClass != 0) {
					store = "-" + myClass;
					$(".screen").html(myClass);

				}
				//stores number and changes screen to typed number
				else {
					store = store + myClass;
					$(".screen").html(store);
				}
			}
				
		}
	});
	$(".operations button").on("click", function() {
		negOp = 1;
//prevents operations having effect when no store.
		if (store != "") {

//pushes stored numbers onto obj		
			obj.push(store);

			var ans = parseFloat(obj[0]);
//if two numbers in obj, perform an operation and set this to be ans.
//If only 1 number, ans is the number.
			if (obj.length == 2) {
				switch(window.prevOp) {
					case "+":
						ans = parseFloat(obj[0]) + parseFloat(obj[1]);
						break;
					case "-":
						ans = parseFloat(obj[0]) - parseFloat(obj[1]);
						break;
					case "*":
						ans = parseFloat(obj[0]) * parseFloat(obj[1]);
						break;
					case "/":
						ans = parseFloat(obj[0]) / parseFloat(obj[1]);
						break;
				}
			}
//Hitting equals sets store as ans for further computation. Otherwise it clears store for another number.
			if ($(this).attr("class") == "=") {
				store = ans;
			} else {
				store = "";
			};
//sets previous operation to current in preparation for next operation button.
			window.prevOp = $(this).attr("class");
			obj = [];
			obj.push(ans);
//answer is pushed onto object for further computation
			if (ans == "-Infinity" || ans == "Infinity") {
				$(".screen").html("Error");
				store = "";

			} else {
				$(".screen").html(ans);
			console.log(obj);
			}
		};


	});
//a clear button
	$(".C button").on("click", function() {
		store = "";
		obj = [];
		prevOp = "";
		$(".screen").html("");
	})
});
