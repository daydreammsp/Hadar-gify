gifApp.service('GifService', ['$http', function($http){
console.log('gif service running');
let self = this;
self.gifArray = {list:[]};
let gif;
    let newGif;
    // let returnArray = [];
    
//search for Gif
    // self.clearIn = function() {
    //     self.gif = null;
    // }
    
self.getGif = function() {
    
    $http({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?api_key=1Mhbc7tw9qphzAZtZrbYunlbRLPkdpDk&q='+ newGif 
    }).then(function(response) {
        
        self.gifArray.list = response.data.data
        console.log(self.gifArray.list)
    }).catch(function(error) {
        console.log('error in GET: ', error);
    });
}

self.searchGif = function(gif){
    // console.log(gif)
    // self.gifArray = [];
    // newGif = 0;
    newGif = gif;
// console.log(newGif);
self.getGif();
// self.clearIn();

}
self.addGif = function(gif) {
        
    $http({
        method: 'POST',
        url: '/gifs',
        data: gif
    }).then(function(response) {
      console.log('added to db')
        
        
    }).catch(function(error) {
        console.log('Error in POST', error);
    });
    
}

// random gif

self.searchGifRandom = function(){
    // self.gifArray = [];
self.getGifRandom();
// self.clearIn();

}
// self.clearIn = function() {
//     self.gif = null;
// }

self.getGifRandom = function() {
    $http({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/random?api_key=1Mhbc7tw9qphzAZtZrbYunlbRLPkdpDk&q' 
    }).then(function(response) {
        console.log(response)
        self.gifArray.list = response.data.data
        
    }).catch(function(error) {
        console.log('error in GET: ', error);
    });
}



self.addGif = function() {
    console.log(self.gifArray)
        // let nGif = self.gifArray.list
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


}]);