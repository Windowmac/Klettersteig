const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    handleLogout();
});

const handleLogout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out. Please try again.');
    }
};