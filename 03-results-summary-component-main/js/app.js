const API_URL = "data.json";

/** Método fetch donde se devuelve un objeto Promise*/
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
        renderItemsFeatures(data);
    });

function avgScores(dataIn) {
    const scores = [];
    let sumOfScores = 0;
    let average = 0;

    dataIn.forEach((stat) => {
        const { score } = stat;
        scores.push(score);
    });

    sumOfScores = scores.reduce((a, n) => (a += n), 0);
    average = sumOfScores / scores.length;

    return average.toFixed();
}


function renderItemsFeatures(dataIn) {
    const fragment = document.createDocumentFragment();
    const cardStatsElement = document.getElementById("card-stats");
    const avgElement = document.querySelector(".avg");

    dataIn.forEach((item) => {
        const { category, score } = item;

        const statElement = document.createElement("div");
        const itemElement = document.createElement("div");
        const iconCategoryElement = document.createElement("img");
        const nameItemElement = document.createElement("span");
        const statScoreElement = document.createElement("div");
        const scoreElement = document.createElement("span");
        const limitElement = document.createElement("span");

        statElement.classList.add("stat", `stat__${category.toLowerCase()}`);

        itemElement.classList.add("item");

        statElement.append(itemElement);

        iconCategoryElement.src = `assets/images/icon-${category.toLowerCase()}.svg`;
        iconCategoryElement.alt = `${category} icon`;

        itemElement.append(iconCategoryElement);

        nameItemElement.setAttribute("class", "name__item");
        nameItemElement.textContent = `${category}`;

        itemElement.append(nameItemElement);

        statScoreElement.setAttribute("class", "stat__points");

        scoreElement.setAttribute("class", "score");

        scoreElement.textContent = score;

        limitElement.setAttribute("class", "limit");

        limitElement.textContent = "/ 100";

        statScoreElement.append(scoreElement);
        statScoreElement.append(limitElement);

        statElement.append(statScoreElement);

        fragment.append(statElement);
    });

    cardStatsElement.append(fragment);
    avgElement.textContent = avgScores(dataIn);
}
