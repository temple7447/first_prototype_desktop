const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendToMainProcess: (message) => {
    ipcRenderer.send('message-to-main', message);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById("submit-button");

  submitBtn.addEventListener('click', () => {
    ipcRenderer.send('logout');
  });
});



