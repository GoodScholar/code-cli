import path from 'path'
import fs from 'fs-extra'
import inquirer from 'inquirer'
import chalk from 'chalk';

import { downloadTemplate } from '../utils/utils.js'

const isExists = async(project, config) => {
    // 获取当前工作目录
    const cwd = process.cwd();
    const targetDirectory = path.join(cwd, project);

    // 判断文件是否存在
    if (fs.existsSync(targetDirectory)) {
        const { isOverwrite } = await inquirer.prompt([{
            type: 'confirm',
            name: 'isOverwrite',
            message: '该文件存在，请问是否覆盖？',
        }, ])



        if (isOverwrite) {
            await fs.remove(targetDirectory);

            console.log(chalk.green.bold('已成功覆盖！'));
            // 下载代码模板
            downloadTemplate(config, project)
        } else {
            console.log(chalk.red.bold('项目创建失败，请检查项目名称！'));
        }

    } else {
        // 下载代码模板
        downloadTemplate(config, project)
    }

}

export default isExists