console.log('app.js loaded...');

angular.module('SnoosicManager', []);

angular.module('SnoosicManager')
    .controller('SnoosicController', ['$scope', function($scope){

      $scope.searchQuery = "";

      $scope.subreddits = [
        {
          name: "hip hop",
          url: "hipHop"
        },
        {
          name: "rock",
          url: "rock"
        },
        {
          name: "country",
          url: "country"
        },
        {
          name: "jazz",
          url: "jazz"
        },
        {
          name: "blues",
          url: "blues"
        },
        {
          name: "folk",
          url: "folk"
        }
      ]

    }]);

// Load Playlist for clicked box
    function getUrl(){
      $('.subreddit').on("click", function(e){
        console.log(this.id);


      });
    }

    function cardHover(){
      $('.subreddit').on("mouseover", function(e){
        $(this).css({"backgroundColor": "red"})
      });
    }

    function cardLeave(){
      $('.subreddit').on("mouseleave", function(e){
        console.log(this);
        $(this).css({"backgroundColor": "grey"})
      });
    }


  $(document).ready(function(){
    getUrl();
    cardHover();
    cardLeave();
  });
