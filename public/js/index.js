const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit_btn');


submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(password.value);
  console.log(userName.value);
  const body = {};
  if (userName.value.length && password.value.length) {
    body.username = userName.value;
    body.password = password.value;
  } else {
    window.alert('enter username and password');
    return;
  }

  try {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  } catch (err) {
    throw new Error(err);
  }
});

const getApiInfo = async () => {
  const apiInfo = await fetch('https://ridb.recreation.gov/api/v1/activities?limit=50&offset=0', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        apikey: 'a46a852b-c314-48ad-ad97-a1c064891d4b'
      },
    })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });

  console.log(apiInfo);
};

getApiInfo();
