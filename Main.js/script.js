let sideBarWidth = $('nav').innerWidth();
$('#sideBar').css('left', -sideBarWidth);
$('#open i').click(function () {
    if ($('#sideBar').css('left') == '0px') {
        $('#sideBar').animate({ left: -sideBarWidth }, 500)
        $('#open i').addClass('fa-angles-right').removeClass('fa-angles-left');
    }
    else {
        $('#sideBar').animate({ left: '0px' }, 500)
        $('#open i').addClass('fa-angles-left').removeClass('fa-angles-right');
    }
})

// let displayMeals = document.getElementById('displayMeals');
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
            <a href="#" class="title">${result.meals[i].strCategory}</a>
        </div>
    </div>`
    }
    document.getElementById('displayMeals').innerHTML = container;
}
let catResult = [];

async function getCategories() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    catResult = await response.json();
    // console.log(result);
    showCategories();
}

// getCategories();
function showCategories() {
    // window.alert('hello')
    let container = ``
    for (let i = 0; i < catResult.categories.length; i++) {
        container += `
    <div class="col-md-3 ">
      <div class="meal">
        <img class="image" src="${catResult.categories[i].strCategoryThumb}" alt="Meal Photo">
        <a href="#" class="title">${catResult.categories[i].strCategory}</a>
      </div>
    </div>`
    }
    document.getElementById('displayMeals').innerHTML = container;
}





































































