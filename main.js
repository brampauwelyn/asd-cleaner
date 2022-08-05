const { app, BrowserWindow, ipcMain, Notification } = require("electron");

const fs = require("fs");
const path = require("path");

const showNotification = (title, body) => {
  new Notification({ title, body }).show();
};

const handleDelete = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    let deletedFilesCount = 0;
    for (const file of files) {
      if (file.endsWith(".asd")) {
        fs.unlink(path.join(dir, file), (err) => {
          if (err) throw err;
        });
        deletedFilesCount++;
      }
    }

    console.log({deletedFilesCount});

    showNotification("Success", `${deletedFilesCount} were deleted`);
  });
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
  
  if (!app.isPackaged) {
    win.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  createWindow();
  ipcMain.on("file-drop", (_event, path) => {
    console.log(path);
    handleDelete(path);
  });
});
