const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendToMainProcess: (message) => {
    ipcRenderer.send('message-to-main', message);
  }
});




