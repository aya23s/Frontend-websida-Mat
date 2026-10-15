const foodBoxes = document.querySelectorAll(".box");

function handleFoodClick(event) {
    const box = event.currentTarget;

    box.classList.add("clicked");

    const page = box.dataset.page;

    window.location.href = page;
}

foodBoxes.forEach(function(box) {
    box.addEventListener("click", handleFoodClick);
});

document.body.insertAdjacentHTML("afterbegin", `
    <header>
        <a href="../html/index.html" class="logo">Aya's Kitchen</a>

        <nav class="nav-menu">
            <a href="../html/index.html#menu">Home</a>
            <a href="../html/index.html#meals">Meals</a>
            <a href="../html/index.html#desserts">Desserts</a>
        </nav>
    </header>
`);

document.body.insertAdjacentHTML("beforeend", `
    <footer id="info">
        <h4>Ending information:</h4>
        <p>Website Coder: Aya Sheikhmous
        <p>Website Designer: Aya Sheikhmous</p>
        <p>Tools used for assistance: ChatGPT</p>
        <p> Aya's Kitchen is a website created to explore and showcase the rich flavors and traditions of Middle Eastern cuisine. The website was designed and coded by Aya Sheikhmous as a project to present traditional dishes and desserts in an informative and visually engaging way. </p>
        <p>Made for personal use only.</p>
    </footer>
`);
