function beepBoopOrNeighbor(num, name) {
  let results
  for(x=1; x<=num; x++) {
    if(x.toString().includes("3")) {
      $("#resultsList").append(`<p>Won't you be my neighbor <span>${name}?</span></p>`);
    } else if(x.toString().includes("2")) {
      $("#resultsList").append("<p><span>Boop!</span></p>");
    } else if(x.toString().includes("1")) {
      $("#resultsList").append("<p><span>Beep!</span></p>");
    } else {
      $("#resultsList").append(`<p>${x}</p>`);
    }
  }
}

$( document ).ready(function() {
  $("#userInputForm").submit(function() {
    event.preventDefault()

    const parsedUserInput = parseInt($("#userNumInput").val());
    const userNameInput = $("#userNameInput").val();

    beepBoopOrNeighbor(parsedUserInput, userNameInput);

    $("#containerDiv").hide();
    $("#resultsContainer").show();
  });
});