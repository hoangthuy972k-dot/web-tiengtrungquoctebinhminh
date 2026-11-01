// Đề thi thử HSK 3 – Test 3 (đề thật H31003).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-3",
 "level": "HSK 3",
 "title": "HSK 3 - Test 3",
 "code": "H31003",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-3/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-3.mp3",
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
         "answer": "E",
         "audio": [
          103.2,
          127.7
         ],
         "script": "女：下了飞机，就给我来电话。\n男：好的。你到中国以后，自己照顾好自己。",
         "scriptVn": "Nữ: Xuống máy bay thì gọi điện cho em nhé. / Nam: Được. Em đến Trung Quốc rồi tự chăm sóc bản thân cho tốt."
        },
        {
         "n": 2,
         "answer": "B",
         "audio": [
          133.2,
          157.6
         ],
         "script": "男：请问，二零四房间在哪儿？\n女：请这边走，前面左边第二个就是。",
         "scriptVn": "Nam: Xin hỏi, phòng 204 ở đâu? / Nữ: Mời anh đi lối này, phòng thứ hai bên trái phía trước là đúng."
        },
        {
         "n": 3,
         "answer": "C",
         "audio": [
          163.4,
          186.5
         ],
         "script": "女：眼药水用了吗？有作用没？\n男：有作用，现在眼睛已经不红了。",
         "scriptVn": "Nữ: Dùng thuốc nhỏ mắt chưa? Có tác dụng không? / Nam: Có tác dụng, bây giờ mắt không còn đỏ nữa."
        },
        {
         "n": 4,
         "answer": "F",
         "audio": [
          192.3,
          216.9
         ],
         "script": "男：这些书我可以借多长时间？\n女：一个月。如果看不完，可以再借一个月。",
         "scriptVn": "Nam: Những cuốn sách này tôi mượn được bao lâu? / Nữ: Một tháng. Nếu đọc không hết có thể mượn thêm một tháng."
        },
        {
         "n": 5,
         "answer": "A",
         "audio": [
          222.6,
          246.4
         ],
         "script": "女：这张画是你画的吗？\n男：是我爷爷画的，这是他的一张花鸟画。",
         "scriptVn": "Nữ: Bức tranh này là anh vẽ à? / Nam: Ông nội tôi vẽ, đây là một bức tranh hoa điểu của ông."
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
         "answer": "E",
         "audio": [
          258.6,
          290.8
         ],
         "script": "男：你不舒服吗？要不要我带你去医院检查检查？\n女：没关系，我应该是感冒了，有点儿发烧。",
         "scriptVn": "Nam: Em không khỏe à? Có cần anh đưa em đi bệnh viện khám không? / Nữ: Không sao, chắc em bị cảm, hơi sốt."
        },
        {
         "n": 7,
         "answer": "C",
         "audio": [
          296.4,
          325.2
         ],
         "script": "女：今天的鸡蛋面怎么样？\n男：很好吃，我吃饱了。我认为你做饭的水平越来越高了。",
         "scriptVn": "Nữ: Mì trứng hôm nay thế nào? / Nam: Rất ngon, anh no rồi. Anh thấy tay nghề nấu ăn của em ngày càng giỏi."
        },
        {
         "n": 8,
         "answer": "A",
         "audio": [
          330.7,
          353.1
         ],
         "script": "男：欢迎你来公司工作。\n女：谢谢您！谢谢您给我这个机会，我会努力的。",
         "scriptVn": "Nam: Chào mừng em đến làm việc ở công ty. / Nữ: Cảm ơn anh! Cảm ơn anh đã cho em cơ hội này, em sẽ cố gắng."
        },
        {
         "n": 9,
         "answer": "D",
         "audio": [
          358.8,
          382.4
         ],
         "script": "女：我马上就到，已经到楼下了。你好，一共多少钱？\n男：三十五块。",
         "scriptVn": "Nữ: Em đến ngay đây, đến dưới nhà rồi. Chào anh, tổng cộng bao nhiêu tiền? / Nam: Ba mươi lăm tệ."
        },
        {
         "n": 10,
         "answer": "B",
         "audio": [
          388.1,
          415.3
         ],
         "script": "男：小姐，这么长您看可以吗？\n女：再短一些吧。夏天到了，头发还是短一点儿好。",
         "scriptVn": "Nam: Chị ơi, dài thế này chị thấy được chưa? / Nữ: Ngắn thêm chút nữa đi. Mùa hè đến rồi, tóc vẫn nên ngắn một chút."
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
       "star": "冬天水果很便宜。",
       "answer": false,
       "audio": [
        519.1,
        548.5
       ],
       "script": "在这里，冬天的水果虽然比夏天的贵，但是很新鲜。",
       "scriptVn": "Ở đây, hoa quả mùa đông tuy đắt hơn mùa hè nhưng rất tươi.",
       "starVn": "Hoa quả mùa đông rất rẻ."
      },
      {
       "n": 12,
       "star": "他现在还不能打篮球。",
       "answer": true,
       "audio": [
        555.7,
        592.8
       ],
       "script": "太好了！他几乎不敢相信这是真的。医生说他很快就能像以前一样打篮球了。",
       "scriptVn": "Tốt quá! Anh ấy gần như không dám tin đây là sự thật. Bác sĩ nói anh ấy sắp có thể chơi bóng rổ như trước.",
       "starVn": "Bây giờ anh ấy vẫn chưa chơi bóng rổ được."
      },
      {
       "n": 13,
       "star": "儿子比爸爸矮。",
       "answer": false,
       "audio": [
        599.9,
        642.3
       ],
       "script": "儿子十七岁了，长得很快。去年买的裤子，现在已经不能穿了，现在他和他爸爸一样高了。",
       "scriptVn": "Con trai mười bảy tuổi rồi, lớn rất nhanh. Quần mua năm ngoái giờ đã không mặc được, bây giờ nó cao bằng bố nó rồi.",
       "starVn": "Con trai thấp hơn bố."
      },
      {
       "n": 14,
       "star": "八月十五的月亮大。",
       "answer": true,
       "audio": [
        649.5,
        699.5
       ],
       "script": "八月十五的晚上，月亮就像一个白色的大盘子，非常漂亮。中国人喜欢在这一天和家里人一起吃饭，一起看月亮。",
       "scriptVn": "Tối rằm tháng tám, mặt trăng như một cái đĩa lớn màu trắng, rất đẹp. Người Trung Quốc thích ngày này cùng gia đình ăn cơm, ngắm trăng.",
       "starVn": "Trăng rằm tháng tám rất to."
      },
      {
       "n": 15,
       "star": "他现在住在公司附近。",
       "answer": true,
       "audio": [
        706.7,
        739.5
       ],
       "script": "我搬家了。新的房子虽然小了点儿，但是离公司很近。",
       "scriptVn": "Tôi chuyển nhà rồi. Nhà mới tuy hơi nhỏ nhưng rất gần công ty.",
       "starVn": "Bây giờ anh ấy sống gần công ty."
      },
      {
       "n": 16,
       "star": "女儿喜欢小狗。",
       "answer": false,
       "audio": [
        746.7,
        786
       ],
       "script": "我家有一只小猫，胖胖的，很可爱，女儿经常给它洗澡，特别喜欢和它在一起玩儿。",
       "scriptVn": "Nhà tôi có một con mèo nhỏ, mũm mĩm, rất đáng yêu, con gái tôi thường tắm cho nó, rất thích chơi cùng nó.",
       "starVn": "Con gái thích chó con."
      },
      {
       "n": 17,
       "star": "老李第一次坐船。",
       "answer": true,
       "audio": [
        793.2,
        847.1
       ],
       "script": "我看老李的脸色不太好，一问才知道他昨天晚上没睡好觉。他说，他第一次坐船，以为和坐车没什么不同，他现在明白了，差远了。",
       "scriptVn": "Tôi thấy sắc mặt ông Lý không tốt lắm, hỏi ra mới biết tối qua ông ấy ngủ không ngon. Ông nói lần đầu đi thuyền, tưởng chẳng khác gì đi xe, giờ thì hiểu rồi, khác xa lắm.",
       "starVn": "Ông Lý lần đầu đi thuyền."
      },
      {
       "n": 18,
       "star": "他在黑板上画熊猫。",
       "answer": false,
       "audio": [
        854.3,
        893.8
       ],
       "script": "把椅子上的铅笔给我，谢谢。耳朵、鼻子都画完了，现在该画这只熊猫的脚了。",
       "scriptVn": "Đưa cho tôi cái bút chì trên ghế, cảm ơn. Tai, mũi đều vẽ xong rồi, giờ đến lượt vẽ chân con gấu trúc này.",
       "starVn": "Anh ấy đang vẽ gấu trúc trên bảng đen."
      },
      {
       "n": 19,
       "star": "他的成绩不错。",
       "answer": true,
       "audio": [
        900.9,
        945.9
       ],
       "script": "早上，我在电子信箱里看到了我的成绩单，我的成绩比过去有了很大提高。今天一天我都很快乐。",
       "scriptVn": "Sáng nay tôi thấy bảng điểm trong hộp thư điện tử, thành tích của tôi tiến bộ rất nhiều so với trước. Cả ngày hôm nay tôi đều rất vui.",
       "starVn": "Thành tích của anh ấy khá tốt."
      },
      {
       "n": 20,
       "star": "高兴的时候不会哭。",
       "answer": false,
       "audio": [
        953,
        989.3
       ],
       "script": "哭，不一定表示难过，有的人着急的时候会哭，有的人在高兴的时候也会哭。",
       "scriptVn": "Khóc không nhất định là buồn, có người khi sốt ruột sẽ khóc, có người khi vui cũng khóc.",
       "starVn": "Khi vui thì không khóc."
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
         "zh": "包"
        },
        {
         "zh": "糖"
        },
        {
         "zh": "自行车"
        }
       ],
       "answer": "A",
       "audio": [
        1050.7,
        1083.7
       ],
       "script": "女：谢谢你送我的生日礼物！这个包我非常喜欢。\n男：不客气，祝你生日快乐！\n问：男的送什么礼物了？",
       "scriptVn": "Nữ: Cảm ơn anh tặng quà sinh nhật! Em rất thích cái túi này. / Nam: Không có gì, chúc em sinh nhật vui vẻ! / Hỏi: Người đàn ông tặng quà gì? (A túi · B kẹo · C xe đạp)"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "丈夫和妻子"
        },
        {
         "zh": "校长和老师"
        },
        {
         "zh": "客人和服务员"
        }
       ],
       "answer": "C",
       "audio": [
        1093.9,
        1133.9
       ],
       "script": "男：你好，我住六零七，房间里的空调坏了，你能来看看吗？\n女：好的，先生，对不起，我们马上找人来。\n问：他们最可能是什么关系？",
       "scriptVn": "Nam: Chào chị, tôi ở phòng 607, điều hòa trong phòng hỏng rồi, chị đến xem được không? / Nữ: Vâng thưa anh, xin lỗi, chúng tôi cho người đến ngay. / Hỏi: Họ có khả năng là quan hệ gì? (A vợ chồng · B hiệu trưởng và giáo viên · C khách và nhân viên phục vụ)"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "完成作业"
        },
        {
         "zh": "打扫厨房"
        },
        {
         "zh": "玩儿游戏"
        }
       ],
       "answer": "C",
       "audio": [
        1144.2,
        1172.6
       ],
       "script": "女：你回来就一直玩儿游戏，作业写完了吗？\n男：我在学校就写完了。\n问：男的正在做什么？",
       "scriptVn": "Nữ: Con về đến nhà là chơi game mãi, bài tập làm xong chưa? / Nam: Con làm xong ở trường rồi. / Hỏi: Cậu bé đang làm gì? (A làm bài tập · B dọn bếp · C chơi game)"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "他不渴"
        },
        {
         "zh": "咖啡太甜"
        },
        {
         "zh": "哪里都可以"
        }
       ],
       "answer": "C",
       "audio": [
        1182.8,
        1214.6
       ],
       "script": "男：奇怪，我记得这条街上有一个咖啡馆儿的。\n女：没关系，我们找个地方坐坐就行。\n问：女的是什么意思？",
       "scriptVn": "Nam: Lạ thật, tôi nhớ con phố này có một quán cà phê mà. / Nữ: Không sao, mình tìm chỗ nào ngồi một lát là được. / Hỏi: Người phụ nữ có ý gì? (A anh ấy không khát · B cà phê quá ngọt · C chỗ nào cũng được)"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "太胖了"
        },
        {
         "zh": "太瘦了"
        },
        {
         "zh": "太短了"
        }
       ],
       "answer": "A",
       "audio": [
        1224.9,
        1266.1
       ],
       "script": "女：这条裙子去年才买的，今年就不能穿了。\n男：你吃得太多，也不运动，可能又长十斤肉了吧？\n问：女的为什么不能穿那条裙子？",
       "scriptVn": "Nữ: Cái váy này năm ngoái mới mua, năm nay đã không mặc được. / Nam: Em ăn nhiều quá, lại không vận động, chắc lại lên mười cân rồi? / Hỏi: Vì sao cô ấy không mặc được váy đó? (A béo quá · B gầy quá · C ngắn quá)"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "商场"
        },
        {
         "zh": "饭店"
        },
        {
         "zh": "电影院"
        }
       ],
       "answer": "A",
       "audio": [
        1276.4,
        1309.2
       ],
       "script": "男：帽子在几层呢？\n女：我看看，一层是家电，二层是衣帽，我们去二层。\n问：他们现在在哪儿？",
       "scriptVn": "Nam: Mũ ở tầng mấy nhỉ? / Nữ: Để em xem, tầng một là đồ điện gia dụng, tầng hai là quần áo mũ nón, mình lên tầng hai. / Hỏi: Họ đang ở đâu? (A trung tâm thương mại · B nhà hàng · C rạp chiếu phim)"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "很生气"
        },
        {
         "zh": "是经理"
        },
        {
         "zh": "买了个照相机"
        }
       ],
       "answer": "B",
       "audio": [
        1319.4,
        1348.4
       ],
       "script": "女：再见，一会儿你离开的时候记得关灯。\n男：好的，经理，明天见。\n问：关于女的，可以知道什么？",
       "scriptVn": "Nữ: Tạm biệt, lát nữa lúc ra về nhớ tắt đèn. / Nam: Vâng, thưa giám đốc, mai gặp lại. / Hỏi: Về người phụ nữ, có thể biết gì? (A rất tức giận · B là giám đốc · C mua một cái máy ảnh)"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "姐姐"
        },
        {
         "zh": "妹妹"
        },
        {
         "zh": "邻居"
        }
       ],
       "answer": "A",
       "audio": [
        1358.6,
        1392.8
       ],
       "script": "男：姐，您做的蛋糕真好吃！\n女：洗手了吗？先去把手洗了，然后帮我拿碗筷，准备吃饭。\n问：蛋糕是谁做的？",
       "scriptVn": "Nam: Chị ơi, bánh ga-tô chị làm ngon thật! / Nữ: Rửa tay chưa? Đi rửa tay trước đi, rồi lấy bát đũa giúp chị, chuẩn bị ăn cơm. / Hỏi: Bánh ga-tô do ai làm? (A chị gái · B em gái · C hàng xóm)"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "很不错"
        },
        {
         "zh": "有点儿旧"
        },
        {
         "zh": "不太干净"
        }
       ],
       "answer": "A",
       "audio": [
        1403,
        1433
       ],
       "script": "女：这件衬衫是很好，就是太贵了。\n男：那我再给您便宜五十块，怎么样？\n问：这件衬衫怎么样？",
       "scriptVn": "Nữ: Cái áo sơ mi này rất đẹp, chỉ có điều đắt quá. / Nam: Vậy tôi bớt cho chị thêm năm mươi tệ, được không? / Hỏi: Cái áo sơ mi thế nào? (A rất tốt · B hơi cũ · C không sạch lắm)"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "喜欢音乐"
        },
        {
         "zh": "没什么爱好"
        },
        {
         "zh": "男朋友影响了她"
        }
       ],
       "answer": "C",
       "audio": [
        1443.4,
        1477
       ],
       "script": "男：你怎么突然开始关心体育了？\n女：我的男朋友喜欢看足球比赛，是他影响了我。\n问：女的主要是什么意思？",
       "scriptVn": "Nam: Sao em bỗng nhiên quan tâm đến thể thao thế? / Nữ: Bạn trai em thích xem bóng đá, là anh ấy ảnh hưởng đến em. / Hỏi: Ý chính của người phụ nữ là gì? (A thích âm nhạc · B không có sở thích gì · C bạn trai ảnh hưởng đến cô ấy)"
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
         "zh": "超市"
        },
        {
         "zh": "银行"
        },
        {
         "zh": "办公室"
        }
       ],
       "answer": "A",
       "audio": [
        1555.3,
        1610.3
       ],
       "script": "男：喂，请问小李在家吗？\n女：他出去了，请问您是哪位？\n男：我姓王，是他的同学。他什么时候回来？\n女：他去超市买点儿东西，可能十分钟就回来了。\n问：小李现在最可能在哪儿？",
       "scriptVn": "Nam: Alô, xin hỏi Tiểu Lý có nhà không? / Nữ: Cậu ấy ra ngoài rồi, xin hỏi anh là ai? / Nam: Tôi họ Vương, là bạn học của cậu ấy. Khi nào cậu ấy về? / Nữ: Cậu ấy đi siêu thị mua ít đồ, chắc mười phút nữa về. / Hỏi: Bây giờ Tiểu Lý có khả năng ở đâu nhất? (A siêu thị · B ngân hàng · C văn phòng)"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "9：15"
        },
        {
         "zh": "9：45"
        },
        {
         "zh": "10：15"
        }
       ],
       "answer": "B",
       "audio": [
        1620.3,
        1671
       ],
       "script": "女：我们这儿有个西瓜文化节，您有兴趣去看看吗？\n男：当然有兴趣了。\n女：我们可以一边吃西瓜一边看表演。\n男：好，现在差一刻十点，我们现在去？\n问：现在几点了？",
       "scriptVn": "Nữ: Chỗ chúng tôi có lễ hội văn hóa dưa hấu, anh có hứng thú đi xem không? / Nam: Tất nhiên là có. / Nữ: Mình có thể vừa ăn dưa hấu vừa xem biểu diễn. / Nam: Được, bây giờ là mười giờ kém mười lăm, mình đi luôn nhé? / Hỏi: Bây giờ là mấy giờ? (A 9:15 · B 9:45 · C 10:15)"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "看不懂"
        },
        {
         "zh": "比较简单"
        },
        {
         "zh": "很有意思"
        }
       ],
       "answer": "A",
       "audio": [
        1681,
        1730
       ],
       "script": "男：你把我的那本书放哪儿了？\n女：在桌子上吧。\n男：我要去还书，今天是最后一天，今天必须还。\n女：还了吧，那本书我也没看懂。\n问：女的觉得那本书怎么样？",
       "scriptVn": "Nam: Em để cuốn sách của anh ở đâu rồi? / Nữ: Trên bàn chắc. / Nam: Anh phải đi trả sách, hôm nay là ngày cuối, hôm nay bắt buộc phải trả. / Nữ: Trả đi, cuốn đó em cũng đọc không hiểu. / Hỏi: Người phụ nữ thấy cuốn sách đó thế nào? (A đọc không hiểu · B khá đơn giản · C rất thú vị)"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "游客"
        },
        {
         "zh": "出租车司机"
        },
        {
         "zh": "公共汽车司机"
        }
       ],
       "answer": "B",
       "audio": [
        1740,
        1782.4
       ],
       "script": "女：你好，我去世界公园。\n男：好的，没问题。\n女：从这儿到世界公园远吗？需要多长时间？\n男：不是很远，半个小时吧。\n问：男的是做什么的？",
       "scriptVn": "Nữ: Chào anh, cho tôi đến Công viên Thế giới. / Nam: Vâng, không vấn đề. / Nữ: Từ đây đến Công viên Thế giới có xa không? Mất bao lâu? / Nam: Không xa lắm, khoảng nửa tiếng. / Hỏi: Người đàn ông làm nghề gì? (A du khách · B tài xế taxi · C tài xế xe buýt)"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "非常聪明"
        },
        {
         "zh": "借了几本书"
        },
        {
         "zh": "想看历史书"
        }
       ],
       "answer": "A",
       "audio": [
        1792.4,
        1847.2
       ],
       "script": "男：你知道的怎么这么多，真聪明！\n女：那是因为我看的书多，读书使人聪明。\n男：那你对历史书也了解不少吧，给我介绍几本？\n女：明天吧？我给你写一个单子。\n问：关于女的，可以知道什么？",
       "scriptVn": "Nam: Sao em biết nhiều thế, thông minh thật! / Nữ: Đó là vì em đọc nhiều sách, đọc sách làm người ta thông minh. / Nam: Vậy chắc em cũng hiểu nhiều về sách lịch sử, giới thiệu cho anh vài cuốn nhé? / Nữ: Mai nhé? Em viết cho anh một danh sách. / Hỏi: Về người phụ nữ, có thể biết gì? (A rất thông minh · B mượn vài cuốn sách · C muốn đọc sách lịch sử)"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "一米八"
        },
        {
         "zh": "一米八一"
        },
        {
         "zh": "一米八二"
        }
       ],
       "answer": "C",
       "audio": [
        1857.2,
        1897.9
       ],
       "script": "女：小王，你现在有多高？\n男：一米八二。您儿子呢？他比我高？\n女：他可能比你低一点儿。\n男：那也有一米八，很高了。\n问：男的有多高？",
       "scriptVn": "Nữ: Tiểu Vương, bây giờ cháu cao bao nhiêu? / Nam: Một mét tám hai ạ. Con trai cô thì sao? Cao hơn cháu không? / Nữ: Chắc thấp hơn cháu một chút. / Nam: Thế cũng một mét tám, cao lắm rồi. / Hỏi: Người đàn ông cao bao nhiêu? (A 1m80 · B 1m81 · C 1m82)"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "刷牙"
        },
        {
         "zh": "回答问题"
        },
        {
         "zh": "教学生数学"
        }
       ],
       "answer": "B",
       "audio": [
        1907.9,
        1949.6
       ],
       "script": "男：你叫什么名字？\n女：我叫李静。\n男：请坐，不用站着。你会回答刚才的那个问题吗？\n女：我觉得应该是新年。\n问：女的在做什么？",
       "scriptVn": "Nam: Em tên là gì? / Nữ: Em tên là Lý Tĩnh. / Nam: Mời ngồi, không cần đứng. Em có trả lời được câu hỏi vừa rồi không? / Nữ: Em nghĩ đáp án là năm mới. / Hỏi: Cô gái đang làm gì? (A đánh răng · B trả lời câu hỏi · C dạy toán cho học sinh)"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "办公楼"
        },
        {
         "zh": "校医院"
        },
        {
         "zh": "图书馆"
        }
       ],
       "answer": "C",
       "audio": [
        1959.5,
        2008.9
       ],
       "script": "女：图书馆在哪儿？\n男：我看看这张校园地图。\n女：图书馆，在这儿，在办公楼的下面。\n男：知道了，我们从办公楼向南走就是图书馆。\n问：他们要去哪儿？",
       "scriptVn": "Nữ: Thư viện ở đâu? / Nam: Để anh xem bản đồ trường. / Nữ: Thư viện, ở đây này, ở phía dưới tòa nhà văn phòng. / Nam: Biết rồi, từ tòa văn phòng đi về phía nam là tới thư viện. / Hỏi: Họ muốn đi đâu? (A tòa văn phòng · B phòng y tế trường · C thư viện)"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "跳舞"
        },
        {
         "zh": "照片"
        },
        {
         "zh": "练习题"
        }
       ],
       "answer": "B",
       "audio": [
        2018.8,
        2075.3
       ],
       "script": "男：上次你们参加表演的照片，我选了几张洗出来了。\n女：太好了，我看看。\n男：照得不错，你们都是一个年级的？\n女：不是，这两个大笑的是二年级的，这个是我们班的。\n问：他们在说什么？",
       "scriptVn": "Nam: Ảnh các em tham gia biểu diễn lần trước, thầy chọn rửa ra mấy tấm rồi. / Nữ: Tuyệt quá, em xem nào. / Nam: Chụp đẹp đấy, các em cùng một khối à? / Nữ: Không ạ, hai bạn đang cười to này học lớp hai, bạn này ở lớp em. / Hỏi: Họ đang nói về gì? (A nhảy múa · B ảnh · C bài tập)"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "山高900米"
        },
        {
         "zh": "9月9日爬山"
        },
        {
         "zh": "山上有9个太阳"
        }
       ],
       "answer": "B",
       "audio": [
        2085.3,
        2136
       ],
       "script": "女：这个山我来过很多次了，但还不知道它叫什么山。\n男：它叫“九日山”。\n女：为什么叫这个名字呢？\n男：以前，九月九人们都要来这儿爬山。\n问：它为什么被叫做“九日山”？",
       "scriptVn": "Nữ: Ngọn núi này em đến nhiều lần rồi mà vẫn không biết nó tên là núi gì. / Nam: Nó tên là \"núi Cửu Nhật\". / Nữ: Sao lại gọi tên này? / Nam: Ngày xưa, cứ mùng chín tháng chín người ta đều đến đây leo núi. / Hỏi: Vì sao nó được gọi là \"núi Cửu Nhật\"? (A núi cao 900 mét · B leo núi ngày 9 tháng 9 · C trên núi có 9 mặt trời)"
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
         "zh": "有不清楚的地方，大家可以问我。",
         "vn": "Có chỗ nào chưa rõ, mọi người có thể hỏi tôi."
        },
        {
         "k": "B",
         "zh": "遇到问题时不要太着急。我觉得李阿姨一定可以帮我们的忙。",
         "vn": "Gặp vấn đề đừng quá sốt ruột. Tôi nghĩ dì Lý nhất định sẽ giúp được chúng ta."
        },
        {
         "k": "C",
         "zh": "晚上开车，来杯茶或者苹果汁吧。",
         "vn": "Buổi tối phải lái xe, uống cốc trà hoặc nước táo đi."
        },
        {
         "k": "D",
         "zh": "图书馆里比较安静，我喜欢在那儿学习。",
         "vn": "Trong thư viện khá yên tĩnh, tôi thích học ở đó."
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "别看了，把电视关了吧，明天还要上班呢。",
         "vn": "Đừng xem nữa, tắt ti vi đi, mai còn phải đi làm."
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "她的习惯和我们不一样，她更愿意去教室。",
         "vn": "Thói quen của cô ấy khác chúng tôi, cô ấy thích đến lớp học hơn.",
         "answer": "D"
        },
        {
         "n": 42,
         "zh": "菜点完了，你想喝点儿什么？啤酒？",
         "vn": "Gọi món xong rồi, anh muốn uống gì? Bia nhé?",
         "answer": "C"
        },
        {
         "n": 43,
         "zh": "你有什么好办法吗？你快想想！",
         "vn": "Anh có cách gì hay không? Anh mau nghĩ đi!",
         "answer": "B"
        },
        {
         "n": 44,
         "zh": "马上，这个节目还有10分钟就结束了。",
         "vn": "Ngay đây, chương trình này còn 10 phút nữa là hết.",
         "answer": "F"
        },
        {
         "n": 45,
         "zh": "昨天课上讲的那些题，你们会做了吗？",
         "vn": "Những bài giảng trên lớp hôm qua, các em làm được chưa?",
         "answer": "A"
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
         "zh": "已经都解决了，校长，您放心吧。",
         "vn": "Đã giải quyết hết rồi, thưa hiệu trưởng, ông yên tâm."
        },
        {
         "k": "B",
         "zh": "一起去踢足球，好不好？",
         "vn": "Cùng đi đá bóng, được không?"
        },
        {
         "k": "C",
         "zh": "冰箱里还有不少香蕉和葡萄呢。",
         "vn": "Trong tủ lạnh vẫn còn khá nhiều chuối và nho."
        },
        {
         "k": "D",
         "zh": "小王没来？打他电话怎么一直没人接？",
         "vn": "Tiểu Vương không đến à? Sao gọi điện mãi không ai nghe?"
        },
        {
         "k": "E",
         "zh": "我们是经过同事介绍认识的，已经认识两年了。",
         "vn": "Chúng tôi quen nhau qua đồng nghiệp giới thiệu, đã quen được hai năm rồi."
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "他女朋友比他大一岁，很可爱，而且很聪明。",
         "vn": "Bạn gái anh ấy lớn hơn anh ấy một tuổi, rất đáng yêu, hơn nữa rất thông minh.",
         "answer": "E"
        },
        {
         "n": 47,
         "zh": "奶奶，家里是不是没水果了？",
         "vn": "Bà ơi, nhà mình hết hoa quả rồi à?",
         "answer": "C"
        },
        {
         "n": 48,
         "zh": "上次会上说到的那些问题怎么样了？",
         "vn": "Những vấn đề được nhắc đến trong cuộc họp lần trước thế nào rồi?",
         "answer": "A"
        },
        {
         "n": 49,
         "zh": "你等我一下，我去换一双鞋就来。",
         "vn": "Bạn đợi tôi một chút, tôi đi thay đôi giày rồi đến ngay.",
         "answer": "B"
        },
        {
         "n": 50,
         "zh": "他去火车站了，我刚才在电梯门口看见他了。",
         "vn": "Anh ấy ra ga tàu rồi, lúc nãy tôi thấy anh ấy ở cửa thang máy.",
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
         "zh": "简单"
        },
        {
         "k": "B",
         "zh": "举行"
        },
        {
         "k": "C",
         "zh": "像"
        },
        {
         "k": "D",
         "zh": "复习"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "附近"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "有些事情看上去很（　），但要做好，其实不容易。",
         "vn": "Có những việc nhìn thì rất (đơn giản), nhưng muốn làm tốt thật ra không dễ.",
         "answer": "A"
        },
        {
         "n": 52,
         "zh": "听张先生说，机场（　）那个宾馆的环境不错。",
         "vn": "Nghe ông Trương nói, khách sạn (gần) sân bay đó môi trường rất tốt.",
         "answer": "F"
        },
        {
         "n": 53,
         "zh": "那个会议要在我们学校（　），所以老师们最近特别忙。",
         "vn": "Hội nghị đó sẽ (tổ chức) ở trường chúng ta, nên dạo này thầy cô đặc biệt bận.",
         "answer": "B"
        },
        {
         "n": 54,
         "zh": "她和她妈妈长得真（　）啊！",
         "vn": "Cô ấy và mẹ trông (giống) nhau thật!",
         "answer": "C"
        },
        {
         "n": 55,
         "zh": "明天上午考数学，你（　）得怎么样了？",
         "vn": "Sáng mai thi toán, em (ôn tập) thế nào rồi?",
         "answer": "D"
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
         "zh": "终于"
        },
        {
         "k": "B",
         "zh": "普通话"
        },
        {
         "k": "C",
         "zh": "满意"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "骑"
        },
        {
         "k": "F",
         "zh": "一会儿"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：怎么样，这房子您还（　）吧？\nB：很不错，但我还想看看其他的。",
         "vn": "A: Thế nào, căn nhà này ông có (hài lòng) không? / B: Rất tốt, nhưng tôi vẫn muốn xem thêm căn khác.",
         "answer": "C"
        },
        {
         "n": 57,
         "zh": "A：照片上（　）马的这个人是你爸爸？\nB：是的，那时他刚参加工作，很年轻。",
         "vn": "A: Người (cưỡi) ngựa trong ảnh là bố bạn à? / B: Đúng rồi, lúc đó ông mới đi làm, còn rất trẻ.",
         "answer": "E"
        },
        {
         "n": 58,
         "zh": "A：儿子，快起床，外面天气非常好，我们出去跑跑步。\nB：今天是周末，您让我再睡（　）吧。",
         "vn": "A: Con trai, mau dậy đi, ngoài trời rất đẹp, mình ra ngoài chạy bộ. / B: Hôm nay là cuối tuần, mẹ cho con ngủ thêm (một lát) nữa đi.",
         "answer": "F"
        },
        {
         "n": 59,
         "zh": "A：他的（　）说得真好。\nB：当然了，你不知道？他是北京人。",
         "vn": "A: Tiếng (phổ thông) của anh ấy nói hay thật. / B: Tất nhiên rồi, bạn không biết à? Anh ấy là người Bắc Kinh.",
         "answer": "B"
        },
        {
         "n": 60,
         "zh": "A：8年了，她（　）同意跟我结婚了。\nB：真的吗？太好了！我真为你高兴！",
         "vn": "A: 8 năm rồi, cô ấy (cuối cùng) cũng đồng ý cưới tôi. / B: Thật à? Tốt quá! Tôi thật sự mừng cho anh!",
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
       "zh": "到了机场，他发现护照不见了，在行李箱里找了半天，也没找到，很着急。",
       "star": "他为什么着急？",
       "options": [
        {
         "zh": "迟到了"
        },
        {
         "zh": "忘记拿机票了"
        },
        {
         "zh": "找不到护照了"
        }
       ],
       "answer": "C",
       "vn": "Đến sân bay anh ấy phát hiện hộ chiếu không thấy đâu, tìm trong vali mãi cũng không thấy, rất sốt ruột. ★ Vì sao anh ấy sốt ruột? A đến muộn · B quên mang vé máy bay · C không tìm thấy hộ chiếu."
      },
      {
       "n": 62,
       "zh": "人们经常说：“面包会有的，牛奶也会有的。”是的，如果努力，什么都会有的。",
       "star": "这句话主要想告诉我们：",
       "options": [
        {
         "zh": "要相信别人"
        },
        {
         "zh": "兴趣最重要"
        },
        {
         "zh": "努力才有希望"
        }
       ],
       "answer": "C",
       "vn": "Người ta thường nói: \"Bánh mì sẽ có, sữa cũng sẽ có.\" Đúng vậy, nếu cố gắng thì cái gì cũng sẽ có. ★ Câu này chủ yếu muốn nói với chúng ta: A phải tin người khác · B hứng thú là quan trọng nhất · C cố gắng mới có hy vọng."
      },
      {
       "n": 63,
       "zh": "上个星期和朋友们去游泳，把我累坏了，到现在我的腿还在疼。看来我是应该多锻炼锻炼了。",
       "star": "他打算：",
       "options": [
        {
         "zh": "去医院"
        },
        {
         "zh": "锻炼身体"
        },
        {
         "zh": "下午去游泳"
        }
       ],
       "answer": "B",
       "vn": "Tuần trước đi bơi với bạn bè làm tôi mệt rã rời, đến giờ chân vẫn còn đau. Xem ra tôi nên rèn luyện nhiều hơn. ★ Anh ấy định: A đi bệnh viện · B rèn luyện thân thể · C chiều đi bơi."
      },
      {
       "n": 64,
       "zh": "越高的地方越冷，山路也越难走。但是不用担心，有我呢，我去年秋天爬过这个山，这儿我还是比较了解的。我饿了，我们先坐下来吃点儿饭、喝点儿水，然后再爬。一会儿我们可以从中间这条路上去。",
       "star": "根据这段话，可以知道什么？",
       "options": [
        {
         "zh": "今天是阴天"
        },
        {
         "zh": "现在是秋季"
        },
        {
         "zh": "他来过这儿"
        }
       ],
       "answer": "C",
       "vn": "Càng lên cao càng lạnh, đường núi cũng càng khó đi. Nhưng đừng lo, có tôi đây, mùa thu năm ngoái tôi đã leo núi này, chỗ này tôi khá rành. Tôi đói rồi, mình ngồi xuống ăn chút cơm, uống chút nước rồi leo tiếp. Lát nữa mình có thể đi lên bằng con đường ở giữa. ★ Theo đoạn văn có thể biết gì? A hôm nay trời âm u · B bây giờ là mùa thu · C anh ấy từng đến đây."
      },
      {
       "n": 65,
       "zh": "“6月的天，孩子的脸，说变就变。”刚才还是大晴天，现在就要用伞了。雨越下越大，天也变得越来越黑，街上一辆出租车也打不到了。",
       "star": "6月的天气：",
       "options": [
        {
         "zh": "热极了"
        },
        {
         "zh": "变化快"
        },
        {
         "zh": "一般不下雨"
        }
       ],
       "answer": "B",
       "vn": "\"Trời tháng 6 như mặt trẻ con, nói đổi là đổi.\" Vừa nãy còn nắng to, giờ đã phải dùng ô. Mưa càng lúc càng to, trời cũng càng lúc càng tối, trên phố không bắt được chiếc taxi nào. ★ Thời tiết tháng 6: A nóng vô cùng · B thay đổi nhanh · C thường không mưa."
      },
      {
       "n": 66,
       "zh": "看书时会遇到一些历史上的人或者国家的名字，这些字现在很多都不用了，想要知道它们的读音和意思，还需要词典的帮助，所以有本词典很方便。",
       "star": "看书时会遇到：",
       "options": [
        {
         "zh": "老朋友"
        },
        {
         "zh": "不认识的字"
        },
        {
         "zh": "爱好相同的人"
        }
       ],
       "answer": "B",
       "vn": "Khi đọc sách sẽ gặp tên một số nhân vật hay quốc gia trong lịch sử, nhiều chữ trong đó bây giờ không còn dùng, muốn biết cách đọc và nghĩa thì cần đến từ điển, vì thế có một cuốn từ điển rất tiện. ★ Khi đọc sách sẽ gặp: A bạn cũ · B chữ không biết · C người có cùng sở thích."
      },
      {
       "n": 67,
       "zh": "过去人们喜欢看报纸，现在越来越多的人喜欢在电脑上看新闻。除了看新闻，人们还可以在网上听歌、看电影、买卖东西。",
       "star": "上网后，人们可以：",
       "options": [
        {
         "zh": "做米饭"
        },
        {
         "zh": "坐地铁"
        },
        {
         "zh": "买东西"
        }
       ],
       "answer": "C",
       "vn": "Trước đây người ta thích đọc báo, bây giờ ngày càng nhiều người thích xem tin tức trên máy tính. Ngoài xem tin tức, người ta còn có thể nghe nhạc, xem phim, mua bán đồ trên mạng. ★ Lên mạng, người ta có thể: A nấu cơm · B đi tàu điện ngầm · C mua đồ."
      },
      {
       "n": 68,
       "zh": "超市里一箱牛奶如果卖32.56元，也就是32块5角6分，那可能会带来许多不方便，因为现在人们的钱包里很少有“分”这么小的零钱。",
       "star": "人们的钱包里很少有：",
       "options": [
        {
         "zh": "6分"
        },
        {
         "zh": "5角"
        },
        {
         "zh": "2元"
        }
       ],
       "answer": "A",
       "vn": "Trong siêu thị nếu một thùng sữa bán 32,56 tệ, tức là 32 tệ 5 hào 6 xu, có thể sẽ gây nhiều bất tiện, vì bây giờ trong ví người ta rất ít có tiền lẻ nhỏ đến đơn vị \"xu\". ★ Trong ví người ta rất ít có: A 6 xu · B 5 hào · C 2 tệ."
      },
      {
       "n": 69,
       "zh": "每天睡觉前，女儿总会要求妈妈给她讲一个故事，开始的时候她听得很认真，慢慢地就睡着了。",
       "star": "根据这段话，女儿：",
       "options": [
        {
         "zh": "爱听故事"
        },
        {
         "zh": "变化很大"
        },
        {
         "zh": "害怕一个人睡觉"
        }
       ],
       "answer": "A",
       "vn": "Mỗi tối trước khi ngủ, con gái luôn đòi mẹ kể một câu chuyện, lúc đầu bé nghe rất chăm chú, rồi dần dần ngủ thiếp đi. ★ Theo đoạn văn, con gái: A thích nghe kể chuyện · B thay đổi rất nhiều · C sợ ngủ một mình."
      },
      {
       "n": 70,
       "zh": "那个地方很有名，蓝天，白云，绿草，很多人喜欢去那里旅游。我哥哥家就住在那儿，他们家旁边有一条小河，河边有高高的树，河里游着一种黄色的小鱼。",
       "star": "那个地方怎么样？",
       "options": [
        {
         "zh": "经常刮风"
        },
        {
         "zh": "环境很好"
        },
        {
         "zh": "人们很热情"
        }
       ],
       "answer": "B",
       "vn": "Nơi đó rất nổi tiếng, trời xanh, mây trắng, cỏ xanh, nhiều người thích đến đó du lịch. Nhà anh trai tôi ở đó, cạnh nhà có một con sông nhỏ, bờ sông có cây cao, dưới sông có một loài cá nhỏ màu vàng bơi lội. ★ Nơi đó thế nào? A thường có gió · B môi trường rất tốt · C người dân rất nhiệt tình."
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
        "送给",
        "她决定",
        "把手机",
        "弟弟"
       ],
       "answer": "她决定把手机送给弟弟。",
       "vn": "Cô ấy quyết định tặng điện thoại cho em trai."
      },
      {
       "n": 72,
       "words": [
        "见面",
        "没",
        "我和这个学生",
        "很久",
        "了"
       ],
       "answer": "我和这个学生很久没见面了。",
       "vn": "Tôi và học sinh này đã lâu không gặp nhau."
      },
      {
       "n": 73,
       "words": [
        "经常",
        "的",
        "春天",
        "刮风",
        "这个城市"
       ],
       "answer": "这个城市的春天经常刮风。",
       "vn": "Mùa xuân ở thành phố này thường có gió."
      },
      {
       "n": 74,
       "words": [
        "他的汉字",
        "写",
        "很漂亮",
        "得"
       ],
       "answer": "他的汉字写得很漂亮。",
       "vn": "Chữ Hán của anh ấy viết rất đẹp."
      },
      {
       "n": 75,
       "words": [
        "花了",
        "叔叔的",
        "900块钱",
        "太阳镜"
       ],
       "answer": "叔叔的太阳镜花了900块钱。",
       "vn": "Cặp kính râm của chú hết 900 tệ."
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
       "pre": "4",
       "py": "yuè",
       "post": "7号是我的生日，中午你们来我家吃饭吧。",
       "answer": "月",
       "vn": "Ngày 7 tháng (月) 4 là sinh nhật tôi, trưa các bạn đến nhà tôi ăn cơm nhé."
      },
      {
       "n": 77,
       "pre": "看地图？很容易，上北、下南、左西、右东，明",
       "py": "bai",
       "post": "了？",
       "answer": "白",
       "vn": "Xem bản đồ à? Dễ lắm, trên bắc, dưới nam, trái tây, phải đông, hiểu (明白) chưa?"
      },
      {
       "n": 78,
       "pre": "一",
       "py": "qiān",
       "post": "万年前，动物们出现了吗？",
       "answer": "千",
       "vn": "Mười triệu (一千万) năm trước, động vật đã xuất hiện chưa?"
      },
      {
       "n": 79,
       "pre": "外面下雪了，你让孩子路上小",
       "py": "xīn",
       "post": "点儿。",
       "answer": "心",
       "vn": "Ngoài trời có tuyết rồi, anh dặn con đi đường cẩn thận (小心) nhé."
      },
      {
       "n": 80,
       "pre": "生病了要注意休息，",
       "py": "yīn",
       "post": "为健康最重要。",
       "answer": "因",
       "vn": "Bị ốm thì phải chú ý nghỉ ngơi, vì (因为) sức khỏe là quan trọng nhất."
      }
     ]
    }
   ]
  }
 ]
};
