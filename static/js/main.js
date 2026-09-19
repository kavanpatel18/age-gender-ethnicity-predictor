$('#fileup').change(function () {
  var res = $('#fileup').val();
  var filename = res.split('\\').slice(-1)[0];
  var filext = '.' + filename.split('.').slice(-1)[0];
  var valid = ['.jpg', '.png', '.jpeg', '.bmp'];

  if (valid.indexOf(filext.toLowerCase()) === -1) {
    $('.imgupload').hide('slow');
    $('.imgupload.ok').hide('slow');
    $('.imgupload.stop').show('slow');
    $('#namefile').css({color: 'red', 'font-weight': 700});
    $('#namefile').html('File ' + filename + ' is not a picture!');
    return;
  }

  $('#showImg').show().append('<img/>');
  var reader = new FileReader();
  reader.onload = function (e) { $('#showImg img').attr('src', e.target.result); };
  reader.readAsDataURL($(this)[0].files[0]);

  $('.imgupload').hide('slow');
  $('.imgupload.stop').hide('slow');
  $('.imgupload.ok').show('slow');
  $('#namefile').css({color: 'green', 'font-weight': 700}).html(filename);

  $('#btn-predict').off('click').on('click', function () {
    var form_data = new FormData($('#upload-file')[0]);
    $(this).hide();
    $('.loader').show();

    $.ajax({
      type: 'POST',
      url: '/predict',
      data: form_data,
      contentType: false,
      cache: false,
      processData: false,
      async: true,
      success: function (data) {
        $('.loader').hide();
        $('#result').fadeIn(600).text(data);
        $('#btn-predict').show();
      }
    });
  });
});
