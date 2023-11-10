window.onload = function () {
    var searchForm = document.querySelector('form[action="/Home/destinations"]');
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var query = this.querySelector('input[name="query"]').value;
        if (query === "1") {
            window.location.href = "/Views/Home/destinations";
        } else if (query === "2") {
            window.location.href = "/Views/Home/second";
        } else if (query === "3") {
            window.location.href = "/Views/Home/third";
        } else {
            alert("No results found!");
        }
    });

    var paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            paginationLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
            var pageUrl = this.getAttribute('href');
            window.location.href = pageUrl;
        });
    });
}