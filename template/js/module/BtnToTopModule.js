export default function BtnToTopModule() {
    const btnToTop = document.querySelector(".backToTop");

    if (btnToTop) {
        btnToTop.addEventListener("click", function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }
    $(document).ready(function() {
        if (btnToTop) {
            btnToTop.addEventListener("click", function() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            })
        }
    });
}