// Đề thi thử HSK 3 – Test 4 (đề thật H31004).
// Cấu trúc: Nghe 40 câu, Đọc 30 câu, Viết 10 câu — tổng 80 câu, 90 phút, đạt từ 180/300.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
 "id": "hsk3-test-4",
 "level": "HSK 3",
 "title": "HSK 3 - Test 4",
 "code": "H31004",
 "durationSec": 5400,
 "maxScore": 300,
 "passScore": 180,
 "img": "/exam/img/hsk3-test-4/",
 "sections": [
  {
   "id": "listen",
   "name": "Nghe",
   "icon": "headphones",
   "audio": "/audio/exam/hsk3-test-4.mp3",
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
          109.1,
          136.1
         ],
         "script": "女：我决定从今天开始每天跑一千米。\n男：真的吗？太阳从西边出来了？",
         "scriptVn": "Nữ: Em quyết định từ hôm nay mỗi ngày chạy một nghìn mét. / Nam: Thật à? Mặt trời mọc đằng tây rồi à?"
        },
        {
         "n": 2,
         "answer": "E",
         "audio": [
          141,
          168.3
         ],
         "script": "男：饭菜都做好了，把电脑关了吧？先吃饭。\n女：好的，我做完这个题马上就来。",
         "scriptVn": "Nam: Cơm nước làm xong cả rồi, tắt máy tính đi nhé? Ăn cơm trước đã. / Nữ: Vâng, em làm xong bài này là đến ngay."
        },
        {
         "n": 3,
         "answer": "F",
         "audio": [
          173.4,
          199.7
         ],
         "script": "女：给我来一杯果汁吧，谢谢。\n男：不客气，冰箱里没有葡萄汁了，就喝这个吧。",
         "scriptVn": "Nữ: Cho tôi một cốc nước ép, cảm ơn. / Nam: Không có gì, trong tủ lạnh hết nước nho rồi, uống cái này nhé."
        },
        {
         "n": 4,
         "answer": "A",
         "audio": [
          204.8,
          232.1
         ],
         "script": "男：你的脸色不太好，又感冒了？\n女：是，我感冒都快一个星期了，还没好呢。",
         "scriptVn": "Nam: Sắc mặt em không tốt lắm, lại bị cảm à? / Nữ: Vâng, em cảm gần một tuần rồi mà vẫn chưa khỏi."
        },
        {
         "n": 5,
         "answer": "B",
         "audio": [
          237,
          262.6
         ],
         "script": "女：你站近点儿，我看看，不错，很好。\n男：有变化吗？眼镜怎么样？",
         "scriptVn": "Nữ: Anh đứng gần lại chút, để em xem, được đấy, rất đẹp. / Nam: Có thay đổi gì không? Cặp kính thế nào?"
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
          273.9,
          298.4
         ],
         "script": "男：吃块儿糖吧？很好吃。\n女：不，我最近牙疼，不敢再吃甜的东西了。",
         "scriptVn": "Nam: Ăn viên kẹo nhé? Ngon lắm. / Nữ: Thôi, dạo này em đau răng, không dám ăn đồ ngọt nữa."
        },
        {
         "n": 7,
         "answer": "E",
         "audio": [
          303.3,
          330.3
         ],
         "script": "女：要练多久才能画得像你这么好？\n男：这不是时间的问题，主要是要有兴趣。",
         "scriptVn": "Nữ: Phải luyện bao lâu mới vẽ đẹp được như anh? / Nam: Đây không phải vấn đề thời gian, chủ yếu là phải có hứng thú."
        },
        {
         "n": 8,
         "answer": "B",
         "audio": [
          335.2,
          360.7
         ],
         "script": "男：你爬那么高做什么？小心点儿！\n女：没关系，厨房的灯坏了，我换个新的。",
         "scriptVn": "Nam: Em trèo cao thế làm gì? Cẩn thận đấy! / Nữ: Không sao, đèn bếp hỏng rồi, em thay cái mới."
        },
        {
         "n": 9,
         "answer": "D",
         "audio": [
          365.6,
          390.8
         ],
         "script": "女：你的电子邮件我已经看过了，我觉得你的办法是最好的。\n男：太好了！",
         "scriptVn": "Nữ: Email của anh em đọc rồi, em thấy cách của anh là tốt nhất. / Nam: Tuyệt quá!"
        },
        {
         "n": 10,
         "answer": "C",
         "audio": [
          395.7,
          422.1
         ],
         "script": "男：真为你高兴！希望你以后能有更大的成绩。\n女：谢谢老师！我一定会努力的。",
         "scriptVn": "Nam: Thầy thật sự mừng cho em! Mong sau này em đạt thành tích lớn hơn nữa. / Nữ: Cảm ơn thầy! Em nhất định sẽ cố gắng."
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
       "star": "他没带照相机。",
       "answer": true,
       "audio": [
        528.1,
        559
       ],
       "script": "春天来了，公园里的花儿都开了，如果带上照相机就好了。",
       "scriptVn": "Mùa xuân đến rồi, hoa trong công viên đều nở, giá mà mang theo máy ảnh thì tốt.",
       "starVn": "Anh ấy không mang máy ảnh."
      },
      {
       "n": 12,
       "star": "外面下雪了。",
       "answer": false,
       "audio": [
        566.1,
        602.9
       ],
       "script": "外面风刮得特别大，很冷，你出去的时候多穿件衣服。带把伞吧？很可能会下雨。",
       "scriptVn": "Bên ngoài gió thổi rất mạnh, rất lạnh, lúc ra ngoài con mặc thêm áo nhé. Mang ô đi nhé? Rất có thể sẽ mưa.",
       "starVn": "Bên ngoài có tuyết rơi."
      },
      {
       "n": 13,
       "star": "邻居是位老人。",
       "answer": false,
       "audio": [
        610.4,
        662.8
       ],
       "script": "邻居是一位年轻的医生，他很热情，喜欢帮助别人，所以大家有什么问题，都愿意请他帮忙。",
       "scriptVn": "Hàng xóm là một bác sĩ trẻ, anh ấy rất nhiệt tình, thích giúp đỡ người khác, nên mọi người có việc gì cũng thích nhờ anh ấy giúp.",
       "starVn": "Hàng xóm là một người già."
      },
      {
       "n": 14,
       "star": "他喜欢喝牛奶。",
       "answer": false,
       "audio": [
        670.2,
        716.9
       ],
       "script": "过去，他喜欢每天早上起床后，一边吃早饭，一边看报纸。现在，他没有这个习惯了，因为太忙了，没时间了。",
       "scriptVn": "Trước đây, mỗi sáng thức dậy anh ấy thích vừa ăn sáng vừa đọc báo. Bây giờ anh ấy không còn thói quen đó nữa, vì bận quá, không có thời gian.",
       "starVn": "Anh ấy thích uống sữa."
      },
      {
       "n": 15,
       "star": "路是人走出来的。",
       "answer": true,
       "audio": [
        724,
        752.8
       ],
       "script": "开始的时候，世界上没有路，走的人多了，也就有了路。",
       "scriptVn": "Lúc đầu trên thế giới vốn không có đường, người đi nhiều thì thành đường.",
       "starVn": "Đường là do con người đi mà thành."
      },
      {
       "n": 16,
       "star": "医生认为爸爸的耳朵没问题。",
       "answer": true,
       "audio": [
        759.9,
        809.8
       ],
       "script": "最近，爸爸一直说耳朵疼。我带他去医院，但是医生说他的耳朵没问题，不用吃药，多喝些水就可以了。",
       "scriptVn": "Dạo này bố cứ kêu đau tai. Tôi đưa bố đi bệnh viện, nhưng bác sĩ nói tai bố không có vấn đề gì, không cần uống thuốc, uống nhiều nước là được.",
       "starVn": "Bác sĩ cho rằng tai của bố không có vấn đề."
      },
      {
       "n": 17,
       "star": "我和李先生是同学。",
       "answer": false,
       "audio": [
        816.9,
        857.9
       ],
       "script": "我女儿和李先生的儿子在一个学校上学。他家孩子上四年级，我女儿上六年级。",
       "scriptVn": "Con gái tôi và con trai ông Lý học cùng một trường. Con nhà ông ấy học lớp bốn, con gái tôi học lớp sáu.",
       "starVn": "Tôi và ông Lý là bạn học."
      },
      {
       "n": 18,
       "star": "朋友生病了。",
       "answer": false,
       "audio": [
        865,
        902.4
       ],
       "script": "人对人的影响是很大的，如果两个人是很好的朋友，他们可能很快就会有相同的爱好了。",
       "scriptVn": "Con người ảnh hưởng đến nhau rất lớn, nếu hai người là bạn rất thân, có thể họ sẽ nhanh chóng có cùng sở thích.",
       "starVn": "Bạn bè bị ốm."
      },
      {
       "n": 19,
       "star": "他正在打电话。",
       "answer": true,
       "audio": [
        909.6,
        947.8
       ],
       "script": "喂，姐，我刚看见您的电话，刚才我去楼下接几位客人，没带手机。您找我什么事？",
       "scriptVn": "Alô, chị ơi, em vừa thấy cuộc gọi của chị, lúc nãy em xuống dưới nhà đón mấy vị khách, không mang điện thoại. Chị tìm em có việc gì?",
       "starVn": "Anh ấy đang gọi điện thoại."
      },
      {
       "n": 20,
       "star": "那儿的人习惯说左右。",
       "answer": true,
       "audio": [
        955,
        1005.3
       ],
       "script": "那里的人不习惯说东西南北，只说左或者右。我和同事们找司机问路，他们总是回答向左走或者向右走。",
       "scriptVn": "Người ở đó không quen nói đông tây nam bắc, chỉ nói trái hoặc phải. Tôi và đồng nghiệp hỏi đường tài xế, họ luôn trả lời rẽ trái hoặc rẽ phải.",
       "starVn": "Người ở đó quen nói trái phải."
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
         "zh": "最近很忙"
        },
        {
         "zh": "打算买车"
        },
        {
         "zh": "参加工作了"
        }
       ],
       "answer": "C",
       "audio": [
        1067.7,
        1104.1
       ],
       "script": "女：你是坐地铁上班？\n男：不，我骑自行车上班，天气不好的时候，我才坐地铁。\n问：关于男的，可以知道什么？",
       "scriptVn": "Nữ: Anh đi tàu điện ngầm đi làm à? / Nam: Không, tôi đạp xe đi làm, lúc trời xấu mới đi tàu điện ngầm. / Hỏi: Về người đàn ông, có thể biết gì? (A dạo này rất bận · B định mua xe · C đã đi làm)"
      },
      {
       "n": 22,
       "options": [
        {
         "zh": "去年夏天"
        },
        {
         "zh": "去年冬天"
        },
        {
         "zh": "上个周末"
        }
       ],
       "answer": "A",
       "audio": [
        1113.7,
        1156.5
       ],
       "script": "男：你这张照片是什么时候照的，看上去跟现在不太一样。\n女：去年夏天照的，那时比较瘦，而且是短头发。\n问：照片是什么时候照的？",
       "scriptVn": "Nam: Bức ảnh này của em chụp khi nào vậy, trông không giống bây giờ lắm. / Nữ: Chụp mùa hè năm ngoái, lúc đó khá gầy, lại để tóc ngắn. / Hỏi: Bức ảnh chụp khi nào? (A mùa hè năm ngoái · B mùa đông năm ngoái · C cuối tuần trước)"
      },
      {
       "n": 23,
       "options": [
        {
         "zh": "找手机"
        },
        {
         "zh": "他要结婚了"
        },
        {
         "zh": "他要去银行"
        }
       ],
       "answer": "A",
       "audio": [
        1166.1,
        1208.3
       ],
       "script": "女：奇怪，我记得把手机放进包里了，怎么找不到了？\n男：别着急，我给你打个电话，就知道在哪儿了。\n问：男的为什么要给女的打电话？",
       "scriptVn": "Nữ: Lạ thật, em nhớ là cho điện thoại vào túi rồi, sao lại không thấy? / Nam: Đừng vội, anh gọi cho em một cuộc là biết ở đâu. / Hỏi: Vì sao người đàn ông gọi điện cho người phụ nữ? (A tìm điện thoại · B anh ấy sắp cưới · C anh ấy sắp đi ngân hàng)"
      },
      {
       "n": 24,
       "options": [
        {
         "zh": "街上"
        },
        {
         "zh": "图书馆"
        },
        {
         "zh": "饭馆儿"
        }
       ],
       "answer": "C",
       "audio": [
        1217.9,
        1248.4
       ],
       "script": "男：您好，您需要先看一下菜单吗？\n女：我在等一个朋友，过一会儿再点吧。\n问：他们最可能在哪里？",
       "scriptVn": "Nam: Chào chị, chị có muốn xem thực đơn trước không? / Nữ: Tôi đang đợi một người bạn, lát nữa gọi món nhé. / Hỏi: Họ có khả năng ở đâu nhất? (A trên phố · B thư viện · C nhà hàng)"
      },
      {
       "n": 25,
       "options": [
        {
         "zh": "不新鲜"
        },
        {
         "zh": "有点儿贵"
        },
        {
         "zh": "比超市便宜"
        }
       ],
       "answer": "A",
       "audio": [
        1258.1,
        1295.3
       ],
       "script": "女：你等一下，我们买几斤香蕉吧。\n男：还是买别的水果吧，这些香蕉像是放了很久了。\n问：男的觉得香蕉怎么样？",
       "scriptVn": "Nữ: Anh đợi chút, mình mua mấy cân chuối đi. / Nam: Mua hoa quả khác thì hơn, chỗ chuối này trông như để lâu rồi. / Hỏi: Người đàn ông thấy chuối thế nào? (A không tươi · B hơi đắt · C rẻ hơn siêu thị)"
      },
      {
       "n": 26,
       "options": [
        {
         "zh": "船长"
        },
        {
         "zh": "老师"
        },
        {
         "zh": "服务员"
        }
       ],
       "answer": "B",
       "audio": [
        1304.9,
        1340
       ],
       "script": "男：你明天上午要去哪儿？\n女：我要带学生去动物园，去看大熊猫。你一起去？\n问：女的最可能是做什么的？",
       "scriptVn": "Nam: Sáng mai chị định đi đâu? / Nữ: Tôi dẫn học sinh đi vườn thú xem gấu trúc. Anh đi cùng không? / Hỏi: Người phụ nữ có khả năng làm nghề gì nhất? (A thuyền trưởng · B giáo viên · C nhân viên phục vụ)"
      },
      {
       "n": 27,
       "options": [
        {
         "zh": "发烧了"
        },
        {
         "zh": "迟到了"
        },
        {
         "zh": "忘带机票了"
        }
       ],
       "answer": "B",
       "audio": [
        1349.6,
        1381.2
       ],
       "script": "女：你终于来了，都八点一刻了。\n男：对不起，来机场的路上才发现没带护照。\n问：男的怎么了？",
       "scriptVn": "Nữ: Cuối cùng anh cũng đến, tám giờ mười lăm rồi đấy. / Nam: Xin lỗi, trên đường ra sân bay mới phát hiện không mang hộ chiếu. / Hỏi: Người đàn ông làm sao? (A bị sốt · B đến muộn · C quên mang vé máy bay)"
      },
      {
       "n": 28,
       "options": [
        {
         "zh": "医院"
        },
        {
         "zh": "公司"
        },
        {
         "zh": "学校"
        }
       ],
       "answer": "C",
       "audio": [
        1390.8,
        1420.2
       ],
       "script": "男：请问，校长办公室在哪儿？\n女：就在前面，左边第二个办公室。\n问：他们现在在哪儿？",
       "scriptVn": "Nam: Xin hỏi, phòng hiệu trưởng ở đâu? / Nữ: Ngay phía trước, phòng thứ hai bên trái. / Hỏi: Họ đang ở đâu? (A bệnh viện · B công ty · C trường học)"
      },
      {
       "n": 29,
       "options": [
        {
         "zh": "吃饱了"
        },
        {
         "zh": "想吃羊肉"
        },
        {
         "zh": "不爱吃鱼"
        }
       ],
       "answer": "A",
       "audio": [
        1429.8,
        1463.1
       ],
       "script": "女：盘子里的蛋糕怎么没吃完啊，吃饱了吗？\n男：我不想吃了，刚才吃了很多米饭。\n问：男的是什么意思？",
       "scriptVn": "Nữ: Sao bánh ga-tô trong đĩa ăn không hết, no rồi à? / Nam: Anh không muốn ăn nữa, lúc nãy ăn nhiều cơm rồi. / Hỏi: Người đàn ông có ý gì? (A ăn no rồi · B muốn ăn thịt dê · C không thích ăn cá)"
      },
      {
       "n": 30,
       "options": [
        {
         "zh": "裙子"
        },
        {
         "zh": "历史书"
        },
        {
         "zh": "汉语字典"
        }
       ],
       "answer": "C",
       "audio": [
        1472.8,
        1516.8
       ],
       "script": "男：明天是妹妹的生日，我给她买了本汉语字典。\n女：你怎么知道她在学汉语？我还以为你不关心她的学习呢。\n问：男的要送妹妹什么？",
       "scriptVn": "Nam: Mai là sinh nhật em gái, anh mua cho nó một cuốn từ điển tiếng Hán. / Nữ: Sao anh biết nó đang học tiếng Hán? Em còn tưởng anh không quan tâm việc học của nó. / Hỏi: Người đàn ông tặng em gái gì? (A váy · B sách lịch sử · C từ điển tiếng Hán)"
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
         "zh": "弟弟"
        },
        {
         "zh": "爷爷"
        },
        {
         "zh": "叔叔和阿姨"
        }
       ],
       "answer": "C",
       "audio": [
        1594.9,
        1650.4
       ],
       "script": "男：看一下手表，现在几点了？\n女：三点，零二。说三点半到，还差半个小时呢，再等等吧。\n男：叔叔和阿姨是第一次来北京，会不会走错路了？\n女：我再打个电话问问。\n问：他们在等谁？",
       "scriptVn": "Nam: Xem đồng hồ giúp anh, bây giờ mấy giờ rồi? / Nữ: Ba giờ không hai phút. Hẹn ba rưỡi đến, còn nửa tiếng nữa, đợi thêm chút đi. / Nam: Chú và dì lần đầu đến Bắc Kinh, liệu có đi nhầm đường không? / Nữ: Để em gọi điện hỏi lại. / Hỏi: Họ đang đợi ai? (A em trai · B ông nội · C chú và dì)"
      },
      {
       "n": 32,
       "options": [
        {
         "zh": "教室"
        },
        {
         "zh": "商店"
        },
        {
         "zh": "飞机上"
        }
       ],
       "answer": "B",
       "audio": [
        1659.8,
        1714.7
       ],
       "script": "女：这椅子有点低，坐着不舒服。\n男：没关系，我们上三层去看看，那儿也有。\n女：还有桌子，我们也一起换了吧。\n男：同意。我们先看桌子椅子，然后再看看别的。\n问：他们最可能在哪儿？",
       "scriptVn": "Nữ: Cái ghế này hơi thấp, ngồi không thoải mái. / Nam: Không sao, mình lên tầng ba xem, ở đó cũng có. / Nữ: Còn cái bàn nữa, mình đổi luôn thể. / Nam: Đồng ý. Mình xem bàn ghế trước, rồi xem thứ khác. / Hỏi: Họ có khả năng ở đâu nhất? (A lớp học · B cửa hàng · C trên máy bay)"
      },
      {
       "n": 33,
       "options": [
        {
         "zh": "爬山"
        },
        {
         "zh": "骑马"
        },
        {
         "zh": "买帽子"
        }
       ],
       "answer": "A",
       "audio": [
        1724.1,
        1774.8
       ],
       "script": "男：明天是晴天还是阴天？\n女：阴天，电视上说多云。怎么了？有事情？\n男：没事，我们班明天要去爬山。\n女：爬山的时候要小心点儿。\n问：男的第二天要做什么？",
       "scriptVn": "Nam: Mai trời nắng hay âm u? / Nữ: Âm u, ti vi nói nhiều mây. Sao thế? Có việc gì à? / Nam: Không có gì, mai lớp anh đi leo núi. / Nữ: Leo núi thì cẩn thận nhé. / Hỏi: Hôm sau người đàn ông sẽ làm gì? (A leo núi · B cưỡi ngựa · C mua mũ)"
      },
      {
       "n": 34,
       "options": [
        {
         "zh": "黄色"
        },
        {
         "zh": "蓝色"
        },
        {
         "zh": "黑色"
        }
       ],
       "answer": "A",
       "audio": [
        1784.2,
        1836.1
       ],
       "script": "女：咱们也买辆车吧？\n男：你怎么突然想起来买车了？\n女：有车会很方便。我们可以买辆十万左右的，买辆黄色的好不好？\n男：我觉得蓝色的好。\n问：女的想买哪种颜色的车？",
       "scriptVn": "Nữ: Nhà mình cũng mua một chiếc xe đi? / Nam: Sao em bỗng nhiên muốn mua xe? / Nữ: Có xe sẽ rất tiện. Mình mua chiếc khoảng một trăm nghìn tệ, mua màu vàng được không? / Nam: Anh thấy màu xanh lam đẹp hơn. / Hỏi: Người phụ nữ muốn mua xe màu gì? (A vàng · B xanh lam · C đen)"
      },
      {
       "n": 35,
       "options": [
        {
         "zh": "3角5分"
        },
        {
         "zh": "3元5角"
        },
        {
         "zh": "5元"
        }
       ],
       "answer": "B",
       "audio": [
        1845.5,
        1875.2
       ],
       "script": "男：苹果多少钱一斤？\n女：三块五。您要多少？\n男：给我来五斤吧。\n女：好的。\n问：苹果多少钱一斤？",
       "scriptVn": "Nam: Táo bao nhiêu tiền một cân? / Nữ: Ba tệ rưỡi. Anh lấy bao nhiêu? / Nam: Cho tôi năm cân. / Nữ: Vâng. / Hỏi: Táo bao nhiêu tiền một cân? (A 3 hào 5 xu · B 3 tệ 5 hào · C 5 tệ)"
      },
      {
       "n": 36,
       "options": [
        {
         "zh": "照顾小狗"
        },
        {
         "zh": "再买一只狗"
        },
        {
         "zh": "经常打扫房间"
        }
       ],
       "answer": "A",
       "audio": [
        1884.6,
        1926.6
       ],
       "script": "女：我不在家这几天，你别忘了照顾好我们的小狗。\n男：好的，你放心吧。\n女：要记得给它吃饭和洗澡\n男：记住了，没问题。\n问：女的让男的做什么？",
       "scriptVn": "Nữ: Mấy ngày em không ở nhà, anh đừng quên chăm sóc con chó nhé. / Nam: Được, em yên tâm. / Nữ: Nhớ cho nó ăn và tắm cho nó. / Nam: Nhớ rồi, không vấn đề. / Hỏi: Người phụ nữ nhờ người đàn ông làm gì? (A chăm sóc chó · B mua thêm một con chó · C thường xuyên dọn phòng)"
      },
      {
       "n": 37,
       "options": [
        {
         "zh": "西瓜吃完了"
        },
        {
         "zh": "没有鸡蛋了"
        },
        {
         "zh": "女的过生日"
        }
       ],
       "answer": "C",
       "audio": [
        1936,
        1980.8
       ],
       "script": "男：祝你生日快乐！\n女：谢谢，谢谢。\n男：过生日要吃面条儿，这是我第一次做面条儿，看看好吃不好吃。\n女：一定很好吃。\n问：男的为什么要做面条儿？",
       "scriptVn": "Nam: Chúc em sinh nhật vui vẻ! / Nữ: Cảm ơn, cảm ơn anh. / Nam: Sinh nhật thì phải ăn mì, đây là lần đầu anh nấu mì, em xem có ngon không. / Nữ: Chắc chắn rất ngon. / Hỏi: Vì sao người đàn ông nấu mì? (A dưa hấu ăn hết rồi · B hết trứng · C sinh nhật cô gái)"
      },
      {
       "n": 38,
       "options": [
        {
         "zh": "写了很多信"
        },
        {
         "zh": "最近没工作"
        },
        {
         "zh": "开了个文化公司"
        }
       ],
       "answer": "B",
       "audio": [
        1990.2,
        2040.7
       ],
       "script": "女：您妻子找到工作了吗？\n男：还没呢。离开学校后，这段时间她在家里休息。\n女：如果她愿意，欢迎她来我的公司工作。\n男：谢谢你！我回去就告诉她。\n问：关于他妻子，可以知道什么？",
       "scriptVn": "Nữ: Vợ anh tìm được việc chưa? / Nam: Chưa. Từ khi ra trường, thời gian này cô ấy ở nhà nghỉ ngơi. / Nữ: Nếu cô ấy muốn, rất hoan nghênh cô ấy đến công ty tôi làm. / Nam: Cảm ơn chị! Về nhà tôi sẽ nói với cô ấy ngay. / Hỏi: Về vợ anh ấy, có thể biết gì? (A viết rất nhiều thư · B dạo này không đi làm · C mở một công ty văn hóa)"
      },
      {
       "n": 39,
       "options": [
        {
         "zh": "正在复习"
        },
        {
         "zh": "明天没课"
        },
        {
         "zh": "打算明天还书"
        }
       ],
       "answer": "C",
       "audio": [
        2050,
        2102.1
       ],
       "script": "男：小王，那两本书怎么样？\n女：很好看。我还在看，明天还你可以吗？\n男：不着急。我是说，我这儿还有几本，想看就找我。\n女：好的。再见，明天见。\n问：关于女的，可以知道什么？",
       "scriptVn": "Nam: Tiểu Vương, hai cuốn sách đó thế nào? / Nữ: Hay lắm. Em vẫn đang đọc, mai trả anh được không? / Nam: Không vội. Ý anh là chỗ anh còn mấy cuốn nữa, muốn đọc thì tìm anh. / Nữ: Vâng. Tạm biệt, mai gặp. / Hỏi: Về cô gái, có thể biết gì? (A đang ôn bài · B mai không có tiết · C định mai trả sách)"
      },
      {
       "n": 40,
       "options": [
        {
         "zh": "解"
        },
        {
         "zh": "谢"
        },
        {
         "zh": "被"
        }
       ],
       "answer": "A",
       "audio": [
        2111.5,
        2154.8
       ],
       "script": "女：你好，你叫什么名字？\n男：我叫解北北。\n女：你姓什么？是谢谢的谢吗？\n男：不是，是了解的解，它做姓的时候读解。\n问：男的姓什么？",
       "scriptVn": "Nữ: Chào em, em tên là gì? / Nam: Em tên là Giải Bắc Bắc. / Nữ: Em họ gì? Có phải chữ 谢 trong 谢谢 không? / Nam: Không ạ, là chữ 解 trong 了解, khi làm họ thì đọc là Xiè. / Hỏi: Người đàn ông họ gì? (A 解 · B 谢 · C 被)"
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
         "zh": "七个小矮人的故事，你听说过吗？",
         "vn": "Câu chuyện bảy chú lùn, bạn nghe bao giờ chưa?"
        },
        {
         "k": "B",
         "zh": "这双运动鞋是新买的？多少钱买的？",
         "vn": "Đôi giày thể thao này mới mua à? Mua bao nhiêu tiền?"
        },
        {
         "k": "C",
         "zh": "这位就是我的新男朋友。",
         "vn": "Đây chính là bạn trai mới của tôi."
        },
        {
         "k": "D",
         "zh": "一般吧，我们上个月才认识，只是普通朋友。",
         "vn": "Bình thường thôi, tháng trước chúng tôi mới quen, chỉ là bạn bè bình thường."
        },
        {
         "k": "E",
         "zh": "当然。我们先坐公共汽车，然后换地铁。",
         "vn": "Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.",
         "used": true
        },
        {
         "k": "F",
         "zh": "去洗洗手，准备碗筷，吃饭了，你妈妈呢？",
         "vn": "Đi rửa tay, chuẩn bị bát đũa, ăn cơm thôi, mẹ con đâu?"
        }
       ],
       "example": "Ví dụ: 你知道怎么去那儿吗？→ E",
       "questions": [
        {
         "n": 41,
         "zh": "方便给我们介绍一下吗？他是谁啊？",
         "vn": "Tiện giới thiệu cho chúng tôi một chút không? Anh ấy là ai vậy?",
         "answer": "C"
        },
        {
         "n": 42,
         "zh": "你和王小姐的关系怎么样？",
         "vn": "Quan hệ giữa bạn và cô Vương thế nào?",
         "answer": "D"
        },
        {
         "n": 43,
         "zh": "800多块，虽然比较贵，但穿着很舒服。",
         "vn": "Hơn 800 tệ, tuy khá đắt nhưng đi rất thoải mái.",
         "answer": "B"
        },
        {
         "n": 44,
         "zh": "她在看电视，我去叫她。",
         "vn": "Cô ấy đang xem ti vi, để tôi đi gọi.",
         "answer": "F"
        },
        {
         "n": 45,
         "zh": "小时候奶奶给我讲过，很有名。",
         "vn": "Hồi nhỏ bà đã kể cho tôi nghe, rất nổi tiếng.",
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
         "zh": "别担心，我坐出租车去，30分钟就到学校了。",
         "vn": "Đừng lo, tôi đi taxi, 30 phút là đến trường."
        },
        {
         "k": "B",
         "zh": "我们是去旅游，不是搬家，还是少拿一些吧。",
         "vn": "Chúng ta đi du lịch chứ không phải chuyển nhà, mang ít đồ thôi."
        },
        {
         "k": "C",
         "zh": "没关系，我觉得你这样更可爱。健康才是最重要的。",
         "vn": "Không sao, tôi thấy bạn thế này còn đáng yêu hơn. Sức khỏe mới là quan trọng nhất."
        },
        {
         "k": "D",
         "zh": "你不是说给我带礼物了吗？是什么？让我看看。",
         "vn": "Chẳng phải anh nói mang quà cho em sao? Là gì thế? Cho em xem nào."
        },
        {
         "k": "E",
         "zh": "我觉得这家宾馆还不错，你说呢？",
         "vn": "Tôi thấy khách sạn này khá tốt, bạn thấy sao?"
        }
       ],
       "questions": [
        {
         "n": 46,
         "zh": "怎么办啊？我又胖了两公斤。",
         "vn": "Làm sao bây giờ? Tôi lại béo thêm hai cân rồi.",
         "answer": "C"
        },
        {
         "n": 47,
         "zh": "快点儿吧，再有一个小时就要考试了。",
         "vn": "Nhanh lên, còn một tiếng nữa là thi rồi.",
         "answer": "A"
        },
        {
         "n": 48,
         "zh": "在行李箱里呢，我来拿，还是你自己去拿？",
         "vn": "Ở trong vali ấy, để tôi lấy, hay bạn tự đi lấy?",
         "answer": "D"
        },
        {
         "n": 49,
         "zh": "房间很干净，还能上网，那我们先住这儿吧。",
         "vn": "Phòng rất sạch, còn lên mạng được, vậy chúng ta ở đây trước đã.",
         "answer": "E"
        },
        {
         "n": 50,
         "zh": "面包、水、地图都准备好了，我们还需要带什么？",
         "vn": "Bánh mì, nước, bản đồ đều chuẩn bị xong, chúng ta còn cần mang gì nữa?",
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
         "zh": "为了"
        },
        {
         "k": "B",
         "zh": "结束"
        },
        {
         "k": "C",
         "zh": "兴趣"
        },
        {
         "k": "D",
         "zh": "年轻"
        },
        {
         "k": "E",
         "zh": "声音",
         "used": true
        },
        {
         "k": "F",
         "zh": "检查"
        }
       ],
       "example": "Ví dụ: 她说话的（ E ）多好听啊！",
       "questions": [
        {
         "n": 51,
         "zh": "会议9点半能（　）吗？外面有人找王经理。",
         "vn": "Cuộc họp 9 rưỡi có (kết thúc) được không? Bên ngoài có người tìm giám đốc Vương.",
         "answer": "B"
        },
        {
         "n": 52,
         "zh": "作业写完了要好好（　）一下，注意别写错字。",
         "vn": "Làm xong bài tập phải (kiểm tra) lại cẩn thận, chú ý đừng viết sai chữ.",
         "answer": "F"
        },
        {
         "n": 53,
         "zh": "他从小就对电子游戏有（　），长大后他选择了和游戏有关的工作。",
         "vn": "Từ nhỏ anh ấy đã có (hứng thú) với trò chơi điện tử, lớn lên chọn công việc liên quan đến trò chơi.",
         "answer": "C"
        },
        {
         "n": 54,
         "zh": "现在的（　）人结婚越来越晚了。",
         "vn": "Người (trẻ) bây giờ kết hôn ngày càng muộn.",
         "answer": "D"
        },
        {
         "n": 55,
         "zh": "（　）更好地解决问题，必须提高自己的水平。",
         "vn": "(Để) giải quyết vấn đề tốt hơn, phải nâng cao trình độ của bản thân.",
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
         "zh": "其实"
        },
        {
         "k": "B",
         "zh": "疼"
        },
        {
         "k": "C",
         "zh": "地方"
        },
        {
         "k": "D",
         "zh": "爱好",
         "used": true
        },
        {
         "k": "E",
         "zh": "要求"
        },
        {
         "k": "F",
         "zh": "教"
        }
       ],
       "example": "Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。",
       "questions": [
        {
         "n": 56,
         "zh": "A：哥，刚才说的那个数学题怎么做啊？\nB：很简单，我（　）你。",
         "vn": "A: Anh ơi, bài toán vừa nói làm thế nào ạ? / B: Đơn giản lắm, anh (dạy) em.",
         "answer": "F"
        },
        {
         "n": 57,
         "zh": "A：你都很长时间没锻炼了，下午和我去爬山吧。\nB：我昨天刚打了篮球，今天腿还（　）呢。",
         "vn": "A: Cậu lâu lắm không rèn luyện rồi, chiều đi leo núi với tớ đi. / B: Hôm qua tớ vừa chơi bóng rổ, hôm nay chân vẫn còn (đau).",
         "answer": "B"
        },
        {
         "n": 58,
         "zh": "A：比赛（　）很简单，5分钟，谁踢进的球最多，谁就是第一。\nB：明白了，可以开始了吗？",
         "vn": "A: (Yêu cầu) của cuộc thi rất đơn giản, trong 5 phút, ai sút vào nhiều bàn nhất người đó thứ nhất. / B: Hiểu rồi, bắt đầu được chưa?",
         "answer": "E"
        },
        {
         "n": 59,
         "zh": "A：晚上在哪儿见面？\nB：就上次我们去过的那个（　），那儿附近有一家咖啡馆很安静。",
         "vn": "A: Tối gặp ở đâu? / B: Ở cái (chỗ) lần trước chúng ta đến ấy, gần đó có một quán cà phê rất yên tĩnh.",
         "answer": "C"
        },
        {
         "n": 60,
         "zh": "A：你喜欢这种音乐节目？\nB：（　）我只想听听那些老歌。",
         "vn": "A: Bạn thích chương trình âm nhạc kiểu này à? / B: (Thật ra) tôi chỉ muốn nghe mấy bài hát cũ thôi.",
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
       "zh": "喂？你在哪儿呢？你声音大一点儿好吗？我刚才没听清楚你在说什么。",
       "star": "那个人的声音很：",
       "options": [
        {
         "zh": "大"
        },
        {
         "zh": "小"
        },
        {
         "zh": "清楚"
        }
       ],
       "answer": "B",
       "vn": "Alô? Bạn đang ở đâu? Bạn nói to lên một chút được không? Lúc nãy tôi không nghe rõ bạn nói gì. ★ Giọng người đó rất: A to · B nhỏ · C rõ."
      },
      {
       "n": 62,
       "zh": "“笑一笑，十年少。”这是中国人常说的一句话，意思是笑的作用很大，笑一笑会让人年轻10岁。我们应该常笑，这样才能使自己年轻，不容易变老。",
       "star": "根据这段话，可以知道：",
       "options": [
        {
         "zh": "人应该快乐"
        },
        {
         "zh": "笑能使人聪明"
        },
        {
         "zh": "爱笑的人更认真"
        }
       ],
       "answer": "A",
       "vn": "\"Cười một cái, trẻ ra mười tuổi.\" Đây là câu người Trung Quốc hay nói, nghĩa là nụ cười có tác dụng rất lớn, cười làm người ta trẻ ra 10 tuổi. Chúng ta nên hay cười, như vậy mới giữ được trẻ trung, không dễ già. ★ Theo đoạn văn có thể biết: A con người nên vui vẻ · B cười làm người ta thông minh · C người hay cười thì chăm chỉ hơn."
      },
      {
       "n": 63,
       "zh": "每年秋季的10月4日，这个城市都会举行“啤酒节”，会有很多国家的人前来参加。啤酒节上，除了喝啤酒，这儿的歌舞表演更是让人难忘，你还会在这儿遇到很多名人。",
       "star": "在啤酒节上：",
       "options": [
        {
         "zh": "可以看电影"
        },
        {
         "zh": "能看到表演"
        },
        {
         "zh": "共有上千种啤酒"
        }
       ],
       "answer": "B",
       "vn": "Ngày 4 tháng 10 mùa thu hằng năm, thành phố này tổ chức \"Lễ hội bia\", người của nhiều quốc gia đến tham gia. Tại lễ hội, ngoài uống bia, các tiết mục ca múa ở đây càng khiến người ta khó quên, bạn còn gặp được nhiều người nổi tiếng. ★ Ở lễ hội bia: A có thể xem phim · B xem được biểu diễn · C có tổng cộng hơn nghìn loại bia."
      },
      {
       "n": 64,
       "zh": "中午看新闻了没？我很快就可以坐15号地铁了。15号地铁经过我家附近，以后，我上班就方便多了，从我家到公司只要花20分钟，比坐公共汽车快多了。",
       "star": "15号地铁：",
       "options": [
        {
         "zh": "离他家不远"
        },
        {
         "zh": "车站有电梯"
        },
        {
         "zh": "旁边有火车站"
        }
       ],
       "answer": "A",
       "vn": "Trưa nay xem thời sự chưa? Tôi sắp được đi tuyến tàu điện ngầm số 15 rồi. Tuyến 15 đi qua gần nhà tôi, sau này tôi đi làm tiện hơn nhiều, từ nhà đến công ty chỉ mất 20 phút, nhanh hơn xe buýt nhiều. ★ Tuyến tàu điện ngầm số 15: A không xa nhà anh ấy · B ga có thang máy · C bên cạnh có ga tàu hỏa."
      },
      {
       "n": 65,
       "zh": "新买的这个空调比以前那个旧的好多了，它的声音非常小，几乎没有声音，不会影响我们的学习和休息。",
       "star": "新空调怎么样？",
       "options": [
        {
         "zh": "用电少"
        },
        {
         "zh": "声音很小"
        },
        {
         "zh": "出现了问题"
        }
       ],
       "answer": "B",
       "vn": "Cái điều hòa mới mua tốt hơn cái cũ nhiều, tiếng rất nhỏ, gần như không có tiếng, không ảnh hưởng đến việc học và nghỉ ngơi của chúng tôi. ★ Điều hòa mới thế nào? A tốn ít điện · B tiếng rất nhỏ · C có vấn đề."
      },
      {
       "n": 66,
       "zh": "你手中拿着一件东西不放时，你只有这一件东西，如果你愿意放开，你就有机会选择其他的。",
       "star": "放开手中的东西，可以：",
       "options": [
        {
         "zh": "更了解它"
        },
        {
         "zh": "有更多选择"
        },
        {
         "zh": "更相信自己"
        }
       ],
       "answer": "B",
       "vn": "Khi bạn cầm một thứ trong tay không buông, bạn chỉ có mỗi thứ đó; nếu bạn chịu buông tay, bạn sẽ có cơ hội chọn thứ khác. ★ Buông thứ trong tay ra thì có thể: A hiểu nó hơn · B có nhiều lựa chọn hơn · C tin bản thân hơn."
      },
      {
       "n": 67,
       "zh": "猫和人不同，它们不怕黑，因为它们的眼睛在晚上更容易看清楚东西。我们家的那只猫就总是习惯白天睡觉，晚上出来走动。",
       "star": "关于那只猫，可以知道什么？",
       "options": [
        {
         "zh": "害怕晚上"
        },
        {
         "zh": "喜欢换环境"
        },
        {
         "zh": "喜欢白天休息"
        }
       ],
       "answer": "C",
       "vn": "Mèo khác người, chúng không sợ tối, vì ban đêm mắt chúng nhìn rõ đồ vật hơn. Con mèo nhà tôi luôn quen ngủ ban ngày, đêm mới ra đi lại. ★ Về con mèo đó, có thể biết gì? A sợ ban đêm · B thích đổi môi trường · C thích nghỉ ban ngày."
      },
      {
       "n": 68,
       "zh": "茶是我的最爱，花茶、绿茶、红茶，我都喜欢，天冷了或者你工作累了的时候，喝杯热茶，真是舒服极了。",
       "star": "关于他，可以知道：",
       "options": [
        {
         "zh": "口渴了"
        },
        {
         "zh": "没完成工作"
        },
        {
         "zh": "很喜欢喝茶"
        }
       ],
       "answer": "C",
       "vn": "Trà là thứ tôi yêu thích nhất, trà hoa, trà xanh, hồng trà tôi đều thích; lúc trời lạnh hay làm việc mệt, uống cốc trà nóng thật dễ chịu vô cùng. ★ Về anh ấy, có thể biết: A khát nước · B chưa làm xong việc · C rất thích uống trà."
      },
      {
       "n": 69,
       "zh": "你好，我今天早上才发现，昨天从你们这儿拿回去的衣服不是我的，衬衫和裤子都不是我的，这条裤子太长了，你帮我看一下，是谁拿错了。",
       "star": "根据这段话，可以知道他：",
       "options": [
        {
         "zh": "非常生气"
        },
        {
         "zh": "是卖衣服的"
        },
        {
         "zh": "拿错了衣服"
        }
       ],
       "answer": "C",
       "vn": "Chào anh, sáng nay tôi mới phát hiện quần áo hôm qua lấy từ chỗ các anh về không phải của tôi, cả áo sơ mi lẫn quần đều không phải, cái quần này dài quá, anh xem giúp tôi ai lấy nhầm. ★ Theo đoạn văn có thể biết anh ấy: A rất tức giận · B là người bán quần áo · C lấy nhầm quần áo."
      },
      {
       "n": 70,
       "zh": "孩子在学会说话以前，就已经懂得了哭和笑，他们借这样的办法来告诉别人自己饿了、生气了、不舒服或者很高兴、很满意。慢慢大一点以后，他们就开始用一些简单的词语来表示自己的意思了。",
       "star": "孩子笑可能表示：",
       "options": [
        {
         "zh": "很难过"
        },
        {
         "zh": "很好吃"
        },
        {
         "zh": "不想玩了"
        }
       ],
       "answer": "B",
       "vn": "Trước khi biết nói, trẻ con đã biết khóc và cười, chúng dùng cách đó để cho người khác biết mình đói, giận, khó chịu hoặc rất vui, rất hài lòng. Lớn hơn một chút, chúng bắt đầu dùng một số từ đơn giản để thể hiện ý mình. ★ Trẻ cười có thể biểu thị: A rất buồn · B rất ngon · C không muốn chơi nữa."
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
        "我的包",
        "药",
        "在",
        "里"
       ],
       "answer": "药在我的包里。",
       "vn": "Thuốc ở trong túi của tôi."
      },
      {
       "n": 72,
       "words": [
        "接女朋友",
        "他",
        "去",
        "要",
        "机场"
       ],
       "answer": "他要去机场接女朋友。",
       "vn": "Anh ấy sắp ra sân bay đón bạn gái."
      },
      {
       "n": 73,
       "words": [
        "还",
        "你",
        "脚下的路",
        "长",
        "很"
       ],
       "answer": "你脚下的路还很长。",
       "vn": "Con đường dưới chân bạn vẫn còn rất dài."
      },
      {
       "n": 74,
       "words": [
        "她",
        "用铅笔写字",
        "不",
        "喜欢"
       ],
       "answer": "她不喜欢用铅笔写字。",
       "vn": "Cô ấy không thích viết bằng bút chì."
      },
      {
       "n": 75,
       "words": [
        "怎么了",
        "鼻子",
        "你",
        "的",
        "丈夫"
       ],
       "answer": "你丈夫的鼻子怎么了？",
       "accept": [
        "你的丈夫鼻子怎么了？"
       ],
       "vn": "Mũi chồng bạn bị làm sao vậy?"
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
       "pre": "洗",
       "py": "shǒu",
       "post": "间就在电梯左边。",
       "answer": "手",
       "vn": "Nhà vệ sinh (洗手间) ở ngay bên trái thang máy."
      },
      {
       "n": 77,
       "pre": "黑板上的这只鸟",
       "py": "shì",
       "post": "谁画的？",
       "answer": "是",
       "vn": "Con chim trên bảng đen này là (是) ai vẽ?"
      },
      {
       "n": 78,
       "pre": "今晚的月亮让他想",
       "py": "jiā",
       "post": "了。",
       "answer": "家",
       "vn": "Mặt trăng đêm nay khiến anh ấy nhớ nhà (想家)."
      },
      {
       "n": 79,
       "pre": "这边太热了，我们去树下坐一",
       "py": "huì",
       "post": "儿吧。",
       "answer": "会",
       "vn": "Bên này nóng quá, chúng ta ra dưới gốc cây ngồi một lát (一会儿) đi."
      },
      {
       "n": 80,
       "pre": "草地上开着五颜六色的",
       "py": "huā",
       "post": "儿。",
       "answer": "花",
       "vn": "Trên bãi cỏ nở đầy hoa (花儿) đủ màu sắc."
      }
     ]
    }
   ]
  }
 ]
};
