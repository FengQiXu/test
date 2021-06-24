
			window.onload = function() {
				var imgs = document.getElementsByClassName("ig");
				var dots = document.getElementsByClassName("dot");
				
				
				//自动轮播代码块
				var index = 0;
				var timer = window.setInterval(show, 2000);

				function show() {
					for (var i = 0; i < imgs.length; i++) {
						if (i == index) {
							imgs[i].classList.add("cur");
							dots[i].classList.add("cur");
						} else {
							imgs[i].classList.remove("cur");
							dots[i].classList.remove("cur");
						}
					}
					index++;
					if (index >= imgs.length) {
						index = 0

					}
				}

				//鼠标移入
				for (var i = 0; i < dots.length; i++) {
					dots[i].onmousemove = function() {
						window.clearInterval(timer);
						for (var j = 0; j < dots.length; j++) {
							if (dots[j] == this) {
								index = j;
								imgs[j].classList.add("cur");
								dots[j].classList.add("cur");
							} else {
								imgs[j].classList.remove("cur");
								dots[j].classList.remove("cur");
							}
						}
					}
					dots[i].onmouseout = function() {
						timer = window.setInterval(show, 2000);
					}
				}
			}
	