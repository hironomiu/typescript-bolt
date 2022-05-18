import { App } from '@slack/bolt'
import * as dotenv from 'dotenv'

dotenv.config()

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_BOT_SIGNING_SECRET,
})

app.message('yoyo', async ({ message, say }: any) => {
  console.log('called')
  await say(`Hey there <@${message.user}>!`)
})
;(async () => {
  await app
    .start(process.env.PORT || 3434)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log('error:', error)
    })

  console.log('Bolt running')
})()
