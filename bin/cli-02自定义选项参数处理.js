#! /usr/bin/env node

//
const { program } = require('commander')

program.option('--first').option('-s, --separator <char>', '设置框架')

program
    // 指令
    .command('create <project> [other...]')
    // 别名
    .alias('crt')
    // 描述
    .description('创建项目')
    // 执行回调函数
    .action((project, args) => {
        // 命令行执行逻辑代码
        console.log(project, args)
    })

program.parse(process.argv)
