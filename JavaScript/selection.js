function selectProblem(problem) {
    // Reset all boxes
    const boxes = document.querySelectorAll('.problem-box');
    boxes.forEach(box => box.classList.remove('active'));

    // Highlight the selected box
    const selectedBox = document.getElementById(problem);
    selectedBox.classList.add('active');

    // Redirect to a new page based on the selected problem
    let url = '';
    if (problem === 'anxiety') {
      url = 'anxiety.html';  // Change this to the actual URL
    } else if (problem === 'depression') {
      url = 'depression.html';  // Change this to the actual URL
    } else if (problem === 'stress') {
      url = 'stress.html';  // Change this to the actual URL
    }

    // Redirect after a short delay to allow the active style to be seen
    setTimeout(() => {
      window.location.href = url;
    }, 300); // 300ms delay for the visual feedback
  }