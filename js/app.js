const allItems = () => {
      fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
      .then(res => res.json())
      .then(data => displayData(data.data));
}


const musicItems = () => {
      fetch(`https://openapi.programming-hero.com/api/videos/category/1001`)
      .then(res => res.json())
      .then(data => displayData(data.data));
}

const comedyItems = () => {
      fetch(`https://openapi.programming-hero.com/api/videos/category/1003`)
      .then(res => res.json())
      .then(data => displayData(data.data));
}

const drawingItems = () => {
      fetch(`https://openapi.programming-hero.com/api/videos/category/1005`)
      .then(res => res.json())
      .then(data => displayData(data.data));
}


const displayData = (data) => {
      const displayItems = document.getElementById('single-item');
      data.forEach((item) => {
            console.log(item);
            const card = document.createElement('div');
            card.classList.add('div');
            card.innerHTML = `           
            <img id="thumbnail" class="img-fluid" src="${item?.thumbnail}" alt="">
            <div id="lower" class="d-flex justify-content-center align-items-start py-2">
                  <div class="p-1">
                  <img id="profile-image" src="${item?.authors[0]?.profile_picture}" alt="">
                  </div>
                  <div id="details" class="col-10 px-2">
                        <h4>${item?.title}</h4>
                        <div id="profile-info">
                              <p>${item?.authors[0]?.profile_name}</p>
                        </div>
                        <p>${item?.others.views} views</p>
                  </div>
            </div>
            `;

            displayItems.appendChild(card);
      });
}