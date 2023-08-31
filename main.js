const { app, BrowserWindow , ipcMain} = require('electron');
const path = require('path');
const { database} = require('./firebase')
const { getAuth, signInWithEmailAndPassword,  signOut }  = require('firebase/auth');

const auth = getAuth()
let LoginWindow; // Define a variable to store the LoginWindow instance
let DasboardWindow; // Define a variable to store the DashboardWindow instance


function createWindow() {
  



 



    LoginWindow = require('./Window/Login/LoginWindow')
    LoginWindow.loadFile('login.html');
    LoginWindow.webContents.openDevTools()


       ipcMain.on('signin-request', async (event, { email, password })=>{
      console.log('Received sign-in request:', email, password);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
    if(userCredential.user){
      LoginWindow.close()
    DasboardWindow = require('./Window/Dashboard/DasboardWindow')
    
    DasboardWindow.loadFile('index.html');
    DasboardWindow.webContents.openDevTools()

      // event.sender.send('firebase-auth-result', { user: userCredential.user });
    }else{
     console.log("user not found") 
    }
      } catch (error) {
        // Handle authentication error
        console.log(error)
        // event.sender.send('firebase-auth-result', { error: error.message });
      }

    })
       ipcMain.on('logout', async ()=>{
    
        try {
          await signOut(auth);
          console.log('Logged out');
          DasboardWindow.close()
       
        } catch (error) {
          console.log(error);
        }
     
      
    })



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
