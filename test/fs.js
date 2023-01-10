import path from 'path'
import fs from 'fs-extra'

const cwd = process.cwd();
const targetDirectory = path.join(cwd, project);

// 判断文件是否存在
console.log(fs.existsSync(targetDirectory));