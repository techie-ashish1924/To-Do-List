

$('#inp').keypress(function(e)
{
    if(e.which == 13)
    {
        inputText = this.value;
        // console.log(e.value);

        $('#list').append(`<li><span>X</span> ${inputText} </li>`)

        this.value = "";
    }

})

/*

this way is not working on dynamically added elements

$('li').click(function()
{
    $(this).toggleClass('complete');
})

$('span').click(function()
{
    $(this).parent().remove();
})

*/


$('ul').on('click','li',function()
{
    $(this).toggleClass('complete');
})

$('#list').on('click','span',function()
{
    $(this).parent().fadeOut(900,function()
    {
        $(this).remove();
    });

    e.stopPropagation(); // stop event bubbling
})