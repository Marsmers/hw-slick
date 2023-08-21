
$('.content').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});



const getId = (idName) => {return document.getElementById(idName);}
const getClass = (className) => {return document.querySelector("." + className);};

const people = JSON.parse(localStorage.getItem('people')) || []; // людю які пройшли тести (сюди пушу обєкт "person" з данними)

// слайд 1
const submit1 = getClass('submitSlide1');
const email = getClass('email');
const password = getClass('password');
submit1.addEventListener('click', () => {
    submit1.style.background = 'green';
});
// слайд 2
const submit2 = getClass('submitSlide2');
const birthday = getClass('birthday');
const name = getClass('name');
const gender = getClass('gender');
submit2.addEventListener('click', () => {
    submit2.style.background = 'green';
})
// слайд 3
const submit3 = getClass('submitSlide3');
const zodiac = getClass('zodiac');
const weight = getClass('weight');
const growth = getClass('growth');
const totalWeight = getClass('totalWeight');
const boysAndGirls = getClass('boysAndGirls');
submit3.addEventListener('click', () => {
    const newPerson = {}; 
    newPerson.email = email.value;
    newPerson.password = password.value;
    newPerson.name = name.value;
    newPerson.birthday = birthday.value;
    newPerson.zodiac = zodiac.value;
    newPerson.gender = gender.value;
    newPerson.weight = weight.value;
    newPerson.growth = growth.value;
    submit3.style.background = 'green';

// локальне сховище

    people.push(newPerson);
    localStorage.setItem('people', JSON.stringify(people));
});
console.log(people)




const getSumWeight = people.reduce((sum, person) => {
  return sum + Number(person.weight || 0);
}, 0);

totalWeight.textContent = `Загальна вага користувачів ${getSumWeight}`;





const getGenderCount = people.reduce(
  (acc, el) => {
    if (el.gender) {
      if(el.gender === 'male') {

        return {...acc, male: +1}
      } else {
         return {...acc, female: +1 }
      }
    }
    return acc;
  },
  { male: 0, female: 0 }
);

boysAndGirls.textContent = `Чоловіків: ${getGenderCount.male}, Жінок: ${getGenderCount.female}`;

