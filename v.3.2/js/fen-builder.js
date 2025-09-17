$(function () {
  var pieceThemeUrl =
    "https://mmark76.github.io/chessboardjs-hosting/chessboardjs-1.0.0/img/chesspieces/wikipedia/{piece}.png";

  var builderBoard = Chessboard("builderBoard", {
    draggable: true,
    dropOffBoard: "trash",
    sparePieces: true,
    pieceTheme: pieceThemeUrl,
    position: "start",
    onDrop: function () {
      setTimeout(updateBuilderFEN, 10);
    },
    onSnapEnd: function () {
      setTimeout(updateBuilderFEN, 10);
    },
  });

  var sideToMove = "w";

  // Side buttons
  $("#toMoveW").on("click", function () {
    sideToMove = "w";
    $(this).addClass("selected");
    $("#toMoveB").removeClass("selected");
    updateBuilderFEN();
  });
  $("#toMoveB").on("click", function () {
    sideToMove = "b";
    $(this).addClass("selected");
    $("#toMoveW").removeClass("selected");
    updateBuilderFEN();
  });

  function getCastlingString() {
    var res = "";
    if ($("#wK").prop("checked")) res += "K";
    if ($("#wQ").prop("checked")) res += "Q";
    if ($("#bK").prop("checked")) res += "k";
    if ($("#bQ").prop("checked")) res += "q";
    return res === "" ? "-" : res;
  }

  $(".switch input").on("change", function () {
    updateBuilderFEN();
  });

  function updateBuilderFEN() {
    var fen = builderBoard.fen();
    var castling = getCastlingString();
    var stm = sideToMove;
    var fenFull = fen + " " + stm + " " + castling + " - 0 1";
    $("#fenOutput").val(fenFull);
  }

  $("#builderBoard").on("mouseup mouseleave", function () {
    setTimeout(updateBuilderFEN, 20);
  });
  updateBuilderFEN();

  // Buttons
  $("#clearBuilderBtn").on("click", function () {
    builderBoard.clear();
    updateBuilderFEN();
  });
  $("#startBuilderBtn").on("click", function () {
    builderBoard.start();
    updateBuilderFEN();
  });
  $("#copyFenBtn").on("click", function () {
    $("#fenOutput").select();
    document.execCommand("copy");
  });

  $("#importFenBtn").on("click", function () {
    var fen = $("#fenImportInput").val().trim();
    if (!fen) return;
    var fenParts = fen.split(" ");
    var posPart = fenParts[0] || "";
    var stmPart = fenParts[1] || "w";
    var castlingPart = fenParts[2] || "-";
    builderBoard.position(posPart);
    if (stmPart === "w") {
      $("#toMoveW").click();
    } else {
      $("#toMoveB").click();
    }
    $("#wK").prop("checked", castlingPart.includes("K"));
    $("#wQ").prop("checked", castlingPart.includes("Q"));
    $("#bK").prop("checked", castlingPart.includes("k"));
    $("#bQ").prop("checked", castlingPart.includes("q"));
    updateBuilderFEN();
  });
});
