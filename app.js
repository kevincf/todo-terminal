require('colors')
const { inquirerMenu, pause } = require('./helpers/inquirer')



const main = async() => {
    let opt = ''
    do {
        opt = await inquirerMenu();
        await pause(opt);
    } while (opt !== '0')

}
main()