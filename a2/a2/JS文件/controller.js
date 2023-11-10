var websiteControllerMethods = {
    goToPage: function (page) {
        window.location.href = "/Home/" + page + ".cshtml";
    },
};

// Export controller methods
window.websiteControllerMethods = websiteControllerMethods;
