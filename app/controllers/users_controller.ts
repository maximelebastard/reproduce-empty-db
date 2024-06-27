// import type { HttpContext } from '@adonisjs/core/http'

import db from '@adonisjs/lucid/services/db'

export default class UsersController {
  public async index({}) {
    const users = await db.query().select('*').from('users').limit(10) // works properly, db has a value
    return { users }
  }
}
