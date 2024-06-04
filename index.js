
const spinner = document.querySelector('.spinner')
const foodMenu = document.querySelector('.menu__item_')

spinner.style.display = "initial"

fetch("https://betafullstack.pythonanywhere.com/products")
    .then(res => res.json())
    .then((data) => {
        spinner.style.display = "none"

        data.map((foodItem, index) => {
            foodMenu.innerHTML += `

                <div class="menu_item" id=${index}>
                    <div class="menu_item_image">
                        <img src=${foodItem.product_img} alt="menu image">
                    </div>

                    <div class="item_body">
                        <div class="menu_name">
                            <h3>${foodItem.product_name}</h3>
                        </div>

                        <div class="menu_price">
                            <p>$${foodItem.product_price}</p>
                        </div>

                        <div class="menu_button">
                            <button class="Add_food" >Buy</button>
                        </div>
                    </div>
                </div>

            `
            const searchFood = document.getElementById('search');
            const foodItems = document.querySelectorAll('.menu_item');
    
            searchFood.addEventListener('input', function() {
                const searchValue = searchFood.value.toLowerCase();
                
                foodItems.forEach(function(foodItem, index) {
                    const foodName = data[index].product_name.toLowerCase();
                    
                    if (foodName.includes(searchValue)) {
                        foodItem.style.display = "block";
                    } else {
                        foodItem.style.display = "none";
                    }
                });

            })
        })
    })

.catch(error => {
    console.error(error)
})


// time


let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let am_or_pm = document.querySelector('.evmor')
// 
let hours_time = new Date().getHours()
function updateHour() {
    

    if(hours_time >= 0 && hours_time <= 9){
        hours.textContent = '0' + hours_time
    }
    else{
        hours.textContent = hours_time
    }


    // setTimeout(updateHour, 600000);
}

updateHour();

function updateMinute() {
    let minutes_time = new Date().getMinutes() 

    if(minutes_time === 0) {
        updateMinute()
    }

    if(minutes_time >= 0 && minutes_time <= 9){
        minutes.textContent = '0' + minutes_time
    }
    else{
        minutes.textContent = minutes_time;
    }


    // setTimeout(updateMinute, 60000);
}

updateMinute();

function updateSeconds() {
    let secondsTime = new Date().getSeconds(); 

    if(secondsTime === 0) {
        updateMinute()
    }

    if(secondsTime >= 0 && secondsTime <= 9){
        seconds.textContent = '0' + secondsTime;
    }
    else{
        seconds.textContent = secondsTime;
    }


    setTimeout(updateSeconds, 1000);
}


updateSeconds();


if(hours_time >= 0 && hours_time <= 12) {
    am_or_pm.textContent = 'AM'
}else{
    am_or_pm.textContent = 'PM'
}
