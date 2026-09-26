// ══════════════════════════════════════════
// DATA — HSK5 Bài 31: 登门槛效应 (Hiệu ứng “bước chân qua ngưỡng cửa”)
// Unit 11 观察社会 · Nguồn: HSK标准教程5下 (tr. 114–121) + 练习册 bài 31
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'门槛',py:'ménkǎn',pos:'Danh từ',vn:'ngưỡng cửa, bậc cửa',hv:'môn hạm',em:'🚪',lesson:1,
   explain:['Thanh gỗ / đá chắn ngang dưới khung cửa — bậc cửa, ngưỡng cửa.','Nghĩa bóng: tiêu chuẩn, điều kiện tối thiểu để bước vào một nơi, một lĩnh vực: 门槛很高 / 降低门槛.','登门槛效应 = hiệu ứng “bước chân qua ngưỡng cửa” (foot-in-the-door): đã nhận lời một yêu cầu nhỏ thì dễ nhận tiếp yêu cầu lớn hơn.'],
   usage:'迈过 / 跨过 + 门槛; 门槛 + 高 / 低; 降低 / 提高 + 门槛. Trong bài: 登门槛效应, 登门槛技术, 登门槛行为.',
   collo:['登门槛效应','门槛很高','降低门槛','迈过门槛'],
   ex_zh:'不得不说，这位朋友很会利用“登门槛效应”来处理问题。',ex_py:'Bùdébù shuō, zhè wèi péngyou hěn huì lìyòng “dēng ménkǎn xiàoyìng” lái chǔlǐ wèntí.',ex_vn:'Phải nói rằng, người bạn này rất biết tận dụng “hiệu ứng bước chân qua ngưỡng cửa” để giải quyết vấn đề.',
   exList:[
     {zh:'不得不说，这位朋友很会利用“登门槛效应”来处理问题。',py:'Bùdébù shuō, zhè wèi péngyou hěn huì lìyòng “dēng ménkǎn xiàoyìng” lái chǔlǐ wèntí.',vn:'Phải nói rằng, người bạn này rất biết tận dụng “hiệu ứng bước chân qua ngưỡng cửa” để giải quyết vấn đề.'},
     {zh:'这家公司的门槛很高，没有硕士学位很难进去。',py:'Zhè jiā gōngsī de ménkǎn hěn gāo, méiyǒu shuòshì xuéwèi hěn nán jìnqu.',vn:'Tiêu chuẩn đầu vào của công ty này rất cao, không có bằng thạc sĩ thì rất khó vào.'},
     {zh:'进门的时候小心点儿，别被门槛绊倒了。',py:'Jìn mén de shíhou xiǎoxīn diǎnr, bié bèi ménkǎn bàndǎo le.',vn:'Lúc vào cửa cẩn thận nhé, kẻo vấp phải bậc cửa mà ngã.'}
   ],
   colloFull:[
     {zh:'登门槛效应',py:'dēng ménkǎn xiàoyìng',vn:'hiệu ứng “bước chân qua ngưỡng cửa”'},
     {zh:'门槛很高',py:'ménkǎn hěn gāo',vn:'ngưỡng (tiêu chuẩn) rất cao'},
     {zh:'降低门槛',py:'jiàngdī ménkǎn',vn:'hạ thấp tiêu chuẩn đầu vào'},
     {zh:'迈过门槛',py:'màiguò ménkǎn',vn:'bước qua ngưỡng cửa'},
     {zh:'登门槛技术',py:'dēng ménkǎn jìshù',vn:'kỹ thuật “bước chân qua ngưỡng cửa”'}
   ],
   patterns:[
     {s:'N (公司 / 学校 / 行业) + 的门槛 + 高 / 低',m:'tiêu chuẩn đầu vào của … cao / thấp'},
     {s:'降低 / 提高 + 门槛',m:'hạ / nâng tiêu chuẩn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiêu chuẩn đầu vào của trường này càng ngày càng cao.',answer:'这所学校的门槛越来越高了。',answerPy:'Zhè suǒ xuéxiào de ménkǎn yuè lái yuè gāo le.',
      note:'门槛 dùng nghĩa bóng = tiêu chuẩn. 越来越 + tính từ + 了, không thêm 很.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Bà nội bị vấp bậc cửa mà ngã.',answer:'奶奶被门槛绊倒了。',answerPy:'Nǎinai bèi ménkǎn bàndǎo le.',
      note:'被 + N + V + bổ ngữ kết quả (绊倒).',pair:'被'}
   ]},

  {n:2,zh:'报社',py:'bàoshè',pos:'Danh từ',vn:'toà soạn báo',hv:'báo xã',em:'📰',lesson:1,
   explain:['Cơ quan xuất bản báo — toà soạn báo.','社 = tổ chức, cơ quan: 报社, 出版社 (nhà xuất bản), 旅行社 (công ty du lịch).'],
   usage:'在报社工作 / 当编辑; 一家报社 (lượng từ 家); 报社的记者 / 编辑; 给报社投稿 (gửi bài cho báo).',
   collo:['在报社工作','一家报社','报社记者','报社编辑'],
   ex_zh:'一个朋友在报社当编辑。',ex_py:'Yí ge péngyou zài bàoshè dāng biānjí.',ex_vn:'Một người bạn làm biên tập viên ở toà soạn báo.',
   exList:[
     {zh:'一个朋友在报社当编辑。',py:'Yí ge péngyou zài bàoshè dāng biānjí.',vn:'Một người bạn làm biên tập viên ở toà soạn báo.'},
     {zh:'我姐姐大学毕业后，在一家报社当记者。',py:'Wǒ jiějie dàxué bìyè hòu, zài yì jiā bàoshè dāng jìzhě.',vn:'Chị tôi sau khi tốt nghiệp đại học làm phóng viên ở một toà soạn báo.'},
     {zh:'他把自己写的文章寄给了好几家报社。',py:'Tā bǎ zìjǐ xiě de wénzhāng jì gěile hǎo jǐ jiā bàoshè.',vn:'Cậu ấy gửi bài mình viết cho mấy toà soạn báo liền.'}
   ],
   colloFull:[
     {zh:'在报社工作',py:'zài bàoshè gōngzuò',vn:'làm việc ở toà soạn báo'},
     {zh:'一家报社',py:'yì jiā bàoshè',vn:'một toà soạn báo'},
     {zh:'报社记者',py:'bàoshè jìzhě',vn:'phóng viên của toà soạn'},
     {zh:'报社编辑',py:'bàoshè biānjí',vn:'biên tập viên của toà soạn'},
     {zh:'给报社投稿',py:'gěi bàoshè tóugǎo',vn:'gửi bài cho toà soạn báo'}
   ],
   patterns:[
     {s:'在 + 报社 + 当 + 编辑 / 记者',m:'làm biên tập viên / phóng viên ở toà soạn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài văn cậu ấy viết đã được toà soạn báo đăng rồi.',answer:'他写的文章被报社发表了。',answerPy:'Tā xiě de wénzhāng bèi bàoshè fābiǎo le.',
      note:'被 + 报社 + 发表: bị động, người thực hiện là toà soạn.',pair:'被'},
     {promptLang:'vi',prompt:'Chị tôi không chỉ là phóng viên của toà soạn mà cũng là một nhà văn.',answer:'我姐姐不仅是报社的记者，也是一位作家。',answerPy:'Wǒ jiějie bùjǐn shì bàoshè de jìzhě, yě shì yí wèi zuòjiā.',
      note:'不仅……也……: hai thân phận song song.',pair:'不仅……也……'}
   ]},

  {n:3,zh:'编辑',py:'biānjí',pos:'Danh từ',vn:'biên tập viên',hv:'biên tập',em:'✍️',lesson:1,
   explain:['Danh từ: người làm công việc biên tập sách, báo — biên tập viên.','Còn là động từ: biên tập, sắp xếp, chỉnh sửa tài liệu, bài viết: 编辑资料 / 编辑文章.'],
   usage:'当编辑 / 做编辑; 杂志编辑; 总编辑 (tổng biên tập). Động từ: 编辑 + 资料 / 文章 / 杂志 / 视频.',
   collo:['当编辑','编辑资料','杂志编辑','总编辑'],
   ex_zh:'这些资料我已经编辑好了，你看看吧。',ex_py:'Zhèxiē zīliào wǒ yǐjīng biānjí hǎo le, nǐ kànkan ba.',ex_vn:'Chỗ tài liệu này tôi đã biên tập xong rồi, anh xem đi.',
   exList:[
     {zh:'一个朋友在报社当编辑。',py:'Yí ge péngyou zài bàoshè dāng biānjí.',vn:'Một người bạn làm biên tập viên ở toà soạn báo.'},
     {zh:'这些资料我已经编辑好了，你看看吧。',py:'Zhèxiē zīliào wǒ yǐjīng biānjí hǎo le, nǐ kànkan ba.',vn:'Chỗ tài liệu này tôi đã biên tập xong rồi, anh xem đi.'},
     {zh:'她是一位杂志编辑，每天都要看很多文章。',py:'Tā shì yí wèi zázhì biānjí, měi tiān dōu yào kàn hěn duō wénzhāng.',vn:'Cô ấy là biên tập viên tạp chí, ngày nào cũng phải đọc rất nhiều bài.'}
   ],
   colloFull:[
     {zh:'当编辑',py:'dāng biānjí',vn:'làm biên tập viên'},
     {zh:'编辑资料',py:'biānjí zīliào',vn:'biên tập tài liệu'},
     {zh:'杂志编辑',py:'zázhì biānjí',vn:'biên tập viên tạp chí'},
     {zh:'总编辑',py:'zǒngbiānjí',vn:'tổng biên tập'},
     {zh:'编辑视频',py:'biānjí shìpín',vn:'biên tập video'}
   ],
   patterns:[
     {s:'在 + nơi + 当编辑',m:'làm biên tập viên ở …'},
     {s:'编辑 + 资料 / 文章 / 视频',m:'(động từ) biên tập …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy vừa biết viết bài vừa biết biên tập video.',answer:'他既会写文章，又会编辑视频。',answerPy:'Tā jì huì xiě wénzhāng, yòu huì biānjí shìpín.',
      note:'编辑 dùng như động từ. 既……又…… nối hai khả năng.',pair:'既……又……'},
     {promptLang:'vi',prompt:'Bài viết này là do biên tập viên sửa đấy.',answer:'这篇文章是编辑修改的。',answerPy:'Zhè piān wénzhāng shì biānjí xiūgǎi de.',
      note:'是……的 nhấn mạnh người làm; 编辑 ở đây là danh từ.',pair:'是……的'}
   ]},

  {n:4,zh:'嗯',py:'ǹg',pos:'Thán từ',vn:'ừ, ờ (đồng ý); hả? (hỏi lại); ơ! (ngạc nhiên)',hv:'ân',em:'🙂',lesson:1,
   explain:['Thán từ, đọc khác nhau theo nghĩa: ńg (thanh 2) — hỏi lại, nghi vấn: 嗯？人都去哪儿了？','ňg (thanh 3) — ngạc nhiên, thấy không nên như vậy: 嗯！你怎么还没走啊？','ǹg (thanh 4) — đồng ý, nhận lời: 嗯，没问题. Trong bài khoá đọc ǹg.'],
   usage:'Đứng đầu câu, sau có dấu câu đi kèm: ńg + ？ · ňg + ！ · ǹg + ，. Trong bài: 嗯，如果您心情好，我就说件事.',
   collo:['嗯，好的','嗯，没问题','嗯？','嗯！'],
   ex_zh:'嗯，如果您心情好，我就说件事；心情不好就改天再说。',ex_py:'Ǹg, rúguǒ nín xīnqíng hǎo, wǒ jiù shuō jiàn shì; xīnqíng bù hǎo jiù gǎitiān zài shuō.',ex_vn:'Dạ, nếu tâm trạng anh tốt thì tôi xin nói một việc; tâm trạng không tốt thì hôm khác hẵng nói.',
   exList:[
     {zh:'嗯，如果您心情好，我就说件事；心情不好就改天再说。',py:'Ǹg, rúguǒ nín xīnqíng hǎo, wǒ jiù shuō jiàn shì; xīnqíng bù hǎo jiù gǎitiān zài shuō.',vn:'Dạ, nếu tâm trạng anh tốt thì tôi xin nói một việc; tâm trạng không tốt thì hôm khác hẵng nói.'},
     {zh:'嗯？不是28号，难道是我记错了？',py:'Ńg? Bú shì èrshíbā hào, nándào shì wǒ jìcuò le?',vn:'Hả? Không phải ngày 28 à, chẳng lẽ tôi nhớ nhầm?'},
     {zh:'嗯！你的房间为什么这么冷？',py:'Ňg! Nǐ de fángjiān wèi shénme zhème lěng?',vn:'Ơ! Phòng cậu sao lạnh thế?'}
   ],
   colloFull:[
     {zh:'嗯，好的',py:'ǹg, hǎo de',vn:'ừ, được'},
     {zh:'嗯，没问题',py:'ǹg, méi wèntí',vn:'ừ, không vấn đề gì'},
     {zh:'嗯？',py:'ńg?',vn:'hả? (hỏi lại)'},
     {zh:'嗯！',py:'ňg!',vn:'ơ! (ngạc nhiên)'},
     {zh:'嗯，我知道了',py:'ǹg, wǒ zhīdào le',vn:'ừ, tôi biết rồi'}
   ],
   patterns:[
     {s:'嗯 (ǹg)，+ lời đồng ý / nhận lời',m:'ừ, …'},
     {s:'嗯 (ńg)？/ 嗯 (ňg)！+ câu hỏi',m:'hả? … / ơ! …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ừ, nếu mai không mưa thì chúng ta đi leo núi.',answer:'嗯，如果明天不下雨，我们就去爬山。',answerPy:'Ǹg, rúguǒ míngtiān bú xià yǔ, wǒmen jiù qù pá shān.',
      note:'嗯 (ǹg) + dấu phẩy = đồng ý. 如果……就…… giả thiết – kết quả.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Ơ! Sao điện thoại của tôi lại bị em trai làm hỏng rồi?',answer:'嗯！我的手机怎么被弟弟弄坏了？',answerPy:'Ňg! Wǒ de shǒujī zěnme bèi dìdi nònghuài le?',
      note:'嗯 (ňg) + dấu chấm than = ngạc nhiên, thấy không nên thế. 被 + người + V坏了.',pair:'被'}
   ]},

  {n:5,zh:'轻易',py:'qīngyì',pos:'Tính từ',vn:'dễ dàng; (phó từ) tuỳ tiện, dễ dàng',hv:'khinh dị',em:'🪶',lesson:1,
   explain:['Tính từ: đơn giản, dễ dàng — thường làm trạng ngữ: 就这样轻易地请好了.','Phó từ: làm việc tuỳ tiện, thiếu thận trọng; hay dùng trong câu phủ định “轻易不……” = rất ít khi, không dễ gì ….'],
   usage:'轻易 (地) + V: 轻易地得到 / 放弃 / 相信 / 答应; 轻易不 / 不轻易 + V: 轻易不求人, 从不轻易决定. Xem 词语辨析 轻易 — 容易.',
   collo:['轻易地请好了','轻易放弃','轻易相信','轻易不求人'],
   ex_zh:'领导有了兴趣，假，就这样轻易地请好了。',ex_py:'Lǐngdǎo yǒule xìngqù, jià, jiù zhèyàng qīngyì de qǐnghǎo le.',ex_vn:'Lãnh đạo thấy tò mò, thế là việc xin nghỉ được giải quyết dễ dàng như vậy.',
   exList:[
     {zh:'领导有了兴趣，假，就这样轻易地请好了。',py:'Lǐngdǎo yǒule xìngqù, jià, jiù zhèyàng qīngyì de qǐnghǎo le.',vn:'Lãnh đạo thấy tò mò, thế là việc xin nghỉ được giải quyết dễ dàng như vậy.'},
     {zh:'任何胜利都不是轻易得到的，背后都要付出艰辛的努力。',py:'Rènhé shènglì dōu bú shì qīngyì dédào de, bèihòu dōu yào fùchū jiānxīn de nǔlì.',vn:'Bất kỳ thắng lợi nào cũng không dễ dàng có được, phía sau đều phải bỏ ra nỗ lực gian khổ.'},
     {zh:'他为人好强，轻易不求人。',py:'Tā wéirén hàoqiáng, qīngyì bù qiú rén.',vn:'Anh ấy tính hiếu thắng, rất ít khi nhờ vả ai.'}
   ],
   colloFull:[
     {zh:'轻易地请好了',py:'qīngyì de qǐnghǎo le',vn:'xin (nghỉ) được một cách dễ dàng'},
     {zh:'轻易放弃',py:'qīngyì fàngqì',vn:'dễ dàng bỏ cuộc'},
     {zh:'轻易相信',py:'qīngyì xiāngxìn',vn:'dễ dàng tin'},
     {zh:'轻易不求人',py:'qīngyì bù qiú rén',vn:'ít khi nhờ vả người khác'},
     {zh:'轻易错过机会',py:'qīngyì cuòguò jīhuì',vn:'dễ dàng bỏ lỡ cơ hội'}
   ],
   patterns:[
     {s:'轻易 (地) + V',m:'… một cách dễ dàng'},
     {s:'轻易不 / 不轻易 + V',m:'rất ít khi …, không dễ gì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù gặp khó khăn gì, bạn cũng đừng dễ dàng bỏ cuộc.',answer:'不管遇到什么困难，你都不要轻易放弃。',answerPy:'Bùguǎn yùdào shénme kùnnan, nǐ dōu búyào qīngyì fàngqì.',
      note:'不管……都……: mọi điều kiện, kết quả không đổi. 轻易 + V.',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Ông ấy chưa bao giờ dễ dàng tin người lạ.',answer:'他从来不轻易相信陌生人。',answerPy:'Tā cónglái bù qīngyì xiāngxìn mòshēngrén.',
      note:'从来不 + 轻易 + V: phủ định thói quen. Ôn 陌生 (bài 23).',pair:'从来不……'}
   ]},

  {n:6,zh:'处理',py:'chǔlǐ',pos:'Động từ',vn:'giải quyết, xử lý',hv:'xử lý',em:'🛠️',lesson:1,
   explain:['Sắp xếp, giải quyết vấn đề, sự việc: 处理问题 / 处理矛盾 / 处理关系.','Còn nghĩa: xử lý (tài liệu, thông tin); bán hạ giá, thanh lý: 处理商品.'],
   usage:'处理 + 问题 / 矛盾 / 关系 / 工作 / 信息 / 文件 / 商品 (bảng 搭配); 处理得很好; 把……处理好.',
   collo:['处理问题','处理矛盾','处理关系','处理商品'],
   ex_zh:'这位朋友很会利用“登门槛效应”来处理问题。',ex_py:'Zhè wèi péngyou hěn huì lìyòng “dēng ménkǎn xiàoyìng” lái chǔlǐ wèntí.',ex_vn:'Người bạn này rất biết tận dụng “hiệu ứng bước chân qua ngưỡng cửa” để giải quyết vấn đề.',
   exList:[
     {zh:'这位朋友很会利用“登门槛效应”来处理问题。',py:'Zhè wèi péngyou hěn huì lìyòng “dēng ménkǎn xiàoyìng” lái chǔlǐ wèntí.',vn:'Người bạn này rất biết tận dụng “hiệu ứng bước chân qua ngưỡng cửa” để giải quyết vấn đề.'},
     {zh:'老师把这件事处理得很好，两个同学又成了好朋友。',py:'Lǎoshī bǎ zhè jiàn shì chǔlǐ de hěn hǎo, liǎng ge tóngxué yòu chéngle hǎo péngyou.',vn:'Cô giáo xử lý việc này rất khéo, hai bạn lại thành bạn tốt.'},
     {zh:'这些衣服是处理商品，一件只要三十块。',py:'Zhèxiē yīfu shì chǔlǐ shāngpǐn, yí jiàn zhǐ yào sānshí kuài.',vn:'Mấy bộ quần áo này là hàng thanh lý, mỗi chiếc chỉ ba mươi tệ.'}
   ],
   colloFull:[
     {zh:'处理问题',py:'chǔlǐ wèntí',vn:'giải quyết vấn đề'},
     {zh:'处理矛盾',py:'chǔlǐ máodùn',vn:'giải quyết mâu thuẫn'},
     {zh:'处理关系',py:'chǔlǐ guānxi',vn:'xử lý các mối quan hệ'},
     {zh:'处理商品',py:'chǔlǐ shāngpǐn',vn:'hàng thanh lý, hàng hạ giá'},
     {zh:'处理文件',py:'chǔlǐ wénjiàn',vn:'xử lý văn bản, giấy tờ'}
   ],
   patterns:[
     {s:'把 + 问题 / 事情 + 处理好',m:'giải quyết ổn thoả …'},
     {s:'处理 + 得 + 很好 / 不错',m:'xử lý rất tốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu phải giải quyết xong việc này trước thứ Sáu.',answer:'你要在周五以前把这件事处理好。',answerPy:'Nǐ yào zài zhōuwǔ yǐqián bǎ zhè jiàn shì chǔlǐ hǎo.',
      note:'把 + O + 处理好: bổ ngữ kết quả 好 sau động từ.',pair:'把'},
     {promptLang:'vi',prompt:'Mâu thuẫn giữa hai bạn ấy đã được thầy giáo giải quyết ổn thoả rồi.',answer:'他们俩的矛盾已经被老师处理好了。',answerPy:'Tāmen liǎ de máodùn yǐjīng bèi lǎoshī chǔlǐ hǎo le.',
      note:'被 + người + 处理好了. 处理矛盾 là cụm trong bảng 搭配.',pair:'被'}
   ]},

  {n:7,zh:'社区',py:'shèqū',pos:'Danh từ',vn:'khu dân cư, cộng đồng, phường',hv:'xã khu',em:'🏘️',lesson:1,
   explain:['Khu vực dân cư có tổ chức sinh hoạt chung — khu dân cư, cộng đồng (gần như “phường, tổ dân phố”).','Dùng cả cho cộng đồng trên mạng: 网络社区.'],
   usage:'住在……社区; 社区服务 / 社区医院 / 社区活动; 两个社区.',
   collo:['两个社区','社区服务','社区医院','社区活动'],
   ex_zh:'他们派人到两个社区，劝人们在屋前立一块“小心驾驶”的圆形标志。',ex_py:'Tāmen pài rén dào liǎng ge shèqū, quàn rénmen zài wū qián lì yí kuài “xiǎoxīn jiàshǐ” de yuánxíng biāozhì.',ex_vn:'Họ cử người đến hai khu dân cư, khuyên mọi người dựng trước nhà một tấm biển tròn “Lái xe cẩn thận”.',
   exList:[
     {zh:'他们派人到两个社区，劝人们在屋前立一块“小心驾驶”的圆形标志。',py:'Tāmen pài rén dào liǎng ge shèqū, quàn rénmen zài wū qián lì yí kuài “xiǎoxīn jiàshǐ” de yuánxíng biāozhì.',vn:'Họ cử người đến hai khu dân cư, khuyên mọi người dựng trước nhà một tấm biển tròn “Lái xe cẩn thận”.'},
     {zh:'周末我常常去社区服务中心当志愿者。',py:'Zhōumò wǒ chángcháng qù shèqū fúwù zhōngxīn dāng zhìyuànzhě.',vn:'Cuối tuần tôi thường đến trung tâm dịch vụ cộng đồng làm tình nguyện viên.'},
     {zh:'我们社区新开了一家医院，看病方便多了。',py:'Wǒmen shèqū xīn kāile yì jiā yīyuàn, kàn bìng fāngbiàn duō le.',vn:'Khu dân cư chúng tôi mới mở một bệnh viện, đi khám bệnh tiện hơn nhiều.'}
   ],
   colloFull:[
     {zh:'两个社区',py:'liǎng ge shèqū',vn:'hai khu dân cư'},
     {zh:'社区服务',py:'shèqū fúwù',vn:'dịch vụ cộng đồng'},
     {zh:'社区医院',py:'shèqū yīyuàn',vn:'bệnh viện khu dân cư'},
     {zh:'社区活动',py:'shèqū huódòng',vn:'hoạt động cộng đồng'},
     {zh:'网络社区',py:'wǎngluò shèqū',vn:'cộng đồng mạng'}
   ],
   patterns:[
     {s:'住在 + … + 社区',m:'sống ở khu dân cư …'},
     {s:'社区 + 服务 / 医院 / 活动',m:'… của khu dân cư, cộng đồng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi có bệnh viện khu dân cư, bà nội hễ thấy không khoẻ là đi khám ngay.',answer:'有了社区医院以后，奶奶一不舒服就去看病。',answerPy:'Yǒule shèqū yīyuàn yǐhòu, nǎinai yì bù shūfu jiù qù kàn bìng.',
      note:'一……就……: hễ … là …. 一 đứng trước 不 đọc yì.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Khu dân cư của chúng tôi càng ngày càng sạch đẹp.',answer:'我们社区越来越干净、漂亮了。',answerPy:'Wǒmen shèqū yuè lái yuè gānjìng, piàoliang le.',
      note:'越来越 + tính từ + 了.',pair:'越来越……'}
   ]},

  {n:8,zh:'劝',py:'quàn',pos:'Động từ',vn:'khuyên',hv:'khuyến',em:'🗣️',lesson:1,
   explain:['Dùng lời lẽ nói cho người khác nghe theo, làm hoặc không làm việc gì — khuyên.','劝 + người + V: 劝人们立标志; 劝他别抽烟.'],
   usage:'劝 + người + (别 / 不要) + V; 劝了半天; 劝不动 (khuyên không được); 劝架 (can ngăn cãi nhau / đánh nhau).',
   collo:['劝人','劝他别……','劝了半天','劝架'],
   ex_zh:'大家劝他别抽烟了，可是他就是不听。',ex_py:'Dàjiā quàn tā bié chōu yān le, kěshì tā jiùshì bù tīng.',ex_vn:'Mọi người khuyên anh ấy bỏ thuốc lá, nhưng anh ấy nhất định không nghe.',
   exList:[
     {zh:'他们派人到两个社区，劝人们在屋前立一块“小心驾驶”的圆形标志。',py:'Tāmen pài rén dào liǎng ge shèqū, quàn rénmen zài wū qián lì yí kuài “xiǎoxīn jiàshǐ” de yuánxíng biāozhì.',vn:'Họ cử người đến hai khu dân cư, khuyên mọi người dựng trước nhà một tấm biển tròn “Lái xe cẩn thận”.'},
     {zh:'大家劝他别抽烟了，可是他就是不听。',py:'Dàjiā quàn tā bié chōu yān le, kěshì tā jiùshì bù tīng.',vn:'Mọi người khuyên anh ấy bỏ thuốc lá, nhưng anh ấy nhất định không nghe.'},
     {zh:'我在电话里一直在劝她要冷静。',py:'Wǒ zài diànhuà li yìzhí zài quàn tā yào lěngjìng.',vn:'Tôi cứ khuyên cô ấy qua điện thoại là phải bình tĩnh.'}
   ],
   colloFull:[
     {zh:'劝人',py:'quàn rén',vn:'khuyên người'},
     {zh:'劝他别……',py:'quàn tā bié……',vn:'khuyên anh ấy đừng …'},
     {zh:'劝了半天',py:'quànle bàntiān',vn:'khuyên mãi'},
     {zh:'劝架',py:'quàn jià',vn:'can ngăn cãi nhau, đánh nhau'},
     {zh:'劝不动',py:'quàn bu dòng',vn:'khuyên không được'}
   ],
   patterns:[
     {s:'劝 + người + V / 别 + V',m:'khuyên ai (đừng) làm gì'},
     {s:'劝了 + thời gian',m:'khuyên (bao lâu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ khuyên tôi đừng thức khuya nữa, nhưng tôi chẳng nghe chút nào.',answer:'妈妈劝我别熬夜了，可是我一点儿也没听。',answerPy:'Māma quàn wǒ bié áoyè le, kěshì wǒ yìdiǎnr yě méi tīng.',
      note:'劝 + người + 别 + V. 一点儿也没 + V: phủ định tuyệt đối.',pair:'一点儿也不 / 没……'},
     {promptLang:'vi',prompt:'Tuy tôi khuyên nó rất lâu, nhưng nó vẫn không chịu đi khám.',answer:'虽然我劝了他半天，但是他还是不肯去看病。',answerPy:'Suīrán wǒ quànle tā bàntiān, dànshì tā háishi bù kěn qù kàn bìng.',
      note:'劝了 + người + 半天. 虽然……但是……还是…….',pair:'虽然……但是……'}
   ]},

  {n:9,zh:'圆',py:'yuán',pos:'Tính từ',vn:'tròn',hv:'viên',em:'⭕',lesson:1,
   explain:['Có hình tròn: 圆形 (hình tròn), 圆桌 (bàn tròn), 圆圆的脸.','Nghĩa mở rộng: trọn vẹn, đầy đủ: 圆满 (viên mãn), 团圆 (đoàn viên).'],
   usage:'圆形 + 的 + N: 圆形标志; 又大又圆; 月亮很圆; 圆圆的 + N; danh từ: 画一个圆 (vẽ một hình tròn).',
   collo:['圆形标志','又大又圆','圆圆的脸','圆桌'],
   ex_zh:'中秋节的月亮又大又圆。',ex_py:'Zhōngqiū Jié de yuèliang yòu dà yòu yuán.',ex_vn:'Trăng Trung thu vừa to vừa tròn.',
   exList:[
     {zh:'他们劝人们在屋前立一块“小心驾驶”的圆形标志。',py:'Tāmen quàn rénmen zài wū qián lì yí kuài “xiǎoxīn jiàshǐ” de yuánxíng biāozhì.',vn:'Họ khuyên mọi người dựng trước nhà một tấm biển tròn “Lái xe cẩn thận”.'},
     {zh:'中秋节的月亮又大又圆。',py:'Zhōngqiū Jié de yuèliang yòu dà yòu yuán.',vn:'Trăng Trung thu vừa to vừa tròn.'},
     {zh:'那个小女孩有一张圆圆的脸，非常可爱。',py:'Nàge xiǎo nǚhái yǒu yì zhāng yuányuán de liǎn, fēicháng kě\'ài.',vn:'Cô bé ấy có khuôn mặt tròn tròn, rất đáng yêu.'}
   ],
   colloFull:[
     {zh:'圆形标志',py:'yuánxíng biāozhì',vn:'biển báo hình tròn'},
     {zh:'又大又圆',py:'yòu dà yòu yuán',vn:'vừa to vừa tròn'},
     {zh:'圆圆的脸',py:'yuányuán de liǎn',vn:'khuôn mặt tròn tròn'},
     {zh:'圆桌',py:'yuánzhuō',vn:'bàn tròn'},
     {zh:'画一个圆',py:'huà yí ge yuán',vn:'vẽ một hình tròn'}
   ],
   patterns:[
     {s:'又 + A + 又圆',m:'vừa … vừa tròn'},
     {s:'圆形 + 的 + N',m:'… hình tròn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trăng Trung thu không những tròn mà còn rất sáng.',answer:'中秋节的月亮不仅很圆，而且很亮。',answerPy:'Zhōngqiū Jié de yuèliang bùjǐn hěn yuán, érqiě hěn liàng.',
      note:'不仅……而且……: tăng tiến.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Chiếc bàn tròn này là bố mua cho tôi.',answer:'这张圆桌是爸爸给我买的。',answerPy:'Zhè zhāng yuánzhuō shì bàba gěi wǒ mǎi de.',
      note:'Lượng từ 张 cho bàn. 是……的 nhấn mạnh người mua.',pair:'是……的'}
   ]},

  {n:10,zh:'标志',py:'biāozhì',pos:'Danh từ',vn:'ký hiệu, biển báo, dấu hiệu',hv:'tiêu chí',em:'🚸',lesson:1,
   explain:['Ký hiệu, dấu hiệu dùng để nhận biết: 交通标志 (biển báo giao thông), 公司的标志 (logo).','Còn là động từ “标志着”: đánh dấu, là dấu mốc của (một sự kiện).'],
   usage:'一块 / 一个 + 标志; 立标志; 交通标志; 路线周围的标志; A + 标志着 + B.',
   collo:['圆形标志','交通标志','立一块标志','标志着'],
   ex_zh:'开车的时候，一定要注意路上的交通标志。',ex_py:'Kāi chē de shíhou, yídìng yào zhùyì lù shang de jiāotōng biāozhì.',ex_vn:'Khi lái xe, nhất định phải chú ý các biển báo giao thông trên đường.',
   exList:[
     {zh:'他们劝人们在屋前立一块“小心驾驶”的圆形标志。',py:'Tāmen quàn rénmen zài wū qián lì yí kuài “xiǎoxīn jiàshǐ” de yuánxíng biāozhì.',vn:'Họ khuyên mọi người dựng trước nhà một tấm biển tròn “Lái xe cẩn thận”.'},
     {zh:'开车的时候，一定要注意路上的交通标志。',py:'Kāi chē de shíhou, yídìng yào zhùyì lù shang de jiāotōng biāozhì.',vn:'Khi lái xe, nhất định phải chú ý các biển báo giao thông trên đường.'},
     {zh:'看到这个标志，就说明前面有学校，要慢点儿开。',py:'Kàndào zhège biāozhì, jiù shuōmíng qiánmiàn yǒu xuéxiào, yào màn diǎnr kāi.',vn:'Thấy biển này tức là phía trước có trường học, phải chạy chậm lại.'}
   ],
   colloFull:[
     {zh:'圆形标志',py:'yuánxíng biāozhì',vn:'biển báo hình tròn'},
     {zh:'交通标志',py:'jiāotōng biāozhì',vn:'biển báo giao thông'},
     {zh:'立一块标志',py:'lì yí kuài biāozhì',vn:'dựng một tấm biển'},
     {zh:'标志着',py:'biāozhìzhe',vn:'đánh dấu, là dấu mốc của'},
     {zh:'公司的标志',py:'gōngsī de biāozhì',vn:'logo của công ty'}
   ],
   patterns:[
     {s:'立 / 看到 + 一块 / 一个 + 标志',m:'dựng / nhìn thấy một biển báo'},
     {s:'A + 标志着 + B',m:'A đánh dấu B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ nhìn thấy biển báo này là phải lái chậm lại.',answer:'一看到这个标志，就要开慢一点儿。',answerPy:'Yí kàndào zhège biāozhì, jiù yào kāi màn yìdiǎnr.',
      note:'一……就……: hễ … là …. 一 trước thanh 4 đọc yí.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tấm biển trước cửa bị gió thổi đổ rồi.',answer:'门前的标志被风吹倒了。',answerPy:'Mén qián de biāozhì bèi fēng chuīdǎo le.',
      note:'被 + 风 + 吹倒: bị động với tác nhân tự nhiên.',pair:'被'}
   ]},

  {n:11,zh:'出示',py:'chūshì',pos:'Động từ',vn:'trình ra, đưa ra cho xem',hv:'xuất thị',em:'🪪',lesson:1,
   explain:['Lấy ra cho người khác xem (giấy tờ, chứng từ, văn bản) — xuất trình, đưa ra.','Văn phong trang trọng, hay gặp ở sân bay, khách sạn, ngân hàng, thông báo: 请出示……'],
   usage:'出示 + 证件 / 护照 / 车票 / 身份证 / 请愿书; 请出示…… (lời yêu cầu lịch sự); 向 + người + 出示…….',
   collo:['出示证件','出示护照','请出示车票','出示一份请愿书'],
   ex_zh:'请填写这张表格并出示您的护照。',ex_py:'Qǐng tiánxiě zhè zhāng biǎogé bìng chūshì nín de hùzhào.',ex_vn:'Xin điền vào tờ khai này và xuất trình hộ chiếu của quý khách.',
   exList:[
     {zh:'先向大家出示一份赞成安全驾驶的请愿书。',py:'Xiān xiàng dàjiā chūshì yí fèn zànchéng ānquán jiàshǐ de qǐngyuànshū.',vn:'Trước hết đưa cho mọi người xem một bản kiến nghị ủng hộ lái xe an toàn.'},
     {zh:'请填写这张表格并出示您的护照。',py:'Qǐng tiánxiě zhè zhāng biǎogé bìng chūshì nín de hùzhào.',vn:'Xin điền vào tờ khai này và xuất trình hộ chiếu của quý khách.'},
     {zh:'进考场的时候，每个考生都要出示准考证。',py:'Jìn kǎochǎng de shíhou, měi ge kǎoshēng dōu yào chūshì zhǔnkǎozhèng.',vn:'Khi vào phòng thi, mỗi thí sinh đều phải xuất trình thẻ dự thi.'}
   ],
   colloFull:[
     {zh:'出示证件',py:'chūshì zhèngjiàn',vn:'xuất trình giấy tờ'},
     {zh:'出示护照',py:'chūshì hùzhào',vn:'xuất trình hộ chiếu'},
     {zh:'请出示车票',py:'qǐng chūshì chēpiào',vn:'xin xuất trình vé'},
     {zh:'出示一份请愿书',py:'chūshì yí fèn qǐngyuànshū',vn:'đưa ra một bản kiến nghị'},
     {zh:'出示准考证',py:'chūshì zhǔnkǎozhèng',vn:'xuất trình thẻ dự thi'}
   ],
   patterns:[
     {s:'请 + 出示 + 您的 + giấy tờ',m:'Xin (quý khách) xuất trình …'},
     {s:'向 + người + 出示 + N',m:'đưa … cho ai xem'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ vào thư viện là phải xuất trình thẻ học sinh.',answer:'一进图书馆就要出示学生证。',answerPy:'Yí jìn túshūguǎn jiù yào chūshì xuéshēngzhèng.',
      note:'一……就……; 出示 + giấy tờ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chỉ cần xuất trình hộ chiếu là có thể lên máy bay.',answer:'只要出示护照，就可以上飞机。',answerPy:'Zhǐyào chūshì hùzhào, jiù kěyǐ shàng fēijī.',
      note:'只要……就……: điều kiện đủ.',pair:'只要……就……'}
   ]},

  {n:12,zh:'赞成',py:'zànchéng',pos:'Động từ',vn:'đồng ý, tán thành',hv:'tán thành',em:'👍',lesson:1,
   explain:['Đồng ý với ý kiến, đề nghị, kế hoạch, hành động của người khác — tán thành.','Trái nghĩa: 反对. Hay dùng khi thảo luận, biểu quyết: 我赞成 / 没一个人赞成. Xem thêm phân biệt 赞成 — 同意.'],
   usage:'赞成 + ý kiến / kế hoạch / việc: 赞成这个意见, 赞成安全驾驶; 表示赞成; 投赞成票; 赞成 + người + V: 赞成他去.',
   collo:['赞成意见','表示赞成','赞成票','赞成他去'],
   ex_zh:'我把计划跟他们一说，结果，没一个人赞成。',ex_py:'Wǒ bǎ jìhuà gēn tāmen yì shuō, jiéguǒ, méi yí ge rén zànchéng.',ex_vn:'Tôi vừa nói kế hoạch với họ, kết quả là không một ai tán thành.',
   exList:[
     {zh:'先向大家出示一份赞成安全驾驶的请愿书。',py:'Xiān xiàng dàjiā chūshì yí fèn zànchéng ānquán jiàshǐ de qǐngyuànshū.',vn:'Trước hết đưa cho mọi người xem một bản kiến nghị ủng hộ lái xe an toàn.'},
     {zh:'我把计划跟他们一说，结果，没一个人赞成。',py:'Wǒ bǎ jìhuà gēn tāmen yì shuō, jiéguǒ, méi yí ge rén zànchéng.',vn:'Tôi vừa nói kế hoạch với họ, kết quả là không một ai tán thành.'},
     {zh:'你的意见我完全赞成。',py:'Nǐ de yìjiàn wǒ wánquán zànchéng.',vn:'Ý kiến của bạn tôi hoàn toàn tán thành.'}
   ],
   colloFull:[
     {zh:'赞成意见',py:'zànchéng yìjiàn',vn:'tán thành ý kiến'},
     {zh:'表示赞成',py:'biǎoshì zànchéng',vn:'bày tỏ tán thành'},
     {zh:'赞成票',py:'zànchéngpiào',vn:'phiếu tán thành'},
     {zh:'赞成他去',py:'zànchéng tā qù',vn:'tán thành cho anh ấy đi'},
     {zh:'举手赞成',py:'jǔ shǒu zànchéng',vn:'giơ tay tán thành'}
   ],
   patterns:[
     {s:'赞成 + N / V',m:'tán thành …'},
     {s:'有人赞成，也有人反对',m:'người tán thành, người phản đối'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với kế hoạch này, có người tán thành, cũng có người phản đối.',answer:'对于这个计划，有人赞成，也有人反对。',answerPy:'Duìyú zhège jìhuà, yǒu rén zànchéng, yě yǒu rén fǎnduì.',
      note:'对于 + đối tượng đặt đầu câu. 赞成 ↔ 反对.',pair:'对于'},
     {promptLang:'vi',prompt:'Không những bố mẹ tán thành, thầy giáo cũng ủng hộ tôi đi du học.',answer:'不仅爸爸妈妈赞成，老师也支持我去留学。',answerPy:'Bùjǐn bàba māma zànchéng, lǎoshī yě zhīchí wǒ qù liúxué.',
      note:'Hai chủ ngữ khác nhau: 不仅 đứng trước chủ ngữ thứ nhất.',pair:'不仅……也……'}
   ]},

  {n:13,zh:'请愿书',py:'qǐngyuànshū',pos:'Danh từ',vn:'đơn kiến nghị, thư thỉnh nguyện',hv:'thỉnh nguyện thư',em:'📜',lesson:1,
   explain:['Văn bản do nhiều người cùng ký để nêu yêu cầu, nguyện vọng với cơ quan, tổ chức — thư thỉnh nguyện, đơn kiến nghị.','请愿 = thỉnh nguyện; 书 = văn bản (như 申请书 đơn xin, 通知书 giấy báo).'],
   usage:'一份请愿书 (lượng từ 份); 在请愿书上签字; 出示 / 递交 / 写 + 请愿书.',
   collo:['一份请愿书','在请愿书上签字','递交请愿书','写请愿书'],
   ex_zh:'先向大家出示一份赞成安全驾驶的请愿书，请求他们在上面签字。',ex_py:'Xiān xiàng dàjiā chūshì yí fèn zànchéng ānquán jiàshǐ de qǐngyuànshū, qǐngqiú tāmen zài shàngmiàn qiānzì.',ex_vn:'Trước hết đưa cho mọi người xem một bản kiến nghị ủng hộ lái xe an toàn, đề nghị họ ký tên vào đó.',
   exList:[
     {zh:'先向大家出示一份赞成安全驾驶的请愿书，请求他们在上面签字。',py:'Xiān xiàng dàjiā chūshì yí fèn zànchéng ānquán jiàshǐ de qǐngyuànshū, qǐngqiú tāmen zài shàngmiàn qiānzì.',vn:'Trước hết đưa cho mọi người xem một bản kiến nghị ủng hộ lái xe an toàn, đề nghị họ ký tên vào đó.'},
     {zh:'三百多位居民在这份请愿书上签了字。',py:'Sānbǎi duō wèi jūmín zài zhè fèn qǐngyuànshū shang qiānle zì.',vn:'Hơn ba trăm cư dân đã ký tên vào bản kiến nghị này.'},
     {zh:'同学们写了一份请愿书，希望学校食堂晚上也开门。',py:'Tóngxuémen xiěle yí fèn qǐngyuànshū, xīwàng xuéxiào shítáng wǎnshang yě kāi mén.',vn:'Các bạn học sinh viết một bản kiến nghị, mong nhà ăn của trường buổi tối cũng mở cửa.'}
   ],
   colloFull:[
     {zh:'一份请愿书',py:'yí fèn qǐngyuànshū',vn:'một bản kiến nghị'},
     {zh:'在请愿书上签字',py:'zài qǐngyuànshū shang qiānzì',vn:'ký tên vào bản kiến nghị'},
     {zh:'递交请愿书',py:'dìjiāo qǐngyuànshū',vn:'đệ trình đơn kiến nghị'},
     {zh:'写请愿书',py:'xiě qǐngyuànshū',vn:'viết đơn kiến nghị'},
     {zh:'出示请愿书',py:'chūshì qǐngyuànshū',vn:'đưa ra bản kiến nghị'}
   ],
   patterns:[
     {s:'在 + 请愿书 + 上 + 签字',m:'ký tên vào bản kiến nghị'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bản kiến nghị này là do học sinh lớp chúng tôi viết.',answer:'这份请愿书是我们班同学写的。',answerPy:'Zhè fèn qǐngyuànshū shì wǒmen bān tóngxué xiě de.',
      note:'Lượng từ 份. 是……的 nhấn mạnh người viết.',pair:'是……的'},
     {promptLang:'vi',prompt:'Hầu như tất cả mọi người đều đã ký tên vào bản kiến nghị.',answer:'几乎所有人都在请愿书上签了字。',answerPy:'Jīhū suǒyǒu rén dōu zài qǐngyuànshū shang qiānle zì.',
      note:'所有……都……; 签字 là động từ ly hợp → 签了字.',pair:'所有……都……'}
   ]},

  {n:14,zh:'恋爱',py:'liàn\'ài',pos:'Danh từ',vn:'tình yêu, chuyện yêu đương',hv:'luyến ái',em:'💕',lesson:1,
   explain:['Tình yêu nam nữ; chuyện yêu đương.','Hay dùng trong cụm 谈恋爱 (yêu đương, hẹn hò); 失恋 = thất tình; 恋爱关系 = quan hệ yêu đương.'],
   usage:'谈恋爱; 谈了三年恋爱 (thời lượng chen giữa 谈 và 恋爱); 恋爱关系; 恋爱经历.',
   collo:['谈恋爱','恋爱关系','谈了三年恋爱','恋爱经历'],
   ex_zh:'他们俩谈了三年恋爱，今年终于结婚了。',ex_py:'Tāmen liǎ tánle sān nián liàn\'ài, jīnnián zhōngyú jiéhūn le.',ex_vn:'Hai người họ yêu nhau ba năm, năm nay cuối cùng cũng cưới.',
   exList:[
     {zh:'比如你想与一个女孩谈恋爱，如果一开始就迫切地提出要跟她约会，女孩可能会犹豫。',py:'Bǐrú nǐ xiǎng yǔ yí ge nǚhái tán liàn\'ài, rúguǒ yì kāishǐ jiù pòqiè de tíchū yào gēn tā yuēhuì, nǚhái kěnéng huì yóuyù.',vn:'Ví dụ bạn muốn yêu một cô gái, nếu ngay từ đầu đã nôn nóng đề nghị hẹn hò, cô ấy có thể sẽ do dự.'},
     {zh:'他们俩谈了三年恋爱，今年终于结婚了。',py:'Tāmen liǎ tánle sān nián liàn\'ài, jīnnián zhōngyú jiéhūn le.',vn:'Hai người họ yêu nhau ba năm, năm nay cuối cùng cũng cưới.'},
     {zh:'妈妈说上大学以前最好别谈恋爱。',py:'Māma shuō shàng dàxué yǐqián zuìhǎo bié tán liàn\'ài.',vn:'Mẹ bảo trước khi vào đại học tốt nhất đừng yêu đương.'}
   ],
   colloFull:[
     {zh:'谈恋爱',py:'tán liàn\'ài',vn:'yêu đương, hẹn hò'},
     {zh:'恋爱关系',py:'liàn\'ài guānxi',vn:'quan hệ yêu đương'},
     {zh:'谈了三年恋爱',py:'tánle sān nián liàn\'ài',vn:'yêu nhau ba năm'},
     {zh:'恋爱经历',py:'liàn\'ài jīnglì',vn:'trải nghiệm yêu đương'},
     {zh:'恋爱中的人',py:'liàn\'ài zhōng de rén',vn:'người đang yêu'}
   ],
   patterns:[
     {s:'谈 + (thời gian) + 恋爱',m:'yêu nhau (bao lâu)'},
     {s:'和 / 与 + người + 谈恋爱',m:'yêu ai, hẹn hò với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Họ yêu nhau năm năm rồi mới kết hôn.',answer:'他们谈了五年恋爱才结婚。',answerPy:'Tāmen tánle wǔ nián liàn\'ài cái jiéhūn.',
      note:'谈 + 了 + thời lượng + 恋爱. 才: muộn, lâu mới ….',pair:'……才……'},
     {promptLang:'vi',prompt:'Từ khi yêu, cô ấy càng ngày càng hay cười.',answer:'谈恋爱以后，她越来越爱笑了。',answerPy:'Tán liàn\'ài yǐhòu, tā yuè lái yuè ài xiào le.',
      note:'越来越 + 爱 + V: càng ngày càng thích / hay ….',pair:'越来越……'}
   ]},

  {n:15,zh:'迫切',py:'pòqiè',pos:'Tính từ',vn:'cấp bách, khẩn thiết, tha thiết',hv:'bách thiết',em:'⏰',lesson:1,
   explain:['Cần gấp, mong muốn rất mạnh, không thể chờ được — bức thiết, tha thiết, nôn nóng.','Làm trạng ngữ: 迫切地要求 / 希望; định ngữ: 迫切的愿望; vị ngữ: 愿望很迫切.'],
   usage:'迫切 (地) + 要求 / 需要 / 希望 / 盼望 / 寻找 (bảng 搭配); 愿望 / 心情 + 迫切; 迫切的 + N.',
   collo:['迫切地要求','迫切需要','愿望迫切','迫切的心情'],
   ex_zh:'如果一开始就迫切地提出要跟她约会，女孩可能会犹豫。',ex_py:'Rúguǒ yì kāishǐ jiù pòqiè de tíchū yào gēn tā yuēhuì, nǚhái kěnéng huì yóuyù.',ex_vn:'Nếu ngay từ đầu đã nôn nóng đề nghị hẹn hò, cô gái có thể sẽ do dự.',
   exList:[
     {zh:'如果一开始就迫切地提出要跟她约会，女孩可能会犹豫。',py:'Rúguǒ yì kāishǐ jiù pòqiè de tíchū yào gēn tā yuēhuì, nǚhái kěnéng huì yóuyù.',vn:'Nếu ngay từ đầu đã nôn nóng đề nghị hẹn hò, cô gái có thể sẽ do dự.'},
     {zh:'她迫切地问道：“昨天你塞给我一百块钱干吗？”',py:'Tā pòqiè de wèndào: “Zuótiān nǐ sāi gěi wǒ yìbǎi kuài qián gànmá?”',vn:'Cô ấy nôn nóng hỏi: “Hôm qua cậu nhét cho tớ một trăm tệ làm gì thế?”'},
     {zh:'这个山区迫切需要更多的老师。',py:'Zhège shānqū pòqiè xūyào gèng duō de lǎoshī.',vn:'Vùng núi này đang rất cần thêm giáo viên.'}
   ],
   colloFull:[
     {zh:'迫切地要求',py:'pòqiè de yāoqiú',vn:'yêu cầu gấp'},
     {zh:'迫切需要',py:'pòqiè xūyào',vn:'rất cần, cần gấp'},
     {zh:'愿望迫切',py:'yuànwàng pòqiè',vn:'nguyện vọng tha thiết'},
     {zh:'迫切的心情',py:'pòqiè de xīnqíng',vn:'tâm trạng nóng lòng'},
     {zh:'迫切地希望',py:'pòqiè de xīwàng',vn:'tha thiết mong'}
   ],
   patterns:[
     {s:'迫切 (地) + 希望 / 需要 / 要求',m:'tha thiết mong / cần gấp / yêu cầu gấp'},
     {s:'N (愿望 / 心情) + 很迫切',m:'… rất tha thiết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa đến sân bay, cậu ấy đã nóng lòng muốn gọi điện cho mẹ.',answer:'他一到机场，就迫切地想给妈妈打电话。',answerPy:'Tā yí dào jīchǎng, jiù pòqiè de xiǎng gěi māma dǎ diànhuà.',
      note:'一……就……; 迫切地 làm trạng ngữ trước 想.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nguyện vọng này càng ngày càng tha thiết.',answer:'这个愿望越来越迫切了。',answerPy:'Zhège yuànwàng yuè lái yuè pòqiè le.',
      note:'愿望 + 迫切 (bảng 搭配, bài tập 3). 越来越 + tính từ.',pair:'越来越……'}
   ]},

  {n:16,zh:'犹豫',py:'yóuyù',pos:'Tính từ',vn:'do dự, lưỡng lự',hv:'do dự',em:'🤔',lesson:1,
   explain:['Chần chừ, không quyết được — do dự.','Hay làm vị ngữ: 犹豫了很久, 别犹豫了; lặp AABB: 犹犹豫豫; thành ngữ 毫不犹豫 (không chút do dự).'],
   usage:'犹豫了半天 / 一下; 毫不犹豫 (地) + V; 犹豫不决; 别犹豫了.',
   collo:['犹豫了半天','毫不犹豫','犹豫不决','别犹豫了'],
   ex_zh:'女孩可能会犹豫，甚至表现得很冷淡。',ex_py:'Nǚhái kěnéng huì yóuyù, shènzhì biǎoxiàn de hěn lěngdàn.',ex_vn:'Cô gái có thể sẽ do dự, thậm chí tỏ ra rất lạnh nhạt.',
   exList:[
     {zh:'女孩可能会犹豫，甚至表现得很冷淡。',py:'Nǚhái kěnéng huì yóuyù, shènzhì biǎoxiàn de hěn lěngdàn.',vn:'Cô gái có thể sẽ do dự, thậm chí tỏ ra rất lạnh nhạt.'},
     {zh:'别犹豫了，既然房东同意续租，你就再住半年吧。',py:'Bié yóuyù le, jìrán fángdōng tóngyì xùzū, nǐ jiù zài zhù bàn nián ba.',vn:'Đừng do dự nữa, chủ nhà đã đồng ý cho thuê tiếp thì cậu ở thêm nửa năm đi.'},
     {zh:'听说朋友需要帮助，他毫不犹豫地答应了。',py:'Tīngshuō péngyou xūyào bāngzhù, tā háo bù yóuyù de dāying le.',vn:'Nghe nói bạn cần giúp, anh ấy nhận lời không chút do dự.'}
   ],
   colloFull:[
     {zh:'犹豫了半天',py:'yóuyùle bàntiān',vn:'do dự mãi'},
     {zh:'毫不犹豫',py:'háo bù yóuyù',vn:'không chút do dự'},
     {zh:'犹豫不决',py:'yóuyù bù jué',vn:'do dự không quyết'},
     {zh:'别犹豫了',py:'bié yóuyù le',vn:'đừng do dự nữa'},
     {zh:'动作犹豫',py:'dòngzuò yóuyù',vn:'động tác chần chừ'}
   ],
   patterns:[
     {s:'犹豫 + 了 + 半天 / 很久',m:'do dự mãi'},
     {s:'毫不犹豫地 + V',m:'không chút do dự mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã hứa với bạn rồi thì cậu đừng do dự nữa.',answer:'既然已经答应朋友了，你就别犹豫了。',answerPy:'Jìrán yǐjīng dāying péngyou le, nǐ jiù bié yóuyù le.',
      note:'既然……就……: đã … thì …. 别 + V + 了.',pair:'既然……就……'},
     {promptLang:'vi',prompt:'Tôi do dự rất lâu mới quyết định học ban tự nhiên.',answer:'我犹豫了很久才决定学理科。',answerPy:'Wǒ yóuyùle hěn jiǔ cái juédìng xué lǐkē.',
      note:'犹豫了 + thời lượng + 才 + V.',pair:'……才……'}
   ]},

  {n:17,zh:'冷淡',py:'lěngdàn',pos:'Tính từ',vn:'lạnh nhạt, hờ hững',hv:'lãnh đạm',em:'🧊',lesson:1,
   explain:['Thái độ không nhiệt tình, không quan tâm — lạnh nhạt, hờ hững. Trái nghĩa: 热情.','Còn tả buôn bán ế ẩm: 生意冷淡.'],
   usage:'态度 / 表情 / 关系 / 生意 / 反应 + 冷淡 (bảng 搭配); 表现得很冷淡; 对 + người + 很冷淡.',
   collo:['态度冷淡','表情冷淡','生意冷淡','对人冷淡'],
   ex_zh:'联系好几次了，每次约他们刘经理，对我都特冷淡。',ex_py:'Liánxì hǎo jǐ cì le, měi cì yuē tāmen Liú jīnglǐ, duì wǒ dōu tè lěngdàn.',ex_vn:'Liên hệ mấy lần rồi, lần nào hẹn giám đốc Lưu bên đó, ông ấy cũng cực kỳ lạnh nhạt với tôi.',
   exList:[
     {zh:'女孩可能会犹豫，甚至表现得很冷淡。',py:'Nǚhái kěnéng huì yóuyù, shènzhì biǎoxiàn de hěn lěngdàn.',vn:'Cô gái có thể sẽ do dự, thậm chí tỏ ra rất lạnh nhạt.'},
     {zh:'联系好几次了，每次约他们刘经理，对我都特冷淡。',py:'Liánxì hǎo jǐ cì le, měi cì yuē tāmen Liú jīnglǐ, duì wǒ dōu tè lěngdàn.',vn:'Liên hệ mấy lần rồi, lần nào hẹn giám đốc Lưu bên đó, ông ấy cũng cực kỳ lạnh nhạt với tôi.'},
     {zh:'最近天气太冷，商店的生意很冷淡。',py:'Zuìjìn tiānqì tài lěng, shāngdiàn de shēngyi hěn lěngdàn.',vn:'Dạo này trời lạnh quá, cửa hàng buôn bán rất ế ẩm.'}
   ],
   colloFull:[
     {zh:'态度冷淡',py:'tàidu lěngdàn',vn:'thái độ lạnh nhạt'},
     {zh:'表情冷淡',py:'biǎoqíng lěngdàn',vn:'vẻ mặt lạnh lùng'},
     {zh:'生意冷淡',py:'shēngyi lěngdàn',vn:'buôn bán ế ẩm'},
     {zh:'对人冷淡',py:'duì rén lěngdàn',vn:'lạnh nhạt với người khác'},
     {zh:'反应冷淡',py:'fǎnyìng lěngdàn',vn:'phản ứng hờ hững'}
   ],
   patterns:[
     {s:'对 + người + 很冷淡',m:'lạnh nhạt với ai'},
     {s:'表现得很冷淡',m:'tỏ ra rất lạnh nhạt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cô ấy rất lạnh nhạt với tôi, nhưng tôi vẫn muốn làm bạn với cô ấy.',answer:'虽然她对我很冷淡，但是我还是想跟她做朋友。',answerPy:'Suīrán tā duì wǒ hěn lěngdàn, dànshì wǒ háishi xiǎng gēn tā zuò péngyou.',
      note:'对 + người + 冷淡. 虽然……但是……还是…….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Sau khi tăng giá, cửa hàng buôn bán càng ngày càng ế.',answer:'涨价以后，商店的生意越来越冷淡了。',answerPy:'Zhǎng jià yǐhòu, shāngdiàn de shēngyi yuè lái yuè lěngdàn le.',
      note:'生意冷淡 = buôn bán ế ẩm. Ôn 涨 (bài 20).',pair:'越来越……'}
   ]},

  {n:18,zh:'无所谓',py:'wúsuǒwèi',pos:'Động từ',vn:'không sao cả, sao cũng được',hv:'vô sở vị',em:'🤷',lesson:1,
   explain:['Không coi là quan trọng, không để tâm — sao cũng được, không sao.','Hay đứng cuối câu: (A 还是 B) 都无所谓; ……也无所谓. 无所谓的态度 = thái độ bất cần, thờ ơ.'],
   usage:'……都无所谓 / ……也无所谓; 对……无所谓; 我无所谓; 无所谓的态度.',
   collo:['都无所谓','无所谓的态度','我无所谓','对……无所谓'],
   ex_zh:'那接下来是去看电影还是泡酒吧都无所谓了。',ex_py:'Nà jiēxiàlai shì qù kàn diànyǐng háishi pào jiǔbā dōu wúsuǒwèi le.',ex_vn:'Thế thì tiếp theo đi xem phim hay ngồi quán bar đều chẳng thành vấn đề nữa.',
   exList:[
     {zh:'那接下来是去看电影还是泡酒吧都无所谓了。',py:'Nà jiēxiàlai shì qù kàn diànyǐng háishi pào jiǔbā dōu wúsuǒwèi le.',vn:'Thế thì tiếp theo đi xem phim hay ngồi quán bar đều chẳng thành vấn đề nữa.'},
     {zh:'去哪儿吃饭我无所谓，你决定吧。',py:'Qù nǎr chī fàn wǒ wúsuǒwèi, nǐ juédìng ba.',vn:'Đi đâu ăn tớ sao cũng được, cậu quyết đi.'},
     {zh:'他对什么事都是一副无所谓的态度，让人很着急。',py:'Tā duì shénme shì dōu shì yí fù wúsuǒwèi de tàidu, ràng rén hěn zháojí.',vn:'Chuyện gì cậu ta cũng tỏ thái độ bất cần, làm người ta rất sốt ruột.'}
   ],
   colloFull:[
     {zh:'都无所谓',py:'dōu wúsuǒwèi',vn:'… đều được cả'},
     {zh:'无所谓的态度',py:'wúsuǒwèi de tàidu',vn:'thái độ bất cần, thờ ơ'},
     {zh:'我无所谓',py:'wǒ wúsuǒwèi',vn:'tôi sao cũng được'},
     {zh:'对……无所谓',py:'duì……wúsuǒwèi',vn:'không bận tâm đến …'},
     {zh:'贵一点儿也无所谓',py:'guì yìdiǎnr yě wúsuǒwèi',vn:'đắt một chút cũng không sao'}
   ],
   patterns:[
     {s:'A 还是 B + 都无所谓',m:'A hay B cũng được'},
     {s:'只要……，……也无所谓',m:'miễn là …, … cũng không sao'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần học được kiến thức, vất vả một chút cũng không sao.',answer:'只要能学到知识，辛苦一点儿也无所谓。',answerPy:'Zhǐyào néng xuédào zhīshi, xīnkǔ yìdiǎnr yě wúsuǒwèi.',
      note:'只要…… (điều kiện), 也无所谓 (kết quả chấp nhận được).',pair:'只要……就 / 也……'},
     {promptLang:'vi',prompt:'Uống trà hay uống cà phê, tôi đều được cả.',answer:'喝茶还是喝咖啡，我都无所谓。',answerPy:'Hē chá háishi hē kāfēi, wǒ dōu wúsuǒwèi.',
      note:'A 还是 B + 都无所谓: cấu trúc giống câu bài khoá.',pair:'A还是B (lựa chọn)'}
   ]},

  {n:19,zh:'值班',py:'zhí bān',pos:'Động từ',vn:'trực ban, trực',hv:'trị ban',em:'🕘',lesson:1,
   explain:['Đến phiên làm nhiệm vụ trông coi, làm việc theo ca — trực.','Là động từ ly hợp: 值夜班 (trực đêm), 值一天班, 帮我值个班.'],
   usage:'值班 / 值夜班; 帮 + người + 值班; 值 + thời lượng + 班; 值班医生 / 值班室.',
   collo:['帮人值班','值夜班','值班医生','值班室'],
   ex_zh:'今天晚上是我值班，我不能跟你们去看电影了。',ex_py:'Jīntiān wǎnshang shì wǒ zhíbān, wǒ bù néng gēn nǐmen qù kàn diànyǐng le.',ex_vn:'Tối nay đến phiên tôi trực, tôi không đi xem phim với các cậu được rồi.',
   exList:[
     {zh:'你想让同事帮你值班或写报告什么的，直接说八成儿会被拒绝。',py:'Nǐ xiǎng ràng tóngshì bāng nǐ zhíbān huò xiě bàogào shénme de, zhíjiē shuō bāchéngr huì bèi jùjué.',vn:'Bạn muốn nhờ đồng nghiệp trực thay hay viết báo cáo giúp chẳng hạn, nói thẳng ra thì tám phần là bị từ chối.'},
     {zh:'今天晚上是我值班，我不能跟你们去看电影了。',py:'Jīntiān wǎnshang shì wǒ zhíbān, wǒ bù néng gēn nǐmen qù kàn diànyǐng le.',vn:'Tối nay đến phiên tôi trực, tôi không đi xem phim với các cậu được rồi.'},
     {zh:'医院里每天晚上都有医生值夜班。',py:'Yīyuàn li měi tiān wǎnshang dōu yǒu yīshēng zhí yèbān.',vn:'Trong bệnh viện tối nào cũng có bác sĩ trực đêm.'}
   ],
   colloFull:[
     {zh:'帮人值班',py:'bāng rén zhíbān',vn:'trực thay người khác'},
     {zh:'值夜班',py:'zhí yèbān',vn:'trực ca đêm'},
     {zh:'值班医生',py:'zhíbān yīshēng',vn:'bác sĩ trực'},
     {zh:'值班室',py:'zhíbānshì',vn:'phòng trực'},
     {zh:'值一天班',py:'zhí yì tiān bān',vn:'trực một ngày'}
   ],
   patterns:[
     {s:'帮 + người + 值班',m:'trực thay ai'},
     {s:'值 + thời lượng + 班',m:'(ly hợp) trực bao lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tối nay phải trực nên tôi không thể đi dự tiệc sinh nhật của cậu.',answer:'因为今天晚上要值班，所以我不能去参加你的生日晚会了。',answerPy:'Yīnwèi jīntiān wǎnshang yào zhíbān, suǒyǐ wǒ bù néng qù cānjiā nǐ de shēngrì wǎnhuì le.',
      note:'因为……所以……: nguyên nhân – kết quả.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Bạn có thể trực thay tôi một buổi tối không?',answer:'你能帮我值一个晚上的班吗？',answerPy:'Nǐ néng bāng wǒ zhí yí ge wǎnshang de bān ma?',
      note:'Động từ ly hợp: thời lượng chen giữa 值 và 班 (值 + 一个晚上的 + 班).',pair:'động từ ly hợp'}
   ]},

  {n:20,zh:'报告',py:'bàogào',pos:'Danh từ',vn:'bản báo cáo',hv:'báo cáo',em:'📊',lesson:1,
   explain:['Danh từ: bản báo cáo, bài báo cáo: 写报告, 实验报告, 调查报告.','Động từ: báo cáo, báo lại cho cấp trên / mọi người biết: 报告消息, 向老师报告.'],
   usage:'写 / 交 / 做 + 报告; 一份报告 (lượng từ 份); 实验报告 / 调查报告; 向 + người + 报告 + việc.',
   collo:['写报告','实验报告','一份报告','报告消息'],
   ex_zh:'本来说好了，上午给他送实验报告，结果他临时外出，就没送成。',ex_py:'Běnlái shuōhǎo le, shàngwǔ gěi tā sòng shíyàn bàogào, jiéguǒ tā línshí wàichū, jiù méi sòngchéng.',ex_vn:'Vốn đã hẹn buổi sáng mang báo cáo thí nghiệm cho thầy, kết quả thầy đột xuất ra ngoài nên không đưa được.',
   exList:[
     {zh:'你想让同事帮你值班或写报告什么的。',py:'Nǐ xiǎng ràng tóngshì bāng nǐ zhíbān huò xiě bàogào shénme de.',vn:'Bạn muốn nhờ đồng nghiệp trực thay hay viết báo cáo giúp chẳng hạn.'},
     {zh:'本来说好了，上午给他送实验报告，结果他临时外出，就没送成。',py:'Běnlái shuōhǎo le, shàngwǔ gěi tā sòng shíyàn bàogào, jiéguǒ tā línshí wàichū, jiù méi sòngchéng.',vn:'Vốn đã hẹn buổi sáng mang báo cáo thí nghiệm cho thầy, kết quả thầy đột xuất ra ngoài nên không đưa được.'},
     {zh:'这份调查报告明天必须交给老师。',py:'Zhè fèn diàochá bàogào míngtiān bìxū jiāo gěi lǎoshī.',vn:'Bản báo cáo điều tra này ngày mai bắt buộc phải nộp cho thầy.'}
   ],
   colloFull:[
     {zh:'写报告',py:'xiě bàogào',vn:'viết báo cáo'},
     {zh:'实验报告',py:'shíyàn bàogào',vn:'báo cáo thí nghiệm'},
     {zh:'一份报告',py:'yí fèn bàogào',vn:'một bản báo cáo'},
     {zh:'报告消息',py:'bàogào xiāoxi',vn:'báo tin'},
     {zh:'调查报告',py:'diàochá bàogào',vn:'báo cáo điều tra'}
   ],
   patterns:[
     {s:'写 / 交 + 一份 + 报告',m:'viết / nộp một bản báo cáo'},
     {s:'向 + người + 报告 + việc',m:'báo cáo việc gì với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã nộp bản báo cáo thí nghiệm cho thầy rồi.',answer:'我已经把实验报告交给老师了。',answerPy:'Wǒ yǐjīng bǎ shíyàn bàogào jiāo gěi lǎoshī le.',
      note:'把 + O + 交给 + người.',pair:'把'},
     {promptLang:'vi',prompt:'Bản báo cáo này là do Tiểu Lý viết.',answer:'这份报告是小李写的。',answerPy:'Zhè fèn bàogào shì Xiǎo Lǐ xiě de.',
      note:'是……的 nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:21,zh:'八成',py:'bāchéng(r)',pos:'Phó từ',vn:'chắc là, hầu như chắc chắn',hv:'bát thành',em:'🎯',lesson:1,
   explain:['Phó từ khẩu ngữ: tám chín phần là, rất có thể — chắc là, có lẽ. Thường đọc 儿化: 八成儿 bāchéngr.','Danh từ số: tám phần mười (80%): 八成新 (còn mới tám phần).'],
   usage:'八成 (儿) + 会 / 是 / 要 / 不 + V: 八成儿会被拒绝, 八成是忘了. Tương đương 大概 / 很可能 nhưng khẩu ngữ hơn.',
   collo:['八成儿会被拒绝','八成是忘了','八成不来了','八成新'],
   ex_zh:'他到现在还没来，八成是忘了。',ex_py:'Tā dào xiànzài hái méi lái, bāchéng shì wàng le.',ex_vn:'Đến giờ cậu ấy vẫn chưa đến, chắc là quên rồi.',
   exList:[
     {zh:'你想让同事帮你值班或写报告什么的，直接说八成儿会被拒绝。',py:'Nǐ xiǎng ràng tóngshì bāng nǐ zhíbān huò xiě bàogào shénme de, zhíjiē shuō bāchéngr huì bèi jùjué.',vn:'Bạn muốn nhờ đồng nghiệp trực thay hay viết báo cáo giúp chẳng hạn, nói thẳng ra thì tám phần là bị từ chối.'},
     {zh:'他到现在还没来，八成是忘了。',py:'Tā dào xiànzài hái méi lái, bāchéng shì wàng le.',vn:'Đến giờ cậu ấy vẫn chưa đến, chắc là quên rồi.'},
     {zh:'天这么阴，八成要下雨了，带把伞吧。',py:'Tiān zhème yīn, bāchéng yào xià yǔ le, dài bǎ sǎn ba.',vn:'Trời âm u thế này, chắc sắp mưa rồi, mang ô đi.'}
   ],
   colloFull:[
     {zh:'八成儿会被拒绝',py:'bāchéngr huì bèi jùjué',vn:'chắc là sẽ bị từ chối'},
     {zh:'八成是忘了',py:'bāchéng shì wàng le',vn:'chắc là quên rồi'},
     {zh:'八成不来了',py:'bāchéng bù lái le',vn:'chắc là không đến nữa'},
     {zh:'八成新',py:'bāchéng xīn',vn:'còn mới tám phần'},
     {zh:'八成要下雨了',py:'bāchéng yào xià yǔ le',vn:'có lẽ sắp mưa rồi'}
   ],
   patterns:[
     {s:'八成 (儿) + 是 / 会 / 要 + V',m:'chắc là …, rất có thể …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đến giờ nó vẫn chưa về, chắc là bị cô giáo giữ lại rồi.',answer:'他到现在还没回来，八成是被老师留下了。',answerPy:'Tā dào xiànzài hái méi huílai, bāchéng shì bèi lǎoshī liúxià le.',
      note:'八成是 + phán đoán. 被 + người + 留下.',pair:'被'},
     {promptLang:'vi',prompt:'Nếu cậu nói thẳng thì chắc là cậu ấy sẽ không đồng ý.',answer:'如果你直接说，他八成不会同意。',answerPy:'Rúguǒ nǐ zhíjiē shuō, tā bāchéng bú huì tóngyì.',
      note:'八成 đứng sau chủ ngữ, trước 不会 + V.',pair:'如果……'}
   ]},

  {n:22,zh:'模糊',py:'móhu',pos:'Tính từ',vn:'mơ hồ, mập mờ, không rõ',hv:'mô hồ',em:'🌫️',lesson:1,
   explain:['Không rõ ràng, nhìn / nghe / nhớ không rõ — mờ, mơ hồ.','Còn là động từ: làm cho mờ đi, không rõ: 把事情模糊化 (nói mập mờ đi), 泪水模糊了双眼.'],
   usage:'视线 / 记忆 / 声音 / 印象 / 意思 / 光线 / 字迹 + 模糊 (bảng 搭配); V + 得 + 很模糊; 模糊的 + N; 模糊化.',
   collo:['视线模糊','记忆模糊','印得很模糊','把事情模糊化'],
   ex_zh:'宣传册有些地方印得比较模糊，得重新印。',ex_py:'Xuānchuáncè yǒuxiē dìfang yìn de bǐjiào móhu, děi chóngxīn yìn.',ex_vn:'Cuốn sách quảng cáo có mấy chỗ in khá mờ, phải in lại.',
   exList:[
     {zh:'把事情模糊化，“能不能帮个小忙”，“不会占用你很多时间”，台阶一铺，事情就容易多了。',py:'Bǎ shìqing móhu huà, “néng bu néng bāng ge xiǎo máng”, “bú huì zhànyòng nǐ hěn duō shíjiān”, táijiē yì pū, shìqing jiù róngyì duō le.',vn:'Nói mập mờ sự việc đi, “giúp mình một việc nhỏ được không”, “không mất nhiều thời gian của cậu đâu”, bậc thang đã trải sẵn thì mọi việc dễ hơn nhiều.'},
     {zh:'宣传册有些地方印得比较模糊，得重新印。',py:'Xuānchuáncè yǒuxiē dìfang yìn de bǐjiào móhu, děi chóngxīn yìn.',vn:'Cuốn sách quảng cáo có mấy chỗ in khá mờ, phải in lại.'},
     {zh:'时间太久了，小时候的事我只有一些模糊的印象。',py:'Shíjiān tài jiǔ le, xiǎoshíhou de shì wǒ zhǐ yǒu yìxiē móhu de yìnxiàng.',vn:'Lâu quá rồi, chuyện hồi nhỏ tôi chỉ còn chút ấn tượng mơ hồ.'}
   ],
   colloFull:[
     {zh:'视线模糊',py:'shìxiàn móhu',vn:'tầm nhìn mờ'},
     {zh:'记忆模糊',py:'jìyì móhu',vn:'ký ức mơ hồ'},
     {zh:'印得很模糊',py:'yìn de hěn móhu',vn:'in rất mờ'},
     {zh:'把事情模糊化',py:'bǎ shìqing móhu huà',vn:'nói mập mờ sự việc đi'},
     {zh:'模糊的印象',py:'móhu de yìnxiàng',vn:'ấn tượng mơ hồ'}
   ],
   patterns:[
     {s:'N (视线 / 记忆 / 字迹) + 模糊',m:'… mờ, không rõ'},
     {s:'V + 得 + 很模糊',m:'(in / nhìn / viết) rất mờ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không đeo kính thì chữ trên bảng tôi nhìn rất mờ.',answer:'不戴眼镜的话，黑板上的字我看得很模糊。',answerPy:'Bú dài yǎnjìng de huà, hēibǎn shang de zì wǒ kàn de hěn móhu.',
      note:'……的话: giả thiết. V + 得 + 很模糊: bổ ngữ trạng thái.',pair:'……的话'},
     {promptLang:'vi',prompt:'Thời gian càng lâu, ký ức về chuyện ấy càng mơ hồ.',answer:'时间越长，关于那件事的记忆越模糊。',answerPy:'Shíjiān yuè cháng, guānyú nà jiàn shì de jìyì yuè móhu.',
      note:'越 A 越 B: B thay đổi theo A. 记忆 + 模糊 (bảng 搭配).',pair:'越……越……'}
   ]},

  {n:23,zh:'狡猾',py:'jiǎohuá',pos:'Tính từ',vn:'xảo quyệt, xảo trá, ranh mãnh',hv:'giảo hoạt',em:'🦊',lesson:1,
   explain:['Gian xảo, nhiều mưu mẹo, hay lừa người — xảo quyệt, ranh mãnh.','Mang nghĩa xấu; hay đi với 狐狸 (con cáo), 敌人 (kẻ thù) — bảng 搭配.'],
   usage:'狡猾的 + 狐狸 / 敌人 / 商人; 很狡猾; 觉得 + người + 狡猾; 狡猾地 + 笑.',
   collo:['狡猾的狐狸','狡猾的敌人','很狡猾','觉得他狡猾'],
   ex_zh:'你可能会说，这些小动作会让人觉得你很狡猾。',ex_py:'Nǐ kěnéng huì shuō, zhèxiē xiǎo dòngzuò huì ràng rén juéde nǐ hěn jiǎohuá.',ex_vn:'Bạn có thể sẽ nói, những động tác nhỏ này sẽ khiến người ta thấy bạn rất xảo quyệt.',
   exList:[
     {zh:'你可能会说，这些小动作会让人觉得你很狡猾。',py:'Nǐ kěnéng huì shuō, zhèxiē xiǎo dòngzuò huì ràng rén juéde nǐ hěn jiǎohuá.',vn:'Bạn có thể sẽ nói, những động tác nhỏ này sẽ khiến người ta thấy bạn rất xảo quyệt.'},
     {zh:'故事里的狐狸非常狡猾，骗走了乌鸦嘴里的肉。',py:'Gùshi li de húli fēicháng jiǎohuá, piànzǒule wūyā zuǐ li de ròu.',vn:'Con cáo trong truyện rất xảo quyệt, lừa lấy mất miếng thịt trong mỏ con quạ.'},
     {zh:'那个商人很狡猾，我们差点儿上了他的当。',py:'Nàge shāngrén hěn jiǎohuá, wǒmen chàdiǎnr shàngle tā de dàng.',vn:'Tay thương nhân đó rất xảo trá, chúng tôi suýt nữa mắc lừa hắn.'}
   ],
   colloFull:[
     {zh:'狡猾的狐狸',py:'jiǎohuá de húli',vn:'con cáo xảo quyệt'},
     {zh:'狡猾的敌人',py:'jiǎohuá de dírén',vn:'kẻ thù xảo quyệt'},
     {zh:'很狡猾',py:'hěn jiǎohuá',vn:'rất xảo quyệt'},
     {zh:'觉得他狡猾',py:'juéde tā jiǎohuá',vn:'thấy anh ta xảo quyệt'},
     {zh:'狡猾地笑',py:'jiǎohuá de xiào',vn:'cười ranh mãnh'}
   ],
   patterns:[
     {s:'狡猾的 + 狐狸 / 敌人',m:'con cáo / kẻ thù xảo quyệt'},
     {s:'让人觉得 + người + 很狡猾',m:'khiến người ta thấy … xảo quyệt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con cáo xảo quyệt đã lừa con quạ.',answer:'狡猾的狐狸把乌鸦骗了。',answerPy:'Jiǎohuá de húli bǎ wūyā piàn le.',
      note:'狡猾的 + 狐狸 (bảng 搭配). 把 + O + V + 了.',pair:'把'},
     {promptLang:'vi',prompt:'Con cáo này vừa thông minh vừa xảo quyệt.',answer:'这只狐狸既聪明又狡猾。',answerPy:'Zhè zhī húli jì cōngming yòu jiǎohuá.',
      note:'既……又…… nối hai tính từ. Lượng từ 只 cho con vật.',pair:'既……又……'}
   ]},

  {n:24,zh:'了不起',py:'liǎobuqǐ',pos:'Tính từ',vn:'tài ba, giỏi, vĩ đại, phi thường',hv:'liễu bất khởi',em:'🏆',lesson:1,
   explain:['Giỏi giang hơn người, phi thường — tuyệt vời, rất giỏi. Mang nghĩa khen.','Trong câu phản vấn “有什么了不起的？” lại có ý coi thường: có gì ghê gớm đâu. 自认为了不起 = tự cho mình là giỏi.'],
   usage:'真 / 太 + 了不起 (了); 了不起的 + 人物 / 贡献 / 成绩 / 发明 / 创造 / 民族 / 母亲 (bảng 搭配); 有什么了不起的？',
   collo:['真了不起','了不起的人物','有什么了不起的','自认为了不起'],
   ex_zh:'有时候，当你自认为了不起时，别人通常觉得你这人不过如此。',ex_py:'Yǒu shíhou, dāng nǐ zì rènwéi liǎobuqǐ shí, biérén tōngcháng juéde nǐ zhè rén búguò rúcǐ.',ex_vn:'Có những lúc, khi bạn tự cho mình là ghê gớm, người khác thường thấy bạn cũng chỉ đến thế mà thôi.',
   exList:[
     {zh:'有时候，当你自认为了不起时，别人通常觉得你这人不过如此。',py:'Yǒu shíhou, dāng nǐ zì rènwéi liǎobuqǐ shí, biérén tōngcháng juéde nǐ zhè rén búguò rúcǐ.',vn:'Có những lúc, khi bạn tự cho mình là ghê gớm, người khác thường thấy bạn cũng chỉ đến thế mà thôi.'},
     {zh:'四大发明是中国古代了不起的发明。',py:'Sì dà fāmíng shì Zhōngguó gǔdài liǎobuqǐ de fāmíng.',vn:'Tứ đại phát minh là những phát minh vĩ đại của Trung Quốc cổ đại.'},
     {zh:'不就是考了个第一吗？有什么了不起的？',py:'Bú jiù shì kǎole ge dì-yī ma? Yǒu shénme liǎobuqǐ de?',vn:'Chẳng phải chỉ là thi được hạng nhất thôi sao? Có gì ghê gớm đâu?'}
   ],
   colloFull:[
     {zh:'真了不起',py:'zhēn liǎobuqǐ',vn:'thật phi thường'},
     {zh:'了不起的人物',py:'liǎobuqǐ de rénwù',vn:'nhân vật kiệt xuất'},
     {zh:'有什么了不起的',py:'yǒu shénme liǎobuqǐ de',vn:'có gì ghê gớm đâu'},
     {zh:'自认为了不起',py:'zì rènwéi liǎobuqǐ',vn:'tự cho mình là giỏi'},
     {zh:'了不起的母亲',py:'liǎobuqǐ de mǔqīn',vn:'người mẹ tuyệt vời'}
   ],
   patterns:[
     {s:'了不起的 + 人物 / 发明 / 成绩',m:'… phi thường'},
     {s:'有什么了不起的？',m:'(phản vấn) có gì ghê gớm đâu?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ một mình vừa đi làm vừa nuôi ba đứa con, thật là phi thường.',answer:'妈妈一个人一边工作一边养三个孩子，真了不起。',answerPy:'Māma yí ge rén yìbiān gōngzuò yìbiān yǎng sān ge háizi, zhēn liǎobuqǐ.',
      note:'一边……一边……: hai việc cùng lúc. 真了不起 = thật đáng nể.',pair:'一边……一边……'},
     {promptLang:'vi',prompt:'Cậu ấy mới 15 tuổi đã đỗ đại học, thật quá giỏi!',answer:'他才十五岁就考上了大学，太了不起了！',answerPy:'Tā cái shíwǔ suì jiù kǎoshangle dàxué, tài liǎobuqǐ le!',
      note:'才……就……: sớm hơn dự kiến. 太 + 了不起 + 了.',pair:'才……就……'}
   ]},

  {n:25,zh:'身段',py:'shēnduàn',pos:'Danh từ',vn:'dáng vẻ; thái độ, tư thế (bề trên)',hv:'thân đoạn',em:'🙇',lesson:1,
   explain:['Nghĩa gốc: dáng người, vóc dáng; động tác, dáng điệu của diễn viên hí khúc: 身段优美.','Nghĩa bóng: tư thế, cái “giá” tự cho mình ở vị trí cao: 放低身段 / 放下身段 = hạ mình, bỏ dáng bề trên, khiêm nhường.'],
   usage:'放低 / 放下 + 身段; 身段 + 好 / 优美; 演员的身段.',
   collo:['放低身段','放下身段','身段优美'],
   ex_zh:'当你放低身段时，会缩短与人的距离。',ex_py:'Dāng nǐ fàngdī shēnduàn shí, huì suōduǎn yǔ rén de jùlí.',ex_vn:'Khi bạn hạ mình xuống, bạn sẽ rút ngắn khoảng cách với người khác.',
   exList:[
     {zh:'当你放低身段时，会缩短与人的距离。',py:'Dāng nǐ fàngdī shēnduàn shí, huì suōduǎn yǔ rén de jùlí.',vn:'Khi bạn hạ mình xuống, bạn sẽ rút ngắn khoảng cách với người khác.'},
     {zh:'这位经理愿意放下身段，和员工一起在食堂吃饭。',py:'Zhè wèi jīnglǐ yuànyì fàngxià shēnduàn, hé yuángōng yìqǐ zài shítáng chī fàn.',vn:'Vị giám đốc này sẵn lòng bỏ dáng bề trên, cùng nhân viên ăn cơm ở nhà ăn.'},
     {zh:'这个京剧演员的身段非常优美。',py:'Zhège jīngjù yǎnyuán de shēnduàn fēicháng yōuměi.',vn:'Dáng điệu của diễn viên Kinh kịch này vô cùng đẹp.'}
   ],
   colloFull:[
     {zh:'放低身段',py:'fàngdī shēnduàn',vn:'hạ mình, khiêm nhường'},
     {zh:'放下身段',py:'fàngxià shēnduàn',vn:'bỏ dáng bề trên'},
     {zh:'身段优美',py:'shēnduàn yōuměi',vn:'dáng điệu đẹp'},
     {zh:'领导放低身段',py:'lǐngdǎo fàngdī shēnduàn',vn:'lãnh đạo hạ mình'},
     {zh:'演员的身段',py:'yǎnyuán de shēnduàn',vn:'dáng điệu của diễn viên'}
   ],
   patterns:[
     {s:'放低 / 放下 + 身段',m:'hạ mình, bỏ dáng bề trên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần chịu hạ mình, người khác sẽ sẵn lòng giúp bạn.',answer:'只要愿意放低身段，别人就会愿意帮助你。',answerPy:'Zhǐyào yuànyì fàngdī shēnduàn, biérén jiù huì yuànyì bāngzhù nǐ.',
      note:'只要……就……; 放低身段 là cụm của bài khoá.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy anh ấy là giám đốc, nhưng rất sẵn lòng bỏ dáng bề trên.',answer:'虽然他是经理，但是很愿意放下身段。',answerPy:'Suīrán tā shì jīnglǐ, dànshì hěn yuànyì fàngxià shēnduàn.',
      note:'虽然……但是…… nêu tương phản thân phận – thái độ.',pair:'虽然……但是……'}
   ]},

  {n:26,zh:'缩短',py:'suōduǎn',pos:'Động từ',vn:'rút ngắn',hv:'súc đoản',em:'📏',lesson:1,
   explain:['Làm cho ngắn lại (độ dài, khoảng cách, thời gian) — rút ngắn.','Trái nghĩa: 延长 (kéo dài).'],
   usage:'缩短 + 长度 / 距离 / 时间 / 路线 (bảng 搭配); 缩短了一半; 把……缩短到 + số; 缩短 + 与 / 和 + 人 + 的距离.',
   collo:['缩短距离','缩短时间','缩短长度','缩短路线'],
   ex_zh:'微笑是缩短人与人之间距离的好方法。',ex_py:'Wēixiào shì suōduǎn rén yǔ rén zhījiān jùlí de hǎo fāngfǎ.',ex_vn:'Nụ cười là cách tốt để rút ngắn khoảng cách giữa người với người.',
   exList:[
     {zh:'当你放低身段时，会缩短与人的距离。',py:'Dāng nǐ fàngdī shēnduàn shí, huì suōduǎn yǔ rén de jùlí.',vn:'Khi bạn hạ mình xuống, bạn sẽ rút ngắn khoảng cách với người khác.'},
     {zh:'微笑是缩短人与人之间距离的好方法。',py:'Wēixiào shì suōduǎn rén yǔ rén zhījiān jùlí de hǎo fāngfǎ.',vn:'Nụ cười là cách tốt để rút ngắn khoảng cách giữa người với người.'},
     {zh:'高铁开通以后，从河内到海防的时间缩短了一半。',py:'Gāotiě kāitōng yǐhòu, cóng Hénèi dào Hǎifáng de shíjiān suōduǎnle yíbàn.',vn:'Sau khi đường sắt cao tốc thông tuyến, thời gian từ Hà Nội đến Hải Phòng rút ngắn một nửa.'}
   ],
   colloFull:[
     {zh:'缩短距离',py:'suōduǎn jùlí',vn:'rút ngắn khoảng cách'},
     {zh:'缩短时间',py:'suōduǎn shíjiān',vn:'rút ngắn thời gian'},
     {zh:'缩短长度',py:'suōduǎn chángdù',vn:'rút ngắn chiều dài'},
     {zh:'缩短路线',py:'suōduǎn lùxiàn',vn:'rút ngắn tuyến đường'},
     {zh:'缩短了一半',py:'suōduǎnle yíbàn',vn:'rút ngắn một nửa'}
   ],
   patterns:[
     {s:'缩短 + 与 / 和 + 人 + 的距离',m:'rút ngắn khoảng cách với ai'},
     {s:'把 + N + 缩短到 + số',m:'rút ngắn … xuống còn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo yêu cầu chúng tôi rút ngắn bài văn xuống còn 300 chữ.',answer:'老师要求我们把文章缩短到三百字。',answerPy:'Lǎoshī yāoqiú wǒmen bǎ wénzhāng suōduǎn dào sānbǎi zì.',
      note:'把 + O + 缩短到 + số lượng.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ một nụ cười, khoảng cách giữa hai người liền được rút ngắn.',answer:'一笑，两个人的距离就缩短了。',answerPy:'Yí xiào, liǎng ge rén de jùlí jiù suōduǎn le.',
      note:'一……就……: hành động vừa xảy ra thì kết quả đến ngay.',pair:'一……就……'}
   ]},

  {n:27,zh:'看不起',py:'kànbuqǐ',pos:'Động từ',vn:'khinh thường, xem thường',hv:'khán bất khởi',em:'🙄',lesson:1,
   explain:['Coi thường, không coi trọng ai / việc gì — khinh thường.','Trái nghĩa: 看得起 (coi trọng). Dạng bổ ngữ khả năng: 看 + 不起.'],
   usage:'看不起 + người / việc; 被 (人) 看不起; 让人看不起; 别 / 不要 + 看不起…….',
   collo:['看不起别人','被人看不起','别看不起','看不起穷人'],
   ex_zh:'别人并不会看不起你，反而会觉得你为人谦虚。',ex_py:'Biérén bìng bú huì kànbuqǐ nǐ, fǎn\'ér huì juéde nǐ wéirén qiānxū.',ex_vn:'Người khác hoàn toàn sẽ không coi thường bạn, ngược lại còn thấy bạn là người khiêm tốn.',
   exList:[
     {zh:'别人并不会看不起你，反而会觉得你为人谦虚。',py:'Biérén bìng bú huì kànbuqǐ nǐ, fǎn\'ér huì juéde nǐ wéirén qiānxū.',vn:'Người khác hoàn toàn sẽ không coi thường bạn, ngược lại còn thấy bạn là người khiêm tốn.'},
     {zh:'不要看不起农村来的同学。',py:'Búyào kànbuqǐ nóngcūn lái de tóngxué.',vn:'Đừng coi thường các bạn từ nông thôn lên.'},
     {zh:'他怕被人看不起，所以每天都拼命学习。',py:'Tā pà bèi rén kànbuqǐ, suǒyǐ měi tiān dōu pīnmìng xuéxí.',vn:'Cậu ấy sợ bị người ta coi thường nên ngày nào cũng học bạt mạng.'}
   ],
   colloFull:[
     {zh:'看不起别人',py:'kànbuqǐ biérén',vn:'khinh thường người khác'},
     {zh:'被人看不起',py:'bèi rén kànbuqǐ',vn:'bị người ta khinh thường'},
     {zh:'别看不起',py:'bié kànbuqǐ',vn:'đừng xem thường'},
     {zh:'看不起穷人',py:'kànbuqǐ qióngrén',vn:'khinh người nghèo'},
     {zh:'让人看不起',py:'ràng rén kànbuqǐ',vn:'khiến người ta khinh'}
   ],
   patterns:[
     {s:'看不起 + người / việc',m:'coi thường ai / việc gì'},
     {s:'被 + người + 看不起',m:'bị ai khinh thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì thành tích không tốt, cậu ấy từng bị bạn cùng lớp coi thường.',answer:'因为成绩不好，他曾经被同学看不起。',answerPy:'Yīnwèi chéngjì bù hǎo, tā céngjīng bèi tóngxué kànbuqǐ.',
      note:'被 + người + 看不起. 曾经 đứng trước 被.',pair:'被'},
     {promptLang:'vi',prompt:'Dù là công việc gì cũng đừng coi thường.',answer:'不管什么工作，都不要看不起。',answerPy:'Bùguǎn shénme gōngzuò, dōu búyào kànbuqǐ.',
      note:'不管 + đại từ nghi vấn + 都…….',pair:'不管……都……'}
   ]},

  {n:28,zh:'谦虚',py:'qiānxū',pos:'Tính từ',vn:'khiêm tốn',hv:'khiêm hư',em:'🌾',lesson:1,
   explain:['Không kiêu ngạo, không tự cao, sẵn lòng nghe ý kiến người khác — khiêm tốn. Trái nghĩa: 骄傲.','Còn dùng như động từ khi đáp lời khen: 您太谦虚了 (anh khiêm tốn quá).'],
   usage:'为人 / 待人 + 谦虚; 谦虚地 + 请教 / 说; 谦虚一点儿; 谦虚使人进步.',
   collo:['为人谦虚','待人谦虚','谦虚地请教','太谦虚了'],
   ex_zh:'老师希望我能谦虚一点儿。',ex_py:'Lǎoshī xīwàng wǒ néng qiānxū yìdiǎnr.',ex_vn:'Thầy giáo mong tôi có thể khiêm tốn hơn một chút.',
   exList:[
     {zh:'别人并不会看不起你，反而会觉得你为人谦虚。',py:'Biérén bìng bú huì kànbuqǐ nǐ, fǎn\'ér huì juéde nǐ wéirén qiānxū.',vn:'Người khác hoàn toàn sẽ không coi thường bạn, ngược lại còn thấy bạn là người khiêm tốn.'},
     {zh:'老师希望我能谦虚一点儿。',py:'Lǎoshī xīwàng wǒ néng qiānxū yìdiǎnr.',vn:'Thầy giáo mong tôi có thể khiêm tốn hơn một chút.'},
     {zh:'他学习很好，但是待人非常谦虚。',py:'Tā xuéxí hěn hǎo, dànshì dàirén fēicháng qiānxū.',vn:'Cậu ấy học rất giỏi nhưng đối xử với mọi người rất khiêm tốn.'}
   ],
   colloFull:[
     {zh:'为人谦虚',py:'wéirén qiānxū',vn:'tính người khiêm tốn'},
     {zh:'待人谦虚',py:'dàirén qiānxū',vn:'đối xử với người khiêm tốn'},
     {zh:'谦虚地请教',py:'qiānxū de qǐngjiào',vn:'khiêm tốn thỉnh giáo'},
     {zh:'太谦虚了',py:'tài qiānxū le',vn:'khiêm tốn quá'},
     {zh:'谦虚使人进步',py:'qiānxū shǐ rén jìnbù',vn:'khiêm tốn giúp người ta tiến bộ'}
   ],
   patterns:[
     {s:'为人 / 待人 + 谦虚',m:'tính tình / cách đối xử khiêm tốn'},
     {s:'您太谦虚了',m:'(đáp lời khen) anh / chị khiêm tốn quá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy không những học giỏi mà còn rất khiêm tốn.',answer:'他不仅学习好，而且非常谦虚。',answerPy:'Tā bùjǐn xuéxí hǎo, érqiě fēicháng qiānxū.',
      note:'Cùng chủ ngữ: 不仅 đứng sau chủ ngữ.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Thầy giáo khuyên tôi phải khiêm tốn hơn một chút.',answer:'老师劝我要谦虚一点儿。',answerPy:'Lǎoshī quàn wǒ yào qiānxū yìdiǎnr.',
      note:'劝 + người + 要 + tính từ + 一点儿 (ôn 劝 của bài).',pair:'tính từ + 一点儿'}
   ]},

  {n:29,zh:'实践',py:'shíjiàn',pos:'Danh từ / Động từ',vn:'thực tiễn; thực hành, thực hiện',hv:'thực tiễn',em:'🔬',lesson:1,
   explain:['Danh từ: thực tiễn, hoạt động thực tế: 实践证明 (thực tiễn chứng minh), 社会实践 (hoạt động thực tế xã hội).','Động từ: thực hiện, đem ra làm: 实践自己的诺言 (thực hiện lời hứa).'],
   usage:'实践证明，……; 社会实践; 在实践中 + V; 理论和实践; 实践 + 诺言 / 理想.',
   collo:['实践证明','社会实践','在实践中','理论和实践'],
   ex_zh:'实践证明，第二种人得到的总是比第一种人更多。',ex_py:'Shíjiàn zhèngmíng, dì-èr zhǒng rén dédào de zǒngshì bǐ dì-yī zhǒng rén gèng duō.',ex_vn:'Thực tiễn chứng minh, người thuộc kiểu thứ hai bao giờ cũng nhận được nhiều hơn kiểu thứ nhất.',
   exList:[
     {zh:'实践证明，第二种人得到的总是比第一种人更多。',py:'Shíjiàn zhèngmíng, dì-èr zhǒng rén dédào de zǒngshì bǐ dì-yī zhǒng rén gèng duō.',vn:'Thực tiễn chứng minh, người thuộc kiểu thứ hai bao giờ cũng nhận được nhiều hơn kiểu thứ nhất.'},
     {zh:'暑假里，学校组织我们去工厂参加社会实践。',py:'Shǔjià li, xuéxiào zǔzhī wǒmen qù gōngchǎng cānjiā shèhuì shíjiàn.',vn:'Trong kỳ nghỉ hè, nhà trường tổ chức cho chúng tôi đến nhà máy tham gia thực tế xã hội.'},
     {zh:'知识要在实践中才能真正学会。',py:'Zhīshi yào zài shíjiàn zhōng cái néng zhēnzhèng xuéhuì.',vn:'Kiến thức phải qua thực tiễn mới thật sự học được.'}
   ],
   colloFull:[
     {zh:'实践证明',py:'shíjiàn zhèngmíng',vn:'thực tiễn chứng minh'},
     {zh:'社会实践',py:'shèhuì shíjiàn',vn:'hoạt động thực tế xã hội'},
     {zh:'在实践中',py:'zài shíjiàn zhōng',vn:'trong thực tiễn'},
     {zh:'理论和实践',py:'lǐlùn hé shíjiàn',vn:'lý thuyết và thực tiễn'},
     {zh:'实践诺言',py:'shíjiàn nuòyán',vn:'thực hiện lời hứa'}
   ],
   patterns:[
     {s:'实践证明，……',m:'thực tiễn đã chứng minh …'},
     {s:'在实践中 + V',m:'… trong thực tiễn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thực tiễn chứng minh, chỉ cần chịu cố gắng thì ai cũng có thể học giỏi tiếng Trung.',answer:'实践证明，只要肯努力，谁都能学好汉语。',answerPy:'Shíjiàn zhèngmíng, zhǐyào kěn nǔlì, shéi dōu néng xuéhǎo Hànyǔ.',
      note:'只要…… (điều kiện); 谁都 = ai cũng (đại từ nghi vấn + 都).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Hè năm nay, chúng tôi được nhà trường sắp xếp về nông thôn tham gia thực tế xã hội.',answer:'今年暑假，我们被学校安排到农村参加社会实践。',answerPy:'Jīnnián shǔjià, wǒmen bèi xuéxiào ānpái dào nóngcūn cānjiā shèhuì shíjiàn.',
      note:'被 + người + 安排到 + nơi + V.',pair:'被'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — 登门槛效应 (714 chữ, tr. 114–116)
// ══════════════════════════════════════════
var dialogData = [
  {
    scene:'课文 · 登门槛效应',
    preQuiz:[
      {q:'那个朋友在哪儿工作？',opts:['在报社','在学校','在医院'],ans:0},
      {q:'朋友去请假时，先问了领导什么？',opts:['领导忙不忙','领导今天心情好不好','领导什么时候有空'],ans:1},
      {q:'朋友请假的结果怎么样？',opts:['被领导拒绝了','领导让他改天再说','很轻易地请好了'],ans:2},
      {q:'心理学家派人到几个社区做实验？',opts:['两个','三个','一个'],ans:0},
      {q:'研究人员劝人们在屋前立什么？',opts:['一块广告牌','一个红绿灯','一块“小心驾驶”的圆形标志'],ans:2},
      {q:'在第一个社区，接受率是多少？',opts:['55%','17%','71%'],ans:1},
      {q:'在第二个社区，研究人员先请人们做什么？',opts:['在请愿书上签字','在屋前立牌','参加安全驾驶的会议'],ans:0},
      {q:'在第二个社区，接受者达到了多少？',opts:['17%','55%','几乎所有人'],ans:1},
      {q:'如果一开始就迫切地提出约会，女孩可能会怎么样？',opts:['马上答应','非常高兴','犹豫，甚至表现得很冷淡'],ans:2},
      {q:'想让同事帮你值班，作者认为直接说会怎么样？',opts:['同事一定会答应','八成儿会被拒绝','同事会觉得你很谦虚'],ans:1},
      {q:'当你自认为了不起时，别人通常怎么看你？',opts:['觉得你不过如此','觉得你很谦虚','非常佩服你'],ans:0},
      {q:'放低身段有什么好处？',opts:['别人会看不起你','别人会觉得你很狡猾','能缩短与人的距离，别人觉得你谦虚'],ans:2}
    ],
    lines:[
      {
        sp:0,
        zh:'一个朋友在报社当编辑。一天他去请假，他先问领导：“您今天心情好吗？”领导说：“怎么了？”朋友答：“嗯，如果您心情好，我就说件事；心情不好就改天再说。”领导有了兴趣，假，就这样轻易地请好了。',
        py:'Yí ge péngyou zài bàoshè dāng biānjí. Yì tiān tā qù qǐngjià, tā xiān wèn lǐngdǎo: “Nín jīntiān xīnqíng hǎo ma?” Lǐngdǎo shuō: “Zěnme le?” Péngyou dá: “Ǹg, rúguǒ nín xīnqíng hǎo, wǒ jiù shuō jiàn shì; xīnqíng bù hǎo jiù gǎitiān zài shuō.” Lǐngdǎo yǒule xìngqù, jià, jiù zhèyàng qīngyì de qǐnghǎo le.',
        vn:'Một người bạn làm biên tập viên ở toà soạn báo. Một hôm anh ấy đi xin nghỉ phép, trước tiên anh hỏi sếp: “Hôm nay tâm trạng anh có tốt không ạ?” Sếp hỏi: “Sao thế?” Người bạn đáp: “Dạ, nếu tâm trạng anh tốt thì em xin nói một việc; tâm trạng không tốt thì hôm khác em nói.” Sếp thấy tò mò, thế là việc xin nghỉ được giải quyết dễ dàng như vậy.'
      },
      {
        sp:0,
        zh:'不得不说，这位朋友很会利用“登门槛效应”来处理问题。',
        py:'Bùdébù shuō, zhè wèi péngyou hěn huì lìyòng “dēng ménkǎn xiàoyìng” lái chǔlǐ wèntí.',
        vn:'Phải nói rằng, người bạn này rất biết tận dụng “hiệu ứng bước chân qua ngưỡng cửa” để giải quyết vấn đề.'
      },
      {
        sp:0,
        zh:'心理学家曾做过“登门槛技术”的现场实验。他们派人到两个社区，劝人们在屋前立一块“小心驾驶”的圆形标志。在第一个社区，研究人员直接向人们提出要求，结果很多人表示拒绝，接受率仅为17%。在第二个社区，研究人员把同样的事情分成两个步骤：先向大家出示一份赞成安全驾驶的请愿书，请求他们在上面签字，几周后再提出立牌要求，这次接受者竟然达到了55%。第一个步骤的签字是很容易的，几乎所有人都照做了，大家可能都没意识到，这个小小的“登门槛行为”对接下来的决定产生了重要影响。',
        py:'Xīnlǐxuéjiā céng zuòguo “dēng ménkǎn jìshù” de xiànchǎng shíyàn. Tāmen pài rén dào liǎng ge shèqū, quàn rénmen zài wū qián lì yí kuài “xiǎoxīn jiàshǐ” de yuánxíng biāozhì. Zài dì-yī ge shèqū, yánjiū rényuán zhíjiē xiàng rénmen tíchū yāoqiú, jiéguǒ hěn duō rén biǎoshì jùjué, jiēshòulǜ jǐn wéi bǎi fēn zhī shíqī. Zài dì-èr ge shèqū, yánjiū rényuán bǎ tóngyàng de shìqing fēnchéng liǎng ge bùzhòu: xiān xiàng dàjiā chūshì yí fèn zànchéng ānquán jiàshǐ de qǐngyuànshū, qǐngqiú tāmen zài shàngmiàn qiānzì, jǐ zhōu hòu zài tíchū lì pái yāoqiú, zhè cì jiēshòuzhě jìngrán dádàole bǎi fēn zhī wǔshíwǔ. Dì-yī ge bùzhòu de qiānzì shì hěn róngyì de, jīhū suǒyǒu rén dōu zhàozuò le, dàjiā kěnéng dōu méi yìshí dào, zhège xiǎoxiǎo de “dēng ménkǎn xíngwéi” duì jiēxiàlai de juédìng chǎnshēngle zhòngyào yǐngxiǎng.',
        vn:'Các nhà tâm lý học từng làm thí nghiệm thực địa về “kỹ thuật bước chân qua ngưỡng cửa”. Họ cử người đến hai khu dân cư, khuyên mọi người dựng trước nhà một tấm biển tròn “Lái xe cẩn thận”. Ở khu thứ nhất, nhân viên nghiên cứu trực tiếp đưa ra yêu cầu, kết quả rất nhiều người từ chối, tỉ lệ đồng ý chỉ có 17%. Ở khu thứ hai, nhân viên nghiên cứu chia cùng một việc ấy thành hai bước: trước hết đưa cho mọi người xem một bản kiến nghị ủng hộ lái xe an toàn, đề nghị họ ký tên vào đó; vài tuần sau mới đưa ra yêu cầu dựng biển, lần này số người đồng ý lại lên tới 55%. Việc ký tên ở bước thứ nhất rất dễ, hầu như ai cũng làm theo; có lẽ mọi người đều không nhận ra rằng “hành vi bước qua ngưỡng cửa” nho nhỏ ấy đã tạo ảnh hưởng quan trọng đến quyết định tiếp theo.'
      },
      {
        sp:0,
        zh:'日常生活中也是这样。当你想要求某人做某件较大的事情，又担心对方不愿意做时，可以先向他／她提出做一件同类型的、比较容易的事。比如你想与一个女孩谈恋爱，如果一开始就迫切地提出要跟她约会，女孩可能会犹豫，甚至表现得很冷淡；如果你说“饭总是要吃的吧，一起吃饭吧”，她答应了，那接下来是去看电影还是泡酒吧都无所谓了。你想让同事帮你值班或写报告什么的，直接说八成儿会被拒绝，把事情模糊化，“能不能帮个小忙”，“不会占用你很多时间”，台阶一铺，事情就容易多了……',
        py:'Rìcháng shēnghuó zhōng yě shì zhèyàng. Dāng nǐ xiǎng yāoqiú mǒu rén zuò mǒu jiàn jiào dà de shìqing, yòu dānxīn duìfāng bú yuànyì zuò shí, kěyǐ xiān xiàng tā tíchū zuò yí jiàn tóng lèixíng de, bǐjiào róngyì de shì. Bǐrú nǐ xiǎng yǔ yí ge nǚhái tán liàn\'ài, rúguǒ yì kāishǐ jiù pòqiè de tíchū yào gēn tā yuēhuì, nǚhái kěnéng huì yóuyù, shènzhì biǎoxiàn de hěn lěngdàn; rúguǒ nǐ shuō “fàn zǒngshì yào chī de ba, yìqǐ chī fàn ba”, tā dāying le, nà jiēxiàlai shì qù kàn diànyǐng háishi pào jiǔbā dōu wúsuǒwèi le. Nǐ xiǎng ràng tóngshì bāng nǐ zhíbān huò xiě bàogào shénme de, zhíjiē shuō bāchéngr huì bèi jùjué, bǎ shìqing móhu huà, “néng bu néng bāng ge xiǎo máng”, “bú huì zhànyòng nǐ hěn duō shíjiān”, táijiē yì pū, shìqing jiù róngyì duō le……',
        vn:'Trong cuộc sống hằng ngày cũng vậy. Khi bạn muốn đề nghị ai đó làm một việc tương đối lớn mà lại lo đối phương không muốn làm, thì có thể trước hết đề nghị người đó làm một việc cùng loại nhưng khá dễ. Ví dụ bạn muốn yêu một cô gái, nếu ngay từ đầu đã nôn nóng đề nghị hẹn hò, cô ấy có thể sẽ do dự, thậm chí tỏ ra rất lạnh nhạt; còn nếu bạn nói “Đằng nào cũng phải ăn cơm chứ, mình đi ăn cùng nhau nhé”, cô ấy nhận lời rồi, thì tiếp theo đi xem phim hay ngồi quán bar đều chẳng thành vấn đề nữa. Bạn muốn nhờ đồng nghiệp trực thay hay viết báo cáo giúp chẳng hạn, nói thẳng ra thì tám phần là bị từ chối; hãy nói mập mờ sự việc đi: “giúp mình một việc nhỏ được không”, “không mất nhiều thời gian của cậu đâu” — bậc thang đã trải sẵn thì mọi việc dễ hơn nhiều…'
      },
      {
        sp:0,
        zh:'你可能会说，这些小动作会让人觉得你很狡猾。但是不得不承认，有了这些小动作的帮助，别人的确更愿意接受你的请求。有时候，当你自认为了不起时，别人通常觉得你这人不过如此；可是当你放低身段时，会缩短与人的距离，别人并不会看不起你，反而会觉得你为人谦虚。实践证明，第二种人得到的总是比第一种人更多。',
        py:'Nǐ kěnéng huì shuō, zhèxiē xiǎo dòngzuò huì ràng rén juéde nǐ hěn jiǎohuá. Dànshì bùdébù chéngrèn, yǒule zhèxiē xiǎo dòngzuò de bāngzhù, biérén díquè gèng yuànyì jiēshòu nǐ de qǐngqiú. Yǒu shíhou, dāng nǐ zì rènwéi liǎobuqǐ shí, biérén tōngcháng juéde nǐ zhè rén búguò rúcǐ; kěshì dāng nǐ fàngdī shēnduàn shí, huì suōduǎn yǔ rén de jùlí, biérén bìng bú huì kànbuqǐ nǐ, fǎn\'ér huì juéde nǐ wéirén qiānxū. Shíjiàn zhèngmíng, dì-èr zhǒng rén dédào de zǒngshì bǐ dì-yī zhǒng rén gèng duō.',
        vn:'Bạn có thể sẽ nói, những động tác nhỏ này sẽ khiến người ta thấy bạn rất xảo quyệt. Nhưng phải thừa nhận rằng, có sự trợ giúp của những động tác nhỏ ấy, người khác quả thật sẵn lòng chấp nhận yêu cầu của bạn hơn. Có những lúc, khi bạn tự cho mình là ghê gớm, người khác thường thấy con người bạn cũng chỉ đến thế mà thôi; còn khi bạn hạ mình xuống, bạn sẽ rút ngắn khoảng cách với người khác, người ta hoàn toàn không coi thường bạn, ngược lại còn thấy bạn là người khiêm tốn. Thực tiễn chứng minh, người thuộc kiểu thứ hai bao giờ cũng nhận được nhiều hơn người thuộc kiểu thứ nhất.'
      }
    ]
  }
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ — 轻易/容易 là cặp 词语辨析 của sách (tr. 118) + 2 cặp tự thêm (từ bài tập 2 của sách)
// ══════════════════════════════════════════
var synonymData = [
  {
    pair:'轻易 — 容易',
    same:'Khi làm tính từ, đều có thể biểu thị làm việc gì đó không tốn sức — dễ dàng.',
    sameEx:{zh:'这个问题他很轻易／容易就解决了。',vn:'Vấn đề này cậu ấy giải quyết rất dễ dàng.'},
    items:[
      {
        word:'轻易',
        points:[
          'Nhấn mạnh làm việc NHẸ NHÀNG, không tốn sức; thường làm TRẠNG NGỮ: 轻易地 + V.',
          'Còn là PHÓ TỪ: tuỳ tiện, không thận trọng — hay dùng “轻易不 / 不轻易 + V” (ít khi, không dễ gì).',
          'Không có nghĩa “dễ xảy ra một thay đổi”; ít làm vị ngữ độc lập.'
        ],
        ex:[
          {zh:'她从小学习就好，高考时很轻易地考上了名牌大学，接着又读了研究生。',vn:'Cô ấy học giỏi từ nhỏ, thi đại học đỗ trường danh tiếng một cách dễ dàng, sau đó lại học tiếp cao học.'},
          {zh:'我爱书，无论走到哪里，我从不轻易放过书摊、书店。',vn:'Tôi mê sách, dù đi đến đâu cũng không bao giờ bỏ qua sạp sách, hiệu sách.'}
        ]
      },
      {
        word:'容易',
        points:[
          'Ngoài nghĩa việc đơn giản, không khó làm, còn chỉ bản thân NỘI DUNG sự việc không phức tạp; làm VỊ NGỮ độc lập được: 考试很容易.',
          'Còn chỉ KHẢ NĂNG xảy ra một thay đổi nào đó lớn: 容易发脾气, 容易感冒, 容易误会.',
          'Không có cách dùng phó từ “tuỳ tiện” như 轻易.'
        ],
        ex:[
          {zh:'今天的考试特别容易，我半个小时就答完了。',vn:'Bài thi hôm nay đặc biệt dễ, tôi làm nửa tiếng là xong.'},
          {zh:'他最近心情不好，容易发脾气。',vn:'Dạo này tâm trạng anh ấy không tốt, dễ nổi cáu.'}
        ]
      }
    ],
    quiz:[
      {sentence:'今天的考试特别＿＿，我半个小时就答完了。',options:['轻易','容易'],answer:1,why:'Làm vị ngữ độc lập, nói NỘI DUNG bài thi không khó → chỉ 容易.'},
      {sentence:'他最近心情不好，＿＿发脾气。',options:['轻易','容易'],answer:1,why:'Khả năng xảy ra thay đổi lớn (dễ nổi cáu) → chỉ 容易.'},
      {sentence:'他为人好强，＿＿不求人。',options:['轻易','容易'],answer:0,why:'Phó từ, “轻易不 + V” = ít khi … → chỉ 轻易.'},
      {sentence:'这个问题他很＿＿就解决了。',options:['轻易','容易'],answer:0,both:true,why:'Làm việc không tốn sức → cả hai đều được (轻易 nhấn vào sự nhẹ nhàng của người làm).'}
    ],
    sgk:{
      chung:{t:'做形容词时，都可以表示做起来不费事。',vn:'Khi làm tính từ, đều có thể biểu thị làm việc gì đó không tốn sức.'},
      khac:[
        {
          a:{t:'侧重做事轻松，不费力气。一般做状语。',vn:'Nhấn mạnh làm việc nhẹ nhàng, không tốn sức. Thường làm trạng ngữ.',vd:'她从小学习就好，高考时很轻易地考上了名牌大学，接着又读了研究生。',vdVn:'Cô ấy học giỏi từ nhỏ, thi đại học đỗ trường danh tiếng một cách dễ dàng, sau đó lại học tiếp cao học.'},
          b:{t:'除表示事情简单、不难办外，还可表示事情本身的内容不复杂。可单独做谓语。',vn:'Ngoài nghĩa sự việc đơn giản, không khó làm, còn có thể biểu thị bản thân nội dung sự việc không phức tạp. Có thể làm vị ngữ độc lập.',vd:'今天的考试特别容易，我半个小时就答完了。',vdVn:'Bài thi hôm nay đặc biệt dễ, tôi làm nửa tiếng là xong.'}
        },
        {
          a:{t:'没有这个意思。',vn:'Không có nghĩa này.'},
          b:{t:'还表示发生某种变化的可能性大。',vn:'Còn biểu thị khả năng xảy ra một thay đổi nào đó là lớn.',vd:'他最近心情不好，容易发脾气。',vdVn:'Dạo này tâm trạng anh ấy không tốt, dễ nổi cáu.'}
        },
        {
          a:{t:'还是副词，表示随随便便的意思。',vn:'Còn là phó từ, mang nghĩa tuỳ tiện, dễ dãi.',vd:'我爱书，无论走到哪里，我从不轻易放过书摊、书店。',vdVn:'Tôi mê sách, dù đi đến đâu cũng không bao giờ bỏ qua sạp sách, hiệu sách.'},
          b:{t:'没有这个用法。',vn:'Không có cách dùng này.'}
        }
      ],
      lamThu:[
        {s:'据说这位刘先生从不＿＿花钱请人吃饭。',dap:[true,false],mau:true,giai:'Phó từ “从不轻易 + V” = chẳng bao giờ dễ dãi …. 容易 không có cách dùng này.'},
        {s:'看完信后，＿＿不动感情的父亲眼圈都红了。',dap:[true,false],giai:'“轻易不 + V” = rất ít khi …: người cha ít khi xúc động. 容易 không đi với 不 theo nghĩa này.'},
        {s:'你这样做，不了解情况的人很＿＿误会。',dap:[false,true],giai:'Khả năng xảy ra (dễ hiểu lầm) → chỉ 容易.'},
        {s:'我们双方都没有＿＿放弃自己的意愿。',dap:[true,false],giai:'Không tuỳ tiện từ bỏ → 轻易放弃 (bảng 搭配: 轻易放弃).'}
      ]
    }
  },
  {
    pair:'赞成 — 同意',
    same:'Đều là động từ, đều biểu thị đồng ý với ý kiến, đề nghị của người khác: 我赞成／同意你的意见.',
    sameEx:{zh:'你的意见我完全赞成／同意。',vn:'Ý kiến của bạn tôi hoàn toàn đồng ý.'},
    items:[
      {
        word:'赞成',
        points:[
          'Nhấn mạnh ỦNG HỘ, cho rằng ý kiến, chủ trương là ĐÚNG — hay dùng khi thảo luận, biểu quyết: 赞成票, 举手赞成.',
          'Đối tượng thường là ý kiến, đề nghị, kế hoạch, chủ trương, hành động nói chung (赞成安全驾驶).',
          'Trang trọng hơn; ít dùng với nghĩa người có quyền CHO PHÉP ai làm một việc cụ thể.'
        ],
        ex:[
          {zh:'我把计划跟他们一说，结果，没一个人赞成。',vn:'Tôi vừa nói kế hoạch với họ, kết quả là không một ai tán thành.'},
          {zh:'大家都举手赞成这个建议。',vn:'Mọi người đều giơ tay tán thành đề nghị này.'}
        ]
      },
      {
        word:'同意',
        points:[
          'Nhấn mạnh CHO PHÉP, chấp nhận yêu cầu — thường là người có quyền (bố mẹ, thầy cô, cấp trên, chủ nhà) đồng ý cho ai làm gì.',
          'Dùng rất rộng trong khẩu ngữ: 妈妈同意了吗？ / 他不同意.',
          'Cũng dùng được với ý kiến: 同意你的看法.'
        ],
        ex:[
          {zh:'既然房东同意续租，你就再住半年吧。',vn:'Chủ nhà đã đồng ý cho thuê tiếp thì cậu ở thêm nửa năm đi.'},
          {zh:'没想到，主任不同意他去。',vn:'Không ngờ chủ nhiệm không đồng ý cho anh ấy đi.'}
        ]
      }
    ],
    quiz:[
      {sentence:'你自己一个人去花园里玩儿，妈妈＿＿了吗？',options:['赞成','同意'],answer:1,why:'Mẹ CHO PHÉP con làm một việc cụ thể → 同意 (bài tập 2 của sách).'},
      {sentence:'在会上，大部分人都投了＿＿票。',options:['赞成','同意'],answer:0,why:'Biểu quyết: phiếu tán thành = 赞成票 (cụm cố định).'},
      {sentence:'我＿＿你的看法，这个办法确实不错。',options:['赞成','同意'],answer:0,both:true,why:'Đồng tình với một quan điểm → cả hai đều được.'},
      {sentence:'老师已经＿＿我明天请假了。',options:['赞成','同意'],answer:1,why:'Thầy cho phép xin nghỉ → 同意.'}
    ]
  },
  {
    pair:'模糊 — 糊涂',
    same:'Đều là tính từ, đều có chữ 糊, đều liên quan đến “không rõ ràng” — nhưng đối tượng khác nhau, không thay cho nhau được.',
    sameEx:{zh:'照片拍得很模糊。／ 他越想越糊涂。',vn:'Ảnh chụp rất mờ. / Cậu ấy càng nghĩ càng rối.'},
    items:[
      {
        word:'模糊',
        points:[
          'Tả SỰ VẬT, hình ảnh, âm thanh, ký ức… không rõ: 视线 / 记忆 / 声音 / 字迹 + 模糊.',
          'Còn là động từ: làm mờ đi (泪水模糊了双眼), nói mập mờ (把事情模糊化).',
          'Không dùng để nói con người đầu óc lẫn lộn, làm việc hồ đồ.'
        ],
        ex:[
          {zh:'宣传册有些地方印得比较模糊。',vn:'Cuốn sách quảng cáo có mấy chỗ in khá mờ.'},
          {zh:'时间太久了，小时候的事我只有一些模糊的印象。',vn:'Lâu quá rồi, chuyện hồi nhỏ tôi chỉ còn chút ấn tượng mơ hồ.'}
        ]
      },
      {
        word:'糊涂',
        points:[
          'Tả CON NGƯỜI đầu óc không tỉnh táo, không hiểu rõ, làm việc hồ đồ: 你怎么这么糊涂？',
          'Hay dùng: 糊涂事 (việc dại dột), 装糊涂 (giả vờ không biết), 越听越糊涂.',
          'Không dùng cho ảnh, chữ, âm thanh bị mờ.'
        ],
        ex:[
          {zh:'挺好的工作为什么要辞职？你怎么这么糊涂啊？',vn:'Công việc tốt thế sao lại xin nghỉ? Sao cậu hồ đồ thế?'},
          {zh:'老师越讲，我越糊涂了。',vn:'Thầy càng giảng tôi càng rối.'}
        ]
      }
    ],
    quiz:[
      {sentence:'挺好的工作为什么要辞职？你怎么这么＿＿啊？',options:['模糊','糊涂'],answer:1,why:'Nói con người làm việc hồ đồ → 糊涂 (bài tập 2 của sách).'},
      {sentence:'这张照片拍得太＿＿了，看不清是谁。',options:['模糊','糊涂'],answer:0,why:'Hình ảnh không rõ → 模糊.'},
      {sentence:'不戴眼镜的话，黑板上的字我看得很＿＿。',options:['模糊','糊涂'],answer:0,why:'Chữ nhìn không rõ → 模糊.'},
      {sentence:'奶奶年纪大了，有时候有点儿＿＿，常常忘了关门。',options:['模糊','糊涂'],answer:1,why:'Đầu óc người già lẫn → 糊涂.'}
    ]
  }
];

// ══════════════════════════════════════════
// CẦU NỐI HÁN – VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'编辑',hv:'biên tập',vn:'biên tập; biên tập viên',note:'Trùng khít — tiếng Trung dùng cả cho NGƯỜI (biên tập viên).'},
    {zh:'处理',hv:'xử lý',vn:'xử lý, giải quyết',note:'Trùng khít. Riêng 处理商品 là hàng THANH LÝ.'},
    {zh:'赞成',hv:'tán thành',vn:'tán thành',note:'Trùng khít — trái nghĩa 反对 (phản đối).'},
    {zh:'请愿书',hv:'thỉnh nguyện thư',vn:'thư thỉnh nguyện, đơn kiến nghị',note:'“Thỉnh nguyện” = xin theo nguyện vọng, “thư” = văn bản.'},
    {zh:'恋爱',hv:'luyến ái',vn:'yêu đương',note:'Tiếng Việt “luyến ái” hơi văn chương; 谈恋爱 = yêu nhau, hẹn hò.'},
    {zh:'迫切',hv:'bách thiết',vn:'bức thiết, tha thiết',note:'迫 còn đọc “bức” (bức bách, cưỡng bức) → tiếng Việt nói “bức thiết”.'},
    {zh:'犹豫',hv:'do dự',vn:'do dự',note:'Trùng khít.'},
    {zh:'冷淡',hv:'lãnh đạm',vn:'lạnh nhạt',note:'Trùng khít — tiếng Việt cũng nói “thái độ lãnh đạm”.'},
    {zh:'报告',hv:'báo cáo',vn:'báo cáo',note:'Trùng khít.'},
    {zh:'模糊',hv:'mô hồ',vn:'mơ hồ, mờ',note:'Tiếng Việt “mơ hồ” chính là từ 模糊 đọc chệch.'},
    {zh:'狡猾',hv:'giảo hoạt',vn:'xảo quyệt',note:'Tiếng Việt cũng có “giảo hoạt” (xảo quyệt, gian ngoan).'},
    {zh:'谦虚',hv:'khiêm hư',vn:'khiêm tốn',note:'“Khiêm” như khiêm tốn, “hư” = rỗng (lòng trống để học hỏi).'},
    {zh:'实践',hv:'thực tiễn',vn:'thực tiễn; thực hành',note:'Trùng khít — 实践证明 = thực tiễn chứng minh.'},
    {zh:'出示',hv:'xuất thị',vn:'xuất trình',note:'“Xuất” = đưa ra, “thị” = cho xem (như chỉ thị) → đưa ra cho xem.'}
  ],
  idiom:[
    {zh:'无所谓',hv:'vô sở vị',vn:'sao cũng được, không sao cả',note:'“Vô” = không, “sở vị” = điều đáng nói → chẳng có gì đáng nói.'},
    {zh:'不过如此',hv:'bất quá như thử',vn:'cũng chỉ đến thế mà thôi',note:'“Bất quá” = chẳng qua, “như thử” = như vậy.'},
    {zh:'毫不犹豫',hv:'hào bất do dự',vn:'không chút do dự',note:'“Hào” = mảy may (hào li) → không mảy may do dự.'}
  ],
  trap:[
    {zh:'标志',hv:'tiêu chí',vn:'ký hiệu, biển báo',warn:'BẪY: tiếng Việt “tiêu chí” là tiêu chuẩn (标准). 标志 tiếng Trung là KÝ HIỆU, BIỂN BÁO, logo: 交通标志.'},
    {zh:'社区',hv:'xã khu',vn:'khu dân cư, cộng đồng',warn:'BẪY: “xã” ở đây không phải xã ở nông thôn. 社 = tổ chức, cộng đồng → 社区 là khu dân cư (ở thành phố).'},
    {zh:'报社',hv:'báo xã',vn:'toà soạn báo',warn:'社 = cơ quan, tổ chức (như 出版社, 旅行社), không phải “xã”. 报社 = toà soạn báo.'},
    {zh:'轻易',hv:'khinh dị',vn:'dễ dàng; tuỳ tiện',warn:'BẪY: “khinh” ở đây là NHẸ (khinh khí cầu), không phải khinh thường; “dị” = dễ (như 容易). Không liên quan “kỳ dị”.'},
    {zh:'八成',hv:'bát thành',vn:'chắc là, tám phần',warn:'Không phải “tám thành phố”. 成 = một phần mười → 八成 = 80% → phó từ “chắc là”.'},
    {zh:'了不起',hv:'liễu bất khởi',vn:'phi thường, giỏi',warn:'Âm Hán–Việt không gợi nghĩa. 了 + 不起 là bổ ngữ khả năng: “không ai sánh nổi” → phi thường.'},
    {zh:'看不起',hv:'khán bất khởi',vn:'khinh thường',warn:'Không phải “không xem nổi”. 看不起 = nhìn người thấp hơn mình → khinh thường; trái nghĩa 看得起.'},
    {zh:'身段',hv:'thân đoạn',vn:'dáng vẻ; cái “giá” bề trên',warn:'BẪY: không liên quan “đoạn” (khúc). 放低身段 = hạ mình, khiêm nhường.'},
    {zh:'门槛',hv:'môn hạm',vn:'ngưỡng cửa',warn:'Chữ 槛 hiếm; nghĩa bóng “tiêu chuẩn đầu vào”: 门槛很高. 登门槛效应 = hiệu ứng “bước chân qua ngưỡng cửa”.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 117–118) + bài tập 3 của sách (tr. 119)
// ══════════════════════════════════════════
var matchData = [
  {left:'缩短',right:'距离'},
  {left:'处理',right:'矛盾'},
  {left:'狡猾的',right:'狐狸'},
  {left:'了不起的',right:'发明'},
  {left:'迫切地',right:'希望'},
  {left:'轻易',right:'放弃'},
  {left:'图像',right:'模糊'},
  {left:'态度',right:'冷淡'},
  {left:'出示',right:'证件'},
  {left:'赞成',right:'意见'},
  {left:'编辑',right:'资料'},
  {left:'报告',right:'消息'},
  {left:'待人',right:'谦虚'},
  {left:'愿望',right:'迫切'},
  {left:'动作',right:'犹豫'},
  {left:'谈',right:'恋爱'},
  {left:'放低',right:'身段'},
  {left:'圆形',right:'标志'},
  {left:'社会',right:'实践'},
  {left:'一份',right:'请愿书'},
  {left:'值',right:'夜班'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'这家公司的',blank:'门槛',post:'很高，没有硕士学位很难进去。',hint:'(ngưỡng, tiêu chuẩn đầu vào)',ans:'门槛'},
  {pre:'我姐姐大学毕业后，在一家',blank:'报社',post:'当记者。',hint:'(toà soạn báo)',ans:'报社'},
  {pre:'她是一位杂志',blank:'编辑',post:'，每天都要看很多文章。',hint:'(biên tập viên)',ans:'编辑'},
  {pre:'',blank:'嗯',post:'，没问题，我这就给她送去。',hint:'(ừ — đồng ý, đọc ǹg)',ans:'嗯'},
  {pre:'他为人好强，',blank:'轻易',post:'不求人。',hint:'(ít khi — phó từ)',ans:'轻易'},
  {pre:'不管遇到什么困难，你都不要',blank:'轻易',post:'放弃。',hint:'(dễ dàng, tuỳ tiện)',ans:'轻易'},
  {pre:'你这样做，不了解情况的人很',blank:'容易',post:'误会。',hint:'(dễ — khả năng xảy ra)',ans:'容易'},
  {pre:'老师把这件事',blank:'处理',post:'得很好，两个同学又成了好朋友。',hint:'(xử lý, giải quyết)',ans:'处理'},
  {pre:'周末我常常去',blank:'社区',post:'服务中心当志愿者。',hint:'(khu dân cư, cộng đồng)',ans:'社区'},
  {pre:'大家',blank:'劝',post:'他别抽烟了，可是他就是不听。',hint:'(khuyên)',ans:'劝'},
  {pre:'中秋节的月亮又大又',blank:'圆',post:'。',hint:'(tròn)',ans:'圆'},
  {pre:'开车的时候，一定要注意路上的交通',blank:'标志',post:'。',hint:'(biển báo)',ans:'标志'},
  {pre:'进考场的时候，每个考生都要',blank:'出示',post:'准考证。',hint:'(xuất trình)',ans:'出示'},
  {pre:'我把计划跟他们一说，结果，没一个人',blank:'赞成',post:'。',hint:'(tán thành)',ans:'赞成'},
  {pre:'三百多位居民在这份',blank:'请愿书',post:'上签了字。',hint:'(bản kiến nghị)',ans:'请愿书'},
  {pre:'他们俩谈了三年',blank:'恋爱',post:'，今年终于结婚了。',hint:'(yêu đương)',ans:'恋爱'},
  {pre:'这个山区',blank:'迫切',post:'需要更多的老师。',hint:'(cấp bách, rất cần)',ans:'迫切'},
  {pre:'听说朋友需要帮助，他毫不',blank:'犹豫',post:'地答应了。',hint:'(do dự)',ans:'犹豫'},
  {pre:'最近天气太冷，商店的生意很',blank:'冷淡',post:'。',hint:'(ế ẩm, lạnh nhạt)',ans:'冷淡'},
  {pre:'去哪儿吃饭我',blank:'无所谓',post:'，你决定吧。',hint:'(sao cũng được)',ans:'无所谓'},
  {pre:'今天晚上是我',blank:'值班',post:'，我不能跟你们去看电影了。',hint:'(trực)',ans:'值班'},
  {pre:'这份调查',blank:'报告',post:'明天必须交给老师。',hint:'(báo cáo)',ans:'报告'},
  {pre:'他到现在还没来，',blank:'八成',post:'是忘了。',hint:'(chắc là)',ans:'八成'},
  {pre:'时间太久了，小时候的事我只有一些',blank:'模糊',post:'的印象。',hint:'(mơ hồ)',ans:'模糊'},
  {pre:'那个商人很',blank:'狡猾',post:'，我们差点儿上了他的当。',hint:'(xảo quyệt)',ans:'狡猾'},
  {pre:'四大发明是中国古代',blank:'了不起',post:'的发明。',hint:'(vĩ đại, phi thường)',ans:'了不起'},
  {pre:'这位经理愿意放下',blank:'身段',post:'，和员工一起在食堂吃饭。',hint:'(dáng bề trên)',ans:'身段'},
  {pre:'高铁开通以后，从河内到海防的时间',blank:'缩短',post:'了一半。',hint:'(rút ngắn)',ans:'缩短'},
  {pre:'不要',blank:'看不起',post:'农村来的同学。',hint:'(coi thường)',ans:'看不起'},
  {pre:'他学习很好，但是待人非常',blank:'谦虚',post:'。',hint:'(khiêm tốn)',ans:'谦虚'},
  {pre:'暑假里，学校组织我们去工厂参加社会',blank:'实践',post:'。',hint:'(thực tế, thực tiễn)',ans:'实践'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {words:['嗯','，','没问题','，','我这就','给她送去','。'],ans:'嗯，没问题，我这就给她送去。',audio:'嗯，没问题，我这就给她送去。'},
  {words:['嗯','？','人','都','去哪儿了','？'],ans:'嗯？人都去哪儿了？',audio:'嗯？人都去哪儿了？'},
  {words:['任何胜利','都不是','轻易','得到的','。'],ans:'任何胜利都不是轻易得到的。',audio:'任何胜利都不是轻易得到的。'},
  {words:['他','为人好强','，','轻易','不求人','。'],ans:'他为人好强，轻易不求人。',audio:'他为人好强，轻易不求人。'},
  {words:['我们','不要','轻易','相信','陌生人的话','。'],ans:'我们不要轻易相信陌生人的话。',audio:'我们不要轻易相信陌生人的话。'},
  {words:['研究人员','把','同样的事情','分成','两个步骤','。'],ans:'研究人员把同样的事情分成两个步骤。',audio:'研究人员把同样的事情分成两个步骤。'},
  {words:['这个','小小的行为','对','接下来的决定','产生了','重要影响','。'],ans:'这个小小的行为对接下来的决定产生了重要影响。',audio:'这个小小的行为对接下来的决定产生了重要影响。'},
  {words:['直接说','八成儿','会','被','拒绝','。'],ans:'直接说八成儿会被拒绝。',audio:'直接说八成儿会被拒绝。'},
  {words:['你','可以','先','向他','提出','一件','比较容易的事','。'],ans:'你可以先向他提出一件比较容易的事。',audio:'你可以先向他提出一件比较容易的事。'},
  {words:['别人','并不会','看不起你','，','反而','会觉得你','很谦虚','。'],ans:'别人并不会看不起你，反而会觉得你很谦虚。',audio:'别人并不会看不起你，反而会觉得你很谦虚。'},
  {words:['只要','能学到知识','，','辛苦一点儿','也','无所谓','。'],ans:'只要能学到知识，辛苦一点儿也无所谓。',audio:'只要能学到知识，辛苦一点儿也无所谓。'},
  {words:['微笑','是','缩短','人与人之间距离的','好方法','。'],ans:'微笑是缩短人与人之间距离的好方法。',audio:'微笑是缩短人与人之间距离的好方法。'},
  {words:['请','填写这张表格','并','出示','您的护照','。'],ans:'请填写这张表格并出示您的护照。',audio:'请填写这张表格并出示您的护照。'},
  {words:['老师','希望','我','能','谦虚一点儿','。'],ans:'老师希望我能谦虚一点儿。',audio:'老师希望我能谦虚一点儿。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {
    wrong:'今天的考试特别____，我半个小时就答完了。',
    opts:['轻易','容易','简直','随便'],
    ans:1,
    exp:'Làm vị ngữ độc lập, nói nội dung bài thi không khó → 容易 (词语辨析 của bài). 轻易 thường làm trạng ngữ, không đứng một mình làm vị ngữ; 简直 là phó từ “quả thực”; 随便 là tuỳ tiện.'
  },
  {
    wrong:'他为人好强，____不求人。',
    opts:['轻易','容易','简单','方便'],
    ans:0,
    exp:'Phó từ: “轻易不 + V” = rất ít khi … (ví dụ của sách). 容易 không có cách dùng phó từ này.'
  },
  {
    wrong:'据说这位刘先生从不____花钱请人吃饭。',
    opts:['容易','方便','简单','轻易'],
    ans:3,
    exp:'从不轻易 + V = chẳng bao giờ tuỳ tiện … (câu 做一做 của sách). 容易 không đi sau 从不 theo nghĩa này.'
  },
  {
    wrong:'你自己一个人去花园里玩儿，妈妈____了吗？',
    opts:['赞成','赞美','同意','称赞'],
    ans:2,
    exp:'Mẹ CHO PHÉP con làm một việc cụ thể → 同意 (bài tập 2 của sách). 赞成 là ủng hộ ý kiến, chủ trương; 赞美 / 称赞 là khen ngợi.'
  },
  {
    wrong:'没想到，主任的态度很____，不同意他去。',
    opts:['清淡','冷淡','冷静','平淡'],
    ans:1,
    exp:'态度冷淡 = thái độ lạnh nhạt (bảng 搭配, bài tập 2 của sách). 清淡 tả món ăn nhạt; 冷静 là bình tĩnh; 平淡 là bình thường, nhạt nhẽo (cuộc sống).'
  },
  {
    wrong:'当经理有什么____的？',
    opts:['了不起','不得了','来不及','对不起'],
    ans:0,
    exp:'有什么了不起的？ = có gì ghê gớm đâu (bài tập 2 của sách). 不得了 là “nghiêm trọng, hết sức”, không dùng trong khung này.'
  },
  {
    wrong:'挺好的工作为什么要辞职？你怎么这么____啊？',
    opts:['模糊','清楚','明白','糊涂'],
    ans:3,
    exp:'Trách người làm việc hồ đồ → 糊涂 (bài tập 2 của sách). 模糊 chỉ tả sự vật, hình ảnh không rõ.'
  },
  {
    wrong:'宣传册有些地方印得比较____，得重新印。',
    opts:['糊涂','清楚','模糊','漂亮'],
    ans:2,
    exp:'In không rõ → 印得模糊 (bài nghe 3 sách bài tập). 糊涂 chỉ nói con người.'
  },
  {
    wrong:'当你放低身段时，会____与人的距离。',
    opts:['延长','缩短','减少','降低'],
    ans:1,
    exp:'缩短距离 = rút ngắn khoảng cách (bảng 搭配). 延长 là kéo dài — nghĩa ngược; 减少 đi với số lượng; 降低 đi với mức độ, giá cả.'
  },
  {
    wrong:'别人并不会____你，反而会觉得你为人谦虚。',
    opts:['看不起','看不见','看不清','对不起'],
    ans:0,
    exp:'看不起 = coi thường; vế sau 反而……谦虚 là ý ngược lại. 看不见 / 看不清 là không nhìn thấy / nhìn không rõ.'
  },
  {
    wrong:'你可能会说，这些小动作会让人觉得你很____。',
    opts:['聪明','善良','谦虚','狡猾'],
    ans:3,
    exp:'Vế sau “但是不得不承认” cho thấy vế trước là nhận xét XẤU → 狡猾 (xảo quyệt). 聪明, 善良, 谦虚 đều là lời khen.'
  },
  {
    wrong:'如果一开始就____地提出要跟她约会，女孩可能会犹豫。',
    opts:['亲切','密切','迫切','确切'],
    ans:2,
    exp:'迫切地 + V = nôn nóng, gấp gáp làm gì. 亲切 là thân mật; 密切 là mật thiết (quan hệ); 确切 là chính xác.'
  },
  {
    wrong:'别____了，既然房东同意续租，你就再住半年吧。',
    opts:['冷淡','犹豫','谦虚','迫切'],
    ans:1,
    exp:'别犹豫了 = đừng do dự nữa (bài nghe 4 sách bài tập): người nghe đang phân vân có thuê tiếp hay không.'
  },
  {
    wrong:'先向大家____一份赞成安全驾驶的请愿书。',
    opts:['出示','出现','表示','指示'],
    ans:0,
    exp:'出示 + văn bản, giấy tờ = đưa ra cho xem. 出现 là xuất hiện (không có tân ngữ này); 表示 là bày tỏ; 指示 là chỉ thị.'
  },
  {
    wrong:'他们派人到两个____，劝人们在屋前立一块圆形标志。',
    opts:['社会','报社','社交','社区'],
    ans:3,
    exp:'社区 = khu dân cư (có nhà, có người ở). 社会 là xã hội nói chung; 报社 là toà soạn; 社交 là giao tiếp xã hội.'
  },
  {
    wrong:'他到现在还没来，____是忘了。',
    opts:['成功','完成','八成','成为'],
    ans:2,
    exp:'八成是 + phán đoán = chắc là …. Các phương án còn lại đều là động từ, không đặt trước 是 để phỏng đoán.'
  },
  {
    wrong:'你想让同事帮你____或写报告什么的，直接说八成儿会被拒绝。',
    opts:['上班','值班','加班','下班'],
    ans:1,
    exp:'帮人值班 = trực thay người khác (câu bài khoá). Không nói 帮你上班 / 下班; 加班 là làm thêm giờ của chính mình.'
  },
  {
    wrong:'____证明，只要肯努力，谁都能学好汉语。',
    opts:['实践','实现','实际','实在'],
    ans:0,
    exp:'实践证明 = thực tiễn chứng minh (câu bài khoá). 实现 là thực hiện (ước mơ); 实际 là thực tế (tính từ); 实在 là thật sự.'
  },
  {
    wrong:'一个朋友在____当编辑。',
    opts:['报告','报名','报纸','报社'],
    ans:3,
    exp:'Nơi làm việc → 报社 (toà soạn báo). 报纸 là tờ báo, không phải cơ quan; 报告 là báo cáo; 报名 là đăng ký.'
  },
  {
    wrong:'每次比赛之前，我都要仔细记一些比赛线路周围的____。',
    opts:['标准','目标','标志','标题'],
    ans:2,
    exp:'Nhớ các biển báo, ký hiệu quanh tuyến đường thi đấu → 标志 (bài tập 1 của sách). 标准 là tiêu chuẩn; 目标 là mục tiêu; 标题 là đầu đề.'
  },
  {
    wrong:'只要能学到知识，辛苦一点儿也____。',
    opts:['不得了','无所谓','来不及','了不起'],
    ans:1,
    exp:'……也无所谓 = … cũng không sao. 不得了 là “nguy to”; 来不及 là không kịp; 了不起 là phi thường.'
  }
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Đến giờ cậu ấy vẫn chưa đến, chắc là quên rồi.',zh:'他到现在还没来，八成是忘了。',py:'Tā dào xiànzài hái méi lái, bāchéng shì wàng le.'},
  {vi:'Dù gặp khó khăn gì cũng đừng dễ dàng bỏ cuộc.',zh:'不管遇到什么困难，都不要轻易放弃。',py:'Bùguǎn yùdào shénme kùnnan, dōu búyào qīngyì fàngqì.'},
  {vi:'Ừ, không vấn đề gì, tôi mang đến cho cô ấy ngay.',zh:'嗯，没问题，我这就给她送去。',py:'Ǹg, méi wèntí, wǒ zhè jiù gěi tā sòngqu.'},
  {vi:'Bài thi hôm nay đặc biệt dễ.',zh:'今天的考试特别容易。',py:'Jīntiān de kǎoshì tèbié róngyì.'},
  {vi:'Xin quý khách xuất trình hộ chiếu.',zh:'请出示您的护照。',py:'Qǐng chūshì nín de hùzhào.'},
  {vi:'Uống trà hay uống cà phê, tôi đều được cả.',zh:'喝茶还是喝咖啡，我都无所谓。',py:'Hē chá háishi hē kāfēi, wǒ dōu wúsuǒwèi.'},
  {vi:'Tối nay tôi phải trực, không đi được.',zh:'今天晚上我要值班，去不了。',py:'Jīntiān wǎnshang wǒ yào zhíbān, qù bu liǎo.'},
  {vi:'Cậu ấy học rất giỏi nhưng rất khiêm tốn.',zh:'他学习很好，但是很谦虚。',py:'Tā xuéxí hěn hǎo, dànshì hěn qiānxū.'}
];
var translateDataRev = [
  {
    vi:'Một người bạn làm biên tập viên ở toà soạn báo.',
    zh:'一个朋友在报社当编辑。',
    py:'Yí ge péngyou zài bàoshè dāng biānjí.'
  },
  {
    vi:'Sếp thấy tò mò, thế là việc xin nghỉ được giải quyết dễ dàng như vậy.',
    zh:'领导有了兴趣，假，就这样轻易地请好了。',
    py:'Lǐngdǎo yǒule xìngqù, jià, jiù zhèyàng qīngyì de qǐnghǎo le.'
  },
  {
    vi:'Phải nói rằng, người bạn này rất biết tận dụng “hiệu ứng bước chân qua ngưỡng cửa” để giải quyết vấn đề.',
    zh:'不得不说，这位朋友很会利用“登门槛效应”来处理问题。',
    py:'Bùdébù shuō, zhè wèi péngyou hěn huì lìyòng “dēng ménkǎn xiàoyìng” lái chǔlǐ wèntí.'
  },
  {
    vi:'Ở khu thứ nhất, nhân viên nghiên cứu trực tiếp đưa ra yêu cầu, kết quả rất nhiều người từ chối.',
    zh:'在第一个社区，研究人员直接向人们提出要求，结果很多人表示拒绝。',
    py:'Zài dì-yī ge shèqū, yánjiū rényuán zhíjiē xiàng rénmen tíchū yāoqiú, jiéguǒ hěn duō rén biǎoshì jùjué.'
  },
  {
    vi:'Việc ký tên ở bước thứ nhất rất dễ, hầu như ai cũng làm theo.',
    zh:'第一个步骤的签字是很容易的，几乎所有人都照做了。',
    py:'Dì-yī ge bùzhòu de qiānzì shì hěn róngyì de, jīhū suǒyǒu rén dōu zhàozuò le.'
  },
  {
    vi:'Nếu ngay từ đầu đã nôn nóng đề nghị hẹn hò, cô gái có thể sẽ do dự, thậm chí tỏ ra rất lạnh nhạt.',
    zh:'如果一开始就迫切地提出要跟她约会，女孩可能会犹豫，甚至表现得很冷淡。',
    py:'Rúguǒ yì kāishǐ jiù pòqiè de tíchū yào gēn tā yuēhuì, nǚhái kěnéng huì yóuyù, shènzhì biǎoxiàn de hěn lěngdàn.'
  },
  {
    vi:'Khi bạn hạ mình xuống, bạn sẽ rút ngắn khoảng cách với người khác.',
    zh:'当你放低身段时，会缩短与人的距离。',
    py:'Dāng nǐ fàngdī shēnduàn shí, huì suōduǎn yǔ rén de jùlí.'
  },
  {
    vi:'Thực tiễn chứng minh, người thuộc kiểu thứ hai bao giờ cũng nhận được nhiều hơn người thuộc kiểu thứ nhất.',
    zh:'实践证明，第二种人得到的总是比第一种人更多。',
    py:'Shíjiàn zhèngmíng, dì-èr zhǒng rén dédào de zǒngshì bǐ dì-yī zhǒng rén gèng duō.'
  }
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — 命题写作 “我该不该接受/拒绝呢？” (tr. 121)
// ══════════════════════════════════════════
var writingData = {
  words:['犹豫','轻易','赞成','处理','无所谓'],
  prompt:'Dùng đủ 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể một lần em được bạn bè nhờ giúp: người ấy nhờ việc gì, em đã phân vân ra sao, em quyết định nhận lời hay từ chối (hoặc giúp theo cách khác), và em thấy mình xử lý thế nào.',
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，题目是“我该不该接受／拒绝呢？”。',
  outline:[
    'Câu mở: ai nhờ em việc gì (một việc cụ thể, gần gũi: làm hộ bài tập, trực nhật thay, cho mượn tiền…).',
    'Sự phân vân: vì sao em khó quyết (dùng 犹豫; có thể dùng khung “……吧，……；……吧，……”).',
    'Nguyên tắc và quyết định của em: việc nhỏ thì sao cũng được, việc sai thì không dễ dàng nhận lời (dùng 无所谓, 轻易).',
    'Kết: phản ứng của người kia và em tự đánh giá cách xử lý (dùng 赞成, 处理).'
  ],
  model:{
    zh:'上周，同学小王请我替他写作业。我犹豫了很久：拒绝吧，怕伤了他的心；答应吧，又觉得不对。帮他买个东西什么的都无所谓，可是作业不能轻易答应。最后我对他说，作业我不能替你写，但不会的题我可以给你讲。他想了想，也赞成我的办法。这件事我处理得不错。',
    py:'Shàng zhōu, tóngxué Xiǎo Wáng qǐng wǒ tì tā xiě zuòyè. Wǒ yóuyùle hěn jiǔ: jùjué ba, pà shāngle tā de xīn; dāying ba, yòu juéde bú duì. Bāng tā mǎi ge dōngxi shénme de dōu wúsuǒwèi, kěshì zuòyè bù néng qīngyì dāying. Zuìhòu wǒ duì tā shuō, zuòyè wǒ bù néng tì nǐ xiě, dàn bú huì de tí wǒ kěyǐ gěi nǐ jiǎng. Tā xiǎngle xiǎng, yě zànchéng wǒ de bànfǎ. Zhè jiàn shì wǒ chǔlǐ de búcuò.',
    vn:'Tuần trước, bạn Tiểu Vương nhờ tôi làm bài tập hộ. Tôi do dự rất lâu: từ chối thì sợ làm cậu ấy buồn; nhận lời thì lại thấy không đúng. Giúp cậu ấy mua đồ hay việc gì đó thì sao cũng được, nhưng bài tập thì không thể dễ dàng nhận lời. Cuối cùng tôi nói với cậu ấy: bài tập tớ không làm hộ cậu được, nhưng câu nào cậu không biết thì tớ có thể giảng cho. Cậu ấy nghĩ một lúc rồi cũng tán thành cách của tôi. Việc này tôi xử lý khá ổn.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có kể MỘT lần được nhờ cụ thể, có quyết định rõ ràng (nhận / từ chối / giúp cách khác) không?',
    '轻易 có đứng ngay trước động từ (轻易答应 / 不轻易 + V) chứ không làm vị ngữ cuối câu; 无所谓 có đứng cuối vế không?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],
  tuDung:[
    {
      tu:'犹豫',
      loai:'tính từ',
      cach:'犹豫了很久 / 半天 · 别犹豫了 · 毫不犹豫地 + V · 对……犹豫不决',
      sai:[
        {re:'犹豫(一个|这个|那个)?(问题|事情|决定)',sua:'对……犹豫不决 / 在……上犹豫了很久',giai:'犹豫 không mang tân ngữ trực tiếp. “Do dự chuyện này” = 对这件事犹豫不决.'},
        {re:'很犹豫地',sua:'犹豫了很久 / 犹犹豫豫地',giai:'Muốn tả “ngập ngừng làm gì” dùng 犹犹豫豫地 + V hoặc nói 犹豫了很久才…….',nhe:true}
      ]
    },
    {
      tu:'轻易',
      loai:'tính từ / phó từ',
      cach:'轻易 (地) + V · 轻易不 / 不轻易 + V · 不能轻易答应',
      sai:[
        {re:'(很|非常|特别|太)轻易[。，！]',sua:'很容易',giai:'Làm vị ngữ độc lập ở cuối câu (“việc này rất dễ”) phải dùng 容易; 轻易 thường đứng ngay trước động từ.'},
        {re:'容易不(求|答应|放弃|相信|借)',sua:'轻易不 + V',giai:'“Ít khi …, không dễ dàng …” dùng 轻易不, không dùng 容易不.',nhe:true}
      ]
    },
    {
      tu:'赞成',
      loai:'động từ',
      cach:'赞成 + ý kiến / cách làm / kế hoạch · 表示赞成 · 没人赞成',
      sai:[
        {re:'(妈妈|爸爸|父母|老师)(不)?赞成(我|你|他|她)(去|出去|玩)',sua:'同意 + người + V',giai:'Người có quyền CHO PHÉP ai làm việc cụ thể → dùng 同意 (词语辨析 tự thêm của bài).'},
        {re:'对(他|她|我|你)赞成',sua:'赞成 + 他的意见',giai:'赞成 mang tân ngữ trực tiếp: 赞成他的办法, không nói 对他赞成.',nhe:true}
      ]
    },
    {
      tu:'处理',
      loai:'động từ',
      cach:'处理 + 问题 / 矛盾 / 关系 / 事情 · 处理得很好 / 不错 · 把……处理好',
      sai:[
        {re:'处理困难',sua:'克服困难 / 解决困难',giai:'困难 đi với 克服 / 解决; 处理 đi với 问题, 矛盾, 关系, 事情 (bảng 搭配).'},
        {re:'把[^。，]*处理[。，]',sua:'把……处理好 / 处理完',giai:'Câu 把 cần thành phần sau động từ: 把事情处理好.',nhe:true}
      ]
    },
    {
      tu:'无所谓',
      loai:'động từ',
      cach:'A 还是 B + 都无所谓 · ……也无所谓 · 我无所谓 · 无所谓的态度',
      sai:[
        {re:'无所谓(我|你|他|她)',sua:'……，我无所谓 / ……都无所谓',giai:'无所谓 thường đứng CUỐI câu hoặc cuối vế (……都无所谓), không đặt trước chủ ngữ.',nhe:true},
        {re:'很无所谓',sua:'都无所谓 / 一副无所谓的态度',giai:'无所谓 đã mang nghĩa trọn vẹn, không thêm 很 phía trước.',nhe:true}
      ]
    }
  ],
  cauTruc:[
    {ten:'……吧，……；……吧，……',nhan:'吧',vd:'拒绝吧，怕伤了他的心；答应吧，又觉得不对。',khi:'Diễn tả sự phân vân giữa hai lựa chọn — phần “犹豫” của đoạn văn.'},
    {ten:'先……，再……',nhan:'先',vd:'他先请我帮个小忙，再提出大的要求。',khi:'Kể các bước người kia nhờ vả — đúng tinh thần “登门槛效应”.'},
    {ten:'轻易不 / 不轻易 + V',nhan:'轻易',vd:'这种事我不轻易答应别人。',khi:'Nêu nguyên tắc của bản thân (điểm ngữ pháp 2).'},
    {ten:'嗯，……',nhan:'嗯',vd:'嗯，这个忙我可以帮。',khi:'Chèn lời thoại nhận lời vào đoạn kể chuyện (điểm ngữ pháp 1).'},
    {ten:'A 还是 B，都无所谓',nhan:'无所谓',vd:'帮他买东西还是借他笔记，都无所谓。',khi:'Nói những việc nhỏ em sẵn lòng giúp.'},
    {ten:'既……，又……',nhan:'既',vd:'这样做既帮了朋友，又没有做错事。',khi:'Câu KẾT: đánh giá cách xử lý của em.'},
    {ten:'我……，是因为……',nhan:'因为',vd:'我拒绝他，是因为我想真正帮助他。',khi:'Giải thích lý do từ chối cho thuyết phục.'}
  ],
  sapXep:[
    {manh:['请我','同学小王','替他写作业'],dap:'同学小王请我替他写作业。',vn:'Bạn Tiểu Vương nhờ tôi làm bài tập hộ.',giai:'Người nhờ + 请 + người được nhờ + 替 + người + V.'},
    {manh:['很久','我','犹豫了'],dap:'我犹豫了很久。',vn:'Tôi do dự rất lâu.',giai:'Chủ ngữ + 犹豫了 + bổ ngữ thời lượng.'},
    {manh:['不能','作业','轻易答应'],dap:'作业不能轻易答应。',vn:'Bài tập thì không thể dễ dàng nhận lời.',giai:'Chủ đề (作业) đứng đầu; 不能 + 轻易 + V.'},
    {manh:['都无所谓','帮他','买个东西什么的'],dap:'帮他买个东西什么的都无所谓。',vn:'Giúp cậu ấy mua đồ hay việc gì đó thì sao cũng được.',giai:'Cụm việc làm chủ ngữ, 都无所谓 đứng cuối.'},
    {manh:['赞成','他','我的办法','也'],dap:'他也赞成我的办法。',vn:'Cậu ấy cũng tán thành cách của tôi.',giai:'Phó từ 也 đứng trước động từ 赞成; tân ngữ 我的办法 sau cùng.'},
    {manh:['处理得','这件事','不错','我'],dap:'这件事我处理得不错。',chap:['我这件事处理得不错。'],vn:'Việc này tôi xử lý khá ổn.',giai:'Chủ đề (这件事) + chủ ngữ + 处理得 + bổ ngữ trạng thái 不错.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 话题讨论 “交往之道——接受与拒绝” (tr. 121)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Ba câu đầu là <b>话题讨论</b> của sách (tr. 121: 交往之道——接受与拒绝), câu 4 mở rộng. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố dùng từ mới: 犹豫 · 轻易 · 处理 · 赞成 · 无所谓 · 谦虚 · 嗯.',
  questions:[
    {
      q_zh:'你觉得帮助别人对你会有影响吗？',
      q_vn:'Em có nghĩ việc giúp người khác sẽ ảnh hưởng đến em không?',
      hint:'Trả lời có / không, nêu một ảnh hưởng tốt và một ảnh hưởng không tốt (dùng 一方面……另一方面……)',
      sample:'我觉得会有影响。一方面，帮助别人让我很开心，也交到了很多朋友；另一方面，如果什么请求都轻易答应，自己的时间就不够用了。',
      sample_vn:'Tôi nghĩ là có ảnh hưởng. Một mặt, giúp người khác làm tôi rất vui, cũng kết được nhiều bạn; mặt khác, nếu yêu cầu gì cũng dễ dàng nhận lời thì thời gian của mình sẽ không đủ dùng.',
      note:'一方面……另一方面…… (HSK 4) giúp trả lời hai mặt; 轻易答应 dùng từ mới của bài.'
    },
    {
      q_zh:'介绍你拒绝别人的一次经历，那是什么事？你觉得自己的处理怎么样？',
      q_vn:'Hãy kể một lần em từ chối người khác. Đó là chuyện gì? Em thấy cách mình xử lý thế nào?',
      hint:'Kể MỘT lần cụ thể: ai nhờ — em từ chối thế nào — kết quả (dùng 犹豫, 处理)',
      sample:'有一次，同学想借我的作业抄。我犹豫了一下，还是拒绝了，但是我说可以给他讲题。他开始有点儿不高兴，后来也理解了。我觉得我处理得还可以。',
      sample_vn:'Có lần một bạn muốn mượn bài tập của tôi để chép. Tôi do dự một chút, rồi vẫn từ chối, nhưng tôi nói có thể giảng bài cho bạn ấy. Lúc đầu bạn ấy hơi không vui, sau cũng hiểu. Tôi thấy mình xử lý cũng tạm ổn.',
      note:'Đề có hai câu hỏi — nhớ trả lời cả phần “你觉得自己的处理怎么样” ở cuối.'
    },
    {
      q_zh:'在与人交往中，你处理“接受与拒绝”这类事情的原则是什么？',
      q_vn:'Trong giao tiếp với mọi người, nguyên tắc của em khi xử lý chuyện “nhận lời và từ chối” là gì?',
      hint:'Nêu 1–2 nguyên tắc rõ ràng, dùng 只要……就…… và 轻易不……',
      sample:'我的原则很简单：只要是合理的请求，我能帮就帮；不合理的事，我轻易不答应。拒绝的时候，我会说清楚原因，不让对方觉得我冷淡。',
      sample_vn:'Nguyên tắc của tôi rất đơn giản: chỉ cần là yêu cầu hợp lý, giúp được thì tôi giúp; việc không hợp lý thì tôi không dễ dàng nhận lời. Khi từ chối, tôi sẽ nói rõ lý do để đối phương không thấy tôi lạnh nhạt.',
      note:'Ôn điểm ngữ pháp 2: 轻易不 + V = không dễ dàng …; 只要……就…… (HSK 4).'
    },
    {
      q_zh:'你在生活中用过或者遇到过“登门槛效应”吗？说说那次的经历。',
      q_vn:'Trong cuộc sống em đã từng dùng hoặc gặp “hiệu ứng bước chân qua ngưỡng cửa” chưa? Kể lại lần đó.',
      hint:'Kể: yêu cầu nhỏ trước → yêu cầu lớn sau (dùng 先……再……, 嗯)',
      sample:'有过。我想让妈妈给我买新手机，就先问她：“能不能帮我看看这个手机怎么样？”妈妈说：“嗯，还不错。”我再说想买，她就同意了。',
      sample_vn:'Có chứ. Tôi muốn mẹ mua điện thoại mới cho mình, nên trước tiên hỏi mẹ: “Mẹ xem giúp con cái điện thoại này thế nào được không?” Mẹ nói: “Ừ, cũng được đấy.” Sau đó tôi mới nói muốn mua, mẹ liền đồng ý.',
      note:'Chú ý: mẹ CHO PHÉP → dùng 同意 chứ không phải 赞成 (xem 赞成 — 同意).'
    }
  ]
};

// ══════════════════════════════════════════
// NGHE THEO ĐỀ — 练习册 bài 31, câu 1–8
// ══════════════════════════════════════════
var listenExamData = {
  intro:'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source:'Nguyên văn: 《HSK标准教程5·练习册》第31课 听力',
  items:[
    {
      n:1,
      lines:[{sp:'女',zh:'刘先生说周三来换饮水机，问你想要哪个牌子的？'},{sp:'男',zh:'没关系，好用就成。'}],
      q:'男的对这件事的态度怎么样？',
      qvn:'Người đàn ông có thái độ thế nào với việc này?',
      opts:['很着急','无所谓','很满意','不同意'],
      ans:1,
      why:'没关系，好用就成 = không sao, dùng tốt là được → hãng nào cũng được, tức 无所谓.',
      words:[]
    },
    {
      n:2,
      lines:[{sp:'男',zh:'中午碰见林教授了，他说找你有事。'},{sp:'女',zh:'本来说好了，上午给他送实验报告，结果他临时外出，就没送成。'}],
      q:'女的为什么没送成报告？',
      qvn:'Vì sao người phụ nữ không đưa được bản báo cáo?',
      opts:['林教授临时外出了','报告还没写完','她忘了送','林教授不需要了'],
      ans:0,
      why:'结果他临时外出，就没送成 = giáo sư đột xuất ra ngoài nên không đưa được.',
      words:['报告']
    },
    {
      n:3,
      lines:[{sp:'男',zh:'小李，宣传册是在哪儿印的？有些地方印得比较模糊。'},{sp:'女',zh:'那我马上跟对方联系一下，让他们重新印。'}],
      q:'女的打算让对方怎么做？',
      qvn:'Người phụ nữ định bảo bên kia làm gì?',
      opts:['退钱','换一种颜色','重新印','多印一些'],
      ans:2,
      why:'让他们重新印 = bảo họ in lại, vì có chỗ in khá mờ (印得比较模糊).',
      words:['模糊']
    },
    {
      n:4,
      lines:[{sp:'女',zh:'别犹豫了，既然房东同意续租，你又没别的合适的，就再住半年吧。'},{sp:'男',zh:'也是啊，房租涨得还能接受，也省得再搬了。'}],
      q:'在租房问题上，男的是怎么想的？',
      qvn:'Về chuyện thuê nhà, người đàn ông nghĩ thế nào?',
      opts:['想换个房子','愿意继续租','觉得房租太贵','房东不同意续租'],
      ans:1,
      why:'也是啊……也省得再搬了 = cũng phải, đỡ phải chuyển nữa → đồng ý thuê tiếp. Tiền thuê tăng nhưng 还能接受 (vẫn chấp nhận được).',
      words:['犹豫']
    },
    {
      n:5,
      lines:[{sp:'男',zh:'昨晚你电话一直占线，你在给谁打电话呢？'},{sp:'女',zh:'我朋友小梅，两口子吵着要离，我在电话里一直在劝她要冷静。'}],
      q:'小梅怎么了？',
      qvn:'Tiểu Mai làm sao?',
      opts:['生病了','失恋了','找不到工作','和丈夫吵着要离婚'],
      ans:3,
      why:'两口子吵着要离 = hai vợ chồng cãi nhau đòi ly hôn; 离 ở đây là 离婚.',
      words:['劝']
    },
    {
      n:6,
      lines:[{sp:'男',zh:'你做的方案会上通过了吗？'},{sp:'女',zh:'我把计划跟他们一说，结果，没一个人赞成。'}],
      q:'大家认为这个计划怎么样？',
      qvn:'Mọi người thấy kế hoạch này thế nào?',
      opts:['大家都不赞成','大家都很满意','还需要改一改','大家的意见不一样'],
      ans:0,
      why:'没一个人赞成 = không một ai tán thành → mọi người đều không tán thành.',
      words:['赞成']
    },
    {
      n:7,
      lines:[{sp:'男',zh:'是小丽来的电话？怎么打这么久？'},{sp:'女',zh:'是你妹妹，又失恋了。你这当哥哥的也不管。'},{sp:'男',zh:'这事我怎么管？你是她嫂子，替我多安慰安慰她。'},{sp:'女',zh:'就知道你会这么说。'}],
      q:'说话的两个人是什么关系？',
      qvn:'Hai người nói chuyện có quan hệ gì?',
      opts:['兄妹','夫妻','同事','朋友'],
      ans:1,
      why:'你是她嫂子 = em là chị dâu của nó; người nói “你妹妹” với anh trai → hai người là VỢ CHỒNG. Tiểu Lệ là em gái của người đàn ông.',
      words:[]
    },
    {
      n:8,
      lines:[{sp:'女',zh:'上次拜访的那家公司有结果了吗？'},{sp:'男',zh:'联系好几次了，每次约他们刘经理，对我都特冷淡。'},{sp:'女',zh:'开始时都这样，光看资料了解还是不够的。'},{sp:'男',zh:'是的，我争取能再去给他演示一下。'}],
      q:'男的接下来想要做什么？',
      qvn:'Tiếp theo người đàn ông muốn làm gì?',
      opts:['放弃这家公司','再给刘经理寄资料','换一个人联系','再去给刘经理演示'],
      ans:3,
      why:'我争取能再去给他演示一下 = tôi cố gắng đến trình diễn (sản phẩm) cho ông ấy một lần nữa. Chỉ xem tài liệu là chưa đủ, nên không gửi thêm tài liệu.',
      words:['冷淡']
    }
  ]
};

// ══════════════════════════════════════════
// TÌNH HUỐNG
// ══════════════════════════════════════════
var situationData = {
  intro:'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items:[
    {
      scene:'Bạn cùng bàn hỏi em muốn ngồi cạnh cửa sổ hay cạnh lối đi.',
      a:{sp:'Bạn',zh:'换座位了，你想坐窗户旁边还是走道旁边？',vn:'Đổi chỗ rồi, cậu muốn ngồi cạnh cửa sổ hay cạnh lối đi?'},
      need:['Dùng 无所谓'],
      sample:'坐哪儿我都无所谓，你先选吧。',
      samplePy:'Zuò nǎr wǒ dōu wúsuǒwèi, nǐ xiān xuǎn ba.',
      sampleVn:'Ngồi đâu tớ cũng được, cậu chọn trước đi.',
      tip:'Đại từ nghi vấn (哪儿) + 都无所谓 — giống câu bài khoá 去看电影还是泡酒吧都无所谓.'
    },
    {
      scene:'Bạn nhờ em trực nhật thay vào thứ Sáu vì phải đi khám răng.',
      a:{sp:'Bạn',zh:'周五我要去看牙，你能帮我值一天班吗？',vn:'Thứ Sáu tớ phải đi khám răng, cậu trực thay tớ một hôm được không?'},
      need:['Dùng 嗯','Dùng 值班'],
      sample:'嗯，没问题，周五我帮你值班。下次你也帮我一次吧。',
      samplePy:'Ǹg, méi wèntí, zhōuwǔ wǒ bāng nǐ zhíbān. Xià cì nǐ yě bāng wǒ yí cì ba.',
      sampleVn:'Ừ, không vấn đề gì, thứ Sáu tớ trực thay cậu. Lần sau cậu cũng giúp tớ một lần nhé.',
      tip:'嗯 (ǹg) + dấu phẩy = nhận lời (điểm ngữ pháp 1). 帮 + người + 值班.'
    },
    {
      scene:'Lớp trưởng hỏi ý kiến em về kế hoạch cả lớp đi dã ngoại cuối tuần.',
      a:{sp:'Lớp trưởng',zh:'我想周末组织全班去郊外爬山，你觉得怎么样？',vn:'Mình muốn cuối tuần tổ chức cả lớp đi leo núi ngoại ô, cậu thấy thế nào?'},
      need:['Dùng 赞成'],
      sample:'我举双手赞成！不过得先问问班主任同意不同意。',
      samplePy:'Wǒ jǔ shuāng shǒu zànchéng! Búguò děi xiān wènwen bānzhǔrèn tóngyì bu tóngyì.',
      sampleVn:'Tớ giơ cả hai tay tán thành! Có điều phải hỏi cô chủ nhiệm có đồng ý không đã.',
      tip:'赞成 = ủng hộ kế hoạch; 同意 = người có quyền cho phép (phân biệt 赞成 — 同意).'
    },
    {
      scene:'Em trai than ảnh chụp chung cả nhà bị mờ, hỏi em lý do.',
      a:{sp:'Em trai',zh:'你看，这张全家福怎么拍成这样了？',vn:'Chị xem, tấm ảnh cả nhà này sao chụp ra thế này?'},
      need:['Dùng 模糊','Dùng 八成'],
      sample:'照片太模糊了，八成是拍的时候手动了一下。',
      samplePy:'Zhàopiàn tài móhu le, bāchéng shì pāi de shíhou shǒu dòngle yíxià.',
      sampleVn:'Ảnh mờ quá, chắc là lúc chụp tay bị rung một chút.',
      tip:'模糊 tả hình ảnh không rõ (không dùng 糊涂); 八成是 + phỏng đoán nguyên nhân.'
    },
    {
      scene:'Bạn thân định bỏ đội bóng chỉ vì thua một trận.',
      a:{sp:'Bạn',zh:'我们又输了，我不想踢了，明天就退出球队。',vn:'Bọn mình lại thua rồi, tớ không muốn đá nữa, mai tớ rút khỏi đội.'},
      need:['Dùng 轻易','Khuyên nhẹ nhàng'],
      sample:'别这么轻易就放弃啊！输一场没什么，我们再多练练，下次一定能赢。',
      samplePy:'Bié zhème qīngyì jiù fàngqì a! Shū yì chǎng méi shénme, wǒmen zài duō liànlian, xià cì yídìng néng yíng.',
      sampleVn:'Đừng dễ dàng bỏ cuộc như thế chứ! Thua một trận có sao đâu, bọn mình tập thêm, lần sau nhất định thắng.',
      tip:'轻易 + 放弃 (bảng 搭配: 轻易放弃); 别……啊 làm lời khuyên mềm mỏng.'
    }
  ]
};

// ══════════════════════════════════════════
// CHỌN VĂN PHONG
// ══════════════════════════════════════════
var registerData = {
  intro:'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items:[
    {
      scene:'Nhân viên sân bay nói với hành khách tại quầy làm thủ tục.',
      a:'请填写这张表格并出示您的护照。',
      b:'你把这张表填了，护照拿出来给我看看。',
      better:'a',
      why:'Nhân viên phục vụ nói với khách cần lịch sự, trang trọng: 请, 您, 出示. Câu b cộc lốc như ra lệnh.'
    },
    {
      scene:'Em nhắn tin trả lời bạn thân rủ đi ăn lẩu hay ăn nướng.',
      a:'关于用餐地点的选择，本人没有特别的要求。',
      b:'火锅还是烧烤都行，我无所谓！',
      better:'b',
      why:'Nhắn bạn thân: 都行，我无所谓 tự nhiên, thân mật. Câu a cứng như văn bản hành chính (关于, 用餐, 本人).'
    },
    {
      scene:'Thư của cư dân gửi ban quản lý khu dân cư.',
      a:'我们强烈要求在社区门口设立交通标志，以保证孩子们的安全。',
      b:'门口车太多了，你们快弄个牌子吧，孩子过马路多危险啊！',
      better:'a',
      why:'Văn bản kiến nghị gửi cơ quan cần trang trọng: 强烈要求, 设立, 以保证. Câu b là khẩu ngữ, như than phiền với hàng xóm.'
    },
    {
      scene:'Bạn cùng lớp khen em thi được điểm cao, em đáp lại.',
      a:'哪里哪里，这次运气好，题也比较容易。',
      b:'谢谢您的夸奖，本人将继续努力。',
      better:'a',
      why:'Đáp lời khen của bạn: 哪里哪里 + tự hạ mình là cách khiêm tốn tự nhiên (放低身段). Câu b như phát biểu nhận giải.'
    },
    {
      scene:'Trưởng phòng thông báo trong cuộc họp kết quả biểu quyết.',
      a:'这个方案大家基本上都挺喜欢的，就这么定了吧。',
      b:'经过讨论，大部分同事对该方案表示赞成，方案通过。',
      better:'b',
      why:'Thông báo kết quả trong cuộc họp cần rõ ràng, trang trọng: 经过讨论, 表示赞成, 通过. Câu a hợp khi nói chuyện riêng.'
    },
    {
      scene:'Em khuyên bạn thân đang phân vân có nên tham gia câu lạc bộ kịch không.',
      a:'别犹豫了，想去就去吧，大不了不喜欢再退出嘛！',
      b:'建议你尽快作出决定，以免错过报名时间。',
      better:'a',
      why:'Khuyên bạn thân: 别犹豫了 + 大不了 gần gũi, có cảm xúc. Câu b đúng nhưng như thông báo của nhà trường.'
    }
  ]
};

// ══════════════════════════════════════════
// KỂ LẠI BÀI KHOÁ — bài tập 4 (tr. 120)
// ══════════════════════════════════════════
var retellData = {
  intro:'Bài tập 4 của giáo trình (tr. 120): <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, KHÔNG đọc thuộc lòng. Sách chia 4 ý (朋友是如何请好假的 · 心理学家的实验 · 如何向人提出请求 · “放低身段”的好处); ở đây tách nhỏ thành 6 bước. Nhìn dàn ý và từ khoá, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline:[
    {step:'Người bạn xin nghỉ phép',cue:'一个朋友在报社当编辑…… 先问领导心情好不好…… 嗯，心情好就说，不好就改天再说…… 领导有了兴趣，轻易地请好了假',words:['报社','编辑','嗯','轻易']},
    {step:'Tên của cách làm ấy',cue:'这位朋友很会利用“登门槛效应”来处理问题',words:['门槛','处理']},
    {step:'Thí nghiệm ở hai khu dân cư',cue:'心理学家派人到两个社区，劝人们立“小心驾驶”的圆形标志…… 第一个社区直接提要求，接受率仅为17%',words:['社区','劝','圆','标志']},
    {step:'Hai bước ở khu thứ hai',cue:'先出示赞成安全驾驶的请愿书，请大家签字…… 几周后再提立牌要求…… 接受者达到55%',words:['出示','赞成','请愿书']},
    {step:'Áp dụng trong cuộc sống',cue:'谈恋爱：迫切地约会，女孩会犹豫、冷淡；先一起吃饭，接下来都无所谓…… 请同事值班、写报告：直接说八成儿会被拒绝，把事情模糊化',words:['恋爱','迫切','犹豫','冷淡','无所谓','值班','报告','八成','模糊']},
    {step:'Lợi ích của việc “放低身段”',cue:'小动作让人觉得狡猾，但别人更愿意接受请求…… 自认为了不起，别人觉得不过如此…… 放低身段，缩短距离，别人不会看不起你，觉得你谦虚…… 实践证明',words:['狡猾','了不起','身段','缩短','看不起','谦虚','实践']}
  ],
  checklist:[
    'Kể đủ sáu ý trên chưa, có nói được hai con số 17% và 55% không?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng 嗯 và 轻易 — hai điểm ngữ pháp của bài — đúng chỗ không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// BÀI TẬP SÁCH GIÁO KHOA (tr. 119–120) — bài 1, 2 + 扩展 做一做
// ══════════════════════════════════════════
var sgkData = [
  {
    kieu:'kho',
    de:'选择合适的词语填空',
    vn:'Chọn từ thích hợp điền vào chỗ trống',
    tu:['迫切','无所谓','了不起','标志','处理','赞成'],
    cau:[
      {s:'每次比赛之前，我都要仔细记一些比赛线路周围的＿＿。',dap:['标志']},
      {s:'大家都不＿＿让刘研去负责上海的项目。',dap:['赞成']},
      {s:'平时很多问题都是他去＿＿的，别人根本不会。',dap:['处理']},
      {s:'如果新工作有发展空间，工资低一点儿也＿＿。',dap:['无所谓']},
      {s:'公司＿＿需要开发出适合亚洲市场的新产品。',dap:['迫切']},
      {s:'不就是买了个新手机吗？有什么＿＿的。',dap:['了不起']}
    ]
  },
  {
    kieu:'ab',
    de:'选择正确答案',
    vn:'Chọn đáp án đúng',
    cau:[
      {s:'没想到，主任的态度很＿＿，不同意他去。',opts:['冷淡','清淡'],ans:0,giai:'态度冷淡 = thái độ lạnh nhạt. 清淡 tả món ăn nhạt, ít dầu mỡ, hoặc màu sắc, mùi hương nhẹ — không tả thái độ.'},
      {s:'当经理有什么＿＿的。',opts:['了不起','不得了'],ans:0,giai:'有什么了不起的 = có gì ghê gớm đâu (phản vấn, coi thường). 不得了 = nghiêm trọng / cực kỳ, không dùng trong khung này.'},
      {s:'你自己一个人去花园里玩儿，妈妈＿＿了吗？',opts:['赞成','同意'],ans:1,giai:'Mẹ CHO PHÉP con làm một việc cụ thể → 同意. 赞成 là ủng hộ ý kiến, chủ trương.'},
      {s:'挺好的工作为什么要辞职？你怎么这么＿＿啊？',opts:['糊涂','模糊'],ans:0,giai:'Nói con người làm việc hồ đồ → 糊涂. 模糊 chỉ tả sự vật, hình ảnh, ký ức không rõ.'}
    ]
  },
  {
    kieu:'kho',
    de:'从上表中选择合适的词语填空（扩展 · 行为1）',
    vn:'Chọn từ thích hợp trong bảng từ vựng chủ đề “Hành vi 1” để điền',
    tu:['推辞','议论','转告','祝福','握手','看望','问候','处理','恭喜','宣布','信任','配合','当心'],
    cau:[
      {s:'我把李阳、刘方调到你们部门，他们会全力＿＿你的工作。',dap:['配合']},
      {s:'＿＿是对孩子最大的鼓励，也是给孩子最好的爱。',dap:['信任']},
      {s:'在校长和师生们再三邀请下，刘先生＿＿不过，只好走上讲台。',dap:['推辞']},
      {s:'听说你接到北大的录取通知书啦？＿＿你啊！',dap:['恭喜']}
    ]
  }
];
