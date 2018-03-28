gifApp.controller('RandomController', ['$http', function($http) {
    console.log('Randomccontroller');
    let self = this;
    
    self.gifArray = [];
    let newGif;
    let returnArray = [];

self.getGifRandom = function() {
    $http({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/random?api_key=1Mhbc7tw9qphzAZtZrbYunlbRLPkdpDk&q' 
    }).then(function(response) {
        console.log(response)
        self.gifArray = response.data.data
        
    }).catch(function(error) {
        console.log('error in GET: ', error);
    });
}

self.searchGifRandom = function(){
    self.gifArray = [];
self.getGifRandom();
self.clearIn();

}
self.clearIn = function() {
    self.gif = null;
}
self.addGif = function() {
    console.log(self.gifArray)
        let nGif = self.gifArray
    $http({
        method: 'POST',
        url: '/gifs',
        data: nGif
    }).then(function(response) {
      console.log('added to db', response)
        
        
    }).catch(function(error) {
        console.log('Error in POST', error);
    });
    
}
self.getGif = function() {
    $http({
        method: 'GET',
        url: '/gifs'
    }).then(function(response) {
        
        self.returnArray = response.data;
        console.log(self.returnArray)
    }).catch(function(error) {
        console.log('error in GET: ', error);
    });
}
}]);
