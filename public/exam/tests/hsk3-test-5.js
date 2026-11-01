// Đề thi thử HSK 3 – Test 5 (đề thật H31005).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-5",
 "level": "HSK 3",
 "title": "HSK 3 - Test 5",
 "code": "H31005",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-5/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-5.mp3",
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
         "answer": "F",
         "audio": [
          105.9,
          134.8
         ],
         "script": "女：我这是第一次听小李唱歌，他唱得真不错。\n男：唱歌和跳舞，他都是高水平。",
         "scriptVn": "Nữ: Đây là lần đầu em nghe Tiểu Lý hát, anh ấy hát hay thật. / Nam: Hát và nhảy, cậu ấy đều trình độ cao."
        },
        {
         "n": 2,
         "answer": "A",
         "audio": [
          139.7,
          169.5
         ],
         "script": "男：这是球赛结束后我们照的照片，你看照得怎么样？\n女：球赛？你参加足球比赛了？",
         "scriptVn": "Nam: Đây là ảnh chúng tôi chụp sau trận bóng, em xem chụp thế nào? / Nữ: Trận bóng? Anh tham gia thi đấu bóng đá à?"
        },
        {
         "n": 3,
         "answer": "B",
         "audio": [
          174.7,
          200.9
         ],
         "script": "女：今天第一天上课，你觉得怎么样？\n男：很好，我喜欢这儿，谢谢您的关心。",
         "scriptVn": "Nữ: Hôm nay ngày đầu tiên đi học, em thấy thế nào? / Nam: Rất tốt, em thích ở đây, cảm ơn cô đã quan tâm."
        },
        {
         "n": 4,
         "answer": "C",
         "audio": [
          205.9,
          227.3
         ],
         "script": "男：这个礼物真的是送给我的吗？\n女：当然了，祝你生日快乐！",
         "scriptVn": "Nam: Món quà này thật sự là tặng anh à? / Nữ: Tất nhiên rồi, chúc anh sinh nhật vui vẻ!"
        },
        {
         "n": 5,
         "answer": "E",
         "audio": [
          232.3,
          259.4
         ],
         "script": "女：孩子总是一边听音乐一边看书，她能记住吗？\n男：没关系，年轻人都这样。",
         "scriptVn": "Nữ: Con bé cứ vừa nghe nhạc vừa đọc sách, nó nhớ được không? / Nam: Không sao, người trẻ đều thế cả."
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
         "answer": "B",
         "audio": [
          270.9,
          297.6
         ],
         "script": "男：你想把这箱子搬到哪儿去？要我帮忙吗？\n女：不用，我把它放楼下就可以了。",
         "scriptVn": "Nam: Em muốn chuyển cái vali này đi đâu? Có cần anh giúp không? / Nữ: Không cần, em để nó ở dưới nhà là được."
        },
        {
         "n": 7,
         "answer": "D",
         "audio": [
          302.8,
          330.4
         ],
         "script": "女：面条儿好了，你给姐姐打个电话，让她来一起吃吧。\n男：我正在打呢，但没有人接。",
         "scriptVn": "Nữ: Mì xong rồi, anh gọi điện cho chị, bảo chị đến ăn cùng. / Nam: Anh đang gọi đây, nhưng không ai nghe máy."
        },
        {
         "n": 8,
         "answer": "C",
         "audio": [
          335.3,
          357.8
         ],
         "script": "男：我把需要注意的问题，都写在电子邮件里了。\n女：好的，我现在就看。",
         "scriptVn": "Nam: Những vấn đề cần chú ý tôi đều viết trong email rồi. / Nữ: Vâng, tôi xem ngay bây giờ."
        },
        {
         "n": 9,
         "answer": "E",
         "audio": [
          362.8,
          389.6
         ],
         "script": "女：这两双鞋，你觉得哪双更漂亮一些？\n女：都漂亮。你要是喜欢就两双都买。",
         "scriptVn": "Nữ: Hai đôi giày này, chị thấy đôi nào đẹp hơn? / Nữ: Đều đẹp. Nếu em thích thì mua cả hai đôi."
        },
        {
         "n": 10,
         "answer": "A",
         "audio": [
          394.7,
          420.6
         ],
         "script": "男：下车吧，我们到了，这就是我的公司。\n女：这么快就到了？我以为很远呢。",
         "scriptVn": "Nam: Xuống xe thôi, chúng ta đến rồi, đây chính là công ty anh. / Nữ: Đến nhanh thế à? Em tưởng xa lắm."
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
       "star": "他在准备晚饭。",
       "answer": true,
       "audio": [
        523.3,
        551.5
       ],
       "script": "帮我从冰箱里拿几个鸡蛋，今天晚上我们多做几个菜。",
       "scriptVn": "Lấy giúp tôi mấy quả trứng trong tủ lạnh, tối nay chúng ta làm thêm mấy món.",
       "starVn": "Anh ấy đang chuẩn bị bữa tối."
      },
      {
       "n": 12,
       "star": "要认真听老师说的话。",
       "answer": true,
       "audio": [
        558.6,
        593.3
       ],
       "script": "老师说话的时候，你要认真听，不要老是“一个耳朵进，一个耳朵出”。",
       "scriptVn": "Khi thầy cô nói, em phải chăm chú nghe, đừng lúc nào cũng \"tai này vào, tai kia ra\".",
       "starVn": "Phải chăm chú nghe lời thầy cô nói."
      },
      {
       "n": 13,
       "star": "他已经把书还了。",
       "answer": false,
       "audio": [
        600.4,
        639.3
       ],
       "script": "上周，我从学校图书馆里借了一本书。现在已经看完了，我打算明天去把它还了。",
       "scriptVn": "Tuần trước, tôi mượn một cuốn sách ở thư viện trường. Bây giờ đã đọc xong, tôi định mai đi trả.",
       "starVn": "Anh ấy đã trả sách rồi."
      },
      {
       "n": 14,
       "star": "他害怕小动物。",
       "answer": false,
       "audio": [
        646.4,
        688.5
       ],
       "script": "到现在，我还清楚地记得，小时候，几乎每天都要看《动物世界》这个节目，看这个节目让我认识了很多动物。",
       "scriptVn": "Đến giờ tôi vẫn nhớ rõ, hồi nhỏ gần như ngày nào cũng xem chương trình \"Thế giới động vật\", chương trình này giúp tôi biết rất nhiều loài vật.",
       "starVn": "Anh ấy sợ động vật nhỏ."
      },
      {
       "n": 15,
       "star": "女儿的成绩提高了。",
       "answer": false,
       "audio": [
        695.5,
        727.4
       ],
       "script": "女儿最近天天上网玩游戏，影响了学习成绩，我和妻子都很头疼。",
       "scriptVn": "Dạo này con gái ngày nào cũng lên mạng chơi game, ảnh hưởng đến thành tích học tập, tôi và vợ đều rất đau đầu.",
       "starVn": "Thành tích của con gái đã tiến bộ."
      },
      {
       "n": 16,
       "star": "他长得很高。",
       "answer": false,
       "audio": [
        734.5,
        766.4
       ],
       "script": "虽然我只有一米六三，但是我还是特别爱打篮球，而且打得很好。",
       "scriptVn": "Tuy tôi chỉ cao 1m63, nhưng tôi vẫn rất thích chơi bóng rổ, hơn nữa chơi rất giỏi.",
       "starVn": "Anh ấy rất cao."
      },
      {
       "n": 17,
       "star": "北方和南方的天气不一样。",
       "answer": true,
       "audio": [
        773.4,
        834
       ],
       "script": "夏天的时候，人们喜欢到北方城市旅游，因为这时候北方不是很热；到了冬天，人们就比较喜欢到南方城市旅游，因为南方的冬天不会太冷。",
       "scriptVn": "Mùa hè, mọi người thích đi du lịch các thành phố miền Bắc vì lúc này miền Bắc không nóng lắm; đến mùa đông, mọi người lại thích đi các thành phố miền Nam vì mùa đông miền Nam không quá lạnh.",
       "starVn": "Thời tiết miền Bắc và miền Nam khác nhau."
      },
      {
       "n": 18,
       "star": "他喜欢去公园读书。",
       "answer": true,
       "audio": [
        841,
        879.4
       ],
       "script": "我家附近有个公园，我经常去公园的草地上看书，那儿人很少，非常安静。",
       "scriptVn": "Gần nhà tôi có một công viên, tôi thường ra bãi cỏ trong công viên đọc sách, ở đó ít người, rất yên tĩnh.",
       "starVn": "Anh ấy thích ra công viên đọc sách."
      },
      {
       "n": 19,
       "star": "数学是他的爱好。",
       "answer": false,
       "audio": [
        886.3,
        922.2
       ],
       "script": "在叔叔的影响下，我也对历史很有兴趣，看过很多历史书，知道不少历史故事。",
       "scriptVn": "Dưới ảnh hưởng của chú, tôi cũng rất có hứng thú với lịch sử, đã đọc nhiều sách lịch sử, biết không ít câu chuyện lịch sử.",
       "starVn": "Toán là sở thích của anh ấy."
      },
      {
       "n": 20,
       "star": "手表不像以前那么重要了。",
       "answer": true,
       "audio": [
        929.2,
        975.8
       ],
       "script": "以前人们用手表来看时间，手机出现后，人们发现用手机看时间也很方便，所以很多人不用手表了。",
       "scriptVn": "Trước đây người ta dùng đồng hồ đeo tay để xem giờ, sau khi có điện thoại, mọi người thấy xem giờ bằng điện thoại cũng rất tiện, nên nhiều người không đeo đồng hồ nữa.",
       "starVn": "Đồng hồ đeo tay không còn quan trọng như trước."
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
         "zh": "要去刷牙"
        },
        {
         "zh": "不锻炼了"
        },
        {
         "zh": "现在起床"
        }
       ],
       "answer": "B",
       "audio": [
        1037.3,
        1069.2
       ],
       "script": "女：外面的风刮得特别大，你还出去跑步吗？\n男：不出去了，今天多睡一会儿。\n问：男的是什么意思？",
       "scriptVn": "Nữ: Bên ngoài gió to lắm, anh còn ra ngoài chạy bộ không? / Nam: Không ra nữa, hôm nay ngủ thêm một lát. / Hỏi: Người đàn ông có ý gì? (A sắp đi đánh răng · B không tập thể dục nữa · C bây giờ dậy)"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "回家"
        },
        {
         "zh": "银行"
        },
        {
         "zh": "图书馆"
        }
       ],
       "answer": "C",
       "audio": [
        1079.4,
        1117.5
       ],
       "script": "男：你要去哪儿？我让司机开车送你去吧。\n女：不用了，谢谢，我去国家图书馆，坐地铁很方便。\n问：女的要去哪儿？",
       "scriptVn": "Nam: Em muốn đi đâu? Để anh bảo tài xế lái xe đưa em đi. / Nữ: Không cần đâu, cảm ơn anh, em đến Thư viện Quốc gia, đi tàu điện ngầm rất tiện. / Hỏi: Người phụ nữ muốn đi đâu? (A về nhà · B ngân hàng · C thư viện)"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "打车"
        },
        {
         "zh": "骑车"
        },
        {
         "zh": "坐公共汽车"
        }
       ],
       "answer": "A",
       "audio": [
        1127.7,
        1169.9
       ],
       "script": "女：中午我去银行办点儿事，把你的自行车借我用用。\n男：我今天没骑车，打出租车来的。你再问问小李？\n问：男的今天是怎么来的？",
       "scriptVn": "Nữ: Trưa nay em ra ngân hàng làm chút việc, cho em mượn xe đạp của anh nhé. / Nam: Hôm nay anh không đạp xe, đi taxi đến. Em hỏi Tiểu Lý xem? / Hỏi: Hôm nay người đàn ông đến bằng gì? (A đi taxi · B đạp xe · C đi xe buýt)"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "同事"
        },
        {
         "zh": "邻居"
        },
        {
         "zh": "夫妻"
        }
       ],
       "answer": "C",
       "audio": [
        1180,
        1211.6
       ],
       "script": "男：洗手间的灯怎么没关啊？\n女：儿子说要洗澡，他去拿换洗的衣服了。\n问：他们最可能是什么关系？",
       "scriptVn": "Nam: Sao đèn nhà vệ sinh không tắt thế? / Nữ: Con trai bảo muốn tắm, nó đi lấy quần áo để thay rồi. / Hỏi: Quan hệ của họ nhiều khả năng là gì? (A đồng nghiệp · B hàng xóm · C vợ chồng)"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "饭店"
        },
        {
         "zh": "办公室"
        },
        {
         "zh": "火车站"
        }
       ],
       "answer": "A",
       "audio": [
        1221.7,
        1255.4
       ],
       "script": "女：先生您好，您现在点菜吗？\n男：我还有几个朋友，等他们来了以后再点。\n问：他们现在在哪儿？",
       "scriptVn": "Nữ: Chào anh, anh gọi món bây giờ ạ? / Nam: Tôi còn mấy người bạn, đợi họ đến rồi gọi. / Hỏi: Bây giờ họ đang ở đâu? (A nhà hàng · B văn phòng · C ga tàu hỏa)"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "7：00"
        },
        {
         "zh": "9：30"
        },
        {
         "zh": "10：05"
        }
       ],
       "answer": "B",
       "audio": [
        1265.6,
        1301.8
       ],
       "script": "男：几点了？今天的会议几点开始？\n女：现在是九点一刻，再有十五分钟开始。\n问：会议几点开始？",
       "scriptVn": "Nam: Mấy giờ rồi? Cuộc họp hôm nay mấy giờ bắt đầu? / Nữ: Bây giờ là chín giờ mười lăm, mười lăm phút nữa bắt đầu. / Hỏi: Cuộc họp mấy giờ bắt đầu? (A 7:00 · B 9:30 · C 10:05)"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "爬山"
        },
        {
         "zh": "等电梯"
        },
        {
         "zh": "做练习"
        }
       ],
       "answer": "B",
       "audio": [
        1311.9,
        1339.6
       ],
       "script": "女：好了没？电梯来了，快一点儿。\n男：我马上就好。等等我。\n问：他们在做什么？",
       "scriptVn": "Nữ: Xong chưa? Thang máy đến rồi, nhanh lên. / Nam: Anh xong ngay đây. Đợi anh với. / Hỏi: Họ đang làm gì? (A leo núi · B đợi thang máy · C làm bài tập)"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "要去接人"
        },
        {
         "zh": "忘带护照了"
        },
        {
         "zh": "要去拿行李箱"
        }
       ],
       "answer": "A",
       "audio": [
        1349.7,
        1393.4
       ],
       "script": "男：喂，我已经下飞机了，我现在去拿行李箱。\n女：好的，别着急，我很快就到机场了，东边那个门口见。\n问：关于女的，可以知道什么？",
       "scriptVn": "Nam: Alô, anh xuống máy bay rồi, bây giờ anh đi lấy vali. / Nữ: Vâng, đừng vội, em sắp đến sân bay rồi, gặp nhau ở cửa phía đông nhé. / Hỏi: Về người phụ nữ, có thể biết gì? (A sắp đi đón người · B quên mang hộ chiếu · C sắp đi lấy vali)"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "很大"
        },
        {
         "zh": "很好吃"
        },
        {
         "zh": "很便宜"
        }
       ],
       "answer": "A",
       "audio": [
        1403.6,
        1436.4
       ],
       "script": "女：这条鱼真大，在哪儿买的？\n男：我从楼下超市买的，八斤多呢。\n问：女的觉得那条鱼怎么样？",
       "scriptVn": "Nữ: Con cá này to thật, mua ở đâu thế? / Nam: Anh mua ở siêu thị dưới nhà, hơn tám cân đấy. / Hỏi: Người phụ nữ thấy con cá thế nào? (A rất to · B rất ngon · C rất rẻ)"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "男的"
        },
        {
         "zh": "同学们"
        },
        {
         "zh": "爷爷奶奶"
        }
       ],
       "answer": "A",
       "audio": [
        1446.6,
        1477
       ],
       "script": "男：怎么样，最近好点儿了吗？\n女：医生说我很快就能出院了，放心吧。\n问：女的想让谁放心？",
       "scriptVn": "Nam: Thế nào, dạo này đỡ hơn chưa? / Nữ: Bác sĩ nói em sắp được xuất viện rồi, anh yên tâm nhé. / Hỏi: Người phụ nữ muốn ai yên tâm? (A người đàn ông · B các bạn học · C ông bà)"
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
         "zh": "他又饿了"
        },
        {
         "zh": "咖啡太甜了"
        },
        {
         "zh": "女的应该在教室"
        }
       ],
       "answer": "C",
       "audio": [
        1558.4,
        1610.5
       ],
       "script": "男：真奇怪，你怎么在这里喝咖啡呢？\n女：在这儿喝咖啡很奇怪吗？\n男：我刚才看见你在教室里。\n女：不可能，你一定看错了，我上午一直在这儿。\n问：男的为什么觉得奇怪？",
       "scriptVn": "Nam: Lạ thật, sao em lại ngồi uống cà phê ở đây? / Nữ: Uống cà phê ở đây lạ lắm à? / Nam: Lúc nãy anh thấy em ở trong lớp học. / Nữ: Không thể nào, chắc anh nhìn nhầm rồi, cả buổi sáng em ở đây. / Hỏi: Vì sao người đàn ông thấy lạ? (A anh ấy lại đói · B cà phê ngọt quá · C người phụ nữ lẽ ra phải ở trong lớp)"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "很有名"
        },
        {
         "zh": "是校长"
        },
        {
         "zh": "穿白衬衫"
        }
       ],
       "answer": "C",
       "audio": [
        1620.8,
        1678
       ],
       "script": "女：今天你穿哪件衬衫？\n男：白色的。如果公司事情多，我可能要晚一点儿回来。\n女：知道了。下雪了，路上开车一定要小心。\n男：别为我担心了，我会开得很慢的。\n问：关于男的，可以知道什么？",
       "scriptVn": "Nữ: Hôm nay anh mặc áo sơ mi nào? / Nam: Cái màu trắng. Nếu công ty nhiều việc, có thể anh về muộn một chút. / Nữ: Em biết rồi. Tuyết rơi rồi, lái xe trên đường nhất định phải cẩn thận. / Nam: Đừng lo cho anh, anh sẽ lái rất chậm. / Hỏi: Về người đàn ông, có thể biết gì? (A rất nổi tiếng · B là hiệu trưởng · C mặc áo sơ mi trắng)"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "最新的"
        },
        {
         "zh": "普通的"
        },
        {
         "zh": "蓝颜色的"
        }
       ],
       "answer": "C",
       "audio": [
        1688.1,
        1741.4
       ],
       "script": "男：这个相机可以吗？\n女：一般。那个蓝色的比较好，你说呢？\n男：那个太贵，我们再看看其他的吧。\n女：贵吗？才三千块，就买那个吧。\n问：女的希望买哪种照相机？",
       "scriptVn": "Nam: Cái máy ảnh này được không? / Nữ: Bình thường. Cái màu xanh lam kia tốt hơn, anh thấy sao? / Nam: Cái đó đắt quá, mình xem cái khác đi. / Nữ: Đắt à? Mới ba nghìn tệ, mua cái đó đi. / Hỏi: Người phụ nữ muốn mua loại máy ảnh nào? (A mới nhất · B bình thường · C màu xanh lam)"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "客人"
        },
        {
         "zh": "哥哥"
        },
        {
         "zh": "王小姐"
        }
       ],
       "answer": "A",
       "audio": [
        1751.6,
        1796.9
       ],
       "script": "女：经理，您的信。\n男：先放我桌子上吧。客人几点到？\n女：他们已经到宾馆了，半个小时后到公司。\n男：好的，等他们到了就告诉我。\n问：男的在等谁？",
       "scriptVn": "Nữ: Giám đốc, thư của anh. / Nam: Cứ để lên bàn tôi. Khách mấy giờ đến? / Nữ: Họ đã đến khách sạn rồi, nửa tiếng nữa đến công ty. / Nam: Được, họ đến thì báo tôi. / Hỏi: Người đàn ông đang đợi ai? (A khách · B anh trai · C cô Vương)"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "商店"
        },
        {
         "zh": "医院"
        },
        {
         "zh": "北京"
        }
       ],
       "answer": "B",
       "audio": [
        1807,
        1859.6
       ],
       "script": "男：你的感冒还没好？\n女：没呢，吃了些药也不起作用。\n男：有一个星期了吧？这么久了，你去医院看一下吧。\n女：是，我打算星期六去看看。\n问：女的星期六要去哪里？",
       "scriptVn": "Nam: Cảm của em vẫn chưa khỏi à? / Nữ: Chưa, uống ít thuốc mà cũng không có tác dụng. / Nam: Được một tuần rồi nhỉ? Lâu thế rồi, em đi bệnh viện khám đi. / Nữ: Vâng, em định thứ bảy đi khám. / Hỏi: Thứ bảy người phụ nữ sẽ đi đâu? (A cửa hàng · B bệnh viện · C Bắc Kinh)"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "洗碗"
        },
        {
         "zh": "复习"
        },
        {
         "zh": "踢足球"
        }
       ],
       "answer": "A",
       "audio": [
        1869.9,
        1921.4
       ],
       "script": "女：洗碗还是打扫房间，你选择哪一个？\n男：让我想一想，我，洗碗。\n女：好，那现在请你去厨房吧。\n男：你让我看完体育新闻再去洗，好不好？\n问：男的选择了什么？",
       "scriptVn": "Nữ: Rửa bát hay dọn phòng, anh chọn cái nào? / Nam: Để anh nghĩ đã, anh… rửa bát. / Nữ: Được, vậy bây giờ mời anh vào bếp. / Nam: Cho anh xem xong tin thể thao rồi đi rửa, được không? / Hỏi: Người đàn ông chọn gì? (A rửa bát · B ôn bài · C đá bóng)"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "服务员"
        },
        {
         "zh": "她妈妈"
        },
        {
         "zh": "她的学生"
        }
       ],
       "answer": "B",
       "audio": [
        1931.6,
        1979.4
       ],
       "script": "男：刚才还是大太阳，这会儿就下雨了。\n女：是，这天气一会儿晴一会儿阴的。\n男：你怎么知道带雨伞？\n女：早上我妈把它放我包里了。\n问：谁把雨伞放包里的？",
       "scriptVn": "Nam: Vừa nãy còn nắng to, giờ đã mưa rồi. / Nữ: Đúng thế, thời tiết lúc nắng lúc râm. / Nam: Sao em biết mà mang ô? / Nữ: Sáng nay mẹ em bỏ vào túi cho em. / Hỏi: Ai đã bỏ ô vào túi? (A nhân viên phục vụ · B mẹ cô ấy · C học sinh của cô ấy)"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "3张"
        },
        {
         "zh": "8张"
        },
        {
         "zh": "10张"
        }
       ],
       "answer": "A",
       "audio": [
        1989.7,
        2023.1
       ],
       "script": "女：电影票多少钱一张？\n男：八十。\n女：好，我买三张。\n男：对不起，您要买几点的？\n问：女的要买几张电影票？",
       "scriptVn": "Nữ: Vé xem phim bao nhiêu tiền một vé? / Nam: Tám mươi. / Nữ: Vâng, tôi mua ba vé. / Nam: Xin lỗi, chị muốn mua suất mấy giờ? / Hỏi: Người phụ nữ muốn mua mấy vé xem phim? (A 3 vé · B 8 vé · C 10 vé)"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "吃饱了"
        },
        {
         "zh": "口渴了"
        },
        {
         "zh": "不愿意变胖"
        }
       ],
       "answer": "C",
       "audio": [
        2033.3,
        2081.7
       ],
       "script": "男：经常吃甜的东西容易变胖。\n女：我同意，所以我不吃糖。\n男：那你怎么还敢吃那么多蛋糕？\n女：没关系，这种蛋糕不甜，没放糖。\n问：女的为什么不吃糖？",
       "scriptVn": "Nam: Hay ăn đồ ngọt dễ bị béo. / Nữ: Em đồng ý, nên em không ăn kẹo. / Nam: Thế sao em còn dám ăn nhiều bánh ga-tô thế? / Nữ: Không sao, loại bánh này không ngọt, không cho đường. / Hỏi: Vì sao người phụ nữ không ăn kẹo? (A ăn no rồi · B khát nước · C không muốn bị béo)"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "坏了"
        },
        {
         "zh": "该换了"
        },
        {
         "zh": "放得太低了"
        }
       ],
       "answer": "B",
       "audio": [
        2091.9,
        2142.3
       ],
       "script": "女：你听一下，这是什么声音？\n男：像是空调的声音？\n女：是不是坏了？应该找人检查一下了。\n男：这个周末我们去买个新的吧，这个空调太旧了。\n问：男的认为空调怎么了？",
       "scriptVn": "Nữ: Anh nghe xem, đây là tiếng gì? / Nam: Hình như tiếng điều hòa? / Nữ: Có phải hỏng rồi không? Nên tìm người kiểm tra thôi. / Nam: Cuối tuần này mình đi mua cái mới đi, cái điều hòa này cũ quá rồi. / Hỏi: Người đàn ông cho rằng điều hòa làm sao? (A hỏng rồi · B nên thay rồi · C để thấp quá)"
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
         "zh": "问我吗？在报纸下面吧。",
         "vn": "Hỏi tôi à? Chắc ở dưới tờ báo đấy."
        },
        {
         "k": "B",
         "zh": "明天的考试要求带铅笔。",
         "vn": "Bài thi ngày mai yêu cầu mang bút chì."
        },
        {
         "k": "C",
         "zh": "这么小就会写自己的名字了？真不简单。",
         "vn": "Nhỏ thế này đã biết viết tên mình rồi à? Thật không đơn giản."
        },
        {
         "k": "D",
         "zh": "你弟弟的工作怎么样了？",
         "vn": "Công việc của em trai bạn thế nào rồi?"
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "你这么忙，有时间去运动吗？",
         "vn": "Bạn bận thế, có thời gian đi tập thể thao không?"
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "我天天去游泳，你没发现我瘦了？",
         "vn": "Ngày nào tôi cũng đi bơi, bạn không thấy tôi gầy đi à?",
         "answer": "F"
        },
        {
         "n": 42,
         "zh": "我丈夫给他介绍了一家电脑公司，但他还没决定去不去。",
         "vn": "Chồng tôi đã giới thiệu cho cậu ấy một công ty máy tính, nhưng cậu ấy chưa quyết định có đi hay không.",
         "answer": "D"
        },
        {
         "n": 43,
         "zh": "没问题，我昨天下午就准备好了。",
         "vn": "Không vấn đề, chiều hôm qua tôi đã chuẩn bị xong rồi.",
         "answer": "B"
        },
        {
         "n": 44,
         "zh": "大家都觉得他又聪明又可爱。",
         "vn": "Mọi người đều thấy cậu bé vừa thông minh vừa đáng yêu.",
         "answer": "C"
        },
        {
         "n": 45,
         "zh": "你看见我的眼镜了吗？又找不到了。",
         "vn": "Bạn có thấy kính của tôi không? Lại không tìm thấy rồi.",
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
         "zh": "你了解他吗？这么快就和他结婚了！",
         "vn": "Bạn hiểu anh ấy không? Nhanh thế đã cưới anh ấy rồi!"
        },
        {
         "k": "B",
         "zh": "阿姨，那您买的时候花了多少钱？",
         "vn": "Cô ơi, vậy lúc cô mua hết bao nhiêu tiền ạ?"
        },
        {
         "k": "C",
         "zh": "你这条裙子是不是有点儿短？",
         "vn": "Cái váy này của bạn có hơi ngắn không?"
        },
        {
         "k": "D",
         "zh": "不用客气了，你一会儿洗碗筷和盘子吧。",
         "vn": "Đừng khách sáo, lát nữa bạn rửa bát đũa và đĩa nhé."
        },
        {
         "k": "E",
         "zh": "很近，就在这条街的后面。",
         "vn": "Rất gần, ngay phía sau con phố này."
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "你相信吗？这把椅子去年春天卖100万。",
         "vn": "Bạn tin không? Cái ghế này mùa xuân năm ngoái bán 1 triệu.",
         "answer": "B"
        },
        {
         "n": 47,
         "zh": "真的？那我穿裤子好了。",
         "vn": "Thật à? Vậy tôi mặc quần là được.",
         "answer": "C"
        },
        {
         "n": 48,
         "zh": "第一次见面我就喜欢上他了。",
         "vn": "Lần đầu gặp mặt tôi đã thích anh ấy rồi.",
         "answer": "A"
        },
        {
         "n": 49,
         "zh": "你累了吧？休息一下，我来做饭。",
         "vn": "Bạn mệt rồi nhỉ? Nghỉ một chút đi, để tôi nấu cơm.",
         "answer": "D"
        },
        {
         "n": 50,
         "zh": "你们上次去的那个饭馆儿离这儿远吗？",
         "vn": "Nhà hàng lần trước các bạn đến có xa đây không?",
         "answer": "E"
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
         "zh": "讲"
        },
        {
         "k": "B",
         "zh": "绿"
        },
        {
         "k": "C",
         "zh": "健康"
        },
        {
         "k": "D",
         "zh": "习惯"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "年级"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "蓝天，白云，（　）树，那儿的环境真好。",
         "vn": "Trời xanh, mây trắng, cây (xanh), môi trường ở đó thật tốt.",
         "answer": "B"
        },
        {
         "n": 52,
         "zh": "妹妹的孩子今年7岁了，应该上一（　）了。",
         "vn": "Con của em gái năm nay 7 tuổi rồi, nên vào (lớp) một rồi.",
         "answer": "F"
        },
        {
         "n": 53,
         "zh": "有不懂的地方，就去查字典，这是一个比较好的学习（　）。",
         "vn": "Chỗ nào không hiểu thì tra từ điển, đây là một (thói quen) học tập khá tốt.",
         "answer": "D"
        },
        {
         "n": 54,
         "zh": "爸爸，您每天喝杯红葡萄酒，对（　）很有帮助。",
         "vn": "Bố ơi, mỗi ngày bố uống một ly rượu vang đỏ rất có lợi cho (sức khỏe).",
         "answer": "C"
        },
        {
         "n": 55,
         "zh": "跟以前比，我现在的普通话（　）得好多了。",
         "vn": "So với trước đây, bây giờ tiếng phổ thông của tôi (nói) tốt hơn nhiều.",
         "answer": "A"
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
         "zh": "教"
        },
        {
         "k": "B",
         "zh": "多么"
        },
        {
         "k": "C",
         "zh": "河"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "满意"
        },
        {
         "k": "F",
         "zh": "终于"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：这是一个（　）好的机会啊！你必须去。\nB：一共只有两个月？那好吧。",
         "vn": "A: Đây là một cơ hội (tốt biết bao)! Bạn nhất định phải đi. / B: Tổng cộng chỉ có hai tháng à? Vậy được.",
         "answer": "B"
        },
        {
         "n": 57,
         "zh": "A：地图上这儿有条（　），怎么没看见啊？\nB：你看错了，还在前面呢。",
         "vn": "A: Trên bản đồ chỗ này có một con (sông), sao không thấy nhỉ? / B: Bạn nhìn nhầm rồi, nó còn ở phía trước.",
         "answer": "C"
        },
        {
         "n": 58,
         "zh": "A：我画完了，您看看，（　）吗？\nB：好极了，你画得越来越好了。",
         "vn": "A: Em vẽ xong rồi, thầy xem, (hài lòng) không ạ? / B: Tuyệt lắm, em vẽ ngày càng đẹp.",
         "answer": "E"
        },
        {
         "n": 59,
         "zh": "A：你（　）回来了，啤酒买了吗？\nB：医生不让你喝酒吃肉。我买了些果汁和牛奶。",
         "vn": "A: Cuối cùng anh (cũng) về rồi, mua bia chưa? / B: Bác sĩ không cho em uống rượu ăn thịt. Anh mua ít nước ép và sữa.",
         "answer": "F"
        },
        {
         "n": 60,
         "zh": "A：您做过哪些工作？\nB：我以前是大学老师，主要（　）东西方文化比较。",
         "vn": "A: Anh đã làm những công việc gì? / B: Trước đây tôi là giảng viên đại học, chủ yếu (dạy) so sánh văn hóa Đông Tây.",
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
       "zh": "不同的季节可以用不同的颜色来表示，我们用黄色表示秋季，那夏季呢？",
       "star": "黄色常被用来表示：",
       "options": [
        {
         "zh": "春天"
        },
        {
         "zh": "秋天"
        },
        {
         "zh": "冬天"
        }
       ],
       "answer": "B",
       "vn": "Các mùa khác nhau có thể dùng màu sắc khác nhau để biểu thị, chúng ta dùng màu vàng biểu thị mùa thu, còn mùa hè thì sao? ★ Màu vàng thường được dùng biểu thị: A mùa xuân · B mùa thu · C mùa đông."
      },
      {
       "n": 62,
       "zh": "2月14号早上，她正要去上班的时候，突然看到男朋友拿着鲜花站在门口。她这才明白今天是他们的节日。",
       "star": "根据这段话，可以知道：",
       "options": [
        {
         "zh": "她那天迟到了"
        },
        {
         "zh": "男朋友很难过"
        },
        {
         "zh": "男朋友要送她花"
        }
       ],
       "answer": "C",
       "vn": "Sáng ngày 14 tháng 2, lúc cô ấy đang định đi làm, bỗng thấy bạn trai cầm hoa tươi đứng ở cửa. Lúc đó cô mới hiểu hôm nay là ngày lễ của hai người. ★ Theo đoạn văn có thể biết: A hôm đó cô ấy đến muộn · B bạn trai rất buồn · C bạn trai muốn tặng hoa cho cô ấy."
      },
      {
       "n": 63,
       "zh": "你的菜单里有水果饭吗？你想学着做水果饭吗？其实很简单，把米饭做好后，再把一块儿一块儿新鲜的水果放进去，水果饭就完成了。你可以做苹果饭，香蕉饭，如果你愿意，还可以做西瓜饭。",
       "star": "水果饭：",
       "options": [
        {
         "zh": "不需要水"
        },
        {
         "zh": "很容易做"
        },
        {
         "zh": "是一种面包"
        }
       ],
       "answer": "B",
       "vn": "Thực đơn của bạn có cơm hoa quả không? Bạn có muốn học làm cơm hoa quả không? Thật ra rất đơn giản, nấu cơm xong rồi cho từng miếng hoa quả tươi vào là xong. Bạn có thể làm cơm táo, cơm chuối, nếu muốn còn có thể làm cơm dưa hấu. ★ Cơm hoa quả: A không cần nước · B rất dễ làm · C là một loại bánh mì."
      },
      {
       "n": 64,
       "zh": "听说你下个星期就要离开北京回国了？我下星期不在北京，没办法去机场送你了，这个小熊猫送给你，欢迎你明年再到中国来。",
       "star": "他为什么现在送礼物？",
       "options": [
        {
         "zh": "担心有变化"
        },
        {
         "zh": "想学习汉语"
        },
        {
         "zh": "下星期不在北京"
        }
       ],
       "answer": "C",
       "vn": "Nghe nói tuần sau bạn rời Bắc Kinh về nước à? Tuần sau tôi không ở Bắc Kinh, không ra sân bay tiễn bạn được, tặng bạn con gấu trúc nhỏ này, chào mừng năm sau bạn lại đến Trung Quốc. ★ Vì sao anh ấy tặng quà bây giờ? A lo có thay đổi · B muốn học tiếng Hán · C tuần sau không ở Bắc Kinh."
      },
      {
       "n": 65,
       "zh": "他在我生病的时候照顾过我，在我遇到问题的时候帮助过我，在我心中，他是我最好的朋友。",
       "star": "我遇到问题时，他：",
       "options": [
        {
         "zh": "非常生气"
        },
        {
         "zh": "身体不太好"
        },
        {
         "zh": "帮我解决问题"
        }
       ],
       "answer": "C",
       "vn": "Anh ấy từng chăm sóc tôi khi tôi ốm, từng giúp tôi khi tôi gặp vấn đề, trong lòng tôi, anh ấy là người bạn tốt nhất. ★ Khi tôi gặp vấn đề, anh ấy: A rất tức giận · B sức khỏe không tốt lắm · C giúp tôi giải quyết vấn đề."
      },
      {
       "n": 66,
       "zh": "中国有句老话，叫“有借有还，再借不难”，是说向别人借的东西，用完就要还回去，这样才能让别人相信你，下次还会借给你。",
       "star": "借了别人的东西：",
       "options": [
        {
         "zh": "要记得还"
        },
        {
         "zh": "要洗干净"
        },
        {
         "zh": "别用太长时间"
        }
       ],
       "answer": "A",
       "vn": "Trung Quốc có câu nói xưa \"có vay có trả, lần sau vay không khó\", nghĩa là đồ mượn của người khác dùng xong phải trả lại, như vậy người khác mới tin bạn, lần sau vẫn cho bạn mượn. ★ Mượn đồ của người khác: A phải nhớ trả · B phải rửa sạch · C đừng dùng quá lâu."
      },
      {
       "n": 67,
       "zh": "这辆车有上下两层，很多人都愿意坐上边那层，因为坐得高，眼睛看得远，一路上经过的地方，你都可以看得更清楚。",
       "star": "关于这辆车，可以知道：",
       "options": [
        {
         "zh": "司机很热情"
        },
        {
         "zh": "一共有两层"
        },
        {
         "zh": "下层不能坐人"
        }
       ],
       "answer": "B",
       "vn": "Chiếc xe này có hai tầng trên dưới, nhiều người thích ngồi tầng trên, vì ngồi cao nhìn được xa, những nơi đi qua dọc đường bạn đều nhìn rõ hơn. ★ Về chiếc xe này, có thể biết: A tài xế rất nhiệt tình · B tổng cộng có hai tầng · C tầng dưới không ngồi được."
      },
      {
       "n": 68,
       "zh": "小王上午脸色不太好，同事们以为他病了，问他怎么了，他笑着回答说：“昨晚看球赛，两点才睡觉。”",
       "star": "小王昨天晚上：",
       "options": [
        {
         "zh": "发烧了"
        },
        {
         "zh": "看比赛了"
        },
        {
         "zh": "看表演了"
        }
       ],
       "answer": "B",
       "vn": "Buổi sáng sắc mặt Tiểu Vương không tốt lắm, đồng nghiệp tưởng anh ấy ốm, hỏi anh ấy làm sao, anh ấy cười đáp: \"Tối qua xem bóng đá, hai giờ mới ngủ.\" ★ Tối qua Tiểu Vương: A bị sốt · B xem thi đấu · C xem biểu diễn."
      },
      {
       "n": 69,
       "zh": "没关系，她哭是因为刚才听到一个孩子在唱《月亮船》，这使她突然想起了很多过去的事情。",
       "star": "她为什么哭？",
       "options": [
        {
         "zh": "想起了过去"
        },
        {
         "zh": "鼻子不舒服"
        },
        {
         "zh": "不想说再见"
        }
       ],
       "answer": "A",
       "vn": "Không sao đâu, cô ấy khóc là vì lúc nãy nghe một đứa trẻ hát bài \"Thuyền trăng\", điều đó khiến cô ấy bỗng nhớ lại nhiều chuyện ngày xưa. ★ Vì sao cô ấy khóc? A nhớ lại quá khứ · B mũi khó chịu · C không muốn nói lời tạm biệt."
      },
      {
       "n": 70,
       "zh": "下班后我们一起去喝茶吧，就在公司旁边，30元一位，除了茶水，还送一些吃的。你那个朋友姓什么？我忘了，把他也叫上？",
       "star": "那个茶馆儿怎么样？",
       "options": [
        {
         "zh": "椅子很矮"
        },
        {
         "zh": "在花园里"
        },
        {
         "zh": "送吃的东西"
        }
       ],
       "answer": "C",
       "vn": "Tan làm chúng ta cùng đi uống trà đi, ngay cạnh công ty, 30 tệ một người, ngoài nước trà còn tặng ít đồ ăn. Người bạn kia của bạn họ gì nhỉ? Tôi quên mất, gọi cả anh ấy nhé? ★ Quán trà đó thế nào? A ghế rất thấp · B ở trong vườn hoa · C tặng đồ ăn."
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
        "黑色",
        "李小姐的头发",
        "是",
        "的"
       ],
       "answer": "李小姐的头发是黑色的。",
       "vn": "Tóc của cô Lý màu đen."
      },
      {
       "n": 72,
       "words": [
        "时候",
        "举行",
        "会议",
        "什么"
       ],
       "answer": "会议什么时候举行？",
       "accept": [
        "什么时候举行会议？"
       ],
       "vn": "Cuộc họp khi nào tổ chức?"
      },
      {
       "n": 73,
       "words": [
        "努力",
        "学习",
        "很",
        "他们班的学生"
       ],
       "answer": "他们班的学生学习很努力。",
       "vn": "Học sinh lớp họ học hành rất chăm chỉ."
      },
      {
       "n": 74,
       "words": [
        "喜欢",
        "吃",
        "都",
        "马和羊",
        "草"
       ],
       "answer": "马和羊都喜欢吃草。",
       "vn": "Ngựa và dê đều thích ăn cỏ."
      },
      {
       "n": 75,
       "words": [
        "自己的",
        "腿脚",
        "老年人",
        "要",
        "关心"
       ],
       "answer": "老年人要关心自己的腿脚。",
       "vn": "Người già phải quan tâm đến chân tay của mình."
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
       "pre": "老师，黑板",
       "py": "zhōng",
       "post": "间的这个词是什么意思？",
       "answer": "中",
       "vn": "Thưa thầy, từ ở giữa (中间) bảng đen này nghĩa là gì ạ?"
      },
      {
       "n": 77,
       "pre": "他不喜欢猫，也不喜欢狗，但他家有3",
       "py": "zhī",
       "post": "小鸟。",
       "answer": "只",
       "vn": "Anh ấy không thích mèo, cũng không thích chó, nhưng nhà anh ấy có 3 con chim (鸟)."
      },
      {
       "n": 78,
       "pre": "明天星期",
       "py": "rì",
       "post": "，你作业写完没？还有几个题？",
       "answer": "日",
       "vn": "Mai là chủ nhật (日), bài tập con làm xong chưa? Còn mấy bài?"
      },
      {
       "n": 79,
       "pre": "不是左边，我说的是",
       "py": "yòu",
       "post": "边的那个帽子。",
       "answer": "右",
       "vn": "Không phải bên trái, tôi nói cái mũ bên phải (右边) cơ."
      },
      {
       "n": 80,
       "pre": "你带钱了吗？我还差3角5",
       "py": "fēn",
       "post": "。",
       "answer": "分",
       "vn": "Bạn mang tiền không? Tôi còn thiếu 3 hào 5 xu (分)."
      }
     ]
    }
   ]
  }
 ]
};
