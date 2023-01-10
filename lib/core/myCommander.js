// 自定义选项参数指令

import myAction from './action.js'
const myCommander = function (program) {
    program
        // 指令
        .command('create <project> [other...]')
        // 别名
        .alias('crt')
        // 描述
        .description('创建项目')
        // 执行回调函数
        .action(myAction)
}

export default myCommander
