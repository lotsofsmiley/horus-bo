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
    sidebar.style.width = "32%";

    // Select the button
    var selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add("selected");
}

function closeSidebar(sidebarId, buttonId, instant = false) {
    var sidebar = document.getElementById(sidebarId);

    if (instant) {
        // Close instantly without transition
        sidebar.style.transition = "none";
        sidebar.style.width = "0px";
        setTimeout(function () {
            sidebar.style.transition = ""; // Reset transition
        }, 0);
    } else {
        // Close with the transition
        sidebar.style.width = "0px";
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
var openTask = null; // Variable to track the currently open task row

// Add event listeners to the task buttons
var taskButtons = document.querySelectorAll(".task-button");
taskButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var taskName = button.getAttribute("data-task");
        toggleTask(taskName);
    });
});

document.getElementById("tasksButton").addEventListener("click", function () {
    toggleSidebar("tasksSidebar", "tasksButton");
});

function toggleTask(taskName) {
    if (openTask === taskName) {
        // If the clicked task is already open, close it instantly
        closeTask(taskName, true);
        openTask = null;
    } else {
        // Close the currently open task (if any) instantly
        if (openTask) {
            closeTask(openTask, true);
        }

        // Hide all the task buttons
        hideAllTaskButtons();

        // Open the clicked task with a transition
        openTaskRow(taskName);
        openTask = taskName;
    }
}

function hideAllTaskButtons() {
    taskButtons.forEach(function (button) {
        button.style.display = "none";
    });
}

function openTaskRow(taskName) {
    var taskRow = document.querySelector(".task-row[data-task='" + taskName + "']");
    taskRow.style.display = "block";
}

function closeTask(taskName, instant = false) {
    var taskRow = document.querySelector(".task-row[data-task='" + taskName + "']");

    if (instant) {
        // Close instantly without transition
        taskRow.style.transition = "none";
        taskRow.style.display = "none";
        setTimeout(function () {
            taskRow.style.transition = ""; // Reset transition
        }, 0);
    } else {
        // Close with the transition
        taskRow.style.display = "none";
    }
}


