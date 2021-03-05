// Cube.js configuration options: https://cube.dev/docs/config
module.exports = {
};
/*

docker run --rm \
  --name cubejs-docker-demo \
  -e CUBEJS_API_SECRET=CUBEJS_API_SECRET=e0cfdd622c35b2215e623462f8521089093c7769720be2da29a5e920d8431099059e77c42ec6783370eaef467e473fedebebbd6313004a25e5a6592fc0881698 \
  -e CUBEJS_DB_HOST=DESKTOP-U8UM164 \
  -e CUBEJS_DB_NAME=user \
  -e CUBEJS_DB_USER=sa \
  -e CUBEJS_DB_PASS=database@1 \
  -e CUBEJS_DB_TYPE=postgres \
  -v "$(pwd):/cube/conf" \
  cubejs/cube:latest
  
  CUBEJS_DB_HOST=DESKTOP-U8UM164
CUBEJS_DB_NAME=user
CUBEJS_DB_PORT=1433
CUBEJS_DB_USER=sa
CUBEJS_DB_PASS=database@1
CUBEJS_DEV_MODE=true
CUBEJS_DB_TYPE=mssql
CUBEJS_API_SECRET=e0cfdd622c35b2215e623462f8521089093c7769720be2da29a5e920d8431099059e77c42ec6783370eaef467e473fedebebbd6313004a25e5a6592fc0881698

heroku config:set CUBEJS_DB_TYPE=mssql \
  CUBEJS_DB_HOST=DESKTOP-U8UM164 \
  CUBEJS_DB_NAME=user \
  CUBEJS_DB_USER=sa \
  CUBEJS_DB_PASS=database@1 \
  CUBEJS_API_SECRET=e0cfdd622c35b2215e623462f8521089093c7769720be2da29a5e920d8431099059e77c42ec6783370eaef467e473fedebebbd6313004a25e5a6592fc0881698 \
  --app real-time-dashboard-api
*/
