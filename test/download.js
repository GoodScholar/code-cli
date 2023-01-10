import download from 'download-git-repo'

download(
    'direct:git@gitee.com:beiyaoyaoyao/koa-template.git',
    // 'https://github.com/bayi-lzp/koa-template.git',
    './project',
    { clone: true },
    err => {
        console.log(err)
    }
)
