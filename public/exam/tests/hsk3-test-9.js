// Đề thi thử HSK 3 – Test 9 (đề thật H31327).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-9",
 "level": "HSK 3",
 "title": "HSK 3 - Test 9",
 "code": "H31327",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-9/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-9.mp3",
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
          101.1,
          126.8
         ]
        },
        {
         "n": 2,
         "answer": "A",
         "audio": [
          132.1,
          156.4
         ]
        },
        {
         "n": 3,
         "answer": "C",
         "audio": [
          161.9,
          192.5
         ]
        },
        {
         "n": 4,
         "answer": "E",
         "audio": [
          197.9,
          223.9
         ]
        },
        {
         "n": 5,
         "answer": "B",
         "audio": [
          229.3,
          253.1
         ]
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
          264.3,
          286.8
         ]
        },
        {
         "n": 7,
         "answer": "A",
         "audio": [
          292.3,
          319.7
         ]
        },
        {
         "n": 8,
         "answer": "D",
         "audio": [
          325.1,
          349.7
         ]
        },
        {
         "n": 9,
         "answer": "E",
         "audio": [
          355.1,
          380.4
         ]
        },
        {
         "n": 10,
         "answer": "C",
         "audio": [
          385.8,
          415.9
         ]
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
       "star": "她花了105元。",
       "answer": false,
       "audio": [
        512.6,
        542
       ],
       "vn": "Câu ★: Cô ấy đã tiêu 105 tệ."
      },
      {
       "n": 12,
       "star": "他要帮弟弟照顾狗。",
       "answer": true,
       "audio": [
        549.4,
        579.1
       ],
       "vn": "Câu ★: Anh ấy sẽ giúp em trai chăm sóc con chó."
      },
      {
       "n": 13,
       "star": "他们把问题解决了。",
       "answer": false,
       "audio": [
        586.6,
        621.1
       ],
       "vn": "Câu ★: Họ đã giải quyết được vấn đề."
      },
      {
       "n": 14,
       "star": "小王学东西很慢。",
       "answer": false,
       "audio": [
        628.6,
        662.2
       ],
       "vn": "Câu ★: Tiểu Vương học cái gì cũng rất chậm."
      },
      {
       "n": 15,
       "star": "不高兴时可以听听歌。",
       "answer": true,
       "audio": [
        669.7,
        712.1
       ],
       "vn": "Câu ★: Khi không vui có thể nghe nhạc."
      },
      {
       "n": 16,
       "star": "女儿今晚不回来吃饭。",
       "answer": true,
       "audio": [
        719.6,
        759.9
       ],
       "vn": "Câu ★: Tối nay con gái không về ăn cơm."
      },
      {
       "n": 17,
       "star": "他更喜欢上数学课。",
       "answer": false,
       "audio": [
        767.3,
        801.4
       ],
       "vn": "Câu ★: Anh ấy thích học môn toán hơn."
      },
      {
       "n": 18,
       "star": "李先生换办公室了。",
       "answer": true,
       "audio": [
        808.8,
        849
       ],
       "vn": "Câu ★: Ông Lý đã đổi văn phòng."
      },
      {
       "n": 19,
       "star": "张叔叔是爸爸的同学。",
       "answer": false,
       "audio": [
        856.4,
        896.2
       ],
       "vn": "Câu ★: Chú Trương là bạn học của bố."
      },
      {
       "n": 20,
       "star": "他认为春季很漂亮。",
       "answer": true,
       "audio": [
        903.6,
        958.9
       ],
       "vn": "Câu ★: Anh ấy cho rằng mùa xuân rất đẹp."
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
         "zh": "坐船"
        },
        {
         "zh": "坐飞机"
        },
        {
         "zh": "坐地铁"
        }
       ],
       "answer": "A",
       "audio": [
        1018.8,
        1050.5
       ],
       "vn": "Nghĩa các lựa chọn: A đi thuyền · B đi máy bay · C đi tàu điện ngầm"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "哭了"
        },
        {
         "zh": "要出国"
        },
        {
         "zh": "爱帮助人"
        }
       ],
       "answer": "B",
       "audio": [
        1061.5,
        1097.5
       ],
       "vn": "Nghĩa các lựa chọn: A khóc rồi · B sắp ra nước ngoài · C thích giúp đỡ người khác"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "没听明白"
        },
        {
         "zh": "练习题很难"
        },
        {
         "zh": "不会说普通话"
        }
       ],
       "answer": "A",
       "audio": [
        1108.5,
        1136.3
       ],
       "vn": "Nghĩa các lựa chọn: A nghe chưa hiểu · B bài luyện tập rất khó · C không biết nói tiếng phổ thông"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "回北方"
        },
        {
         "zh": "卖房子"
        },
        {
         "zh": "边工作边学习"
        }
       ],
       "answer": "A",
       "audio": [
        1147.3,
        1181.7
       ],
       "vn": "Nghĩa các lựa chọn: A về miền Bắc · B bán nhà · C vừa làm vừa học"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "忙着复习"
        },
        {
         "zh": "节目不好看"
        },
        {
         "zh": "要准备比赛"
        }
       ],
       "answer": "C",
       "audio": [
        1192.8,
        1229.1
       ],
       "vn": "Nghĩa các lựa chọn: A bận ôn bài · B chương trình không hay · C phải chuẩn bị thi đấu"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "妈妈"
        },
        {
         "zh": "姐姐"
        },
        {
         "zh": "妹妹"
        }
       ],
       "answer": "C",
       "audio": [
        1240.1,
        1280.9
       ],
       "vn": "Nghĩa các lựa chọn: A mẹ · B chị gái · C em gái"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "商店"
        },
        {
         "zh": "机场"
        },
        {
         "zh": "火车站"
        }
       ],
       "answer": "A",
       "audio": [
        1292,
        1323.7
       ],
       "vn": "Nghĩa các lựa chọn: A cửa hàng · B sân bay · C ga tàu hỏa"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "在写信"
        },
        {
         "zh": "还没来"
        },
        {
         "zh": "不会回答"
        }
       ],
       "answer": "B",
       "audio": [
        1334.8,
        1377.7
       ],
       "vn": "Nghĩa các lựa chọn: A đang viết thư · B vẫn chưa đến · C không biết trả lời"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "同事"
        },
        {
         "zh": "夫妻"
        },
        {
         "zh": "老师和学生"
        }
       ],
       "answer": "A",
       "audio": [
        1388.7,
        1419.7
       ],
       "vn": "Nghĩa các lựa chọn: A đồng nghiệp · B vợ chồng · C thầy và trò"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "晴天"
        },
        {
         "zh": "下雪了"
        },
        {
         "zh": "下雨了"
        }
       ],
       "answer": "B",
       "audio": [
        1430.8,
        1467.5
       ],
       "vn": "Nghĩa các lựa chọn: A trời nắng · B tuyết rơi rồi · C trời mưa rồi"
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
         "zh": "10：05"
        },
        {
         "zh": "10：15"
        },
        {
         "zh": "10：30"
        }
       ],
       "answer": "B",
       "audio": [
        1547.2,
        1599.3
       ],
       "vn": "Nghĩa các lựa chọn: A 10 giờ 05 · B 10 giờ 15 · C 10 giờ 30"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "在开班会"
        },
        {
         "zh": "电脑坏了"
        },
        {
         "zh": "没时间上网"
        }
       ],
       "answer": "C",
       "audio": [
        1610.5,
        1663.1
       ],
       "vn": "Nghĩa các lựa chọn: A đang họp lớp · B máy tính hỏng rồi · C không có thời gian lên mạng"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "不错"
        },
        {
         "zh": "一般"
        },
        {
         "zh": "不太好"
        }
       ],
       "answer": "A",
       "audio": [
        1674.2,
        1733
       ],
       "vn": "Nghĩa các lựa chọn: A khá tốt · B bình thường · C không tốt lắm"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "作用不大"
        },
        {
         "zh": "不用买酒"
        },
        {
         "zh": "鸡蛋不新鲜"
        }
       ],
       "answer": "B",
       "audio": [
        1744.1,
        1784.7
       ],
       "vn": "Nghĩa các lựa chọn: A tác dụng không lớn · B không cần mua rượu · C trứng gà không tươi"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "很胖"
        },
        {
         "zh": "爱打篮球"
        },
        {
         "zh": "可以出院了"
        }
       ],
       "answer": "C",
       "audio": [
        1795.8,
        1839
       ],
       "vn": "Nghĩa các lựa chọn: A rất béo · B thích chơi bóng rổ · C có thể xuất viện rồi"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "3月5日"
        },
        {
         "zh": "3月6日"
        },
        {
         "zh": "6月7日"
        }
       ],
       "answer": "A",
       "audio": [
        1850.1,
        1896.2
       ],
       "vn": "Nghĩa các lựa chọn: A ngày 5 tháng 3 · B ngày 6 tháng 3 · C ngày 7 tháng 6"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "帽子"
        },
        {
         "zh": "盘子"
        },
        {
         "zh": "裙子"
        }
       ],
       "answer": "A",
       "audio": [
        1907.3,
        1958.1
       ],
       "vn": "Nghĩa các lựa chọn: A mũ · B đĩa · C váy"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "脚疼"
        },
        {
         "zh": "打车回家"
        },
        {
         "zh": "买了辆车"
        }
       ],
       "answer": "B",
       "audio": [
        1969.2,
        2010.4
       ],
       "vn": "Nghĩa các lựa chọn: A đau chân · B bắt taxi về nhà · C đã mua một chiếc xe"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "口渴了"
        },
        {
         "zh": "迟到了"
        },
        {
         "zh": "身体不舒服"
        }
       ],
       "answer": "C",
       "audio": [
        2021.4,
        2059.8
       ],
       "vn": "Nghĩa các lựa chọn: A khát nước · B đến muộn · C cơ thể không khỏe"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "菜单太旧"
        },
        {
         "zh": "咖啡很有名"
        },
        {
         "zh": "菜比较便宜"
        }
       ],
       "answer": "C",
       "audio": [
        2070.8,
        2115.4
       ],
       "vn": "Nghĩa các lựa chọn: A thực đơn quá cũ · B cà phê rất nổi tiếng · C món ăn khá rẻ"
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
         "zh": "小关人很好，对谁都很热情。",
         "vn": "Tiểu Quan rất tốt, với ai cũng nhiệt tình."
        },
        {
         "k": "B",
         "zh": "没想到才半年的时间，你的汉语水平就提高了这么多！",
         "vn": "Không ngờ mới nửa năm mà trình độ tiếng Hán của bạn đã tiến bộ nhiều thế!"
        },
        {
         "k": "C",
         "zh": "最东边那个。但是他上午出去开会了，您下午再来？",
         "vn": "Phòng ở tận cùng phía đông. Nhưng buổi sáng thầy ấy ra ngoài họp rồi, chiều ông quay lại nhé?"
        },
        {
         "k": "D",
         "zh": "地图上的字太小了，我看不清楚。",
         "vn": "Chữ trên bản đồ nhỏ quá, tôi nhìn không rõ."
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "忘记开空调了，你去开一下。",
         "vn": "Quên bật điều hòa rồi, bạn đi bật đi."
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "97分？你这次考试成绩不错啊。",
         "vn": "97 điểm? Lần thi này bạn được điểm tốt đấy.",
         "answer": "B"
        },
        {
         "n": 42,
         "zh": "奶奶，您等一下，我去给您拿眼镜。",
         "vn": "Bà ơi, bà đợi một chút, cháu đi lấy kính cho bà.",
         "answer": "D"
        },
        {
         "n": 43,
         "zh": "请问，张校长的办公室是哪一间？",
         "vn": "Xin hỏi, văn phòng hiệu trưởng Trương là phòng nào?",
         "answer": "C"
        },
        {
         "n": 44,
         "zh": "房间里怎么这么热？",
         "vn": "Sao trong phòng nóng thế này?",
         "answer": "F"
        },
        {
         "n": 45,
         "zh": "我刚来这里时，他帮了我不少忙。",
         "vn": "Lúc tôi mới đến đây, anh ấy đã giúp tôi rất nhiều.",
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
         "zh": "你先帮我把筷子和碗放到桌子上。",
         "vn": "Con giúp mẹ bày đũa và bát lên bàn trước nhé."
        },
        {
         "k": "B",
         "zh": "喂，外面阴天了，我担心会下雨。",
         "vn": "Alô, bên ngoài trời râm rồi, em sợ sẽ mưa."
        },
        {
         "k": "C",
         "zh": "这位是我的同学张乐，他现在是市第一医院的医生。",
         "vn": "Đây là bạn học của tôi Trương Lạc, bây giờ cậu ấy là bác sĩ Bệnh viện số 1 thành phố."
        },
        {
         "k": "D",
         "zh": "王阿姨和我妈妈爱好相同。",
         "vn": "Cô Vương và mẹ tôi có sở thích giống nhau."
        },
        {
         "k": "E",
         "zh": "儿子去年的裤子和衬衫今年就不能穿了。",
         "vn": "Quần và áo sơ mi năm ngoái của con trai năm nay đã không mặc vừa nữa."
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "小孩子长得真快！",
         "vn": "Trẻ con lớn nhanh thật!",
         "answer": "E"
        },
        {
         "n": 47,
         "zh": "除了爱唱歌外，她们还很喜欢跳舞。",
         "vn": "Ngoài thích hát, họ còn rất thích nhảy.",
         "answer": "D"
        },
        {
         "n": 48,
         "zh": "我来介绍一下，这是我妻子小蓝。",
         "vn": "Để tôi giới thiệu, đây là vợ tôi, Tiểu Lam.",
         "answer": "C"
        },
        {
         "n": 49,
         "zh": "饿了吧？今天不吃米饭，吃面条儿。",
         "vn": "Đói rồi nhỉ? Hôm nay không ăn cơm, ăn mì.",
         "answer": "A"
        },
        {
         "n": 50,
         "zh": "你出门记得带把伞。",
         "vn": "Ra ngoài nhớ mang theo ô nhé.",
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
         "zh": "糖"
        },
        {
         "k": "B",
         "zh": "安静"
        },
        {
         "k": "C",
         "zh": "出现"
        },
        {
         "k": "D",
         "zh": "结束"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "节日"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "牛奶太甜了，（　）放多了吧？",
         "vn": "Sữa ngọt quá, cho nhiều (đường) rồi à?",
         "answer": "A"
        },
        {
         "n": 52,
         "zh": "太阳和月亮会在同一个时候（　）吗？",
         "vn": "Mặt trời và mặt trăng có (xuất hiện) cùng một lúc không?",
         "answer": "C"
        },
        {
         "n": 53,
         "zh": "表演几点（　）？我去接你。",
         "vn": "Buổi biểu diễn mấy giờ (kết thúc)? Tôi đến đón bạn.",
         "answer": "D"
        },
        {
         "n": 54,
         "zh": "祝您（　）快乐，这是我们送您的礼物，希望您喜欢。",
         "vn": "Chúc ông/bà (ngày lễ) vui vẻ, đây là quà chúng cháu tặng, mong ông/bà thích.",
         "answer": "F"
        },
        {
         "n": 55,
         "zh": "山上很（　），早上起床的时候还能听见鸟的叫声。",
         "vn": "Trên núi rất (yên tĩnh), sáng dậy còn nghe được tiếng chim hót.",
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
         "zh": "参加"
        },
        {
         "k": "B",
         "zh": "米"
        },
        {
         "k": "C",
         "zh": "坏"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "洗手间"
        },
        {
         "k": "F",
         "zh": "当然"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：你怎么这么晚才到？\nB：对不起，我的自行车半路突然（　）了。",
         "vn": "A: Sao bạn đến muộn thế? / B: Xin lỗi, giữa đường xe đạp của tôi đột nhiên (hỏng).",
         "answer": "C"
        },
        {
         "n": 57,
         "zh": "A：下周我要去旅游，能借你的照相机用一下吗？\nB：（　）可以，你打算去哪儿？",
         "vn": "A: Tuần sau tôi đi du lịch, cho tôi mượn máy ảnh của bạn được không? / B: (Tất nhiên) được, bạn định đi đâu?",
         "answer": "F"
        },
        {
         "n": 58,
         "zh": "A：你上午没出去？\nB：没出去，我把厨房和（　）都打扫了一下。",
         "vn": "A: Buổi sáng bạn không ra ngoài à? / B: Không, tôi đã dọn dẹp cả bếp và (nhà vệ sinh).",
         "answer": "E"
        },
        {
         "n": 59,
         "zh": "A：你是今年刚（　）工作的？\nB：不是，我是去年秋天开始工作的，到现在都一年多了。",
         "vn": "A: Bạn mới (đi) làm năm nay à? / B: Không, tôi bắt đầu làm từ mùa thu năm ngoái, đến giờ hơn một năm rồi.",
         "answer": "A"
        },
        {
         "n": 60,
         "zh": "A：你好，这儿附近有银行吗？\nB：你从这儿向西走1000（　），应该有一家。",
         "vn": "A: Chào anh, gần đây có ngân hàng không? / B: Từ đây chị đi về phía tây 1000 (mét), chắc là có một ngân hàng.",
         "answer": "B"
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
       "zh": "我们把这张桌子搬到那边去吧，放在中间会影响大家走路的。",
       "star": "他们要把桌子：",
       "options": [
        {
         "zh": "放中间"
        },
        {
         "zh": "搬到一边"
        },
        {
         "zh": "还给别人"
        }
       ],
       "answer": "B",
       "vn": "Chúng ta chuyển cái bàn này sang bên kia đi, để ở giữa sẽ ảnh hưởng mọi người đi lại. ★ Họ định đưa cái bàn: A để ở giữa · B chuyển sang một bên · C trả lại người khác."
      },
      {
       "n": 62,
       "zh": "经理，我觉得服务员还是有点儿少，现在来店里吃饭的客人越来越多，特别是中午，大家经常忙不过来，您看要不要多找几个人？",
       "star": "说话人是什么意思？",
       "options": [
        {
         "zh": "服务员少"
        },
        {
         "zh": "工作不累"
        },
        {
         "zh": "经理要求低"
        }
       ],
       "answer": "A",
       "vn": "Giám đốc, tôi thấy nhân viên phục vụ vẫn hơi ít, bây giờ khách đến quán ăn ngày càng đông, nhất là buổi trưa, mọi người thường làm không xuể, anh xem có nên tìm thêm mấy người không? ★ Người nói có ý gì? A nhân viên phục vụ ít · B công việc không mệt · C giám đốc yêu cầu thấp."
      },
      {
       "n": 63,
       "zh": "中国有句话叫“不怕慢，只怕站”。意思是说不怕走得慢，就怕站着不走。走得再慢，一步一步地走下去，也能走到想去的地方。",
       "star": "这段话主要想告诉我们：",
       "options": [
        {
         "zh": "要一直努力"
        },
        {
         "zh": "要敢想敢做"
        },
        {
         "zh": "别害怕变化"
        }
       ],
       "answer": "A",
       "vn": "Trung Quốc có câu \"không sợ chậm, chỉ sợ đứng\". Nghĩa là không sợ đi chậm, chỉ sợ đứng im không đi. Đi chậm đến mấy, cứ từng bước đi tiếp thì cũng đến được nơi mình muốn. ★ Đoạn văn chủ yếu muốn nói: A phải luôn cố gắng · B dám nghĩ dám làm · C đừng sợ thay đổi."
      },
      {
       "n": 64,
       "zh": "如果别人告诉你有件衣服很好看，你可能不会相信，但如果是你自己看到的，那就不一样了，因为和耳朵比，人们更愿意相信自己的眼睛。",
       "star": "根据这段话，人们更愿意相信：",
       "options": [
        {
         "zh": "老师讲的"
        },
        {
         "zh": "老人说的"
        },
        {
         "zh": "自己看到的"
        }
       ],
       "answer": "C",
       "vn": "Nếu người khác nói với bạn có bộ quần áo rất đẹp, có thể bạn không tin, nhưng nếu tự bạn nhìn thấy thì khác, vì so với tai, người ta tin vào mắt mình hơn. ★ Theo đoạn văn, người ta tin hơn vào: A lời thầy giảng · B lời người già nói · C điều mình tự thấy."
      },
      {
       "n": 65,
       "zh": "我哥哥是出租车司机，这么多年来，他的车几乎到过这个城市的每个地方，所以他对这个城市非常了解。",
       "star": "他哥哥：",
       "options": [
        {
         "zh": "要离开那儿"
        },
        {
         "zh": "总是骑车上班"
        },
        {
         "zh": "很了解这个城市"
        }
       ],
       "answer": "C",
       "vn": "Anh trai tôi là tài xế taxi, bao năm nay xe của anh gần như đã đến mọi nơi trong thành phố này, nên anh rất hiểu thành phố này. ★ Anh trai anh ấy: A sắp rời khỏi nơi đó · B luôn đạp xe đi làm · C rất hiểu thành phố này."
      },
      {
       "n": 66,
       "zh": "以前，这个图书馆的右边都是些又矮又旧的房子，没想到现在变成了一个大花园，有花有草，漂亮极了。",
       "star": "过去，图书馆的右边是：",
       "options": [
        {
         "zh": "花园"
        },
        {
         "zh": "老房子"
        },
        {
         "zh": "水果店"
        }
       ],
       "answer": "B",
       "vn": "Trước đây, bên phải thư viện này toàn là những ngôi nhà vừa thấp vừa cũ, không ngờ bây giờ đã thành một vườn hoa lớn, có hoa có cỏ, đẹp vô cùng. ★ Trước đây, bên phải thư viện là: A vườn hoa · B nhà cũ · C cửa hàng hoa quả."
      },
      {
       "n": 67,
       "zh": "“张”是我的姓，“雪”才是我的名字。中国人习惯把姓放在前面，把名字放在后面，这跟你们国家不一样。",
       "star": "中国人的名字：",
       "options": [
        {
         "zh": "很简单"
        },
        {
         "zh": "一般很长"
        },
        {
         "zh": "姓在最前面"
        }
       ],
       "answer": "C",
       "vn": "\"Trương\" là họ của tôi, \"Tuyết\" mới là tên tôi. Người Trung Quốc quen đặt họ ở trước, tên ở sau, điều này khác với nước các bạn. ★ Tên của người Trung Quốc: A rất đơn giản · B thường rất dài · C họ đứng đầu tiên."
      },
      {
       "n": 68,
       "zh": "经过这件事情，我们两个的关系变得比以前更好了，现在我们经常下班后一起吃饭、看电影。",
       "star": "他们两个：",
       "options": [
        {
         "zh": "很少见面"
        },
        {
         "zh": "关系更好了"
        },
        {
         "zh": "结婚很久了"
        }
       ],
       "answer": "B",
       "vn": "Trải qua chuyện này, quan hệ của hai chúng tôi trở nên tốt hơn trước, bây giờ chúng tôi thường cùng đi ăn, xem phim sau giờ làm. ★ Hai người họ: A rất ít gặp nhau · B quan hệ tốt hơn · C kết hôn lâu rồi."
      },
      {
       "n": 69,
       "zh": "有些女孩儿认为越瘦越好看，为了能变瘦，有时候饭也不吃，这样做对身体很不好。其实，健康才是最重要的。",
       "star": "这段话告诉我们：",
       "options": [
        {
         "zh": "不要吃得太饱"
        },
        {
         "zh": "健康比漂亮重要"
        },
        {
         "zh": "不要为小事生气"
        }
       ],
       "answer": "B",
       "vn": "Có những cô gái cho rằng càng gầy càng đẹp, để gầy đi có lúc không ăn cơm, làm vậy rất có hại cho sức khỏe. Thật ra, sức khỏe mới là quan trọng nhất. ★ Đoạn văn cho chúng ta biết: A đừng ăn quá no · B sức khỏe quan trọng hơn xinh đẹp · C đừng giận vì chuyện nhỏ."
      },
      {
       "n": 70,
       "zh": "我们常说做决定前一定要认真想想，但有时你会发现机会不等人，所以想清楚后就必须马上去做，不要以为机会会一直在那儿等着你。",
       "star": "根据这段话，我们应该：",
       "options": [
        {
         "zh": "关心别人"
        },
        {
         "zh": "认识更多朋友"
        },
        {
         "zh": "想好了就去做"
        }
       ],
       "answer": "C",
       "vn": "Chúng ta thường nói trước khi quyết định phải suy nghĩ kỹ, nhưng có lúc bạn sẽ thấy cơ hội không đợi người, nên nghĩ rõ rồi thì phải làm ngay, đừng tưởng cơ hội sẽ mãi đứng đó đợi bạn. ★ Theo đoạn văn, chúng ta nên: A quan tâm người khác · B quen thêm nhiều bạn · C nghĩ kỹ rồi thì làm."
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
        "被我",
        "吃了",
        "蛋糕"
       ],
       "answer": "蛋糕被我吃了。",
       "vn": "Bánh ga-tô bị tôi ăn mất rồi."
      },
      {
       "n": 72,
       "words": [
        "爱干净的",
        "猫是",
        "一种",
        "动物"
       ],
       "answer": "猫是一种爱干净的动物。",
       "vn": "Mèo là loài động vật thích sạch sẽ."
      },
      {
       "n": 73,
       "words": [
        "那个",
        "两万人",
        "能坐",
        "体育馆"
       ],
       "answer": "那个体育馆能坐两万人。",
       "vn": "Nhà thi đấu đó chứa được hai vạn người."
      },
      {
       "n": 74,
       "words": [
        "树",
        "街道两边的",
        "真高",
        "长得"
       ],
       "answer": "街道两边的树长得真高。",
       "vn": "Cây hai bên đường mọc cao thật."
      },
      {
       "n": 75,
       "words": [
        "词",
        "请用",
        "黑板上的",
        "一个句子",
        "写"
       ],
       "answer": "请用黑板上的词写一个句子。",
       "vn": "Hãy dùng từ trên bảng đen viết một câu."
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
       "pre": "你了解中国的茶",
       "py": "wén",
       "post": "化吗？",
       "answer": "文",
       "vn": "Bạn có hiểu văn hóa (文化) trà của Trung Quốc không?"
      },
      {
       "n": 77,
       "pre": "明天",
       "py": "gōng",
       "post": "司要举行一个重要的会议。",
       "answer": "公",
       "vn": "Ngày mai công ty (公司) sẽ tổ chức một cuộc họp quan trọng."
      },
      {
       "n": 78,
       "pre": "他先对大家的",
       "py": "dào",
       "post": "来表示欢迎。",
       "answer": "到",
       "vn": "Đầu tiên ông ấy bày tỏ sự hoan nghênh mọi người đã đến (到来)."
      },
      {
       "n": 79,
       "pre": "",
       "py": "Xué",
       "post": "校旁边有条河，河里有很多鱼。",
       "answer": "学",
       "vn": "Bên cạnh trường học (学校) có một con sông, trong sông có rất nhiều cá."
      },
      {
       "n": 80,
       "pre": "我打算去超市买点儿苹果",
       "py": "hé",
       "post": "西瓜，一起去吧？",
       "answer": "和",
       "vn": "Tôi định đi siêu thị mua ít táo và (和) dưa hấu, đi cùng không?"
      }
     ]
    }
   ]
  }
 ]
};
