const inputQuantity = document.querySelector(".inputquantity")
const btnIncrement = document.querySelector ("#increment")
const btnDecrement = document.querySelector ("#decrement")

let valueByDefault = parseInt (inputQuantity.value)

//Funciones CLICK

btnIncrement.addEventListener("click", () =>{
valueByDefault +=1
inputQuantity.value = valueByDefault

})

btnDecrement.addEventListener("click", () =>{
   if (valueByDefault ===1){
    return
   }
   
    valueByDefault -=1
    inputQuantity.value = valueByDefault
    
    })




    const toggleDescription = document.querySelector (".tittle-description")
    const toggleAdditionalInformation = document.querySelector (".tittle-additional-information")
    const toggleReviews = document.querySelector (".tittle-reviews")


    const contentDescription = document.querySelector (".text-description")
    const contentAdditionalInformation = document.querySelector (".text-additional-information")
    const contentReviews = document.querySelector (".text-reviews")


    toggleDescription.addEventListener("click", () => {
        contentDescription.classList.toogle("hidden");
    });

    toggleAdditionalInformation.addEventListener("click", () => {
    contentAdditionalInformation.classList.toogle("hidden");
    });

    toggleReviews.addEventListener("click", () => {
        contentReviews.classList.toogle("hidden");
    });