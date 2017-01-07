$(function() {
	var obj = []
	var store = "";
	$(".numbers button").on("click", function() {
		var myClass = $(this).attr("class");
		if (store != "0" || myClass != 0) {
			if (store == "0" && myClass != ".") {
				store = myClass;
				$(".screen").html(myClass);
			}

			else {
				store = store + myClass;
				$(".screen").html(store);
			}
		}
	});
	$(".plus button").on("click", function() {
		if (store != "") {
			obj.push(store);
			var ans = parseFloat(obj[0]);
			store = "";
			if (obj.length == 2) {
				ans = parseFloat(obj[0]) + parseFloat(obj[1]);
			}
			obj = [];
			obj.push(ans);
			$(".screen").html(ans);
			console.log(obj);
			console.log(ans);
		};
	});
});
