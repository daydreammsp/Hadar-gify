gifApp.controller('RandomController', ['GifService','$http', function(GifService, $http) {
    console.log('Randomccontroller');
    let self = this;
    let gifService = GifService;
    self.gifArray = gifService.gifArray
  self.searchGifRandom = gifService.searchGifRandom;
   


}]);
