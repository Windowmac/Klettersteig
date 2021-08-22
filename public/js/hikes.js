document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

const submitPic = document.getElementById('submit_pic');
const hikePic = document.getElementById('hike_pic');
const hikeId = submitPic.dataset.hike_id;

const addHikePic = async (pic) => {
  const body = {
    data: pic
  }
  console.log(body)
  const response = await fetch(`/api/hikes/${hikeId}/add-pic`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json());

  if(response > 0){
    console.log(`image #${response} created`);
  }
}

submitPic.addEventListener('click', () => {
  addHikePic(hikePic.value);
})