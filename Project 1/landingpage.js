function namevalidate()
{
    var inp1=document.getElementById('inp1').value
    const regex=/^[A-Z a-z]{3,}$/
    const p=document.getElementById('p1')
    if(regex.test(inp1))
        {
            p.innerHTML="Valid Name"
            p.style.color="black"
        }  
    else if(inp1==null)
        {
            p.innerHTML="Invalid Name"
            p.style.color="red"
        }
    else
    {
        p.innerHTML="Invalid Name"
        p.style.color="red"
    }
}

function passvalidate()
{
    var inp2=document.getElementById('inp2').value
    const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const p1=document.getElementById('p2')
    if(regex.test(inp2))
        {
            p1.innerHTML="Valid Password"
            p1.style.color="black"
        }  
    else if(inp1==null)
        {
            p1.innerHTML="Invalid Password"
            p1.style.color="red"
        }
    else
    {
        p1.innerHTML="Invalid Password"
        p1.style.color="red"
    }
}
function submit()
{
    
    window.alert("Username and Password Matched,Welcome User")
    const m=document.getElementById('div1')
     const l=document.getElementById('blur')
     m.style.display="none"
     l.style.display="none"
}

function sign(){
     const x=document.getElementById('div1')
     const y=document.getElementById('blur')
     x.style.display="block"
     y.style.display="block"
}

function feedback()
{
    const x=document.getElementById('Feedback')
    const y=document.getElementById('blur')
    x.style.display="block"
    y.style.display="block"
}

function sub()
{
    window.alert("Your FeedBack Updated,Thank You Sir")
    const m=document.getElementById('Feedback')
    const l=document.getElementById('blur')
    m.style.display="none"
    l.style.display="none"
}