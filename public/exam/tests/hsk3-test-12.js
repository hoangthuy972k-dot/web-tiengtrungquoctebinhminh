// Đề thi thử HSK 3 – Test 12 (đề thật H31330).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-12",
 "level": "HSK 3",
 "title": "HSK 3 - Test 12",
 "code": "H31330",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-12/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-12.mp3",
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
         "answer": "B",
         "audio": [
          101.4,
          124.9
         ]
        },
        {
         "n": 2,
         "answer": "F",
         "audio": [
          130.2,
          152.8
         ]
        },
        {
         "n": 3,
         "answer": "A",
         "audio": [
          158.2,
          181.6
         ]
        },
        {
         "n": 4,
         "answer": "C",
         "audio": [
          186.9,
          210.4
         ]
        },
        {
         "n": 5,
         "answer": "E",
         "audio": [
          215.6,
          237.4
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
          248.7,
          280.8
         ]
        },
        {
         "n": 7,
         "answer": "D",
         "audio": [
          286.1,
          312.4
         ]
        },
        {
         "n": 8,
         "answer": "A",
         "audio": [
          317.6,
          346.9
         ]
        },
        {
         "n": 9,
         "answer": "C",
         "audio": [
          352.2,
          378.7
         ]
        },
        {
         "n": 10,
         "answer": "E",
         "audio": [
          384,
          414.4
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
       "star": "他打算去图书馆学习。",
       "answer": true,
       "audio": [
        511.4,
        542.7
       ],
       "vn": "Câu ★: Anh ấy định đến thư viện học."
      },
      {
       "n": 12,
       "star": "他要准备考试。",
       "answer": true,
       "audio": [
        550,
        580.1
       ],
       "vn": "Câu ★: Anh ấy phải chuẩn bị thi."
      },
      {
       "n": 13,
       "star": "那条裤子太长了。",
       "answer": false,
       "audio": [
        587.5,
        620.4
       ],
       "vn": "Câu ★: Chiếc quần đó dài quá."
      },
      {
       "n": 14,
       "star": "他希望小雪声音大点儿。",
       "answer": true,
       "audio": [
        627.6,
        660.9
       ],
       "vn": "Câu ★: Anh ấy mong Tiểu Tuyết nói to hơn một chút."
      },
      {
       "n": 15,
       "star": "他请小王去他家玩儿。",
       "answer": true,
       "audio": [
        668.1,
        702.5
       ],
       "vn": "Câu ★: Anh ấy mời Tiểu Vương đến nhà mình chơi."
      },
      {
       "n": 16,
       "star": "他觉得电影很一般。",
       "answer": false,
       "audio": [
        709.9,
        755.6
       ],
       "vn": "Câu ★: Anh ấy thấy bộ phim bình thường."
      },
      {
       "n": 17,
       "star": "他不想离开那儿。",
       "answer": true,
       "audio": [
        762.9,
        809
       ],
       "vn": "Câu ★: Anh ấy không muốn rời khỏi nơi đó."
      },
      {
       "n": 18,
       "star": "那双鞋很便宜。",
       "answer": false,
       "audio": [
        816.3,
        863.1
       ],
       "vn": "Câu ★: Đôi giày đó rất rẻ."
      },
      {
       "n": 19,
       "star": "小李没接到客人。",
       "answer": false,
       "audio": [
        870.4,
        909.1
       ],
       "vn": "Câu ★: Tiểu Lý không đón được khách."
      },
      {
       "n": 20,
       "star": "他要出国旅游了。",
       "answer": false,
       "audio": [
        916.3,
        952.9
       ],
       "vn": "Câu ★: Anh ấy sắp đi du lịch nước ngoài."
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
         "zh": "爱笑"
        },
        {
         "zh": "迟到了"
        },
        {
         "zh": "在等电梯"
        }
       ],
       "answer": "C",
       "audio": [
        1013,
        1045
       ],
       "vn": "Nghĩa các lựa chọn: A hay cười · B đến muộn · C đang đợi thang máy"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "骑慢点儿"
        },
        {
         "zh": "站着不动"
        },
        {
         "zh": "换辆自行车"
        }
       ],
       "answer": "A",
       "audio": [
        1055.8,
        1083.5
       ],
       "vn": "Nghĩa các lựa chọn: A đạp chậm thôi · B đứng yên không động · C đổi chiếc xe đạp khác"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "生气了"
        },
        {
         "zh": "发烧了"
        },
        {
         "zh": "耳朵不舒服"
        }
       ],
       "answer": "B",
       "audio": [
        1094.3,
        1125.5
       ],
       "vn": "Nghĩa các lựa chọn: A tức giận · B bị sốt · C tai khó chịu"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "茶杯"
        },
        {
         "zh": "季节"
        },
        {
         "zh": "颜色"
        }
       ],
       "answer": "B",
       "audio": [
        1136.2,
        1177.3
       ],
       "vn": "Nghĩa các lựa chọn: A cốc trà · B mùa · C màu sắc"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "很聪明"
        },
        {
         "zh": "嘴很小"
        },
        {
         "zh": "眼睛不大"
        }
       ],
       "answer": "A",
       "audio": [
        1188,
        1232.2
       ],
       "vn": "Nghĩa các lựa chọn: A rất thông minh · B miệng rất nhỏ · C mắt không to"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "坐地铁"
        },
        {
         "zh": "坐出租车"
        },
        {
         "zh": "坐公共汽车"
        }
       ],
       "answer": "C",
       "audio": [
        1242.9,
        1276.1
       ],
       "vn": "Nghĩa các lựa chọn: A đi tàu điện ngầm · B đi taxi · C đi xe buýt"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "想复习"
        },
        {
         "zh": "没来上课"
        },
        {
         "zh": "课上没听懂"
        }
       ],
       "answer": "B",
       "audio": [
        1286.8,
        1329.5
       ],
       "vn": "Nghĩa các lựa chọn: A muốn ôn bài · B không đến lớp · C trên lớp nghe không hiểu"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "菜单"
        },
        {
         "zh": "节目单"
        },
        {
         "zh": "笔记本电脑"
        }
       ],
       "answer": "B",
       "audio": [
        1340.3,
        1369
       ],
       "vn": "Nghĩa các lựa chọn: A thực đơn · B danh sách tiết mục · C máy tính xách tay"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "很热"
        },
        {
         "zh": "非常冷"
        },
        {
         "zh": "刮大风"
        }
       ],
       "answer": "C",
       "audio": [
        1379.7,
        1412.3
       ],
       "vn": "Nghĩa các lựa chọn: A rất nóng · B vô cùng lạnh · C gió to"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "公园"
        },
        {
         "zh": "动物园"
        },
        {
         "zh": "游泳馆"
        }
       ],
       "answer": "B",
       "audio": [
        1423.1,
        1460.8
       ],
       "vn": "Nghĩa các lựa chọn: A công viên · B vườn thú · C bể bơi"
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
         "zh": "照片"
        },
        {
         "zh": "电影票"
        },
        {
         "zh": "一本书"
        }
       ],
       "answer": "A",
       "audio": [
        1540.7,
        1586.5
       ],
       "vn": "Nghĩa các lựa chọn: A ảnh · B vé xem phim · C một cuốn sách"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "银行"
        },
        {
         "zh": "饭店"
        },
        {
         "zh": "商店"
        }
       ],
       "answer": "C",
       "audio": [
        1597.2,
        1637.9
       ],
       "vn": "Nghĩa các lựa chọn: A ngân hàng · B nhà hàng · C cửa hàng"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "不认识路"
        },
        {
         "zh": "要买报纸"
        },
        {
         "zh": "一分钱没花"
        }
       ],
       "answer": "A",
       "audio": [
        1648.6,
        1711.5
       ],
       "vn": "Nghĩa các lựa chọn: A không biết đường · B muốn mua báo · C không tiêu một xu nào"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "牙疼"
        },
        {
         "zh": "脚疼"
        },
        {
         "zh": "忘刷牙了"
        }
       ],
       "answer": "A",
       "audio": [
        1722.1,
        1761.8
       ],
       "vn": "Nghĩa các lựa chọn: A đau răng · B đau chân · C quên đánh răng"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "8：55"
        },
        {
         "zh": "9：05"
        },
        {
         "zh": "10：15"
        }
       ],
       "answer": "C",
       "audio": [
        1772.5,
        1816.8
       ],
       "vn": "Nghĩa các lựa chọn: A 8:55 · B 9:05 · C 10:15"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "没找到地方"
        },
        {
         "zh": "遇见同事了"
        },
        {
         "zh": "和邻居聊天儿了"
        }
       ],
       "answer": "C",
       "audio": [
        1827.6,
        1874.1
       ],
       "vn": "Nghĩa các lựa chọn: A không tìm thấy chỗ · B gặp đồng nghiệp · C nói chuyện với hàng xóm"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "还没起床"
        },
        {
         "zh": "关心别人"
        },
        {
         "zh": "不想锻炼了"
        }
       ],
       "answer": "A",
       "audio": [
        1884.8,
        1937.4
       ],
       "vn": "Nghĩa các lựa chọn: A vẫn chưa dậy · B quan tâm người khác · C không muốn tập thể dục nữa"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "绿色"
        },
        {
         "zh": "白色"
        },
        {
         "zh": "蓝色"
        }
       ],
       "answer": "C",
       "audio": [
        1948.1,
        1997
       ],
       "vn": "Nghĩa các lựa chọn: A xanh lá · B trắng · C xanh lam"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "鱼"
        },
        {
         "zh": "羊肉"
        },
        {
         "zh": "鸡肉"
        }
       ],
       "answer": "B",
       "audio": [
        2007.8,
        2049.2
       ],
       "vn": "Nghĩa các lựa chọn: A cá · B thịt dê · C thịt gà"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "参加比赛"
        },
        {
         "zh": "帮忙搬家"
        },
        {
         "zh": "检查行李箱"
        }
       ],
       "answer": "B",
       "audio": [
        2059.9,
        2099
       ],
       "vn": "Nghĩa các lựa chọn: A tham gia thi đấu · B giúp chuyển nhà · C kiểm tra vali"
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
         "zh": "面条儿快好了，我去拿碗筷，你叫你弟弟下来吧。",
         "vn": "Mì sắp xong rồi, mẹ đi lấy bát đũa, con gọi em xuống đi."
        },
        {
         "k": "B",
         "zh": "雨越下越大了，你带伞了吗？",
         "vn": "Mưa càng lúc càng to, bạn mang ô chưa?"
        },
        {
         "k": "C",
         "zh": "你先上楼，我去旁边超市买个面包。",
         "vn": "Bạn lên nhà trước đi, tôi ra siêu thị bên cạnh mua cái bánh mì."
        },
        {
         "k": "D",
         "zh": "你鼻子上有东西，左边，对，就是那儿。",
         "vn": "Trên mũi bạn có gì kìa, bên trái, đúng rồi, chính chỗ đó."
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "昨天的练习我有几个句子不明白，你给我讲讲。",
         "vn": "Bài luyện tập hôm qua có mấy câu tôi không hiểu, bạn giảng cho tôi với."
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "我跟你一起，家里没鸡蛋了。",
         "vn": "Tôi đi cùng bạn, ở nhà hết trứng rồi.",
         "answer": "C"
        },
        {
         "n": 42,
         "zh": "奶奶，还有多久才能吃饭啊？",
         "vn": "Bà ơi, còn bao lâu nữa mới được ăn cơm ạ?",
         "answer": "A"
        },
        {
         "n": 43,
         "zh": "现在呢？干净了吗？",
         "vn": "Bây giờ thì sao? Sạch chưa?",
         "answer": "D"
        },
        {
         "n": 44,
         "zh": "是用铅笔画出来的这些吗？我看看。",
         "vn": "Những cái này là vẽ bằng bút chì à? Để tôi xem.",
         "answer": "F"
        },
        {
         "n": 45,
         "zh": "没有，我早上出门的时候还是晴天呢。",
         "vn": "Không, sáng tôi ra khỏi nhà trời vẫn còn nắng mà.",
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
         "zh": "每天晚上，叔叔都会在楼下的公园里教我。",
         "vn": "Tối nào chú cũng dạy tôi ở công viên dưới nhà."
        },
        {
         "k": "B",
         "zh": "能用一下你的词典吗？我想查查这个字怎么读。",
         "vn": "Cho tôi dùng từ điển của bạn một chút được không? Tôi muốn tra chữ này đọc thế nào."
        },
        {
         "k": "C",
         "zh": "我们有七八年没见了吧？",
         "vn": "Chúng ta bảy tám năm không gặp rồi nhỉ?"
        },
        {
         "k": "D",
         "zh": "那你在这儿休息一下，我去前面看看有没有卖饮料的。",
         "vn": "Vậy bạn nghỉ ở đây một chút, tôi lên phía trước xem có chỗ bán nước không."
        },
        {
         "k": "E",
         "zh": "王小姐，这个帽子真漂亮，谢谢你。",
         "vn": "Cô Vương, cái mũ này đẹp thật, cảm ơn cô."
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "你几乎没什么变化，还跟以前一样年轻。",
         "vn": "Bạn gần như không thay đổi gì, vẫn trẻ như trước.",
         "answer": "C"
        },
        {
         "n": 47,
         "zh": "我不饿，就是有点儿渴。",
         "vn": "Tôi không đói, chỉ hơi khát.",
         "answer": "D"
        },
        {
         "n": 48,
         "zh": "我最近在学习打篮球。",
         "vn": "Dạo này tôi đang học chơi bóng rổ.",
         "answer": "A"
        },
        {
         "n": 49,
         "zh": "被小高借走了，你问他要吧。",
         "vn": "Bị Tiểu Cao mượn đi rồi, bạn hỏi cậu ấy mà lấy.",
         "answer": "B"
        },
        {
         "n": 50,
         "zh": "不客气，你喜欢就好。",
         "vn": "Không có gì, bạn thích là được.",
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
         "zh": "像"
        },
        {
         "k": "B",
         "zh": "坏"
        },
        {
         "k": "C",
         "zh": "一直"
        },
        {
         "k": "D",
         "zh": "提高"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "回答"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "从地图上看，黄河很（　）一个“几”字。",
         "vn": "Nhìn trên bản đồ, sông Hoàng Hà rất (giống) chữ \"几\".",
         "answer": "A"
        },
        {
         "n": 52,
         "zh": "我相信在她的帮助下，你的汉语水平一定会（　）的。",
         "vn": "Tôi tin rằng với sự giúp đỡ của cô ấy, trình độ tiếng Hán của bạn nhất định sẽ (nâng cao).",
         "answer": "D"
        },
        {
         "n": 53,
         "zh": "谁能（　）黑板上的这个问题？",
         "vn": "Ai có thể (trả lời) câu hỏi trên bảng đen này?",
         "answer": "F"
        },
        {
         "n": 54,
         "zh": "（　）到会议结束，大家也没想出办法来。",
         "vn": "(Mãi) đến khi cuộc họp kết thúc, mọi người cũng không nghĩ ra cách.",
         "answer": "C"
        },
        {
         "n": 55,
         "zh": "你是不是忘记把牛奶放冰箱里了？两包都（　）了。",
         "vn": "Có phải bạn quên cho sữa vào tủ lạnh không? Cả hai hộp đều (hỏng) rồi.",
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
         "zh": "饱"
        },
        {
         "k": "B",
         "zh": "信用卡"
        },
        {
         "k": "C",
         "zh": "见面"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "张"
        },
        {
         "k": "F",
         "zh": "注意"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：我们在哪儿（　）？\nB：国家体育馆北门吧，那儿离你家和我家都近。",
         "vn": "A: Chúng ta (gặp nhau) ở đâu? / B: Cổng bắc Nhà thi đấu Quốc gia nhé, chỗ đó gần cả nhà bạn và nhà tôi.",
         "answer": "C"
        },
        {
         "n": 57,
         "zh": "A：昨天我生日，儿子送给我一（　）他画的画儿。\nB：那你一定很高兴吧？",
         "vn": "A: Hôm qua sinh nhật tôi, con trai tặng tôi một (bức) tranh nó vẽ. / B: Vậy chắc bạn vui lắm nhỉ?",
         "answer": "E"
        },
        {
         "n": 58,
         "zh": "A：对不起，李经理，我迟到了。\nB：没关系，先坐下开会吧，以后（　）点儿。",
         "vn": "A: Xin lỗi giám đốc Lý, tôi đến muộn. / B: Không sao, ngồi xuống họp đi, sau này (chú ý) một chút.",
         "answer": "F"
        },
        {
         "n": 59,
         "zh": "A：明天30号了，记得还（　）。\nB：放心，我今天中午就去银行。",
         "vn": "A: Mai là ngày 30 rồi, nhớ trả tiền (thẻ tín dụng). / B: Yên tâm, trưa nay anh ra ngân hàng.",
         "answer": "B"
        },
        {
         "n": 60,
         "zh": "A：桌子上有蛋糕，你吃不吃？\nB：不吃了，我在爷爷家吃（　）了才回来的。",
         "vn": "A: Trên bàn có bánh ga-tô, bạn ăn không? / B: Không ăn đâu, tôi ăn (no) ở nhà ông rồi mới về.",
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
       "zh": "房子很好，附近环境也不错，但还是要等我妻子看过以后才能做决定。",
       "star": "说话人是什么意思？",
       "options": [
        {
         "zh": "妻子不同意"
        },
        {
         "zh": "现在不能决定"
        },
        {
         "zh": "对房子不满意"
        }
       ],
       "answer": "B",
       "vn": "Căn nhà rất tốt, môi trường xung quanh cũng được, nhưng vẫn phải đợi vợ tôi xem xong mới quyết định được. ★ Người nói có ý gì? A vợ không đồng ý · B bây giờ chưa quyết định được · C không hài lòng với căn nhà."
      },
      {
       "n": 62,
       "zh": "我想找几个关于中国节日文化的小故事，明天要给班上的学生讲，你那儿有吗？",
       "star": "他最可能是做什么的？",
       "options": [
        {
         "zh": "司机"
        },
        {
         "zh": "医生"
        },
        {
         "zh": "老师"
        }
       ],
       "answer": "C",
       "vn": "Tôi muốn tìm mấy câu chuyện nhỏ về văn hóa ngày lễ Trung Quốc, mai phải kể cho học sinh trong lớp, chỗ bạn có không? ★ Anh ấy nhiều khả năng làm nghề gì? A tài xế · B bác sĩ · C giáo viên."
      },
      {
       "n": 63,
       "zh": "欢迎大家来这儿旅游。别看我们这个城市不大，但已经有几千年的历史了。上午我先带大家去一条有名的街道走走，那儿不但有很多好吃的，而且街道两边的房子也很特别，来这儿的人是一定要去看看的。",
       "star": "关于那个城市，可以知道：",
       "options": [
        {
         "zh": "历史久远"
        },
        {
         "zh": "房子很矮"
        },
        {
         "zh": "人很热情"
        }
       ],
       "answer": "A",
       "vn": "Chào mừng mọi người đến đây du lịch. Đừng thấy thành phố chúng tôi không lớn, nhưng đã có mấy nghìn năm lịch sử. Buổi sáng tôi dẫn mọi người đi dạo một con phố nổi tiếng trước, ở đó không những có nhiều đồ ăn ngon mà nhà hai bên đường cũng rất đặc biệt, ai đến đây cũng nhất định phải đi xem. ★ Về thành phố đó, có thể biết: A lịch sử lâu đời · B nhà rất thấp · C người rất nhiệt tình."
      },
      {
       "n": 64,
       "zh": "以前我每天早上都会跑半个小时的步，我知道这是个好习惯，对身体很好，但后来因为工作太忙，就没时间跑了。",
       "star": "他现在：",
       "options": [
        {
         "zh": "比较累"
        },
        {
         "zh": "不跑步了"
        },
        {
         "zh": "身体很差"
        }
       ],
       "answer": "B",
       "vn": "Trước đây sáng nào tôi cũng chạy bộ nửa tiếng, tôi biết đây là thói quen tốt, rất có lợi cho sức khỏe, nhưng sau vì công việc bận quá nên không có thời gian chạy nữa. ★ Bây giờ anh ấy: A khá mệt · B không chạy bộ nữa · C sức khỏe rất kém."
      },
      {
       "n": 65,
       "zh": "很多人会根据自己的兴趣爱好来选择工作，他们觉得选择自己喜欢的工作，更容易做出成绩。",
       "star": "根据爱好来选择工作，会：",
       "options": [
        {
         "zh": "更快完成"
        },
        {
         "zh": "更容易出成绩"
        },
        {
         "zh": "更易解决问题"
        }
       ],
       "answer": "B",
       "vn": "Nhiều người chọn công việc theo sở thích của mình, họ thấy chọn công việc mình thích thì dễ đạt thành tích hơn. ★ Chọn công việc theo sở thích sẽ: A hoàn thành nhanh hơn · B dễ có thành tích hơn · C dễ giải quyết vấn đề hơn."
      },
      {
       "n": 66,
       "zh": "哥，你们先去咖啡馆儿吧，我突然想起来，我房间的空调还没关，我先回去一下，然后去咖啡馆儿找你们。",
       "star": "他接下来要做什么？",
       "options": [
        {
         "zh": "回去喝水"
        },
        {
         "zh": "打扫洗手间"
        },
        {
         "zh": "回家关空调"
        }
       ],
       "answer": "C",
       "vn": "Anh ơi, mọi người cứ đến quán cà phê trước đi, em bỗng nhớ ra điều hòa phòng em chưa tắt, em về một lát rồi đến quán cà phê tìm mọi người. ★ Tiếp theo anh ấy sẽ làm gì? A về uống nước · B dọn nhà vệ sinh · C về nhà tắt điều hòa."
      },
      {
       "n": 67,
       "zh": "经过这件事，我明白了：机会只给有准备的人，知道自己想要的，然后为它去努力。只有这样，机会到来时，你才不会错过它。",
       "star": "怎样才不会错过机会？",
       "options": [
        {
         "zh": "认真做事"
        },
        {
         "zh": "先了解自己"
        },
        {
         "zh": "让自己做好准备"
        }
       ],
       "answer": "C",
       "vn": "Qua chuyện này, tôi hiểu ra: cơ hội chỉ dành cho người có chuẩn bị, biết mình muốn gì rồi cố gắng vì nó. Chỉ có như vậy, khi cơ hội đến bạn mới không bỏ lỡ. ★ Làm thế nào để không bỏ lỡ cơ hội? A làm việc nghiêm túc · B hiểu bản thân trước · C chuẩn bị sẵn sàng cho mình."
      },
      {
       "n": 68,
       "zh": "这只小狗是我同学的，他让我帮忙照顾几天。前两天小狗生病了，还好发现得早，现在已经没事了，它比来的时候还胖了些呢。",
       "star": "关于那只狗，可以知道：",
       "options": [
        {
         "zh": "长胖了"
        },
        {
         "zh": "还在吃药"
        },
        {
         "zh": "感冒还没好"
        }
       ],
       "answer": "A",
       "vn": "Con chó nhỏ này là của bạn học tôi, cậu ấy nhờ tôi chăm giúp mấy hôm. Hai hôm trước con chó bị ốm, may mà phát hiện sớm, bây giờ không sao rồi, nó còn béo hơn lúc mới đến. ★ Về con chó đó, có thể biết: A béo lên rồi · B vẫn đang uống thuốc · C cảm vẫn chưa khỏi."
      },
      {
       "n": 69,
       "zh": "每天接儿子回来的路上，他都要给我讲学校里的事。在他的眼里，世界每天都是新鲜的。",
       "star": "儿子眼中的世界是什么样的？",
       "options": [
        {
         "zh": "新鲜的"
        },
        {
         "zh": "奇怪的"
        },
        {
         "zh": "快乐的"
        }
       ],
       "answer": "A",
       "vn": "Mỗi ngày trên đường đón con trai về, cháu đều kể cho tôi chuyện ở trường. Trong mắt cháu, thế giới ngày nào cũng mới mẻ. ★ Thế giới trong mắt con trai thế nào? A mới mẻ · B kỳ lạ · C vui vẻ."
      },
      {
       "n": 70,
       "zh": "过去手机只能用来打电话，现在不但能听歌、玩儿游戏，上网也很方便。所以在汽车站或者地铁站里，经常能看见人们一边玩儿手机一边等车。",
       "star": "根据这段话，现在的手机：",
       "options": [
        {
         "zh": "可以上网"
        },
        {
         "zh": "会影响健康"
        },
        {
         "zh": "不能发电子邮件"
        }
       ],
       "answer": "A",
       "vn": "Trước đây điện thoại chỉ dùng để gọi, bây giờ không những nghe nhạc, chơi game được mà lên mạng cũng rất tiện. Vì vậy ở bến xe hay ga tàu điện ngầm, thường thấy mọi người vừa chơi điện thoại vừa đợi xe. ★ Theo đoạn văn, điện thoại bây giờ: A có thể lên mạng · B ảnh hưởng sức khỏe · C không gửi được email."
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
        "一万",
        "这次旅游",
        "花了",
        "元"
       ],
       "answer": "这次旅游花了一万元。",
       "vn": "Chuyến du lịch lần này tốn một vạn tệ."
      },
      {
       "n": 72,
       "words": [
        "她丈夫",
        "中文",
        "在大学教"
       ],
       "answer": "她丈夫在大学教中文。",
       "vn": "Chồng cô ấy dạy tiếng Trung ở đại học."
      },
      {
       "n": 73,
       "words": [
        "害怕得",
        "妹妹",
        "起来",
        "哭了"
       ],
       "answer": "妹妹害怕得哭了起来。",
       "vn": "Em gái sợ đến mức bật khóc."
      },
      {
       "n": 74,
       "words": [
        "飞机",
        "起飞",
        "马上",
        "就要",
        "了"
       ],
       "answer": "飞机马上就要起飞了。",
       "vn": "Máy bay sắp cất cánh rồi."
      },
      {
       "n": 75,
       "words": [
        "月亮",
        "今晚的",
        "真",
        "啊",
        "大"
       ],
       "answer": "今晚的月亮真大啊！",
       "vn": "Mặt trăng đêm nay to quá!"
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
       "pre": "今天的作业很简单，我一",
       "py": "huì",
       "post": "儿就做完了。",
       "answer": "会",
       "vn": "Bài tập hôm nay rất đơn giản, tôi làm một lát (一会儿) là xong."
      },
      {
       "n": 77,
       "pre": "有时候，做对的事情比把事情做对",
       "py": "gèng",
       "post": "重要。",
       "answer": "更",
       "vn": "Có lúc, làm việc đúng còn quan trọng hơn (更) làm đúng việc."
      },
      {
       "n": 78,
       "pre": "北京西站是中国最大的火",
       "py": "chē",
       "post": "站。",
       "answer": "车",
       "vn": "Ga Bắc Kinh Tây là ga tàu hỏa (火车站) lớn nhất Trung Quốc."
      },
      {
       "n": 79,
       "pre": "他告诉我，他姓周，今",
       "py": "nián",
       "post": "20岁。",
       "answer": "年",
       "vn": "Anh ấy nói với tôi anh ấy họ Chu, năm nay (今年) 20 tuổi."
      },
      {
       "n": 80,
       "pre": "姐姐今天结婚，真",
       "py": "wèi",
       "post": "她高兴。",
       "answer": "为",
       "vn": "Hôm nay chị gái kết hôn, thật mừng cho (为) chị ấy."
      }
     ]
    }
   ]
  }
 ]
};
