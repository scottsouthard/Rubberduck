App.questions = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    return $('body').append(this.renderMessage(data));
    $('.modal-body').empty();
    $('#myModal').modal({show:true});
    $().playSound("http://www.noiseaddicts.com/samples_1w72b820/3724");
  },
  renderMessage: function(data) {
    return "<div id='myModal' class='modal hide fade' tabindex='-1' role='dialog'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>×</button><h3 class='modal-title'>You have a Question!</h3></div><div class='modal-body'><h4>"+data.title+":</h4><p>"+data.content+"</p></div><div class='modal-footer'><a class='btn btn-default pull-right' href='https://rubberduckapp.herokuapp.com/questions/"+data.url+"'>Enter the classroom!</a></div></div>"
  }
});

// <div id='myModal' class='modal hide fade' tabindex='-1' role='dialog'>
//   <div class='modal-header'>
//     <button type='button' class='close' data-dismiss='modal'>×</button>
//       <h3 class='modal-title'>You have a Question!</h3>
//   </div>
//   <div class='modal-body'>
//     <h4>"+data.title+":</h4>
//     <p>"+data.content+"</p>
//   </div>
//   <div class='modal-footer'>
//     <a class='btn btn-default pull-right' href='https://rubberduckapp.herokuapp.com/questions/"+data.url+"'>Enter the classroom!</a>
//   </div>
// </div>


// received: function(data) {
//     return $('body').append(this.renderMessage(data));
//     $('.modal-body').empty();
//     $('#myModal').modal({show:true});
//     // $('#lightbox').show();
//     $().playSound("http://www.noiseaddicts.com/samples_1w72b820/3724");
//     // $(document).on('click','#lightbox', function() {
//     //   $('#lightbox').hide();
//     // });


// // $('.thumbnail').click(function(){
//     $('.modal-body').empty();
//     // var title = $(this).attr("title");
//     // $('.modal-title').html(title);
//     // $(this.innerHTML).appendTo('.modal-body');
//     $('#myModal').modal({show:true});
// // });