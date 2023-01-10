import inquirer from 'inquirer'
import downloadFun from '../core/download.js'

// 选择模块下载模块
const downloadTemplate = async(config, project) => {
    const answer = await inquirer.prompt([{
        type: 'list',
        name: 'framework',
        choices: config.framework,
        message: '请选择你所使用的框架',
    }, ])


    // 下载代码模板
    downloadFun(config.frameworkUrl[answer.framework], project)
}



export {
    downloadTemplate
}