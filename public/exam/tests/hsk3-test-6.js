// Đề thi thử HSK 3 – Test 6 (đề thật H31006).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-6",
 "level": "HSK 3",
 "title": "HSK 3 - Test 6",
 "code": "H31006",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-6/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-6.mp3",
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
          104.6,
          129.6
         ]
        },
        {
         "n": 2,
         "answer": "E",
         "audio": [
          134.1,
          158.8
         ]
        },
        {
         "n": 3,
         "answer": "C",
         "audio": [
          163.5,
          188
         ]
        },
        {
         "n": 4,
         "answer": "F",
         "audio": [
          192.6,
          217
         ]
        },
        {
         "n": 5,
         "answer": "B",
         "audio": [
          221.6,
          242.1
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
         "answer": "D",
         "audio": [
          252.8,
          279.2
         ]
        },
        {
         "n": 7,
         "answer": "C",
         "audio": [
          283.8,
          309.1
         ]
        },
        {
         "n": 8,
         "answer": "E",
         "audio": [
          313.9,
          334.4
         ]
        },
        {
         "n": 9,
         "answer": "B",
         "audio": [
          338.9,
          364.4
         ]
        },
        {
         "n": 10,
         "answer": "A",
         "audio": [
          369.1,
          399.3
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
       "star": "空调的声音太大。",
       "answer": false,
       "audio": [
        503.8,
        539.9
       ],
       "vn": "Câu ★: Tiếng điều hòa quá to."
      },
      {
       "n": 12,
       "star": "今天天气很冷。",
       "answer": true,
       "audio": [
        545.5,
        583.6
       ],
       "vn": "Câu ★: Hôm nay trời rất lạnh."
      },
      {
       "n": 13,
       "star": "王经理是北方人。",
       "answer": false,
       "audio": [
        589.1,
        632.2
       ],
       "vn": "Câu ★: Giám đốc Vương là người miền Bắc."
      },
      {
       "n": 14,
       "star": "运动会还没举行。",
       "answer": false,
       "audio": [
        637.9,
        675.5
       ],
       "vn": "Câu ★: Hội thao vẫn chưa tổ chức."
      },
      {
       "n": 15,
       "star": "爸爸去上班了。",
       "answer": false,
       "audio": [
        681.4,
        707.9
       ],
       "vn": "Câu ★: Bố đã đi làm rồi."
      },
      {
       "n": 16,
       "star": "他在眼镜店里。",
       "answer": true,
       "audio": [
        713.5,
        744.1
       ],
       "vn": "Câu ★: Anh ấy đang ở trong cửa hàng kính mắt."
      },
      {
       "n": 17,
       "star": "关心朋友的办法很多。",
       "answer": true,
       "audio": [
        750.5,
        805.9
       ],
       "vn": "Câu ★: Có nhiều cách để quan tâm bạn bè."
      },
      {
       "n": 18,
       "star": "她越来越漂亮了。",
       "answer": false,
       "audio": [
        812,
        852.6
       ],
       "vn": "Câu ★: Cô ấy ngày càng xinh đẹp."
      },
      {
       "n": 19,
       "star": "校长的猫喜欢在椅子上睡觉。",
       "answer": true,
       "audio": [
        858.9,
        902.9
       ],
       "vn": "Câu ★: Con mèo của hiệu trưởng thích ngủ trên ghế."
      },
      {
       "n": 20,
       "star": "他是老师。",
       "answer": true,
       "audio": [
        909.2,
        962.2
       ],
       "vn": "Câu ★: Anh ấy là giáo viên."
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
         "zh": "骑车"
        },
        {
         "zh": "坐船"
        },
        {
         "zh": "坐地铁"
        }
       ],
       "answer": "A",
       "audio": [
        1021.9,
        1052.4
       ],
       "vn": "Nghĩa các lựa chọn: A đạp xe · B đi thuyền · C đi tàu điện ngầm"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "饿了"
        },
        {
         "zh": "很难过"
        },
        {
         "zh": "身体不舒服"
        }
       ],
       "answer": "C",
       "audio": [
        1062.1,
        1093
       ],
       "vn": "Nghĩa các lựa chọn: A đói rồi · B rất buồn · C cơ thể không khỏe"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "旅游"
        },
        {
         "zh": "开会"
        },
        {
         "zh": "参加比赛"
        }
       ],
       "answer": "A",
       "audio": [
        1102.8,
        1140
       ],
       "vn": "Nghĩa các lựa chọn: A du lịch · B họp · C tham gia thi đấu"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "考试结束了"
        },
        {
         "zh": "她在看电视"
        },
        {
         "zh": "表演要开始了"
        }
       ],
       "answer": "C",
       "audio": [
        1149.6,
        1181.7
       ],
       "vn": "Nghĩa các lựa chọn: A thi xong rồi · B cô ấy đang xem ti vi · C buổi biểu diễn sắp bắt đầu"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "水果"
        },
        {
         "zh": "羊肉"
        },
        {
         "zh": "鸡蛋"
        }
       ],
       "answer": "A",
       "audio": [
        1191.3,
        1223.7
       ],
       "vn": "Nghĩa các lựa chọn: A hoa quả · B thịt dê · C trứng gà"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "一般"
        },
        {
         "zh": "不便宜"
        },
        {
         "zh": "不好看"
        }
       ],
       "answer": "B",
       "audio": [
        1233.3,
        1264.9
       ],
       "vn": "Nghĩa các lựa chọn: A bình thường · B không rẻ · C không đẹp"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "女儿"
        },
        {
         "zh": "同学"
        },
        {
         "zh": "同事"
        }
       ],
       "answer": "B",
       "audio": [
        1274.4,
        1317.1
       ],
       "vn": "Nghĩa các lựa chọn: A con gái · B bạn học · C đồng nghiệp"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "洗手间"
        },
        {
         "zh": "图书馆"
        },
        {
         "zh": "办公室"
        }
       ],
       "answer": "A",
       "audio": [
        1326.7,
        1354.7
       ],
       "vn": "Nghĩa các lựa chọn: A nhà vệ sinh · B thư viện · C văn phòng"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "变瘦"
        },
        {
         "zh": "去找丈夫"
        },
        {
         "zh": "休息一个月"
        }
       ],
       "answer": "A",
       "audio": [
        1364.3,
        1404.1
       ],
       "vn": "Nghĩa các lựa chọn: A gầy đi · B đi tìm chồng · C nghỉ ngơi một tháng"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "在卖报纸"
        },
        {
         "zh": "有张旧地图"
        },
        {
         "zh": "想去世界公园"
        }
       ],
       "answer": "B",
       "audio": [
        1413.9,
        1457.7
       ],
       "vn": "Nghĩa các lựa chọn: A đang bán báo · B có tấm bản đồ cũ · C muốn đi Công viên Thế giới"
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
         "zh": "哭了"
        },
        {
         "zh": "生病了"
        },
        {
         "zh": "在想问题"
        }
       ],
       "answer": "C",
       "audio": [
        1538.5,
        1587.4
       ],
       "vn": "Nghĩa các lựa chọn: A khóc rồi · B bị ốm · C đang suy nghĩ vấn đề"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "洗脸"
        },
        {
         "zh": "买药"
        },
        {
         "zh": "打扫房间"
        }
       ],
       "answer": "C",
       "audio": [
        1597.1,
        1649.5
       ],
       "vn": "Nghĩa các lựa chọn: A rửa mặt · B mua thuốc · C dọn phòng"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "教室"
        },
        {
         "zh": "医院"
        },
        {
         "zh": "饭馆儿"
        }
       ],
       "answer": "C",
       "audio": [
        1659,
        1712.7
       ],
       "vn": "Nghĩa các lựa chọn: A lớp học · B bệnh viện · C quán ăn"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "手表"
        },
        {
         "zh": "手机"
        },
        {
         "zh": "照相机"
        }
       ],
       "answer": "B",
       "audio": [
        1722.3,
        1766.4
       ],
       "vn": "Nghĩa các lựa chọn: A đồng hồ đeo tay · B điện thoại · C máy ảnh"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "学得快"
        },
        {
         "zh": "吃得太饱"
        },
        {
         "zh": "喜欢小动物"
        }
       ],
       "answer": "A",
       "audio": [
        1776.1,
        1819.3
       ],
       "vn": "Nghĩa các lựa chọn: A học nhanh · B ăn quá no · C thích động vật nhỏ"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "电脑坏了"
        },
        {
         "zh": "害怕没考好"
        },
        {
         "zh": "没完成作业"
        }
       ],
       "answer": "B",
       "audio": [
        1828.9,
        1887.3
       ],
       "vn": "Nghĩa các lựa chọn: A máy tính hỏng rồi · B sợ thi không tốt · C chưa làm xong bài tập"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "用错词语了"
        },
        {
         "zh": "少了两个人"
        },
        {
         "zh": "两个人的名字相同"
        }
       ],
       "answer": "B",
       "audio": [
        1897,
        1945.6
       ],
       "vn": "Nghĩa các lựa chọn: A dùng sai từ ngữ · B thiếu hai người · C tên của hai người giống nhau"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "在西边"
        },
        {
         "zh": "是白色的"
        },
        {
         "zh": "里面有只小狗"
        }
       ],
       "answer": "B",
       "audio": [
        1955.5,
        2002.1
       ],
       "vn": "Nghĩa các lựa chọn: A ở phía tây · B màu trắng · C bên trong có một con chó nhỏ"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "公司"
        },
        {
         "zh": "家里"
        },
        {
         "zh": "出租车上"
        }
       ],
       "answer": "A",
       "audio": [
        2011.9,
        2065.2
       ],
       "vn": "Nghĩa các lựa chọn: A công ty · B ở nhà · C trên taxi"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "云"
        },
        {
         "zh": "黑板"
        },
        {
         "zh": "面条儿"
        }
       ],
       "answer": "A",
       "audio": [
        2074.8,
        2121.4
       ],
       "vn": "Nghĩa các lựa chọn: A mây · B bảng đen · C mì sợi"
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
         "zh": "这是一年级的数学题？这么难！",
         "vn": "Đây là bài toán lớp một á? Khó thế!"
        },
        {
         "k": "B",
         "zh": "那是我叔叔去年送我的生日礼物。",
         "vn": "Đó là quà sinh nhật chú tôi tặng năm ngoái."
        },
        {
         "k": "C",
         "zh": "跑完一万米后，你觉得怎么样？",
         "vn": "Chạy xong mười nghìn mét, bạn thấy thế nào?"
        },
        {
         "k": "D",
         "zh": "好的，如果没什么其他事，我一定去。",
         "vn": "Được, nếu không có việc gì khác, tôi nhất định sẽ đi."
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "你妹妹也爱看体育节目啊？",
         "vn": "Em gái bạn cũng thích xem chương trình thể thao à?"
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "这个帽子真可爱，你在哪儿买的？",
         "vn": "Cái mũ này đáng yêu thật, bạn mua ở đâu thế?",
         "answer": "B"
        },
        {
         "n": 42,
         "zh": "是的，特别是足球比赛，她喜欢踢足球。",
         "vn": "Đúng vậy, đặc biệt là thi đấu bóng đá, cô ấy thích đá bóng.",
         "answer": "F"
        },
        {
         "n": 43,
         "zh": "又渴又累，腿也疼。",
         "vn": "Vừa khát vừa mệt, chân cũng đau.",
         "answer": "C"
        },
        {
         "n": 44,
         "zh": "这个周末大家都去唱歌，你和我们一起去？",
         "vn": "Cuối tuần này mọi người đều đi hát, bạn đi cùng chúng tôi không?",
         "answer": "D"
        },
        {
         "n": 45,
         "zh": "你认真点儿，其实很简单。",
         "vn": "Bạn chú tâm một chút, thật ra rất đơn giản.",
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
         "zh": "东边有一家，但是要到9点才开门。",
         "vn": "Phía đông có một cái, nhưng phải 9 giờ mới mở cửa."
        },
        {
         "k": "B",
         "zh": "放心吧，我不会忘记的。",
         "vn": "Yên tâm đi, tôi sẽ không quên đâu."
        },
        {
         "k": "C",
         "zh": "你等我一下，我换件衬衫就来。",
         "vn": "Bạn đợi tôi một chút, tôi thay áo sơ mi rồi đến ngay."
        },
        {
         "k": "D",
         "zh": "姐姐，这个词是什么意思啊？",
         "vn": "Chị ơi, từ này nghĩa là gì ạ?"
        },
        {
         "k": "E",
         "zh": "孩子，遇到问题时，你应该想办法去解决。",
         "vn": "Con à, khi gặp vấn đề, con nên nghĩ cách giải quyết."
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "你总是这么慢，快7点了，要迟到了。",
         "vn": "Lúc nào bạn cũng chậm thế, gần 7 giờ rồi, sắp muộn rồi.",
         "answer": "C"
        },
        {
         "n": 47,
         "zh": "宾馆附近有银行吗？",
         "vn": "Gần khách sạn có ngân hàng không?",
         "answer": "A"
        },
        {
         "n": 48,
         "zh": "你出去的时候，记得把灯关上。",
         "vn": "Lúc ra ngoài, nhớ tắt đèn nhé.",
         "answer": "B"
        },
        {
         "n": 49,
         "zh": "不能只是着急和生气。",
         "vn": "Không thể chỉ sốt ruột và tức giận.",
         "answer": "E"
        },
        {
         "n": 50,
         "zh": "我也不知道，你去查一下字典吧。",
         "vn": "Tôi cũng không biết, bạn đi tra từ điển xem.",
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
         "zh": "有名"
        },
        {
         "k": "B",
         "zh": "变化"
        },
        {
         "k": "C",
         "zh": "季节"
        },
        {
         "k": "D",
         "zh": "只"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "瘦"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "这个城市已经有900多年的历史了，非常（　）。",
         "vn": "Thành phố này đã có hơn 900 năm lịch sử, rất (nổi tiếng).",
         "answer": "A"
        },
        {
         "n": 52,
         "zh": "因为工作比较忙，小李最近（　）了很多。",
         "vn": "Vì công việc khá bận, dạo này Tiểu Lý (gầy) đi nhiều.",
         "answer": "F"
        },
        {
         "n": 53,
         "zh": "春、夏、秋、冬，你最喜欢哪个（　）？",
         "vn": "Xuân, hạ, thu, đông, bạn thích (mùa) nào nhất?",
         "answer": "C"
        },
        {
         "n": 54,
         "zh": "你阿姨的（　）真大，我几乎没认出她来。",
         "vn": "(Sự thay đổi) của dì bạn lớn thật, tôi suýt không nhận ra.",
         "answer": "B"
        },
        {
         "n": 55,
         "zh": "从我们学校坐公共汽车去火车站，（　）需要10分钟。",
         "vn": "Từ trường chúng tôi đi xe buýt ra ga tàu hỏa (chỉ) mất 10 phút.",
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
         "zh": "刷牙"
        },
        {
         "k": "B",
         "zh": "太阳"
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
         "zh": "借"
        },
        {
         "k": "F",
         "zh": "新鲜"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：音乐会的门票我放在桌子上了，（　）4张。\nB：我看见了，谢谢你。",
         "vn": "A: Vé buổi hòa nhạc tôi để trên bàn rồi, (tổng cộng) 4 vé. / B: Tôi thấy rồi, cảm ơn bạn.",
         "answer": "C"
        },
        {
         "n": 57,
         "zh": "A：（　）以后不能再吃东西了。\nB：妈，您说第1001次了。",
         "vn": "A: (Đánh răng) xong thì không được ăn gì nữa. / B: Mẹ ơi, mẹ nói lần thứ 1001 rồi.",
         "answer": "A"
        },
        {
         "n": 58,
         "zh": "A：小姐，葡萄多少钱一斤？\nB：3块。今天的葡萄很（　），也很甜。",
         "vn": "A: Chị ơi, nho bao nhiêu tiền một cân? / B: 3 tệ. Nho hôm nay rất (tươi), cũng rất ngọt.",
         "answer": "F"
        },
        {
         "n": 59,
         "zh": "A：喂，上次（　）的那本书，晚几天还你可以吗？\nB：没问题，我现在在外地，回去再说。",
         "vn": "A: Alô, cuốn sách lần trước (mượn), trả bạn muộn mấy hôm được không? / B: Không vấn đề, bây giờ tôi đang ở nơi khác, về rồi tính.",
         "answer": "E"
        },
        {
         "n": 60,
         "zh": "A：天终于晴了，好久没看见（　）了。\nB：天气这么好，我们去河边走走？",
         "vn": "A: Cuối cùng trời cũng nắng, lâu lắm không thấy (mặt trời). / B: Thời tiết đẹp thế, chúng ta ra bờ sông đi dạo nhé?",
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
       "zh": "站得高，才能看得远。所以，人们对自己的要求高一些，了解的事情就会更多一些。",
       "star": " 想要了解更多，我们需要：",
       "options": [
        {
         "zh": "换新的环境"
        },
        {
         "zh": "多帮助别人"
        },
        {
         "zh": "提高对自己的要求"
        }
       ],
       "answer": "C",
       "vn": "Đứng cao mới nhìn được xa. Vì vậy, con người đặt yêu cầu với bản thân cao hơn một chút thì sẽ hiểu biết nhiều hơn. ★ Muốn hiểu biết nhiều hơn, chúng ta cần: A đổi môi trường mới · B giúp đỡ người khác nhiều hơn · C nâng cao yêu cầu với bản thân."
      },
      {
       "n": 62,
       "zh": "熊猫的耳朵、眼睛、鼻子是黑色的，脚也是黑色的，它身上除了白色就是黑色。所以人们说：熊猫的照片只能是黑白的。",
       "star": " 根据这段话，熊猫：",
       "options": [
        {
         "zh": "爱照相"
        },
        {
         "zh": "很聪明"
        },
        {
         "zh": "有个黑鼻子"
        }
       ],
       "answer": "C",
       "vn": "Tai, mắt, mũi của gấu trúc màu đen, chân cũng màu đen, trên người nó ngoài màu trắng là màu đen. Vì vậy người ta nói: ảnh gấu trúc chỉ có thể là ảnh đen trắng. ★ Theo đoạn văn, gấu trúc: A thích chụp ảnh · B rất thông minh · C có cái mũi đen."
      },
      {
       "n": 63,
       "zh": "老师问小明：“北京和月亮，哪个离你更近？”“当然是月亮了。”小明说。老师问他为什么，他说：“因为我经常可以看到月亮，但要看到北京，我需要花很长时间。”",
       "star": " 小明为什么认为月亮离他近？",
       "options": [
        {
         "zh": "月亮很大"
        },
        {
         "zh": "容易看到月亮"
        },
        {
         "zh": "他没去过北京"
        }
       ],
       "answer": "B",
       "vn": "Thầy giáo hỏi Tiểu Minh: \"Bắc Kinh và mặt trăng, cái nào gần em hơn?\" \"Tất nhiên là mặt trăng ạ.\" Tiểu Minh đáp. Thầy hỏi vì sao, cậu nói: \"Vì em thường xuyên nhìn thấy mặt trăng, còn muốn thấy Bắc Kinh thì em phải mất rất nhiều thời gian.\" ★ Vì sao Tiểu Minh cho rằng mặt trăng gần mình? A mặt trăng rất to · B dễ nhìn thấy mặt trăng · C cậu chưa đến Bắc Kinh."
      },
      {
       "n": 64,
       "zh": "他刚才给我打电话，说那本书里还有一个问题，一会儿你去他那儿看看。以后要注意，一定要认真。",
       "star": " 那本书：",
       "options": [
        {
         "zh": "作用不大"
        },
        {
         "zh": "有不少错字"
        },
        {
         "zh": "被发现还有问题"
        }
       ],
       "answer": "C",
       "vn": "Lúc nãy anh ấy gọi điện cho tôi, nói trong cuốn sách đó vẫn còn một vấn đề, lát nữa bạn qua chỗ anh ấy xem. Sau này phải chú ý, nhất định phải cẩn thận. ★ Cuốn sách đó: A tác dụng không lớn · B có không ít chữ sai · C bị phát hiện vẫn còn vấn đề."
      },
      {
       "n": 65,
       "zh": "小黄，明天上午我有个会，你帮我去机场接李先生吧。他明天8点的飞机，你早点儿去，早半个小时到，好不好？谢谢你了。",
       "star": "小黄明天最可能：",
       "options": [
        {
         "zh": "去旅游"
        },
        {
         "zh": "去机场接人"
        },
        {
         "zh": "要照顾病人"
        }
       ],
       "answer": "B",
       "vn": "Tiểu Hoàng, sáng mai tôi có cuộc họp, bạn ra sân bay đón ông Lý giúp tôi nhé. Chuyến bay của ông ấy lúc 8 giờ, bạn đi sớm, đến trước nửa tiếng, được không? Cảm ơn bạn. ★ Ngày mai Tiểu Hoàng nhiều khả năng sẽ: A đi du lịch · B ra sân bay đón người · C chăm sóc người bệnh."
      },
      {
       "n": 66,
       "zh": "因为工作需要，我要用到汉语。为了使自己的汉语说得更好，我参加了一个汉语学习班。除了星期天，每天晚上都有课。",
       "star": "我星期几没有课？",
       "options": [
        {
         "zh": "星期日"
        },
        {
         "zh": "星期六"
        },
        {
         "zh": "星期五"
        }
       ],
       "answer": "A",
       "vn": "Vì công việc cần, tôi phải dùng tiếng Hán. Để nói tiếng Hán tốt hơn, tôi tham gia một lớp học tiếng Hán. Trừ chủ nhật, tối nào cũng có lớp. ★ Tôi không có lớp vào thứ mấy? A chủ nhật · B thứ bảy · C thứ sáu."
      },
      {
       "n": 67,
       "zh": "爸爸希望爷爷和奶奶搬到城里跟我们一起住，但是他们不同意。爷爷说，他们不习惯住楼房，而且不愿意离开那些老邻居。",
       "star": " 爷爷奶奶不同意什么？",
       "options": [
        {
         "zh": "卖房子"
        },
        {
         "zh": "搬到城里"
        },
        {
         "zh": "检查身体"
        }
       ],
       "answer": "B",
       "vn": "Bố muốn ông bà chuyển lên thành phố sống cùng chúng tôi, nhưng ông bà không đồng ý. Ông nói ông bà không quen ở nhà tầng, hơn nữa không muốn rời xa những người hàng xóm cũ. ★ Ông bà không đồng ý điều gì? A bán nhà · B chuyển lên thành phố · C kiểm tra sức khỏe."
      },
      {
       "n": 68,
       "zh": "我妻子是出租车司机，她开车十几年了，北京每一条街道的名字她几乎都知道。她很热情，工作很努力。",
       "star": " 我妻子是个什么样的人？",
       "options": [
        {
         "zh": "比较矮"
        },
        {
         "zh": "喜欢安静"
        },
        {
         "zh": "很了解北京"
        }
       ],
       "answer": "C",
       "vn": "Vợ tôi là tài xế taxi, cô ấy lái xe mười mấy năm rồi, tên của gần như mọi con phố ở Bắc Kinh cô ấy đều biết. Cô ấy rất nhiệt tình, làm việc rất chăm chỉ. ★ Vợ tôi là người thế nào? A khá thấp · B thích yên tĩnh · C rất hiểu Bắc Kinh."
      },
      {
       "n": 69,
       "zh": "中国人常说：“好马不吃回头草。”意思是说，已经过去的就不要再想了，要向前看，别走回头路。",
       "star": " 这句话主要想告诉我们：",
       "options": [
        {
         "zh": "要多吃米饭"
        },
        {
         "zh": "兴趣很重要"
        },
        {
         "zh": "遇事要向前看"
        }
       ],
       "answer": "C",
       "vn": "Người Trung Quốc hay nói: \"Ngựa tốt không quay lại ăn cỏ cũ.\" Nghĩa là chuyện đã qua thì đừng nghĩ nữa, phải nhìn về phía trước, đừng đi đường cũ. ★ Câu nói này chủ yếu muốn nói với chúng ta: A nên ăn nhiều cơm · B sở thích rất quan trọng · C gặp chuyện phải nhìn về phía trước."
      },
      {
       "n": 70,
       "zh": "哥哥长得很高，只有一个爱好，就是打篮球。他希望有机会做篮球运动员，但是他现在的水平还不是很高。",
       "star": " 根据这段话，哥哥：",
       "options": [
        {
         "zh": "爱打篮球"
        },
        {
         "zh": "正在复习"
        },
        {
         "zh": "以前是运动员"
        }
       ],
       "answer": "A",
       "vn": "Anh trai rất cao, chỉ có một sở thích là chơi bóng rổ. Anh ấy mong có cơ hội làm vận động viên bóng rổ, nhưng trình độ hiện tại chưa cao lắm. ★ Theo đoạn văn, anh trai: A thích chơi bóng rổ · B đang ôn bài · C trước đây là vận động viên."
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
        "咖啡里",
        "放糖",
        "不要"
       ],
       "answer": "咖啡里不要放糖。",
       "vn": "Trong cà phê đừng cho đường."
      },
      {
       "n": 72,
       "words": [
        "干净了",
        "把",
        "碗和筷子",
        "洗",
        "吗"
       ],
       "answer": "把碗和筷子洗干净了吗？",
       "vn": "Rửa sạch bát và đũa chưa?"
      },
      {
       "n": 73,
       "words": [
        "孩子",
        "了",
        "突然",
        "发烧"
       ],
       "answer": "孩子突然发烧了。",
       "vn": "Đứa trẻ đột nhiên bị sốt."
      },
      {
       "n": 74,
       "words": [
        "这个句子",
        "游戏结束",
        "表示",
        "看到"
       ],
       "answer": "看到这个句子表示游戏结束。",
       "vn": "Thấy câu này nghĩa là trò chơi kết thúc."
      },
      {
       "n": 75,
       "words": [
        "她",
        "很",
        "这条绿裤子",
        "对",
        "满意"
       ],
       "answer": "她对这条绿裤子很满意。",
       "accept": [
        "对这条绿裤子，她很满意。"
       ],
       "vn": "Cô ấy rất hài lòng với chiếc quần xanh lá này."
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
       "pre": "相信我，面包会有的，牛奶",
       "py": "yě",
       "post": "会有的。",
       "answer": "也",
       "vn": "Tin tôi đi, bánh mì sẽ có, sữa cũng (也) sẽ có."
      },
      {
       "n": 77,
       "pre": "每个国家都有自己的节",
       "py": "rì",
       "post": "、自己的文化。",
       "answer": "日",
       "vn": "Mỗi quốc gia đều có ngày lễ (节日) và văn hóa của riêng mình."
      },
      {
       "n": 78,
       "pre": "请用铅笔把姓名写",
       "py": "zài",
       "post": "照片后面。",
       "answer": "在",
       "vn": "Hãy dùng bút chì viết họ tên ở (在) mặt sau tấm ảnh."
      },
      {
       "n": 79,
       "pre": "要学好画画儿，第一，要老师教得好；第二，必须",
       "py": "duō",
       "post": "练习。",
       "answer": "多",
       "vn": "Muốn học vẽ tốt, thứ nhất, thầy phải dạy giỏi; thứ hai, phải luyện tập nhiều (多)."
      },
      {
       "n": 80,
       "pre": "我想请您",
       "py": "wèi",
       "post": "我写介绍信。",
       "answer": "为",
       "vn": "Tôi muốn nhờ ông viết giúp (为) tôi một lá thư giới thiệu."
      }
     ]
    }
   ]
  }
 ]
};
