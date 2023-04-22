import { rest } from 'msw'
import { db, random, replaceRandomUser, upadteRandomUser } from './data/usersData'

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    const actions = [replaceRandomUser, upadteRandomUser]
    const randomActionIndex = random(0, actions.length - 1)
    const data = actions[randomActionIndex](db)

    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({
        data,
      })
    )
  }),
]
