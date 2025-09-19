@echo off
:: Start local server at port 8000 and open project in Chrome (normal mode)

cd /d "%~dp0"

:: Εκκίνηση τοπικού server στο background
start "" python -m http.server 8000

:: Άνοιγμα στον Chrome (κανονικά)
"C:\Program Files\Google\Chrome\Application\chrome.exe" "http://localhost:8000/head.html"
