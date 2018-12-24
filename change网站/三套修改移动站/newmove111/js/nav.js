$(document).ready(function(){
		
		$('#left-panel-link').panelslider({side: 'left', clickClose: false, duration: 200 });
	
		$('#right-panel-link').panelslider({side: 'right', clickClose: false, duration: 200 });
		
		$('#close-panel-bt').click(function() {
			$.panelslider.close();
		});
		
	});