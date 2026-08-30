// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 2: 我叫李文
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'请问',py:'qǐngwèn',pos:'Động từ',vn:'xin hỏi',em:'🙋',lesson:1,
   ex_zh:'请问，你叫什么名字？',ex_py:'Qǐngwèn, nǐ jiào shénme míngzi?',ex_vn:'Xin hỏi, bạn tên là gì?',
   exList:[
     {zh:'请问，你叫什么名字？',py:'Qǐngwèn, nǐ jiào shénme míngzi?',vn:'Xin hỏi, bạn tên là gì?'},
   ],
   hanzi:[
     {c:'请',p:'qǐng',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 青(thanh) phải',rad:'讠 (ngôn – lời nói)',mean:'xin, mời',
      tip:'讠(lời nói) + 青(trong sáng) → lời nói TRONG SÁNG, lễ độ khi nhờ vả = XIN, MỜI.',
      cf:'情 (qíng – "tình cảm", bộ 忄")',w:'请问 / 请坐'},
   ]},
  {n:2,zh:'你',py:'nǐ',pos:'Đại từ',vn:'bạn, anh, chị, em',em:'👉',lesson:1,
   ex_zh:'你叫什么名字？',ex_py:'Nǐ jiào shénme míngzi?',ex_vn:'Bạn tên là gì?',
   exList:[
     {zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vn:'Bạn tên là gì?'},
     {zh:'你好，安妮！',py:'Nǐ hǎo, Ānnī!',vn:'Chào Annie!'},
   ]},
  {n:3,zh:'叫',py:'jiào',pos:'Động từ',vn:'gọi là, tên là',em:'📛',lesson:1,
   ex_zh:'我叫陈天中。',ex_py:'Wǒ jiào Chén Tiānzhōng.',ex_vn:'Tôi tên là Trần Thiên Trung.',
   exList:[
     {zh:'我叫陈天中。',py:'Wǒ jiào Chén Tiānzhōng.',vn:'Tôi tên là Trần Thiên Trung.'},
     {zh:'我叫李文。',py:'Wǒ jiào Lǐ Wén.',vn:'Mình tên là Lý Văn.'},
   ],
   hanzi:[
     {c:'叫',p:'jiào',type:'左右结构 · Trái-phải',st:5,ord:'口(khẩu) trái → 니(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'gọi, kêu',
      tip:'Bộ 口(miệng) → hành động phát ra tiếng để GỌI TÊN ai đó.',
      cf:'叶 (yè – "lá cây", cũng bộ 口")',w:'叫什么 / 叫做'},
   ]},
  {n:4,zh:'什么',py:'shénme',pos:'Đại từ',vn:'gì, cái gì',em:'❓',lesson:1,
   ex_zh:'你叫什么名字？',ex_py:'Nǐ jiào shénme míngzi?',ex_vn:'Bạn tên là gì?',
   exList:[
     {zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vn:'Bạn tên là gì?'},
   ]},
  {n:5,zh:'名字',py:'míngzi',pos:'Danh từ',vn:'tên',em:'🏷️',lesson:1,
   ex_zh:'你叫什么名字？',ex_py:'Nǐ jiào shénme míngzi?',ex_vn:'Bạn tên là gì?',
   exList:[
     {zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vn:'Bạn tên là gì?'},
   ],
   hanzi:[
     {c:'名',p:'míng',type:'上下结构 · Trên-dưới',st:6,ord:'夕(tịch) trên → 口(khẩu) dưới',rad:'口 (khẩu – miệng)',mean:'tên',
      tip:'夕(đêm tối) + 口(miệng) → trời tối không nhìn rõ mặt, phải dùng MIỆNG xưng TÊN để nhận ra nhau.',
      cf:'各 (gè – "mỗi", cũng có 夕")',w:'名字 / 姓名'},
   ]},
  {n:6,zh:'我',py:'wǒ',pos:'Đại từ',vn:'tôi, mình',em:'🙋‍♂️',lesson:1,
   ex_zh:'我叫陈天中。',ex_py:'Wǒ jiào Chén Tiānzhōng.',ex_vn:'Tôi tên là Trần Thiên Trung.',
   exList:[
     {zh:'我叫陈天中。',py:'Wǒ jiào Chén Tiānzhōng.',vn:'Tôi tên là Trần Thiên Trung.'},
     {zh:'我是学生。',py:'Wǒ shì xuésheng.',vn:'Tôi là học sinh.'},
   ]},
  {n:7,zh:'不',py:'bù',pos:'Phó từ',vn:'không',em:'🚫',lesson:2,
   ex_zh:'我不是安妮。',ex_py:'Wǒ bú shì Ānnī.',ex_vn:'Tôi không phải là Annie.',
   exList:[
     {zh:'我不是安妮。',py:'Wǒ bú shì Ānnī.',vn:'Tôi không phải là Annie.'},
   ]},
  {n:8,zh:'是',py:'shì',pos:'Động từ',vn:'là',em:'✅',lesson:2,
   ex_zh:'我是白家月。',ex_py:'Wǒ shì Bái Jiāyuè.',ex_vn:'Tôi là Bạch Gia Nguyệt.',
   exList:[
     {zh:'我是白家月。',py:'Wǒ shì Bái Jiāyuè.',vn:'Tôi là Bạch Gia Nguyệt.'},
     {zh:'我是学生。',py:'Wǒ shì xuésheng.',vn:'Tôi là học sinh.'},
   ],
   hanzi:[
     {c:'是',p:'shì',type:'上下结构 · Trên-dưới',st:9,ord:'日(nhật) trên → 疋(sơ biến thể) dưới',rad:'日 (nhật – mặt trời)',mean:'là, đúng',
      tip:'日(mặt trời) luôn ĐÚNG giờ mọc → mở rộng thành nghĩa "ĐÚNG, LÀ".',
      cf:'定 (dìng – "quyết định")',w:'是学生 / 不是'},
   ]},
  {n:9,zh:'对不起',py:'duìbuqǐ',pos:'Động từ',vn:'xin lỗi',em:'🙇',lesson:2,
   ex_zh:'对不起！',ex_py:'Duìbuqǐ!',ex_vn:'Xin lỗi!',
   exList:[
     {zh:'对不起！',py:'Duìbuqǐ!',vn:'Xin lỗi!'},
   ]},
  {n:10,zh:'没关系',py:'méi guānxi',pos:'Cụm từ',vn:'không sao, không có gì',em:'🤝',lesson:2,
   ex_zh:'没关系！',ex_py:'Méi guānxi!',ex_vn:'Không sao!',
   exList:[
     {zh:'没关系！',py:'Méi guānxi!',vn:'Không sao!'},
   ]},
  {n:11,zh:'没事',py:'méishì',pos:'Động từ',vn:'không sao, không có gì',em:'👌',lesson:2,
   ex_zh:'没事！没事！',ex_py:'Méishì! Méishì!',ex_vn:'Không sao đâu! Không sao đâu!',
   exList:[
     {zh:'没事！没事！',py:'Méishì! Méishì!',vn:'Không sao đâu! Không sao đâu!'},
   ]},
  {n:12,zh:'很',py:'hěn',pos:'Phó từ',vn:'rất',em:'💯',lesson:3,
   ex_zh:'很高兴认识你。',ex_py:'Hěn gāoxìng rènshi nǐ.',ex_vn:'Rất vui được làm quen với bạn.',
   exList:[
     {zh:'很高兴认识你。',py:'Hěn gāoxìng rènshi nǐ.',vn:'Rất vui được làm quen với bạn.'},
   ]},
  {n:13,zh:'高兴',py:'gāoxìng',pos:'Tính từ',vn:'vui, vui vẻ',em:'😄',lesson:3,
   ex_zh:'很高兴认识你。',ex_py:'Hěn gāoxìng rènshi nǐ.',ex_vn:'Rất vui được làm quen với bạn.',
   exList:[
     {zh:'很高兴认识你。',py:'Hěn gāoxìng rènshi nǐ.',vn:'Rất vui được làm quen với bạn.'},
   ],
   hanzi:[
     {c:'兴',p:'xìng / xīng',type:'独体字 · Chữ đơn (giản thể)',st:6,ord:'⺍ → 八(biến thể)',rad:'八 (bát)',mean:'vui, hứng thú',
      tip:'Hình ảnh đôi tay cùng nâng một vật lên trong niềm hân hoan → HỨNG KHỞI, VUI VẺ.',
      cf:'共 (gòng – "cùng nhau")',w:'高兴 / 兴趣'},
   ]},
  {n:14,zh:'认识',py:'rènshi',pos:'Động từ',vn:'quen, làm quen, nhận biết',em:'🤗',lesson:3,
   ex_zh:'认识你我也很高兴。',ex_py:'Rènshi nǐ wǒ yě hěn gāoxìng.',ex_vn:'Quen biết bạn tôi cũng rất vui.',
   exList:[
     {zh:'认识你我也很高兴。',py:'Rènshi nǐ wǒ yě hěn gāoxìng.',vn:'Quen biết bạn tôi cũng rất vui.'},
   ],
   hanzi:[
     {c:'认',p:'rèn',type:'左右结构 · Trái-phải (giản thể)',st:4,ord:'讠(ngôn) trái → 人(nhân) phải',rad:'讠 (ngôn – lời nói)',mean:'nhận, biết',
      tip:'讠(lời nói) + 人(người) → dùng lời để XÁC NHẬN một NGƯỜI mà mình biết.',
      cf:'队 (duì – "đội")',w:'认识 / 认为'},
   ]},
  {n:15,zh:'也',py:'yě',pos:'Phó từ',vn:'cũng',em:'➕',lesson:3,
   ex_zh:'认识你我也很高兴。',ex_py:'Rènshi nǐ wǒ yě hěn gāoxìng.',ex_vn:'Quen biết bạn tôi cũng rất vui.',
   exList:[
     {zh:'认识你我也很高兴。',py:'Rènshi nǐ wǒ yě hěn gāoxìng.',vn:'Quen biết bạn tôi cũng rất vui.'},
   ]},
];

var wuData = [
  {img:'🙋',label:'请问',py:'qǐngwèn',letter:'A'},
  {img:'📛',label:'叫',py:'jiào',letter:'B'},
  {img:'🏷️',label:'名字',py:'míngzi',letter:'C'},
  {img:'🙇',label:'对不起',py:'duìbuqǐ',letter:'D'},
  {img:'🤝',label:'没关系',py:'méi guānxi',letter:'E'},
  {img:'😄',label:'高兴',py:'gāoxìng',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 2: Ngữ âm)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-2/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Thanh mẫu và vận mẫu (2)',
          headers: ['Thanh mẫu (声母)', 'Vận mẫu ghép được (韵母)'],
          rows: [
            ['j, q, x', 'i [i], ü'],
            ['', 'ia, ie, iao, iou (iu)'],
            ['', 'ian, in'],
            ['', 'iang, ing, iong'],
            ['', 'üe, üan, ün']
          ],
          note: 'j, q, x chỉ ghép được với vận mẫu bắt đầu bằng "i" hoặc "ü" — không ghép trực tiếp với "a" hay "u".' },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-2-wb/ji.jpg', py:'jī', hz:'鸡'},
          {img:'/images/hsk1v3-bai-2-wb/qi.jpg', py:'qī', hz:'七'},
          {img:'/images/hsk1v3-bai-2-wb/xie.jpg', py:'xiě', hz:'写'},
          {img:'/images/hsk1v3-bai-2-wb/qing.jpg', py:'qǐng', hz:'请'},
          {img:'/images/hsk1v3-bai-2-wb/zaijian.jpg', py:'zàijiàn', hz:'再见'},
          {img:'/images/hsk1v3-bai-2-wb/xiexie.jpg', py:'xièxie', hz:'谢谢'},
          {img:'/images/hsk1v3-bai-2-wb/xingqi.jpg', py:'xīngqī', hz:'星期'},
          {img:'/images/hsk1v3-bai-2-wb/gaoxing.jpg', py:'gāoxìng', hz:'高兴'}
        ] },
        { type: 'table', caption: 'Quy tắc chính tả — "i, u, ü" đứng một mình',
          headers: ['1', '2', '3', '4'],
          rows: [
            ['yī', 'yí', 'yǐ', 'yì'],
            ['wū', 'wú', 'wǔ', 'wù'],
            ['yū', 'yú', 'yǔ', 'yù']
          ],
          note: 'Khi vận mẫu "i, u, ü" đứng một mình làm thành cả âm tiết (không có thanh mẫu phía trước), phải viết thành "yi, wu, yu".' },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-2-wb/yu.jpg', py:'yǔ', hz:'雨'},
          {img:'/images/hsk1v3-bai-2-wb/wu.jpg', py:'wǔ', hz:'五'},
          {img:'/images/hsk1v3-bai-2-wb/yi.jpg', py:'yī', hz:'一'},
          {img:'/images/hsk1v3-bai-2-wb/yizi.jpg', py:'yǐzi', hz:'椅子'}
        ] },
        { type: 'table', caption: 'Quy tắc chính tả — "j, q, x" ghép với "ü"',
          headers: ['1', '2', '3', '4'],
          rows: [
            ['jū', 'jú', 'jǔ', 'jù'],
            ['qū', 'qú', 'qǔ', 'qù'],
            ['xū', 'xú', 'xǔ', 'xù']
          ],
          note: 'Khi "j, q, x" ghép với vận mẫu "ü", bỏ hai chấm trên "ü" và viết thành "u" (bản chất vẫn đọc là "ü").' },
        { type: 'table', caption: 'Quy tắc chính tả — vận mẫu "iou"',
          headers: ['Đứng một mình', 'Ghép với m/d/n/l/j/q/x'],
          rows: [
            ['yōu, yóu, yǒu, yòu', 'miù, diū, niú, liǔ'],
            ['(viết là "you")', 'jiù, qiū, qiú, xiǔ (viết là "iu", dấu thanh đánh trên "u")']
          ],
          note: 'Từ ví dụ: yóuyǒng (bơi lội), lǚyóu (du lịch), péngyou (bạn bè).' },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-2-wb/jiu9.jpg', py:'jiǔ', hz:'九'},
          {img:'/images/hsk1v3-bai-2-wb/pengyou.jpg', py:'péngyou', hz:'朋友'},
          {img:'/images/hsk1v3-bai-2-wb/niunai.jpg', py:'niúnǎi', hz:'牛奶'},
          {img:'/images/hsk1v3-bai-2-wb/xiuxi.jpg', py:'xiūxi', hz:'休息'}
        ] }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-2/wb-tingdu.mp3',
      blocks: [
        { type: 'blankdrill', caption: 'Nghe và điền thanh mẫu còn thiếu',
          items: [
            {before:'', after:' + ián', answer:'q'}, {before:'', after:' + īn', answer:'j'}, {before:'', after:' + iǎng', answer:'x'},
            {before:'', after:' + iào', answer:'j'}, {before:'', after:' + iè', answer:'x'}, {before:'', after:' + ǐng', answer:'q'},
            {before:'', after:' + ǐ', answer:'j'}, {before:'', after:' + ù', answer:'q'}, {before:'', after:' + ià', answer:'x'}
          ] },
        { type: 'tonemc', caption: 'Nghe và chọn vận mẫu đúng',
          items: [
            {before:'j + ', after:'', answer:'iàn', options:['iān','ián','iǎn','iàn']}, {before:'x + ', after:'', answer:'iě', options:['iē','ié','iě','iè']},
            {before:'q + ', after:'', answer:'ù', options:['ū','ú','ǔ','ù']}, {before:'j + ', after:'', answer:'iào', options:['iāo','iáo','iǎo','iào']},
            {before:'q + ', after:'', answer:'ǐng', options:['īng','íng','ǐng','ìng']}, {before:'x + ', after:'', answer:'ué', options:['uē','ué','uě','uè']},
            {before:'j + ', after:'', answer:'iǎo', options:['iāo','iáo','iǎo','iào']}, {before:'x + ', after:'', answer:'īng', options:['īng','íng','ǐng','ìng']},
            {before:'j + ', after:'', answer:'iě', options:['iē','ié','iě','iè']}, {before:'q + ', after:'', answer:'ián', options:['iān','ián','iǎn','iàn']},
            {before:'x + ', after:'', answer:'iàn', options:['iān','ián','iǎn','iàn']}, {before:'q + ', after:'', answer:'ǐ', options:['ī','í','ǐ','ì']},
            {before:'j + ', after:'', answer:'iū', options:['iū','iú','iǔ','iù']}, {before:'x + ', after:'', answer:'iū', options:['iū','iú','iǔ','iù']},
            {before:'q + ', after:'', answer:'uán', options:['uān','uán','uǎn','uàn']}
          ] },
        { type: 'tonemc', caption: 'Nghe và chọn thanh điệu đúng',
          items: [
            {before:'xue → ', after:'', answer:'xué', options:['xuē','xué','xuě','xuè']}, {before:'jiao → ', after:'', answer:'jiào', options:['jiāo','jiáo','jiǎo','jiào']},
            {before:'qun → ', after:'', answer:'qún', options:['qūn','qún','qǔn','qùn']}, {before:'jiu → ', after:'', answer:'jiǔ', options:['jiū','jiú','jiǔ','jiù']},
            {before:'xin → ', after:'', answer:'xīn', options:['xīn','xín','xǐn','xìn']}, {before:'qing → ', after:'', answer:'qǐng', options:['qīng','qíng','qǐng','qìng']},
            {before:'xia → ', after:'', answer:'xià', options:['xiā','xiá','xiǎ','xià']}, {before:'jia → ', after:'', answer:'jiā', options:['jiā','jiá','jiǎ','jià']},
            {before:'qu → ', after:'', answer:'qù', options:['qū','qú','qǔ','qù']}, {before:'ji → ', after:'', answer:'jī', options:['jī','jí','jǐ','jì']},
            {before:'xiao → ', after:'', answer:'xiǎo', options:['xiāo','xiáo','xiǎo','xiào']}, {before:'jie → ', after:'', answer:'jiě', options:['jiē','jié','jiě','jiè']}
          ] },
        { type: 'dialoguepics', caption: 'Xem hình, đọc đúng lời hội thoại',
          items: [
            {img:'/images/hsk1v3-bai-2-wb/dlg_handshake.jpg', lines:['A: 很高兴认识你。', 'B: 认识你我也很高兴。']},
            {img:'/images/hsk1v3-bai-2-wb/dlg_girls.jpg', lines:['A: 老师，再见！', 'B: 再见！']},
            {img:'/images/hsk1v3-bai-2-wb/dlg_blonde.jpg', lines:['A: 大家好，我叫白家月。', 'B: 白家月，你好。']},
            {img:'/images/hsk1v3-bai-2-wb/dlg_couple.jpg', lines:['A: 对不起。', 'B: 没关系。']}
          ] }
      ]
    }
  ]
};

var dialogData = [
  {scene:'王一飞认识学生 · Làm quen tên trong lớp',
   preQuiz:[
     {q:'学生叫什么名字？',opts:['陈天中','王一飞','李文'],ans:0},
   ],
   lines:[
     {sp:0,zh:'请问，你叫什么名字？',py:'Qǐngwèn, nǐ jiào shénme míngzi?',vn:'Xin hỏi, em tên là gì?'},
     {sp:1,zh:'我叫陈天中。',py:'Wǒ jiào Chén Tiānzhōng.',vn:'Em tên là Trần Thiên Trung ạ.'},
   ]},
  {scene:'陈天中认错了人 · Chào nhầm người',
   preQuiz:[
     {q:'陈天中一开始把对方认成了谁？',opts:['安妮','白家月','李文'],ans:0},
     {q:'对方其实是谁？',opts:['白家月','安妮','陈天中的朋友'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你好，安妮！',py:'Nǐ hǎo, Ānnī!',vn:'Chào Annie!'},
     {sp:1,zh:'你好，陈天中！我不是安妮，我是白家月。',py:'Nǐ hǎo, Chén Tiānzhōng! Wǒ bú shì Ānnī, wǒ shì Bái Jiāyuè.',vn:'Chào Trần Thiên Trung! Mình không phải là Annie, mình là Bạch Gia Nguyệt.'},
     {sp:0,zh:'对不起！',py:'Duìbuqǐ!',vn:'Xin lỗi bạn!'},
     {sp:1,zh:'没关系！',py:'Méi guānxi!',vn:'Không sao đâu!'},
   ]},
  {scene:'李文和白家月第一次相遇 · Lần đầu gặp gỡ',
   preQuiz:[
     {q:'男的叫什么名字？',opts:['李文','王文','陈文'],ans:0},
     {q:'两人认识后心情怎么样？',opts:['很高兴','不高兴','没有说'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你好！我叫李文。',py:'Nǐ hǎo! Wǒ jiào Lǐ Wén.',vn:'Chào bạn! Mình tên là Lý Văn.'},
     {sp:1,zh:'你好！我叫白家月。',py:'Nǐ hǎo! Wǒ jiào Bái Jiāyuè.',vn:'Xin chào! Mình tên là Bạch Gia Nguyệt.'},
     {sp:0,zh:'很高兴认识你。',py:'Hěn gāoxìng rènshi nǐ.',vn:'Rất vui được làm quen với bạn.'},
     {sp:1,zh:'认识你我也很高兴。',py:'Rènshi nǐ wǒ yě hěn gāoxìng.',vn:'Mình cũng rất vui được làm quen với bạn.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'请', right:'问'},
  {left:'什', right:'么'},
  {left:'名', right:'字'},
  {left:'对不', right:'起'},
  {left:'没', right:'关系'},
  {left:'高', right:'兴'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'Muốn hỏi lịch sự tên của ai đó, bạn nói: “', blank:'请问', post:'，你叫什么名字？”', hint:'(xin hỏi)', ans:'请问'},
  {pre:'请问，你', blank:'叫', post:'什么名字？', hint:'(gọi là, tên là)', ans:'叫'},
  {pre:'我', blank:'叫', post:'陈天中。', hint:'(tên là)', ans:'叫'},
  {pre:'Nhận ra mình gọi nhầm tên bạn, bạn xin lỗi: “', blank:'对不起', post:'！”', hint:'(xin lỗi)', ans:'对不起'},
  {pre:'Đáp lại lời xin lỗi, bạn nói: “', blank:'没关系', post:'！”', hint:'(không sao)', ans:'没关系'},
  {pre:'我不', blank:'是', post:'安妮。', hint:'(là — phủ định)', ans:'是'},
  {pre:'很', blank:'高兴', post:'认识你。', hint:'(vui)', ans:'高兴'},
  {pre:'认识你我', blank:'也', post:'很高兴。', hint:'(cũng)', ans:'也'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','叫','什么','名字','？'], ans:'你叫什么名字？', audio:'你叫什么名字？'},
  {words:['我','叫','李文','。'], ans:'我叫李文。', audio:'我叫李文。'},
  {words:['我','不','是','安妮','。'], ans:'我不是安妮。', audio:'我不是安妮。'},
  {words:['对','不','起','！'], ans:'对不起！', audio:'对不起！'},
  {words:['没','关系','！'], ans:'没关系！', audio:'没关系！'},
  {words:['很','高兴','认识','你','。'], ans:'很高兴认识你。', audio:'很高兴认识你。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'Muốn hỏi tên ai đó một cách lịch sự, bạn nói?', opts:['请问，你叫什么名字？', '你好！', '谢谢！', '再见！'], ans:0},
  {q:'"我叫李文" có nghĩa là gì?', opts:['Tôi tên là Lý Văn', 'Tôi là học sinh', 'Tôi rất vui', 'Xin lỗi bạn'], ans:0},
  {q:'Gọi nhầm tên người khác, câu xin lỗi đúng là?', opts:['对不起', '没关系', '谢谢', '你好'], ans:0},
  {q:'Đáp lại lời xin lỗi một cách phù hợp là?', opts:['没关系', '对不起', '认识你', '高兴'], ans:0},
  {q:'"我不是安妮" nghĩa là gì?', opts:['Tôi không phải là Annie', 'Tôi là Annie', 'Bạn là Annie', 'Annie rất vui'], ans:0},
  {q:'Câu nào dùng để bày tỏ niềm vui khi làm quen ai đó?', opts:['很高兴认识你', '请问你叫什么名字', '对不起', '没关系'], ans:0},
  {q:'Trật tự từ cơ bản của câu tiếng Trung là gì?', opts:['Chủ ngữ + Vị ngữ + Tân ngữ', 'Vị ngữ + Chủ ngữ + Tân ngữ', 'Tân ngữ + Chủ ngữ + Vị ngữ', 'Không có trật tự cố định'], ans:0},
  {q:'Trong câu "我叫陈天中" đâu là Vị ngữ (động từ)?', opts:['叫', '我', '陈天中', 'Không có'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："请问，你叫什么名字？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Xin hỏi, bạn tên là gì?" Bạn trả lời thế nào?',
     hint: '我叫……', sample: '我叫李文。', sample_vn: 'Mình tên là Lý Văn.',
     note: 'Cấu trúc "我叫 + tên" dùng để tự giới thiệu tên của mình.'},
    {q_zh: '你叫错了朋友的名字，你应该说什么？', q_vn: 'Bạn gọi nhầm tên bạn của mình, bạn nên nói gì?',
     hint: '对不起！——没关系！', sample: '对不起！——没关系！', sample_vn: 'Xin lỗi! — Không sao đâu!',
     note: '对不起 dùng để xin lỗi, 没关系/没事 dùng để đáp lại lời xin lỗi.'},
    {q_zh: '你第一次认识一个新朋友，你应该说什么？', q_vn: 'Bạn lần đầu làm quen một người bạn mới, bạn nên nói gì?',
     hint: '很高兴认识你。', sample: '你好！我叫……，很高兴认识你。', sample_vn: 'Chào bạn! Mình tên là..., rất vui được làm quen với bạn.',
     note: '很高兴认识你 là câu xã giao phổ biến khi lần đầu gặp gỡ, làm quen.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Xin hỏi, bạn tên là gì?', zh:'请问，你叫什么名字？', py:'Qǐngwèn, nǐ jiào shénme míngzi?'},
  {vi:'Tôi tên là Lý Văn, tôi là học sinh.', zh:'我叫李文，我是学生。', py:'Wǒ jiào Lǐ Wén, wǒ shì xuésheng.'},
  {vi:'Xin lỗi! — Không sao đâu!', zh:'对不起！——没关系！', py:'Duìbuqǐ! — Méi guānxi!'},
  {vi:'Rất vui được làm quen với bạn, tôi cũng rất vui.', zh:'很高兴认识你，我也很高兴。', py:'Hěn gāoxìng rènshi nǐ, wǒ yě hěn gāoxìng.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Xin hỏi, thầy tên là gì ạ?', zh:'请问，老师叫什么名字？', py:'Qǐngwèn, lǎoshī jiào shénme míngzi?'},
  {vi:'Tôi không phải là học sinh, tôi là giáo viên.', zh:'我不是学生，我是老师。', py:'Wǒ bú shì xuésheng, wǒ shì lǎoshī.'},
  {vi:'Xin lỗi, mình gọi nhầm tên bạn rồi! — Không sao đâu, không sao đâu!', zh:'对不起，我叫错你的名字了！——没事，没事！', py:'Duìbuqǐ, wǒ jiàocuò nǐ de míngzi le! — Méishì, méishì!'},
  {vi:'Quen biết các bạn, mình rất vui.', zh:'认识你们，我很高兴。', py:'Rènshi nǐmen, wǒ hěn gāoxìng.'},
];
