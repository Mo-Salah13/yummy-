let sideBarWidth = $('nav').innerWidth();
$('#sideBar').css('left', -sideBarWidth);
$('#open i').click(function () {
    if ($('#sideBar').css('left') == '0px') {
        $('#sideBar').animate({ left: -sideBarWidth }, 500)
        // $('nav a').slideDown(1000)
        $('#open i').addClass('fa-angles-right').removeClass('fa-angles-left');
    }
    else {
        $('#sideBar').animate({ left: '0px' }, 500)
        // $('nav a').slideUp(1000)
        $('#open i').addClass('fa-angles-left').removeClass('fa-angles-right');
    }
})
// ----------------------------------------------------------//
// *--Home Meals--* //
let displayMeals = document.getElementById('displayMeals');
let result = [];
async function homeMeal() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    result = await response.json();
    // console.log(result);
    showHomeMeal()
}
homeMeal();
function showHomeMeal() {
    let container = ``
    for (let i = 0; i < result.meals.length; i++) {
        container += `
        <div class="col-md-3 ">
        <div class="meal">
            <img class="image" src="${result.meals[i].strMealThumb}" alt="Meal Photo">
            <a href="#" onclick="getMealDetails()" class="title">${result.meals[i].strCategory}</a>
        </div>
    </div>`
    }
    displayMeals.innerHTML = container;
}
// ----------------------------------------------------------//
// *--Categories--* //
let cateResult = [];
async function getCategories() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    cateResult = await response.json();
    // console.log(cateResult);
    showCategories();
}
function showCategories() {
    let container = ``
    for (let i = 0; i < cateResult.categories.length; i++) {
        container += `
    <div class="col-md-3 ">
      <div class="meal">
        <img class="image" src="${cateResult.categories[i].strCategoryThumb}" alt="Meal Photo">
        <a href="#" class="title">${cateResult.categories[i].strCategory}</a>
      </div>
    </div>`
    }
    displayMeals.innerHTML = container;
}
// ----------------------------------------------------------//
// *--Area--* //
let areaList = [];
async function getAreas() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    areaList = await response.json();
    // console.log(areaList);
    showArea()
}
function showArea() {
    let container = ``;
    for (let i = 0; i < areaList.meals.length; i++) {
        container += `
        <div class="col-md-2 ">
        <div class="meal">
            <img class="image bg-dark-emphases" src="images/location-13-lg.png" alt="area Photo">
            <a href="#" onclick="" class="title">${areaList.meals[i].strArea}</a>
        </div>
    </div>`
    }
    displayMeals.innerHTML = container;
}
// ----------------------------------------------------------//
// *--Ingredients--* //
let ingredientList = [];
async function getIngredient() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    ingredientList = await response.json();
    // console.log(ingredientList);
    showIngredients();
}
function showIngredients() {
    let container = ``
    for (let i = 0; i < 20; i++) {
        container += `
        <div class="col-md-3 Ingredients">
        <div class=" text-center pt-1">
            <i class="fa-solid fa-bowl-rice d-block text-warning-emphasis fa-5x"></i>
            <a href="#" onclick="" class="text-decoration-none text-white  fw-bold fa-2x">${ingredientList.meals[i].strIngredient}</a>
            <p class="text-white-50  fst-italic">${ingredientList.meals[i].strDescription}</p>
        </div>
    </div>
        `
    }
    displayMeals.innerHTML = container;
}
// *---Contact Us---*//
function showForm() {
    let container = `
    <div class="col-md-6 mx-auto ">
    <h1 class="text-center"> Your Honor</h1>
    <form>
        <div class="mb-3">
            <label for="exampleInputName" class="form-label">Your Name</label>
            <input required  type="text" placeholder="Ex.Adam" class="form-control " id="exampleInputName">
          </div>
          <div class="mb-3">
            <label for="exampleInputPhone" class="form-label">Your Phone</label>
            <input required  type="number" placeholder="+00" class="form-control" id="exampleInputPhone">
          </div>
          <div class="mb-3">
            <label for="exampleInputAge" class="form-label">Your Age</label>
            <input required  type="number" placeholder="" class="form-control" id="exampleInputAge">
          </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input required  type="email" placeholder="Ex.Adam@gmail.com" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input required  type="password" placeholder="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Re-Password</label>
            <input required  type="password" placeholder="Re-password" class="form-control" id="exampleInputPassword2">
          </div>
        <button type="submit" class="btn btn-warning">Submit</button>
      </form>
</div>`
    displayMeals.innerHTML = container;
}
// ----------------------------------------------------------//
// *-----search by Name fun-----*//
// let nameList = [];
// let mealByNameInput = document.querySelector('#mealByName');
// let searchResult =document.querySelector('#searchResult');

// async function getMealByName() {
//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
//     nameList = await response.json();
//     showMealName();
// }
// function showMealName() {
//     let container = ``
//     for (let i = 0; i < nameList.length; i++) {
//         container += `
//         <div class="col-md-3 ">
//       <div class="meal">
//         <img class="image" src="${nameList.meals[i].strMealThumb}" alt="Meal Photo">
//         <a href="#" class="title">${nameList.meals[i].strMeal}</a>
//       </div>
//     </div>
//         `
//     }
//     searchResult.innerHTML=container;
// }


// ----------------------------------------------------------//
// *-----search by first letter fun-----*//
// async function getMealByFirstletter
// *--MealDetails--* //
let MealDetails = [];
async function getMealDetails() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`);
    MealDetails = await response.json();
    // console.log(MealDetails);
    showMealDetails();
}
function showMealDetails() {
    let container = ``
    for (let i = 0; i < MealDetails.meals.length ; i++) {
        container += `
        <div class="col-md-4 ">
        <img class="w-100 rounded-4" src="${MealDetails.meals[i].strMealThumb}" alt="meal Image">
        <p class="fw-bold fa-2x mb-3"> ${MealDetails.meals[i].strMeal}</p>
    </div>
    <div class="col-md-8  ">
        <h4> ⊱ Instructions ⊰ </h4>
        <p class="text-white fst-italic">${MealDetails.meals[i].strInstructions}</p>
        <h4> ⊱ Area ⊰: ${MealDetails.meals[i].strArea}  </h4>
        <h4> ⊱ Category ⊰: ${MealDetails.meals[i].strCategory}  </h4>
        <h4> ⊱ Recipes ⊰:  </h4>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure1} ${MealDetails.meals[i].strIngredient1}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure2} ${MealDetails.meals[i].strIngredient2}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure3} ${MealDetails.meals[i].strIngredient3}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure4} ${MealDetails.meals[i].strIngredient4}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure5} ${MealDetails.meals[i].strIngredient5}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure6} ${MealDetails.meals[i].strIngredient6}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure7} ${MealDetails.meals[i].strIngredient7}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure8} ${MealDetails.meals[i].strIngredient8}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure9} ${MealDetails.meals[i].strIngredient9}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure10} ${MealDetails.meals[i].strIngredient10}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure11} ${MealDetails.meals[i].strIngredient11}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure12} ${MealDetails.meals[i].strIngredient12}</span>
        <span class="btn  m-2 bg-info-subtle">${MealDetails.meals[i].strMeasure13} ${MealDetails.meals[i].strIngredient13}</span>
        <h4> ⊱ Tags ⊰:  </h4>
        <span class="btn m-2 bg-danger-subtle">${MealDetails.meals[i].strTags}</span>
        <a href="${MealDetails.meals[i].strSource}" class=" w-25 btn d-block mt-2  bg-success text-white">Source</a>
        <a href="${MealDetails.meals[i].strYoutube}" class=" w-25 btn d-block mt-2  bg-danger text-white">YouTube</a>
    </div>`
    }
    displayMeals.innerHTML = container;
}




























































