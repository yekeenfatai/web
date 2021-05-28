var text = select("textarea")
var  page = select("#page")
var word = select("#words")
var numW = 0;
var numP = 0;

function select(tag)
{
    return document.querySelector(tag)
}

function write()
{
    var val = text.value
    var num = text.value.length
    
    if (num % 160 != 0)
        {
            word.innerHTML = (num % 160).valueOf(); 
            page.innerHTML = `${parseInt(num/160)}`

        }
    else if(num == 0)
        {
            word.innerHTML = 0;
        }
    else
        {
            page.innerHTML = `${num/160}`
        }
    

}

text.addEventListener("keyup",write)