$(document).ready(function () {


    var userFeed = new Instafeed({
        get: 'user',
        userId: 'add user id once kevin fixes login',
        accessToken: 'add access token',
        sortBy: 'most-recent',
        limit: 12,
    
        template: `<div class="container col-lg-3 col-md-4 col-sm-6 col-12 centered instaimg container-img"> <img src="{{image}}" alt="{{caption}}" class="img-fluid border rounded image" style="height: 221px; width: 295px; margin-top: 5%; border-color: #65bd60 !important"> <div class="rounded overlayd"> <div class="text">{{caption}} </div><div class="button-overlay"><a href="{{link}}" target="_blank" class="btn btn-sm btn-outline-dark"><i class="fa fa-instagram"></i></a></div></div></div> `,
        resolution: 'standard_resolution',
        // filter: function(image) {
        //     return image.type === "image";
        //   }
    });

    userFeed.run();
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});