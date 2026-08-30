// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 12: 昨天下雪了
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'天气',py:'tiānqì',pos:'Danh từ',vn:'thời tiết',em:'🌦️',lesson:1,
   ex_zh:'今天天气怎么样？',ex_py:'Jīntiān tiānqì zěnmeyàng?',ex_vn:'Hôm nay thời tiết thế nào?',
   exList:[{zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'}]},
  {n:2,zh:'这里',py:'zhèlǐ',pos:'Đại từ',vn:'ở đây, chỗ này',em:'📍',lesson:1,
   ex_zh:'这里的天不太好，下雨了。',ex_py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',ex_vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.',
   exList:[{zh:'这里的天不太好，下雨了。',py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.'}]},
  {n:3,zh:'天',py:'tiān',pos:'Danh từ',vn:'thời tiết, trời',em:'☁️',lesson:1,
   ex_zh:'这里的天不太好，下雨了。',ex_py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',ex_vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.',
   exList:[{zh:'这里的天不太好，下雨了。',py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.'}]},
  {n:4,zh:'下雨',py:'xià yǔ',pos:'Động từ',vn:'mưa, mưa rơi',em:'🌧️',lesson:1,
   ex_zh:'这里的天不太好，下雨了。',ex_py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',ex_vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.',
   exList:[{zh:'这里的天不太好，下雨了。',py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.'}],
   hanzi:[
     {c:'雨',p:'yǔ',type:'独体字 · Tượng hình',st:8,ord:'一→冂→丨→丶丶丶丶',rad:'雨 (vũ – tự thành bộ)',mean:'mưa',
      tip:'Hình những giọt nước rơi từ đám mây → MƯA.',
      cf:'雪 (xuě – "tuyết")',w:'下雨'},
   ]},
  {n:5,zh:'了',py:'le',pos:'Trợ từ',vn:'(dùng cuối câu chỉ sự thay đổi tình hình hoặc trạng thái)',em:'❕',lesson:1,
   ex_zh:'这里的天不太好，下雨了。',ex_py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',ex_vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.',
   exList:[{zh:'这里的天不太好，下雨了。',py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.'}]},
  {n:6,zh:'雨',py:'yǔ',pos:'Danh từ',vn:'mưa',em:'☔',lesson:1,
   ex_zh:'雨大吗？',ex_py:'Yǔ dà ma?',ex_vn:'Mưa to không?',
   exList:[{zh:'雨大吗？',py:'Yǔ dà ma?',vn:'Mưa to không?'}]},
  {n:7,zh:'有点儿',py:'yǒudiǎnr',pos:'Phó từ',vn:'hơi, hơi... một chút',em:'📏',lesson:1,
   ex_zh:'有点儿大，我觉得很冷。',ex_py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',ex_vn:'Hơi to ạ, em cảm thấy rất lạnh.',
   exList:[{zh:'有点儿大，我觉得很冷。',py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',vn:'Hơi to ạ, em cảm thấy rất lạnh.'}]},
  {n:8,zh:'觉得',py:'juéde',pos:'Động từ',vn:'cảm thấy',em:'💭',lesson:1,
   ex_zh:'有点儿大，我觉得很冷。',ex_py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',ex_vn:'Hơi to ạ, em cảm thấy rất lạnh.',
   exList:[{zh:'有点儿大，我觉得很冷。',py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',vn:'Hơi to ạ, em cảm thấy rất lạnh.'}]},
  {n:9,zh:'冷',py:'lěng',pos:'Tính từ',vn:'lạnh',em:'🥶',lesson:1,
   ex_zh:'有点儿大，我觉得很冷。',ex_py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',ex_vn:'Hơi to ạ, em cảm thấy rất lạnh.',
   exList:[
     {zh:'有点儿大，我觉得很冷。',py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',vn:'Hơi to ạ, em cảm thấy rất lạnh.'},
     {zh:'是的，太冷了。',py:'Shì de, tài lěng le.',vn:'Đúng vậy, trời lạnh quá.'},
   ],
   hanzi:[
     {c:'冷',p:'lěng',type:'左右结构 · Trái-phải',st:7,ord:'冫(băng) trái → 令(lệnh) phải',rad:'冫 (băng – băng giá)',mean:'lạnh',
      tip:'冫(băng giá) + 令(mượn âm) → LẠNH.',
      cf:'令 (lìng – "ra lệnh")',w:'太冷了 / 很冷'},
   ]},
  {n:10,zh:'下',py:'xià',pos:'Động từ',vn:'(mưa, tuyết...) rơi',em:'🌨️',lesson:2,
   ex_zh:'昨天下雪了。',ex_py:'Zuótiān xià xuě le.',ex_vn:'Hôm qua tuyết rơi rồi.',
   exList:[{zh:'昨天下雪了。',py:'Zuótiān xià xuě le.',vn:'Hôm qua tuyết rơi rồi.'}]},
  {n:11,zh:'雪',py:'xuě',pos:'Danh từ',vn:'tuyết',em:'❄️',lesson:2,
   ex_zh:'昨天下雪了。',ex_py:'Zuótiān xià xuě le.',ex_vn:'Hôm qua tuyết rơi rồi.',
   exList:[{zh:'昨天下雪了。',py:'Zuótiān xià xuě le.',vn:'Hôm qua tuyết rơi rồi.'}],
   hanzi:[
     {c:'雪',p:'xuě',type:'上下结构 · Trên-dưới',st:11,ord:'雨(vũ) trên → 彐 dưới',rad:'雨 (vũ – mưa)',mean:'tuyết',
      tip:'Bộ 雨(mưa) ở trên → trời lạnh khiến mưa đóng băng thành TUYẾT.',
      cf:'雨 (yǔ – "mưa", thiếu phần dưới)',w:'下雪'},
   ]},
  {n:12,zh:'来',py:'lái',pos:'Động từ',vn:'đến',em:'🚶',lesson:2,
   ex_zh:'你昨天没来公司，生病了？',ex_py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',ex_vn:'Hôm qua bạn không đến công ty, bị ốm à?',
   exList:[{zh:'你昨天没来公司，生病了？',py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',vn:'Hôm qua bạn không đến công ty, bị ốm à?'}],
   hanzi:[
     {c:'来',p:'lái',type:'独体字 · Tượng hình',st:7,ord:'一→丨→㇏→丿→丶→一',rad:'木 (mộc, biến thể)',mean:'đến, tới',
      tip:'Hình bông lúa mạch từ xa mang ĐẾN → ĐẾN, TỚI.',
      cf:'米 (mǐ – "gạo")',w:'来公司 / 回来'},
   ]},
  {n:13,zh:'公司',py:'gōngsī',pos:'Danh từ',vn:'công ty',em:'🏢',lesson:2,
   ex_zh:'你昨天没来公司，生病了？',ex_py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',ex_vn:'Hôm qua bạn không đến công ty, bị ốm à?',
   exList:[{zh:'你昨天没来公司，生病了？',py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',vn:'Hôm qua bạn không đến công ty, bị ốm à?'}]},
  {n:14,zh:'生病',py:'shēngbìng',pos:'Động từ',vn:'ốm, bị ốm, bị bệnh',em:'🤒',lesson:2,
   ex_zh:'你昨天没来公司，生病了？',ex_py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',ex_vn:'Hôm qua bạn không đến công ty, bị ốm à?',
   exList:[{zh:'你昨天没来公司，生病了？',py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',vn:'Hôm qua bạn không đến công ty, bị ốm à?'}],
   hanzi:[
     {c:'病',p:'bìng',type:'半包围 · Bán bao (疒)',st:10,ord:'疒(bộ bệnh) → 丙 bên trong',rad:'疒 (nạch – bệnh tật)',mean:'bệnh, ốm',
      tip:'Bộ 疒 = hình người nằm trên giường bệnh. Thấy 疒 → nghĩ ngay tới ỐM ĐAU.',
      cf:'痛 (tòng – cùng bộ 疒)',w:'生病 / 看病'},
   ]},
  {n:15,zh:'看病',py:'kànbìng',pos:'Động từ',vn:'khám bệnh',em:'🏥',lesson:2,
   ex_zh:'对，我昨天去医院看病了。',ex_py:'Duì, wǒ zuótiān qù yīyuàn kànbìng le.',ex_vn:'Đúng vậy, hôm qua em đi bệnh viện khám bệnh.',
   exList:[{zh:'对，我昨天去医院看病了。',py:'Duì, wǒ zuótiān qù yīyuàn kànbìng le.',vn:'Đúng vậy, hôm qua em đi bệnh viện khám bệnh.'}]},
  {n:16,zh:'病',py:'bìng',pos:'Động từ',vn:'ốm, bị ốm, bị bệnh',em:'🤢',lesson:3,
   ex_zh:'医生，我病了。',ex_py:'Yīshēng, wǒ bìng le.',ex_vn:'Thưa bác sĩ, tôi bị ốm rồi.',
   exList:[{zh:'医生，我病了。',py:'Yīshēng, wǒ bìng le.',vn:'Thưa bác sĩ, tôi bị ốm rồi.'}]},
  {n:17,zh:'一点儿',py:'yìdiǎnr',pos:'Số lượng từ',vn:'một chút, một ít',em:'🤏',lesson:3,
   ex_zh:'好的，吃一点儿药，今天休息半天吧。',ex_py:'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.',ex_vn:'Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé.',
   exList:[{zh:'好的，吃一点儿药，今天休息半天吧。',py:'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.',vn:'Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé.'}]},
  {n:18,zh:'药',py:'yào',pos:'Danh từ',vn:'thuốc',em:'💊',lesson:3,
   ex_zh:'好的，吃一点儿药，今天休息半天吧。',ex_py:'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.',ex_vn:'Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé.',
   exList:[{zh:'好的，吃一点儿药，今天休息半天吧。',py:'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.',vn:'Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé.'}],
   hanzi:[
     {c:'药',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'艹(thảo đầu) trên → 约(ước) dưới',rad:'艹 (thảo – cỏ cây)',mean:'thuốc',
      tip:'Bộ 艹(cỏ) ở trên → thuốc xưa làm từ cây cỏ, thảo dược.',
      cf:'约 (yuē – "hẹn", thiếu 艹)',w:'吃药 / 一点儿药'},
   ]},
  {n:19,zh:'天',py:'tiān',pos:'Lượng từ',vn:'ngày',em:'📆',lesson:3,
   ex_zh:'今天休息半天吧。',ex_py:'Jīntiān xiūxi bàn tiān ba.',ex_vn:'Hôm nay nghỉ ngơi nửa ngày nhé.',
   exList:[{zh:'今天休息半天吧。',py:'Jīntiān xiūxi bàn tiān ba.',vn:'Hôm nay nghỉ ngơi nửa ngày nhé.'}]},
  {n:20,zh:'回',py:'huí',pos:'Động từ',vn:'về, quay về',em:'🏠',lesson:3,
   ex_zh:'回家后再喝些热水。',ex_py:'Huí jiā hòu zài hē xiē rè shuǐ.',ex_vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.',
   exList:[{zh:'回家后再喝些热水。',py:'Huí jiā hòu zài hē xiē rè shuǐ.',vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.'}],
   hanzi:[
     {c:'回',p:'huí',type:'全包围结构 · Bao vây hoàn toàn',st:6,ord:'囗(vi) ngoài → 口(khẩu) trong',rad:'囗 (vi – vây quanh)',mean:'trở về, về',
      tip:'Hình vòng xoáy đi rồi lại vòng về điểm cũ → TRỞ VỀ.',
      cf:'回 dễ nhầm 囘 (dị thể cổ)',w:'回家 / 回来'},
   ]},
  {n:21,zh:'再',py:'zài',pos:'Phó từ',vn:'sau đó, mới (chỉ trình tự)',em:'➡️',lesson:3,
   ex_zh:'回家后再喝些热水。',ex_py:'Huí jiā hòu zài hē xiē rè shuǐ.',ex_vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.',
   exList:[{zh:'回家后再喝些热水。',py:'Huí jiā hòu zài hē xiē rè shuǐ.',vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.'}]},
  {n:22,zh:'喝',py:'hē',pos:'Động từ',vn:'uống',em:'🥤',lesson:3,
   ex_zh:'回家后再喝些热水。',ex_py:'Huí jiā hòu zài hē xiē rè shuǐ.',ex_vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.',
   exList:[{zh:'回家后再喝些热水。',py:'Huí jiā hòu zài hē xiē rè shuǐ.',vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.'}],
   hanzi:[
     {c:'喝',p:'hē',type:'左右结构 · Trái-phải',st:12,ord:'口(khẩu) trái → 曷(hạt) phải',rad:'口 (khẩu – miệng)',mean:'uống',
      tip:'口(miệng) dùng để UỐNG chất lỏng.',
      cf:'渴 (kě – "khát", cũng có 曷")',w:'喝水 / 喝热水'},
   ]},
  {n:23,zh:'热',py:'rè',pos:'Tính từ',vn:'nóng, ấm',em:'🔥',lesson:3,
   ex_zh:'回家后再喝些热水。',ex_py:'Huí jiā hòu zài hē xiē rè shuǐ.',ex_vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.',
   exList:[{zh:'回家后再喝些热水。',py:'Huí jiā hòu zài hē xiē rè shuǐ.',vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.'}],
   hanzi:[
     {c:'热',p:'rè',type:'上下结构 · Trên-dưới',st:10,ord:'执(biến thể) trên → 灬(hỏa) dưới',rad:'灬 (hỏa – lửa, phần dưới)',mean:'nóng',
      tip:'执(cầm nắm) + 灬(lửa) → cầm phải vật có lửa → NÓNG.',
      cf:'势 (shì – "thế lực")',w:'热水 / 太热了'},
   ]},
  {n:24,zh:'水',py:'shuǐ',pos:'Danh từ',vn:'nước',em:'💧',lesson:3,
   ex_zh:'回家后再喝些热水。',ex_py:'Huí jiā hòu zài hē xiē rè shuǐ.',ex_vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.',
   exList:[{zh:'回家后再喝些热水。',py:'Huí jiā hòu zài hē xiē rè shuǐ.',vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.'}],
   hanzi:[
     {c:'水',p:'shuǐ',type:'独体字 · Tượng hình',st:4,ord:'丨→𠃌→丿→㇏',rad:'水 (thuỷ – tự thành bộ)',mean:'nước',
      tip:'Hình dòng nước chảy uốn lượn → NƯỚC.',
      cf:'冰 (bīng – "băng")',w:'热水 / 喝水'},
   ]},
];

var wuData = [
  {img:'/images/hsk1v3-bai-12/xiayu.jpg',label:'下雨',py:'xià yǔ',letter:'A'},
  {img:'/images/hsk1v3-bai-12/leng.jpg',label:'冷',py:'lěng',letter:'B'},
  {img:'/images/hsk1v3-bai-12/shengbing.jpg',label:'生病',py:'shēngbìng',letter:'C'},
  {img:'/images/hsk1v3-bai-12/kanbing.jpg',label:'看病',py:'kànbìng',letter:'D'},
  {img:'/images/hsk1v3-bai-12/xue.jpg',label:'雪',py:'xuě',letter:'E'},
  {img:'/images/hsk1v3-bai-12/shui.jpg',label:'水',py:'shuǐ',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 12: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-12/wb-yuyin.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Phân biệt thanh điệu — chọn âm tiết có thanh điệu KHÁC trong nhóm',
          items: [
            {before:'', after:'', answer:'shuì', options:['shuǐ','shuì','hěn']},
            {before:'', after:'', answer:'wèntí', options:['wèntí','kànbìng','diànshì']},
            {before:'', after:'', answer:'fēicháng', options:['gāoxìng','fēicháng','zhīdào']},
            {before:'', after:'', answer:'duìbuqǐ', options:['qù chāoshì','zài shāngdiàn','duìbuqǐ']}
          ] },
        { type: 'wordlist', caption: 'Nghe âm tiết, ghép với từ đúng — nghe và đọc theo',
          items: [['nǐ hǎo', '你好'], ['míngzi', '名字'], ['Zhōngguó', '中国'], ['lǎoshī', '老师'], ['háizi', '孩子'], ['xièxie', '谢谢']] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu tạo và bút thuận (tiếp)',
          rows: [
            ['Nét mới', '横折钩 héngzhégōu (ngang-gập-móc), 竖弯钩 shùwāngōu (sổ-cong-móc), 横折弯钩 héngzhéwāngōu (ngang-gập-cong-móc), 竖折折钩 shùzhézhégōu (sổ-gập-gập-móc)'],
            ['Quy tắc bút thuận', '先中间后两边 (giữa trước hai bên sau) — ví dụ: 水'],
            ['Ví dụ luyện viết', '书 (shū) → 读书 (dúshū); 几 (jǐ) → 几岁 (jǐ suì); 吃 (chī) → 吃饭 (chīfàn); 妈 (mā) → 妈妈 (māma); 少 (shǎo) → 多少 (duōshao)']
          ],
          note: 'Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-12/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q1c.jpg'}
            ], answer: 'A' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q2c.jpg'}
            ], answer: 'C' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q3c.jpg'}
            ], answer: 'B' },
            { n: 4, options: [
              {key:'A', text:'在吃药', py:'zài chī yào'},
              {key:'B', text:'有点儿', py:'yǒudiǎnr'},
              {key:'C', text:'不太好', py:'bú tài hǎo'}
            ], answer: 'C' },
            { n: 5, options: [
              {key:'A', text:'下雪了', py:'xià xuě le'},
              {key:'B', text:'太热了', py:'tài rè le'},
              {key:'C', text:'不喝水', py:'bù hē shuǐ'}
            ], answer: 'B' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'看医生', py:'kàn yīshēng'},
              {key:'B', text:'看朋友', py:'kàn péngyou'},
              {key:'C', text:'看病人', py:'kàn bìngrén'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'工作', py:'gōngzuò'},
              {key:'B', text:'休息', py:'xiūxi'},
              {key:'C', text:'读书', py:'dúshū'}
            ], answer: 'B' }
          ],
          reading: [
            { n: 11, prompt: '我女儿生病了。', promptPy: 'Wǒ nǚ\'ér shēngbìng le.', options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 12, prompt: '今天天不太好，下雪了。', promptPy: 'Jīntiān tiān bú tài hǎo, xià xuě le.', options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 13, prompt: '12:00了，你们怎么还在看电视？', promptPy: '12:00 le, nǐmen zěnme hái zài kàn diànshì?', options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 14, prompt: '你怎么了？', promptPy: 'Nǐ zěnme le?', options: [
              {key:'A', text:'热水。', py:'Rè shuǐ.'},
              {key:'B', text:'我病了。', py:'Wǒ bìng le.'},
              {key:'C', text:'对。', py:'Duì.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 15, prompt: '你想喝点儿什么？', promptPy: 'Nǐ xiǎng hē diǎnr shénme?', options: [
              {key:'A', text:'热水。', py:'Rè shuǐ.'},
              {key:'B', text:'我病了。', py:'Wǒ bìng le.'},
              {key:'C', text:'对。', py:'Duì.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '你开车了？', promptPy: 'Nǐ kāichē le?', options: [
              {key:'A', text:'热水。', py:'Rè shuǐ.'},
              {key:'B', text:'我病了。', py:'Wǒ bìng le.'},
              {key:'C', text:'对。', py:'Duì.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 17, prompt: '他（　）了，没来上班。', promptPy: 'Tā ( ) le, méi lái shàngbān.', options: [
              {key:'A', text:'冷', py:'lěng'},
              {key:'B', text:'生病', py:'shēngbìng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：外边雨大吗？\n女：很大，我觉得有点儿（　）。', promptPy: 'Wàibian yǔ dà ma? / Hěn dà, wǒ juéde yǒudiǎnr ( ).', options: [
              {key:'A', text:'冷', py:'lěng'},
              {key:'B', text:'生病', py:'shēngbìng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '昨天的天气很好，我和朋友们去外边玩了。\n★说话人觉得昨天：', promptPy: 'Zuótiān de tiānqì hěn hǎo, wǒ hé péngyoumen qù wàibian wán le.', options: [
              {key:'A', text:'天气好', py:'tiānqì hǎo'},
              {key:'B', text:'雨不大', py:'yǔ bú dà'},
              {key:'C', text:'有点儿冷', py:'yǒudiǎnr lěng'}
            ], answer: 'A' },
            { n: 20, prompt: '老张去看病，医生说他要吃三天药。\n★医生说老张：', promptPy: 'Lǎo Zhāng qù kànbìng, yīshēng shuō tā yào chī sān tiān yào.', options: [
              {key:'A', text:'要吃药', py:'yào chī yào'},
              {key:'B', text:'要多睡觉', py:'yào duō shuìjiào'},
              {key:'C', text:'要多喝水', py:'yào duō hē shuǐ'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'王一雪打电话给王一飞询问天气 · Hỏi thăm thời tiết',
   preQuiz:[
     {q:'王一飞那儿的天气（　）。',opts:['很好','很不好','不太好'],ans:2},
     {q:'王一飞觉得（　）。',opts:['不冷','很冷','有点儿冷'],ans:1},
   ],
   lines:[
     {sp:0,zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'},
     {sp:1,zh:'这里的天不太好，下雨了。',py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.'},
     {sp:0,zh:'雨大吗？',py:'Yǔ dà ma?',vn:'Mưa to không?'},
     {sp:1,zh:'有点儿大，我觉得很冷。',py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',vn:'Hơi to ạ, em cảm thấy rất lạnh.'},
   ]},
  {scene:'王一雪和杨同乐在公司电梯里聊天儿 · Hôm qua bị ốm',
   preQuiz:[
     {q:'杨同乐昨天（　）了。',opts:['生病','上班','去公司'],ans:0},
     {q:'杨同乐今天（　）了。',opts:['在家里','去医院','来公司'],ans:2},
   ],
   lines:[
     {sp:0,zh:'昨天下雪了。',py:'Zuótiān xià xuě le.',vn:'Hôm qua tuyết rơi rồi.'},
     {sp:1,zh:'是的，太冷了。',py:'Shì de, tài lěng le.',vn:'Đúng vậy, trời lạnh quá.'},
     {sp:0,zh:'你昨天没来公司，生病了？',py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',vn:'Hôm qua bạn không đến công ty, bị ốm à?'},
     {sp:1,zh:'对，我昨天去医院看病了。',py:'Duì, wǒ zuótiān qù yīyuàn kànbìng le.',vn:'Đúng vậy, hôm qua em đi bệnh viện khám bệnh.'},
   ]},
  {scene:'医生给杨同乐看病 · Khám bệnh',
   preQuiz:[
     {q:'杨同乐觉得（　）。',opts:['很热','很冷','有点儿冷'],ans:1},
     {q:'医生对杨同乐说："今天（　）吧。"',opts:['上班','下班','休息半天'],ans:2},
   ],
   lines:[
     {sp:0,zh:'医生，我病了。',py:'Yīshēng, wǒ bìng le.',vn:'Thưa bác sĩ, tôi bị ốm rồi.'},
     {sp:1,zh:'我看看。你觉得怎么样？',py:'Wǒ kànkan. Nǐ juéde zěnmeyàng?',vn:'Để tôi khám xem. Anh cảm thấy thế nào?'},
     {sp:0,zh:'我很冷。',py:'Wǒ hěn lěng.',vn:'Tôi rất lạnh.'},
     {sp:1,zh:'好的，吃一点儿药，今天休息半天吧。',py:'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.',vn:'Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé.'},
     {sp:0,zh:'好的。',py:'Hǎo de.',vn:'Vâng.'},
     {sp:1,zh:'回家后再喝些热水。',py:'Huí jiā hòu zài hē xiē rè shuǐ.',vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'天', right:'气'},
  {left:'下', right:'雨'},
  {left:'下', right:'雪'},
  {left:'生', right:'病'},
  {left:'看', right:'病'},
  {left:'公', right:'司'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'', blank:'今天天气', post:'怎么样？', hint:'(thời tiết hôm nay)', ans:'今天天气'},
  {pre:'这里的天不太好，', blank:'下雨了', post:'。', hint:'(mưa rồi)', ans:'下雨了'},
  {pre:'有点儿大，我', blank:'觉得很冷', post:'。', hint:'(cảm thấy rất lạnh)', ans:'觉得很冷'},
  {pre:'', blank:'昨天下雪了', post:'。', hint:'(hôm qua tuyết rơi)', ans:'昨天下雪了'},
  {pre:'你昨天没来公司，', blank:'生病了', post:'？', hint:'(bị ốm)', ans:'生病了'},
  {pre:'对，我昨天去医院', blank:'看病了', post:'。', hint:'(khám bệnh)', ans:'看病了'},
  {pre:'好的，吃一点儿药，今天', blank:'休息半天', post:'吧。', hint:'(nghỉ nửa ngày)', ans:'休息半天'},
  {pre:'回家后再', blank:'喝些热水', post:'。', hint:'(uống ít nước ấm)', ans:'喝些热水'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['今天','天气','怎么样','？'], ans:'今天天气怎么样？', audio:'今天天气怎么样？'},
  {words:['这里','的','天','不太好','，','下雨','了','。'], ans:'这里的天不太好，下雨了。', audio:'这里的天不太好，下雨了。'},
  {words:['昨天','下雪','了','。'], ans:'昨天下雪了。', audio:'昨天下雪了。'},
  {words:['你','昨天','没','来','公司','，','生病','了','？'], ans:'你昨天没来公司，生病了？', audio:'你昨天没来公司，生病了？'},
  {words:['医生','，','我','病','了','。'], ans:'医生，我病了。', audio:'医生，我病了。'},
  {words:['回家','后','再','喝','些','热水','。'], ans:'回家后再喝些热水。', audio:'回家后再喝些热水。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"今天天气怎么样？" nghĩa là gì?', opts:['Hôm nay thời tiết thế nào?', 'Hôm nay thứ mấy?', 'Hôm nay bạn đi đâu?', 'Hôm nay mấy giờ rồi?'], ans:0},
  {q:'"下雨了" nghĩa là gì?', opts:['Trời mưa rồi', 'Trời nắng rồi', 'Trời tuyết rồi', 'Trời lạnh rồi'], ans:0},
  {q:'Trợ từ ngữ khí "了(1)" dùng để biểu thị điều gì?', opts:['sự thay đổi hoặc xuất hiện tình huống mới', 'sự phủ định', 'câu hỏi', 'mệnh lệnh'], ans:0},
  {q:'"你昨天没来公司，生病了？" nghĩa là gì?', opts:['Hôm qua bạn không đến công ty, bị ốm à?', 'Hôm qua bạn đến công ty làm việc.', 'Hôm nay bạn không đến công ty.', 'Bạn thích công ty này không?'], ans:0},
  {q:'"太冷了！" thuộc cấu trúc nào?', opts:['太……了 (cảm thán mức độ cao)', '正反问', '存现句', '疑问代词'], ans:0},
  {q:'"我很冷。" — "冷" thuộc từ loại gì?', opts:['tính từ', 'danh từ', 'động từ', 'phó từ'], ans:0},
  {q:'"回家后再喝些热水。" nghĩa là gì?', opts:['Sau khi về nhà nhớ uống thêm ít nước ấm.', 'Trước khi về nhà hãy uống nước.', 'Đừng uống nước khi về nhà.', 'Về nhà rồi mới nấu nước.'], ans:0},
  {q:'Câu phi chủ vị (非主谓句) thường dùng khi nào?', opts:['trong khẩu ngữ, câu ngắn không rõ chủ-vị', 'chỉ dùng trong văn viết trang trọng', 'chỉ dùng khi hỏi', 'chỉ dùng khi phủ định'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："今天天气怎么样？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Hôm nay thời tiết thế nào?" Bạn trả lời thế nào?',
     hint: '今天……，有点儿……', sample: '今天下雨了，有点儿冷。', sample_vn: 'Hôm nay trời mưa rồi, hơi lạnh.',
     note: 'Trợ từ "了" đặt cuối câu để nói về một tình huống mới xảy ra.'},
    {q_zh: '同事问你昨天为什么没来公司，你怎么回答？', q_vn: 'Đồng nghiệp hỏi vì sao hôm qua bạn không đến công ty, bạn trả lời thế nào?',
     hint: '我昨天……了。', sample: '我昨天生病了，去医院看病了。', sample_vn: 'Hôm qua tôi bị ốm, đã đi bệnh viện khám bệnh.',
     note: '"生病了" và "看病了" đều dùng "了" để nói về việc đã xảy ra.'},
    {q_zh: '医生问你："你觉得怎么样？" 你怎么回答？', q_vn: 'Bác sĩ hỏi bạn: "Anh/chị cảm thấy thế nào?" Bạn trả lời thế nào?',
     hint: '我觉得……', sample: '我觉得很冷。', sample_vn: 'Tôi cảm thấy rất lạnh.',
     note: '"觉得" + tính từ dùng để miêu tả cảm giác của bản thân.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hôm nay thời tiết thế nào?', zh:'今天天气怎么样？', py:'Jīntiān tiānqì zěnmeyàng?'},
  {vi:'Hôm qua tuyết rơi rồi, trời lạnh quá.', zh:'昨天下雪了，太冷了。', py:'Zuótiān xià xuě le, tài lěng le.'},
  {vi:'Thưa bác sĩ, tôi bị ốm rồi.', zh:'医生，我病了。', py:'Yīshēng, wǒ bìng le.'},
  {vi:'Sau khi về nhà nhớ uống thêm ít nước ấm.', zh:'回家后再喝些热水。', py:'Huí jiā hòu zài hē xiē rè shuǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Mưa to không?', zh:'雨大吗？', py:'Yǔ dà ma?'},
  {vi:'Hôm qua bạn không đến công ty à?', zh:'你昨天没来公司吗？', py:'Nǐ zuótiān méi lái gōngsī ma?'},
  {vi:'Để tôi khám xem.', zh:'我看看。', py:'Wǒ kànkan.'},
  {vi:'Hôm nay nghỉ ngơi nửa ngày nhé.', zh:'今天休息半天吧。', py:'Jīntiān xiūxi bàn tiān ba.'},
];
