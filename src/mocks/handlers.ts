import { rest } from 'msw'
import { db, replaceRandomUser } from './data/usersData'

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    const data = replaceRandomUser(db)

    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({
        data,
      })
    )
  }),
]
