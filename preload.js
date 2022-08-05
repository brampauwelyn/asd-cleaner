const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    fileDrop: (path) => {
      console.log(path);
      ipcRenderer.send('file-drop', path)
    }
})