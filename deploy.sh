rm -r css img js index.html
cd app
npm run build
cd dist
cp -r css ../../
cp -r img ../../
cp -r js ../../
cp index.html ../../
git add -A
git commit -m "automated deployment"
git push
