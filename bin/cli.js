#! /usr/bin/env node

// 引入 commander 命令行指令依赖
import { program } from 'commander'

// 创建选项参数指令
import myHelp from '../lib/core/help.js'
myHelp(program)

// 自定义选项参数指令
import myCommander from '../lib/core/myCommander.js'
myCommander(program)

program.parse(process.argv)