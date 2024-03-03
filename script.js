links = document.querySelectorAll(".nav-link")


for (let i = 0; i < links.length; i++)
{
    links[i].addEventListener("click", function() {

        for (let i = 0; i < links.length; i++)
        {
            links[i].classList.remove("active");
        }
        this.classList.add("active");
    });
}