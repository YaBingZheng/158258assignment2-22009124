javascript
// Model
var websiteModel = {
    query: '',
    pageUrl: '',
};

// Model methods
var websiteModelMethods = {
    setQuery: function (query) {
        websiteModel.query = query;
    },
    setPageUrl: function (pageUrl) {
        websiteModel.pageUrl = pageUrl;
    },
};

// Export model and its methods
window.websiteModel = websiteModel;
window.websiteModelMethods = websiteModelMethods;