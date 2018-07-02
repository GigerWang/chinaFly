var speed = 40; //数字越大速度越慢
					var xyshtu = document.getElementById("xysh");
					var xyshtu1 = document.getElementById("xysh1");
					var xyshtu2 = document.getElementById("xysh2");
					xyshtu2.innerHTML = xyshtu1.innerHTML;

					function Marquee() {
						if (xyshtu2.offsetWidth - xyshtu.scrollLeft <= 0)
							xyshtu.scrollLeft -= xyshtu1.offsetWidth
						else {
							xyshtu.scrollLeft++;
						}
					}
					var MyMar = setInterval(Marquee, speed);
					xyshtu.onmouseover = function() {
						clearInterval(MyMar)
					};
					xyshtu.onmouseout = function() {
						MyMar = setInterval(Marquee, speed)
					};