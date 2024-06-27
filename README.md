# Undefined db reproduction

Issue is that db service does not work when using commands

See

- [app/controllers/users_controller.ts](https://github.com/maximelebastard/reproduce-empty-db/blob/main/app/controllers/users_controller.ts) (working)
- [commands/list_users.ts](https://github.com/maximelebastard/reproduce-empty-db/blob/main/commands/list_users.ts) (not working)
- [commands/list_users_dynamicimport.ts](https://github.com/maximelebastard/reproduce-empty-db/blob/main/commands/list_users_dynamicimport.ts) (not working)
- [commands/list_users_container.ts](https://github.com/maximelebastard/reproduce-empty-db/blob/main/commands/list_users_container.ts) (not working)
