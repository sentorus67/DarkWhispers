const logout = async (event) => {
  Preven
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#logout').addEventListener('click', logout);

});