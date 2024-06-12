document.addEventListener("DOMContentLoaded", function() {
  const dataForm = document.getElementById("data-submit-form");
  const dataList = document.getElementById("data-list");

  // Store initial form state in sessionStorage
  const formInitialState = dataForm.innerHTML;
  sessionStorage.setItem('formInitialState', formInitialState);

  // Check if the form should be reset
  if (sessionStorage.getItem('resetForm') === 'true') {
      dataForm.innerHTML = sessionStorage.getItem('formInitialState');
      sessionStorage.setItem('resetForm', 'false');
  }

  // Handle form submission for create and update
  dataForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const formData = new FormData(dataForm);
      const url = dataForm.dataset.editing === "true" ? `/data/${formData.get('id')}/update` : '/data/create';
      const method = dataForm.dataset.editing === "true" ? "PUT" : "POST";

      fetch(url, {
          method: method,
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          console.log("Data saved successfully:", data);
          dataForm.reset();
          sessionStorage.setItem('resetForm', 'false'); // Set flag to reset form
          updateDataList();
      })
      .catch(error => {
          console.error("Error saving data:", error);
      });
  });

  // Function to update data list
  function updateDataList() {
      const dataList = document.getElementById("data-list"); // Retrieve dataList again here
      if (!dataList) {
          console.error("Element with ID 'data-list' not found.");
          return;
      }
      
      fetch('/api/admin/users')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          dataList.innerHTML = ''; // Clear previous data
          data.forEach(item => {
              dataList.innerHTML += `<li>${item.name} - ${item.email}
                  <button class="edit-btn" data-id="${item.id}">Edit</button>
                  <button class="delete-btn" data-id="${item.id}">Delete</button>
              </li>`;
          });
      })
      .catch(error => {
          console.error('Error updating data list:', error);
      });
  }

  // Initial data list load
  updateDataList();
});
