// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {REST} from "@discordjs/rest";
import {API} from "@discordjs/core";

console.log({
    token: process.env.DISCORD_TOKEN
})
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
// Pass into API
const api = new API(rest);
const channelId = "527941162539941898"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  await api.channels.createMessage(
      channelId,
      {
        content: "/bump"
      }
  )
  res.end()
}
