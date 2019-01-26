$('document').ready(function () {


    TweenMax.to('.grey', 0.8, {
        delay: 0.3,
        height: "0px",

        onComplete: function () {

            //            alert( 'Hello, world!' ); 

            TweenMax.to('.first', 0.3, {
                height: "40px",
            });

            TweenMax.to('.second', 0.3, {
                delay: 0.2,
                height: "50px",

                onComplete: function () {

                    TweenMax.to('.cacheT', 0.3, {
                        height: 0,
                    });

                    TweenMax.to('.cacheTT', 0.3, {
                        height: 0,
                        delay: 0.1,

                        onComplete: function () {

                            TweenMax.to("p", 0.7, {
                                css: {
                                    opacity: 1,
                                    y: "0%"
                                }
                            });
                            TweenMax.to(".three img", 0.7, {
                                css: {
                                    opacity: 1,
                                    y: "0%"
                                },
                                delay: 0.2
                            });
                            
                            

                        }
                    });
                }
            });



        }
    });



    // FIN //
});