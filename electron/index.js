/**
 * @description      :
 * @author           : mario
 * @group            :
 * @created          : 01/05/2022 - 20:54:30
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 01/05/2022
 * - Author          : mario
 * - Modification    :
 **/

const { app } = require("electron")

function App() {
	const win = require('./createWindow')
}

app.whenReady().then(App);

app.on("window-all-closed", () => {
	if(process.platform !== "darwin") app.quit();
});

// let quitWindow = () => {
// 	win.close()
// }

