// 得分
var score = 0;
// 题目索引
var idx = 0;

window.onload = function() {
	// 选项
	var answer1Bg = document.getElementById("answerBg1");
	var answer2Bg = document.getElementById("answerBg2");
	var answer3Bg = document.getElementById("answerBg3");
	var answer4Bg = document.getElementById("answerBg4");

	// 第二题选项
	var logoAnswer1 = document.getElementById("logoAnswer1");
	var logoAnswer2 = document.getElementById("logoAnswer2");
	var logoAnswer3 = document.getElementById("logoAnswer3");
	var logoAnswer4 = document.getElementById("logoAnswer4");
	
	// 选择图标
	var normalSelectIcon1 = document.getElementById("select1");
	var normalSelectIcon2 = document.getElementById("select2");
	var normalSelectIcon3 = document.getElementById("select3");
	var normalSelectIcon4 = document.getElementById("select4");
	// 错误提示
	var errorTips = document.getElementById("errorTips");
	var tips = document.getElementById("tips");

    // 正确选项
	var rightAnswer = [3, 3, 4, 3, 4, 4, 2, 3, 1, 4];
	var selectedIdx = 0;
	var selectedIcon = null;
	var selectedBg = null;

	// 选项按钮监听
	answer1Bg.addEventListener("touchstart", function(event) {
		selectedIdx = 1;
		if (selectedIcon) {
			selectedIcon.style.backgroundImage = "url(image/page/unselect.png)";
		} 
		normalSelectIcon1.style.backgroundImage = "url(image/page/select.png)";
		selectedIcon = normalSelectIcon1;
		if (selectedBg) {
			selectedBg.setAttribute("class", "answerBg");
		}
		this.setAttribute("class", "shake");
		selectedBg = this;
	}, false);

	answer2Bg.addEventListener("touchstart", function(event) {
		selectedIdx = 2;
		if (selectedIcon) {
			selectedIcon.style.backgroundImage = "url(image/page/unselect.png)";
		} 
		normalSelectIcon2.style.backgroundImage = "url(image/page/select.png)";
		selectedIcon = normalSelectIcon2;
		if (selectedBg) {
			selectedBg.setAttribute("class", "answerBg");
		}
		this.setAttribute("class", "shake");
		selectedBg = this;
	}, false);

	answer3Bg.addEventListener("touchstart", function(event) {
		selectedIdx = 3;
		if (selectedIcon) {
			selectedIcon.style.backgroundImage = "url(image/page/unselect.png)";
		} 
		normalSelectIcon3.style.backgroundImage = "url(image/page/select.png)";
		selectedIcon = normalSelectIcon3;
		if (selectedBg) {
			selectedBg.setAttribute("class", "answerBg");
		}
		this.setAttribute("class", "shake");
		selectedBg = this;
	}, false);

	answer4Bg.addEventListener("touchstart", function(event) {
		selectedIdx = 4;
		if (selectedIcon) {
			selectedIcon.style.backgroundImage = "url(image/page/unselect.png)";
		} 
		normalSelectIcon4.style.backgroundImage = "url(image/page/select.png)";
		selectedIcon = normalSelectIcon4;
		if (selectedBg) {
			selectedBg.setAttribute("class", "answerBg");
		}
		this.setAttribute("class", "shake");
		selectedBg = this;
	}, false);

	// 第二题选项监听
	logoAnswer1.addEventListener("touchstart", function(event) {
		selectedIdx = 1;
		if (selectedBg) {
			selectedBg.setAttribute("class", "logoAnswer");
		}
		this.setAttribute("class", "logoShake");
		selectedBg = this;
	}, false);
	logoAnswer2.addEventListener("touchstart", function(event) {
		selectedIdx = 2;
		if (selectedBg) {
			selectedBg.setAttribute("class", "logoAnswer");
		}
		this.setAttribute("class", "logoShake");
		selectedBg = this;
	}, false);
	logoAnswer3.addEventListener("touchstart", function(event) {
		selectedIdx = 3;
		if (selectedBg) {
			selectedBg.setAttribute("class", "logoAnswer");
		}
		this.setAttribute("class", "logoShake");
		selectedBg = this;
	}, false);
	logoAnswer4.addEventListener("touchstart", function(event) {
		selectedIdx = 4;
		if (selectedBg) {
			selectedBg.setAttribute("class", "logoAnswer");
		}
		this.setAttribute("class", "logoShake");
		selectedBg = this;
	}, false);

	// 解释
    var resolution = [
    				"2017南方校招分别在广州，武汉，上海，北京，南京各大高校举行，并没有在深圳举办。",
					"南方报业传媒集团标志名称是南方之光。寓意为广东省委机关报的南方日报，坚持党性原则，坚持真理，有如照亮祖国南大门的一把火炬。朱雀，是古代神话传说中的“南方之神”。<br>南方之光以飘逸向上的优美造型，将朱雀与火炬形象完美融合，富于韵像和动感。",
					"南方报业着力打造南方+APP、并读APP、方舟APP、阁壁社区四大新媒体拳头产品，以此为龙头，建设重点突出、特色鲜明、结构互补、覆盖全面、有机融合、协同发展的新型媒体矩阵和良好媒体生态。",
					"《南方人物周刊》是南方报业传媒集团主管、南方周末出品的综合类人物周刊；南方新闻网是广东省委宣传部主管，南方报业传媒集团主办的广东省委省政府的机关网；南方杂志社是南方报业传媒集团成员单位之一；《南方经济》是广东经济学学会的会刊。",
					"《羊城晚报》由《南方日报》在50年代抽调采编骨干的半壁江山创办，两份报纸曾同址办公；《新京报》是光明日报和南方日报两大报业集团联合主办的综合类大型城市日报；城市画报由南方报业传媒集团主办；《周末画报》为现代传播集团旗下刊物。",
					"从网申到收到offer一共需要经过①网申②一面③笔试④终面4次筛选。",
					"南方报业校园招聘是从1992年开始的。到现在已经25年了。第一批22岁的应届生到现在已经是47岁的老记者了。",
					"1989年7月1日，南方日报社搬到了广州大道中289号大院，289号成为南方报人执着的精神寄托。在这里以《南方日报》为依托，南都报系，南周报系，21世界报系逐渐成长，成为各自报纸领域内的领路者。",
					"南方报业校园招聘的最新动态信息可以在“南方+”客户端、新浪官方微博（@南方报业校园招聘）和官方微信（南方报业校园招聘），若有任何进展，也会及时更新发布。",
					"南方报业传媒集团为新入职的员工提供住房补贴。在7月份入职报道后，要参加为期2-3周的入职培训，在此期间，可以申请集团提供的周转酒店，按照往年惯例，入职员工会统一进行户外素质拓展，在培训期间，也会尽快处理好报销事务。"
    				];
   	
   	// 马上测试
	var startBtn = document.getElementById("start");
	startBtn.addEventListener("touchstart", function(event) {
		index.style.display = "none";
		question.style.display = "block";
		idx = nextQ(idx);
	}, false);

	// 下一题
	var nextBtn = document.getElementById("next");
	nextBtn.addEventListener("touchstart", function(event) {
		if (!selectedIdx) {return;}
		if (selectedIdx == rightAnswer[idx - 1]) {
			score++;
			idx = nextQ(idx);
			selectedIdx = 0;
			selectedIcon.style.backgroundImage = "url(image/page/unselect.png)";
			if (idx == 3) {
				selectedBg.setAttribute("class", "logoAnswer");
			} else {
				selectedBg.setAttribute("class", "answerBg");
			}
			selectedBg = null;
		} else {
			errorTips.style.display = "block";
			tips.innerHTML = resolution[idx - 1];
		}
	}, false);

	// 错误提示，下一题
	var errorNextBtn = document.getElementById("errorNext");
	errorNextBtn.addEventListener("touchstart", function(event) {
		errorTips.style.display = "none";
		idx = nextQ(idx);
		selectedIdx = 0;
		selectedIcon.style.backgroundImage = "url(image/page/unselect.png)";
		if (idx == 3) {
			selectedBg.setAttribute("class", "logoAnswer");
		} else {
			selectedBg.setAttribute("class", "answerBg");
		}
		selectedBg = null;
	}, false);
}

// 更换题目
function nextQ(i) {
	var logoQ = document.getElementById("logoQ");
	logoQ.style.display = i == 1 ? "block" : "none";

	var sumCount = 10;
	var questionTitle = document.getElementById("titleImg");
	var answer1Title = document.getElementById("answer1");
	var answer2Title = document.getElementById("answer2");
	var answer3Title = document.getElementById("answer3");
	var answer4Title = document.getElementById("answer4");
	
	// 问题
	var titles = [
					"title-1.png",
					"title-2.png",
					"title-3.png", 
					"title-4.png", 
					"title-5.png", 
					"title-6.png", 
					"title-7.png", 
					"title-8.png", 
					"title-9.png", 
					"title-10.png"
				];
	var titleSrc = "image/title/";

	// 答案
	var option = [
					["广州", "武汉", "深圳", "北京"],
					[],
					["并读", "方舟", "阁壁", "单读"],
					["南方人物周刊", "南方新闻网", "南方经济", "南方杂志"],
					["羊城晚报", "新京报", "城市画报", "周末画报"],
					["一次", "两次", "三次", "四次"],
					["46岁", "47岁", "48岁", "49岁"],
					[
					"南方日报社第一年盈利289块",
					"第一批南方日报社记者有289位",
					"南方报业传媒集团的门牌号码",
					"我也编不出来，不懂选C"
					],
					[
					"南方plus客户端官方微信", 
					"@南方报业校园招聘新浪官方微博",
					"南方报业校园招聘官方微信", 
					"“南方+”客户端"
					],
					[
					"到某某度假区享受两天户外日光浴",
					"住上十分钟步行距离的周转酒店",
					"开好银行卡和准备报销费用，租房补贴到账😁",
					"以上都是"
					]
				];

	// 结果
    var resultBgs = [
    				  "url(image/result/title/1.png)",
    				  "url(image/result/title/2.png)",
    				  "url(image/result/title/3.png)",
    				  "url(image/result/title/4.png)"
    				  ];
    var resultTips = [
    				"小编快要“哇”得一声哭出来，看来小编的工作还需努力了……2018南方报业校园招聘即将全面启动，还是“小南瓜”的你，快跟上小编的脚步，一点点走近南方吧！——获得“小南瓜称号”！",
					"看来你对南方报业还是雾里看花，水中望月，了解不真切……😂别灰心，关注我们的公众号南方报业校园招聘，从“小南人”进化到“小南神”！",
					"看来你对南方报业真是十分了解了，小编觉得真是棒棒哒。欢迎关注2018南方报业校园招聘，成为真正的“小南友”吧！——恭喜获得“小南友”称号！",
					"小编都惊呆了！你简直就是小编心中的“小南神”！还在等什么，快来2018南方报业校园招聘，加入我们吧！——恭喜获得“小南神”称号！"
    				];

	if (i < sumCount) {
		questionTitle.src = titleSrc + titles[i];
		answer1Title.innerHTML = option[i][0];
		answer2Title.innerHTML = option[i][1];
		answer3Title.innerHTML = option[i][2];
		answer4Title.innerHTML = option[i][3];
		i++;
	} else {
		question.style.display = "none";
		result.style.display = "block";

		var resultIdx = 0;
		if (score <= 3) {
			resultIdx = 0;
		} else if (score <= 6) {
			resultIdx = 1;
		} else if (score <= 9) {
			resultIdx = 2;
		} else {
			resultIdx = 3;
		}

		var resultBg = document.getElementById("resultBg");
		resultBg.style.backgroundImage = resultBgs[resultIdx];

		var resultTilte = document.getElementById("resultTitle");
		resultTilte.innerHTML = resultTips[resultIdx];

		var returnBtn = document.getElementById("returnIndex");
		returnBtn.addEventListener("touchstart", function(event) {
			result.style.display = "none";
			index.style.display = "block";
			score = 0;
			idx = 0;
		}, false);

		var shareBtn = document.getElementById("share");
		shareBtn.addEventListener("touchstart", function(event) {
			var shareGuide = document.getElementById("shareGuide");
			shareGuide.style.display = "block";
			shareGuide.addEventListener("touchstart", function(event) {
				this.style.display = "none";
			}, false);
		}, false);
	}
	return i;
}
