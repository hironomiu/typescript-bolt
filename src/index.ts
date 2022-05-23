import { App } from '@slack/bolt'
import * as dotenv from 'dotenv'

dotenv.config()

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_BOT_SIGNING_SECRET,
})

// TODO: 型
app.message('yoyo', async ({ message, say }: any) => {
  await say(`Hey there <@${message.user}>!`)
})

// TODO: 型
app.message('choice', async ({ message, say }: { message: any; say: any }) => {
  const col: string[] = message.text.split(' ')
  if (col.length > 1) {
    const position: number = Math.floor(Math.random() * (col.length - 1)) + 1
    await say(`${col[position]}`)
  } else {
    await say(
      `choice の後ろに選択したい項目を半角スペース区切りで記載しましょう`
    )
  }
})
// TODO: 型
app.command('/omikuji', async ({ ack, respond }: any) => {
  await ack()
  const results = ['大吉', '中吉', '小吉', '吉', '凶', '大凶']
  // await respond(results[Math.floor(Math.random() * results.length)])
  await respond({
    respond_type: 'in_channel',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:shallow_pan_of_food:${
            results[Math.floor(Math.random() * results.length)]
          }`,
        },
      },
    ],
  })
})
app.command('/say', async ({ ack, respond }: any) => {
  respond('say hooo!')
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
