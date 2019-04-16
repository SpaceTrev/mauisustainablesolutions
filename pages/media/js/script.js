document.addEventListener("DOMContentLoaded", function(){

    var userFeed = new Instafeed({
        get: 'user',
        userId: '9600019397',
        accessToken: '9600019397.1677ed0.72a3a581968d409c84c47180490899ca',
        sortBy: 'most-recent',
        filter: function(image) {
            return image.type === "image";
          },
        limit: 15,
        template: `<div class="container col-lg-3 col-md-4 col-sm-6 col-12 centered instaimg container-img"> <img src="{{image}}" alt="{{caption}}" class="img-fluid border rounded image" style="height: 221px; width: 295px; margin-top: 5%; border-color: #31b0d5 !important"> <div class="rounded overlayd"> <div class="text">{{caption}} </div><div class="button-overlay"><a href="{{link}}" target="_blank" class="btn btn-sm btn-outline-dark"><i class="fa fa-instagram"></i></a></div></div></div> `,
        resolution: 'standard_resolution',
        // filter: function(image) {
        //     return image.type === "image";
        //   }
    });

    userFeed.run();

});