function incr_decr(flag){
    let c = parseInt(document.getElementById('counter').textContent, 10);
    if(flag=="add")
    {
        c = c + 1;
        document.getElementById('counter').textContent = c;
    }
    else if(flag=="sub")
    {
        c = c - 1;
        document.getElementById('counter').textContent = c;
    }
    else{
     document.getElementById('counter').textContent = 0;
    }
}