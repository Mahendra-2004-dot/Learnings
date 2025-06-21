console.warn('this is warning');
console.error('this is error');
//Data Types
const name='mahendra';
const age=21;
const itscomplete='true';
const x=null;
const y=undefined;


 console.log(typeof name);
 console.log(typeof age);
 console.log(typeof itscomplete);
 console.log(typeof x);
 console.log(typeof y);
 
 const Name='mahi';
 const Age=22;
 console.log(' my name is'+  name  + 'and iam'+ age);
 console.log(`my name is ${Name} and iam${Age}`);
 
 const m='mahendra';
 console.log(m.length);
console.log(m.toUpperCase());
 console.log(m.substring(0,4).toUpperCase());
 console.log(m.split(''));
 //ARRAY
 const games=['cricket','volleyball','kabbadi'];
 games.push='running'
 games[3]='Swimmimg'

 console.log(games);
 
 const person={
    firstName:'Mahendra',
    lastName:'gokada',
    Aga:21,
    hobbies:['playing','reading','writting'],
    adrees:{
        villag:'pedagadi',
        mandal:'pendurthi',
        dist:'vishaka',
    }

 }
 console.log(person);
console.log(person.firstName+ person.lastName);

const todo=[{

    id:1,
text:'Boss is comming',
radius:'true',},
{
id:2,
text:'playing games',
radius:'true',},
{
id:3,

text:'prparing for exam',
radius:'false'
}]; 
console.log(todo);

// For LOOP
for (let i=0;i<=10;i++) {
console.log(`For looop numbers:${i}`);
}
//while loop
let i=10;
while (i<10);
console.log(`while loop numbers:${i}`);

const X=30;
if(X===10){
    console.log('x is 10');
} else{
    console.log('X is Not 10');
}
