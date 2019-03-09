// EMAIL VALIDATION + GAME STARTER
const submitBtn = document.querySelector('.submit-btn');

const validationAlert = document.createElement('div');
validationAlert.classList.add('alert');
validationAlert.classList.add('my-red-alert');
validationAlert.classList.add('alert-danger');
validationAlert.innerText = 'Proszę wprowadzić prawidłowy adres email!';



submitBtn.addEventListener('click', () => {
   event.preventDefault();

   const emailInput = document.querySelector('.subscribe-input');
   const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   if (!filter.test(emailInput.value)) {
       const formLead = document.querySelector('.form-info');
       formLead.appendChild(validationAlert);
       setTimeout(function () {
           validationAlert.parentNode.removeChild(validationAlert);
       }, 3000);
       emailInput.focus;
       return false;

   } else(
       renderDogTheCatcherGame());
});
// smoothly window scroll function
function scrollIt(element) {
   window.scrollTo({
     'behavior': 'smooth',
     'left': 0,
     'top': element.offsetTop
   });
 }
//
const nav1 = document.querySelector('#nav1');
const nav2 = document.querySelector('#nav2');
const nav3 = document.querySelector('#nav3');
console.log(nav1);
console.log(nav2);
console.log(nav3);

const aboutUs = document.querySelector('#about-us');
const info = document.querySelector('#info');
const contact = document.querySelector('#footer');
const form = document.querySelector('#form');
const header = document.querySelector('#header');

console.log(aboutUs);
console.log(info);
console.log(contact);
nav1.addEventListener('click', ()=>{

scrollIt(aboutUs);
});

nav2.addEventListener('click', ()=>{

   scrollIt(info);
  });

nav3.addEventListener('click', ()=>{

   scrollIt(contact);
  });

nav4.addEventListener('click', ()=>{

   scrollIt(form);
  });
  nav5.addEventListener('click', ()=>{

   scrollIt(aboutUs);
  });
  nav6.addEventListener('click', ()=>{

   scrollIt(header);
  });


function renderDogTheCatcherGame() {
   const gameContainer = document.querySelector('#game');
   gameContainer.classList.remove('hidden');
   gameContainer.classList.add('game-container-show');

   scrollIt(gameContainer);
}
   // setTimeout(function () {

   //     function findPos(obj) {
   //         var curtop = 0;
   //         if (obj.offsetParent) {
   //             do {
   //                 curtop += obj.offsetTop;
   //             } while (obj = obj.offsetParent);
   //         return [curtop];
   //         }
   //     }
   // //     window.scroll(0,findPos(gameContainer));
   //   }, 500);