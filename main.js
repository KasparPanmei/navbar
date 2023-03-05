const togglebtn = document.getElementsByClassName('toggle-btn')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]


togglebtn.addEventListener('click', () => 
{
    navbarlinks.classList.toggle('active')
})

// function switchtheme()
// {
//     const theme = document.getElementById("change-theme").value;
//                     document.getElementsByTagName("meta")[0].content = light;

// }