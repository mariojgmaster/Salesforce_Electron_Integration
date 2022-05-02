/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 02/05/2022 - 01:57:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const { BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 700,
        frame: false,
        resizable: true,
        movable: true,
        fullscreenable: false
    });
    
    // win.loadURL('http://localhost:3001/login')
    win.loadFile(`${__dirname}/src/index.html`);

    return win
}

module.exports = createWindow()