@echo off
cd /d "C:\Users\marke\Desktop\Personal\Blog\backups\web\myproject"
echo Εκκίνηση τοπικού server για v2.6 στο http://localhost:8000 ...
start "" http://localhost:8000/pgn_import_standard_v2.5.html
py -m http.server 8000
pause
