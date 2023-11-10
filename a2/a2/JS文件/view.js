var websiteViewMethods = {
    init: function () {
        var paginationLinks = document.querySelectorAll('.pagination a');
        paginationLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                var page = this.getAttribute('href').replace(".cshtml", "");
                websiteControllerMethods.goToPage(page);
            });
        });
    },
};

// Export view methods
window.websiteViewMethods = websiteViewMethods;

// Initialize view
window.onload = websiteViewMethods.init;
