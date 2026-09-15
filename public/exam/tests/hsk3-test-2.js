// Đề thi thử HSK 3 – Test 2 (đề thật H31002).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-2",
 "level": "HSK 3",
 "title": "HSK 3 - Test 2",
 "code": "H31002",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-2/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-2.mp3",
   "note": "Bấm 🔊 cạnh mỗi câu để nghe riêng câu đó (mỗi câu đọc 2 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần Nghe.",
   "parts": [
    {
     "name": "Phần 1",
     "range": [
      1,
      10
     ],
     "type": "pic-match",
     "intro": "Nghe hội thoại và chọn hình phù hợp.",
     "groups": [
      {
       "range": [
        1,
        5
       ],
       "pics": {
        "A": "l1a-A.jpg",
        "B": "l1a-B.jpg",
        "C": "l1a-C.jpg",
        "D": "l1a-D.jpg",
        "E": "l1a-E.jpg",
        "F": "l1a-F.jpg"
       },
       "example": "Ví dụ: 男：喂，请问张经理在吗？ 女：他正在开会，您半个小时以后再打，好吗？→ D",
       "questions": [
        {
         "n": 1,
         "answer": "C",
         "audio": [
          104.6,
          130.3
         ],
         "script": "女：喝点儿水吧，今天踢得怎么样？\n男：我们班的水平比他们高，我们进了五个球！",
         "scriptVn": "Nữ: Uống chút nước đi, hôm nay đá thế nào? / Nam: Trình độ lớp mình cao hơn lớp họ, bọn mình ghi được năm bàn!"
        },
        {
         "n": 2,
         "answer": "A",
         "audio": [
          135.6,
          162.3
         ],
         "script": "女：每天都要洗碗和盘子，累不累？\n女：不累，我们家那位做饭，我来洗是应该的。",
         "scriptVn": "Nữ: Ngày nào cũng phải rửa bát đĩa, có mệt không? / Nữ: Không mệt, người nhà tôi nấu cơm thì tôi rửa là đúng rồi."
        },
        {
         "n": 3,
         "answer": "F",
         "audio": [
          167.8,
          190.7
         ],
         "script": "女：十四床的病人今天好些了吧？\n男：好多了，下个星期应该可以出院了。",
         "scriptVn": "Nữ: Bệnh nhân giường số mười bốn hôm nay đỡ hơn chưa? / Nam: Đỡ nhiều rồi, tuần sau chắc là xuất viện được."
        },
        {
         "n": 4,
         "answer": "E",
         "audio": [
          196.3,
          224.6
         ],
         "script": "男：我们是去年秋天结婚的，你看，这张照片就是那会儿照的。\n女：你爱人真漂亮！",
         "scriptVn": "Nam: Chúng tôi cưới nhau vào mùa thu năm ngoái, anh xem, bức ảnh này chụp hồi đó. / Nữ: Vợ anh đẹp thật!"
        },
        {
         "n": 5,
         "answer": "B",
         "audio": [
          229.9,
          257.1
         ],
         "script": "女：你看见我的照相机了吗？我记得放在包里了啊。\n男：没看见，别着急，慢慢找。",
         "scriptVn": "Nữ: Anh có thấy máy ảnh của em không? Em nhớ là để trong túi mà. / Nam: Không thấy, đừng vội, cứ từ từ tìm."
        }
       ]
      },
      {
       "range": [
        6,
        10
       ],
       "pics": {
        "A": "l1b-A.jpg",
        "B": "l1b-B.jpg",
        "C": "l1b-C.jpg",
        "D": "l1b-D.jpg",
        "E": "l1b-E.jpg"
       },
       "questions": [
        {
         "n": 6,
         "answer": "C",
         "audio": [
          269.1,
          286.3
         ],
         "script": "男：姐，祝您生日快乐！\n女：谢谢你，谢谢你的礼物。",
         "scriptVn": "Nam: Chị ơi, chúc chị sinh nhật vui vẻ! / Nữ: Cảm ơn em, cảm ơn quà của em."
        },
        {
         "n": 7,
         "answer": "B",
         "audio": [
          291.8,
          321.4
         ],
         "script": "女：喂，出门前再检查检查你的行李，别又忘了什么东西。\n男：这次不会了，已经检查过两次了。",
         "scriptVn": "Nữ: Alô, trước khi ra khỏi nhà kiểm tra lại hành lý đi, đừng lại quên thứ gì đấy. / Nam: Lần này không quên đâu, đã kiểm tra hai lần rồi."
        },
        {
         "n": 8,
         "answer": "A",
         "audio": [
          326.8,
          354.7
         ],
         "script": "男：你看看这段话这样写怎么样？\n女：除了这个句子意思有些不清楚外，其他都不错。",
         "scriptVn": "Nam: Chị xem đoạn văn này viết như vậy được không? / Nữ: Ngoài câu này ý hơi chưa rõ ra, những chỗ khác đều tốt."
        },
        {
         "n": 9,
         "answer": "D",
         "audio": [
          360.1,
          381.9
         ],
         "script": "女：怎么不看新闻了？\n男：世界杯七点半开始，我等了四年了。",
         "scriptVn": "Nữ: Sao không xem thời sự nữa? / Nam: World Cup bảy rưỡi bắt đầu, anh đợi bốn năm rồi."
        },
        {
         "n": 10,
         "answer": "E",
         "audio": [
          387.4,
          415.9
         ],
         "script": "女：爸爸年轻的时候真有意思，这是真的吗？\n女：当然是真的，他那时候还特别喜欢送我花。",
         "scriptVn": "Nữ: Hồi trẻ bố thú vị thật, chuyện này là thật ạ? / Nữ: Tất nhiên là thật, hồi đó bố còn rất thích tặng hoa cho mẹ."
        }
       ]
      }
     ]
    },
    {
     "name": "Phần 2",
     "range": [
      11,
      20
     ],
     "type": "judge-text",
     "intro": "Nghe đoạn văn, phán đoán câu ★ đúng (✓) hay sai (✗).",
     "questions": [
      {
       "n": 11,
       "star": "弟弟正在看电视。",
       "answer": false,
       "audio": [
        523.8,
        557.8
       ],
       "script": "把电视声音关小点儿，你弟弟明天考试，正在复习呢，别影响他。",
       "scriptVn": "Vặn nhỏ tiếng ti vi đi, mai em trai con thi, nó đang ôn bài đấy, đừng làm ảnh hưởng nó.",
       "starVn": "Em trai đang xem ti vi."
      },
      {
       "n": 12,
       "star": "这个题很难。",
       "answer": true,
       "audio": [
        565.4,
        598
       ],
       "script": "你看看这个题？开始大家以为很容易，没想到，到下课也没做出来。",
       "scriptVn": "Anh xem bài này xem? Lúc đầu mọi người tưởng rất dễ, không ngờ đến lúc tan học cũng không ai làm ra.",
       "starVn": "Bài này rất khó."
      },
      {
       "n": 13,
       "star": "宾馆旁边有个公园。",
       "answer": true,
       "audio": [
        605.6,
        645.3
       ],
       "script": "这个宾馆的南边有一个公园，奇怪的是，这张地图上把公园画在宾馆的北边了。",
       "scriptVn": "Phía nam khách sạn này có một công viên, lạ là tấm bản đồ này lại vẽ công viên ở phía bắc khách sạn.",
       "starVn": "Bên cạnh khách sạn có một công viên."
      },
      {
       "n": 14,
       "star": "他不喜欢小狗。",
       "answer": false,
       "audio": [
        652.9,
        685.9
       ],
       "script": "我有一条小狗，和它在一起的时间越久，我越觉得它聪明、可爱。",
       "scriptVn": "Tôi có một con chó nhỏ, ở bên nó càng lâu tôi càng thấy nó thông minh, đáng yêu.",
       "starVn": "Anh ấy không thích chó con."
      },
      {
       "n": 15,
       "star": "他这个周末去看电影。",
       "answer": false,
       "audio": [
        693.5,
        733.1
       ],
       "script": "这个周末有个重要的会议，所以不能和你一起去看那个电影了，对不起，下周怎么样？",
       "scriptVn": "Cuối tuần này có cuộc họp quan trọng, nên không đi xem bộ phim đó với bạn được, xin lỗi nhé, tuần sau thì sao?",
       "starVn": "Cuối tuần này anh ấy đi xem phim."
      },
      {
       "n": 16,
       "star": "妈妈晚上不在家吃饭。",
       "answer": true,
       "audio": [
        740.8,
        782
       ],
       "script": "你妈晚上和朋友们在外面吃饭，所以我们要自己做饭了，让我看看冰箱里有什么吃的。",
       "scriptVn": "Tối nay mẹ con đi ăn ngoài với bạn bè, nên bố con mình phải tự nấu cơm, để bố xem trong tủ lạnh có gì ăn.",
       "starVn": "Tối nay mẹ không ăn cơm ở nhà."
      },
      {
       "n": 17,
       "star": "房间里很冷。",
       "answer": false,
       "audio": [
        789.8,
        824.5
       ],
       "script": "客人马上就要来了，你去告诉李小姐先把房间里的空调打开，今天太热了。",
       "scriptVn": "Khách sắp đến rồi, cậu đi bảo cô Lý bật điều hòa trong phòng trước đi, hôm nay nóng quá.",
       "starVn": "Trong phòng rất lạnh."
      },
      {
       "n": 18,
       "star": "花园不大。",
       "answer": true,
       "audio": [
        832.1,
        879
       ],
       "script": "这个房子真的很不错，厨房和洗手间都很大，房子后面还有一个小花园，像您这么喜欢小动物，有个花园会很方便。",
       "scriptVn": "Căn nhà này thật sự rất tốt, bếp và nhà vệ sinh đều rộng, sau nhà còn có một khu vườn nhỏ, người thích động vật như anh có vườn sẽ rất tiện.",
       "starVn": "Khu vườn không lớn."
      },
      {
       "n": 19,
       "star": "他要去学校。",
       "answer": false,
       "audio": [
        886.6,
        926
       ],
       "script": "这件事电话里讲不明白，我们还是见面说吧，一个小时后我到公司，你在办公室等我。",
       "scriptVn": "Chuyện này nói qua điện thoại không rõ được, mình gặp nhau nói đi, một tiếng nữa tôi đến công ty, anh đợi tôi ở văn phòng.",
       "starVn": "Anh ấy sắp đến trường."
      },
      {
       "n": 20,
       "star": "比赛要求有变化。",
       "answer": true,
       "audio": [
        933.5,
        973.9
       ],
       "script": "这次比赛的新要求和需要注意的一些问题网上都有，你上网看一下，回去跟同学们也说一下。",
       "scriptVn": "Yêu cầu mới của cuộc thi lần này và một số điều cần chú ý đều có trên mạng, em lên mạng xem một chút, về nói lại với các bạn nữa.",
       "starVn": "Yêu cầu của cuộc thi có thay đổi."
      }
     ]
    },
    {
     "name": "Phần 3",
     "range": [
      21,
      30
     ],
     "type": "mc",
     "intro": "Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.",
     "questions": [
      {
       "n": 21,
       "options": [
        {
         "zh": "一直很好"
        },
        {
         "zh": "需要提高"
        },
        {
         "zh": "提高很快"
        }
       ],
       "answer": "B",
       "audio": [
        1034.5,
        1074.2
       ],
       "script": "女：我发现，你现在很爱看新闻。\n男：我其实对新闻没兴趣，主要是想提高提高我的普通话水平。\n问：男的觉得自己的普通话怎么样？",
       "scriptVn": "Nữ: Tôi thấy dạo này anh rất thích xem thời sự. / Nam: Thật ra tôi không hứng thú với thời sự, chủ yếu là muốn nâng cao trình độ tiếng phổ thông. / Hỏi: Người đàn ông thấy tiếng phổ thông của mình thế nào? (A luôn rất tốt · B cần nâng cao · C tiến bộ rất nhanh)"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "住得近"
        },
        {
         "zh": "要运动"
        },
        {
         "zh": "工作忙"
        }
       ],
       "answer": "A",
       "audio": [
        1084.2,
        1122.6
       ],
       "script": "男：你最近比以前来得早了，搬家了？\n女：是啊，你不知道？我上个月就搬家了，走路十分钟就到。\n问：女的为什么来得早？",
       "scriptVn": "Nam: Dạo này chị đến sớm hơn trước, chuyển nhà rồi à? / Nữ: Đúng thế, anh không biết à? Tháng trước tôi đã chuyển nhà, đi bộ mười phút là tới. / Hỏi: Vì sao người phụ nữ đến sớm? (A ở gần · B phải vận động · C công việc bận)"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "借书"
        },
        {
         "zh": "做游戏"
        },
        {
         "zh": "打电话"
        }
       ],
       "answer": "C",
       "audio": [
        1132.5,
        1168.9
       ],
       "script": "女：您好，3260号为您服务，请问您查哪儿？\n男：你好，请帮我查一下国家图书馆的电话，谢谢。\n问：男的在做什么？",
       "scriptVn": "Nữ: Xin chào, tổng đài viên số 3260 phục vụ quý khách, xin hỏi quý khách cần tra ở đâu? / Nam: Chào cô, tra giúp tôi số điện thoại của Thư viện Quốc gia, cảm ơn. / Hỏi: Người đàn ông đang làm gì? (A mượn sách · B chơi trò chơi · C gọi điện thoại)"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "明天"
        },
        {
         "zh": "春节"
        },
        {
         "zh": "星期日"
        }
       ],
       "answer": "A",
       "audio": [
        1178.8,
        1216.2
       ],
       "script": "男：明天上午我们去看你爷爷，你作业写完了没？\n女：我今天一定能完成作业，相信我好了。\n问：他们哪天去爷爷家？",
       "scriptVn": "Nam: Sáng mai mình đi thăm ông nội con, bài tập con làm xong chưa? / Nữ: Hôm nay con nhất định làm xong bài tập, bố cứ tin con. / Hỏi: Hôm nào họ đến nhà ông? (A ngày mai · B Tết · C Chủ nhật)"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "院长"
        },
        {
         "zh": "校长"
        },
        {
         "zh": "市长"
        }
       ],
       "answer": "B",
       "audio": [
        1226.1,
        1265.5
       ],
       "script": "女：您请坐，王校长正在开会，会议马上就结束了。\n男：谢谢。我问您一下，贵校有多少在读学生？一万？\n问：男的要找谁？",
       "scriptVn": "Nữ: Mời ông ngồi, hiệu trưởng Vương đang họp, cuộc họp sắp kết thúc rồi. / Nam: Cảm ơn. Cho tôi hỏi, trường mình có bao nhiêu học sinh đang theo học? Một vạn? / Hỏi: Người đàn ông muốn tìm ai? (A viện trưởng · B hiệu trưởng · C thị trưởng)"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "邻居"
        },
        {
         "zh": "老师和学生"
        },
        {
         "zh": "丈夫和妻子"
        }
       ],
       "answer": "C",
       "audio": [
        1275.4,
        1315
       ],
       "script": "男：别说话，你听，这是什么声音？\n女：你不知道？儿子昨天买了两只小鸟，一只红色的，一只黄色的。\n问：他们最可能是什么关系？",
       "scriptVn": "Nam: Đừng nói, em nghe này, tiếng gì thế? / Nữ: Anh không biết à? Hôm qua con trai mua hai con chim nhỏ, một con màu đỏ, một con màu vàng. / Hỏi: Họ có khả năng là quan hệ gì? (A hàng xóm · B thầy và trò · C vợ chồng)"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "牙疼"
        },
        {
         "zh": "不爱吃"
        },
        {
         "zh": "他已经刷牙了"
        }
       ],
       "answer": "C",
       "audio": [
        1324.8,
        1354.7
       ],
       "script": "女：新买的这种糖特别甜，很好吃，你吃一块儿？\n男：不，我已经刷牙了。\n问：男的为什么不吃糖？",
       "scriptVn": "Nữ: Loại kẹo mới mua này rất ngọt, ngon lắm, anh ăn một viên nhé? / Nam: Không, anh đánh răng rồi. / Hỏi: Vì sao người đàn ông không ăn kẹo? (A đau răng · B không thích ăn · C anh ấy đã đánh răng)"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "机场"
        },
        {
         "zh": "超市"
        },
        {
         "zh": "地铁"
        }
       ],
       "answer": "B",
       "audio": [
        1364.6,
        1402.3
       ],
       "script": "男：你这儿的环境很好，很安静。\n女：环境是不错，买东西也方便，附近就有超市，就是离地铁远。\n问：这儿离哪里近？",
       "scriptVn": "Nam: Chỗ chị môi trường rất tốt, rất yên tĩnh. / Nữ: Môi trường thì tốt, mua đồ cũng tiện, gần đây có siêu thị, chỉ có điều xa tàu điện ngầm. / Hỏi: Chỗ này gần đâu? (A sân bay · B siêu thị · C tàu điện ngầm)"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "买水果"
        },
        {
         "zh": "来接她"
        },
        {
         "zh": "去上班"
        }
       ],
       "answer": "B",
       "audio": [
        1412.2,
        1447
       ],
       "script": "女：我中午买了两箱苹果，你开车来接我吧。\n男：好，等一会儿下班后我给你打电话。\n问：女的想让男的做什么？",
       "scriptVn": "Nữ: Trưa nay em mua hai thùng táo, anh lái xe đến đón em nhé. / Nam: Được, lát nữa tan làm anh gọi cho em. / Hỏi: Người phụ nữ muốn người đàn ông làm gì? (A mua hoa quả · B đến đón cô ấy · C đi làm)"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "打车"
        },
        {
         "zh": "骑自行车"
        },
        {
         "zh": "坐公共汽车"
        }
       ],
       "answer": "A",
       "audio": [
        1457,
        1492.2
       ],
       "script": "男：您没去火车站？您的司机呢？\n女：他今天有点事，我叫了辆出租车，几分钟后就到楼下。\n问：女的打算怎么去火车站？",
       "scriptVn": "Nam: Bà không đến ga tàu à? Tài xế của bà đâu? / Nữ: Hôm nay anh ấy có chút việc, tôi gọi taxi rồi, vài phút nữa xe đến dưới nhà. / Hỏi: Người phụ nữ định đến ga tàu bằng cách nào? (A đi taxi · B đi xe đạp · C đi xe buýt)"
      }
     ]
    },
    {
     "name": "Phần 4",
     "range": [
      31,
      40
     ],
     "type": "mc",
     "intro": "Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.",
     "questions": [
      {
       "n": 31,
       "options": [
        {
         "zh": "饭馆"
        },
        {
         "zh": "商店"
        },
        {
         "zh": "医院"
        }
       ],
       "answer": "C",
       "audio": [
        1569.9,
        1615.5
       ],
       "script": "男：我给你开点儿药，这段时间注意休息，不要太累。\n女：好的，我会注意的。\n男：还有，咖啡和啤酒要少喝，不要吃羊肉和鱼。\n女：好，谢谢您。\n问：他们在哪里？",
       "scriptVn": "Nam: Tôi kê cho chị ít thuốc, thời gian này chú ý nghỉ ngơi, đừng quá mệt. / Nữ: Vâng, tôi sẽ chú ý. / Nam: Còn nữa, uống ít cà phê và bia thôi, đừng ăn thịt dê và cá. / Nữ: Vâng, cảm ơn bác sĩ. / Hỏi: Họ đang ở đâu? (A nhà hàng · B cửa hàng · C bệnh viện)"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "哭了"
        },
        {
         "zh": "饿了"
        },
        {
         "zh": "鼻子不舒服"
        }
       ],
       "answer": "C",
       "audio": [
        1625.7,
        1674.3
       ],
       "script": "女：哥，刘阿姨是不是生气了？\n男：没有啊。她只是鼻子有点儿不舒服。\n女：那就好，我以为她因为什么不高兴了。\n男：你不用那么客气。走，去看表演吧。\n问：刘阿姨怎么了？",
       "scriptVn": "Nữ: Anh ơi, dì Lưu có phải giận rồi không? / Nam: Không đâu. Dì ấy chỉ hơi khó chịu ở mũi thôi. / Nữ: Thế thì tốt, em tưởng dì ấy không vui vì chuyện gì. / Nam: Em không cần khách sáo thế. Đi, đi xem biểu diễn thôi. / Hỏi: Dì Lưu bị làm sao? (A khóc · B đói · C mũi khó chịu)"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "喜欢跳舞"
        },
        {
         "zh": "经常跑步"
        },
        {
         "zh": "想去爬山"
        }
       ],
       "answer": "C",
       "audio": [
        1684.4,
        1738.7
       ],
       "script": "男：下个星期六我准备去爬山。\n女：你很长时间没锻炼身体了，要小心点儿。\n男：没关系，最近我不是开始跑步了吗？\n女：最近？你是从昨天才开始跑步的。\n问：关于男的，可以知道什么？",
       "scriptVn": "Nam: Thứ Bảy tuần sau anh định đi leo núi. / Nữ: Lâu lắm rồi anh không rèn luyện thân thể, phải cẩn thận đấy. / Nam: Không sao, chẳng phải dạo này anh bắt đầu chạy bộ rồi sao? / Nữ: Dạo này? Anh mới bắt đầu chạy từ hôm qua thôi. / Hỏi: Về người đàn ông, có thể biết điều gì? (A thích nhảy múa · B thường xuyên chạy bộ · C muốn đi leo núi)"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "2"
        },
        {
         "zh": "3"
        },
        {
         "zh": "4"
        }
       ],
       "answer": "A",
       "audio": [
        1748.8,
        1793.8
       ],
       "script": "女：请问，汉语词典在几层？\n男：在二层，二层右边。\n女：还有一个问题，我可以借几天呢？\n男：对不起，词典不借出的，只能在这儿用。\n问：女的应该去第几层？",
       "scriptVn": "Nữ: Xin hỏi, từ điển tiếng Hán ở tầng mấy? / Nam: Ở tầng hai, bên phải tầng hai. / Nữ: Còn một câu nữa, tôi mượn được mấy ngày? / Nam: Xin lỗi, từ điển không cho mượn về, chỉ được dùng ở đây. / Hỏi: Người phụ nữ nên lên tầng mấy? (A 2 · B 3 · C 4)"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "不胖"
        },
        {
         "zh": "很热情"
        },
        {
         "zh": "口渴了"
        }
       ],
       "answer": "A",
       "audio": [
        1804,
        1855.4
       ],
       "script": "男：别吃了，你已经吃了三块儿蛋糕了。\n女：这是最后一块儿。\n男：你总是吃甜的东西，不怕变胖吗？\n女：你放心，我们家的人都很瘦，吃不胖，我也一样。\n问：关于女的，可以知道什么？",
       "scriptVn": "Nam: Đừng ăn nữa, em đã ăn ba miếng bánh ga-tô rồi. / Nữ: Đây là miếng cuối cùng. / Nam: Em cứ ăn đồ ngọt mãi, không sợ béo à? / Nữ: Anh yên tâm, người nhà em ai cũng gầy, ăn không béo được, em cũng thế. / Hỏi: Về người phụ nữ, có thể biết điều gì? (A không béo · B rất nhiệt tình · C khát nước)"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "不努力"
        },
        {
         "zh": "没兴趣"
        },
        {
         "zh": "迟到了"
        }
       ],
       "answer": "B",
       "audio": [
        1865.5,
        1923.4
       ],
       "script": "女：别难过了，考试成绩不是最重要的。\n男：我的分数太低了。\n女：但是你努力了。你的问题是你对历史没兴趣。\n男：是，如果我喜欢历史跟我喜欢音乐一样该多好。\n问：他的历史成绩为什么不好？",
       "scriptVn": "Nữ: Đừng buồn nữa, điểm thi không phải là quan trọng nhất. / Nam: Điểm của em thấp quá. / Nữ: Nhưng em đã cố gắng. Vấn đề của em là em không hứng thú với môn lịch sử. / Nam: Vâng, giá mà em thích lịch sử như thích âm nhạc thì tốt biết mấy. / Hỏi: Vì sao điểm lịch sử của cậu ấy không tốt? (A không cố gắng · B không có hứng thú · C đến muộn)"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "黑色的"
        },
        {
         "zh": "蓝色的"
        },
        {
         "zh": "绿色的"
        }
       ],
       "answer": "A",
       "audio": [
        1933.5,
        1977.5
       ],
       "script": "男：带上伞吧，天阴了，可能会下雨。\n女：知道了，我带着呢。\n男：伞还在桌子上呢，你别忘了。\n女：我拿的是那把黑色的，短的那把。\n问：女的拿了哪把伞？",
       "scriptVn": "Nam: Mang ô đi, trời âm u rồi, có thể sẽ mưa. / Nữ: Biết rồi, em đang mang đây. / Nam: Ô vẫn ở trên bàn kìa, em đừng quên. / Nữ: Em cầm cái màu đen, cái ngắn ấy. / Hỏi: Người phụ nữ cầm cái ô nào? (A màu đen · B màu xanh lam · C màu xanh lá)"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "吃面包"
        },
        {
         "zh": "喝果汁"
        },
        {
         "zh": "简单点儿"
        }
       ],
       "answer": "C",
       "audio": [
        1987.8,
        2030.3
       ],
       "script": "女：吃了午饭再走吧，我做两个菜，很快的。\n男：简单吃点儿面条儿就可以了。\n女：好，那我去做鸡蛋面，你先喝杯茶。\n男：要不要我帮忙啊？\n问：男的希望怎么样？",
       "scriptVn": "Nữ: Ăn trưa rồi hãy đi, tôi nấu hai món, nhanh lắm. / Nam: Ăn đơn giản bát mì là được rồi. / Nữ: Được, vậy tôi đi nấu mì trứng, anh uống cốc trà trước đi. / Nam: Có cần tôi giúp không? / Hỏi: Người đàn ông mong muốn thế nào? (A ăn bánh mì · B uống nước ép · C đơn giản thôi)"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "三天"
        },
        {
         "zh": "半年"
        },
        {
         "zh": "还没定"
        }
       ],
       "answer": "C",
       "audio": [
        2040.4,
        2091.1
       ],
       "script": "男：你这次要离开多长时间？\n女：还没决定，一周或者两周吧。\n男：你这是第几次去那儿了？\n女：第三次。有什么事给我打电话、写电子邮件都可以。\n问：女的要出去多长时间？",
       "scriptVn": "Nam: Lần này em đi bao lâu? / Nữ: Chưa quyết định, một hoặc hai tuần. / Nam: Đây là lần thứ mấy em đến đó rồi? / Nữ: Lần thứ ba. Có việc gì thì gọi điện hay gửi email cho em đều được. / Hỏi: Người phụ nữ đi bao lâu? (A ba ngày · B nửa năm · C chưa định)"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "选帽子"
        },
        {
         "zh": "选衣服"
        },
        {
         "zh": "卖衣服"
        }
       ],
       "answer": "B",
       "audio": [
        2101.2,
        2146.4
       ],
       "script": "女：我明天穿什么衣服好？你帮我选选？\n男：你想穿裙子还是裤子？\n女：我想穿裙子，这条白色的怎么样？\n男：同意。那穿哪双鞋呢？\n问：他们在做什么？",
       "scriptVn": "Nữ: Mai em mặc quần áo gì thì đẹp? Anh chọn giúp em nhé? / Nam: Em muốn mặc váy hay mặc quần? / Nữ: Em muốn mặc váy, cái màu trắng này thế nào? / Nam: Đồng ý. Thế đi đôi giày nào? / Hỏi: Họ đang làm gì? (A chọn mũ · B chọn quần áo · C bán quần áo)"
      }
     ]
    }
   ]
  },
  {
   "id": "read",
   "name": "Đọc",
   "icon": "book",
   "parts": [
    {
     "name": "Phần 1",
     "range": [
      41,
      50
     ],
     "type": "sent-match",
     "intro": "Chọn câu ở trên có liên quan (câu đáp / câu ghép) với mỗi câu bên dưới.",
     "groups": [
      {
       "range": [
        41,
        45
       ],
       "options": [
        {
         "k": "A",
         "zh": "这是一个很好的机会，但我对自己的游泳成绩不太满意。",
         "vn": "Đây là một cơ hội rất tốt, nhưng tôi không hài lòng lắm với thành tích bơi của mình."
        },
        {
         "k": "B",
         "zh": "我刚才在电梯门口遇到经理了。",
         "vn": "Vừa nãy tôi gặp giám đốc ở cửa thang máy."
        },
        {
         "k": "C",
         "zh": "这儿的冬天就是这样，慢慢地你就习惯了。",
         "vn": "Mùa đông ở đây là như vậy, dần dần bạn sẽ quen."
        },
        {
         "k": "D",
         "zh": "我的电脑又不能用了，你来帮我看看？",
         "vn": "Máy tính của tôi lại không dùng được rồi, bạn đến xem giúp tôi nhé?"
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "你们就别担心了。",
         "vn": "Các anh chị đừng lo nữa."
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "这次比赛，世界很多国家的运动员都来参加。",
         "vn": "Cuộc thi lần này, vận động viên của rất nhiều nước trên thế giới đều đến tham gia.",
         "answer": "A"
        },
        {
         "n": 42,
         "zh": "外面的风刮得真大！",
         "vn": "Gió bên ngoài thổi mạnh thật!",
         "answer": "C"
        },
        {
         "n": 43,
         "zh": "你那个太旧了，换一个吧。很便宜，就两三千块钱。",
         "vn": "Cái của cậu cũ quá rồi, đổi cái khác đi. Rẻ lắm, chỉ hai ba nghìn tệ thôi.",
         "answer": "D"
        },
        {
         "n": 44,
         "zh": "孩子已经18岁了，知道怎么照顾自己。",
         "vn": "Con đã 18 tuổi rồi, biết cách tự chăm sóc bản thân.",
         "answer": "F"
        },
        {
         "n": 45,
         "zh": "他让我告诉你，下午两点半在公司会议室开会。",
         "vn": "Anh ấy bảo tôi nói với bạn, hai rưỡi chiều họp ở phòng họp công ty.",
         "answer": "B"
        }
       ]
      },
      {
       "range": [
        46,
        50
       ],
       "options": [
        {
         "k": "A",
         "zh": "你认识那位先生，是吗？",
         "vn": "Bạn quen vị tiên sinh đó, phải không?"
        },
        {
         "k": "B",
         "zh": "妹妹在北京上大学，三年级。",
         "vn": "Em gái học đại học ở Bắc Kinh, năm thứ ba."
        },
        {
         "k": "C",
         "zh": "他感冒了，有点儿发烧。",
         "vn": "Anh ấy bị cảm, hơi sốt."
        },
        {
         "k": "D",
         "zh": "女儿第一次骑马的时候比较害怕。",
         "vn": "Lần đầu cưỡi ngựa, con gái tôi khá sợ."
        },
        {
         "k": "E",
         "zh": "叔叔，您愿意教我吗？",
         "vn": "Chú ơi, chú có muốn dạy cháu không?"
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "终于把教室打扫干净了，她洗澡去了。",
         "vn": "Cuối cùng cũng dọn sạch phòng học, cô ấy đi tắm rồi.",
         "answer": "B"
        },
        {
         "n": 47,
         "zh": "你10岁了？体育怎么样？喜欢打篮球吗？",
         "vn": "Cháu 10 tuổi rồi à? Môn thể dục thế nào? Có thích chơi bóng rổ không?",
         "answer": "E"
        },
        {
         "n": 48,
         "zh": "他是我的同事，需要我为你介绍一下吗？",
         "vn": "Anh ấy là đồng nghiệp của tôi, có cần tôi giới thiệu cho bạn không?",
         "answer": "A"
        },
        {
         "n": 49,
         "zh": "那你在家休息几天吧。",
         "vn": "Vậy anh nghỉ ở nhà mấy ngày đi.",
         "answer": "C"
        },
        {
         "n": 50,
         "zh": "现在，她觉得那是一件非常快乐的事情。",
         "vn": "Bây giờ cô bé thấy đó là một việc vô cùng vui vẻ.",
         "answer": "D"
        }
       ]
      }
     ]
    },
    {
     "name": "Phần 2",
     "range": [
      51,
      60
     ],
     "type": "word-fill",
     "intro": "Chọn từ thích hợp điền vào chỗ trống.",
     "groups": [
      {
       "range": [
        51,
        55
       ],
       "words": [
        {
         "k": "A",
         "zh": "向"
        },
        {
         "k": "B",
         "zh": "然后"
        },
        {
         "k": "C",
         "zh": "花"
        },
        {
         "k": "D",
         "zh": "筷子"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "相同"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "您站中间就可以了，好，再（　）左边一点儿，非常好！",
         "vn": "Ông đứng giữa là được rồi, được, (hướng về) bên trái thêm chút nữa, rất đẹp!",
         "answer": "A"
        },
        {
         "n": 52,
         "zh": "服务员，请你再给我拿一双（　）。",
         "vn": "Phục vụ, làm ơn lấy cho tôi thêm một đôi (đũa).",
         "answer": "D"
        },
        {
         "n": 53,
         "zh": "虽然这两个问题有不一样的地方，但是解决的办法是（　）的。",
         "vn": "Tuy hai vấn đề này có chỗ khác nhau, nhưng cách giải quyết thì (giống nhau).",
         "answer": "F"
        },
        {
         "n": 54,
         "zh": "这次出去旅游，一共去了7个城市，（　）了一万多块钱。",
         "vn": "Chuyến du lịch lần này đi tổng cộng 7 thành phố, (tiêu) hết hơn mười nghìn tệ.",
         "answer": "C"
        },
        {
         "n": 55,
         "zh": "明天早上我先去银行，（　）再去找你。",
         "vn": "Sáng mai tôi đến ngân hàng trước, (sau đó) mới đi tìm bạn.",
         "answer": "B"
        }
       ]
      },
      {
       "range": [
        56,
        60
       ],
       "words": [
        {
         "k": "A",
         "zh": "关心"
        },
        {
         "k": "B",
         "zh": "差"
        },
        {
         "k": "C",
         "zh": "突然"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "节目"
        },
        {
         "k": "F",
         "zh": "还"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：下一个（　）是什么？\nB：下面为大家唱歌的是王医生，歌的名字是《十五的月亮》，大家欢迎！",
         "vn": "A: (Tiết mục) tiếp theo là gì? / B: Tiếp theo hát tặng mọi người là bác sĩ Vương, tên bài hát là 《Trăng rằm》, xin mời cả nhà!",
         "answer": "E"
        },
        {
         "n": 57,
         "zh": "A：我的飞机票呢？怎么（　）找不到了？\nB：是不是和报纸放一起了？",
         "vn": "A: Vé máy bay của tôi đâu? Sao (bỗng nhiên) không tìm thấy nữa? / B: Có phải để chung với tờ báo không?",
         "answer": "C"
        },
        {
         "n": 58,
         "zh": "A：现在几点了？我的手表又坏了。\nB：我看一下，现在（　）一刻九点。",
         "vn": "A: Bây giờ mấy giờ rồi? Đồng hồ của tôi lại hỏng. / B: Để tôi xem, bây giờ là chín giờ (kém) mười lăm.",
         "answer": "B"
        },
        {
         "n": 59,
         "zh": "A：那本书你（　）了？\nB：对，没什么意思，而且很多地方看不懂。",
         "vn": "A: Cuốn sách đó cậu (trả) rồi à? / B: Ừ, chẳng có gì hay, hơn nữa nhiều chỗ đọc không hiểu.",
         "answer": "F"
        },
        {
         "n": 60,
         "zh": "A：那个药的作用怎么样？脚好些了吗？\nB：好多了，谢谢您的（　）。",
         "vn": "A: Thuốc đó có tác dụng không? Chân đỡ hơn chưa? / B: Đỡ nhiều rồi, cảm ơn sự (quan tâm) của anh.",
         "answer": "A"
        }
       ]
      }
     ]
    },
    {
     "name": "Phần 3",
     "range": [
      61,
      70
     ],
     "type": "mc",
     "intro": "Đọc đoạn văn và chọn đáp án đúng cho câu hỏi ★.",
     "questions": [
      {
       "n": 61,
       "zh": "每次经过他家门口的时候，我几乎都能看到他的那只老猫在树下睡觉。",
       "star": "那只猫经常在哪儿睡觉？",
       "options": [
        {
         "zh": "树下"
        },
        {
         "zh": "椅子上"
        },
        {
         "zh": "办公室"
        }
       ],
       "answer": "A",
       "vn": "Mỗi lần đi qua cửa nhà anh ấy, tôi gần như đều thấy con mèo già của anh ấy ngủ dưới gốc cây. ★ Con mèo thường ngủ ở đâu? A dưới gốc cây · B trên ghế · C văn phòng."
      },
      {
       "n": 62,
       "zh": "奶奶经常对我说：“吃饭七分饱。”“七分”就是70%的意思。很多中国人认为“吃饭七分饱”对身体健康很有帮助。",
       "star": "“吃饭七分饱”是为了：",
       "options": [
        {
         "zh": "健康"
        },
        {
         "zh": "帮助别人"
        },
        {
         "zh": "发现问题"
        }
       ],
       "answer": "A",
       "vn": "Bà thường nói với tôi: \"Ăn cơm no bảy phần.\" \"Bảy phần\" nghĩa là 70%. Nhiều người Trung Quốc cho rằng \"ăn no bảy phần\" rất có ích cho sức khỏe. ★ \"Ăn no bảy phần\" là để: A khỏe mạnh · B giúp đỡ người khác · C phát hiện vấn đề."
      },
      {
       "n": 63,
       "zh": "这里的香蕉非常有名，每年8月这里会举行一个香蕉节，所以，夏季有很多人来这里玩儿。",
       "star": "这个地方：",
       "options": [
        {
         "zh": "常下雪"
        },
        {
         "zh": "很有名"
        },
        {
         "zh": "有很多故事"
        }
       ],
       "answer": "B",
       "vn": "Chuối ở đây rất nổi tiếng, tháng 8 hằng năm nơi này tổ chức lễ hội chuối, vì thế mùa hè có rất nhiều người đến đây chơi. ★ Nơi này: A hay có tuyết · B rất nổi tiếng · C có nhiều câu chuyện."
      },
      {
       "n": 64,
       "zh": "他姓高，但是长得不高，只有一米六。同事们都说：“我们以后叫你小高吧。”他笑着回答：“当然可以，过去朋友们都这么叫我。”",
       "star": "关于他，可以知道什么？",
       "options": [
        {
         "zh": "比较矮"
        },
        {
         "zh": "腿很长"
        },
        {
         "zh": "有60公斤"
        }
       ],
       "answer": "A",
       "vn": "Anh ấy họ Cao nhưng người không cao, chỉ một mét sáu. Đồng nghiệp đều nói: \"Sau này bọn mình gọi cậu là Tiểu Cao nhé.\" Anh ấy cười đáp: \"Tất nhiên được, trước đây bạn bè đều gọi tôi như thế.\" ★ Về anh ấy, có thể biết gì? A khá thấp · B chân rất dài · C nặng 60 cân."
      },
      {
       "n": 65,
       "zh": "太阳从西边出来了吗？他今天怎么这么早就起床了？他一般都要睡到8点以后才起床。",
       "star": "根据这段话，可以知道今天：",
       "options": [
        {
         "zh": "他起得早"
        },
        {
         "zh": "天气不错"
        },
        {
         "zh": "他工作很认真"
        }
       ],
       "answer": "A",
       "vn": "Mặt trời mọc đằng tây à? Sao hôm nay anh ấy dậy sớm thế? Bình thường anh ấy phải ngủ đến sau 8 giờ mới dậy. ★ Theo đoạn văn có thể biết hôm nay: A anh ấy dậy sớm · B thời tiết đẹp · C anh ấy làm việc rất chăm chỉ."
      },
      {
       "n": 66,
       "zh": "手机使我们的学习、工作越来越方便，除了打电话、写短信外，很多手机还可以照相，有时候真的方便极了。",
       "star": "手机经常被用来：",
       "options": [
        {
         "zh": "写字"
        },
        {
         "zh": "写短信"
        },
        {
         "zh": "做练习"
        }
       ],
       "answer": "B",
       "vn": "Điện thoại di động khiến việc học và làm việc của chúng ta ngày càng tiện lợi, ngoài gọi điện, nhắn tin, nhiều điện thoại còn chụp ảnh được, có lúc thật sự tiện vô cùng. ★ Điện thoại thường được dùng để: A viết chữ · B nhắn tin · C làm bài tập."
      },
      {
       "n": 67,
       "zh": "“再见”是一个很有意思的词语。“再见”表示“再一次见面”，所以人们离开时说“再见”，其实也是希望以后再见面。",
       "star": "“再见”出现在什么时候？",
       "options": [
        {
         "zh": "关灯"
        },
        {
         "zh": "见面"
        },
        {
         "zh": "离开"
        }
       ],
       "answer": "C",
       "vn": "\"Tạm biệt\" (再见) là một từ rất thú vị. \"再见\" nghĩa là \"gặp lại lần nữa\", nên khi rời đi người ta nói \"再见\", thật ra cũng là mong sau này gặp lại. ★ \"再见\" xuất hiện khi nào? A tắt đèn · B gặp mặt · C rời đi."
      },
      {
       "n": 68,
       "zh": "西瓜的汁儿多，吃的时候小心点儿，要低下头,不要吃得脸上、衬衫上都是。还有，不要一边吃一边说话。",
       "star": "吃西瓜时须：",
       "options": [
        {
         "zh": "站着"
        },
        {
         "zh": "低着头"
        },
        {
         "zh": "多喝牛奶"
        }
       ],
       "answer": "B",
       "vn": "Dưa hấu nhiều nước, lúc ăn phải cẩn thận, phải cúi đầu xuống, đừng ăn để dính đầy mặt và áo. Còn nữa, đừng vừa ăn vừa nói. ★ Khi ăn dưa hấu cần: A đứng · B cúi đầu · C uống nhiều sữa."
      },
      {
       "n": 69,
       "zh": "你看，这上面写着1.21元，前面的1表示元，中间的2表示角，最后的1表示分。明白了吗？",
       "star": "中间的数字表示：",
       "options": [
        {
         "zh": "元"
        },
        {
         "zh": "角"
        },
        {
         "zh": "分"
        }
       ],
       "answer": "B",
       "vn": "Em xem, trên này ghi 1,21 tệ, số 1 đằng trước là đồng (元), số 2 ở giữa là hào (角), số 1 cuối cùng là xu (分). Hiểu chưa? ★ Chữ số ở giữa biểu thị: A đồng · B hào · C xu."
      },
      {
       "n": 70,
       "zh": "我是一个中学老师，教学生画画儿。每次下课前，我会把下次学生要带的东西写在黑板上，但每次上课时，总会有学生忘了拿铅笔。",
       "star": "学生会忘记拿什么？",
       "options": [
        {
         "zh": "画儿"
        },
        {
         "zh": "手表"
        },
        {
         "zh": "铅笔"
        }
       ],
       "answer": "C",
       "vn": "Tôi là giáo viên trung học, dạy học sinh vẽ tranh. Mỗi lần trước khi tan học, tôi viết lên bảng những thứ học sinh cần mang buổi sau, nhưng mỗi lần lên lớp vẫn có học sinh quên mang bút chì. ★ Học sinh hay quên mang gì? A tranh · B đồng hồ · C bút chì."
      }
     ]
    }
   ]
  },
  {
   "id": "write",
   "name": "Viết",
   "icon": "pencil",
   "parts": [
    {
     "name": "Phần 1",
     "range": [
      71,
      75
     ],
     "type": "arrange",
     "intro": "Bấm lần lượt các từ để sắp xếp thành câu hoàn chỉnh. Bấm vào từ đã xếp để bỏ ra.",
     "example": "Ví dụ: 小船 上 一 河 条 有 → 河上有一条小船。",
     "questions": [
      {
       "n": 71,
       "words": [
        "先",
        "菜单",
        "我们",
        "看看"
       ],
       "answer": "我们先看看菜单。",
       "vn": "Chúng ta xem thực đơn trước đã."
      },
      {
       "n": 72,
       "words": [
        "她",
        "带",
        "忘了",
        "护照"
       ],
       "answer": "她忘了带护照。",
       "vn": "Cô ấy quên mang hộ chiếu."
      },
      {
       "n": 73,
       "words": [
        "很",
        "这些",
        "葡萄",
        "新鲜"
       ],
       "answer": "这些葡萄很新鲜。",
       "vn": "Chỗ nho này rất tươi."
      },
      {
       "n": 74,
       "words": [
        "都",
        "黑色的",
        "熊猫的",
        "眼睛和耳朵",
        "是"
       ],
       "answer": "熊猫的眼睛和耳朵都是黑色的。",
       "vn": "Mắt và tai của gấu trúc đều màu đen."
      },
      {
       "n": 75,
       "words": [
        "你",
        "冷水",
        "洗澡",
        "用",
        "敢不敢"
       ],
       "answer": "你敢不敢用冷水洗澡？",
       "vn": "Bạn có dám tắm bằng nước lạnh không?"
      }
     ]
    },
    {
     "name": "Phần 2",
     "range": [
      76,
      80
     ],
     "type": "write",
     "intro": "Nhìn pinyin, viết chữ Hán thích hợp vào chỗ trống.",
     "example": "Ví dụ: 没（关 guān）系，别难过，高兴点儿。",
     "questions": [
      {
       "n": 76,
       "pre": "他一直都很关心别",
       "py": "ren",
       "post": "。",
       "answer": "人",
       "vn": "Anh ấy luôn rất quan tâm người khác (别人)."
      },
      {
       "n": 77,
       "pre": "你的头发",
       "py": "tài",
       "post": "长了，像草一样。",
       "answer": "太",
       "vn": "Tóc của bạn dài quá (太) rồi, như cỏ vậy."
      },
      {
       "n": 78,
       "pre": "就在这条街的东边，有",
       "py": "ge",
       "post": "眼镜店。",
       "answer": "个",
       "vn": "Ngay phía đông con phố này có một (个) cửa hàng kính mắt."
      },
      {
       "n": 79,
       "pre": "今天是晴天，没有",
       "py": "yún",
       "post": "。",
       "answer": "云",
       "vn": "Hôm nay trời nắng, không có mây (云)."
      },
      {
       "n": 80,
       "pre": "我来中国，除了学习汉语，还希望了解更多的中国",
       "py": "wén",
       "post": "化。",
       "answer": "文",
       "vn": "Tôi đến Trung Quốc, ngoài học tiếng Hán còn mong hiểu thêm nhiều về văn hóa (文化) Trung Quốc."
      }
     ]
    }
   ]
  }
 ]
};
