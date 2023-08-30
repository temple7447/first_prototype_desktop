const { app, BrowserWindow , ipcMain} = require('electron');
const path = require('path');



const LoginWindow = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'Loginpreload.js')
    },
    // show:false
  })


  module.exports  = LoginWindow