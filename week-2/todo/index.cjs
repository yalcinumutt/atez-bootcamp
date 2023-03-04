#! /usr/bin/env node

// add , task-check, update, list
const { program } = require('commander');
const list = require('./lib/list.cjs');
const add = require('./lib/add.cjs');

program.command('list').description("List all todo items").action(list);
program.command("add <todoItem>").description('Add new todo item').action(add);

program.parse();

// TASK-Check commandi, update commandi, listelemeleri gruplama ve bulabilme


