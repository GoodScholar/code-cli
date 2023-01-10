import download from "download-git-repo";
import ora from "ora";
import chalk from "chalk";
import figlet from "figlet";

const downloadFun = function(url, project) {
    const spinner = ora("项目正在创建...").start();
    download(`direct:${url}`, project, { clone: true }, err => {
        if (!err) {
            spinner.succeed("项目创建成功");

            console.log(`\r\nSuccessfully created project ${chalk.cyan(project)}`);

            console.log(
                "\r\n" +
                figlet.textSync(`${project}`, {
                    font: "3D-ASCII",
                    horizontalLayout: "default",
                    verticalLayout: "default",
                    width: 80,
                    whitespaceBreak: true,
                })
            );

            console.log(`\r\n  cd ${chalk.cyan.bold(project)}`);
            console.log("  npm install or yarn");
            console.log("  npm run serve or yarn serve \r\n");
        } else {
            spinner.fail("代码下载失败");
        }
    });
};

export default downloadFun;