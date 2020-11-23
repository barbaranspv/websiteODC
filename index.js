$(function(){
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],

        sectionsColor: ['#84D8C8', 'white', '#84D8C8', 'white'],
  });

//adding the action to the button
$(document).on('click', '#moveTo', function(){
    fullpage_api.moveTo('page2', 0);
  });


   });

   