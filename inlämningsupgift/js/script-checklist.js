const checkboxes = document.querySelectorAll(".ingrediants input");

function checkIngredient(event) {
    const ingredient = event.target.nextElementSibling;

    if (event.target.checked) {
        ingredient.style.opacity = "0.5";
    } else {
        ingredient.style.opacity = "1";
    }
}

checkboxes.forEach(function(checkbox) {
checkbox.addEventListener("change", checkIngredient);
});