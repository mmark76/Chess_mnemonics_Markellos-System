# README — Markellos Chess Mnemonic System v.3.2

## 📌 Σκοπός
Το **Markellos Chess Mnemonic System** είναι μια web εφαρμογή που συνδυάζει το σκάκι με μνημονικές τεχνικές (PAO, loci, anchors, verses).  
Επιτρέπει στον χρήστη να:
- εισάγει και αναλύει παρτίδες PGN,  
- αποθηκεύει κινήσεις με FEN αναπαράσταση,  
- συνδέει SAN με μνημονικά στοιχεία (Temporal, Spatial, Characters, PAO, Verses),  
- χρησιμοποιεί εργαλείο **FEN Builder** για ειδικές θέσεις,  
- εξάγει δεδομένα σε CSV/JSON για περαιτέρω μελέτη.

---

## 📂 Δομή Project

- `Markellos Chess Mnemonic System v3.2.html` → Κύριο UI  
- `css/styles.css` → Dark theme (κύρια εφαρμογή)  
- `css/fen-builder.css` → Light theme (FEN Builder)  
- `js/main.js` → Φόρτωση βιβλιοθηκών, κουμπί FEN Builder  
- `js/pgn.js` → Parsing PGN, γέμισμα SAN Table  
- `js/fen-builder.js` → Λογική FEN Builder (εισαγωγή/εξαγωγή FEN)  
- `data/libraries_v3.2.json` → Όλες οι βιβλιοθήκες (Temporal, Spatial, Characters, PAO 0–9, PAO 00–99, Verses, Foundations)  
- `fen-builder.html` → Pop-up εργαλείο FEN  
- `kamsky_kramnik_1993.pgn` → Παράδειγμα PGN

---

## ⚙️ Λειτουργίες

### 1. PGN / SAN Table
- Επικόλληση ή import PGN (κουμπιά **Import PGN / Parse PGN**).  
- Αυτόματη ανάλυση με `chess.js`.  
- Δημιουργία **SAN Table** με στήλες:  
  `#`, `SAN`, `Locus`, `Anchor`, `Color`, `Piece`, `Target Square`, `FEN`.

### 2. Associations / PAO / Verse Tables
- Επιλογή **Πίνακα**:  
  - SAN  
  - Associations  
  - PAO 0–9  
  - PAO 00–99  
  - Verse  
  - All-Tables (όλοι μαζί)
- Συμπλήρωση μέσω βιβλιοθηκών.

### 3. Libraries
- Επιλογή **Βιβλιοθήκης**:  
  - Temporal (LibraryT1, LibraryT2)  
  - Spatial (LibraryS1)  
  - Characters (LibraryC1, LibraryC2)  
  - PAO (LibraryP1, LibraryP2, LibraryP3)  
  - Verses (LibraryV1)  
  - Foundations  
  - All-Libraries

### 4. FEN Builder (popup)
- Σκακιέρα drag & drop με spare pieces.  
- Επιλογές:
  - Side-to-move (White/Black)  
  - Castling availability  
  - Import FEN string → εμφάνιση θέσης  
  - Export/copy current FEN  
  - Clear / Start position  

### 5. Εξαγωγή Δεδομένων
- Λειτουργία download (CSV, JSON) για SAN, PAO, Associations.

---

## 🎨 UI / UX
- **Κύριο UI**: Dark theme (μαύρο φόντο, λευκά γράμματα, sticky header/footer).  
- **FEN Builder**: Light theme, λευκό background.  
- Responsive tables (οριζόντια κύλιση).  
- Sticky headers/footers για σταθερή προβολή.

---

## 🔗 Εξαρτήσεις
- [chess.js](https://github.com/jhlywa/chess.js)  
- [chessboard.js](https://chessboardjs.com/)  
- jQuery  
- (προαιρετικά) PapaParse, FileSaver.js για exports

---

## 📜 Παράδειγμα Χρήσης
1. Εισάγετε ένα PGN (π.χ. από το `kamsky_kramnik_1993.pgn`).  
2. Πατήστε **Parse PGN** → γέμισμα του SAN Table.  
3. Επιλέξτε βιβλιοθήκη (π.χ. Temporal) και συνδέστε loci σε κινήσεις.  
4. Χρησιμοποιήστε το **FEN Builder** για ειδική θέση και αντιγράψτε το FEN.  
5. Εξάγετε τα δεδομένα σας σε CSV/JSON για μελέτη.

---

## 📌 Έκδοση
**Markellos Chess Mnemonic System v.3.2**  
© Markellos Markides, 2025
