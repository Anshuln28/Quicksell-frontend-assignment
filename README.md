# Kanban Board Application

## Overview

This Kanban board application, developed using ReactJS, enables users to manage and visualize ticket data seamlessly. Leveraging the [Quicksell API](https://api.quicksell.co/v1/internal/frontend-assignment), it provides an interactive board for organizing tickets by various categories. Users can group, sort, and prioritize tickets efficiently, making it an ideal tool for project and task management. You can view a live version [here]().

## Features

- **Dynamic Data Handling:**
  - Fetches ticket data from the Quicksell API and dynamically displays it on the Kanban board.

- **Flexible Grouping Options:**
  - Group tickets by different parameters such as Status, Assigned User, or Priority level.

- **Sorting Functionality:**
  - Sort tickets by Priority or Title for easy organization and prioritization.

- **Priority Labels:**
  - Tickets are categorized with distinct priority levels, from "Urgent" (4) to "No Priority" (0).

- **Responsive & Stylish Design:**
  - Styled with pure CSS, the application features a clean and responsive interface for both desktop and mobile use.

- **Icon Integration:**
  - React-icons are utilized for a visually intuitive experience.

- **State Persistence:**
  - Utilizes local storage to retain user-selected view options (like grouping and sorting) even after page refreshes, ensuring a consistent user experience.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone 

2. **Navigate to the Project Directory:**

   ```bash
   cd kanban-board-app
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Application:**

   ```bash
   npm start
   ```

5. **Access the Application:**
   - Open your browser and go to `http://localhost:3000` to view the app.
