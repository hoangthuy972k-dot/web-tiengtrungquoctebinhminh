// Đề thi thử HSK 3 – Test 10 (đề thật H31328).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-10",
 "level": "HSK 3",
 "title": "HSK 3 - Test 10",
 "code": "H31328",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-10/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-10.mp3",
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
          102.9,
          125.6
         ]
        },
        {
         "n": 2,
         "answer": "C",
         "audio": [
          131.5,
          151.8
         ]
        },
        {
         "n": 3,
         "answer": "F",
         "audio": [
          157.7,
          187.3
         ]
        },
        {
         "n": 4,
         "answer": "A",
         "audio": [
          193.1,
          219.3
         ]
        },
        {
         "n": 5,
         "answer": "B",
         "audio": [
          225.1,
          246.6
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
         "answer": "C",
         "audio": [
          258.7,
          280.2
         ]
        },
        {
         "n": 7,
         "answer": "D",
         "audio": [
          286.1,
          310.8
         ]
        },
        {
         "n": 8,
         "answer": "E",
         "audio": [
          316.7,
          341.6
         ]
        },
        {
         "n": 9,
         "answer": "B",
         "audio": [
          347.5,
          374.9
         ]
        },
        {
         "n": 10,
         "answer": "A",
         "audio": [
          380.7,
          401.4
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
       "star": "聪明人知道机会不常有。",
       "answer": true,
       "audio": [
        502.2,
        534.9
       ],
       "vn": "Câu ★: Người thông minh biết cơ hội không thường có."
      },
      {
       "n": 12,
       "star": "那儿秋天很短。",
       "answer": true,
       "audio": [
        543,
        578.8
       ],
       "vn": "Câu ★: Mùa thu ở đó rất ngắn."
      },
      {
       "n": 13,
       "star": "他害怕会迟到。",
       "answer": false,
       "audio": [
        586.8,
        617.3
       ],
       "vn": "Câu ★: Anh ấy sợ sẽ đến muộn."
      },
      {
       "n": 14,
       "star": "名单不用检查了。",
       "answer": false,
       "audio": [
        625.4,
        655.5
       ],
       "vn": "Câu ★: Danh sách không cần kiểm tra nữa."
      },
      {
       "n": 15,
       "star": "他希望那位先生换个菜。",
       "answer": true,
       "audio": [
        663.7,
        703.7
       ],
       "vn": "Câu ★: Anh ấy mong vị khách kia đổi món khác."
      },
      {
       "n": 16,
       "star": "奶奶年轻时是历史老师。",
       "answer": false,
       "audio": [
        711.8,
        755.3
       ],
       "vn": "Câu ★: Hồi trẻ bà là giáo viên lịch sử."
      },
      {
       "n": 17,
       "star": "现在西瓜很好吃。",
       "answer": false,
       "audio": [
        763.2,
        794.4
       ],
       "vn": "Câu ★: Bây giờ dưa hấu rất ngon."
      },
      {
       "n": 18,
       "star": "那个手机卖10000元。",
       "answer": false,
       "audio": [
        802.4,
        840.4
       ],
       "vn": "Câu ★: Chiếc điện thoại đó bán 10000 tệ."
      },
      {
       "n": 19,
       "star": "他的电脑出了点儿问题。",
       "answer": true,
       "audio": [
        848.5,
        894.1
       ],
       "vn": "Câu ★: Máy tính của anh ấy có chút vấn đề."
      },
      {
       "n": 20,
       "star": "他喜欢读书。",
       "answer": true,
       "audio": [
        902.1,
        935.9
       ],
       "vn": "Câu ★: Anh ấy thích đọc sách."
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
         "zh": "司机"
        },
        {
         "zh": "服务员"
        },
        {
         "zh": "过去的同事"
        }
       ],
       "answer": "C",
       "audio": [
        998.5,
        1036.6
       ],
       "vn": "Nghĩa các lựa chọn: A tài xế · B nhân viên phục vụ · C đồng nghiệp cũ"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "哭了"
        },
        {
         "zh": "生气了"
        },
        {
         "zh": "忘吃药了"
        }
       ],
       "answer": "A",
       "audio": [
        1048.5,
        1075.4
       ],
       "vn": "Nghĩa các lựa chọn: A khóc rồi · B tức giận · C quên uống thuốc"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "在还书"
        },
        {
         "zh": "坐在右边"
        },
        {
         "zh": "看不清字"
        }
       ],
       "answer": "C",
       "audio": [
        1087.4,
        1122.2
       ],
       "vn": "Nghĩa các lựa chọn: A đang trả sách · B ngồi bên phải · C nhìn chữ không rõ"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "前年"
        },
        {
         "zh": "去年"
        },
        {
         "zh": "今年"
        }
       ],
       "answer": "B",
       "audio": [
        1134,
        1165.2
       ],
       "vn": "Nghĩa các lựa chọn: A năm kia · B năm ngoái · C năm nay"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "宾馆"
        },
        {
         "zh": "超市"
        },
        {
         "zh": "图书馆"
        }
       ],
       "answer": "A",
       "audio": [
        1177,
        1209
       ],
       "vn": "Nghĩa các lựa chọn: A khách sạn · B siêu thị · C thư viện"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "要了杯茶"
        },
        {
         "zh": "爱吃面包"
        },
        {
         "zh": "没带信用卡"
        }
       ],
       "answer": "A",
       "audio": [
        1220.9,
        1254.9
       ],
       "vn": "Nghĩa các lựa chọn: A gọi một cốc trà · B thích ăn bánh mì · C không mang thẻ tín dụng"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "不感兴趣"
        },
        {
         "zh": "在准备考试"
        },
        {
         "zh": "没完成作业"
        }
       ],
       "answer": "B",
       "audio": [
        1266.8,
        1300.5
       ],
       "vn": "Nghĩa các lựa chọn: A không hứng thú · B đang chuẩn bị thi · C chưa làm xong bài tập"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "很累"
        },
        {
         "zh": "腿疼"
        },
        {
         "zh": "到了再休息"
        }
       ],
       "answer": "C",
       "audio": [
        1312.4,
        1344.5
       ],
       "vn": "Nghĩa các lựa chọn: A rất mệt · B đau chân · C đến nơi rồi nghỉ"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "生病了"
        },
        {
         "zh": "弟弟结婚"
        },
        {
         "zh": "要接孩子"
        }
       ],
       "answer": "B",
       "audio": [
        1356.4,
        1383
       ],
       "vn": "Nghĩa các lựa chọn: A bị ốm · B em trai kết hôn · C phải đón con"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "水平高"
        },
        {
         "zh": "比较胖"
        },
        {
         "zh": "很高兴"
        }
       ],
       "answer": "A",
       "audio": [
        1394.9,
        1431.1
       ],
       "vn": "Nghĩa các lựa chọn: A trình độ cao · B khá béo · C rất vui"
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
         "zh": "在找猫"
        },
        {
         "zh": "要借椅子"
        },
        {
         "zh": "要买裤子"
        }
       ],
       "answer": "B",
       "audio": [
        1514.4,
        1560.9
       ],
       "vn": "Nghĩa các lựa chọn: A đang tìm mèo · B muốn mượn ghế · C muốn mua quần"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "跳舞"
        },
        {
         "zh": "开车"
        },
        {
         "zh": "骑自行车"
        }
       ],
       "answer": "C",
       "audio": [
        1572.9,
        1619.3
       ],
       "vn": "Nghĩa các lựa chọn: A nhảy múa · B lái xe · C đạp xe"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "发烧了"
        },
        {
         "zh": "鼻子不舒服"
        },
        {
         "zh": "耳朵进水了"
        }
       ],
       "answer": "C",
       "audio": [
        1631.2,
        1667.1
       ],
       "vn": "Nghĩa các lựa chọn: A bị sốt · B mũi khó chịu · C tai bị vào nước"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "正在洗脸"
        },
        {
         "zh": "要搬到6层"
        },
        {
         "zh": "在帮邻居搬家"
        }
       ],
       "answer": "B",
       "audio": [
        1678.9,
        1725.7
       ],
       "vn": "Nghĩa các lựa chọn: A đang rửa mặt · B sắp chuyển lên tầng 6 · C đang giúp hàng xóm chuyển nhà"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "夫妻"
        },
        {
         "zh": "姐弟"
        },
        {
         "zh": "老师和学生"
        }
       ],
       "answer": "A",
       "audio": [
        1737.6,
        1782.1
       ],
       "vn": "Nghĩa các lựa chọn: A vợ chồng · B chị và em trai · C thầy và trò"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "19：00"
        },
        {
         "zh": "20：15"
        },
        {
         "zh": "21：30"
        }
       ],
       "answer": "B",
       "audio": [
        1794.1,
        1847.9
       ],
       "vn": "Nghĩa các lựa chọn: A 19:00 · B 20:15 · C 21:30"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "在洗碗"
        },
        {
         "zh": "洗过澡了"
        },
        {
         "zh": "吃得太饱"
        }
       ],
       "answer": "B",
       "audio": [
        1859.8,
        1909.7
       ],
       "vn": "Nghĩa các lựa chọn: A đang rửa bát · B đã tắm rồi · C ăn quá no"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "阴天"
        },
        {
         "zh": "热极了"
        },
        {
         "zh": "下雨了"
        }
       ],
       "answer": "C",
       "audio": [
        1921.6,
        1968.7
       ],
       "vn": "Nghĩa các lựa chọn: A trời râm · B nóng vô cùng · C trời mưa rồi"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "商店"
        },
        {
         "zh": "饭店"
        },
        {
         "zh": "银行"
        }
       ],
       "answer": "A",
       "audio": [
        1980.7,
        2016.7
       ],
       "vn": "Nghĩa các lựa chọn: A cửa hàng · B nhà hàng · C ngân hàng"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "卖完了"
        },
        {
         "zh": "不新鲜"
        },
        {
         "zh": "想吃鸡蛋面"
        }
       ],
       "answer": "A",
       "audio": [
        2028.7,
        2080.3
       ],
       "vn": "Nghĩa các lựa chọn: A bán hết rồi · B không tươi · C muốn ăn mì trứng"
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
         "zh": "老王的儿子今年才15岁，就长到一米八五了。",
         "vn": "Con trai ông Vương năm nay mới 15 tuổi mà đã cao 1m85 rồi."
        },
        {
         "k": "B",
         "zh": "好，我看完这个节目就去睡。",
         "vn": "Được, con xem xong chương trình này rồi đi ngủ."
        },
        {
         "k": "C",
         "zh": "这次汉语考试，张东考得比上次好很多。",
         "vn": "Kỳ thi tiếng Hán lần này, Trương Đông làm bài tốt hơn lần trước nhiều."
        },
        {
         "k": "D",
         "zh": "你看见我的铅笔了吗？刚才做练习题我还用了呢。",
         "vn": "Bạn có thấy bút chì của tôi không? Lúc nãy làm bài tập tôi còn dùng mà."
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "喂，路上车比较多，我可能晚点儿才能到机场。",
         "vn": "Alô, trên đường khá đông xe, có lẽ tôi đến sân bay muộn một chút."
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "报纸下面你找了没有？",
         "vn": "Dưới tờ báo bạn tìm chưa?",
         "answer": "D"
        },
        {
         "n": 42,
         "zh": "早点儿休息吧，都10点半了。",
         "vn": "Nghỉ sớm đi, đã 10 rưỡi rồi.",
         "answer": "B"
        },
        {
         "n": 43,
         "zh": "他的学习成绩有了很大提高。",
         "vn": "Thành tích học tập của cậu ấy tiến bộ rất nhiều.",
         "answer": "C"
        },
        {
         "n": 44,
         "zh": "我记得他小时候个子很矮，没想到现在这么高了。",
         "vn": "Tôi nhớ hồi nhỏ cậu ấy thấp lắm, không ngờ bây giờ cao thế.",
         "answer": "A"
        },
        {
         "n": 45,
         "zh": "没关系，我还在等着拿行李呢。",
         "vn": "Không sao, tôi vẫn đang đợi lấy hành lý.",
         "answer": "F"
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
         "zh": "过去那么久了，你不说我都想不起来了。",
         "vn": "Lâu thế rồi, bạn không nói thì tôi cũng không nhớ ra."
        },
        {
         "k": "B",
         "zh": "这种鸟我还是第一次见。",
         "vn": "Loài chim này tôi mới thấy lần đầu."
        },
        {
         "k": "C",
         "zh": "不要总想着让别人来帮你。",
         "vn": "Đừng lúc nào cũng nghĩ để người khác giúp mình."
        },
        {
         "k": "D",
         "zh": "他在医院住了三个月，医生说星期日就可以出院了。",
         "vn": "Anh ấy nằm viện ba tháng, bác sĩ nói chủ nhật là có thể xuất viện."
        },
        {
         "k": "E",
         "zh": "我穿这件白衬衫怎么样？",
         "vn": "Tôi mặc cái áo sơ mi trắng này thế nào?"
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "它的嘴长得真奇怪。",
         "vn": "Cái mỏ của nó trông lạ thật.",
         "answer": "B"
        },
        {
         "n": 47,
         "zh": "我丈夫的腿已经好多了。",
         "vn": "Chân chồng tôi đã đỡ nhiều rồi.",
         "answer": "D"
        },
        {
         "n": 48,
         "zh": "遇到问题要自己想办法解决。",
         "vn": "Gặp vấn đề phải tự nghĩ cách giải quyết.",
         "answer": "C"
        },
        {
         "n": 49,
         "zh": "还不错，你再试试蓝色的，看看哪个更好。",
         "vn": "Cũng được, bạn thử thêm cái màu xanh lam, xem cái nào đẹp hơn.",
         "answer": "E"
        },
        {
         "n": 50,
         "zh": "他几乎把那件事忘了。",
         "vn": "Anh ấy gần như đã quên chuyện đó.",
         "answer": "A"
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
         "zh": "关"
        },
        {
         "k": "C",
         "zh": "突然"
        },
        {
         "k": "D",
         "zh": "同意"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "世界"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "放心，妈妈一定会（　）你这么做的。",
         "vn": "Yên tâm, mẹ nhất định sẽ (đồng ý) cho con làm thế.",
         "answer": "D"
        },
        {
         "n": 52,
         "zh": "你昨天走的时候是不是忘记（　）空调？",
         "vn": "Hôm qua lúc về bạn có phải quên (tắt) điều hòa không?",
         "answer": "B"
        },
        {
         "n": 53,
         "zh": "你那儿有（　）地图吗？借我用用。",
         "vn": "Chỗ bạn có bản đồ (thế giới) không? Cho tôi mượn dùng.",
         "answer": "F"
        },
        {
         "n": 54,
         "zh": "过去的就让它过去吧，做人应该（　）前看。",
         "vn": "Chuyện đã qua thì cho qua đi, làm người nên nhìn (về) phía trước.",
         "answer": "A"
        },
        {
         "n": 55,
         "zh": "怎么（　）刮起风来了？我们还去爬山吗？",
         "vn": "Sao (bỗng nhiên) nổi gió thế này? Chúng ta còn đi leo núi không?",
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
         "zh": "差"
        },
        {
         "k": "B",
         "zh": "决定"
        },
        {
         "k": "C",
         "zh": "啤酒"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "中间"
        },
        {
         "k": "F",
         "zh": "清楚"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：这件事电话里说不（　），我们见面再说吧。\nB：好，下了班我去接你。",
         "vn": "A: Việc này nói qua điện thoại không (rõ ràng) được, gặp nhau rồi nói. / B: Được, tan làm anh đến đón em.",
         "answer": "F"
        },
        {
         "n": 57,
         "zh": "A：爸，你看（　）那个怎么样？\nB：太小了，冰箱要买大一点儿的，左边那个不错。",
         "vn": "A: Bố ơi, bố thấy cái (ở giữa) thế nào? / B: Nhỏ quá, tủ lạnh phải mua cái to hơn, cái bên trái được đấy.",
         "answer": "E"
        },
        {
         "n": 58,
         "zh": "A：喝点儿什么？（　）还是饮料？\nB：饮料，晚上还要开车回去。",
         "vn": "A: Uống gì? (Bia) hay nước ngọt? / B: Nước ngọt, tối còn phải lái xe về.",
         "answer": "C"
        },
        {
         "n": 59,
         "zh": "A：我（　）从明天开始，每天早上6点起床。\nB：真的吗？太阳要从西边出来了。",
         "vn": "A: Em (quyết định) từ mai, sáng nào cũng dậy lúc 6 giờ. / B: Thật à? Mặt trời sắp mọc đằng tây rồi.",
         "answer": "B"
        },
        {
         "n": 60,
         "zh": "A：我们要去踢足球，你去不去？\nB：去，我还（　）最后两个句子就写完了，等我一下。",
         "vn": "A: Bọn tớ đi đá bóng, cậu đi không? / B: Đi, tớ chỉ (còn thiếu) hai câu cuối là viết xong, đợi tớ chút.",
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
       "zh": "中国的很多城市都有好几个名字，像广州市，除了羊城外，人们还叫它花城。",
       "star": "根据这段话，广州市：",
       "options": [
        {
         "zh": "很漂亮"
        },
        {
         "zh": "又叫羊城"
        },
        {
         "zh": "变化很大"
        }
       ],
       "answer": "B",
       "vn": "Nhiều thành phố của Trung Quốc có mấy cái tên, như thành phố Quảng Châu, ngoài \"Dương Thành\" người ta còn gọi là \"Hoa Thành\". ★ Theo đoạn văn, thành phố Quảng Châu: A rất đẹp · B còn gọi là Dương Thành · C thay đổi rất lớn."
      },
      {
       "n": 62,
       "zh": "我们学校旁边有家咖啡馆儿，环境不错，我们去那儿边喝咖啡边等小李吧。",
       "star": "那家咖啡馆儿：",
       "options": [
        {
         "zh": "环境一般"
        },
        {
         "zh": "换菜单了"
        },
        {
         "zh": "离学校不远"
        }
       ],
       "answer": "C",
       "vn": "Bên cạnh trường chúng ta có một quán cà phê, không gian khá đẹp, chúng ta ra đó vừa uống cà phê vừa đợi Tiểu Lý đi. ★ Quán cà phê đó: A không gian bình thường · B đã đổi thực đơn · C cách trường không xa."
      },
      {
       "n": 63,
       "zh": "现在，北京很多公园的门票都很便宜，有的只需要两三块钱。如果你经常去公园运动，还可以办年票，这样不但不用每次去都买票，而且也更便宜了。",
       "star": "对常去公园的人来说，有了年票：",
       "options": [
        {
         "zh": "更方便"
        },
        {
         "zh": "选择少了"
        },
        {
         "zh": "出门更容易"
        }
       ],
       "answer": "A",
       "vn": "Bây giờ vé vào nhiều công viên ở Bắc Kinh rất rẻ, có nơi chỉ hai ba tệ. Nếu bạn thường ra công viên tập thể dục còn có thể làm vé năm, như vậy không những không phải mua vé mỗi lần mà còn rẻ hơn. ★ Với người hay đi công viên, có vé năm thì: A tiện hơn · B ít lựa chọn hơn · C ra ngoài dễ hơn."
      },
      {
       "n": 64,
       "zh": "如果想了解一个国家的文化，就不能只看书本，还必须到这个国家走一走、看一看，这样才能明白“文化”二字的意思。",
       "star": "根据这段话，要了解一个国家的文化，必须：",
       "options": [
        {
         "zh": "多看书"
        },
        {
         "zh": "去留学"
        },
        {
         "zh": "去那个国家看看"
        }
       ],
       "answer": "C",
       "vn": "Nếu muốn tìm hiểu văn hóa một quốc gia, không thể chỉ đọc sách mà còn phải đến đất nước đó đi đây đi đó, như vậy mới hiểu được ý nghĩa hai chữ \"văn hóa\". ★ Theo đoạn văn, muốn hiểu văn hóa một nước thì phải: A đọc nhiều sách · B đi du học · C đến nước đó xem."
      },
      {
       "n": 65,
       "zh": "上周末我和同事一起去云南玩儿了两天，那里跟北方真的很不一样，我们照了很多照片，都在我电脑里，你要不要看看？",
       "star": "他：",
       "options": [
        {
         "zh": "爱帮助人"
        },
        {
         "zh": "没带相机"
        },
        {
         "zh": "去云南旅游过"
        }
       ],
       "answer": "C",
       "vn": "Cuối tuần trước tôi và đồng nghiệp đi Vân Nam chơi hai ngày, ở đó thật sự rất khác miền Bắc, chúng tôi chụp rất nhiều ảnh, đều ở trong máy tính của tôi, bạn có muốn xem không? ★ Anh ấy: A thích giúp đỡ người khác · B không mang máy ảnh · C đã đi du lịch Vân Nam."
      },
      {
       "n": 66,
       "zh": "我们等了快半个小时，那条街上都没有出租车经过，后来只能坐公共汽车过去了。",
       "star": "他们一开始打算：",
       "options": [
        {
         "zh": "往南走"
        },
        {
         "zh": "打车去"
        },
        {
         "zh": "坐公共汽车"
        }
       ],
       "answer": "B",
       "vn": "Chúng tôi đợi gần nửa tiếng mà trên con phố đó không có taxi nào đi qua, sau đó đành đi xe buýt. ★ Lúc đầu họ định: A đi về phía nam · B đi taxi · C đi xe buýt."
      },
      {
       "n": 67,
       "zh": "电视上说，这个月20号动物园会新来两只大熊猫，女儿还没见过大熊猫呢，到时候我们带她去吧。",
       "star": "他想带女儿：",
       "options": [
        {
         "zh": "看电影"
        },
        {
         "zh": "去骑马"
        },
        {
         "zh": "看大熊猫"
        }
       ],
       "answer": "C",
       "vn": "Ti vi nói ngày 20 tháng này vườn thú sẽ có thêm hai con gấu trúc lớn, con gái còn chưa được thấy gấu trúc, đến lúc đó mình đưa con đi nhé. ★ Anh ấy muốn đưa con gái đi: A xem phim · B cưỡi ngựa · C xem gấu trúc."
      },
      {
       "n": 68,
       "zh": "很多人年轻的时候不注意锻炼，只想着工作，等老了才发现再多的钱也比不上一个好身体，所以工作越忙越应该照顾好自己。",
       "star": "这段话主要想告诉我们：",
       "options": [
        {
         "zh": "健康更重要"
        },
        {
         "zh": "要努力工作"
        },
        {
         "zh": "要多关心老人"
        }
       ],
       "answer": "A",
       "vn": "Nhiều người lúc trẻ không chú ý rèn luyện, chỉ nghĩ đến công việc, đến khi già mới phát hiện nhiều tiền đến đâu cũng không bằng một cơ thể khỏe mạnh, nên công việc càng bận càng phải chăm sóc tốt bản thân. ★ Đoạn văn chủ yếu muốn nói: A sức khỏe quan trọng hơn · B phải chăm chỉ làm việc · C phải quan tâm người già nhiều hơn."
      },
      {
       "n": 69,
       "zh": "在中国，去朋友家做客，离开时朋友可能会对你说“慢走”。其实他们的意思是让你在回去的路上小心点儿，不是让你慢点儿走。",
       "star": "朋友说“慢走”，最可能是什么意思？",
       "options": [
        {
         "zh": "欢迎再来"
        },
        {
         "zh": "路上小心"
        },
        {
         "zh": "别走得太快"
        }
       ],
       "answer": "B",
       "vn": "Ở Trung Quốc, đến nhà bạn chơi, lúc về bạn có thể nói với bạn \"慢走\" (đi chậm thôi). Thật ra ý họ là dặn bạn đi đường cẩn thận, chứ không phải bảo bạn đi chậm. ★ Bạn nói \"慢走\" nhiều khả năng có ý gì? A hoan nghênh lại đến · B đi đường cẩn thận · C đừng đi quá nhanh."
      },
      {
       "n": 70,
       "zh": "这块儿手表是我10岁生日时爷爷送给我的，已经用了很多年了，虽然现在看上去有点儿旧，颜色也变了，但我还是很喜欢它，不愿意换新的。",
       "star": "那块儿手表：",
       "options": [
        {
         "zh": "已经旧了"
        },
        {
         "zh": "是节日礼物"
        },
        {
         "zh": "是为爷爷买的"
        }
       ],
       "answer": "A",
       "vn": "Chiếc đồng hồ đeo tay này là quà ông tặng tôi hồi sinh nhật 10 tuổi, đã dùng nhiều năm rồi, tuy bây giờ trông hơi cũ, màu cũng đã đổi, nhưng tôi vẫn rất thích, không muốn đổi cái mới. ★ Chiếc đồng hồ đó: A đã cũ rồi · B là quà ngày lễ · C mua cho ông."
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
        "她的",
        "又黑又长",
        "头发"
       ],
       "answer": "她的头发又黑又长。",
       "vn": "Tóc cô ấy vừa đen vừa dài."
      },
      {
       "n": 72,
       "words": [
        "我",
        "学会用",
        "终于",
        "筷子了"
       ],
       "answer": "我终于学会用筷子了。",
       "vn": "Cuối cùng tôi cũng biết dùng đũa rồi."
      },
      {
       "n": 73,
       "words": [
        "他",
        "打扫得",
        "把",
        "干干净净",
        "教室"
       ],
       "answer": "他把教室打扫得干干净净。",
       "vn": "Cậu ấy quét dọn lớp học sạch sẽ tinh tươm."
      },
      {
       "n": 74,
       "words": [
        "我",
        "体育新闻",
        "喜欢",
        "不",
        "看"
       ],
       "answer": "我不喜欢看体育新闻。",
       "vn": "Tôi không thích xem tin thể thao."
      },
      {
       "n": 75,
       "words": [
        "校长对",
        "非常",
        "你的回答",
        "满意"
       ],
       "answer": "校长对你的回答非常满意。",
       "vn": "Hiệu trưởng rất hài lòng với câu trả lời của em."
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
       "pre": "你觉得学",
       "py": "Zhōng",
       "post": "文难不难？",
       "answer": "中",
       "vn": "Bạn thấy học tiếng Trung (中文) có khó không?"
      },
      {
       "n": 77,
       "pre": "春天",
       "py": "lái",
       "post": "了，街道两边的草都绿了。",
       "answer": "来",
       "vn": "Mùa xuân đến (来) rồi, cỏ hai bên đường đều xanh cả."
      },
      {
       "n": 78,
       "pre": "再见，有事可以给我打电话或者发",
       "py": "diàn",
       "post": "子邮件。",
       "answer": "电",
       "vn": "Tạm biệt, có việc gì thì gọi điện hoặc gửi email (电子邮件) cho tôi."
      },
      {
       "n": 79,
       "pre": "要想有一口",
       "py": "hǎo",
       "post": "牙，就要每天认真刷牙。",
       "answer": "好",
       "vn": "Muốn có hàm răng tốt (好) thì phải chăm chỉ đánh răng mỗi ngày."
      },
      {
       "n": 80,
       "pre": "雪下得这么大，不",
       "py": "zhī",
       "post": "道会不会影响飞机起飞。",
       "answer": "知",
       "vn": "Tuyết rơi dày thế này, không biết (知道) có ảnh hưởng đến việc máy bay cất cánh không."
      }
     ]
    }
   ]
  }
 ]
};
