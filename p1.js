// PROBLEM-1


// In this the function took const number then it do multiplication, summation,divison, minus respectevly. it also has a if else function to check the positive number. in term of negetive input it will show a string that "please input a positive number". Also it checks for number else it will show "Please!! Enter a number"
function mindGame(pnumber){
    if(typeof (pnumber) !== 'number'){
        
        return "Please!! Enter a number"

    }
    else {
        if(pnumber >= 0){
            mul =pnumber*3;
            sum = mul +10;
            div = sum/2;
            min = div - 5;
            return min;
    
        }
        
    
        else{
            return "Please input positive number"
            
        }

    }
    

}
const pnumber = 5;
const result = mindGame(pnumber);
console.log(result);



// PROBLEM-2


// here this function take a string and check the length of it by lngt. Then it checks the remainder. If it has remainder it will print odd else even
function evenOdd(str){
    if(typeof(str) !== 'string') {
        return "Enter string, pleaese!!!"
        
      } else{

        

    lngt = str.length;
    const remainder = lngt % 2;
    if(remainder === 0){
        return "even"
        
    }
    else{
        return "odd"
       
    }

      }



}
const str = "batch7";
const evenOrOdd = evenOdd(str);
console.log(evenOrOdd);


// PROBLEM-3


// here  firstly,the input number is dedudcted from 7. After that if it is less than 7 than it will return the first number otherwise it will double the input number
function isLGSeven(nmbr){
    
    if(typeof (nmbr) !== 'number'){
        
        return "Please!! Enter a number"

    }
    else {

        fst= nmbr-7

        if(fst<7){
            return fst;
    
        }
        else{
            return nmbr*2
        }

    }
   
}
const nmbr = 6;
const lessOrgreater = isLGSeven(nmbr);
console.log(lessOrgreater);

//Problem 4

//here we check the each element of the array. After that elements which are less than zero are kept into a new array .Then we return the length of it. 


const arr =[ 2, -5, -7, -13 ];

function findingBadData(arr){
    if(typeof(arr) !== 'object') {
        return "Enter valid input"
      } 
      
      else{
        
    let negatives = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negatives.push(arr[i]);
        }
    }
    return negatives.length;



      }



    

}

const fbd = findingBadData(arr);
console.log(fbd);


// Problem 5

// here gems are taken first. Then the diamond quantity calculated. After that it checks if it is greater than 2k or not.If  yes then return the quantity after calculation. elsewise return the exact ammount.

function gemsToDiamond(first, second, third){

    if(typeof(first) !== 'number' && typeof(second) !== 'number' && typeof(third) !== 'number') {
        return ;
      }

    else{
        
    diamondQuantity = (first*21)+(second*32) +(third*43)
    if(diamondQuantity >2000){
        return diamondQuantity-2000
    }
    else{
        return diamondQuantity
    }



    }

}

const gd = gemsToDiamond(  100, 5, 1);
console.log(gd);


