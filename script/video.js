// 1- Fetch, Load and show categories on html

// create loadCatagories
const loadCatagories = () =>{

    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data)=> DisPlayCategories(data.categories))
    .catch((error) => console.log(error));
};

// {
//     "category_id": "1001",
//     "category": "Music"
// }
// Create DisPlayCategories
const DisPlayCategories = (categories) => {
 const categoryContainer = document.getElementById("categories");
 
    categories.forEach( (item) => {
  console.log(item);
  // create a button

  const button = document.createElement("button");
  button.classList = "btn";
  button.innerText = item.category;

  // add button to catagory container
  categoryContainer.append(button);
 });

};

loadCatagories();


