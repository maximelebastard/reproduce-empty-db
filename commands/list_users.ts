import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class ListUsers extends BaseCommand {
  static commandName = 'list:users'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const users = await db.query().select('*').from('users').limit(10) // does not work, db is undefined
    console.table(users)
  }
}
