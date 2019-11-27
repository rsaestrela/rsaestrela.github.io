rm -r css img js index.html favicon.ico
cd app
npm run build
cd dist
cp -r css ../../
cp -r img ../../
cp -r js ../../
cp index.html ../../
cp favicon.ico ../../
git add -A
git commit -m "automated deployment"
git push
