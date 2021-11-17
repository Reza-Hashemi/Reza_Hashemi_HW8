$(document).ready(function () {
  $("#selector").click(function (e) {
    e.preventDefault();
    let status = $("#selector option:selected").text();
    console.log(status);
    if (status == "POST") {
      $("#req-body").show();
    } else if (status == "GET") {
      $("#req-body").hide();
    }
  });
  $("#btn").click(function (e) {
    e.preventDefault();
    let state = $("#selector option:selected").text();
    console.log(state);
    if (state == "GET") {
      $("#res-body").show();
      let address = $("#url").val();
      $.ajax({
        type: "GET",
        url: address,
        data: "data",
        success: function (response) {
          $("#res-body").html(response.data);
          console.log(response.data);
        },
      });
    }
  });
});
