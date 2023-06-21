function game()
{
    const val=document.getElementById("guess").value;
    const rand="Hi";
    if(val==rand)
    {
        alert("Had luck You Win dude!!");
    }
    else{
        alert("You suck ,you loser!!!");
    }
}