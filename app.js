const listWrapper = document.querySelector(".list-wrapper");

const fetchProjects = async () => {
  const result = await fetch("../projects.json").then((response) =>
    response.json()
  );
  return result;
};

const showProjects = async () => {
  const result = await fetchProjects();
  console.log(result.projects);
  displayCards(result.projects);
};
showProjects();

const displayCards = (data) => {
  let output = "";

  data.map((item) => {
    const { id, title, img, code, preview } = item;

    output += `
      <div class="list-item">
         <div class="content">
           <img src=${img} alt=${id} />
           <div class="text">
             <h3>${title}</h3>
            <div class="buttons">
               <button class="code"><a href=${code}>Code</a></button>
               <button class="preview"><a href=${preview}>Code</a></button>
             </div>
          </div>
         </div>
      </div>
    `;
  });
  listWrapper.innerHTML += output;
};

const paginateProjects = async () => {
  const result = await fetchProjects();
  console.log(result.projects.length);
  var items = $(".list-wrapper .list-item");
  const numItems = result.projects.length;
  let perPage = 3;

  items.slice(perPage).hide();

  $("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "<",
    nextText: ">",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    },
  });
};
paginateProjects();
