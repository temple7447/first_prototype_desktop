const { app, BrowserWindow , ipcMain} = require('electron');
const path = require('path');




function createWindow() {
    const LoginWindow = require('./Window/Login/LoginWindow')
    // const DasboardWindow = require('./Window/Dashboard/DasboardWindow')


 



    LoginWindow.loadFile('login.html');
    LoginWindow.webContents.openDevTools()
       ipcMain.on('signin-request', async (event, { email, password })=>{
      console.log('Received sign-in request:', email, password);

    })

    // DasboardWindow.loadFile('index.html');
    // DasboardWindow.webContents.openDevTools()
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
