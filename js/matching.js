document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.item');
  const dropzones = document.querySelectorAll('.dropzone');
  const result = document.getElementById('result');

  // Add drag and drop event listeners to items
  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });

  // Add dragover event listener to dropzones
  dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', handleDragOver);
    dropzone.addEventListener('dragenter', handleDragEnter);
    dropzone.addEventListener('dragleave', handleDragLeave);
    dropzone.addEventListener('drop', handleDrop);
  });

  // Handle drag start event
  function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  // Handle drag end event
  function handleDragEnd() {
    // Do something after drag ends if needed
  }

  // Handle drag over event
  function handleDragOver(event) {
    event.preventDefault();
  }

  // Handle drag enter event
  function handleDragEnter(event) {
    event.preventDefault();
    this.classList.add('drag-over');
  }

  // Handle drag leave event
  function handleDragLeave() {
    this.classList.remove('drag-over');
  }

  // Handle drop event
  function handleDrop(event) {
    event.preventDefault();
    const draggedItemId = event.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(draggedItemId);
    const dropzone = event.target;

    if (dropzone.dataset.correct === draggedItemId) {
      dropzone.classList.remove('drag-over');
      dropzone.classList.add('correct');
      result.innerText = "Correct!";
    } else {
      dropzone.classList.remove('drag-over');
      dropzone.classList.add('incorrect');
      result.innerText = "Incorrect!";
    }
    
    // Disable further dragging of the item
    draggedItem.setAttribute('draggable', 'false');
  }
});
