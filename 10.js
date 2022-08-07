function makeNegative(num) {
    if(Math.sign(num) == 1){
        let sum = num - (num*2);
        return sum;
    }else if(Math.sign(num) == -1){
        return num;
    }else if(num == 0){
        return 0;
    }else{
        return "";
    }


}