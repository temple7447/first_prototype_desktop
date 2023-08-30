const { app, BrowserWindow , ipcMain} = require('electron');
const path = require('path');




function createWindow() {
    const LoginWindow = require('./Window/Login/LoginWindow')
    LoginWindow.loadFile('login.html');
    LoginWindow.webContents.openDevTools()
    const DasboardWindow = require('./Window/Dashboard/DasboardWindow')
    DasboardWindow.loadFile('index.html');
    DasboardWindow.webContents.openDevTools()
}



// const LoginWindow = new BrowserWindow({
//     width: 400,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, '')
//     }
//   })




app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
