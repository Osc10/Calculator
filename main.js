$(function() {
	var obj = [];
	var store = "";
	var negative = 0;

	var negOp = 0;




	$(".numbers button").on("click", function() {
//Store cleared if no operation pressed after equals.
		if($(this).attr("id") != "C") {
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



			var myID = $(this).attr("id");
			// Prevents 00 as the start of the number.
			if (store != "0" || myID != 0) {
				if (store != "-0" || myID != 0) {
					if (store == "0" && myID != ".") {
						store = myID;
						$(".screen").html(myID);
					} else if (store == "-0" && myID != 0) {
						store = "-" + myID;
						$(".screen").html(myID);

					}
					//stores number and changes screen to typed number
					else {
						store = store + myID;
						$(".screen").html(store);
					}
				}
					
			}			
		}
		
	});
	$(".operations button").on("click", function() {
		console.log(negOp);
		if (negOp < 2) {
			negOp ++;
		}
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
			if ($(this).attr("id") == "=") {
				store = ans;
			} else {
				store = "";
			};
//sets previous operation to current in preparation for next operation button.
			window.prevOp = $(this).attr("id");
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

			// to deal with negative op right after another op.
		$("#-").on("click", function() {
			console.log(obj.length);
			if (obj.length === 0) {
				$(".screen").html("-");
				negative = 1;
			} else if (negOp === 2) {
				$(".screen").html("-");
				negative = 1;
			}
		})


	});
//a clear button
	$("#C").on("click", function() {
		store = "";
		obj = [];
		prevOp = "";
		$(".screen").html("");
	})
});
