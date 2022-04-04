$("#podcasts-filters li").click(function () {
  $("#podcasts-filters li").removeClass("filter-active");
  $(this).addClass("filter-active");

  var selectedFilter = $(this).data("filter");
  $("#podcasts-wrapper").fadeTo(100, 0);

  $(".podcasts-item").fadeOut().css("transform", "scale(0)");

  setTimeout(function () {
    $(selectedFilter).fadeIn(100).css("transform", "scale(1)");
    $("#podcasts-wrapper").fadeTo(300, 1);
  }, 300);
});
