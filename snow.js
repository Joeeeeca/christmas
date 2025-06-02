const numberOfSnowflakes = 50;

for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div')
;
snowflake.classList.add('snowflake');


//Set a random starting position for each snowflake
snowflake.style.left = Math.random()* 100 + '%';
snowflake.style.animationDuration = Math.random() * 5 + 's'; //Randomize Speed
snowflake.style.animationDelay = Math.random() * 5 + 's'; //Randomize Delay

document.body.appendChild(snowflake); //Add the snowflake to the page
}