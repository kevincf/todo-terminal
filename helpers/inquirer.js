const inquirer = require('inquirer')
require('colors')

const options = [{
    type: 'list',
    name: 'option',
    message: 'Wath do you want to do?',
    choices: [{
            value: '1',
            name: '1. Add task'
        },
        {
            value: '2',
            name: '2. List tasks'
        },
        {
            value: '3',
            name: '3. List completed tasks'
        },
        {
            value: '4',
            name: '4. List pending tasks'
        },
        {
            value: '5',
            name: '5. Complete tasks'
        },
        {
            value: '6',
            name: '6. Delete task'
        },
        {
            value: '0',
            name: '0. Exit'
        },
    ]
}]

const inquirerMenu = async() => {
    console.clear()

    console.clear();
    console.log('===================='.green)
    console.log(' Choose an option'.green)
    console.log('====================\n'.green)

    const { option } = await inquirer.prompt(options)


    console.log(`${'1.'.green} Add task`)
    console.log(`${'2.'.green} List taks`)
    console.log(`${'3.'.green} List completed tasks`)
    console.log(`${'4.'.green} List pending taks`)
    console.log(`${'5.'.green} Complete tasks`)
    console.log(`${'6.'.green} Delete task`)
    console.log(`${'0.'.green} Exit \n`)
    return option;

}
const pause = async(input) => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.green} para continuar`

    }]
    console.log(input)
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`Press ${'Enter'.green} to continue: \n`, () => {
            readline.close()
            resolve()
        })
    })

}
module.exports = {
    inquirerMenu,
    pause
}