// const data = [
//   {
//     id: 1,
//     img: "img/1.png",
//     code: "https://github.com/whatthefoobar/50days-of-code/tree/main/1.%20Expanding%20Cards",
//     preview: "http://50projects-project-1.netlify.app",
//   },
//   {
//     id: 2,
//     img: "img/2.PNG",
//     code: "https://github.com/whatthefoobar/50days-of-code/tree/main/2.%20Progress%20step%20bar",
//     preview: "http://50projects-project-2.netlify.app",
//   },
//   {
//     id: 3,
//     img: "img/3.PNG",
//     code: "https://github.com/whatthefoobar/50days-of-code/tree/main/3.%20Hidden%20Search%20Widget",
//     preview: "http://50projects-project-3.netlify.app",
//   },
// ];
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
      </div>;
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
