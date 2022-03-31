#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://erickmontesdk.github.io//FrontEnd-Vue-Vuex-Pasteleria/
git push -f git@github.com:ErickMontesDK/FrontEnd-Vue-Vuex-Pasteleria.git master:gh-pages

cd -
