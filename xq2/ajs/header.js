function location1(s)
                {       var d = s.options[s.selectedIndex].value;
			window.open(d);
			s.selectedIndex=0;
			
                        
                }
function location2(s)
                {  
						var d = s.options[s.selectedIndex].value;
						s.selectedIndex=0;
				        window.top.location.href = d;
                        
                }
                