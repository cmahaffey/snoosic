console.log('app.js loaded...');

angular.module('SnoosicManager', []);

angular.module('SnoosicManager')
    .controller('SnoosicController', ['$scope', function($scope){

      $scope.searchQuery = "";

      $scope.subreddits = [
        {
          name: "Music",
          url: "music",
          image: "http://i.imgur.com/EdKXDLI.png"
        },
        {
          name: "Indie Folk",
          url: "indiefolk"
        },
        {
          name: "Indie",
          url: "indie"
        },
        {
          name: "90s Music",
          url: "90smusic"
        },
        {
          name: "Listen To This",
          url: "listentothis"
        },
        {
          name: "Tree Music",
          url: "treemusic"
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
<<<<<<< HEAD
      $('.subreddit-card').on("mouseover", function(e){
        $(this).css({
        "cursor": "pointer"
        });
        // $(this).find('.subreddit-overlay').show();
=======
      $('.subreddit').on("mouseover", function(e){
        $(this).css({"backgroundColor": "red"})
>>>>>>> b7aca1349509d0c255110fe923bbfc64d1093ea8
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
