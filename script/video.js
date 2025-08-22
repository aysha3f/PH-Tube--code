// 1- Fetch, Load and show categories on html

// create loadCatagories
const loadCatagories = () =>{

    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data)=> DisPlayCategories(data.categories))
    .catch((error) => console.log(error));

}
// Create DisPlayCategories
const DisPlayCategories = (data) => {
    // add Data in html
    console.log(data);

};

loadCatagories();


