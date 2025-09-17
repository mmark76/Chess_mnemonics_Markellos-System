// pgn.js — διαχείριση PGN / SAN με chess.js

// ✅ Παίρνει PGN από το textarea
function getPgnText() {
  return document.getElementById("pgnText").value.trim();
}

// ✅ Parse PGN με chess.js
function parsePgn() {
  const pgn = getPgnText();
  console.log("📥 PGN Input:", pgn);

  if (!pgn) {
    console.warn("⚠️ Empty PGN");
    return;
  }

  const chess = new Chess();
  const loaded = chess.load_pgn(pgn);

  console.log("✅ Loaded:", loaded);

  if (!loaded) {
    alert("❌ Μη έγκυρο PGN!");
    return;
  }

  const history = chess.history({ verbose: true });
  console.log("📜 Moves:", history);

  populateSanTable(history);
}

// ✅ Γέμισμα SAN Table με FEN
function populateSanTable(moves) {
  const tableBody = document.querySelector("#san-table tbody");
  if (!tableBody) return;
  tableBody.innerHTML = "";

  const replay = new Chess(); // replay game για σωστά FENs

  moves.forEach((move, index) => {
    replay.move(move.san); // εκτελεί την κίνηση
    const fen = replay.fen(); // FEN μετά την κίνηση

    const row = document.createElement("tr");

    // Move number
    const moveCell = document.createElement("td");
    moveCell.textContent = Math.floor(index / 2) + 1;
    row.appendChild(moveCell);

    // SAN
    const sanCell = document.createElement("td");
    sanCell.textContent = move.san;
    row.appendChild(sanCell);

    // Locus (κενό)
    const locusCell = document.createElement("td");
    locusCell.textContent = "";
    row.appendChild(locusCell);

    // Anchor (κενό)
    const anchorCell = document.createElement("td");
    anchorCell.textContent = "";
    row.appendChild(anchorCell);

    // Χρώμα
    const colorCell = document.createElement("td");
    colorCell.textContent = move.color;
    row.appendChild(colorCell);

    // Piece
    const pieceCell = document.createElement("td");
    pieceCell.textContent = move.piece;
    row.appendChild(pieceCell);

    // Target Square
    const toCell = document.createElement("td");
    toCell.textContent = move.to;
    row.appendChild(toCell);

    // FEN
    const fenCell = document.createElement("td");
    fenCell.textContent = fen;
    fenCell.classList.add("mono", "small");
    row.appendChild(fenCell);

    tableBody.appendChild(row);
  });
}

// ✅ Σύνδεση κουμπιών
document.addEventListener("DOMContentLoaded", () => {
  // Parse χειροκίνητο (Paste PGN)
  const parseBtn = document.getElementById("parsePGN");
  if (parseBtn) parseBtn.addEventListener("click", parsePgn);

  // Import από αρχείο PGN (αυτόματο parse)
  const importBtn = document.getElementById("importPGN");
  if (importBtn) {
    importBtn.addEventListener("click", () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".pgn,.txt";
      fileInput.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          document.getElementById("pgnText").value = ev.target.result;
          parsePgn(); // ✅ αυτόματο parse μετά το import
        };
        reader.readAsText(file);
      };
      fileInput.click();
    });
  }

  // Clear All
  const clearBtn = document.getElementById("clearAll");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      document.getElementById("pgnText").value = "";
      const tableBody = document.querySelector("#san-table tbody");
      if (tableBody) tableBody.innerHTML = "";
    });
  }
});
