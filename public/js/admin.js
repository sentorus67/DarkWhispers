
  document.addEventListener("DOMContentLoaded", function() {
    const dataForm = document.getElementById("data-submit-form");
    const dataList = document.getElementById("data-list");

    // Handle form submission for create and update
    dataForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const formData = new FormData(dataForm);
      const url = "{{#if editing}}/data/{{id}}{{/if}}/{{#if editing}}update{{else}}create{{/if}}";
      const method = "{{#if editing}}PUT{{else}}POST{{/if}}";

      fetch(url, {
        method: method,
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Update data list or handle success message
        console.log("Data saved successfully:", data);
        // Clear form and reload data list
        dataForm.reset();
        // Call function to fetch and update data list
        updateDataList();
      })
      .catch(error => {
        console.error("Error saving data:", error);
        // Display error message to user
      });
    });

    // Handle edit button click
    dataList.addEventListener("click", function(event) {
      if (event.target.classList.contains("edit-btn")) {
        const dataId = event.target.dataset.id;
        // Call function to fetch data by id and populate form
        fetchData(dataId);
      } else if (event.target.classList.contains("delete-btn")) {
        const dataId = event.target.dataset.id;
        // Call function to delete data by id and update data list
        deleteData(dataId);
      }
    });

    // Function to fetch data by id (for editing)
    function fetchData(id) {
      fetch(`/data/${id}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("data-id").value = data.id;
        document.getElementById("data-name").value = data.name;
        // Set values for other form fields based on data structure
        document.getElementById("editing").value = true; // Set editing flag
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        // Display error message to user
      });
    }

    // Function to delete data by id
    function deleteData(id) {
      fetch(`/data/${id}`, {
        method: "DELETE"
      })
      .then(response => {
        // Update data list or handle success message
        console.log("Data deleted successfully");
        updateDataList();
      })
      .catch(error => {
        console.error("Error deleting data:", error);
        // Display error message to user
      });
    }

    // Function to update data list (assuming you have a separate function to fetch data)
    function updateDataList() {
      // Fetch data and populate data list
      // This function should be called on page load and after data is saved/deleted
    }

  });