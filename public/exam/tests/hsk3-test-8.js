// Đề thi thử HSK 3 – Test 8 (đề thật H31008).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-8",
 "level": "HSK 3",
 "title": "HSK 3 - Test 8",
 "code": "H31008",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-8/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-8.mp3",
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
         "answer": "A",
         "audio": [
          106.3,
          131.3
         ],
         "script": "女：我的头发是不是有点儿长？\n男：不长，我觉得现在很好，很漂亮。",
         "scriptVn": "Nữ: Tóc em có phải hơi dài không? / Nam: Không dài, anh thấy bây giờ rất đẹp, rất xinh."
        },
        {
         "n": 2,
         "answer": "B",
         "audio": [
          136.6,
          159.8
         ],
         "script": "男：这么多？一共是多少钱？\n女：一共是三十元五角六分。",
         "scriptVn": "Nam: Nhiều thế? Tổng cộng bao nhiêu tiền? / Nữ: Tổng cộng ba mươi tệ năm hào sáu xu."
        },
        {
         "n": 3,
         "answer": "F",
         "audio": [
          165.1,
          201.3
         ],
         "script": "女：你看他的一双小脚多么可爱啊，他叫什么？\n男：我们还没想好呢，有时间你帮我们想个好名字吧。",
         "scriptVn": "Nữ: Anh xem đôi bàn chân nhỏ của bé đáng yêu biết bao, bé tên gì? / Nam: Chúng tôi còn chưa nghĩ ra, lúc nào rảnh chị nghĩ giúp một cái tên hay nhé."
        },
        {
         "n": 4,
         "answer": "C",
         "audio": [
          206.6,
          233.2
         ],
         "script": "男：东西都买好了吗？\n女：都买好了，羊肉、鸡蛋、面条、苹果。我们回家吧。",
         "scriptVn": "Nam: Đồ đạc mua xong cả chưa? / Nữ: Mua xong rồi, thịt dê, trứng gà, mì, táo. Mình về nhà thôi."
        },
        {
         "n": 5,
         "answer": "E",
         "audio": [
          238.5,
          259.3
         ],
         "script": "女：你拿好，小心点儿。\n男：放心吧，我又不是第一次换灯了。",
         "scriptVn": "Nữ: Anh cầm chắc, cẩn thận nhé. / Nam: Yên tâm, có phải lần đầu anh thay đèn đâu."
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
          271,
          299.1
         ],
         "script": "男：这是女儿想要的那种鞋吧？\n女：不是，不是这种，女儿喜欢那种上面有小动物的。",
         "scriptVn": "Nam: Đây là loại giày con gái muốn phải không? / Nữ: Không, không phải loại này, con thích loại có hình con vật ở trên cơ."
        },
        {
         "n": 7,
         "answer": "B",
         "audio": [
          304.3,
          328.6
         ],
         "script": "女：不要一边走一边看，对眼睛不好。\n男：好的，我上了飞机再看。",
         "scriptVn": "Nữ: Đừng vừa đi vừa đọc, không tốt cho mắt. / Nam: Được, lên máy bay anh đọc tiếp."
        },
        {
         "n": 8,
         "answer": "A",
         "audio": [
          333.7,
          361.2
         ],
         "script": "男：洗手间里放的是什么花儿？\n女：那不是花儿，是一种草，昨天朋友送我的。",
         "scriptVn": "Nam: Trong nhà vệ sinh để hoa gì thế? / Nữ: Đó không phải hoa, là một loại cỏ, hôm qua bạn tặng em."
        },
        {
         "n": 9,
         "answer": "E",
         "audio": [
          366.5,
          399.1
         ],
         "script": "女：我的电脑突然不能上网了，是不是又坏了？\n男：别担心，我来看看，应该不是电脑的问题。",
         "scriptVn": "Nữ: Máy tính của em bỗng dưng không vào mạng được, có phải lại hỏng rồi không? / Nam: Đừng lo, để anh xem, chắc không phải do máy tính."
        },
        {
         "n": 10,
         "answer": "D",
         "audio": [
          404.3,
          434.5
         ],
         "script": "男：这是给你的礼物，打开看看喜不喜欢？\n女：我还以为你忘了我的生日了，谢谢你！",
         "scriptVn": "Nam: Đây là quà tặng em, mở ra xem có thích không? / Nữ: Em còn tưởng anh quên sinh nhật em rồi, cảm ơn anh!"
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
       "star": "果汁是刚买的。",
       "answer": false,
       "audio": [
        536.5,
        570.6
       ],
       "script": "这是我自己做的面包，果汁也是我自己用水果做的，你多来点儿，别客气。",
       "scriptVn": "Đây là bánh mì tôi tự làm, nước ép cũng là tôi tự làm từ hoa quả, bạn ăn nhiều vào, đừng khách sáo.",
       "starVn": "Nước ép vừa mới mua."
      },
      {
       "n": 12,
       "star": "老师多写了一个词语。",
       "answer": false,
       "audio": [
        577.9,
        609.9
       ],
       "script": "老师，黑板上的那个句子是不是写错了？中间少了一个词。",
       "scriptVn": "Thưa thầy, câu trên bảng đen có phải viết sai không ạ? Ở giữa thiếu một từ.",
       "starVn": "Thầy giáo viết thừa một từ."
      },
      {
       "n": 13,
       "star": "他孩子经常带糖去学校。",
       "answer": true,
       "audio": [
        617.1,
        669.6
       ],
       "script": "小孩子没有不喜欢吃糖的，我的孩子也是。她去学校上课的时候，书包里除了书和铅笔，经常还会出现两块儿糖。",
       "scriptVn": "Trẻ con không có đứa nào không thích ăn kẹo, con tôi cũng vậy. Khi đi học, trong cặp của con ngoài sách và bút chì thường còn có hai viên kẹo.",
       "starVn": "Con anh ấy thường mang kẹo đến trường."
      },
      {
       "n": 14,
       "star": "他们现在在电梯里。",
       "answer": false,
       "audio": [
        676.8,
        715.2
       ],
       "script": "刚才在电梯里我们见过面，没想到这么快又见面了。你也是来参加今天的考试的？",
       "scriptVn": "Lúc nãy chúng ta gặp nhau trong thang máy, không ngờ nhanh thế đã gặp lại. Bạn cũng đến tham gia kỳ thi hôm nay à?",
       "starVn": "Bây giờ họ đang ở trong thang máy."
      },
      {
       "n": 15,
       "star": "今天的月亮很大。",
       "answer": true,
       "audio": [
        722.4,
        753
       ],
       "script": "今天是中秋节，中秋节晚上的月亮像个大盘子，非常漂亮。",
       "scriptVn": "Hôm nay là Tết Trung thu, mặt trăng đêm Trung thu như một cái đĩa lớn, rất đẹp.",
       "starVn": "Mặt trăng hôm nay rất to."
      },
      {
       "n": 16,
       "star": "小鸡会游泳。",
       "answer": false,
       "audio": [
        760.2,
        812.3
       ],
       "script": "小鸡和小狗准备学游泳。小鸡害怕水，第二天就不学了。小狗刚开始也不敢，但是下了一次水后，就不害怕了，慢慢地就学会了。",
       "scriptVn": "Gà con và chó con định học bơi. Gà con sợ nước, sang ngày thứ hai đã bỏ học. Chó con lúc đầu cũng không dám, nhưng xuống nước một lần thì hết sợ, dần dần học được.",
       "starVn": "Gà con biết bơi."
      },
      {
       "n": 17,
       "star": "小王的丈夫爱看篮球比赛。",
       "answer": true,
       "audio": [
        819.4,
        864
       ],
       "script": "我爱打篮球，不喜欢踢足球，小王的丈夫说他也爱打篮球。其实，她丈夫只是喜欢看比赛。",
       "scriptVn": "Tôi thích chơi bóng rổ, không thích đá bóng, chồng Tiểu Vương nói anh ấy cũng thích chơi bóng rổ. Thật ra, chồng cô ấy chỉ thích xem thi đấu.",
       "starVn": "Chồng Tiểu Vương thích xem thi đấu bóng rổ."
      },
      {
       "n": 18,
       "star": "努力的人机会多。",
       "answer": true,
       "audio": [
        871.4,
        911.8
       ],
       "script": "有些人的机会特别多，这不奇怪。因为他们很努力，对工作非常认真，机会就是为这样的人准备的。",
       "scriptVn": "Có những người có rất nhiều cơ hội, điều này không lạ. Vì họ rất cố gắng, làm việc rất nghiêm túc, cơ hội chính là dành cho những người như vậy.",
       "starVn": "Người chăm chỉ có nhiều cơ hội."
      },
      {
       "n": 19,
       "star": "葡萄不好吃。",
       "answer": false,
       "audio": [
        918.9,
        957.8
       ],
       "script": "葡萄虽然好吃，但是不太容易洗干净，所以我更喜欢吃香蕉，因为吃香蕉很方便。",
       "scriptVn": "Nho tuy ngon nhưng không dễ rửa sạch, nên tôi thích ăn chuối hơn, vì ăn chuối rất tiện.",
       "starVn": "Nho không ngon."
      },
      {
       "n": 20,
       "star": "老刘喝酒容易脸红。",
       "answer": true,
       "audio": [
        964.9,
        1013.1
       ],
       "script": "老刘每次喝一点儿啤酒，脸、鼻子、耳朵就会变红，而且喜欢跟人说话。你别担心，他休息一会儿就没事了。",
       "scriptVn": "Mỗi lần ông Lưu uống một chút bia là mặt, mũi, tai đều đỏ lên, hơn nữa thích nói chuyện với người khác. Bạn đừng lo, ông ấy nghỉ một lát là không sao.",
       "starVn": "Ông Lưu uống rượu dễ đỏ mặt."
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
         "zh": "喜欢运动"
        },
        {
         "zh": "他不太饿"
        },
        {
         "zh": "想吃米饭"
        }
       ],
       "answer": "B",
       "audio": [
        1076.3,
        1112.8
       ],
       "script": "女：饿了吧？晚饭去哪儿吃？\n男：我不太饿，中午吃得太饱，我们简单吃点儿就可以了。\n问：关于男的，可以知道什么？",
       "scriptVn": "Nữ: Đói rồi nhỉ? Bữa tối ăn ở đâu? / Nam: Anh không đói lắm, trưa ăn no quá, mình ăn đơn giản chút là được. / Hỏi: Về người đàn ông, có thể biết gì? (A thích vận động · B anh ấy không đói lắm · C muốn ăn cơm)"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "去看医生"
        },
        {
         "zh": "别去上班"
        },
        {
         "zh": "别忘关空调"
        }
       ],
       "answer": "C",
       "audio": [
        1123.2,
        1153.6
       ],
       "script": "男：一会儿你离开的时候，别忘记关空调。\n女：好的，我知道了，再见。\n问：男的希望女的怎么样？",
       "scriptVn": "Nam: Lát nữa lúc em về, đừng quên tắt điều hòa. / Nữ: Vâng, em biết rồi, tạm biệt. / Hỏi: Người đàn ông mong người phụ nữ làm gì? (A đi khám bác sĩ · B đừng đi làm · C đừng quên tắt điều hòa)"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "裤子短"
        },
        {
         "zh": "穿裤子好"
        },
        {
         "zh": "别穿旧裙子"
        }
       ],
       "answer": "B",
       "audio": [
        1164,
        1200
       ],
       "script": "女：你说我今天穿裙子好还是穿裤子好？\n男：今天天气冷，穿裙子你不怕腿冷吗？\n问：男的是什么意思？",
       "scriptVn": "Nữ: Anh bảo hôm nay em mặc váy hay mặc quần thì đẹp? / Nam: Hôm nay trời lạnh, mặc váy em không sợ lạnh chân à? / Hỏi: Người đàn ông có ý gì? (A quần ngắn · B mặc quần thì tốt · C đừng mặc váy cũ)"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "楼后面"
        },
        {
         "zh": "教室旁边"
        },
        {
         "zh": "饭馆儿东边"
        }
       ],
       "answer": "A",
       "audio": [
        1210.4,
        1246
       ],
       "script": "男：李校长，楼下哪辆车是您的？\n女：我的车在楼后面，车号后四位是六五二零。\n问：李校长的车在哪里？",
       "scriptVn": "Nam: Hiệu trưởng Lý, dưới nhà xe nào là của bà? / Nữ: Xe tôi ở phía sau tòa nhà, bốn số cuối biển là 6520. / Hỏi: Xe của hiệu trưởng Lý ở đâu? (A phía sau tòa nhà · B cạnh lớp học · C phía đông quán ăn)"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "照相"
        },
        {
         "zh": "写信"
        },
        {
         "zh": "买手机"
        }
       ],
       "answer": "A",
       "audio": [
        1256.4,
        1288.2
       ],
       "script": "女：爷爷，您再向右一点儿，和奶奶站得近一些。\n男：好，这样可以吗？\n问：他们正在做什么？",
       "scriptVn": "Nữ: Ông ơi, ông sang phải thêm chút nữa, đứng gần bà hơn một chút. / Nam: Được, thế này được chưa? / Hỏi: Họ đang làm gì? (A chụp ảnh · B viết thư · C mua điện thoại)"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "商店"
        },
        {
         "zh": "银行"
        },
        {
         "zh": "图书馆"
        }
       ],
       "answer": "B",
       "audio": [
        1298.7,
        1332.3
       ],
       "script": "男：你不是要去银行吗？怎么这么快就回来了？\n女：外面下雨了，你给我拿把雨伞吧。\n问：女的要去哪儿？",
       "scriptVn": "Nam: Chẳng phải em đi ngân hàng à? Sao về nhanh thế? / Nữ: Bên ngoài mưa rồi, anh lấy cho em cái ô. / Hỏi: Người phụ nữ muốn đi đâu? (A cửa hàng · B ngân hàng · C thư viện)"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "夫妻"
        },
        {
         "zh": "同事"
        },
        {
         "zh": "哥哥和妹妹"
        }
       ],
       "answer": "B",
       "audio": [
        1342.7,
        1382.2
       ],
       "script": "女：请安静，我介绍一下，这位是我们新来的同事王可可。\n男：大家好，我姓王，以后叫我小王就可以了。\n问：他们是什么关系？",
       "scriptVn": "Nữ: Mọi người trật tự, tôi giới thiệu một chút, đây là đồng nghiệp mới của chúng ta Vương Khả Khả. / Nam: Chào mọi người, tôi họ Vương, sau này gọi tôi là Tiểu Vương là được. / Hỏi: Họ có quan hệ gì? (A vợ chồng · B đồng nghiệp · C anh trai và em gái)"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "哭了"
        },
        {
         "zh": "生气了"
        },
        {
         "zh": "帽子被刮跑了"
        }
       ],
       "answer": "C",
       "audio": [
        1392.7,
        1419.8
       ],
       "script": "男：你笑什么呢？\n女：你看，大门口那个人的帽子被风刮跑了。\n问：大门口那个人怎么了？",
       "scriptVn": "Nam: Em cười gì thế? / Nữ: Anh xem, mũ của người ở cổng bị gió thổi bay rồi. / Hỏi: Người ở cổng làm sao? (A khóc rồi · B tức giận · C mũ bị gió thổi bay)"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "花园"
        },
        {
         "zh": "河边"
        },
        {
         "zh": "电影院"
        }
       ],
       "answer": "A",
       "audio": [
        1430.3,
        1458.9
       ],
       "script": "女：你听，外面是什么声音？\n男：是小鸟在叫。走，我们去花园看看。\n问：他们要去哪儿？",
       "scriptVn": "Nữ: Anh nghe xem, bên ngoài là tiếng gì? / Nam: Là chim đang hót. Đi, mình ra vườn xem. / Hỏi: Họ định đi đâu? (A vườn hoa · B bờ sông · C rạp chiếu phim)"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "还书"
        },
        {
         "zh": "打扫房间"
        },
        {
         "zh": "检查作业"
        }
       ],
       "answer": "A",
       "audio": [
        1469.3,
        1510.5
       ],
       "script": "男：上个月借的这几本书该还了，今天还没时间……\n女：今天必须还吗？我去图书馆学习，我帮你还吧。\n问：女的要帮男的做什么？",
       "scriptVn": "Nam: Mấy cuốn sách mượn tháng trước phải trả rồi, hôm nay lại không có thời gian… / Nữ: Hôm nay nhất định phải trả à? Em đến thư viện học, em trả giúp anh nhé. / Hỏi: Người phụ nữ sẽ giúp người đàn ông làm gì? (A trả sách · B dọn phòng · C kiểm tra bài tập)"
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
         "zh": "客人不满意"
        },
        {
         "zh": "护照不见了"
        },
        {
         "zh": "不认识路了"
        }
       ],
       "answer": "C",
       "audio": [
        1591.1,
        1637.9
       ],
       "script": "男：我们是不是走错了？\n女：有可能，这条街我们走过吗？\n男：我也不知道。我只是觉得离宾馆越来越远了。\n女：别着急，我们问问别人。\n问：他们遇到什么问题了？",
       "scriptVn": "Nam: Có phải chúng ta đi nhầm rồi không? / Nữ: Có thể, con phố này mình đi qua chưa? / Nam: Anh cũng không biết. Anh chỉ thấy càng lúc càng xa khách sạn. / Nữ: Đừng vội, mình hỏi người khác xem. / Hỏi: Họ gặp vấn đề gì? (A khách không hài lòng · B mất hộ chiếu · C không biết đường)"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "超市"
        },
        {
         "zh": "地铁上"
        },
        {
         "zh": "出租车上"
        }
       ],
       "answer": "C",
       "audio": [
        1648,
        1691.9
       ],
       "script": "女：你好，我去火车站。\n男：北京有好几个火车站，您要去哪个火车站？\n女：我看看，车票上写的是北京西站。\n男：好的，明白了。\n问：他们最可能在哪儿？",
       "scriptVn": "Nữ: Chào anh, tôi đến ga tàu hỏa. / Nam: Bắc Kinh có mấy ga tàu, chị muốn đến ga nào? / Nữ: Để tôi xem, trên vé ghi là ga Bắc Kinh Tây. / Nam: Vâng, tôi hiểu rồi. / Hỏi: Họ nhiều khả năng đang ở đâu? (A siêu thị · B trên tàu điện ngầm · C trên taxi)"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "生病了"
        },
        {
         "zh": "跑得慢"
        },
        {
         "zh": "长得矮"
        }
       ],
       "answer": "B",
       "audio": [
        1701.9,
        1750.3
       ],
       "script": "男：你怎么不参加这次长跑比赛？\n女：我跑得太慢，我怕影响我们班的成绩，所以……\n男：没关系，其他同学也都参加。\n女：那好吧，我也去锻炼一下。\n问：关于女的，可以知道什么？",
       "scriptVn": "Nam: Sao em không tham gia cuộc thi chạy đường dài lần này? / Nữ: Em chạy chậm quá, sợ ảnh hưởng thành tích của lớp mình, nên… / Nam: Không sao, các bạn khác cũng đều tham gia. / Nữ: Vậy được, em cũng đi rèn luyện một chút. / Hỏi: Về cô gái, có thể biết gì? (A bị ốm · B chạy chậm · C dáng thấp)"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "公园"
        },
        {
         "zh": "机场"
        },
        {
         "zh": "办公室"
        }
       ],
       "answer": "A",
       "audio": [
        1760.3,
        1805
       ],
       "script": "女：你这些照片照得真漂亮。\n男：主要是新买的相机好。\n女：这张是在哪儿照的？\n男：我们家附近的那个公园，我们以前一起去过。\n问：那张照片是在哪儿照的？",
       "scriptVn": "Nữ: Những bức ảnh này anh chụp đẹp thật. / Nam: Chủ yếu là máy ảnh mới mua tốt. / Nữ: Tấm này chụp ở đâu? / Nam: Cái công viên gần nhà mình, trước đây mình từng đi cùng nhau. / Hỏi: Tấm ảnh đó chụp ở đâu? (A công viên · B sân bay · C văn phòng)"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "很一般"
        },
        {
         "zh": "很好吃"
        },
        {
         "zh": "不太甜"
        }
       ],
       "answer": "B",
       "audio": [
        1815,
        1858
       ],
       "script": "男：妈，这西瓜您什么时候买的？\n女：昨天中午买的，怎么了，不新鲜了？\n男：新鲜，也很甜，很好吃。\n女：那就好，我以为不好吃呢。\n问：这个西瓜怎么样？",
       "scriptVn": "Nam: Mẹ ơi, quả dưa hấu này mẹ mua lúc nào thế? / Nữ: Trưa hôm qua, sao thế, không tươi à? / Nam: Tươi, cũng rất ngọt, rất ngon. / Nữ: Thế thì tốt, mẹ tưởng không ngon. / Hỏi: Quả dưa hấu này thế nào? (A rất bình thường · B rất ngon · C không ngọt lắm)"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "骑车来的"
        },
        {
         "zh": "坐船来的"
        },
        {
         "zh": "同事送来的"
        }
       ],
       "answer": "A",
       "audio": [
        1868,
        1914
       ],
       "script": "女：天快黑了，我们该回去了。\n男：好，你们是坐公共汽车来的？\n女：不是，我们骑自行车来的。\n男：那路上小心点儿。欢迎下次再来。\n问：女的是怎么来的？",
       "scriptVn": "Nữ: Trời sắp tối rồi, chúng tôi phải về thôi. / Nam: Vâng, các bạn đi xe buýt đến à? / Nữ: Không, chúng tôi đạp xe đến. / Nam: Vậy đi đường cẩn thận nhé. Hoan nghênh lần sau lại đến. / Hỏi: Người phụ nữ đến bằng cách nào? (A đạp xe đến · B đi thuyền đến · C đồng nghiệp đưa đến)"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "工作很忙"
        },
        {
         "zh": "不想起床"
        },
        {
         "zh": "希望别迟到"
        }
       ],
       "answer": "C",
       "audio": [
        1924,
        1977
       ],
       "script": "男：才七点，你今天起得真早。\n女：今天是我第一天上班，一定不能迟到。\n男：你那个公司不是就在附近吗？\n女：是在附近，但是我走路去也要半个小时。\n问：关于女的，可以知道什么？",
       "scriptVn": "Nam: Mới bảy giờ, hôm nay em dậy sớm thật. / Nữ: Hôm nay là ngày đầu tiên em đi làm, nhất định không được đến muộn. / Nam: Công ty em chẳng phải ở ngay gần đây sao? / Nữ: Ở gần, nhưng em đi bộ cũng mất nửa tiếng. / Hỏi: Về người phụ nữ, có thể biết gì? (A công việc rất bận · B không muốn dậy · C mong không đến muộn)"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "红色的"
        },
        {
         "zh": "左边的"
        },
        {
         "zh": "右边的"
        }
       ],
       "answer": "A",
       "audio": [
        1987,
        2018.4
       ],
       "script": "女：你好，中间这个包怎么卖？\n男：一百七十五。\n女：还有其他颜色的吗？\n男：还有红色的。\n问：女的要看哪个包？",
       "scriptVn": "Nữ: Chào anh, cái túi ở giữa này bán thế nào? / Nam: Một trăm bảy mươi lăm. / Nữ: Còn màu khác không? / Nam: Còn màu đỏ. / Hỏi: Người phụ nữ muốn xem túi nào? (A màu đỏ · B bên trái · C bên phải)"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "更胖了"
        },
        {
         "zh": "更瘦了"
        },
        {
         "zh": "更年轻了"
        }
       ],
       "answer": "C",
       "audio": [
        2028.5,
        2079.6
       ],
       "script": "男：阿姨，我发现您变得越来越年轻了。\n女：真的吗？那我更要多锻炼身体了。\n男：您现在每天早上还跑步吗？\n女：是，天气好的时候，我都去跑。\n问：男的认为阿姨变得怎么样了？",
       "scriptVn": "Nam: Cô ơi, cháu thấy cô ngày càng trẻ ra. / Nữ: Thật à? Vậy cô càng phải tập thể dục nhiều hơn. / Nam: Bây giờ sáng nào cô cũng còn chạy bộ ạ? / Nữ: Ừ, hôm nào trời đẹp cô đều đi chạy. / Hỏi: Người đàn ông cho rằng cô ấy trở nên thế nào? (A béo hơn · B gầy hơn · C trẻ hơn)"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "音乐"
        },
        {
         "zh": "体育"
        },
        {
         "zh": "新闻"
        }
       ],
       "answer": "B",
       "audio": [
        2089.6,
        2138.7
       ],
       "script": "女：明天休息，今晚想看什么节目啊？\n男：今晚有足球，现在八点了吗？\n女：现在才七点一刻，还有四十五分钟呢。\n男：不会吧？你的手表慢了吧？\n问：男的想看什么节目？",
       "scriptVn": "Nữ: Mai được nghỉ, tối nay anh muốn xem chương trình gì? / Nam: Tối nay có bóng đá, bây giờ tám giờ chưa? / Nữ: Bây giờ mới bảy giờ mười lăm, còn bốn mươi lăm phút nữa. / Nam: Không phải chứ? Đồng hồ em chạy chậm à? / Hỏi: Người đàn ông muốn xem chương trình gì? (A âm nhạc · B thể thao · C thời sự)"
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
         "zh": "真冷啊，把空调打开吧。",
         "vn": "Lạnh quá, bật điều hòa lên đi."
        },
        {
         "k": "B",
         "zh": "我等个朋友，先给我来一杯咖啡吧，谢谢。",
         "vn": "Tôi đợi một người bạn, cho tôi một cốc cà phê trước, cảm ơn."
        },
        {
         "k": "C",
         "zh": "如果不下雪，我要和同学们去爬山。",
         "vn": "Nếu không có tuyết, tôi sẽ đi leo núi với các bạn."
        },
        {
         "k": "D",
         "zh": "报纸上有什么新闻吗？",
         "vn": "Trên báo có tin gì không?"
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "没问题，那些题都非常简单。",
         "vn": "Không vấn đề, mấy bài đó đều rất đơn giản."
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "上午的数学考试怎么样？",
         "vn": "Bài thi toán buổi sáng thế nào?",
         "answer": "F"
        },
        {
         "n": 42,
         "zh": "先生，请问您喝点儿什么？",
         "vn": "Thưa anh, anh uống gì ạ?",
         "answer": "B"
        },
        {
         "n": 43,
         "zh": "这个周末你打算做什么？",
         "vn": "Cuối tuần này bạn định làm gì?",
         "answer": "C"
        },
        {
         "n": 44,
         "zh": "还没看呢，我洗完澡再看。",
         "vn": "Còn chưa xem, tôi tắm xong rồi xem.",
         "answer": "D"
        },
        {
         "n": 45,
         "zh": "你衣服穿得太少了，是不是感冒了？",
         "vn": "Bạn mặc ít áo quá, có phải bị cảm rồi không?",
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
         "zh": "我记得你弟弟以前特别胖。",
         "vn": "Tôi nhớ trước đây em trai bạn rất béo."
        },
        {
         "k": "B",
         "zh": "祝您生日快乐！这是我送您的礼物。",
         "vn": "Chúc ông/bà sinh nhật vui vẻ! Đây là quà cháu tặng."
        },
        {
         "k": "C",
         "zh": "今天我来洗碗，你累一天了，去看电视吧。",
         "vn": "Hôm nay để anh rửa bát, em mệt cả ngày rồi, đi xem ti vi đi."
        },
        {
         "k": "D",
         "zh": "你不舒服吗？需不需要去房间休息一下？",
         "vn": "Bạn không khỏe à? Có cần vào phòng nghỉ một chút không?"
        },
        {
         "k": "E",
         "zh": "明天就要出国了？在外面注意身体，照顾好自己。",
         "vn": "Mai đã ra nước ngoài rồi à? Ở bên ngoài chú ý sức khỏe, tự chăm sóc bản thân nhé."
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "没关系，我吃过药了。",
         "vn": "Không sao, tôi uống thuốc rồi.",
         "answer": "D"
        },
        {
         "n": 47,
         "zh": "他从去年秋天开始锻炼，现在不到70公斤。",
         "vn": "Cậu ấy bắt đầu tập luyện từ mùa thu năm ngoái, bây giờ chưa đến 70 cân.",
         "answer": "A"
        },
        {
         "n": 48,
         "zh": "好，我会给你打电话或者写电子邮件的。",
         "vn": "Được, tôi sẽ gọi điện hoặc gửi email cho bạn.",
         "answer": "E"
        },
        {
         "n": 49,
         "zh": "不用，你把筷子和杯子拿过来就可以了。",
         "vn": "Không cần, bạn mang đũa và cốc lại đây là được.",
         "answer": "C"
        },
        {
         "n": 50,
         "zh": "大家来吃蛋糕吧，这块儿大的给你。",
         "vn": "Mọi người đến ăn bánh ga-tô nào, miếng to này cho bạn.",
         "answer": "B"
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
         "zh": "聪明"
        },
        {
         "k": "B",
         "zh": "几乎"
        },
        {
         "k": "C",
         "zh": "解决"
        },
        {
         "k": "D",
         "zh": "历史"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "关系"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "这个城市有几百年的（　）了。",
         "vn": "Thành phố này có mấy trăm năm (lịch sử) rồi.",
         "answer": "D"
        },
        {
         "n": 52,
         "zh": "儿子长大了，都快一米八了，（　）和他爸爸一样高了。",
         "vn": "Con trai lớn rồi, gần 1m80, (gần như) cao bằng bố nó rồi.",
         "answer": "B"
        },
        {
         "n": 53,
         "zh": "小黄是我的好朋友，她和我的（　）一直很好。",
         "vn": "Tiểu Hoàng là bạn thân của tôi, (quan hệ) giữa cô ấy và tôi luôn rất tốt.",
         "answer": "F"
        },
        {
         "n": 54,
         "zh": "多吃鱼会使人变得更（　）。",
         "vn": "Ăn nhiều cá giúp con người trở nên (thông minh) hơn.",
         "answer": "A"
        },
        {
         "n": 55,
         "zh": "我们已经找到（　）问题的办法了。",
         "vn": "Chúng tôi đã tìm được cách (giải quyết) vấn đề rồi.",
         "answer": "C"
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
         "zh": "画"
        },
        {
         "k": "B",
         "zh": "简单"
        },
        {
         "k": "C",
         "zh": "选择"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "结婚"
        },
        {
         "k": "F",
         "zh": "马上"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：你（　）的这是猫？\nB：大熊猫！它在爬树。这也看不懂？",
         "vn": "A: Cái bạn (vẽ) đây là con mèo à? / B: Gấu trúc! Nó đang trèo cây. Thế mà cũng không nhìn ra?",
         "answer": "A"
        },
        {
         "n": 57,
         "zh": "A：你低着头想什么呢？\nB：是工作还是读书，我不知道应该怎么（　）才好。",
         "vn": "A: Bạn cúi đầu nghĩ gì thế? / B: Đi làm hay đi học, tôi không biết nên (chọn) thế nào.",
         "answer": "C"
        },
        {
         "n": 58,
         "zh": "A：你渴不？我想去买点儿水。\nB：那你快一点儿，表演（　）就要开始了。",
         "vn": "A: Bạn khát không? Tôi muốn đi mua ít nước. / B: Vậy bạn nhanh lên, buổi biểu diễn (sắp) bắt đầu rồi.",
         "answer": "F"
        },
        {
         "n": 59,
         "zh": "A：相信我，这件事对公司不会有影响的。\nB：夏经理，你把事情想得太（　）了。",
         "vn": "A: Tin tôi đi, việc này sẽ không ảnh hưởng đến công ty. / B: Giám đốc Hạ, anh nghĩ sự việc (đơn giản) quá rồi.",
         "answer": "B"
        },
        {
         "n": 60,
         "zh": "A：好久没看见白老师了，他不在这儿住了？\nB：是，他（　）以后就和妻子搬到学校去住了。",
         "vn": "A: Lâu rồi không thấy thầy Bạch, thầy không ở đây nữa à? / B: Đúng vậy, sau khi (kết hôn) thầy cùng vợ chuyển vào trường ở rồi.",
         "answer": "E"
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
       "zh": "最近几年，这里的变化很大，车辆更多了，街道更干净了，天更蓝了，树更绿了。",
       "star": "这里最近几年怎么样？",
       "options": [
        {
         "zh": "环境变好了"
        },
        {
         "zh": "和过去相同"
        },
        {
         "zh": "变得更差了"
        }
       ],
       "answer": "A",
       "vn": "Mấy năm gần đây, nơi này thay đổi rất lớn, xe cộ nhiều hơn, đường phố sạch hơn, trời xanh hơn, cây xanh tươi hơn. ★ Mấy năm gần đây nơi này thế nào? A môi trường tốt lên · B giống như trước · C trở nên tệ hơn."
      },
      {
       "n": 62,
       "zh": "人们根据季节的变化来决定喝什么茶。老人们经常说：“春天最好喝花茶，冬天最好喝红茶。”",
       "star": "这段话告诉我们：",
       "options": [
        {
         "zh": "茶有什么作用"
        },
        {
         "zh": "老人爱喝红茶"
        },
        {
         "zh": "不同季节喝不同的茶"
        }
       ],
       "answer": "C",
       "vn": "Người ta dựa vào sự thay đổi của mùa để quyết định uống trà gì. Người già thường nói: \"Mùa xuân tốt nhất uống trà hoa, mùa đông tốt nhất uống hồng trà.\" ★ Đoạn văn cho chúng ta biết: A trà có tác dụng gì · B người già thích uống hồng trà · C mùa khác nhau uống trà khác nhau."
      },
      {
       "n": 63,
       "zh": "汉字有多少个？这个问题谁也回答不清楚，《汉语大字典》里有五六万字，普通的小字典，一本也有八九千字。但人们常用的也就两千多个，认识这两千多个字，读书看报就没什么问题了。",
       "star": "这段话的主要意思是：",
       "options": [
        {
         "zh": "汉字很难写"
        },
        {
         "zh": "要学会查字典"
        },
        {
         "zh": "常用汉字不多"
        }
       ],
       "answer": "C",
       "vn": "Chữ Hán có bao nhiêu chữ? Câu hỏi này không ai trả lời rõ được, \"Hán ngữ đại tự điển\" có năm sáu vạn chữ, từ điển nhỏ thông thường một cuốn cũng có tám chín nghìn chữ. Nhưng chữ thường dùng chỉ khoảng hơn hai nghìn, biết hơn hai nghìn chữ này thì đọc sách xem báo không có vấn đề gì. ★ Ý chính của đoạn văn: A chữ Hán rất khó viết · B phải biết tra từ điển · C chữ Hán thường dùng không nhiều."
      },
      {
       "n": 64,
       "zh": "为什么很多人愿意在网上买东西呢？因为非常方便，而且还便宜，如果对买到的东西有不满意的地方，也可以要求换新的。",
       "star": "在网上买东西：",
       "options": [
        {
         "zh": "比较贵"
        },
        {
         "zh": "花钱少"
        },
        {
         "zh": "花的时间多"
        }
       ],
       "answer": "B",
       "vn": "Vì sao nhiều người thích mua đồ trên mạng? Vì rất tiện, lại còn rẻ, nếu có chỗ không hài lòng với đồ đã mua cũng có thể yêu cầu đổi mới. ★ Mua đồ trên mạng: A khá đắt · B tốn ít tiền · C tốn nhiều thời gian."
      },
      {
       "n": 65,
       "zh": "儿子的作业总是做错，但昨天的一个也没错。老师问：“有人帮你写作业了？”“没有，我爸爸昨天没时间，我想我应该自己完成了。”",
       "star": "儿子昨天的作业为什么没错？",
       "options": [
        {
         "zh": "自己做的"
        },
        {
         "zh": "爸爸帮忙了"
        },
        {
         "zh": "认真复习了"
        }
       ],
       "answer": "A",
       "vn": "Bài tập của con trai luôn làm sai, nhưng hôm qua không sai bài nào. Cô giáo hỏi: \"Có ai giúp em làm bài à?\" \"Không ạ, hôm qua bố em không có thời gian, em nghĩ em nên tự làm.\" ★ Vì sao bài tập hôm qua của con trai không sai? A tự làm · B bố giúp · C ôn bài chăm chỉ."
      },
      {
       "n": 66,
       "zh": "晚上睡觉前喝一杯热牛奶，能帮助人们睡得更好。你有这个习惯吗？",
       "star": "“这个习惯”说的是：",
       "options": [
        {
         "zh": "帮助别人"
        },
        {
         "zh": "睡前刷牙"
        },
        {
         "zh": "睡前喝牛奶"
        }
       ],
       "answer": "C",
       "vn": "Trước khi đi ngủ uống một cốc sữa nóng giúp người ta ngủ ngon hơn. Bạn có thói quen này không? ★ \"Thói quen này\" là: A giúp đỡ người khác · B đánh răng trước khi ngủ · C uống sữa trước khi ngủ."
      },
      {
       "n": 67,
       "zh": "新年前一天，每个班都举行了新年晚会。学生们在晚会上唱歌、跳舞、做游戏，玩得高兴极了。",
       "star": "新年晚会：",
       "options": [
        {
         "zh": "已经结束了"
        },
        {
         "zh": "参加的人不多"
        },
        {
         "zh": "在1月1日举行"
        }
       ],
       "answer": "A",
       "vn": "Một ngày trước năm mới, lớp nào cũng tổ chức tiệc mừng năm mới. Học sinh hát, nhảy, chơi trò chơi trong buổi tiệc, vui vô cùng. ★ Tiệc năm mới: A đã kết thúc rồi · B không nhiều người tham gia · C tổ chức ngày 1 tháng 1."
      },
      {
       "n": 68,
       "zh": "我从小就喜欢旅游，但爸妈不让我一个人出去玩儿。我16岁生日那天，他们终于同意了。为了这次旅游，我买了一个小行李箱，还有地图。",
       "star": "爸妈同意什么了？",
       "options": [
        {
         "zh": "教我游泳"
        },
        {
         "zh": "我一个人去旅游"
        },
        {
         "zh": "跟我一起去旅游"
        }
       ],
       "answer": "B",
       "vn": "Từ nhỏ tôi đã thích du lịch, nhưng bố mẹ không cho tôi đi chơi một mình. Ngày sinh nhật 16 tuổi, cuối cùng bố mẹ cũng đồng ý. Để chuẩn bị cho chuyến đi này, tôi mua một chiếc vali nhỏ và bản đồ. ★ Bố mẹ đồng ý điều gì? A dạy tôi bơi · B tôi đi du lịch một mình · C đi du lịch cùng tôi."
      },
      {
       "n": 69,
       "zh": "喂，你帮我看看，我的眼镜是不是在桌子上？什么？在椅子上？好，我知道了。",
       "star": "我在找什么东西？",
       "options": [
        {
         "zh": "椅子"
        },
        {
         "zh": "衬衫"
        },
        {
         "zh": "眼镜"
        }
       ],
       "answer": "C",
       "vn": "Alô, bạn xem giúp tôi, kính của tôi có phải ở trên bàn không? Sao cơ? Ở trên ghế à? Được, tôi biết rồi. ★ Tôi đang tìm gì? A cái ghế · B áo sơ mi · C kính mắt."
      },
      {
       "n": 70,
       "zh": "你想了解历史吗？这本书是一个很好的选择。书里讲了世界上很多国家的历史故事，相信爱好历史的人一定会对它有兴趣。",
       "star": "这本书主要介绍：",
       "options": [
        {
         "zh": "中国文化"
        },
        {
         "zh": "历史故事"
        },
        {
         "zh": "兴趣爱好"
        }
       ],
       "answer": "B",
       "vn": "Bạn muốn tìm hiểu lịch sử không? Cuốn sách này là lựa chọn rất tốt. Sách kể câu chuyện lịch sử của nhiều quốc gia trên thế giới, tin rằng người yêu lịch sử nhất định sẽ hứng thú. ★ Cuốn sách này chủ yếu giới thiệu: A văn hóa Trung Quốc · B câu chuyện lịch sử · C sở thích."
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
        "那",
        "邻居",
        "很热情",
        "位"
       ],
       "answer": "那位邻居很热情。",
       "vn": "Người hàng xóm đó rất nhiệt tình."
      },
      {
       "n": 72,
       "words": [
        "这个",
        "三层",
        "一共",
        "楼"
       ],
       "answer": "这个楼一共三层。",
       "vn": "Tòa nhà này tổng cộng ba tầng."
      },
      {
       "n": 73,
       "words": [
        "菜单",
        "服务员",
        "拿走了",
        "被"
       ],
       "answer": "菜单被服务员拿走了。",
       "vn": "Thực đơn đã bị nhân viên phục vụ mang đi."
      },
      {
       "n": 74,
       "words": [
        "比",
        "北方",
        "中国南方的雨水",
        "多"
       ],
       "answer": "中国南方的雨水比北方多。",
       "vn": "Lượng mưa ở miền Nam Trung Quốc nhiều hơn miền Bắc."
      },
      {
       "n": 75,
       "words": [
        "把",
        "厨房里",
        "吧",
        "冰箱",
        "放"
       ],
       "answer": "把冰箱放厨房里吧。",
       "vn": "Để tủ lạnh vào bếp đi."
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
       "pre": "你姐姐的孩子上",
       "py": "jǐ",
       "post": "年级？",
       "answer": "几",
       "vn": "Con của chị bạn học lớp mấy (几)?"
      },
      {
       "n": 77,
       "pre": "马小姐，谢谢关",
       "py": "xīn",
       "post": "，我不发烧了，头也不疼了。",
       "answer": "心",
       "vn": "Cô Mã, cảm ơn cô đã quan tâm (关心), tôi hết sốt rồi, đầu cũng không đau nữa."
      },
      {
       "n": 78,
       "pre": "对不起，",
       "py": "xià",
       "post": "午有个重要的会议，我让司机去医院接你好不好？",
       "answer": "下",
       "vn": "Xin lỗi, buổi chiều (下午) có cuộc họp quan trọng, tôi bảo tài xế đến bệnh viện đón bạn được không?"
      },
      {
       "n": 79,
       "pre": "经过4个星期的练习，叔叔的普通话水平有了很",
       "py": "dà",
       "post": "提高。",
       "answer": "大",
       "vn": "Sau 4 tuần luyện tập, trình độ tiếng phổ thông của chú đã tiến bộ rất lớn (大)."
      },
      {
       "n": 80,
       "pre": "这个小太阳表示晴天，",
       "py": "yún",
       "post": "表示阴天。",
       "answer": "云",
       "vn": "Mặt trời nhỏ này biểu thị trời nắng, mây (云) biểu thị trời râm."
      }
     ]
    }
   ]
  }
 ]
};
