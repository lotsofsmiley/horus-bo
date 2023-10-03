//  References to buttons
const addUsersButton = document.getElementById("addUsersButton");
const departmentsButton = document.getElementById("departmentsButton");
const autoTaskButton = document.getElementById("autoTaskButton");
//  References to Sidebars
const addUsersSidebar = document.getElementById("addUsersSidebar");
const departmentsSidebar = document.getElementById("departmentsSidebar");
const autoTaskSidebar = document.getElementById("autoTaskSidebar");

// Function to open a specific sidebar
function openSidebar(sidebar) {
    sidebar.style.display = "block";
}

// Add click event listeners to buttons to open respective sidebars
addUsersButton.addEventListener("click", () => openSidebar(addUsersSidebar));
departmentsButton.addEventListener("click", () => openSidebar(departmentsSidebar));
autoTaskButton.addEventListener("click", () => openSidebar(autoTaskSidebar));

// Get references to the sidebar and buttons
const sidebar = document.querySelector('.sidebar');
const buttons = document.querySelectorAll('.sidebar-button');

// Function to open/close the sidebar
function toggleSidebar() {
    sidebar.classList.toggle('sidebar-open');
}

// Add click event listeners to the buttons
buttons.forEach((button) => {
    button.addEventListener('click', toggleSidebar);
});