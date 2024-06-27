import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ListUsersContainer extends BaseCommand {
  static commandName = 'list:users-container'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const db = await this.app.container.make('lucid.db') // Getting "cannot resolve binding "lucid.db" from the container"
    const users = await db.query().select('*').from('users').limit(10)
    console.table(users)
  }
}
