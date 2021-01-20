var isWhiteTurn = true;

$(document).ready(function() {
	$("#startBreak").hide();
	$("#board").hide();
	$("#startButton").click(function() {
		$("#startButton").hide();
		$("#startBreak").show();
		$("#board").show();
		var id;
		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				if ((i + j) % 2 == 0) {
					$("#board").append($("<div>", {class: "white"}));
				} else {
					id = i + '_' + j;
					$("#board").append($("<div>", {class: "red"}));
				}
			}
		}
	});
});
