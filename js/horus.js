// JavaScript
var openSidebarId = null; // Variable to track the currently open sidebar

document.getElementById("addUsersButton").addEventListener("click", function () {
    toggleSidebar("addUsersSidebar", "addUsersButton");
});

document.getElementById("departmentsButton").addEventListener("click", function () {
    toggleSidebar("departmentsSidebar", "departmentsButton");
});

document.getElementById("autoTaskButton").addEventListener("click", function () {
    toggleSidebar("autoTaskSidebar", "autoTaskButton");
});

function toggleSidebar(sidebarId, buttonId) {
    if (openSidebarId === sidebarId) {
        // If the clicked sidebar is already open, close it instantly and deselect the button
        closeSidebar(sidebarId, buttonId);
        openSidebarId = null;
    } else {
        // Close the currently open sidebar (if any) instantly and deselect its corresponding button
        if (openSidebarId) {
            closeSidebar(openSidebarId, getButtonId(openSidebarId), true); // Pass true to close instantly
        }

        // Open the clicked sidebar with a transition and select the button (Add the 'selected' class to the clicked button)
        openSidebar(sidebarId, buttonId);
        openSidebarId = sidebarId;
    }
}

function openSidebar(sidebarId, buttonId) {
    var sidebar = document.getElementById(sidebarId);
    var content = sidebar.querySelector(".sidebar-collapsed1-transition"); // Get the content element

    // Hide the content initially
    content.style.display = "none";

    sidebar.style.width = "32%";

    // Select the button
    var selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add("selected");

    // Use setTimeout to show the content after the sidebar transition
    setTimeout(function () {
        content.style.display = "block";
    }, 500); // 300ms is the duration of the CSS transition
}

function closeSidebar(sidebarId, buttonId, instant = false) {
    var sidebar = document.getElementById(sidebarId);
    var content = sidebar.querySelector(".sidebar-collapsed1-transition");

    if (instant) {
        // Close instantly without transition
        sidebar.style.transition = "none";
        sidebar.style.width = "0px";
        content.style.display = "none";
        setTimeout(function () {
            sidebar.style.transition = ""; // Reset transition
        }, 0);
    } else {
        // Close with the transition
        sidebar.style.width = "0px";
        content.style.display = "none";
    }

    // Unselect the button
    var selectedButton = document.getElementById(buttonId);
    selectedButton.classList.remove("selected");
}

function getButtonId(sidebarId) {
    // Map sidebar IDs to corresponding button IDs
    switch (sidebarId) {
        case "addUsersSidebar":
            return "addUsersButton";
        case "departmentsSidebar":
            return "departmentsButton";
        case "autoTaskSidebar":
            return "autoTaskButton";
        default:
            return null;
    }
}


// TASKS PART

// JavaScript
var openSidebarId = null; // Variable to track the currently open sidebar
var openTaskIndex = null; // Variable to track the currently open task row index
var selectedTask = document.getElementById("selectedTask");

// Add event listeners to the task buttons
var taskButtons = document.querySelectorAll(".task-button");
taskButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        toggleTask(index, button.textContent);
    });
});

document.getElementById("tasksButton").addEventListener("click", function () {
    toggleSidebar("tasksSidebar", "tasksButton");
});

function toggleTask(taskIndex, buttonText) {
    if (openTaskIndex === taskIndex) {
        // If the clicked task is already open, close it instantly
        closeTask(taskIndex, true);
        openTaskIndex = null;
    } else {
        // Close the currently open task (if any) instantly
        if (openTaskIndex !== null) {
            closeTask(openTaskIndex, true);
        }

        // Hide all the task buttons
        hideAllTaskButtons();

        // Show the clicked task row
        openTaskRow(taskIndex);

        // Update the selected task text
        updateSelectedTask(buttonText);

        openTaskIndex = taskIndex;
    }
}

function hideAllTaskButtons() {
    taskButtons.forEach(function (button) {
        button.style.display = "none";
    });
}

function openTaskRow(taskIndex) {
    var taskRows = document.querySelectorAll(".task-row");
    taskRows[taskIndex].style.display = "block";
}

function updateSelectedTask(taskText) {
    var selectedTaskSmall = document.querySelector("#selectedTask .tasks-hidden-button-small");
    selectedTaskSmall.textContent = taskText;
    selectedTask.style.display = "block"; // Show the selected task
}

function closeTask(taskIndex, instant = false) {
    var taskRows = document.querySelectorAll(".task-row");
    var taskRow = taskRows[taskIndex];

    if (instant) {
        // Close instantly without transition
        taskRow.style.transition = "none";
        setTimeout(function () {
            taskRow.style.display = "none";
            taskRow.style.transition = ""; // Reset transition
        }, 0);
    } else {
        // Close with the transition
        taskRow.style.display = "none";
    }
}


