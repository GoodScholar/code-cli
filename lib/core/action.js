import inquirer from 'inquirer'
import config from '../../config.js'
// import downloadFun from './download.js'
import isExists from '../utils/isExists.js'

const myAction = async(project, args) => {

    console.log(project);
    // 判断文件是否存在
    isExists(project, config)






    // 下载代码模板
    // downloadFun(config.frameworkUrl[answer.framework], project)
}
export default myAction