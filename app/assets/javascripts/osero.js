$(function(){

  var color = 0;
  $(document).click(function(event){
    color++;
    var target = $(event.target);
    target.css("background-color", "white");
  })

});
