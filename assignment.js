//Problem:1  radianToDegree function

function radianToDegree(Radian){
    if(typeof Radian !== "number"){
        console.log('Enter Number Value Only');
    }
    const pi = Math.PI;
    const Degree = Radian * (180/pi);
    return Degree.toFixed(2)
}

const Radian = 10;
const result = radianToDegree(Radian);
console.log(result);



// Problem:2  isJavaScriptFile  Problem

function isJavaScriptFile(fileName){
    if(typeof fileName === "string"){
        if(fileName.endsWith('.js')){
            return true;
        }else{
            return false;
        }
    }else{
        return 'Enter String Value Only';
    }
}
const fileName='image.jpg.js';
const fileType = isJavaScriptFile(fileName);
console.log(fileType);


//Problem 3: oilPrice programme;

function oilPrice(diesel , petrol , octane){

    if(typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number'){
        console.log("Enter Number Value only");
    } else
    {
    const oneLiterDieselPrice = 114;
    const oneLiterPetrolPrice = 130;
    const oneLiterOctanePrice = 135;
    const dieselPrice = diesel * oneLiterDieselPrice ;
    const petrolPrice = petrol * oneLiterPetrolPrice;
    const octanePrice = octane * oneLiterOctanePrice ;
    const total = dieselPrice + petrolPrice + octanePrice ;
    return total;
    }
}

const totalOilCost = oilPrice(1,2,3);
console.log(totalOilCost);

//Problem 4: publicBusFare programme

function publicBusFare(passenger){
    if(typeof passenger !== 'number'){
        console.log("Enter Number Value Only");
    }else{
        const remainingAfterUsingBus = passenger % 50;
        const remainingAfterUsingMicro = remainingAfterUsingBus % 11;
        const publicBusTiketPrice = remainingAfterUsingMicro * 250;
        return publicBusTiketPrice
    }
    
}
const passenger = 365;
const tiketPrice = publicBusFare(passenger);
console.log(tiketPrice);


//Problem 5: isBestFriend function

function isBestFriend(friends){
    const obj1 = friends[0];
    const obj2 = friends[1];
    // Validation
    if((typeof obj1.name !== 'string') || (typeof obj1.friend !== 'string') || (typeof obj2.name !== 'string') || (typeof obj2.friend !== 'string')){
        return 'Enter a valid Input';
    }
    //condition Check
    if((obj1['name'] === obj2['friend']) && (obj1['friend'] === obj2['name'] )){
        return true;
    }else{
        return false;
    }
}

const friends = [
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
]

const BestFriendCheck = isBestFriend(friends);
console.log(BestFriendCheck);