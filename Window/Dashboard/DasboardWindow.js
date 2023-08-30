const { app, BrowserWindow , ipcMain, screen} = require('electron');
const path = require('path');

const primaryDisplay = screen.getPrimaryDisplay();
const { width, height } = primaryDisplay.size;

const DasboardWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      preload: path.join(__dirname, 'DashboardPreload.js')
    }
  })


  module.exports  = DasboardWindow