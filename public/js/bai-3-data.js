// ══════════════════════════════════════════
// DATA — Bài 3: 左边那个红色的是我的
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'块',py:'kuài',pos:'Lượng từ',vn:'đồng (tiền); miếng',em:'💰',lesson:1,
   ex_zh:'这块手表花了三千多块。',ex_py:'Zhè kuài shǒubiǎo huāle sānqiān duō kuài.',ex_vn:'Chiếc đồng hồ này tốn hơn 3000 tệ.',
   exList:[
     {zh:'这块手表花了三千多块。',py:'Zhè kuài shǒubiǎo huāle sānqiān duō kuài.',vn:'Chiếc đồng hồ này tốn hơn 3000 tệ.'},
     {zh:'一块蛋糕多少钱？',py:'Yí kuài dàngāo duōshao qián?',vn:'Một miếng bánh gato bao nhiêu tiền?'},
     {zh:'我只有十块钱。',py:'Wǒ zhǐyǒu shí kuài qián.',vn:'Tôi chỉ có 10 tệ.'},
   ],
   hanzi:[
     {c:'块',p:'kuài',type:'左右结构 · Trái-phải',st:7,ord:'土 (thổ) trái → 夬 (quyết) phải',rad:'土 (thổ – đất)',mean:'miếng, cục; đơn vị tiền',
      tip:'Đất 土 + 夬 (tách rời) → một MIẾNG đất tách riêng ra. Dùng đếm vật rời rạc và tiền tệ (khẩu ngữ của 元).',
      cf:'快 (kuài – nhanh, bộ 忄)',w:'一块 / 三千块 / 块钱'},
   ]},
  {n:2,zh:'手表',py:'shǒubiǎo',pos:'Danh từ',vn:'đồng hồ đeo tay',em:'⌚',lesson:1,
   ex_zh:'这块手表是你的吗？',ex_py:'Zhè kuài shǒubiǎo shì nǐ de ma?',ex_vn:'Chiếc đồng hồ này có phải của bạn không?',
   exList:[
     {zh:'这块手表是你的吗？',py:'Zhè kuài shǒubiǎo shì nǐ de ma?',vn:'Chiếc đồng hồ này có phải của bạn không?'},
     {zh:'我的手表坏了。',py:'Wǒ de shǒubiǎo huài le.',vn:'Đồng hồ của tôi hỏng rồi.'},
     {zh:'他戴了一块新手表。',py:'Tā dàile yí kuài xīn shǒubiǎo.',vn:'Anh ấy đeo một chiếc đồng hồ mới.'},
   ],
   hanzi:[
     {c:'手',p:'shǒu',type:'独体字 · Tượng hình',st:4,ord:'丿 → 一 → 一 → 亅',rad:'手 (thủ – tay)',mean:'tay',
      tip:'Hình vẽ bàn tay xoè 5 ngón cách điệu → "TAY".',
      cf:'毛 (máo – "lông", nét cong khác)',w:'手表 / 手机 / 洗手'},
     {c:'表',p:'biǎo',type:'上下结构 · Trên-dưới',st:8,ord:'土 trên → 衣 (biến thể) dưới',rad:'衣 (y – áo)',mean:'đồng hồ; bề mặt; biểu thị',
      tip:'Liên quan tới bộ 衣 (áo) — cái gì lộ ra bên ngoài, phần mặt ngoài. Sau dùng chỉ mặt đồng hồ đeo TAY.',
      cf:'衣 (yī – "áo", thiếu nét trên)',w:'手表 / 表哥 / 表示'},
   ]},
  {n:3,zh:'钱',py:'qián',pos:'Danh từ',vn:'tiền',em:'💵',lesson:1,
   ex_zh:'多少钱买的？',ex_py:'Duōshao qián mǎi de?',ex_vn:'Mua hết bao nhiêu tiền?',
   exList:[
     {zh:'多少钱买的？',py:'Duōshao qián mǎi de?',vn:'Mua hết bao nhiêu tiền?'},
     {zh:'我没有钱了。',py:'Wǒ méiyǒu qián le.',vn:'Tôi hết tiền rồi.'},
     {zh:'这个多少钱一个？',py:'Zhège duōshao qián yí ge?',vn:'Cái này bao nhiêu tiền một cái?'},
   ],
   hanzi:[
     {c:'钱',p:'qián',type:'左右结构 · Trái-phải',st:10,ord:'钅(kim) trái → 戋 (tiễn) phải',rad:'钅(kim – kim loại)',mean:'tiền',
      tip:'Bộ 钅(kim loại) bên trái → tiền xưa được đúc bằng kim loại (đồng, bạc).',
      cf:'浅 (qiǎn – "nông, cạn", bộ 氵)',w:'多少钱 / 有钱 / 花钱'},
   ]},
  {n:4,zh:'买',py:'mǎi',pos:'Động từ',vn:'mua',em:'🛍️',lesson:1,
   ex_zh:'我想买一块新手表。',ex_py:'Wǒ xiǎng mǎi yí kuài xīn shǒubiǎo.',ex_vn:'Tôi muốn mua một chiếc đồng hồ mới.',
   exList:[
     {zh:'我想买一块新手表。',py:'Wǒ xiǎng mǎi yí kuài xīn shǒubiǎo.',vn:'Tôi muốn mua một chiếc đồng hồ mới.'},
     {zh:'你在哪儿买的？',py:'Nǐ zài nǎr mǎi de?',vn:'Bạn mua ở đâu vậy?'},
     {zh:'这是爸爸买给我的。',py:'Zhè shì bàba mǎi gěi wǒ de.',vn:'Đây là bố mua cho tôi.'},
   ],
   hanzi:[
     {c:'买',p:'mǎi',type:'上下结构 · Trên-dưới',st:6,ord:'𠂉 → 大 (biến thể)',rad:'大 (đại – biến thể)',mean:'mua',
      tip:'Không có nét sĩ 士 trên đầu — phân biệt với 卖 (bán, có thêm nét trên đầu). Nhớ theo cặp: 买 (mua) ↔ 卖 (bán).',
      cf:'卖 (mài – "bán", thêm nét trên đầu)',w:'买东西 / 买菜 / 买卖'},
   ]},
  {n:5,zh:'报纸',py:'bàozhǐ',pos:'Danh từ',vn:'báo, tờ báo',em:'📰',lesson:2,
   ex_zh:'这是今天早上的报纸吗？',ex_py:'Zhè shì jīntiān zǎoshang de bàozhǐ ma?',ex_vn:'Đây là tờ báo sáng nay phải không?',
   exList:[
     {zh:'这是今天早上的报纸吗？',py:'Zhè shì jīntiān zǎoshang de bàozhǐ ma?',vn:'Đây là tờ báo sáng nay phải không?'},
     {zh:'爸爸每天看报纸。',py:'Bàba měitiān kàn bàozhǐ.',vn:'Bố đọc báo mỗi ngày.'},
     {zh:'报纸在桌子上。',py:'Bàozhǐ zài zhuōzi shang.',vn:'Tờ báo ở trên bàn.'},
   ],
   hanzi:[
     {c:'报',p:'bào',type:'左右结构 · Trái-phải',st:7,ord:'扌(thủ) trái → 及 (cập) biến thể phải',rad:'扌(thủ – tay)',mean:'báo cáo; tin tức',
      tip:'Bộ 扌(tay) → hành động trao/đưa tin bằng tay. 报 dùng trong 报纸 (báo giấy), 报告 (báo cáo).',
      cf:'服 (fú – "phục vụ", bộ 月)',w:'报纸 / 报告 / 日报'},
     {c:'纸',p:'zhǐ',type:'左右结构 · Trái-phải',st:7,ord:'纟(mịch) trái → 氏 (thị) phải',rad:'纟(mịch – tơ, sợi)',mean:'giấy',
      tip:'Bộ 纟(tơ) → giấy cổ đại làm từ xơ vải, tơ lụa nghiền ra.',
      cf:'低 (dī – "thấp", bộ 亻)',w:'报纸 / 纸张 / 一张纸'},
   ]},
  {n:6,zh:'昨天',py:'zuótiān',pos:'Danh từ',vn:'hôm qua',em:'📅',lesson:2,
   ex_zh:'不是，是昨天的。',ex_py:'Bú shì, shì zuótiān de.',ex_vn:'Không phải, là báo ngày hôm qua.',
   exList:[
     {zh:'不是，是昨天的。',py:'Bú shì, shì zuótiān de.',vn:'Không phải, là báo ngày hôm qua.'},
     {zh:'昨天我很忙。',py:'Zuótiān wǒ hěn máng.',vn:'Hôm qua tôi rất bận.'},
     {zh:'昨天的天气比今天冷。',py:'Zuótiān de tiānqì bǐ jīntiān lěng.',vn:'Thời tiết hôm qua lạnh hơn hôm nay.'},
   ],
   hanzi:[
     {c:'昨',p:'zuó',type:'左右结构 · Trái-phải',st:9,ord:'日 (nhật) trái → 乍 (sạ) phải',rad:'日 (nhật – mặt trời)',mean:'hôm qua',
      tip:'Bộ 日 (mặt trời/ngày) + 乍 (vừa mới) → ngày vừa mới trôi qua = HÔM QUA.',
      cf:'作 (zuò – "làm", bộ 亻)',w:'昨天 / 昨晚 / 昨日'},
     {c:'天',p:'tiān',type:'独体字 · Chữ đơn',st:4,ord:'一 → 一 → 丿 → 捺',rad:'大 (đại)',mean:'ngày; trời',
      tip:'Đã học ở bài trước — nét ngang trên chữ 大 = bầu trời, cũng dùng đếm NGÀY.',
      cf:'夫 (fū)',w:'昨天 / 今天 / 明天'},
   ]},
  {n:7,zh:'送',py:'sòng',pos:'Động từ',vn:'đưa, giao, tặng',em:'🚚',lesson:2,
   ex_zh:'是不是送报纸的来了？',ex_py:'Shìbushì sòng bàozhǐ de lái le?',ex_vn:'Có phải người đưa báo đến rồi không?',
   exList:[
     {zh:'是不是送报纸的来了？',py:'Shìbushì sòng bàozhǐ de lái le?',vn:'Có phải người đưa báo đến rồi không?'},
     {zh:'这是他送给我的礼物。',py:'Zhè shì tā sòng gěi wǒ de lǐwù.',vn:'Đây là món quà anh ấy tặng tôi.'},
     {zh:'谁送你回家？',py:'Shéi sòng nǐ huí jiā?',vn:'Ai đưa bạn về nhà vậy?'},
   ],
   hanzi:[
     {c:'送',p:'sòng',type:'半包围 · Bán bao (辶)',st:9,ord:'⺈ → 天 → 辶 (viết sau cùng)',rad:'辶 (sước – bước đi)',mean:'đưa, giao, tặng',
      tip:'Bộ 辶 (đi) → mang một thứ gì đó ĐI đến chỗ người khác = đưa, giao, tặng.',
      cf:'关 (guān – "đóng, liên quan")',w:'送报纸 / 送礼物 / 送人'},
   ]},
  {n:8,zh:'牛奶',py:'niúnǎi',pos:'Danh từ',vn:'sữa (bò)',em:'🥛',lesson:2,
   ex_zh:'不是，是送牛奶的。',ex_py:'Bú shì, shì sòng niúnǎi de.',ex_vn:'Không phải, là người giao sữa.',
   exList:[
     {zh:'不是，是送牛奶的。',py:'Bú shì, shì sòng niúnǎi de.',vn:'Không phải, là người giao sữa.'},
     {zh:'我每天早上喝牛奶。',py:'Wǒ měitiān zǎoshang hē niúnǎi.',vn:'Mỗi sáng tôi đều uống sữa.'},
     {zh:'孩子喜欢喝牛奶。',py:'Háizi xǐhuan hē niúnǎi.',vn:'Trẻ con thích uống sữa.'},
   ],
   hanzi:[
     {c:'牛',p:'niú',type:'独体字 · Tượng hình',st:4,ord:'丿 → 一 → 一 → 丨',rad:'牛 (ngưu – con bò)',mean:'con bò/trâu',
      tip:'Hình vẽ đầu con bò với 2 cái sừng cách điệu → "BÒ".',
      cf:'午 (wǔ – "buổi trưa", thiếu 1 nét)',w:'牛奶 / 牛肉 / 牛年'},
     {c:'奶',p:'nǎi',type:'左右结构 · Trái-phải',st:5,ord:'女 (nữ) trái → 乃 (nãi) phải',rad:'女 (nữ – phụ nữ)',mean:'sữa; bà, mẹ',
      tip:'Bộ 女 (người mẹ) → liên tưởng người mẹ cho con bú = SỮA.',
      cf:'奴 (nú – "nô lệ", phần phải khác)',w:'牛奶 / 奶奶 / 喝奶'},
   ]},
  {n:9,zh:'谁',py:'shéi',pos:'Đại từ',vn:'ai',em:'❓',lesson:3,
   ex_zh:'这是谁的房间？',ex_py:'Zhè shì shéi de fángjiān?',ex_vn:'Đây là phòng của ai vậy?',
   exList:[
     {zh:'这是谁的房间？',py:'Zhè shì shéi de fángjiān?',vn:'Đây là phòng của ai vậy?'},
     {zh:'刚才是谁来了？',py:'Gāngcái shì shéi lái le?',vn:'Vừa nãy là ai đến vậy?'},
     {zh:'你在跟谁说话？',py:'Nǐ zài gēn shéi shuōhuà?',vn:'Bạn đang nói chuyện với ai vậy?'},
   ],
   hanzi:[
     {c:'谁',p:'shéi',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 隹 (chuy) phải',rad:'讠(ngôn – lời nói)',mean:'ai',
      tip:'Bộ 讠(lời nói) + 隹 (chim) → cất lời hỏi xem AI đang ở đó.',
      cf:'难 (nán – "khó", cùng phần phải)',w:'谁的 / 是谁 / 谁知道'},
   ]},
  {n:10,zh:'房间',py:'fángjiān',pos:'Danh từ',vn:'phòng',em:'🚪',lesson:3,
   ex_zh:'这是谁的房间？',ex_py:'Zhè shì shéi de fángjiān?',ex_vn:'Đây là phòng của ai vậy?',
   exList:[
     {zh:'这是谁的房间？',py:'Zhè shì shéi de fángjiān?',vn:'Đây là phòng của ai vậy?'},
     {zh:'我的房间不大。',py:'Wǒ de fángjiān bú dà.',vn:'Phòng của tôi không lớn.'},
     {zh:'房间里有一张床。',py:'Fángjiān lǐ yǒu yì zhāng chuáng.',vn:'Trong phòng có một cái giường.'},
   ],
   hanzi:[
     {c:'房',p:'fáng',type:'半包围 · Bán bao (户)',st:8,ord:'户 (hộ) → 方 (phương) bên trong',rad:'户 (hộ – cửa nhà)',mean:'phòng, nhà',
      tip:'Bộ 户 (cửa một cánh) → không gian có cửa riêng = PHÒNG.',
      cf:'防 (fáng – "phòng ngừa", bộ 阝)',w:'房间 / 厨房 / 房子'},
     {c:'间',p:'jiān',type:'半包围 · Bán bao (门)',st:7,ord:'门 (môn) bao ngoài → 日 bên trong',rad:'门 (môn – cửa)',mean:'khoảng, giữa',
      tip:'Đã học ở bài trước — ánh nắng 日 lọt qua khe cửa 门 → khoảng không gian ở giữa.',
      cf:'问 (wèn – thay 日 bằng 口)',w:'房间 / 时间 / 中间'},
   ]},
  {n:11,zh:'丈夫',py:'zhàngfu',pos:'Danh từ',vn:'chồng',em:'🤵',lesson:3,
   ex_zh:'这是我和我丈夫的。',ex_py:'Zhè shì wǒ hé wǒ zhàngfu de.',ex_vn:'Đây là phòng của tôi và chồng tôi.',
   exList:[
     {zh:'这是我和我丈夫的。',py:'Zhè shì wǒ hé wǒ zhàngfu de.',vn:'Đây là phòng của tôi và chồng tôi.'},
     {zh:'她丈夫是医生。',py:'Tā zhàngfu shì yīshēng.',vn:'Chồng cô ấy là bác sĩ.'},
     {zh:'我丈夫喜欢运动。',py:'Wǒ zhàngfu xǐhuan yùndòng.',vn:'Chồng tôi thích vận động.'},
   ],
   hanzi:[
     {c:'丈',p:'zhàng',type:'独体字 · Chữ đơn',st:3,ord:'一 → 丿 → 捺',rad:'一 (nhất)',mean:'trượng (đơn vị đo); người đàn ông',
      tip:'Ban đầu chỉ đơn vị đo chiều dài (1 trượng ≈ chiều cao người lớn), sau chỉ người đàn ông trưởng thành.',
      cf:'大 (dà – "to lớn")',w:'丈夫 / 岳丈'},
     {c:'夫',p:'fū',type:'独体字 · Chữ đơn',st:4,ord:'一 → 一 → 丿 → 捺',rad:'大 (đại)',mean:'chồng; người đàn ông',
      tip:'Hình người 大 cài thêm một trâm cài đầu (một nét ngang) → người đàn ông đã trưởng thành, có gia đình.',
      cf:'天 (tiān – nét ngang ở vị trí khác)',w:'丈夫 / 夫妻 / 农夫'},
   ]},
  {n:12,zh:'旁边',py:'pángbiān',pos:'Danh từ',vn:'bên cạnh',em:'↔️',lesson:3,
   ex_zh:'旁边那个小的房间是我女儿的。',ex_py:'Pángbiān nàge xiǎo de fángjiān shì wǒ nǚ\'ér de.',ex_vn:'Căn phòng nhỏ bên cạnh là của con gái tôi.',
   exList:[
     {zh:'旁边那个小的房间是我女儿的。',py:'Pángbiān nàge xiǎo de fángjiān shì wǒ nǚ\'ér de.',vn:'Căn phòng nhỏ bên cạnh là của con gái tôi.'},
     {zh:'我家旁边有一个商店。',py:'Wǒ jiā pángbiān yǒu yí ge shāngdiàn.',vn:'Cạnh nhà tôi có một cửa hàng.'},
     {zh:'你可以坐在我旁边。',py:'Nǐ kěyǐ zuò zài wǒ pángbiān.',vn:'Bạn có thể ngồi cạnh tôi.'},
   ],
   hanzi:[
     {c:'旁',p:'páng',type:'上下结构 · Trên-dưới',st:10,ord:'亠 → 冖 → 方 (phương)',rad:'方 (phương – phương hướng)',mean:'bên cạnh',
      tip:'Liên quan tới bộ 方 (phương hướng) → chỉ vị trí kế bên một hướng nào đó.',
      cf:'旅 (lǚ – "du lịch")',w:'旁边 / 两旁 / 一旁'},
     {c:'边',p:'biān',type:'半包围 · Bán bao (辶)',st:5,ord:'力 (biến thể) → 辶',rad:'辶 (sước – đi)',mean:'bên, cạnh',
      tip:'Bộ 辶 (đi dọc theo) → đi men theo mép, rìa của vật gì đó = BÊN, CẠNH.',
      cf:'力 (lì – "sức lực")',w:'旁边 / 左边 / 右边'},
   ]},
  {n:13,zh:'女儿',py:'nǚ\'ér',pos:'Danh từ',vn:'con gái',em:'👧',lesson:3,
   ex_zh:'粉色是我女儿最喜欢的颜色。',ex_py:'Fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.',ex_vn:'Màu hồng là màu con gái tôi thích nhất.',
   exList:[
     {zh:'粉色是我女儿最喜欢的颜色。',py:'Fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.',vn:'Màu hồng là màu con gái tôi thích nhất.'},
     {zh:'我女儿今年五岁。',py:'Wǒ nǚ\'ér jīnnián wǔ suì.',vn:'Con gái tôi năm nay 5 tuổi.'},
     {zh:'她是我的女儿。',py:'Tā shì wǒ de nǚ\'ér.',vn:'Cô bé đó là con gái tôi.'},
   ],
   hanzi:[
     {c:'女',p:'nǚ',type:'独体字 · Tượng hình',st:3,ord:'撇点 → 撇 → 横',rad:'女 (nữ – tự thành bộ)',mean:'nữ, con gái',
      tip:'Hình người phụ nữ ngồi khoanh tay cách điệu → "NỮ".',
      cf:'安 (ān – thêm bộ 宀 trên đầu)',w:'女儿 / 女人 / 女生'},
     {c:'儿',p:'ér',type:'独体字 · Chữ đơn',st:2,ord:'丿 → 乚',rad:'儿 (nhi – tự thành bộ)',mean:'con, trẻ em',
      tip:'Hình đứa trẻ với đôi chân đang co lại → "CON, TRẺ EM". Kết hợp 女+儿 = con gái.',
      cf:'几 (jǐ – "mấy", khác nét)',w:'女儿 / 儿子 / 儿童'},
   ]},
  {n:14,zh:'漂亮',py:'piàoliang',pos:'Tính từ',vn:'đẹp',em:'✨',lesson:3,
   ex_zh:'你女儿的房间真漂亮，都是粉色的。',ex_py:'Nǐ nǚ\'ér de fángjiān zhēn piàoliang, dōu shì fěnsè de.',ex_vn:'Phòng con gái bạn đẹp thật đấy, toàn là màu hồng.',
   exList:[
     {zh:'你女儿的房间真漂亮，都是粉色的。',py:'Nǐ nǚ\'ér de fángjiān zhēn piàoliang, dōu shì fěnsè de.',vn:'Phòng con gái bạn đẹp thật đấy, toàn là màu hồng.'},
     {zh:'这件衣服很漂亮。',py:'Zhè jiàn yīfu hěn piàoliang.',vn:'Chiếc áo này rất đẹp.'},
     {zh:'她长得很漂亮。',py:'Tā zhǎng de hěn piàoliang.',vn:'Cô ấy trông rất xinh đẹp.'},
   ],
   hanzi:[
     {c:'漂',p:'piào',type:'左右结构 · Trái-phải',st:14,ord:'氵(thủy) trái → 票 (phiếu) phải',rad:'氵(thủy – nước)',mean:'trôi nổi; đẹp',
      tip:'Bộ 氵(nước) → nghĩa gốc "trôi nổi trên nước", mượn âm ghép 漂亮 chỉ vẻ ĐẸP nổi bật, sáng sủa.',
      cf:'飘 (piāo – "bay phất phơ")',w:'漂亮 / 漂浮'},
     {c:'亮',p:'liàng',type:'上下结构 · Trên-dưới',st:9,ord:'亠 → 冖 → 几',rad:'亠 (đầu nắp)',mean:'sáng, sáng đẹp',
      tip:'Hình ánh sáng phát ra từ trên cao → "SÁNG". 漂 + 亮 = sáng đẹp, nổi bật.',
      cf:'京 (jīng – "kinh đô", phần dưới khác)',w:'漂亮 / 明亮 / 天亮'},
   ]},
  {n:15,zh:'颜色',py:'yánsè',pos:'Danh từ',vn:'màu sắc',em:'🎨',lesson:3,
   ex_zh:'粉色是我女儿最喜欢的颜色。',ex_py:'Fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.',ex_vn:'Màu hồng là màu con gái tôi thích nhất.',
   exList:[
     {zh:'粉色是我女儿最喜欢的颜色。',py:'Fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.',vn:'Màu hồng là màu con gái tôi thích nhất.'},
     {zh:'你喜欢什么颜色？',py:'Nǐ xǐhuan shénme yánsè?',vn:'Bạn thích màu gì?'},
     {zh:'这件衣服的颜色很好看。',py:'Zhè jiàn yīfu de yánsè hěn hǎokàn.',vn:'Màu của chiếc áo này rất đẹp.'},
   ],
   hanzi:[
     {c:'颜',p:'yán',type:'左右结构 · Trái-phải',st:15,ord:'彦 (ngạn) trái → 页 (hiệt) phải',rad:'页 (hiệt – đầu, trang)',mean:'sắc mặt; màu',
      tip:'Bộ 页 (đầu người) → liên quan tới sắc mặt, diện mạo, dần mở rộng nghĩa thành MÀU SẮC nói chung.',
      cf:'颁 (bān – "ban bố")',w:'颜色 / 颜面'},
     {c:'色',p:'sè',type:'上下结构 · Trên-dưới',st:6,ord:'⺈ → 巴 (ba)',rad:'色 (sắc – tự thành bộ)',mean:'màu sắc',
      tip:'Chữ 色 tự thành bộ, xuất hiện trong hầu hết các từ chỉ MÀU: 红色, 粉色, 颜色.',
      cf:'邑 (yì – "ấp, làng")',w:'颜色 / 红色 / 粉色'},
   ]},
];

const wuData = [
  {img:'⌚',label:'手表',py:'shǒubiǎo',letter:'A'},
  {img:'📰',label:'报纸',py:'bàozhǐ',letter:'B'},
  {img:'🥛',label:'牛奶',py:'niúnǎi',letter:'C'},
  {img:'👧',label:'女儿',py:'nǚ\'ér',letter:'D'},
  {img:'🎨',label:'颜色',py:'yánsè',letter:'E'},
  {img:'🚪',label:'房间',py:'fángjiān',letter:'F'},
];

const dialogData = [
  {scene:'在房间 · Trong phòng',
   lines:[
     {sp:0,zh:'这块手表是你的吗？',py:'Zhè kuài shǒubiǎo shì nǐ de ma?',vn:'Chiếc đồng hồ đeo tay này có phải của bạn không?'},
     {sp:1,zh:'不是我的，是我爸爸的。',py:'Bú shì wǒ de, shì wǒ bàba de.',vn:'Không phải của tôi, là của bố tôi đấy.'},
     {sp:0,zh:'多少钱买的？',py:'Duōshao qián mǎi de?',vn:'Mua hết bao nhiêu tiền thế?'},
     {sp:1,zh:'3000多块。',py:'Sānqiān duō kuài.',vn:'Hơn 3000 tệ.'},
   ]},
  {scene:'在家里 · Ở nhà',
   lines:[
     {sp:0,zh:'这是今天早上的报纸吗？',py:'Zhè shì jīntiān zǎoshang de bàozhǐ ma?',vn:'Đây là tờ báo sáng nay phải không?'},
     {sp:1,zh:'不是，是昨天的。',py:'Bú shì, shì zuótiān de.',vn:'Không phải, là báo ngày hôm qua.'},
     {sp:0,zh:'你听，是不是送报纸的来了？',py:'Nǐ tīng, shìbushì sòng bàozhǐ de lái le?',vn:'Bạn nghe xem, có phải người đưa báo đến rồi không?'},
     {sp:1,zh:'我看一下。不是，是送牛奶的。',py:'Wǒ kàn yíxià. Bú shì, shì sòng niúnǎi de.',vn:'Để tôi xem một chút. Không phải, là người giao sữa.'},
   ]},
  {scene:'在家里 · Ở nhà',
   lines:[
     {sp:0,zh:'这是谁的房间？',py:'Zhè shì shéi de fángjiān?',vn:'Đây là phòng của ai vậy?'},
     {sp:1,zh:'这是我和我丈夫的。旁边那个小的房间是我女儿的。',py:'Zhè shì wǒ hé wǒ zhàngfu de. Pángbiān nàge xiǎo de fángjiān shì wǒ nǚ\'ér de.',vn:'Đây là phòng của tôi và chồng tôi. Căn phòng nhỏ bên cạnh là của con gái tôi.'},
     {sp:0,zh:'你女儿的房间真漂亮，都是粉色的。',py:'Nǐ nǚ\'ér de fángjiān zhēn piàoliang, dōu shì fěnsè de.',vn:'Phòng con gái bạn đẹp thật đấy, toàn là màu hồng thôi.'},
     {sp:1,zh:'是啊，粉色是我女儿最喜欢的颜色。',py:'Shì a, fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.',vn:'Đúng vậy, màu hồng là màu sắc con gái tôi thích nhất.'},
   ]},
];

// Điền từ — tập trung vào ngữ pháp + từ vựng trọng tâm
const fillData = [
  {pre:'这块手表不是我的，是我爸爸',blank:'的',post:'。',hint:'(trợ từ sở hữu)',ans:'的',exp:'A + 的 = của A; đây là danh từ hoá A + 的'},
  {pre:'多少',blank:'钱',post:'买的？',hint:'(tiền)',ans:'钱',exp:'钱 = tiền; 多少钱 = bao nhiêu tiền'},
  {pre:'这是今天早上的报纸',blank:'吗',post:'？',hint:'(trợ từ nghi vấn)',ans:'吗',exp:'吗 đặt cuối câu để tạo câu hỏi Có/Không'},
  {pre:'你听，是不是',blank:'送',post:'报纸的来了？',hint:'(đưa, giao)',ans:'送',exp:'送 = đưa, giao, tặng'},
  {pre:'我看',blank:'一下',post:'。不是，是送牛奶的。',hint:'(một chút — sau động từ)',ans:'一下',exp:'一下 sau động từ để giảm nhẹ hành động: xem thử một chút'},
  {pre:'旁边那个小的房间是我',blank:'女儿',post:'的。',hint:'(con gái)',ans:'女儿',exp:'女儿 = con gái'},
  {pre:'你女儿的房间',blank:'真',post:'漂亮！',hint:'(thật là — nhấn mạnh)',ans:'真',exp:'真 + tính từ nhấn mạnh cảm xúc/đánh giá thật sự'},
  {pre:'粉色是我女儿最喜欢的',blank:'颜色',post:'。',hint:'(màu sắc)',ans:'颜色',exp:'颜色 = màu sắc'},
];

// Sắp xếp — dùng câu KHÁC với phần Điền từ/Trắc nghiệm để tránh trùng lặp
const sortData = [
  {words:['这','块','手表','是','谁','的','？'],ans:'这块手表是谁的？',audio:'这块手表是谁的？'},
  {words:['我','看','一下','。'],ans:'我看一下。',audio:'我看一下。'},
  {words:['是','送','牛奶','的','。'],ans:'是送牛奶的。',audio:'是送牛奶的。'},
  {words:['这','不是','今天','的','报纸','。'],ans:'这不是今天的报纸。',audio:'这不是今天的报纸。'},
  {words:['你','女儿','的','房间','真','漂亮','。'],ans:'你女儿的房间真漂亮。',audio:'你女儿的房间真漂亮。'},
  {words:['粉色','是','我','女儿','最','喜欢','的','颜色','。'],ans:'粉色是我女儿最喜欢的颜色。',audio:'粉色是我女儿最喜欢的颜色。'},
];

// Nối câu — lấy nguyên văn hội thoại, khác nội dung Sắp xếp
const matchData = [
  {left:'这块手表不是我的，',right:'是我爸爸的。'},
  {left:'多少钱',right:'买的？'},
  {left:'你听，是不是',right:'送报纸的来了？'},
  {left:'我看一下。不是，',right:'是送牛奶的。'},
  {left:'旁边那个小的房间',right:'是我女儿的。'},
  {left:'粉色是我女儿',right:'最喜欢的颜色。'},
];

// Trắc nghiệm — không gắn nút nghe, câu hỏi đa dạng hoá ngữ cảnh so với Điền từ
const mcData = [
  {q:'这块手表是你的吗？不是我的，是我爸爸＿＿。',opts:['的','了','吗','呢'],ans:0},
  {q:'这是今天早上的报纸＿＿？',opts:['吗','呢','吧','了'],ans:0},
  {q:'你听，是不是送报纸＿＿来了？',opts:['的','了','着','过'],ans:0},
  {q:'我看＿＿，不是送报纸的。',opts:['一下','一点儿','有点儿','真'],ans:0},
  {q:'这是谁＿＿房间？',opts:['的','了','吗','呢'],ans:0},
  {q:'旁边那个小的房间是我＿＿的。',opts:['女儿','丈夫','颜色','报纸'],ans:0},
  {q:'你女儿的房间＿＿漂亮！',opts:['真','很','太','都'],ans:0},
  {q:'粉色是我女儿最喜欢的＿＿。',opts:['颜色','手表','牛奶','报纸'],ans:0},
  {q:'这块手表多少＿＿买的？',opts:['钱','块','个','元'],ans:0},
  {q:'不是送报纸的，是送＿＿的。',opts:['牛奶','手表','颜色','丈夫'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'这块手表是你的吗？',py:'Zhè kuài shǒubiǎo shì nǐ de ma?',vn:'Chiếc đồng hồ này có phải của bạn không?'},
      {zh:'多少钱买的？',py:'Duōshao qián mǎi de?',vn:'Mua hết bao nhiêu tiền thế?'},
      {zh:'你女儿的房间真漂亮。',py:'Nǐ nǚ\'ér de fángjiān zhēn piàoliang.',vn:'Phòng con gái bạn thật đẹp.'},
      {zh:'粉色是我女儿最喜欢的颜色。',py:'Fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.',vn:'Màu hồng là màu con gái tôi thích nhất.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'这个＿＿的是我的。',frame_py:'Zhège ___ de shì wǒ de.',vn:'Cái ＿＿ là của tôi.',options:['红色','蓝色','小'],samples:['这个红色的是我的。','这个蓝色的是我的。','这个小的是我的。']},
      {frame:'这是我＿＿的。',frame_py:'Zhè shì wǒ ___ de.',vn:'Đây là của ＿＿ tôi.',options:['爸爸','女儿','丈夫'],samples:['这是我爸爸的。','这是我女儿的。','这是我丈夫的。']},
      {frame:'你的房间真＿＿！',frame_py:'Nǐ de fángjiān zhēn ___!',vn:'Phòng của bạn thật ＿＿!',options:['漂亮','大','干净'],samples:['你的房间真漂亮！','你的房间真大！','你的房间真干净！']},
      {frame:'我＿＿一下。',frame_py:'Wǒ ___ yíxià.',vn:'Để tôi ＿＿ một chút.',options:['看','听','想'],samples:['我看一下。','我听一下。','我想一下。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'⌚ Tình huống 1 — Hỏi về đồ vật của ai',
       guide:'Bạn thấy một chiếc đồng hồ lạ trong phòng, hỏi xem của ai và mua hết bao nhiêu tiền.',
       structure:['这是谁的＿＿？','＿＿钱买的？'],
       sample:'这是谁的手表？多少钱买的？',
       sample_vn:'Đây là đồng hồ của ai? Mua hết bao nhiêu tiền?'},
      {role:'🚪 Tình huống 2 — Giới thiệu các phòng trong nhà',
       guide:'Bạn dẫn khách đi xem nhà, giới thiệu phòng nào là của ai.',
       structure:['这是我和＿＿的房间。','旁边那个是＿＿的。'],
       sample:'这是我和我丈夫的房间。旁边那个是我女儿的。',
       sample_vn:'Đây là phòng của tôi và chồng tôi. Căn bên cạnh là của con gái tôi.'},
      {role:'🎨 Tình huống 3 — Khen phòng và hỏi sở thích màu sắc',
       guide:'Bạn khen căn phòng đẹp, rồi hỏi màu yêu thích của chủ nhà là gì.',
       structure:['你的房间真＿＿！','你最喜欢的颜色是＿＿？'],
       sample:'你的房间真漂亮！你最喜欢的颜色是什么？',
       sample_vn:'Phòng của bạn thật đẹp! Màu bạn thích nhất là màu gì?'},
    ],
  },
};
