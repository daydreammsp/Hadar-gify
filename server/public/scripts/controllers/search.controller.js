gifApp.controller('SearchController', ['$http', function($http) {
    console.log('searchcontroller');
    let self = this;
    
    self.gifArray = [];
    let newGif;

    self.clearIn = function() {
        self.gif = null;
    }
    
self.getGif = function() {
    
    $http({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?api_key=1Mhbc7tw9qphzAZtZrbYunlbRLPkdpDk&q='+ newGif 
    }).then(function(response) {
        console.log(response)
        self.gifArray = response.data.data
        
    }).catch(function(error) {
        console.log('error in GET: ', error);
    });
}

self.searchGif = function(gif){
    self.gifArray = [];
    newGif = 0;
    newGif = gif;
console.log(newGif);
self.getGif();
self.clearIn();

}
self.addGif = function(newGif) {
        
    $http({
        method: 'POST',
        url: '/gifs',
        data: newGif
    }).then(function(response) {
      console.log('added to db')
        
        
    }).catch(function(error) {
        console.log('Error in POST', error);
    });
    
}



}]);