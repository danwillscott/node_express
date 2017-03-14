/**
 * Created by danielscott on 3/11/17.
 */
let io = require("socket.io");

$(document).ready(function(){
    $('textarea').trigger('autoresize');

    /**
     *******************
     ***** Sockets *****
     *******************
     */
    let socket = io.connect();

    socket.on()

});


// /**
 $(document).ready(function (){
          $(document).on('click', 'input', function (event) {
              $(this).siblings('label').empty();
          });
          $(document).on('click', 'textarea', function (event) {
              $(this).siblings('label').empty()
          });

          $('.show_users').hide();

          let socket = io.connect();
//          New User section
          $( "#new_user" ).on( "submit", function( event ) {
              let form_data = $( this ).serializeArray();
//              console.log(form_data);
              socket.emit("user_submit", {form_data: form_data});
              $('input').val('');
              event.preventDefault();
          });
//          Get Data From Server
          socket.on('return_user', function (data){
              $('.user-alert').empty();
              if(data.errors){
                  if(data.user.name){
                      $('.user-alert-name').append(' ' + data.user.name.message)
                  }
                  if(data.user.age){
                      $('.user-alert-age').append(' ' + data.user.age.message)
                  }
              } else {
                  $('.user_table').append($("<tr>").append($('<td>').text(data.user.name))
                      .append($('<td>').text(data.user.age))
                      .append($('<td>').html("<button class='btn-flat red lighten-1 remove_user' value='" + data.user._id + "' >Delete</button>")));
              }
          });
//          End New User Section
//          New Quote Section
//          Emit Data To Server
          $( ".new_quote" ).on( "submit", function( event ) {
              let form_data = $( this ).serializeArray();
              socket.emit("quote_submit", {form_data: form_data});
              $(this).children().children().children().children().children().val('');
              event.preventDefault();
          });
//          Get Data From Server
          socket.on('return_quote', function (data){
              $('.quote-alert').empty();
              if(data.errors){
                  if(data.quote.name){
                      $('.quote-alert-name').append(data.quote.name.message);
                  }
                  if(data.quote.quote){
                      $('.quote-alert-quote').append(data.quote.quote.message);
                  }
              } else {
                  $('.quote_table').append($('<tr>').append($('<td>').text(data.quote.name))
                      .append($('<td>').text(data.quote.quote))
                      .append($('<td>').html("<button class='btn-flat red lighten-1 remove_quote' value='" + data.quote._id + "' >Delete</button>")));
              }


          });
//          End New Quote Section

//          Remove User Emit
          $(document).on('click', '.remove_user', function (event) {
              let button_id = $(this).val();
              socket.emit('remove_user', {user: button_id});
              $(this).parent().parent().remove(); // Removes Element on page
          });
//           Remove Quote Emit
          $(document).on('click', '.remove_quote', function (event) {
              let button_id = $(this).val();
              socket.emit('remove_quote', {quote: button_id});
              $(this).parent().parent().remove(); // Removes Element on page
          })
      });
 // */