call npm install
call bower install
rm -rf assets/
xcopy "C:\Users\cobbe\Google Drive\bagger\assets" .\assets\ /e
gulp
