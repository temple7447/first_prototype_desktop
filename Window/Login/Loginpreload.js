const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendToMainProcess: (message) => {
    ipcRenderer.send('message-to-main', message);
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById("signin-form");

    signInForm.addEventListener('submit', () => {
      const email = document.getElementById('typeEmailX').value;
      const password = document.getElementById('typePasswordX').value;
      
      // Send the email and password to the main process
      ipcRenderer.send('signin-request', { email, password });
    });
  });

