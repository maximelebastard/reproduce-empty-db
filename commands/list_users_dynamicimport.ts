import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ListUsersDynamicimport extends BaseCommand {
  static commandName = 'list:users-dynamicimport'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const db = await import('@adonisjs/lucid/services/db')
    const users = await db.default.query().select('*').from('users').limit(10)
    console.table(users)
  }
}
