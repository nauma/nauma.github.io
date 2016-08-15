$('[id^="opendownload"]').click ()->
  $('#modal-download').show()
  return

$('#close-modal-download').click ()->
  $('#modal-download').hide()
  return

$('#openmenu').click ()->
  $('#sidebar').animate({'margin-left':  '-0px'}, 400)
  return

$('#close-sidebar').click ()->
  $('#sidebar').animate({'margin-left': '-252px'}, 400)
  return
  
$('section#topbar').animate({'opacity': 1}, 600)
$('section#board h1').animate({'margin-top': '10px', 'opacity': 1}, 600)
$('section#board div').animate({ 'opacity': 1}, 600)
$('section#board').animate({'padding-bottom': '45px' }, 600)