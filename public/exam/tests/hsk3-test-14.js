// Đề thi thử HSK 3 – Test 14 (đề thật H31333).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-14",
 "level": "HSK 3",
 "title": "HSK 3 - Test 14",
 "code": "H31333",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-14/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-14.mp3",
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
          101.5,
          123.4
         ],
         "script": "女：中间这个是我。\n男：你们三个太像了，要认出来还真有点儿难。",
         "scriptVn": "Nữ: Người ở giữa này là em. / Nam: Ba người trông giống nhau quá, nhận ra đúng là hơi khó."
        },
        {
         "n": 2,
         "answer": "B",
         "audio": [
          129.1,
          152.5
         ],
         "script": "男：你看，那只鸟多可爱啊。\n女：是，听说它还很聪明呢，会学人说话。",
         "scriptVn": "Nam: Em xem, con chim kia đáng yêu biết bao. / Nữ: Vâng, nghe nói nó còn rất thông minh, biết bắt chước người nói."
        },
        {
         "n": 3,
         "answer": "C",
         "audio": [
          158.1,
          182
         ],
         "script": "女：我打算去公园跑会儿步，你去不去？\n男：去，你等我一下，我换双运动鞋。",
         "scriptVn": "Nữ: Em định ra công viên chạy bộ một lát, anh đi không? / Nam: Đi, em đợi anh chút, anh thay đôi giày thể thao."
        },
        {
         "n": 4,
         "answer": "A",
         "audio": [
          187.7,
          206.9
         ],
         "script": "男：服务员，这个菜是甜的吗？\n女：这个吗？是有点儿甜。",
         "scriptVn": "Nam: Phục vụ ơi, món này có ngọt không? / Nữ: Món này ạ? Có hơi ngọt."
        },
        {
         "n": 5,
         "answer": "F",
         "audio": [
          212.6,
          235.8
         ],
         "script": "女：医生，我的手没事吧？\n男：问题不大，但你洗脸洗澡的时候要多注意点儿。",
         "scriptVn": "Nữ: Bác sĩ, tay tôi không sao chứ? / Nam: Vấn đề không lớn, nhưng khi rửa mặt, tắm rửa phải chú ý hơn."
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
          247.8,
          271.9
         ],
         "script": "男：妈，我快迟到了，早饭我不吃了。\n女：那你把面包和苹果带上，下了课吃。",
         "scriptVn": "Nam: Mẹ ơi, con sắp muộn rồi, con không ăn sáng đâu. / Nữ: Vậy con mang bánh mì và táo theo, tan học thì ăn."
        },
        {
         "n": 7,
         "answer": "E",
         "audio": [
          277.6,
          303.8
         ],
         "script": "女：奇怪，你怎么还在上网？不是要和小王去打篮球吗？\n男：他感冒了，不去了。",
         "scriptVn": "Nữ: Lạ thật, sao anh vẫn còn lên mạng? Chẳng phải định đi chơi bóng rổ với Tiểu Vương à? / Nam: Cậu ấy bị cảm, không đi nữa."
        },
        {
         "n": 8,
         "answer": "A",
         "audio": [
          309.4,
          333.1
         ],
         "script": "男：箱子我搬上来了，放哪儿啊？\n女：放儿子房间，这两个箱子里都是他的东西。",
         "scriptVn": "Nam: Vali anh mang lên rồi, để đâu đây? / Nữ: Để vào phòng con trai, trong hai cái vali này toàn đồ của nó."
        },
        {
         "n": 9,
         "answer": "C",
         "audio": [
          338.8,
          371.2
         ],
         "script": "女：爸爸，我有点儿害怕，我骑上车以后你也别走啊。\n男：放心，我就在你旁边。眼睛看着前面，慢慢地骑。",
         "scriptVn": "Nữ: Bố ơi, con hơi sợ, con lên xe rồi bố cũng đừng đi nhé. / Nam: Yên tâm, bố ở ngay bên cạnh con. Mắt nhìn phía trước, đạp từ từ thôi."
        },
        {
         "n": 10,
         "answer": "B",
         "audio": [
          376.9,
          400.9
         ],
         "script": "男：两瓶啤酒，一个笔记本，一共三十块八角五分。\n女：好的，我刷卡。",
         "scriptVn": "Nam: Hai chai bia, một quyển sổ, tổng cộng ba mươi tệ tám hào năm xu. / Nữ: Vâng, tôi quẹt thẻ."
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
       "star": "他以前就认识李医生。",
       "answer": true,
       "audio": [
        498.3,
        530
       ],
       "script": "李医生过去也住这儿，是我们的老邻居，后来为了工作方便才搬走的。",
       "scriptVn": "Bác sĩ Lý trước đây cũng sống ở đây, là hàng xóm cũ của chúng tôi, sau vì tiện cho công việc mới chuyển đi.",
       "starVn": "Trước đây anh ấy đã quen bác sĩ Lý."
      },
      {
       "n": 12,
       "star": "那家店面条儿一般。",
       "answer": false,
       "audio": [
        537.7,
        569.5
       ],
       "script": "这家店的面条儿做得很不错，特别是鸡蛋面，非常有名。你要不要来一碗？",
       "scriptVn": "Mì của quán này làm rất ngon, đặc biệt là mì trứng, rất nổi tiếng. Bạn có muốn ăn một bát không?",
       "starVn": "Mì của quán đó bình thường."
      },
      {
       "n": 13,
       "star": "越着急越容易出错。",
       "answer": true,
       "audio": [
        577.3,
        608.9
       ],
       "script": "遇到问题不要着急，因为越着急越容易出错，这样问题就更不好解决了。",
       "scriptVn": "Gặp vấn đề đừng sốt ruột, vì càng sốt ruột càng dễ sai, như vậy vấn đề càng khó giải quyết.",
       "starVn": "Càng sốt ruột càng dễ sai."
      },
      {
       "n": 14,
       "star": "那些灯晚上不开。",
       "answer": false,
       "audio": [
        616.7,
        647.8
       ],
       "script": "街道两边的花灯都是为节日准备的，到了晚上，灯打开后，漂亮极了。",
       "scriptVn": "Đèn lồng hai bên đường đều chuẩn bị cho ngày lễ, đến tối bật đèn lên thì đẹp vô cùng.",
       "starVn": "Những chiếc đèn đó buổi tối không bật."
      },
      {
       "n": 15,
       "star": "张晴还没开始上班。",
       "answer": false,
       "audio": [
        655.7,
        698.9
       ],
       "script": "她叫张晴，是今年秋天参加工作的，现在教三年级的数学。她工作认真努力，对人也很热情，大家都喜欢她。",
       "scriptVn": "Cô ấy tên là Trương Tình, bắt đầu đi làm từ mùa thu năm nay, bây giờ dạy toán lớp ba. Cô làm việc chăm chỉ nghiêm túc, đối với mọi người cũng rất nhiệt tình, ai cũng quý cô.",
       "starVn": "Trương Tình vẫn chưa bắt đầu đi làm."
      },
      {
       "n": 16,
       "star": "他想去医院。",
       "answer": true,
       "audio": [
        706.6,
        740.4
       ],
       "script": "经理，刚才学校给我打电话，说我儿子突然身体不舒服，被送到医院去了，我想请假去看看。",
       "scriptVn": "Giám đốc, lúc nãy trường học gọi điện cho tôi, nói con trai tôi đột nhiên không khỏe, đã được đưa vào bệnh viện, tôi muốn xin nghỉ đi xem sao.",
       "starVn": "Anh ấy muốn đi bệnh viện."
      },
      {
       "n": 17,
       "star": "他选择去北京读书。",
       "answer": false,
       "audio": [
        748.1,
        779.1
       ],
       "script": "我最后还是决定去北京找工作，那儿机会多，而且我爸妈也同意了。",
       "scriptVn": "Cuối cùng tôi vẫn quyết định lên Bắc Kinh tìm việc, ở đó nhiều cơ hội, hơn nữa bố mẹ tôi cũng đồng ý rồi.",
       "starVn": "Anh ấy chọn đi Bắc Kinh học."
      },
      {
       "n": 18,
       "star": "客人都来了。",
       "answer": false,
       "audio": [
        786.8,
        819.5
       ],
       "script": "小谢，还有两位客人没到，他们是三号中午的飞机，到时候你找司机过去接一下他们。",
       "scriptVn": "Tiểu Tạ, còn hai vị khách chưa đến, họ đi chuyến bay trưa ngày mùng 3, đến lúc đó cậu tìm tài xế ra đón họ nhé.",
       "starVn": "Khách đã đến đủ cả."
      },
      {
       "n": 19,
       "star": "月亮离我们更近。",
       "answer": true,
       "audio": [
        827.2,
        866.9
       ],
       "script": "虽然太阳比月亮大得多，但是在我们看来，它们几乎一样大，这是因为月亮离我们近，太阳离我们远。",
       "scriptVn": "Tuy mặt trời lớn hơn mặt trăng rất nhiều, nhưng trong mắt chúng ta chúng gần như to bằng nhau, đó là vì mặt trăng ở gần chúng ta, còn mặt trời ở xa.",
       "starVn": "Mặt trăng ở gần chúng ta hơn."
      },
      {
       "n": 20,
       "star": "他觉得国家图书馆很安静。",
       "answer": true,
       "audio": [
        874.6,
        918.4
       ],
       "script": "上大学时，我喜欢去国家图书馆看书学习。那儿书多，环境也好，非常安静，我常常在那儿一坐就是一下午。",
       "scriptVn": "Hồi học đại học, tôi thích đến Thư viện Quốc gia đọc sách học bài. Ở đó nhiều sách, môi trường cũng tốt, rất yên tĩnh, tôi thường ngồi đó cả buổi chiều.",
       "starVn": "Anh ấy thấy Thư viện Quốc gia rất yên tĩnh."
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
         "zh": "写邮件"
        },
        {
         "zh": "帮她照相"
        },
        {
         "zh": "给她发照片"
        }
       ],
       "answer": "C",
       "audio": [
        979,
        1009.3
       ],
       "script": "女：你把我们在北京玩儿的照片发给我吧？\n男：好的，发你电子邮箱里吗？\n问：女的想让男的做什么？",
       "scriptVn": "Nữ: Anh gửi cho em ảnh chúng mình đi chơi ở Bắc Kinh nhé? / Nam: Được, gửi vào hộp thư điện tử của em à? / Hỏi: Người phụ nữ muốn người đàn ông làm gì? (A viết email · B chụp ảnh giúp cô · C gửi ảnh cho cô)"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "同学"
        },
        {
         "zh": "弟弟"
        },
        {
         "zh": "男朋友"
        }
       ],
       "answer": "C",
       "audio": [
        1020.8,
        1053.3
       ],
       "script": "男：你没带伞？你去哪儿？我送你。\n女：不用了，谢谢。我男朋友一会儿来接我。\n问：谁一会儿来接女的？",
       "scriptVn": "Nam: Em không mang ô à? Em đi đâu? Anh đưa em đi. / Nữ: Không cần đâu, cảm ơn anh. Lát nữa bạn trai em đến đón. / Hỏi: Lát nữa ai đến đón người phụ nữ? (A bạn học · B em trai · C bạn trai)"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "21：15"
        },
        {
         "zh": "21：45"
        },
        {
         "zh": "22：00"
        }
       ],
       "answer": "A",
       "audio": [
        1064.8,
        1097.4
       ],
       "script": "女：那家药店晚上几点关门？\n男：十点。现在已经九点一刻了，你要去的话就快点儿。\n问：现在几点了？",
       "scriptVn": "Nữ: Hiệu thuốc đó mấy giờ tối đóng cửa? / Nam: Mười giờ. Bây giờ đã chín giờ mười lăm rồi, nếu đi thì nhanh lên. / Hỏi: Bây giờ là mấy giờ? (A 21:15 · B 21:45 · C 22:00)"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "红色"
        },
        {
         "zh": "蓝色"
        },
        {
         "zh": "黑色"
        }
       ],
       "answer": "B",
       "audio": [
        1108.9,
        1145.7
       ],
       "script": "男：这个包是今年冬天新出的，卖得非常好。\n女：看着不错，你拿个蓝色的给我看看。\n问：女的想看哪个颜色的包？",
       "scriptVn": "Nam: Chiếc túi này là mẫu mới ra mùa đông năm nay, bán rất chạy. / Nữ: Trông được đấy, anh lấy cái màu xanh lam cho tôi xem. / Hỏi: Người phụ nữ muốn xem túi màu gì? (A đỏ · B xanh lam · C đen)"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "别客气"
        },
        {
         "zh": "欢迎再来"
        },
        {
         "zh": "相信自己"
        }
       ],
       "answer": "C",
       "audio": [
        1157.2,
        1183.9
       ],
       "script": "女：黑板上的那句话是什么意思？\n男：就是说要相信自己。\n问：那句话是什么意思？",
       "scriptVn": "Nữ: Câu trên bảng đen nghĩa là gì? / Nam: Tức là phải tin vào bản thân. / Hỏi: Câu đó nghĩa là gì? (A đừng khách sáo · B hoan nghênh lại đến · C tin vào bản thân)"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "有比赛"
        },
        {
         "zh": "要复习"
        },
        {
         "zh": "没完成作业"
        }
       ],
       "answer": "A",
       "audio": [
        1195.5,
        1236.2
       ],
       "script": "男：我有两张明天晚上的电影票，一起去看吧？\n女：对不起，我明晚要参加一个比赛，没办法和你去了。\n问：女的为什么不去看电影？",
       "scriptVn": "Nam: Anh có hai vé xem phim tối mai, đi xem cùng nhé? / Nữ: Xin lỗi, tối mai em phải tham gia một cuộc thi, không đi với anh được. / Hỏi: Vì sao người phụ nữ không đi xem phim? (A có cuộc thi · B phải ôn bài · C chưa làm xong bài tập)"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "汉语好"
        },
        {
         "zh": "了解西方"
        },
        {
         "zh": "学过新闻"
        }
       ],
       "answer": "A",
       "audio": [
        1247.7,
        1287.2
       ],
       "script": "女：我对那个工作很感兴趣，不知道他们想找什么样的人？\n男：汉语必须要好，而且要了解中国文化。\n问：那个工作有什么要求？",
       "scriptVn": "Nữ: Tôi rất hứng thú với công việc đó, không biết họ muốn tìm người như thế nào? / Nam: Tiếng Hán phải giỏi, hơn nữa phải hiểu văn hóa Trung Quốc. / Hỏi: Công việc đó có yêu cầu gì? (A giỏi tiếng Hán · B hiểu phương Tây · C từng học báo chí)"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "胖了"
        },
        {
         "zh": "发烧了"
        },
        {
         "zh": "想吃鱼"
        }
       ],
       "answer": "A",
       "audio": [
        1298.7,
        1333.9
       ],
       "script": "男：我看你都没怎么动筷子，是不是不爱吃羊肉？\n女：不是，我最近胖了好几斤，想少吃点儿肉。\n问：女的最近怎么了？",
       "scriptVn": "Nam: Anh thấy em hầu như không động đũa, có phải không thích ăn thịt dê không? / Nữ: Không phải, dạo này em béo lên mấy cân, muốn ăn ít thịt thôi. / Hỏi: Dạo này người phụ nữ làm sao? (A béo lên · B bị sốt · C muốn ăn cá)"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "没起床"
        },
        {
         "zh": "刷了两次牙"
        },
        {
         "zh": "不爱吃米饭"
        }
       ],
       "answer": "B",
       "audio": [
        1345.4,
        1375.7
       ],
       "script": "女：你不是刷过牙了吗？怎么又在刷？\n男：我刚才喝了杯牛奶。\n问：关于男的，可以知道什么？",
       "scriptVn": "Nữ: Chẳng phải anh đánh răng rồi à? Sao lại đánh nữa? / Nam: Lúc nãy anh vừa uống một cốc sữa. / Hỏi: Về người đàn ông, có thể biết gì? (A chưa dậy · B đánh răng hai lần · C không thích ăn cơm)"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "教室"
        },
        {
         "zh": "动物园"
        },
        {
         "zh": "火车站"
        }
       ],
       "answer": "B",
       "audio": [
        1387.3,
        1420.7
       ],
       "script": "男：你以前来过这个动物园？\n女：对，去年来过一次，那时熊猫馆还没开呢。\n问：他们最可能在哪儿？",
       "scriptVn": "Nam: Trước đây em đã đến vườn thú này chưa? / Nữ: Rồi, năm ngoái đến một lần, lúc đó khu gấu trúc còn chưa mở. / Hỏi: Họ nhiều khả năng đang ở đâu? (A lớp học · B vườn thú · C ga tàu hỏa)"
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
         "zh": "很快乐"
        },
        {
         "zh": "没带护照"
        },
        {
         "zh": "信用卡不见了"
        }
       ],
       "answer": "B",
       "audio": [
        1501.6,
        1548.6
       ],
       "script": "男：您好，我想办一张银行卡。\n女：外国人办银行卡需要护照。您带了吗？\n男：没有。除了护照，还需要别的吗？\n女：不用，护照就可以了。\n问：关于男的，可以知道什么？",
       "scriptVn": "Nam: Chào chị, tôi muốn làm một thẻ ngân hàng. / Nữ: Người nước ngoài làm thẻ ngân hàng cần hộ chiếu. Anh có mang không? / Nam: Không. Ngoài hộ chiếu còn cần gì khác không? / Nữ: Không cần, hộ chiếu là được. / Hỏi: Về người đàn ông, có thể biết gì? (A rất vui · B không mang hộ chiếu · C mất thẻ tín dụng)"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "明天生日"
        },
        {
         "zh": "爱吃香蕉"
        },
        {
         "zh": "想买蛋糕"
        }
       ],
       "answer": "C",
       "audio": [
        1560.1,
        1609
       ],
       "script": "女：公司旁边新开的那家蛋糕店怎么样？\n男：还不错，你要买蛋糕吗？\n女：对，过两天是我丈夫的生日。\n男：那家店的水果蛋糕很好吃，你可以试试。\n问：关于女的，可以知道什么？",
       "scriptVn": "Nữ: Tiệm bánh ga-tô mới mở cạnh công ty thế nào? / Nam: Cũng được, chị muốn mua bánh à? / Nữ: Ừ, vài hôm nữa là sinh nhật chồng tôi. / Nam: Bánh hoa quả của tiệm đó rất ngon, chị có thể thử. / Hỏi: Về người phụ nữ, có thể biết gì? (A mai là sinh nhật · B thích ăn chuối · C muốn mua bánh ga-tô)"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "机场"
        },
        {
         "zh": "商店"
        },
        {
         "zh": "宾馆"
        }
       ],
       "answer": "A",
       "audio": [
        1620.7,
        1663.5
       ],
       "script": "男：小姐，请把您的行李箱打开一下。\n女：有什么问题吗？\n男：您的箱子里有一瓶水，这是不能带上飞机的。\n女：对不起，我忘了拿出来了。\n问：他们最可能在哪儿？",
       "scriptVn": "Nam: Thưa chị, mời chị mở vali ra. / Nữ: Có vấn đề gì à? / Nam: Trong vali của chị có một chai nước, cái này không được mang lên máy bay. / Nữ: Xin lỗi, tôi quên lấy ra. / Hỏi: Họ nhiều khả năng đang ở đâu? (A sân bay · B cửa hàng · C khách sạn)"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "很贵"
        },
        {
         "zh": "楼层高"
        },
        {
         "zh": "太旧了"
        }
       ],
       "answer": "B",
       "audio": [
        1675.1,
        1729.9
       ],
       "script": "女：您对这个房子还满意吗？\n男：别的都不错，就是没电梯，六层高了点儿。\n女：三楼还有一个这样的房子，但要贵十几万块钱。\n男：没关系。我们去看看三层那个吧。\n问：男的觉得那个房子怎么样？",
       "scriptVn": "Nữ: Anh có hài lòng với căn nhà này không? / Nam: Những thứ khác đều được, chỉ là không có thang máy, tầng sáu hơi cao. / Nữ: Tầng ba còn một căn như thế này, nhưng đắt hơn hơn chục vạn tệ. / Nam: Không sao. Chúng ta đi xem căn tầng ba đi. / Hỏi: Người đàn ông thấy căn nhà đó thế nào? (A rất đắt · B tầng cao · C cũ quá)"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "渴了"
        },
        {
         "zh": "很饿"
        },
        {
         "zh": "没听懂"
        }
       ],
       "answer": "A",
       "audio": [
        1741.4,
        1778.8
       ],
       "script": "男：走了这么久，累了吧？\n女：不累，就是有点儿渴。\n男：前面那条街上有个咖啡馆儿，我们去喝点儿东西吧。\n女：好的。\n问：女的怎么了？",
       "scriptVn": "Nam: Đi lâu thế rồi, mệt không? / Nữ: Không mệt, chỉ hơi khát. / Nam: Con phố phía trước có một quán cà phê, mình vào uống gì đó đi. / Nữ: Vâng. / Hỏi: Người phụ nữ làm sao? (A khát rồi · B rất đói · C nghe không hiểu)"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "下周末"
        },
        {
         "zh": "今天下午"
        },
        {
         "zh": "半个月后"
        }
       ],
       "answer": "A",
       "audio": [
        1790.4,
        1824.3
       ],
       "script": "女：你要去南京旅游？什么时候？\n男：下个周末。\n女：要去多长时间？\n男：一个星期吧。\n问：男的打算什么时候去旅游？",
       "scriptVn": "Nữ: Anh định đi du lịch Nam Kinh à? Khi nào? / Nam: Cuối tuần sau. / Nữ: Đi bao lâu? / Nam: Chắc một tuần. / Hỏi: Người đàn ông định khi nào đi du lịch? (A cuối tuần sau · B chiều nay · C nửa tháng sau)"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "走右边"
        },
        {
         "zh": "写名字"
        },
        {
         "zh": "给他介绍花"
        }
       ],
       "answer": "C",
       "audio": [
        1835.8,
        1880
       ],
       "script": "男：你好，我想买些花送给妈妈。\n女：您想要哪一种呢？\n男：我也不知道，能给我介绍一下吗？\n女：当然可以，您先来左边这儿看看。\n问：男的希望女的做什么？",
       "scriptVn": "Nam: Chào chị, tôi muốn mua ít hoa tặng mẹ. / Nữ: Anh muốn loại nào ạ? / Nam: Tôi cũng không biết, chị giới thiệu giúp tôi được không? / Nữ: Tất nhiên được, anh lại đây bên trái xem trước. / Hỏi: Người đàn ông mong người phụ nữ làm gì? (A đi bên phải · B viết tên · C giới thiệu hoa cho anh)"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "上网买"
        },
        {
         "zh": "找老王借"
        },
        {
         "zh": "先去还书"
        }
       ],
       "answer": "B",
       "audio": [
        1891.6,
        1939.6
       ],
       "script": "女：你有《历史和文化》这本书吗？\n男：没有，你去图书馆看看，那儿应该有。\n女：我去过了，已经被借走了。\n男：那你问问老王，我记得他有这本书。\n问：男的让女的怎么做？",
       "scriptVn": "Nữ: Anh có cuốn \"Lịch sử và văn hóa\" không? / Nam: Không, em đến thư viện xem, ở đó chắc có. / Nữ: Em đến rồi, bị mượn mất rồi. / Nam: Vậy em hỏi ông Vương xem, anh nhớ ông ấy có cuốn này. / Hỏi: Người đàn ông bảo người phụ nữ làm thế nào? (A mua trên mạng · B mượn ông Vương · C đi trả sách trước)"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "很瘦"
        },
        {
         "zh": "很老"
        },
        {
         "zh": "跑得快"
        }
       ],
       "answer": "C",
       "audio": [
        1951.2,
        1995.6
       ],
       "script": "男：小李，这是你选的马？也太矮了吧。\n女：你别看它个子不高，但跑起来比其他马都快。\n男：真的吗？\n女：不信你骑上去试试。\n问：小李选的马怎么样？",
       "scriptVn": "Nam: Tiểu Lý, đây là con ngựa em chọn à? Thấp quá vậy. / Nữ: Anh đừng thấy nó không cao, chạy lên còn nhanh hơn những con khác. / Nam: Thật à? / Nữ: Không tin anh cưỡi thử xem. / Hỏi: Con ngựa Tiểu Lý chọn thế nào? (A rất gầy · B rất già · C chạy nhanh)"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "离得近"
        },
        {
         "zh": "没钱坐车"
        },
        {
         "zh": "出租车坏了"
        }
       ],
       "answer": "A",
       "audio": [
        2007.1,
        2060.4
       ],
       "script": "女：都等了快二十分钟了，一辆车也没来。\n男：别着急，应该快来了。\n女：从这儿到那家饭店其实就两站地，我们走过去吧。\n男：也好，这样还能锻炼身体呢。\n问：女的为什么想走路过去？",
       "scriptVn": "Nữ: Đợi gần hai mươi phút rồi mà chẳng có chiếc xe nào đến. / Nam: Đừng sốt ruột, chắc sắp đến rồi. / Nữ: Từ đây đến nhà hàng đó thật ra chỉ có hai bến, mình đi bộ qua đi. / Nam: Cũng được, như vậy còn rèn luyện sức khỏe. / Hỏi: Vì sao người phụ nữ muốn đi bộ? (A gần · B không có tiền đi xe · C taxi hỏng)"
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
         "zh": "妹妹爱唱歌，也喜欢跳舞。",
         "vn": "Em gái thích hát, cũng thích nhảy."
        },
        {
         "k": "B",
         "zh": "校长，外面有位姓夏的先生找您。",
         "vn": "Thưa hiệu trưởng, bên ngoài có một ông họ Hạ tìm thầy."
        },
        {
         "k": "C",
         "zh": "现在用电脑和手机上网很方便，年轻人都喜欢在网上聊天儿。",
         "vn": "Bây giờ dùng máy tính và điện thoại lên mạng rất tiện, người trẻ đều thích trò chuyện trên mạng."
        },
        {
         "k": "D",
         "zh": "看什么节目呢？声音这么大！",
         "vn": "Xem chương trình gì thế? Tiếng to thế!"
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "你想吃什么水果？我一会儿去超市。",
         "vn": "Bạn muốn ăn hoa quả gì? Lát nữa tôi đi siêu thị."
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "哥哥正在学习，你关小点儿。",
         "vn": "Anh trai đang học bài, em vặn nhỏ lại chút.",
         "answer": "D"
        },
        {
         "n": 42,
         "zh": "冰箱里还有西瓜，先别买了。",
         "vn": "Trong tủ lạnh còn dưa hấu, đừng mua vội.",
         "answer": "F"
        },
        {
         "n": 43,
         "zh": "看报纸的人也少了，大家更愿意看电子书。",
         "vn": "Người đọc báo cũng ít đi, mọi người thích đọc sách điện tử hơn.",
         "answer": "C"
        },
        {
         "n": 44,
         "zh": "她说长大了要做个音乐老师。",
         "vn": "Em ấy nói lớn lên muốn làm giáo viên âm nhạc.",
         "answer": "A"
        },
        {
         "n": 45,
         "zh": "你先带他去会议室，我马上过去。",
         "vn": "Anh đưa ông ấy vào phòng họp trước, tôi qua ngay.",
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
         "zh": "外面又刮风又下雨的，不会影响飞机起飞吧？",
         "vn": "Bên ngoài vừa gió vừa mưa, không ảnh hưởng máy bay cất cánh chứ?"
        },
        {
         "k": "B",
         "zh": "我的中文以前很一般。",
         "vn": "Trước đây tiếng Trung của tôi rất bình thường."
        },
        {
         "k": "C",
         "zh": "不好意思，我也不太清楚，你问问别人吧。",
         "vn": "Xin lỗi, tôi cũng không rõ lắm, bạn hỏi người khác xem."
        },
        {
         "k": "D",
         "zh": "谢谢你的关心，我的脚已经好多了，能站起来了。",
         "vn": "Cảm ơn bạn đã quan tâm, chân tôi đã đỡ nhiều rồi, đứng dậy được rồi."
        },
        {
         "k": "E",
         "zh": "词典太多了，一共有50本呢。",
         "vn": "Từ điển nhiều quá, tổng cộng những 50 cuốn."
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "你好，这附近有银行吗？",
         "vn": "Chào bạn, gần đây có ngân hàng không?",
         "answer": "C"
        },
        {
         "n": 47,
         "zh": "后来在马老师的帮助下，水平才有了很大提高。",
         "vn": "Sau này nhờ sự giúp đỡ của thầy Mã, trình độ mới tiến bộ rất nhiều.",
         "answer": "B"
        },
        {
         "n": 48,
         "zh": "但医生说还不能走路，要多休息。",
         "vn": "Nhưng bác sĩ nói vẫn chưa đi lại được, phải nghỉ ngơi nhiều.",
         "answer": "D"
        },
        {
         "n": 49,
         "zh": "我也担心呢，希望不要晚点。",
         "vn": "Tôi cũng lo đây, mong là không bị trễ chuyến.",
         "answer": "A"
        },
        {
         "n": 50,
         "zh": "你回班里找几个学生帮忙拿一下。",
         "vn": "Bạn về lớp tìm mấy học sinh đến giúp mang đi.",
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
         "zh": "习惯"
        },
        {
         "k": "B",
         "zh": "成绩"
        },
        {
         "k": "C",
         "zh": "小心"
        },
        {
         "k": "D",
         "zh": "终于"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "难过"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "上课时,我（　）边听老师讲边做笔记。",
         "vn": "Khi học trên lớp, tôi (quen) vừa nghe thầy giảng vừa ghi chép.",
         "answer": "A"
        },
        {
         "n": 52,
         "zh": "别（　）了，奶奶一定会好起来的。",
         "vn": "Đừng (buồn) nữa, bà nhất định sẽ khỏe lại.",
         "answer": "F"
        },
        {
         "n": 53,
         "zh": "这个练习题我（　）做出来了。",
         "vn": "Bài luyện tập này cuối cùng tôi (cũng) làm ra rồi.",
         "answer": "D"
        },
        {
         "n": 54,
         "zh": "游泳时，要（　）别让鼻子和耳朵进水。",
         "vn": "Khi bơi phải (cẩn thận) đừng để nước vào mũi và tai.",
         "answer": "C"
        },
        {
         "n": 55,
         "zh": "考试结束两周后就能在网上查（　）了。",
         "vn": "Hai tuần sau khi thi xong là có thể tra (điểm) trên mạng.",
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
         "zh": "只"
        },
        {
         "k": "B",
         "zh": "绿"
        },
        {
         "k": "C",
         "zh": "需要"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "自己"
        },
        {
         "k": "F",
         "zh": "简单"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：先生，这是菜单，请问您（　）什么？\nB：先来一杯红茶，谢谢。",
         "vn": "A: Thưa anh, đây là thực đơn, xin hỏi anh (cần) gì ạ? / B: Cho tôi một cốc hồng trà trước, cảm ơn.",
         "answer": "C"
        },
        {
         "n": 57,
         "zh": "A：这个花瓶是你（　）做的？\nB：对，是我用饮料瓶子做的，漂亮吧？",
         "vn": "A: Cái bình hoa này là bạn (tự) làm à? / B: Đúng, tôi làm từ chai nước ngọt đấy, đẹp không?",
         "answer": "E"
        },
        {
         "n": 58,
         "zh": "A：今天天气真好，我们去爬山吧？\nB：好啊，春天到了，山上的树应该都（　）了。",
         "vn": "A: Hôm nay trời đẹp quá, chúng ta đi leo núi nhé? / B: Được đấy, mùa xuân đến rồi, cây trên núi chắc đều (xanh) rồi.",
         "answer": "B"
        },
        {
         "n": 59,
         "zh": "A：我的皮鞋怎么少了一（　）？\nB：看看是不是在椅子下面。",
         "vn": "A: Sao giày da của tôi mất một (chiếc)? / B: Xem có phải ở dưới ghế không.",
         "answer": "A"
        },
        {
         "n": 60,
         "zh": "A：“大嘴吃小嘴”，是什么字？\nB：太（　）了，嘴就是口，所以是“回家”的“回”，对不对？",
         "vn": "A: \"Miệng to ăn miệng nhỏ\" là chữ gì? / B: (Dễ) quá, miệng là 口, nên là chữ 回 trong 回家, đúng không?",
         "answer": "F"
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
       "zh": "昨天是中秋节，我下班回到家发现丈夫把房间打扫得干干净净，还做了一桌子我爱吃的菜。",
       "star": "她丈夫：",
       "options": [
        {
         "zh": "吃饱了"
        },
        {
         "zh": "做了很多菜"
        },
        {
         "zh": "准备了礼物"
        }
       ],
       "answer": "B",
       "vn": "Hôm qua là Tết Trung thu, tan làm về nhà tôi thấy chồng đã dọn phòng sạch sẽ tinh tươm, còn nấu một bàn toàn món tôi thích. ★ Chồng cô ấy: A ăn no rồi · B nấu rất nhiều món · C chuẩn bị quà."
      },
      {
       "n": 62,
       "zh": "我跟小高不但长得有点儿像，名字也只差一个字，所以很多新来的同事都认为我们是姐妹。",
       "star": "她和小高：",
       "options": [
        {
         "zh": "名字一样"
        },
        {
         "zh": "都生气了"
        },
        {
         "zh": "长得比较像"
        }
       ],
       "answer": "C",
       "vn": "Tôi và Tiểu Cao không những trông hơi giống nhau mà tên cũng chỉ khác một chữ, nên nhiều đồng nghiệp mới đến tưởng chúng tôi là chị em. ★ Cô ấy và Tiểu Cao: A tên giống nhau · B đều giận rồi · C trông khá giống nhau."
      },
      {
       "n": 63,
       "zh": "我从小就喜欢运动，这可能和爸爸是体育老师有关系。他常说：只有经常运动，才能有个健康的身体。从8岁起，我每天早上都去跑步，到现在都20年了。",
       "star": "他爸爸认为：",
       "options": [
        {
         "zh": "运动很重要"
        },
        {
         "zh": "慢跑对腿好"
        },
        {
         "zh": "要常检查身体"
        }
       ],
       "answer": "A",
       "vn": "Từ nhỏ tôi đã thích vận động, có lẽ vì bố là giáo viên thể dục. Bố thường nói: chỉ có thường xuyên vận động mới có cơ thể khỏe mạnh. Từ năm 8 tuổi, sáng nào tôi cũng chạy bộ, đến nay đã 20 năm. ★ Bố anh ấy cho rằng: A vận động rất quan trọng · B chạy chậm tốt cho chân · C phải thường kiểm tra sức khỏe."
      },
      {
       "n": 64,
       "zh": "不要让你的孩子爱上电视。你想想，如果不在电视机前，他会做什么呢？他可能在读书、画画儿或者和其他孩子玩儿，这些都比长时间坐在电视前好得多。",
       "star": "这段话主要想告诉我们，不应让孩子：",
       "options": [
        {
         "zh": "太忙"
        },
        {
         "zh": "长时间看电视"
        },
        {
         "zh": "总是玩儿游戏"
        }
       ],
       "answer": "B",
       "vn": "Đừng để con bạn mê ti vi. Bạn thử nghĩ xem, nếu không ngồi trước ti vi, cháu sẽ làm gì? Có thể cháu đọc sách, vẽ tranh hoặc chơi với các bạn, những việc này đều tốt hơn nhiều so với ngồi lâu trước ti vi. ★ Đoạn văn chủ yếu muốn nói không nên để trẻ: A quá bận · B xem ti vi lâu · C lúc nào cũng chơi game."
      },
      {
       "n": 65,
       "zh": "我最大的爱好是旅游。这几年，我去了很多国家和城市。如果有人问我：“你觉得世界上哪儿最漂亮？”我会回答：“下一个要去的地方。”",
       "star": "他：",
       "options": [
        {
         "zh": "最近很累"
        },
        {
         "zh": "要出国留学"
        },
        {
         "zh": "去过很多地方"
        }
       ],
       "answer": "C",
       "vn": "Sở thích lớn nhất của tôi là du lịch. Mấy năm nay tôi đã đến rất nhiều quốc gia và thành phố. Nếu có ai hỏi tôi: \"Bạn thấy nơi nào trên thế giới đẹp nhất?\" tôi sẽ trả lời: \"Nơi tiếp theo tôi sẽ đến.\" ★ Anh ấy: A dạo này rất mệt · B sắp đi du học · C đã đến nhiều nơi."
      },
      {
       "n": 66,
       "zh": "您好，我是607房间的客人，我房间的空调坏了，晚上热得没法睡觉，您找个人来看看吧。",
       "star": "那个房间：",
       "options": [
        {
         "zh": "没热水"
        },
        {
         "zh": "门打不开"
        },
        {
         "zh": "空调不能用"
        }
       ],
       "answer": "C",
       "vn": "Chào anh, tôi là khách phòng 607, điều hòa phòng tôi hỏng rồi, buổi tối nóng không ngủ được, anh tìm người đến xem giúp nhé. ★ Căn phòng đó: A không có nước nóng · B cửa không mở được · C điều hòa không dùng được."
      },
      {
       "n": 67,
       "zh": "从地铁站出来后，先向东走1000来米，在第一个路口再往北走一点儿就到了。这样吧，我给你画个地图，你一看就明白了。",
       "star": "他接下来要做什么？",
       "options": [
        {
         "zh": "画地图"
        },
        {
         "zh": "讲故事"
        },
        {
         "zh": "买自行车"
        }
       ],
       "answer": "A",
       "vn": "Ra khỏi ga tàu điện ngầm, đi về phía đông khoảng 1000 mét trước, đến ngã tư đầu tiên đi tiếp về phía bắc một chút là đến. Thế này nhé, tôi vẽ cho bạn tấm bản đồ, nhìn là hiểu ngay. ★ Tiếp theo anh ấy sẽ làm gì? A vẽ bản đồ · B kể chuyện · C mua xe đạp."
      },
      {
       "n": 68,
       "zh": "我下班时经过我们常去的那家店，看见那儿现在“买二送一”，买两件衣服就送一个帽子。我们周日去看看怎么样？",
       "star": "如果买两件衬衫，那家店会：",
       "options": [
        {
         "zh": "送条裤子"
        },
        {
         "zh": "送个帽子"
        },
        {
         "zh": "便宜100元"
        }
       ],
       "answer": "B",
       "vn": "Lúc tan làm tôi đi qua cửa hàng chúng ta hay đến, thấy bây giờ đang \"mua hai tặng một\", mua hai bộ quần áo tặng một cái mũ. Chủ nhật mình đi xem nhé? ★ Nếu mua hai áo sơ mi, cửa hàng đó sẽ: A tặng một chiếc quần · B tặng một cái mũ · C giảm 100 tệ."
      },
      {
       "n": 69,
       "zh": "李阿姨是东北人，她说东北的冬天比南方冷多了，而且还经常下雪。这对从小到大都没离开过南方的我来说新鲜极了。",
       "star": "他：",
       "options": [
        {
         "zh": "变化大"
        },
        {
         "zh": "是南方人"
        },
        {
         "zh": "害怕阴天"
        }
       ],
       "answer": "B",
       "vn": "Cô Lý là người Đông Bắc, cô nói mùa đông ở Đông Bắc lạnh hơn miền Nam nhiều, lại hay có tuyết. Điều này với tôi, người từ nhỏ đến lớn chưa từng rời miền Nam, thật mới mẻ vô cùng. ★ Anh ấy: A thay đổi lớn · B là người miền Nam · C sợ trời râm."
      },
      {
       "n": 70,
       "zh": "爷爷和奶奶结婚45年了，到现在爷爷还记得他们第一次见面时，奶奶头发长长的，穿了一条白裙子，非常漂亮。",
       "star": "第一次和爷爷见面时，奶奶：",
       "options": [
        {
         "zh": "是短发"
        },
        {
         "zh": "很聪明"
        },
        {
         "zh": "穿着裙子"
        }
       ],
       "answer": "C",
       "vn": "Ông bà đã kết hôn 45 năm, đến giờ ông vẫn nhớ lần đầu gặp nhau bà để tóc dài, mặc một chiếc váy trắng, rất xinh đẹp. ★ Lần đầu gặp ông, bà: A để tóc ngắn · B rất thông minh · C mặc váy."
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
        "我",
        "带铅笔",
        "忘了"
       ],
       "answer": "我忘了带铅笔。",
       "vn": "Tôi quên mang bút chì."
      },
      {
       "n": 72,
       "words": [
        "他周末上午",
        "踢足球",
        "去",
        "经常"
       ],
       "answer": "他周末上午经常去踢足球。",
       "vn": "Sáng cuối tuần anh ấy thường đi đá bóng."
      },
      {
       "n": 73,
       "words": [
        "一共",
        "这里",
        "多少只猫",
        "有"
       ],
       "answer": "这里一共有多少只猫？",
       "vn": "Ở đây tổng cộng có bao nhiêu con mèo?"
      },
      {
       "n": 74,
       "words": [
        "很大",
        "这件事情",
        "对",
        "影响",
        "叔叔的"
       ],
       "answer": "这件事情对叔叔的影响很大。",
       "vn": "Việc này ảnh hưởng rất lớn đến chú."
      },
      {
       "n": 75,
       "words": [
        "请帮我",
        "拿",
        "盘子",
        "一下"
       ],
       "answer": "请帮我拿一下盘子。",
       "vn": "Lấy giúp tôi cái đĩa với."
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
       "py": "Nǚ",
       "post": "儿疼得哭了起来。",
       "answer": "女",
       "vn": "Con gái (女儿) đau đến bật khóc."
      },
      {
       "n": 77,
       "pre": "这个季节草都黄了，没有夏",
       "py": "tiān",
       "post": "那么好看了。",
       "answer": "天",
       "vn": "Mùa này cỏ đều vàng hết, không đẹp bằng mùa hè (夏天)."
      },
      {
       "n": 78,
       "pre": "儿子笑着说：“小狗，",
       "py": "zài",
       "post": "见。”",
       "answer": "再",
       "vn": "Con trai cười nói: \"Chó con, tạm biệt (再见).\""
      },
      {
       "n": 79,
       "pre": "哥哥",
       "py": "shēng",
       "post": "病了，这两天妈妈一直在家里照顾他。",
       "answer": "生",
       "vn": "Anh trai bị ốm (生病), mấy hôm nay mẹ luôn ở nhà chăm sóc anh ấy."
      },
      {
       "n": 80,
       "pre": "洗手间你找过了吗？上次你就",
       "py": "bǎ",
       "post": "手表忘在那儿了。",
       "answer": "把",
       "vn": "Nhà vệ sinh bạn tìm chưa? Lần trước bạn đã (把) để quên đồng hồ ở đó."
      }
     ]
    }
   ]
  }
 ]
};
