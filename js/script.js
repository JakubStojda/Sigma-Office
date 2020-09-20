    $(window).on('load', function () {
      $('#loader').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById('js-navbar-toggle');

        navBarToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
        $(function() {
            $(document).scroll(function() {
                if ($(this).scrollTop() >= $('.btn').offset().top - 300) {
                    $("#navbar").addClass("navbar-shrink");
                } else {
                    $("#navbar").removeClass("navbar-shrink");
                }
            });
        });
