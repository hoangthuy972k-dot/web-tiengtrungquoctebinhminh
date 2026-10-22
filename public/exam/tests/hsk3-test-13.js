// Đề thi thử HSK 3 – Test 13 (đề thật H31332).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-13",
 "level": "HSK 3",
 "title": "HSK 3 - Test 13",
 "code": "H31332",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-13/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-13.mp3",
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
          100.9,
          132
         ]
        },
        {
         "n": 2,
         "answer": "A",
         "audio": [
          137.5,
          159.2
         ]
        },
        {
         "n": 3,
         "answer": "C",
         "audio": [
          164.9,
          195.8
         ]
        },
        {
         "n": 4,
         "answer": "E",
         "audio": [
          201.3,
          226.3
         ]
        },
        {
         "n": 5,
         "answer": "B",
         "audio": [
          231.9,
          254.4
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
         "answer": "A",
         "audio": [
          266.3,
          292.3
         ]
        },
        {
         "n": 7,
         "answer": "E",
         "audio": [
          297.9,
          322.9
         ]
        },
        {
         "n": 8,
         "answer": "B",
         "audio": [
          328.5,
          351.4
         ]
        },
        {
         "n": 9,
         "answer": "D",
         "audio": [
          356.9,
          384.2
         ]
        },
        {
         "n": 10,
         "answer": "C",
         "audio": [
          389.8,
          412
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
       "star": "他是司机。",
       "answer": true,
       "audio": [
        508.1,
        538.1
       ],
       "vn": "Câu ★: Anh ấy là tài xế."
      },
      {
       "n": 12,
       "star": "小天在玩儿游戏。",
       "answer": true,
       "audio": [
        545.8,
        576.7
       ],
       "vn": "Câu ★: Tiểu Thiên đang chơi game."
      },
      {
       "n": 13,
       "star": "出门时下雨了。",
       "answer": false,
       "audio": [
        584.4,
        620.3
       ],
       "vn": "Câu ★: Lúc ra khỏi nhà trời mưa."
      },
      {
       "n": 14,
       "star": "他不认识那种鸟。",
       "answer": true,
       "audio": [
        628,
        664.1
       ],
       "vn": "Câu ★: Anh ấy không biết loài chim đó."
      },
      {
       "n": 15,
       "star": "他想坐右边。",
       "answer": false,
       "audio": [
        671.8,
        703.1
       ],
       "vn": "Câu ★: Anh ấy muốn ngồi bên phải."
      },
      {
       "n": 16,
       "star": "小王的女儿是短发。",
       "answer": false,
       "audio": [
        710.7,
        748.9
       ],
       "vn": "Câu ★: Con gái Tiểu Vương để tóc ngắn."
      },
      {
       "n": 17,
       "star": "那家店不能刷信用卡。",
       "answer": false,
       "audio": [
        756.5,
        799.4
       ],
       "vn": "Câu ★: Cửa hàng đó không quẹt thẻ tín dụng được."
      },
      {
       "n": 18,
       "star": "人很难做到让每个人都满意。",
       "answer": true,
       "audio": [
        807.1,
        844.3
       ],
       "vn": "Câu ★: Rất khó làm cho tất cả mọi người đều hài lòng."
      },
      {
       "n": 19,
       "star": "他以前走路上班。",
       "answer": false,
       "audio": [
        851.9,
        894.5
       ],
       "vn": "Câu ★: Trước đây anh ấy đi bộ đi làm."
      },
      {
       "n": 20,
       "star": "很多留学生对中国文化感兴趣。",
       "answer": true,
       "audio": [
        902.2,
        955.3
       ],
       "vn": "Câu ★: Nhiều lưu học sinh có hứng thú với văn hóa Trung Quốc."
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
         "zh": "很瘦"
        },
        {
         "zh": "是医生"
        },
        {
         "zh": "在买皮鞋"
        }
       ],
       "answer": "B",
       "audio": [
        1014.9,
        1054.3
       ],
       "vn": "Nghĩa các lựa chọn: A rất gầy · B là bác sĩ · C đang mua giày da"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "想换地方"
        },
        {
         "zh": "这儿有人"
        },
        {
         "zh": "少了个椅子"
        }
       ],
       "answer": "B",
       "audio": [
        1065.6,
        1096.9
       ],
       "vn": "Nghĩa các lựa chọn: A muốn đổi chỗ · B chỗ này có người · C thiếu một cái ghế"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "好吃"
        },
        {
         "zh": "不太甜"
        },
        {
         "zh": "不新鲜"
        }
       ],
       "answer": "B",
       "audio": [
        1108.3,
        1140.7
       ],
       "vn": "Nghĩa các lựa chọn: A ngon · B không ngọt lắm · C không tươi"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "床下"
        },
        {
         "zh": "书桌下"
        },
        {
         "zh": "电视后"
        }
       ],
       "answer": "A",
       "audio": [
        1152,
        1192.9
       ],
       "vn": "Nghĩa các lựa chọn: A dưới gầm giường · B dưới bàn học · C sau ti vi"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "电梯坏了"
        },
        {
         "zh": "楼梯人少"
        },
        {
         "zh": "想锻炼身体"
        }
       ],
       "answer": "C",
       "audio": [
        1204.2,
        1238.6
       ],
       "vn": "Nghĩa các lựa chọn: A thang máy hỏng rồi · B cầu thang ít người · C muốn rèn luyện sức khỏe"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "奶奶"
        },
        {
         "zh": "爷爷"
        },
        {
         "zh": "叔叔"
        }
       ],
       "answer": "B",
       "audio": [
        1249.9,
        1279.3
       ],
       "vn": "Nghĩa các lựa chọn: A bà · B ông · C chú"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "长得高"
        },
        {
         "zh": "比哥哥矮"
        },
        {
         "zh": "爱踢足球"
        }
       ],
       "answer": "A",
       "audio": [
        1290.6,
        1328.1
       ],
       "vn": "Nghĩa các lựa chọn: A cao · B thấp hơn anh trai · C thích đá bóng"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "生病了"
        },
        {
         "zh": "猫不见了"
        },
        {
         "zh": "要参加比赛"
        }
       ],
       "answer": "A",
       "audio": [
        1339.4,
        1370.3
       ],
       "vn": "Nghĩa các lựa chọn: A bị ốm · B con mèo bị mất · C phải tham gia thi đấu"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "买票"
        },
        {
         "zh": "打扫街道"
        },
        {
         "zh": "搬行李箱"
        }
       ],
       "answer": "C",
       "audio": [
        1381.6,
        1415.6
       ],
       "vn": "Nghĩa các lựa chọn: A mua vé · B quét dọn đường phố · C khiêng vali"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "向左走"
        },
        {
         "zh": "向西走"
        },
        {
         "zh": "向东走"
        }
       ],
       "answer": "C",
       "audio": [
        1427,
        1465.7
       ],
       "vn": "Nghĩa các lựa chọn: A đi sang trái · B đi về phía tây · C đi về phía đông"
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
         "zh": "热水"
        },
        {
         "zh": "咖啡"
        },
        {
         "zh": "啤酒"
        }
       ],
       "answer": "B",
       "audio": [
        1545.1,
        1594.5
       ],
       "vn": "Nghĩa các lựa chọn: A nước nóng · B cà phê · C bia"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "公司有事"
        },
        {
         "zh": "记错时间了"
        },
        {
         "zh": "去买羊肉了"
        }
       ],
       "answer": "A",
       "audio": [
        1605.8,
        1655.7
       ],
       "vn": "Nghĩa các lựa chọn: A công ty có việc · B nhớ nhầm thời gian · C đi mua thịt dê"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "教室"
        },
        {
         "zh": "超市"
        },
        {
         "zh": "饭店"
        }
       ],
       "answer": "B",
       "audio": [
        1667,
        1715.2
       ],
       "vn": "Nghĩa các lựa chọn: A lớp học · B siêu thị · C nhà hàng"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "很高兴"
        },
        {
         "zh": "没睡好"
        },
        {
         "zh": "比较累"
        }
       ],
       "answer": "C",
       "audio": [
        1726.6,
        1763.5
       ],
       "vn": "Nghĩa các lựa chọn: A rất vui · B ngủ không ngon · C khá mệt"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "打不开门"
        },
        {
         "zh": "空调有问题"
        },
        {
         "zh": "房卡不见了"
        }
       ],
       "answer": "A",
       "audio": [
        1774.9,
        1823.3
       ],
       "vn": "Nghĩa các lựa chọn: A không mở được cửa · B điều hòa có vấn đề · C mất thẻ phòng"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "骑马"
        },
        {
         "zh": "爬山"
        },
        {
         "zh": "游泳"
        }
       ],
       "answer": "B",
       "audio": [
        1834.7,
        1877.8
       ],
       "vn": "Nghĩa các lựa chọn: A cưỡi ngựa · B leo núi · C bơi"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "要求高"
        },
        {
         "zh": "课讲得好"
        },
        {
         "zh": "画画儿不错"
        }
       ],
       "answer": "C",
       "audio": [
        1889.2,
        1939.5
       ],
       "vn": "Nghĩa các lựa chọn: A yêu cầu cao · B giảng bài hay · C vẽ đẹp"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "非常饿"
        },
        {
         "zh": "去旅游了"
        },
        {
         "zh": "要出国了"
        }
       ],
       "answer": "C",
       "audio": [
        1950.9,
        2000.5
       ],
       "vn": "Nghĩa các lựa chọn: A vô cùng đói · B đi du lịch rồi · C sắp ra nước ngoài"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "16：30"
        },
        {
         "zh": "18：00"
        },
        {
         "zh": "18：30"
        }
       ],
       "answer": "B",
       "audio": [
        2011.8,
        2060.6
       ],
       "vn": "Nghĩa các lựa chọn: A 16:30 · B 18:00 · C 18:30"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "很好用"
        },
        {
         "zh": "太旧了"
        },
        {
         "zh": "很便宜"
        }
       ],
       "answer": "A",
       "audio": [
        2072.1,
        2131.6
       ],
       "vn": "Nghĩa các lựa chọn: A rất dễ dùng · B cũ quá · C rất rẻ"
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
         "zh": "现在已经是晚上了吗？外面怎么那么黑？",
         "vn": "Bây giờ đã là buổi tối rồi à? Sao bên ngoài tối thế?"
        },
        {
         "k": "B",
         "zh": "我下班会经过那里，要不要我明天帮你借回来？",
         "vn": "Tan làm tôi sẽ đi qua đó, có cần mai tôi mượn về giúp bạn không?"
        },
        {
         "k": "C",
         "zh": "大城市里一般机会比较多。",
         "vn": "Ở thành phố lớn thường có nhiều cơ hội hơn."
        },
        {
         "k": "D",
         "zh": "不用了，不冷，我一会儿就回来。",
         "vn": "Không cần đâu, không lạnh, tôi đi một lát là về."
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "妈妈，我那件蓝色的衬衫呢？",
         "vn": "Mẹ ơi, cái áo sơ mi xanh lam của con đâu?"
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "给你帽子，外面风刮得很大，别感冒了。",
         "vn": "Mũ của bạn đây, bên ngoài gió to lắm, đừng để bị cảm.",
         "answer": "D"
        },
        {
         "n": 42,
         "zh": "我在网上查了一下，只有国家图书馆有这本词典。",
         "vn": "Tôi tra trên mạng rồi, chỉ Thư viện Quốc gia có cuốn từ điển này.",
         "answer": "B"
        },
        {
         "n": 43,
         "zh": "所以很多年轻人选择离开家去那儿工作。",
         "vn": "Vì vậy nhiều người trẻ chọn rời nhà đến đó làm việc.",
         "answer": "C"
        },
        {
         "n": 44,
         "zh": "我给你洗了，你先穿别的衣服吧。",
         "vn": "Mẹ giặt rồi, con mặc áo khác trước đi.",
         "answer": "F"
        },
        {
         "n": 45,
         "zh": "还不到三点呢，是天阴了。",
         "vn": "Còn chưa đến ba giờ, là trời râm thôi.",
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
         "zh": "春天到了，学校里的花儿都开了，草也绿了。",
         "vn": "Mùa xuân đến rồi, hoa trong trường đều nở, cỏ cũng xanh rồi."
        },
        {
         "k": "B",
         "zh": "你不是明天早上8点的火车吗？怎么还不休息？",
         "vn": "Chẳng phải mai bạn đi chuyến tàu 8 giờ sáng à? Sao còn chưa nghỉ?"
        },
        {
         "k": "C",
         "zh": "你们两个站近一点儿，笑一笑，对，就是这样。",
         "vn": "Hai bạn đứng gần nhau hơn chút, cười lên, đúng rồi, cứ thế."
        },
        {
         "k": "D",
         "zh": "小时候，我家就在黄河边上。",
         "vn": "Hồi nhỏ, nhà tôi ở ngay bên bờ sông Hoàng Hà."
        },
        {
         "k": "E",
         "zh": "什么水果又像月亮又像船？",
         "vn": "Hoa quả gì vừa giống mặt trăng vừa giống con thuyền?"
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "香蕉，对不对？",
         "vn": "Quả chuối, đúng không?",
         "answer": "E"
        },
        {
         "n": 47,
         "zh": "我这就去洗脸刷牙，马上睡。",
         "vn": "Con đi rửa mặt đánh răng ngay đây, đi ngủ luôn.",
         "answer": "B"
        },
        {
         "n": 48,
         "zh": "把相机给我，我看看照得怎么样。",
         "vn": "Đưa máy ảnh cho tôi, để tôi xem chụp thế nào.",
         "answer": "C"
        },
        {
         "n": 49,
         "zh": "我最喜欢这个季节了。",
         "vn": "Tôi thích mùa này nhất.",
         "answer": "A"
        },
        {
         "n": 50,
         "zh": "后来因为我妈换工作，才搬到这里。",
         "vn": "Sau này vì mẹ tôi đổi việc nên mới chuyển đến đây.",
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
         "zh": "其实"
        },
        {
         "k": "B",
         "zh": "奇怪"
        },
        {
         "k": "C",
         "zh": "必须"
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
         "zh": "办法"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "老师，这次考试（　）用铅笔答题吗？",
         "vn": "Thưa thầy, bài thi lần này (bắt buộc) phải dùng bút chì làm bài ạ?",
         "answer": "C"
        },
        {
         "n": 52,
         "zh": "鱼（　）是有耳朵的，只是很多人都没注意到。",
         "vn": "Cá (thật ra) là có tai, chỉ là nhiều người không để ý.",
         "answer": "A"
        },
        {
         "n": 53,
         "zh": "再想想，看能不能找到更简单的解决（　）。",
         "vn": "Nghĩ thêm đi, xem có tìm được (cách) giải quyết đơn giản hơn không.",
         "answer": "F"
        },
        {
         "n": 54,
         "zh": "这件事情太（　）了，让人很难相信。",
         "vn": "Chuyện này (kỳ lạ) quá, khiến người ta khó tin.",
         "answer": "B"
        },
        {
         "n": 55,
         "zh": "13号桌少了一双（　）和一个碗，你快送过去。",
         "vn": "Bàn số 13 thiếu một đôi (đũa) và một cái bát, bạn mang qua nhanh đi.",
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
         "zh": "马上"
        },
        {
         "k": "B",
         "zh": "疼"
        },
        {
         "k": "C",
         "zh": "一共"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "中文"
        },
        {
         "k": "F",
         "zh": "瓶"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：张阿姨请我们去她家过节，带什么礼物好呢？\nB：带（　）红酒或者买些水果都可以。",
         "vn": "A: Cô Trương mời chúng ta đến nhà cô ấy đón lễ, mang quà gì thì hay? / B: Mang (chai) rượu vang hoặc mua ít hoa quả đều được.",
         "answer": "F"
        },
        {
         "n": 57,
         "zh": "A：你试着慢慢地站起来，怎么样？\nB：脚还是有点儿（　）。",
         "vn": "A: Bạn thử từ từ đứng dậy xem, thế nào? / B: Chân vẫn hơi (đau).",
         "answer": "B"
        },
        {
         "n": 58,
         "zh": "A：经理，李先生来了，正在会议室等您。\nB：好，我（　）过去。",
         "vn": "A: Giám đốc, ông Lý đến rồi, đang đợi anh ở phòng họp. / B: Được, tôi qua (ngay).",
         "answer": "A"
        },
        {
         "n": 59,
         "zh": "A：您好，（　）是99元7角5分。\nB：这是100，不用找了。",
         "vn": "A: Chào chị, (tổng cộng) là 99 tệ 7 hào 5 xu. / B: Đây là 100, không cần trả lại.",
         "answer": "C"
        },
        {
         "n": 60,
         "zh": "A：你的汉语水平怎么提高得这么快？\nB：我每天都看（　）报纸，而且还会听半个小时的新闻。",
         "vn": "A: Sao trình độ tiếng Hán của bạn tiến bộ nhanh thế? / B: Ngày nào tôi cũng đọc báo (tiếng Trung), còn nghe nửa tiếng thời sự nữa.",
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
       "zh": "现在越来越多的人喜欢拿出手机看时间，我还是觉得用手表更方便。",
       "star": "根据这段话，他更愿意：",
       "options": [
        {
         "zh": "打电话"
        },
        {
         "zh": "用手机上网"
        },
        {
         "zh": "用手表看时间"
        }
       ],
       "answer": "C",
       "vn": "Bây giờ ngày càng nhiều người thích lấy điện thoại ra xem giờ, tôi vẫn thấy dùng đồng hồ đeo tay tiện hơn. ★ Theo đoạn văn, anh ấy thích hơn: A gọi điện · B dùng điện thoại lên mạng · C xem giờ bằng đồng hồ đeo tay."
      },
      {
       "n": 62,
       "zh": "老人们常说：“饭要一口一口地吃，路要一步一步地走。”做事也是这样，不能太着急，要慢慢来。",
       "star": "这段话主要想告诉我们：",
       "options": [
        {
         "zh": "不能吃太饱"
        },
        {
         "zh": "要多关心老人"
        },
        {
         "zh": "做事不能着急"
        }
       ],
       "answer": "C",
       "vn": "Người già hay nói: \"Cơm phải ăn từng miếng, đường phải đi từng bước.\" Làm việc cũng vậy, không được quá vội, phải từ từ. ★ Đoạn văn chủ yếu muốn nói: A không được ăn quá no · B phải quan tâm người già nhiều hơn · C làm việc không được vội vàng."
      },
      {
       "n": 63,
       "zh": "王校长虽然70多岁了，但看起来一点儿都不像，很多人都觉得他只有50来岁。他告诉我们，要想年轻，有两点很重要：第一要少生气，第二要多锻炼，经常跑跑步、打打球。",
       "star": "王校长认为，想年轻就应该：",
       "options": [
        {
         "zh": "多读书"
        },
        {
         "zh": "少生气"
        },
        {
         "zh": "常去检查身体"
        }
       ],
       "answer": "B",
       "vn": "Hiệu trưởng Vương tuy đã hơn 70 tuổi nhưng trông không giống chút nào, nhiều người tưởng ông chỉ khoảng 50. Ông nói với chúng tôi muốn trẻ thì có hai điều quan trọng: một là ít tức giận, hai là tập thể dục nhiều, thường xuyên chạy bộ, chơi bóng. ★ Hiệu trưởng Vương cho rằng muốn trẻ thì nên: A đọc sách nhiều · B ít tức giận · C thường đi kiểm tra sức khỏe."
      },
      {
       "n": 64,
       "zh": "学过的东西，如果不经常看，很容易就会忘记。所以，要想把学过的东西记住，每过一段时间就应该复习一下。",
       "star": "为了记住学过的东西，应该：",
       "options": [
        {
         "zh": "经常复习"
        },
        {
         "zh": "不懂就问"
        },
        {
         "zh": "认真完成作业"
        }
       ],
       "answer": "A",
       "vn": "Những điều đã học nếu không thường xuyên xem lại thì rất dễ quên. Vì vậy muốn nhớ những điều đã học, cứ một thời gian lại nên ôn tập. ★ Để nhớ những điều đã học, nên: A thường xuyên ôn tập · B không hiểu thì hỏi · C làm bài tập nghiêm túc."
      },
      {
       "n": 65,
       "zh": "早上我在车站等了40多分钟，也没等到我要坐的那辆公共汽车。我担心再等下去会迟到，就坐出租车来公司了。",
       "star": "他今天早上：",
       "options": [
        {
         "zh": "迟到了"
        },
        {
         "zh": "起床晚了"
        },
        {
         "zh": "打车上班的"
        }
       ],
       "answer": "C",
       "vn": "Sáng nay tôi đợi ở bến hơn 40 phút mà vẫn không thấy chuyến xe buýt tôi cần đi. Tôi sợ đợi nữa sẽ muộn nên đi taxi đến công ty. ★ Sáng nay anh ấy: A đến muộn · B dậy muộn · C đi taxi đi làm."
      },
      {
       "n": 66,
       "zh": "小李，你的鼻子已经好多了，我再给你开点儿药，一周后你再来检查一下。",
       "star": "小李：",
       "options": [
        {
         "zh": "腿好多了"
        },
        {
         "zh": "还要吃药"
        },
        {
         "zh": "不同意吃米饭"
        }
       ],
       "answer": "B",
       "vn": "Tiểu Lý, mũi của cậu đã đỡ nhiều rồi, tôi kê thêm ít thuốc, một tuần sau cậu đến kiểm tra lại. ★ Tiểu Lý: A chân đỡ nhiều rồi · B vẫn phải uống thuốc · C không đồng ý ăn cơm."
      },
      {
       "n": 67,
       "zh": "这儿的夏天天气变化特别快，有时候上午还是晴天，中午就突然下起雨来，所以我出门前总会在包里放一把伞。",
       "star": "他出门时：",
       "options": [
        {
         "zh": "会带伞"
        },
        {
         "zh": "没带钱包"
        },
        {
         "zh": "很不快乐"
        }
       ],
       "answer": "A",
       "vn": "Mùa hè ở đây thời tiết thay đổi rất nhanh, có khi buổi sáng còn nắng, trưa đã bỗng mưa, nên trước khi ra ngoài tôi luôn để một cái ô trong túi. ★ Khi ra ngoài anh ấy: A sẽ mang ô · B không mang ví · C rất không vui."
      },
      {
       "n": 68,
       "zh": "爸，我刚才在楼下遇见您以前的学生王雨了，他比过去胖了些，一开始我都没认出来。他也搬到这附近住了，还说晚上过来看您。",
       "star": "王雨：",
       "options": [
        {
         "zh": "变胖了"
        },
        {
         "zh": "最近很忙"
        },
        {
         "zh": "是北方人"
        }
       ],
       "answer": "A",
       "vn": "Bố ơi, lúc nãy con gặp học trò cũ của bố là Vương Vũ ở dưới nhà, cậu ấy béo hơn trước, lúc đầu con còn không nhận ra. Cậu ấy cũng chuyển đến gần đây ở, còn nói tối sẽ qua thăm bố. ★ Vương Vũ: A béo lên · B dạo này rất bận · C là người miền Bắc."
      },
      {
       "n": 69,
       "zh": "这是我女儿，今年秋天就要上一年级了。她不但爱唱歌，也爱跳舞，在家没事的时候，她总是在我和妻子面前又唱又跳，一分钟也安静不下来。",
       "star": "他女儿：",
       "options": [
        {
         "zh": "很聪明"
        },
        {
         "zh": "爱干净"
        },
        {
         "zh": "喜欢唱歌"
        }
       ],
       "answer": "C",
       "vn": "Đây là con gái tôi, mùa thu năm nay sẽ vào lớp một. Cháu không những thích hát mà còn thích nhảy, ở nhà lúc rảnh cháu luôn vừa hát vừa nhảy trước mặt tôi và vợ tôi, không chịu yên một phút. ★ Con gái anh ấy: A rất thông minh · B thích sạch sẽ · C thích hát."
      },
      {
       "n": 70,
       "zh": "过去的几年，哥哥一直很努力地工作，现在已经是他们公司的经理了。他告诉我，要想做出成绩，除了认真工作，没有其他选择。",
       "star": "哥哥认为怎样才能做出成绩？",
       "options": [
        {
         "zh": "努力工作"
        },
        {
         "zh": "相信自己"
        },
        {
         "zh": "多和同事聊天儿"
        }
       ],
       "answer": "A",
       "vn": "Mấy năm qua anh trai luôn làm việc rất chăm chỉ, bây giờ đã là giám đốc công ty. Anh nói với tôi, muốn có thành tích thì ngoài làm việc nghiêm túc không có lựa chọn nào khác. ★ Anh trai cho rằng làm thế nào mới có thành tích? A chăm chỉ làm việc · B tin vào bản thân · C nói chuyện nhiều với đồng nghiệp."
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
        "害怕",
        "弟弟",
        "极了"
       ],
       "answer": "弟弟害怕极了。",
       "vn": "Em trai sợ vô cùng."
      },
      {
       "n": 72,
       "words": [
        "大熊猫",
        "这",
        "只",
        "可爱",
        "很"
       ],
       "answer": "这只大熊猫很可爱。",
       "vn": "Con gấu trúc lớn này rất đáng yêu."
      },
      {
       "n": 73,
       "words": [
        "历史是",
        "忘记的",
        "被",
        "不应该"
       ],
       "answer": "历史是不应该被忘记的。",
       "vn": "Lịch sử là thứ không nên bị lãng quên."
      },
      {
       "n": 74,
       "words": [
        "比去年",
        "我",
        "10公斤",
        "瘦了"
       ],
       "answer": "我比去年瘦了10公斤。",
       "vn": "Tôi gầy hơn năm ngoái 10 cân."
      },
      {
       "n": 75,
       "words": [
        "把",
        "房子",
        "她最后",
        "卖了",
        "决定"
       ],
       "answer": "她最后决定把房子卖了。",
       "vn": "Cuối cùng cô ấy quyết định bán căn nhà."
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
       "pre": "",
       "py": "Tài",
       "post": "阳出来了，新的一天开始了。",
       "answer": "太",
       "vn": "Mặt trời (太阳) mọc rồi, một ngày mới bắt đầu."
      },
      {
       "n": 77,
       "pre": "电影院在8层，",
       "py": "nín",
       "post": "可以坐旁边那个电梯。",
       "answer": "您",
       "vn": "Rạp chiếu phim ở tầng 8, ông/bà (您) có thể đi thang máy bên cạnh."
      },
      {
       "n": 78,
       "pre": "冰箱",
       "py": "li",
       "post": "还有饮料吗？我有点儿渴了。",
       "answer": "里",
       "vn": "Trong (里) tủ lạnh còn nước uống không? Tôi hơi khát."
      },
      {
       "n": 79,
       "pre": "我和妹妹一样，都有睡觉前",
       "py": "tīng",
       "post": "音乐的习惯。",
       "answer": "听",
       "vn": "Tôi cũng giống em gái, đều có thói quen nghe (听) nhạc trước khi ngủ."
      },
      {
       "n": 80,
       "pre": "下一个",
       "py": "jié",
       "post": "目就是我们班的了，大家准备下。",
       "answer": "节",
       "vn": "Tiết mục (节目) tiếp theo là của lớp mình, mọi người chuẩn bị nhé."
      }
     ]
    }
   ]
  }
 ]
};
