  function filterProjects(language) {
    const projects = document.getElementsByClassName('single-project');

    // Loop through the collection
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].classList.contains(language)) {
            projects[i].style.display = "block"
        }
        else {
            projects[i].style.display = "none"

        }
    }
  }
  
  // Initial display with all projects
  filterProjects('all');
  