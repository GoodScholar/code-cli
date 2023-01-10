import inquirer from 'inquirer'

// confirm 是否确认
inquirer
    .prompt([{
        type: 'input',
        name: 'username',
        message: '你的名字',
    }, ])
    .then(result => {
        console.log(result)
    })
    // .catch(err => {
    //     console.log(err)
    // })