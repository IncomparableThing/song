	$(function() {
		let start = $("#player");
		// newsong();
		start.click(getVal);
	})

	// 点击图标获取到数字
	function getVal() {
		let n = $("#num").val() - 1;
		console.log(n);
		song(n);
	}

	function song(i) {
		let music = $(".audio")[i]; // jQuery对象转dom对象
		console.log(music);
		let musicImg = $("#player");
		// setTimeout(() => {music.play();}, 1000);  // 1s后自动播放
		musicImg.click(function() { // 点击图标:播放 or 暂停
			if (music.paused) {
				music.play();
			} else
				music.pause();
		});
	}
