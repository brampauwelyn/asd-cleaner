const dragbox = document.getElementById("dragbox");

console.log(dragbox);

const handleDragOver = (e) => {
  e.stopPropagation();
  e.preventDefault();
}

const handleDrop = (e) => {
  e.stopPropagation();
  e.preventDefault();
  const files = e.dataTransfer.files
  for (const file of files) {
    console.log(file.path);
    window.electronAPI.fileDrop(file.path)
  }
}

dragbox.addEventListener("dragover", handleDragOver);

dragbox.addEventListener("drop", handleDrop);