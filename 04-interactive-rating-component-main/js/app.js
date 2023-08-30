let ratingPoint = 0;
// let pass = false;

document.addEventListener("click", e =>{
    let value = 0;
    let elementSelected;

    if(e.target.classList.contains("score")){
        elementSelected = e.target
        value = e.target.dataset.id;
        selectedRating(value, elementSelected);
    }

    if(e.target.classList.contains("btn")){
       renderCardThankYou(ratingPoint);
    }
    
})

function selectedRating(value, elementSelected){
    if(elementSelected.dataset.id === value){
        elementSelected.classList.add("active__value");
        deselectedRating(value);
    }
}

function deselectedRating(value){
    const numberValues = document.querySelectorAll(".score");

    numberValues.forEach(element =>{
        if(element.dataset.id !== value){
            element.classList.remove("active__value");
        }
    })

    ratingPoint = value;
}

function renderCardThankYou(points){
    if(ratingPoint !== 0){
        const elementPoint = document.querySelector(".points");

        const cardTahnkYouElement = document.querySelector(".card__thankyou");

        const cardRatingElement = document.querySelector(".card__rating");


        cardTahnkYouElement.classList.toggle("active");
        cardRatingElement.classList.toggle("active");

        elementPoint.textContent = points;
    }
}

