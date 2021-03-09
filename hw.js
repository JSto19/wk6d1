//HWP1
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, name){
    //Your code goes here
    var animal;
    for (animal in name){
        if (str.includes(name[animal])){
            console.log(`This...${name[animals]}`);
        } else{
            console.log(`Not this ...${name[animal]}`);
        }
    }
}

console.log(findWords(dog_string, dog_names))

// HWP2
Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    var a;
    for (a in arr){
        if (a % 2 ==0){
            arr.splice(a, 1, 'even index')
        }
    }
    return console.log(arr)
}

console.log(replaceEvens(arr))
