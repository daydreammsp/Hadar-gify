gifApp.controller('SearchController', ['GifService','$http', function(GifService, $http) {
    console.log('searchcontroller');
    let self = this;
   
    let gifService = GifService;
    self.gifArray = gifService.gifArray
    self.searchGif = gifService.searchGif;
    



}]);