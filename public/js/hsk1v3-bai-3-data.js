// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 3: 我是中国人
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'人',py:'rén',pos:'Danh từ',vn:'người',em:'🧑',lesson:1,
   ex_zh:'我是中国人。',ex_py:'Wǒ shì Zhōngguó rén.',ex_vn:'Tôi là người Trung Quốc.',
   exList:[
     {zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Tôi là người Trung Quốc.'},
   ],
   hanzi:[
     {c:'人',p:'rén',type:'独体字 · Chữ đơn',st:2,ord:'撇(phẩy) → 捺(mác)',rad:'人 (nhân – người)',mean:'người',
      tip:'Hình dáng giống một người đang bước đi, hai nét tượng trưng cho hai chân.',
      cf:'入 (rù – "vào", dễ nhầm vì nét gần giống nhưng phẩy dài hơn)',w:'中国人 / 法国人'},
   ]},
  {n:2,zh:'的',py:'de',pos:'Trợ từ',vn:'của',em:'🔗',lesson:1,
   ex_zh:'我的中文老师也是中国人。',ex_py:'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',ex_vn:'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.',
   exList:[
     {zh:'我的中文老师也是中国人。',py:'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',vn:'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.'},
   ]},
  {n:3,zh:'这',py:'zhè',pos:'Đại từ',vn:'này, đây',em:'👆',lesson:2,
   ex_zh:'这是谁？',ex_py:'Zhè shì shéi?',ex_vn:'Đây là ai?',
   exList:[
     {zh:'这是谁？',py:'Zhè shì shéi?',vn:'Đây là ai?'},
     {zh:'这是我女朋友。',py:'Zhè shì wǒ nǚpéngyou.',vn:'Đây là bạn gái tôi.'},
   ]},
  {n:4,zh:'谁',py:'shéi/shuí',pos:'Đại từ',vn:'ai',em:'❓',lesson:2,
   ex_zh:'这是谁？',ex_py:'Zhè shì shéi?',ex_vn:'Đây là ai?',
   exList:[
     {zh:'这是谁？',py:'Zhè shì shéi?',vn:'Đây là ai?'},
   ],
   hanzi:[
     {c:'谁',p:'shéi',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 隹(chuy) phải',rad:'讠 (ngôn – lời nói)',mean:'ai',
      tip:'讠(lời nói) + 隹(chim) → dùng lời để hỏi xem đó là AI, giống tiếng chim hỏi han.',
      cf:'难 (nán – "khó", cũng có 隹")',w:'这是谁 / 谁是老师'},
   ]},
  {n:5,zh:'女朋友',py:'nǚpéngyou',pos:'Danh từ',vn:'bạn gái, người yêu',em:'💑',lesson:2,
   ex_zh:'这是我女朋友。',ex_py:'Zhè shì wǒ nǚpéngyou.',ex_vn:'Đây là bạn gái tôi.',
   exList:[
     {zh:'这是我女朋友。',py:'Zhè shì wǒ nǚpéngyou.',vn:'Đây là bạn gái tôi.'},
   ]},
  {n:6,zh:'哪',py:'nǎ',pos:'Đại từ',vn:'nào',em:'🌍',lesson:2,
   ex_zh:'你女朋友是哪国人？',ex_py:'Nǐ nǚpéngyou shì nǎ guó rén?',ex_vn:'Bạn gái của bạn là người nước nào?',
   exList:[
     {zh:'你女朋友是哪国人？',py:'Nǐ nǚpéngyou shì nǎ guó rén?',vn:'Bạn gái của bạn là người nước nào?'},
   ]},
  {n:7,zh:'国',py:'guó',pos:'Danh từ',vn:'quốc gia, đất nước',em:'🏳️',lesson:2,
   ex_zh:'你女朋友是哪国人？',ex_py:'Nǐ nǚpéngyou shì nǎ guó rén?',ex_vn:'Bạn gái của bạn là người nước nào?',
   exList:[
     {zh:'你女朋友是哪国人？',py:'Nǐ nǚpéngyou shì nǎ guó rén?',vn:'Bạn gái của bạn là người nước nào?'},
   ]},
  {n:8,zh:'她',py:'tā',pos:'Đại từ',vn:'cô ấy, chị ấy, bạn ấy',em:'👩',lesson:2,
   ex_zh:'她也是泰国人。',ex_py:'Tā yě shì Tàiguó rén.',ex_vn:'Cô ấy cũng là người Thái Lan.',
   exList:[
     {zh:'她也是泰国人。',py:'Tā yě shì Tàiguó rén.',vn:'Cô ấy cũng là người Thái Lan.'},
   ]},
  {n:9,zh:'喂',py:'wèi',pos:'Thán từ',vn:'a lô',em:'📞',lesson:3,
   ex_zh:'喂，一飞！',ex_py:'Wèi, Yīfēi!',ex_vn:'A lô, Nhất Phi à!',
   exList:[
     {zh:'喂，一飞！',py:'Wèi, Yīfēi!',vn:'A lô, Nhất Phi à!'},
   ]},
  {n:10,zh:'姐姐',py:'jiějie',pos:'Danh từ',vn:'chị gái',em:'👧',lesson:3,
   ex_zh:'姐姐！',ex_py:'Jiějie!',ex_vn:'Chị ơi!',
   exList:[
     {zh:'姐姐！',py:'Jiějie!',vn:'Chị ơi!'},
   ]},
  {n:11,zh:'工作',py:'gōngzuò',pos:'Danh từ',vn:'công việc',em:'💼',lesson:3,
   ex_zh:'你工作还忙吗？',ex_py:'Nǐ gōngzuò hái máng ma?',ex_vn:'Công việc của em vẫn bận chứ?',
   exList:[
     {zh:'你工作还忙吗？',py:'Nǐ gōngzuò hái máng ma?',vn:'Công việc của em vẫn bận chứ?'},
   ]},
  {n:12,zh:'还',py:'hái',pos:'Phó từ',vn:'vẫn',em:'🔁',lesson:3,
   ex_zh:'对，还很忙。',ex_py:'Duì, hái hěn máng.',ex_vn:'Vâng, vẫn rất bận.',
   exList:[
     {zh:'对，还很忙。',py:'Duì, hái hěn máng.',vn:'Vâng, vẫn rất bận.'},
   ]},
  {n:13,zh:'忙',py:'máng',pos:'Tính từ',vn:'bận, bận rộn',em:'😰',lesson:3,
   ex_zh:'你也很忙吗？',ex_py:'Nǐ yě hěn máng ma?',ex_vn:'Chị cũng bận lắm phải không?',
   exList:[
     {zh:'你也很忙吗？',py:'Nǐ yě hěn máng ma?',vn:'Chị cũng bận lắm phải không?'},
   ],
   hanzi:[
     {c:'忙',p:'máng',type:'左右结构 · Trái-phải',st:6,ord:'忄(tâm) trái → 亡(vong) phải',rad:'忄 (tâm – trái tim)',mean:'bận rộn',
      tip:'忄(tâm/lòng dạ) + 亡(mất) → trong lòng cảm thấy như MẤT thời gian vì quá BẬN RỘN.',
      cf:'忘 (wàng – "quên", cũng có 亡" nhưng ở trên)',w:'很忙 / 工作忙'},
   ]},
  {n:14,zh:'吗',py:'ma',pos:'Trợ từ',vn:'…phải không? (dùng ở cuối câu để hỏi)',em:'❔',lesson:3,
   ex_zh:'你工作还忙吗？',ex_py:'Nǐ gōngzuò hái máng ma?',ex_vn:'Công việc của em vẫn bận chứ?',
   exList:[
     {zh:'你工作还忙吗？',py:'Nǐ gōngzuò hái máng ma?',vn:'Công việc của em vẫn bận chứ?'},
   ]},
  {n:15,zh:'对',py:'duì',pos:'Tính từ',vn:'đúng',em:'✔️',lesson:3,
   ex_zh:'对，还很忙。',ex_py:'Duì, hái hěn máng.',ex_vn:'Vâng, vẫn rất bận.',
   exList:[
     {zh:'对，还很忙。',py:'Duì, hái hěn máng.',vn:'Vâng, vẫn rất bận.'},
   ]},
  {n:16,zh:'太',py:'tài',pos:'Phó từ',vn:'quá, lắm',em:'⚡',lesson:3,
   ex_zh:'我不太忙。',ex_py:'Wǒ bú tài máng.',ex_vn:'Tôi không bận lắm.',
   exList:[
     {zh:'我不太忙。',py:'Wǒ bú tài máng.',vn:'Tôi không bận lắm.'},
   ]},
  {n:17,zh:'我们',py:'wǒmen',pos:'Đại từ',vn:'chúng tôi, chúng ta',em:'🙋‍♀️🙋',lesson:3,
   ex_zh:'我们很想你。',ex_py:'Wǒmen hěn xiǎng nǐ.',ex_vn:'Chúng tôi rất nhớ em.',
   exList:[
     {zh:'我们很想你。',py:'Wǒmen hěn xiǎng nǐ.',vn:'Chúng tôi rất nhớ em.'},
   ]},
  {n:18,zh:'想',py:'xiǎng',pos:'Động từ',vn:'nhớ',em:'💭',lesson:3,
   ex_zh:'我也想你们。',ex_py:'Wǒ yě xiǎng nǐmen.',ex_vn:'Em cũng nhớ mọi người.',
   exList:[
     {zh:'我也想你们。',py:'Wǒ yě xiǎng nǐmen.',vn:'Em cũng nhớ mọi người.'},
   ],
   hanzi:[
     {c:'想',p:'xiǎng',type:'上下结构 · Trên-dưới',st:13,ord:'相(tương) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim)',mean:'nhớ, nghĩ',
      tip:'相(nhìn nhau) + 心(trái tim) → trong TIM luôn hướng về hình ảnh người kia = NHỚ, NGHĨ tới.',
      cf:'相 (xiāng – "lẫn nhau", phần trên của 想")',w:'想你 / 我想'},
   ]},
  {n:19,zh:'中国',py:'Zhōngguó',pos:'Danh từ riêng',vn:'Trung Quốc',em:'🇨🇳',lesson:1,
   ex_zh:'我是中国人。',ex_py:'Wǒ shì Zhōngguó rén.',ex_vn:'Tôi là người Trung Quốc.',
   exList:[
     {zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Tôi là người Trung Quốc.'},
   ]},
  {n:20,zh:'法国',py:'Fǎguó',pos:'Danh từ riêng',vn:'Pháp',em:'🇫🇷',lesson:1,
   ex_zh:'我是法国人。',ex_py:'Wǒ shì Fǎguó rén.',ex_vn:'Tôi là người Pháp.',
   exList:[
     {zh:'我是法国人。',py:'Wǒ shì Fǎguó rén.',vn:'Tôi là người Pháp.'},
   ]},
  {n:21,zh:'中文',py:'Zhōngwén',pos:'Danh từ riêng',vn:'tiếng Trung Quốc',em:'🈶',lesson:1,
   ex_zh:'我的中文老师也是中国人。',ex_py:'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',ex_vn:'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.',
   exList:[
     {zh:'我的中文老师也是中国人。',py:'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',vn:'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.'},
   ]},
  {n:22,zh:'泰国',py:'Tàiguó',pos:'Danh từ riêng',vn:'Thái Lan',em:'🇹🇭',lesson:2,
   ex_zh:'她也是泰国人。',ex_py:'Tā yě shì Tàiguó rén.',ex_vn:'Cô ấy cũng là người Thái Lan.',
   exList:[
     {zh:'她也是泰国人。',py:'Tā yě shì Tàiguó rén.',vn:'Cô ấy cũng là người Thái Lan.'},
   ]},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 3: Ngữ âm)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-3/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Luyện đọc âm tiết zh, sh, ch, z (4 thanh điệu)',
          headers: ['1', '2', '3', '4'],
          rows: [
            ['zhā', 'zhá', 'zhǎ', 'zhà'],
            ['shē', 'shé', 'shě', 'shè'],
            ['chuāng', 'chuáng', 'chuǎng', 'chuàng'],
            ['zuō', 'zuó', 'zuǒ', 'zuò']
          ] },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-3-wb/ren.jpg', py:'rén', hz:'人'},
          {img:'/images/hsk1v3-bai-3-wb/zuo.jpg', py:'zuò', hz:'坐'},
          {img:'/images/hsk1v3-bai-3-wb/cai.jpg', py:'cài', hz:'菜'},
          {img:'/images/hsk1v3-bai-3-wb/shu.jpg', py:'shū', hz:'书'},
          {img:'/images/hsk1v3-bai-3-wb/shouji.jpg', py:'shǒujī', hz:'手机'},
          {img:'/images/hsk1v3-bai-3-wb/yisheng.jpg', py:'yīshēng', hz:'医生'},
          {img:'/images/hsk1v3-bai-3-wb/zhuozi.jpg', py:'zhuōzi', hz:'桌子'},
          {img:'/images/hsk1v3-bai-3-wb/chuzuche.jpg', py:'chūzūchē', hz:'出租车'}
        ] },
        { type: 'table', caption: 'Quy tắc chính tả — vận mẫu bắt đầu bằng "u" đứng một mình',
          headers: ['1', '2', '3', '4'],
          rows: [
            ['wā', 'wá', 'wǎ', 'wà'],
            ['wēi', 'wéi', 'wěi', 'wèi']
          ],
          note: 'Các vận mẫu "ua, uo, uai, uei, uan, uen, uang, ueng" khi đứng một mình (không có thanh mẫu phía trước) thì "u" được viết thành "w": ua→wa, uo→wo, uai→wai, uei→wei, uan→wan, uen→wen, uang→wang, ueng→weng.' },
        { type: 'table', caption: 'Quy tắc chính tả — vận mẫu "uei, uen" khi ghép với thanh mẫu',
          rows: [
            ['shuí', 'chǔn', 'suì', 'cūn']
          ],
          note: 'Khi vận mẫu "uei, uen" ghép với thanh mẫu thì viết thành "ui, un". Ví dụ: shuí, chǔn, suì, cūn.' },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-3-wb/chun.jpg', py:'chūn', hz:'春'},
          {img:'/images/hsk1v3-bai-3-wb/cun.jpg', py:'cūn', hz:'村'},
          {img:'/images/hsk1v3-bai-3-wb/shui.jpg', py:'shuì', hz:'睡'},
          {img:'/images/hsk1v3-bai-3-wb/zui.jpg', py:'zuǐ', hz:'嘴'}
        ] }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-3/wb-tingdu.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Nghe và chọn vận mẫu đúng',
          items: [
            {before:'z + ', after:'', answer:'ū', options:['ū','ú','ǔ','ù']}, {before:'zh + ', after:'', answer:'ī', options:['ī','í','ǐ','ì']},
            {before:'c + ', after:'', answer:'ài', options:['āi','ái','ǎi','ài']}, {before:'z + ', after:'', answer:'ì', options:['ī','í','ǐ','ì']},
            {before:'ch + ', after:'', answer:'āo', options:['āo','áo','ǎo','ào']}, {before:'r + ', after:'', answer:'èn', options:['ēn','én','ěn','èn']},
            {before:'sh + ', after:'', answer:'àng', options:['āng','áng','ǎng','àng']}, {before:'z + ', after:'', answer:'ěn', options:['ēn','én','ěn','èn']},
            {before:'r + ', after:'', answer:'ì', options:['ī','í','ǐ','ì']}, {before:'s + ', after:'', answer:'ān', options:['ān','án','ǎn','àn']},
            {before:'ch + ', after:'', answer:'uān', options:['uān','uán','uǎn','uàn']}, {before:'r + ', after:'', answer:'è', options:['ē','é','ě','è']},
            {before:'zh + ', after:'', answer:'uō', options:['uō','uó','uǒ','uò']}, {before:'c + ', after:'', answer:'óng', options:['ōng','óng','ǒng','òng']},
            {before:'sh + ', after:'', answer:'éi', options:['ēi','éi','ěi','èi']}
          ] },
        { type: 'tonemc', caption: 'Nghe và chọn thanh điệu đúng',
          items: [
            {before:'che → ', after:'', answer:'chē', options:['chē','ché','chě','chè']}, {before:'ren → ', after:'', answer:'rén', options:['rēn','rén','rěn','rèn']},
            {before:'chang → ', after:'', answer:'chàng', options:['chāng','cháng','chǎng','chàng']}, {before:'zao → ', after:'', answer:'zǎo', options:['zāo','záo','zǎo','zào']},
            {before:'shou → ', after:'', answer:'shǒu', options:['shōu','shóu','shǒu','shòu']}, {before:'zhen → ', after:'', answer:'zhēn', options:['zhēn','zhén','zhěn','zhèn']},
            {before:'sui → ', after:'', answer:'suì', options:['suī','suí','suǐ','suì']}, {before:'sheng → ', after:'', answer:'shēng', options:['shēng','shéng','shěng','shèng']},
            {before:'ri → ', after:'', answer:'rì', options:['rī','rí','rǐ','rì']}, {before:'zhong → ', after:'', answer:'zhōng', options:['zhōng','zhóng','zhǒng','zhòng']},
            {before:'shui → ', after:'', answer:'shuì', options:['shuī','shuí','shuǐ','shuì']}, {before:'zuo → ', after:'', answer:'zuò', options:['zuō','zuó','zuǒ','zuò']},
            {before:'chuang → ', after:'', answer:'chuáng', options:['chuāng','chuáng','chuǎng','chuàng']}, {before:'shu → ', after:'', answer:'shū', options:['shū','shú','shǔ','shù']},
            {before:'si → ', after:'', answer:'sì', options:['sī','sí','sǐ','sì']}
          ] },
        { type: 'dialoguepics', caption: 'Xem hình, chọn đúng lời hội thoại',
          items: [
            {img:'/images/hsk1v3-bai-3-wb/dlg1_teacher.jpg', lines:['A: 王老师是你的中文老师吗？', 'B: 是的。']},
            {img:'/images/hsk1v3-bai-3-wb/dlg2_phone.jpg', lines:['A: 喂，你工作忙吗？', 'B: 我工作不忙。']},
            {img:'/images/hsk1v3-bai-3-wb/dlg3_airplane.jpg', lines:['A: 我是法国人。', 'B: 我也是法国人。']},
            {img:'/images/hsk1v3-bai-3-wb/dlg4_handshake.jpg', lines:['A: 这是我女朋友。', 'B: 你好，很高兴认识你。']}
          ] }
      ]
    }
  ]
};

var dialogData = [
  {scene:'李文和白家月聊国籍 · Nói về quốc tịch',
   preQuiz:[
     {q:'李文是哪国人？',opts:['中国人','法国人','泰国人'],ans:0},
     {q:'白家月的中文老师是哪国人？',opts:['中国人','法国人','泰国人'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Mình là người Trung Quốc.'},
     {sp:1,zh:'我是法国人。我的中文老师也是中国人。',py:'Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',vn:'Mình là người Pháp. Giáo viên tiếng Trung của mình cũng là người Trung Quốc.'},
   ]},
  {scene:'安妮看陈天中的照片 · Xem ảnh trong điện thoại',
   preQuiz:[
     {q:'陈天中手机里照片中的人是谁？',opts:['他女朋友','他姐姐','他同学'],ans:0},
     {q:'陈天中的女朋友是哪国人？',opts:['中国人','法国人','泰国人'],ans:2},
   ],
   lines:[
     {sp:0,zh:'这是谁？',py:'Zhè shì shéi?',vn:'Đây là ai vậy?'},
     {sp:1,zh:'这是我女朋友。',py:'Zhè shì wǒ nǚpéngyou.',vn:'Đây là bạn gái mình.'},
     {sp:0,zh:'你女朋友是哪国人？',py:'Nǐ nǚpéngyou shì nǎ guó rén?',vn:'Bạn gái của bạn là người nước nào?'},
     {sp:1,zh:'她也是泰国人。',py:'Tā yě shì Tàiguó rén.',vn:'Cô ấy cũng là người Thái Lan.'},
   ]},
  {scene:'王一雪打视频电话给王一飞 · Gọi video cho em trai',
   preQuiz:[
     {q:'王一飞工作还忙吗？',opts:['很忙','不忙','不知道'],ans:0},
     {q:'王一雪工作忙吗？',opts:['不太忙','很忙','不知道'],ans:0},
     {q:'王一雪打电话最后对王一飞说了什么？',opts:['我们很想你','你好','再见'],ans:0},
   ],
   lines:[
     {sp:0,zh:'喂，一飞！',py:'Wèi, Yīfēi!',vn:'A lô, Nhất Phi à!'},
     {sp:1,zh:'姐姐！',py:'Jiějie!',vn:'Chị ơi!'},
     {sp:0,zh:'你工作还忙吗？',py:'Nǐ gōngzuò hái máng ma?',vn:'Công việc của em vẫn bận chứ?'},
     {sp:1,zh:'对，还很忙。你也很忙吗？',py:'Duì, hái hěn máng. Nǐ yě hěn máng ma?',vn:'Vâng, vẫn rất bận. Chị cũng bận lắm phải không?'},
     {sp:0,zh:'我不太忙。我们很想你。',py:'Wǒ bú tài máng. Wǒmen hěn xiǎng nǐ.',vn:'Chị không bận lắm. Mọi người đều rất nhớ em.'},
     {sp:1,zh:'我也想你们。',py:'Wǒ yě xiǎng nǐmen.',vn:'Em cũng nhớ mọi người.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'女朋', right:'友'},
  {left:'工', right:'作'},
  {left:'中', right:'国'},
  {left:'法', right:'国'},
  {left:'泰', right:'国'},
  {left:'我', right:'们'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我是', blank:'中国', post:'人。', hint:'(Trung Quốc)', ans:'中国'},
  {pre:'这是我', blank:'女朋友', post:'。', hint:'(bạn gái)', ans:'女朋友'},
  {pre:'你女朋友是哪', blank:'国', post:'人？', hint:'(quốc gia — nước nào)', ans:'国'},
  {pre:'她也是', blank:'泰国', post:'人。', hint:'(Thái Lan)', ans:'泰国'},
  {pre:'你工作还忙', blank:'吗', post:'？', hint:'(trợ từ nghi vấn cuối câu)', ans:'吗'},
  {pre:'我不', blank:'太', post:'忙。', hint:'(quá, lắm)', ans:'太'},
  {pre:'我们很', blank:'想', post:'你。', hint:'(nhớ)', ans:'想'},
  {pre:'你', blank:'也', post:'很忙吗？', hint:'(cũng)', ans:'也'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','是','中国','人','。'], ans:'我是中国人。', audio:'我是中国人。'},
  {words:['这','是','我','女朋友','。'], ans:'这是我女朋友。', audio:'这是我女朋友。'},
  {words:['你','女朋友','是','哪','国','人','？'], ans:'你女朋友是哪国人？', audio:'你女朋友是哪国人？'},
  {words:['你','工作','还','忙','吗','？'], ans:'你工作还忙吗？', audio:'你工作还忙吗？'},
  {words:['我','不','太','忙','。'], ans:'我不太忙。', audio:'我不太忙。'},
  {words:['我们','很','想','你','。'], ans:'我们很想你。', audio:'我们很想你。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"我是中国人" nghĩa là gì?', opts:['Tôi là người Trung Quốc', 'Tôi là người Pháp', 'Tôi là người Thái Lan', 'Tôi là giáo viên'], ans:0},
  {q:'Muốn hỏi "đây là ai", bạn nói?', opts:['这是谁？', '你好吗？', '你叫什么名字？', '再见！'], ans:0},
  {q:'"女朋友" nghĩa là gì?', opts:['bạn gái', 'bạn trai', 'bạn học', 'giáo viên'], ans:0},
  {q:'Muốn hỏi quốc tịch, dùng cấu trúc nào?', opts:['哪国人', '什么名字', '怎么样', '多大'], ans:0},
  {q:'Trợ từ "吗" dùng để làm gì?', opts:['tạo câu hỏi có/không ở cuối câu', 'phủ định', 'chỉ số nhiều', 'chỉ sở hữu'], ans:0},
  {q:'"还很忙" nghĩa là gì?', opts:['vẫn còn rất bận', 'không bận nữa', 'rất rảnh', 'đã xong việc'], ans:0},
  {q:'"我们很想你" nghĩa là gì?', opts:['Chúng tôi rất nhớ bạn', 'Chúng tôi không thích bạn', 'Bạn rất bận', 'Bạn phải làm việc'], ans:0},
  {q:'Trợ từ "的" dùng để làm gì?', opts:['nối định ngữ với danh từ trung tâm, biểu thị sở hữu', 'tạo câu hỏi', 'phủ định', 'chỉ số nhiều'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你是哪国人？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bạn là người nước nào?" Bạn trả lời thế nào?',
     hint: '我是……人。', sample: '我是越南人。', sample_vn: 'Tôi là người Việt Nam.',
     note: 'Cấu trúc "我是 + tên nước + 人" dùng để nói quốc tịch của mình.'},
    {q_zh: '朋友问你："你工作忙吗？" 你怎么回答？', q_vn: 'Bạn của bạn hỏi: "Công việc của bạn có bận không?" Bạn trả lời thế nào?',
     hint: '我（不）太忙。', sample: '我不太忙。', sample_vn: 'Tôi không bận lắm.',
     note: '"太 + tính từ" thường đi kèm "不" để nói mức độ không quá cao: 不太忙 = không bận lắm.'},
    {q_zh: '你很久没见家人了，见面的时候你想说什么？', q_vn: 'Bạn đã lâu không gặp gia đình, khi gặp mặt bạn muốn nói gì?',
     hint: '我很想你/你们。', sample: '我很想你们。', sample_vn: 'Con rất nhớ mọi người.',
     note: '想 + người ở đây có nghĩa là "nhớ" (nhớ ai đó), khác với 想 mang nghĩa "muốn" khi đi với động từ.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi là người Trung Quốc, cô ấy là người Pháp.', zh:'我是中国人，她是法国人。', py:'Wǒ shì Zhōngguó rén, tā shì Fǎguó rén.'},
  {vi:'Đây là bạn gái tôi, cô ấy là người Thái Lan.', zh:'这是我女朋友，她是泰国人。', py:'Zhè shì wǒ nǚpéngyou, tā shì Tàiguó rén.'},
  {vi:'Công việc của bạn vẫn bận chứ? — Đúng vậy, vẫn rất bận.', zh:'你工作还忙吗？——对，还很忙。', py:'Nǐ gōngzuò hái máng ma? — Duì, hái hěn máng.'},
  {vi:'Chúng tôi rất nhớ bạn.', zh:'我们很想你。', py:'Wǒmen hěn xiǎng nǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cô ấy không phải người Pháp, cô ấy là người Trung Quốc.', zh:'她不是法国人，她是中国人。', py:'Tā bú shì Fǎguó rén, tā shì Zhōngguó rén.'},
  {vi:'Đây là ai? — Đây là chị gái tôi.', zh:'这是谁？——这是我姐姐。', py:'Zhè shì shéi? — Zhè shì wǒ jiějie.'},
  {vi:'Bạn cũng bận à? — Tôi không bận lắm.', zh:'你也很忙吗？——我不太忙。', py:'Nǐ yě hěn máng ma? — Wǒ bú tài máng.'},
  {vi:'Tôi cũng rất nhớ các bạn.', zh:'我也很想你们。', py:'Wǒ yě hěn xiǎng nǐmen.'},
];
