// main.js — βασικός έλεγχος

// ✅ Φόρτωση βιβλιοθηκών από JSON
async function loadLibraries() {
  try {
    const response = await fetch("data/libraries_v3.2.json");
    if (!response.ok) throw new Error("Δεν βρέθηκε το libraries_v3.2.json");
    const libraries = await response.json();

    console.log("✅ Libraries loaded:", libraries);

    // Γέμισμα dropdowns
    fillLibraryDropdown("LibraryT1", libraries.Temporal?.LibraryT1);
    fillLibraryDropdown("LibraryT2", libraries.Temporal?.LibraryT2);
    fillLibraryDropdown("LibraryC1", libraries.Characters?.LibraryC1);
    fillLibraryDropdown("LibraryS1", libraries.Spatial?.LibraryS1);
    fillLibraryDropdown("LibraryP1", libraries["PAO 0-9"]?.LibraryP1);
    fillLibraryDropdown("LibraryP2", libraries["PAO 00-99"]?.LibraryP2);
    fillLibraryDropdown("LibraryP3", libraries["PAO 00-99"]?.LibraryP3);
    fillLibraryDropdown("LibraryV1", libraries.Verses?.LibraryV1);

  } catch (err) {
    console.error("❌ Σφάλμα στη φόρτωση βιβλιοθηκών:", err);
  }
}

// ✅ Γέμισμα ενός συγκεκριμένου dropdown
function fillLibraryDropdown(libraryName, data) {
  if (!data) return;

  // Βρες όλα τα <select> που έχουν σαν option το libraryName
  const selects = Array.from(document.querySelectorAll("select")).filter(sel => {
    return Array.from(sel.options).some(opt => opt.textContent === libraryName);
  });

  selects.forEach(select => {
    // Καθάρισμα τωρινών options
    select.innerHTML = "";

    // Δημιουργία option για κάθε entry του JSON
    Object.entries(data).forEach(([key, value]) => {
      const option = document.createElement("option");
      option.value = key; // π.χ. "1"
      option.textContent = `${key} — ${value.el} / ${value.en}`;
      select.appendChild(option);
    });
  });
}

// ✅ Pop-up FEN Builder
function setupFenBuilderButton() {
  const btn = document.getElementById("openFenBuilder");
  if (btn) {
    btn.addEventListener("click", () => {
      window.open(
        "fen-builder.html",
        "FenBuilder",
        "width=420,height=720,resizable=yes,scrollbars=yes"
      );
    });
  }
}

// ✅ Εκκίνηση
document.addEventListener("DOMContentLoaded", () => {
  loadLibraries();
  setupFenBuilderButton();
});
