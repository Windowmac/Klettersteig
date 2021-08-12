const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit_btn');

const createUser = (userName, password) => {
  console.log(userName);
  if (userName.length && password.length) {
    const body = {};
    body.user_name = userName.value;
    body.password = password.value;
  } else {
    window.alert('enter username and password');
    return;
  }

  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => 
    res.json()).then((result) => {
      console.log(result);
    });
  };

const sunsetAndRise = () => {
  console.log(`Sunset time is ${time}. Sunrise time is ${time}`)
};

submitBtn.addEventListener('click', createUser(userName, password));
