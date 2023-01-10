import ora from 'ora';

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
    // spinner.succeed('成功')
    // spinner.fail('失败')
    spinner.info('提示')
}, 1000);