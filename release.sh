set -e
ssh-add
npm version --no-git-tag-version $1
git add package.json
git add package-lock.json

rm -rf docs
npm run build
mv build docs
git add -A docs

git commit -m "release v$1"
git tag $1
git push && git push --tags

