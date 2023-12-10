const lightbulbSwitch = document.querySelector('#lightbulb-switch');
const lightbulbImage = document.querySelector('#lightbulb-image');

let isLightbulbOn = false;

lightbulbSwitch.addEventListener('click', function(){
    if (isLightbulbOn) {
        lightbulbImage.src = 'off.png';
        isLightbulbOn = false;
    } else {
        isLightbulbOn = true;
        lightbulbImage.src = 'on.png';
    }
    console.log(isLightbulbOn);
})