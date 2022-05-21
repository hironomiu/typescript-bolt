#

## SetUp

```
npm install
```

### .env

プロジェクトルート直下に作成

| 変数                     | 設定値 |
| :----------------------- | :----- |
| SLACK_BOT_TOKEN          |        |
| SLACK_BOT_SIGNING_SECRET |        |
| PORT                     |        |

## Run

ローカルで動作させる際は[ngrok](https://ngrok.com/) を利用

```
ngrok http 3434
```

```
npm run serve
```

## Install Memo

```
npm install --save-dev typescript @types/node ts-node
npx tsc --init
```

### nodemon

```
npm install --save-dev nodemon
```

### dotenv

```
npm install dotenv
```

### Bolt

```
npm install @slack/bolt
```
