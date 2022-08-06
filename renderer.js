const DRAG_AND_DROP_TEXT = 'Drag & drop folder here';

const dragbox = document.getElementById("dragbox");
const dragboxTextEl = document.querySelector('.dragbox-text');
dragboxTextEl.textContent = DRAG_AND_DROP_TEXT;
const dragboxIconPathEl = document.querySelector('.dragbox-icon-path');

const resetDragboxStyling = () => {
  dragbox.classList.remove('active');
  dragboxTextEl.textContent = DRAG_AND_DROP_TEXT;
  dragboxIconPathEl.setAttribute('fill', '#fff');
}


const handleDragOver = (e) => {
  e.stopPropagation();
  e.preventDefault();
  dragbox.classList.add('active');
  dragboxTextEl.textContent = 'Drop it';
  dragboxIconPathEl.setAttribute('fill', 'palevioletred');
}

const handleDrop = (e) => {
  e.stopPropagation();
  e.preventDefault();
  const files = e.dataTransfer.files
  for (const file of files) {
    console.log(file.path);
    window.electronAPI.fileDrop(file.path)
  }
  resetDragboxStyling();
};

dragbox.addEventListener("dragover", handleDragOver);

dragbox.addEventListener('dragleave', () => {
  resetDragboxStyling();
});

dragbox.addEventListener("drop", handleDrop);