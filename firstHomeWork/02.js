function hero(bullets, dragons){
    result = dragons*2;
    if(result <= bullets){
        return true;
    }else{
        return false;
    }
}