console.log('app.js loaded...');

angular.module('SnoosicManager', []);

angular.module('SnoosicManager')
    .controller('SnoosicController', ['$scope', function($scope){

      $scope.searchQuery = "";

      $scope.subreddits = [
        {
          name: "Music",
          url: "music",
          image: "http://i.imgur.com/uhExyAU.jpg"
        },
        {
          name: "Indie Folk",
          url: "indiefolk",
          image: "http://i.imgur.com/8kJu3Hh.jpg"
        },
        {
          name: "Indie",
          url: "indie",
          image: "http://i.imgur.com/0wdvNqj.jpg"
        },
        {
          name: "90s Music",
          url: "90smusic",
          image: "http://i.imgur.com/BpjCyoZ.jpg"
        },
        {
          name: "Listen To This",
          url: "listentothis",
          image: "http://i.imgur.com/4iZEVv3.jpg"
        },
        {
          name: "Tree Music",
          url: "treemusic",
          image: "http://i.imgur.com/RdpA4Oj.jpg"
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
      $('.subreddit-card').on("mouseover", function(e){
        $(this).css({
        "cursor": "pointer"
        });

      });
    }

    function cardLeave(){
      $('.subreddit-card').on("mouseleave", function(e){

        // $(this).find('.subreddit-overlay').hide();

      });
    }


  $(document).ready(function(){
    getUrl();
    cardHover();
    cardLeave();

    $('.modal-trigger').leanModal();
  });
