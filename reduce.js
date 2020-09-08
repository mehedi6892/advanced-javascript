const nums = [12, 25, 37, 29, 100];
const friends = [
{name:'Rashed', money: 12},
{name:'Kashed', money: 12},
{name:'Pashed', money: 12},
{name:'Aashed', money: 12},
{name:'monia', money: 12},
];

const double = nums.map(num => num*2);
const findo = nums.filter (num => num >2)

// const total = nums.reduce((sum,num) => sum + num,0)
 const total = friends.reduce((sum,friend) => {
    console.log(sum,friend);
    return sum + friend.money;
 }
 ,0);
 


console.log(total);