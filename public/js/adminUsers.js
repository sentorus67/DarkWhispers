  // Function to update the user list
  const updateDataList = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      const source = document.getElementById('data-list').innerHTML;
      const template = Handlebars.compile(source);
      const context = { users: data };
      const html = template(context);
  
      document.getElementById('data-list').innerHTML = html;
    } catch (error) {
      console.error('Error updating data list:', error);
    }
  };