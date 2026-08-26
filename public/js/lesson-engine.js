// ══════════════════════════════════════════
// AUDIO (Web Speech API — không có file mp3 thật)
// ══════════════════════════════════════════
var zhVoice=null;
function pickZhVoice(){
  if(!window.speechSynthesis) return null;
  var vs=window.speechSynthesis.getVoices();
  return vs.filter(function(v){return /^zh/i.test(v.lang);})[0]||null;
}
if(window.speechSynthesis){
  zhVoice=pickZhVoice();
  window.speechSynthesis.onvoiceschanged=function(){zhVoice=pickZhVoice();};
}
function speakZh(text){
  if(!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(text);
  u.lang='zh-CN';u.rate=0.9;
  if(zhVoice)u.voice=zhVoice;
  window.speechSynthesis.speak(u);
}
function speakSeq(texts){
  if(!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  texts.forEach(function(t){
    var u=new SpeechSynthesisUtterance(t);
    u.lang='zh-CN';u.rate=0.9;
    if(zhVoice)u.voice=zhVoice;
    window.speechSynthesis.speak(u);
  });
}
function miniSpeakBtn(text){return '<button type="button" class="speak-mini" data-action="speak" data-text="'+text.replace(/"/g,'&quot;')+'">🔊</button>';}

// ══════════════════════════════════════════
// REAL AUDIO (bản ghi âm gốc từ giáo trình HSK标准教程 2)
// ══════════════════════════════════════════
const LESSON_NUM=(function(){var m=location.pathname.match(/bai-(\d+)/);return m?parseInt(m[1],10):null;})();
const AUDIO_BASE=(function(){var m=location.pathname.match(/(hsk1-)?bai-(\d+)/);if(!m)return null;return m[1]?'/audio/hsk1-bai-'+m[2]:'/audio/bai-'+m[2];})();
function audioLoadError(el){el.outerHTML='<span class="audio-missing">⚠️ Chưa có file audio gốc cho phần này.</span>';}
// Dò tìm tuần tự base/prefix-1.mp3, prefix-2.mp3... (dừng khi không còn file/không phải audio),
// dùng chung cho các phần có SỐ LƯỢNG track thay đổi theo từng bài (từ mới, nghe bổ sung...).
function fetchAudioParts(base,prefix,container,onFound){
  let idx=1;
  (function tryNext(){
    if(idx>20) return;
    fetch(base+'/'+prefix+'-'+idx+'.mp3',{method:'HEAD'}).then(function(r){
      const ct=r&&r.headers.get('content-type')||'';
      if(r&&r.ok&&/audio/i.test(ct)){
        if(onFound) onFound(idx);
        container.insertAdjacentHTML('beforeend',
          '<div class="vocab-audio-part"><span class="vap-label">Phần '+idx+'</span>'+
          '<audio class="real-audio" controls preload="none" src="'+base+'/'+prefix+'-'+idx+'.mp3" onerror="audioLoadError(this)"></audio></div>');
        idx++;
        tryNext();
      }
    }).catch(function(){});
  })();
}

// ══════════════════════════════════════════
// EXERCISE SCORES (Phần 5 · Tổng kết — dashboard tổng hợp)
// ══════════════════════════════════════════
window.exerciseScores = { collocation:null, listen:null, fill:null, sort:null, errorfix:null, speak:null };

// ══════════════════════════════════════════
// NAV
// ══════════════════════════════════════════
function showTab(id,btn){
  document.querySelectorAll('.section').forEach(function(s){s.classList.remove('active');});
  document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');});
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  if(id==='tongket' && typeof buildSummary==='function') buildSummary();
}

// ══════════════════════════════════════════
// WARMUP
// ══════════════════════════════════════════
let wuCardSel=null,wuDone=new Set();
function buildWarmup(){
  const grid=document.getElementById('wu-grid');
  const opts=document.getElementById('wu-opts');
  grid.innerHTML='';opts.innerHTML='';
  const letters=wuData.map(function(w){return w.letter;});
  const shuffled=[...wuData].sort(function(){return Math.random()-0.5;});
  shuffled.forEach(function(w){
    const d=document.createElement('div');
    d.className='wu-card';d.id='wuc_'+w.letter;
    d.innerHTML='<div class="wu-emoji">'+w.img+'</div><div class="wu-label">（ ？ ）</div>';
    d.onclick=function(){selectWuCard(w.letter,d);};
    grid.appendChild(d);
  });
  const optLetters=[...letters].sort(function(){return Math.random()-0.5;});
  optLetters.forEach(function(l){
    const w=wuData.find(function(x){return x.letter===l;});
    const btn=document.createElement('button');
    btn.className='wu-opt';btn.id='wuopt_'+l;
    btn.textContent=l+'. '+w.label;
    btn.onclick=function(){selectWuOpt(l);};
    opts.appendChild(btn);
  });
}
function selectWuCard(letter,el){
  if(wuDone.has(letter))return;
  document.querySelectorAll('.wu-card').forEach(function(c){if(!c.classList.contains('matched'))c.style.borderColor='';});
  wuCardSel=letter;el.style.borderColor='var(--sky)';
  document.getElementById('wu-fb').innerHTML='<span style="color:var(--sky)">← Bây giờ chọn đáp án chữ!</span>';
}
function selectWuOpt(letter){
  if(!wuCardSel){document.getElementById('wu-fb').innerHTML='<span style="color:var(--warm)">Hãy chọn hình ảnh trước!</span>';return;}
  if(wuDone.has('O'+letter))return;
  const correct=wuCardSel===letter;
  const cardEl=document.querySelector('#wuc_'+wuCardSel);
  const optEl=document.getElementById('wuopt_'+letter);
  const w=wuData.find(function(x){return x.letter===wuCardSel;});
  if(correct){
    cardEl.classList.add('matched');
    cardEl.querySelector('.wu-label').innerHTML='<strong>'+w.label+'</strong><br><span class="wu-py">'+w.py+'</span>';
    cardEl.style.borderColor='';
    optEl.classList.add('sel-ok');
    wuDone.add(wuCardSel);wuDone.add('O'+letter);
    document.getElementById('wu-fb').innerHTML='<span style="color:var(--green)">✓ Đúng rồi!</span>';
    if(wuDone.size===wuData.length*2){
      const sb=document.getElementById('wu-score');
      sb.style.display='flex';
      document.getElementById('wu-score-n').textContent=wuData.length+'/'+wuData.length;
      document.getElementById('wu-score-m').textContent='🎉 Hoàn hảo! Bạn đã ghép đúng tất cả!';
    }
  } else {
    optEl.classList.add('sel-err');
    document.getElementById('wu-fb').innerHTML='<span style="color:var(--red)">✗ Chưa đúng, thử lại!</span>';
    setTimeout(function(){optEl.classList.remove('sel-err');},600);
  }
  wuCardSel=null;
  document.querySelectorAll('.wu-card').forEach(function(c){if(!c.classList.contains('matched'))c.style.borderColor='';});
}

// ══════════════════════════════════════════
// VOCAB
// ══════════════════════════════════════════
const posStyle={'Danh từ':'background:#dbeafe;color:#1d4ed8','Động từ':'background:#dcfce7;color:#16a34a','Tính từ':'background:#fef9c3;color:#b45309','Đại từ':'background:#fce7f3;color:#be185d','Lượng từ':'background:#f0fdf4;color:#15803d'};
function buildVocab(){
  const g=document.getElementById('vocab-grid');
  if(AUDIO_BASE && !document.getElementById('vocab-audio-box')){
    g.insertAdjacentHTML('beforebegin',
      '<div class="audio-box real-box" id="vocab-audio-box">'+
      '<span class="a-label"><span class="a-ico">🎙️</span> Audio gốc giáo trình · Từ mới</span>'+
      '<div class="vocab-audio-list" id="vocab-audio-list"></div>'+
      '<div class="audio-hint">Nghe cách đọc từ mới và câu ví dụ, đúng theo bản ghi âm gốc của giáo trình.</div>'+
      '</div>');
    fetchAudioParts(AUDIO_BASE,'vocab',document.getElementById('vocab-audio-list'));
  }
  g.innerHTML='';
  vocabData.forEach(function(v,vi){
    const d=document.createElement('div');
    d.className='vocab-card';d.dataset.lesson=v.lesson;
    const exs=(v.exList||[{zh:v.ex_zh,py:v.ex_py,vn:v.ex_vn}]).map(function(e){
      return '<div class="vc-ex-item"><div class="vc-ex-zh">'+e.zh+'</div><div class="vc-ex-py">'+e.py+'</div><div class="vc-ex-vn">'+e.vn+'</div></div>';
    }).join('');
    const hzs=(v.hanzi||[]).map(function(h,hi){
      const hasWriter=(typeof STROKE_DATA!=='undefined')&&!!STROKE_DATA[h.c]&&(typeof HanziWriter!=='undefined');
      return '<div class="hz-item"><div class="hz-writer-wrap">'+
        '<div class="hz-writer-box" id="hzw'+vi+'_'+hi+'"><span class="hz-fallback">'+h.c+'</span></div>'+
        '<div class="hz-writer-under"><span class="hzw-py">'+h.p+'</span>'+
        (hasWriter?'<button type="button" class="hz-replay-btn" data-action="hz-replay" data-vi="'+vi+'" data-hi="'+hi+'">▶ Xem thứ tự nét</button>':'')+
        '</div></div>'+
        '<div class="hz-info">'+
        '<div class="hz-row"><span class="hz-k">Loại:</span> '+h.type+' <span class="hz-strokes">'+h.st+' nét</span></div>'+
        '<div class="hz-row"><span class="hz-k">Bộ thủ:</span> '+(hasWriter?'<span class="hz-rad-dot"></span> ':'')+'<span class="hz-rad">'+h.rad+'</span></div>'+
        '<div class="hz-row"><span class="hz-k">Nghĩa:</span> '+h.mean+'</div>'+
        '<div class="hz-row"><span class="hz-k">Bút thuận:</span> '+h.ord+'</div>'+
        '<div class="hz-row"><span class="hz-k">Dễ nhầm:</span> '+h.cf+'</div>'+
        '</div><div class="hz-tip"><b>💡 Mẹo nhớ:</b> '+h.tip+'</div>'+
        '<div class="hz-words"><span class="hz-wl">Từ đại diện:</span> '+h.w+'</div></div>';
    }).join('');
    d.innerHTML='<div class="vc-icon"><span class="vc-num">'+v.n+'</span><span class="vc-emoji">'+v.em+'</span></div>'+
      '<div class="vc-body">'+
      '<div class="vc-head">'+
        '<div class="vc-zh">'+v.zh+'</div>'+
        '<span class="vc-pos-badge" style="'+(posStyle[v.pos]||'')+'">'+v.pos+'</span>'+
      '</div>'+
      '<div class="vc-py">'+v.py+'</div>'+
      '<div class="vc-vn">→ <strong>'+v.vn+'</strong></div>'+
      '<div class="vc-ex"><div class="vc-ex-label">📝 Ví dụ mở rộng</div>'+exs+'</div>'+
      (hzs?'<div class="vc-hz"><button class="hz-btn" data-action="toggle-hz" data-vi="'+vi+'">🀄 Xem Hán tự ('+v.hanzi.length+' chữ)</button><div class="hz-panel" id="hzp'+vi+'">'+hzs+'</div></div>':'')+
      '</div>';
    d.querySelector('.vc-icon').onclick=function(){d.classList.toggle('flipped');};
    d.querySelector('.vc-py').onclick=function(){d.classList.toggle('flipped');};
    g.appendChild(d);
  });
}
function toggleHz(btn,vi){
  const p=document.getElementById('hzp'+vi);
  const open=!p.classList.contains('open');
  p.classList.toggle('open',open);
  btn.textContent=open?'🀄 Ẩn Hán tự':'🀄 Xem Hán tự ('+vocabData[vi].hanzi.length+' chữ)';
  if(open) ensureHzWriters(vi);
}
// ══════════════════════════════════════════
// STROKE ORDER WRITER (HanziWriter, tuỳ chọn — chỉ hoạt động khi
// trang có nạp /js/vendor/hanzi-writer.min.js + STROKE_DATA riêng của bài)
// ══════════════════════════════════════════
const hzWriters={};
function ensureHzWriters(vi){
  if(typeof HanziWriter==='undefined'||typeof STROKE_DATA==='undefined') return;
  (vocabData[vi].hanzi||[]).forEach(function(h,hi){
    const key=vi+'_'+hi;
    if(hzWriters[key]) return;
    const charData=STROKE_DATA[h.c];
    if(!charData) return;
    const target=document.getElementById('hzw'+key);
    if(!target) return;
    target.innerHTML='';
    hzWriters[key]=HanziWriter.create(target,h.c,{
      width:118,height:118,padding:6,
      showOutline:true,
      strokeAnimationSpeed:1,
      delayBetweenStrokes:280,
      strokeColor:'#201e1c',
      radicalColor:'#d8202e',
      outlineColor:'#dde3ea',
      charDataLoader:function(){return charData;}
    });
  });
}
function hzReplay(vi,hi){
  const w=hzWriters[vi+'_'+hi];
  if(w) w.animateCharacter();
}
function filterVocab(lesson,btn){
  document.querySelectorAll('.lesson-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  document.querySelectorAll('.vocab-card').forEach(function(c){
    c.style.display=(lesson===0||parseInt(c.dataset.lesson)===lesson)?'':'none';
  });
}

// ══════════════════════════════════════════
// FLASH
// ══════════════════════════════════════════
let fIdx=0,fOrder=vocabData.map(function(_,i){return i;}),fFlip=false;
function updateFlash(){
  const v=vocabData[fOrder[fIdx]];
  document.getElementById('ff-em').textContent=v.em;
  document.getElementById('ff-zh').textContent=v.zh;
  document.getElementById('ff-py').textContent=v.py;
  document.getElementById('fb-vn').textContent=v.vn;
  document.getElementById('fb-py').textContent=v.py;
  document.getElementById('fb-ex').textContent=v.ex_zh+' — '+v.ex_vn;
  document.getElementById('flash-ctr').textContent=(fIdx+1)+' / '+fOrder.length;
  document.getElementById('flash-card').classList.remove('flipped');
  fFlip=false;
}
function flipFlash(){fFlip=!fFlip;document.getElementById('flash-card').classList.toggle('flipped',fFlip);}
function flashNext(){fIdx=(fIdx+1)%fOrder.length;updateFlash();}
function flashPrev(){fIdx=(fIdx-1+fOrder.length)%fOrder.length;updateFlash();}
function shuffleFlash(){fOrder.sort(function(){return Math.random()-0.5;});fIdx=0;updateFlash();}

// ══════════════════════════════════════════
// DIALOGS
// ══════════════════════════════════════════
const spColors=[['sp1','bub1'],['sp2','bub2']];
function buildDialogs(){
  const w=document.getElementById('dlg-wrap');
  w.innerHTML='';
  dialogData.forEach(function(d,di){
    const div=document.createElement('div');
    div.className='dlg-card'+(di===0?' active':'');
    div.id='dlg'+di;
    let h='<div class="dlg-scene">🎭 '+d.scene+'</div>'+
      (AUDIO_BASE?('<div class="audio-box real-box">'+
      '<span class="a-label"><span class="a-ico">🎙️</span> Audio gốc giáo trình</span>'+
      '<audio class="real-audio" controls preload="none" src="'+AUDIO_BASE+'/dlg-'+(di+1)+'.mp3" onerror="audioLoadError(this)"></audio>'+
      '<div class="audio-hint">Nghe từng câu, lặp lại theo (shadowing) — nghe 2 lượt trước khi luyện nói.</div>'+
      '</div>'):'');
    d.lines.forEach(function(l){
      const isR=l.sp===1;
      const sc=spColors[l.sp]||spColors[0];
      h+='<div class="dlg-line'+(isR?' r':'')+'">'+
        '<div class="dlg-sp '+sc[0]+'">'+(l.sp===0?'A':'B')+'</div>'+
        '<div class="dlg-bub '+sc[1]+'">'+
        '<div class="dlg-zh">'+l.zh+'</div>'+
        '<div class="dlg-py">'+l.py+'</div>'+
        '<div class="dlg-vn">'+l.vn+'</div></div></div>';
    });
    div.innerHTML=h;
    w.appendChild(div);
  });
  if(AUDIO_BASE && !document.getElementById('dlg-extra-wrap')){
    let extraWrap=null,idx=1;
    (function tryNext(){
      if(idx>20) return;
      fetch(AUDIO_BASE+'/extra-'+idx+'.mp3',{method:'HEAD'}).then(function(r){
        const ct=r&&r.headers.get('content-type')||'';
        if(r&&r.ok&&/audio/i.test(ct)){
          if(!extraWrap){
            w.insertAdjacentHTML('afterend','<div id="dlg-extra-wrap"></div>');
            extraWrap=document.getElementById('dlg-extra-wrap');
          }
          extraWrap.insertAdjacentHTML('beforeend',
            '<div class="audio-box real-box">'+
            '<span class="a-label"><span class="a-ico">🎧</span> Đoạn nghe bổ sung '+idx+' (giáo trình gốc)</span>'+
            '<audio class="real-audio" controls preload="none" src="'+AUDIO_BASE+'/extra-'+idx+'.mp3"></audio>'+
            '</div>');
          idx++;
          tryNext();
        }
      }).catch(function(){});
    })();
  }
}
function showDlg(i,btn){
  document.querySelectorAll('.dlg-card').forEach(function(c){c.classList.remove('active');});
  document.querySelectorAll('.dlg-tb').forEach(function(b){b.classList.remove('active');});
  document.getElementById('dlg'+i).classList.add('active');
  btn.classList.add('active');
}

// ══════════════════════════════════════════
// FILL BLANK
// ══════════════════════════════════════════
function buildFill(){
  const l=document.getElementById('fill-list');
  l.innerHTML='';
  fillData.forEach(function(q,i){
    l.innerHTML+='<div class="quiz-card" id="fq'+i+'">'+
      '<div class="q-text"><span class="q-num">'+(i+1)+'</span>'+
      '<span>'+q.pre+'</span>'+
      '<input class="q-inp" id="fi'+i+'" type="text" placeholder="___">'+
      '<span>'+q.post+'</span></div>'+
      '<div class="q-hint">'+q.hint+'</div>'+
      '<div class="q-fb" id="ff'+i+'"></div></div>';
  });
}
function checkFill(){
  let ok=0;
  fillData.forEach(function(q,i){
    const inp=document.getElementById('fi'+i),card=document.getElementById('fq'+i),fb=document.getElementById('ff'+i);
    const v=inp.value.trim().replace(/\s+/g,''),a=q.ans.replace(/\s+/g,'');
    const c=v===a;
    card.className='quiz-card '+(c?'ok':'err');
    inp.className='q-inp '+(c?'ok':'err');
    fb.className='q-fb '+(c?'ok':'err');
    fb.textContent=c?'✓ Đúng rồi!':'✗ Đáp án：「'+q.ans+'」— '+q.exp;
    if(c)ok++;
  });
  const pct=Math.round(ok/fillData.length*100);
  const sb=document.getElementById('fill-score');sb.style.display='flex';
  document.getElementById('fill-sn').textContent=ok+'/'+fillData.length;
  document.getElementById('fill-sm').textContent=pct===100?'🎉 Hoàn hảo!':pct>=70?'👍 Làm tốt!':'💪 Thử lại nhé!';
  document.getElementById('fill-prog').style.width=pct+'%';
  window.exerciseScores.fill={correct:ok,total:fillData.length};
}
function resetFill(){
  fillData.forEach(function(_,i){
    document.getElementById('fi'+i).value='';
    document.getElementById('fi'+i).className='q-inp';
    document.getElementById('fq'+i).className='quiz-card';
    document.getElementById('ff'+i).className='q-fb';
  });
  document.getElementById('fill-score').style.display='none';
  document.getElementById('fill-prog').style.width='0%';
}

// ══════════════════════════════════════════
// SORT
// ══════════════════════════════════════════
let sortState=[];
function buildSort(){
  const l=document.getElementById('sort-list');
  l.innerHTML='';sortState=[];
  sortData.forEach(function(s,i){
    const sh=[...s.words].sort(function(){return Math.random()-0.5;});
    sortState[i]={placed:[],words:sh};
    const chips=sh.map(function(w,j){
      const isPunc=/^[。！？，、；：]$/.test(w);
      return '<span class="w-chip'+(isPunc?' punc-chip':'')+'" id="wc'+i+'_'+j+'" data-action="place-word" data-si="'+i+'" data-wi="'+j+'" data-word="'+w+'">'+w+'</span>';
    }).join('');
    l.innerHTML+='<div class="sort-q">'+
      '<div class="sort-lbl">'+miniSpeakBtn(s.audio)+' <span>Nhấn 🔊 để nghe câu cần sắp xếp</span></div>'+
      '<div class="word-bank" id="wb'+i+'">'+chips+'</div>'+
      '<div class="ans-zone" id="az'+i+'"></div>'+
      '<div class="q-fb" id="sf'+i+'"></div></div>';
  });
}
function placeW(si,wi,word){
  const chip=document.getElementById('wc'+si+'_'+wi);
  if(chip.classList.contains('used'))return;
  chip.classList.add('used');
  sortState[si].placed.push({wi:wi,word:word});
  const az=document.getElementById('az'+si);
  const pc=document.createElement('span');
  pc.className='p-chip'+(/^[。！？，、；：]$/.test(word)?' punc-pchip':'');pc.textContent=word;
  pc.onclick=function(){
    sortState[si].placed=sortState[si].placed.filter(function(p){return p.wi!==wi;});
    pc.remove();chip.classList.remove('used');
    document.getElementById('az'+si).classList.remove('ok-z','err-z');
    document.getElementById('sf'+si).className='q-fb';
  };
  az.appendChild(pc);
}
function checkSort(){
  let ok=0;
  sortData.forEach(function(s,i){
    const placed=sortState[i].placed.map(function(p){return p.word;}).join('');
    const c=placed===s.ans;
    const az=document.getElementById('az'+i),fb=document.getElementById('sf'+i);
    az.classList.remove('ok-z','err-z');az.classList.add(c?'ok-z':'err-z');
    fb.className='q-fb '+(c?'ok':'err');
    fb.textContent=c?'✓ Đúng!':'✗ Đáp án：「'+s.ans+'」';
    if(c)ok++;
  });
  const pct=Math.round(ok/sortData.length*100);
  const sb=document.getElementById('sort-score');sb.style.display='flex';
  document.getElementById('sort-sn').textContent=ok+'/'+sortData.length;
  document.getElementById('sort-sm').textContent=pct===100?'🎉 Xuất sắc!':pct>=60?'👍 Làm tốt!':'💪 Xem lại và thử lại!';
  window.exerciseScores.sort={correct:ok,total:sortData.length};
}
function resetSort(){
  document.getElementById('sort-score').style.display='none';
  buildSort();
}

// ══════════════════════════════════════════
// MATCH
// ══════════════════════════════════════════
let mSel=null,mDone=new Set(),mOrder=[];
function buildMatch(){
  const lEl=document.getElementById('m-left'),rEl=document.getElementById('m-right');
  lEl.innerHTML='';rEl.innerHTML='';
  mOrder=matchData.map(function(_,i){return i;}).sort(function(){return Math.random()-0.5;});
  matchData.forEach(function(p,i){
    const d=document.createElement('div');
    d.className='m-item';d.id='ml'+i;
    d.textContent=p.left;d.onclick=function(){mClickL(i);};
    lEl.appendChild(d);
  });
  mOrder.forEach(function(ri){
    const d=document.createElement('div');
    d.className='m-item';d.id='mr'+ri;
    d.textContent=matchData[ri].right;d.onclick=function(){mClickR(ri);};
    rEl.appendChild(d);
  });
}
function mClickL(i){
  if(mDone.has('L'+i))return;
  document.querySelectorAll('#m-left .m-item').forEach(function(e){e.classList.remove('sel');});
  mSel=i;document.getElementById('ml'+i).classList.add('sel');
  document.getElementById('m-fb').textContent='';
}
function mClickR(i){
  if(mSel===null){document.getElementById('m-fb').innerHTML='<span style="color:var(--warm)">← Chọn vế trái trước</span>';return;}
  if(mDone.has('R'+i))return;
  const c=mSel===i;
  if(c){
    document.getElementById('ml'+mSel).classList.remove('sel');
    document.getElementById('ml'+mSel).classList.add('m-ok');
    document.getElementById('mr'+i).classList.add('m-ok');
    mDone.add('L'+mSel);mDone.add('R'+i);
    document.getElementById('m-fb').innerHTML='<span style="color:var(--green)">✓ Đúng rồi!</span>';
    window.exerciseScores.collocation={correct:mDone.size/2,total:matchData.length};
    if(mDone.size===matchData.length*2)setTimeout(function(){document.getElementById('m-fb').innerHTML='<span style="color:var(--sky-d);font-weight:700">🎉 Hoàn thành! Xuất sắc!</span>';},300);
  } else {
    document.getElementById('ml'+mSel).classList.remove('sel');
    const re=document.getElementById('mr'+i);
    re.classList.add('m-shake');
    document.getElementById('m-fb').innerHTML='<span style="color:var(--red)">✗ Chưa đúng, thử lại!</span>';
    setTimeout(function(){re.classList.remove('m-shake');},350);
  }
  mSel=null;
}
function resetMatch(){
  document.getElementById('m-fb').textContent='';
  mSel=null;mDone=new Set();buildMatch();
}

// ══════════════════════════════════════════
// MULTIPLE CHOICE
// ══════════════════════════════════════════
let mcAns=[];
function buildMC(){
  mcAns=Array(mcData.length).fill(false);
  const l=document.getElementById('mc-list');
  l.innerHTML='';
  mcData.forEach(function(q,i){
    const opts=q.opts.map(function(o,j){return '<button class="q-opt" id="mo'+i+'_'+j+'" data-action="check-mc" data-qi="'+i+'" data-ci="'+j+'">'+o+'</button>';}).join('');
    l.innerHTML+='<div class="quiz-card" id="mcq'+i+'">'+
      '<div class="q-text"><span class="q-num">'+(i+1)+'</span>'+q.q+'</div>'+
      '<div class="q-opts">'+opts+'</div>'+
      '<div class="q-fb" id="mf'+i+'"></div></div>';
  });
  document.getElementById('mc-score').style.display='none';
  document.getElementById('mc-prog').style.width='0%';
}
function checkMC(qi,chosen){
  if(mcAns[qi])return;mcAns[qi]=true;
  const q=mcData[qi],c=chosen===q.ans;
  const fb=document.getElementById('mf'+qi);
  q.opts.forEach(function(_,j){
    const b=document.getElementById('mo'+qi+'_'+j);
    b.style.pointerEvents='none';
    if(j===q.ans)b.classList.add('show-ok');
    else if(j===chosen&&!c)b.classList.add('sel-err');
  });
  fb.className='q-fb '+(c?'ok':'err');
  fb.textContent=c?'✓ Đúng rồi!':'✗ Đáp án：「'+q.opts[q.ans]+'」';
  const done=mcAns.filter(Boolean).length;
  let okC=0;mcData.forEach(function(_,i){if(mcAns[i]&&document.getElementById('mf'+i).classList.contains('ok'))okC++;});
  const sb=document.getElementById('mc-score');sb.style.display='flex';
  document.getElementById('mc-sn').textContent=okC+'/'+done;
  document.getElementById('mc-sm').textContent=done===mcData.length?(okC>=9?'🎉 Xuất sắc!':okC>=7?'👍 Giỏi lắm!':'💪 Xem lại và thử lại!'):'Đã trả lời '+done+'/'+mcData.length+' câu';
  document.getElementById('mc-prog').style.width=(done/mcData.length*100)+'%';
  window.exerciseScores.mc={correct:okC,total:mcData.length,done:done};
}

// ══ LUYỆN NÓI 3 TẦNG ══
function showSpeak(tier,btn){
  document.querySelectorAll('.speak-tb').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  buildSpeaking(tier);
}
function buildSpeaking(tier){
  const w=document.getElementById('speak-wrap');
  if(tier===1){
    const d=speakingData.t1;
    const models=d.models.map(function(m){
      return '<div class="model-card"><div class="model-zh">'+m.zh+' '+miniSpeakBtn(m.zh)+'</div>'+
        '<div class="model-py">'+m.py+'</div><div class="model-vn">'+m.vn+'</div></div>';
    }).join('');
    w.innerHTML='<div class="tier-intro"><b>Tầng 1 · Mô phỏng:</b> '+d.intro+'</div><div class="speak-grid two">'+models+'</div>';
  } else if(tier===2){
    const d=speakingData.t2;
    const drills=d.drills.map(function(dr,i){
      const frame=dr.frame.replace('＿＿','<b>＿＿</b>');
      const opts=dr.options.map(function(o){return '<span class="drill-opt">'+o+'</span>';}).join('');
      const samples=dr.samples.map(function(s){return '<div class="ds">✓ '+s+' '+miniSpeakBtn(s)+'</div>';}).join('');
      return '<div class="drill-card"><div class="drill-frame">'+frame+'</div>'+
        '<div class="drill-py">'+dr.frame_py+'</div><div class="drill-vn">'+dr.vn+'</div>'+
        '<div style="font-size:0.78rem;color:var(--soft);margin-bottom:6px;">Thay bằng:</div>'+
        '<div class="drill-opts">'+opts+'</div>'+
        '<button class="show-ans-btn" data-action="toggle-show" data-target="ds'+i+'">Xem câu mẫu ▾</button>'+
        '<div class="drill-samples" id="ds'+i+'">'+samples+'</div></div>';
    }).join('');
    w.innerHTML='<div class="tier-intro"><b>Tầng 2 · Có hướng dẫn:</b> '+d.intro+'</div><div class="speak-grid two">'+drills+'</div>';
  } else {
    const d=speakingData.t3;
    const tasks=d.tasks.map(function(t,i){
      const chips=t.structure.map(function(s){return '<span class="task-chip">'+s+'</span>';}).join('');
      return '<div class="task-card"><div class="task-role">'+t.role+'</div>'+
        '<div class="task-guide">'+t.guide+'</div>'+
        '<div style="font-size:0.78rem;color:var(--soft);margin-bottom:6px;">Gợi ý cấu trúc để bám theo:</div>'+
        '<div class="task-struct">'+chips+'</div>'+
        '<button class="show-ans-btn" data-action="toggle-show" data-target="ts'+i+'">Xem đoạn nói mẫu ▾</button>'+
        '<div class="task-sample" id="ts'+i+'"><div class="ts-zh">'+t.sample+' '+miniSpeakBtn(t.sample)+'</div><div class="ts-vn">'+t.sample_vn+'</div></div>'+
        (t.note?'<div class="task-note"><b>💡 Lưu ý thực tế:</b> '+t.note+'</div>':'')+
        buildRecorderHtml(i,t.sample)+
        '</div>';
    }).join('');
    w.innerHTML='<div class="tier-intro"><b>Tầng 3 · Nói tự do:</b> '+d.intro+'</div><div class="speak-grid">'+tasks+'</div>';
  }
}

// ══════════════════════════════════════════
// GHI ÂM (Phần 4 · Luyện nói — MediaRecorder + Azure Pronunciation Assessment)
// ══════════════════════════════════════════
const recState={};
function buildRecorderHtml(i,referenceText){
  return '<div class="rec-box" id="rec'+i+'" data-ref="'+referenceText.replace(/"/g,'&quot;')+'">'+
    '<div class="rec-row">'+
      '<button type="button" class="rec-btn rec-start" data-action="rec-start" data-idx="'+i+'">🎙️ Ghi âm</button>'+
      '<button type="button" class="rec-btn rec-stop" data-action="rec-stop" data-idx="'+i+'" disabled>⏹ Dừng</button>'+
      '<button type="button" class="rec-btn rec-play" data-action="rec-play" data-idx="'+i+'" disabled>▶ Nghe lại</button>'+
      '<button type="button" class="rec-btn rec-submit" data-action="rec-submit" data-idx="'+i+'" disabled>📤 Chấm điểm</button>'+
    '</div>'+
    '<div class="rec-status" id="rec-status'+i+'">Bấm 🎙️ Ghi âm rồi đọc to câu mẫu ở trên.</div>'+
    '<div class="rec-result" id="rec-result'+i+'"></div>'+
  '</div>';
}
function recStart(i){
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
    document.getElementById('rec-status'+i).textContent='Trình duyệt không hỗ trợ ghi âm.';return;
  }
  navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
    const mr=new MediaRecorder(stream);
    const chunks=[];
    mr.ondataavailable=function(e){if(e.data.size>0)chunks.push(e.data);};
    mr.onstop=function(){
      stream.getTracks().forEach(function(t){t.stop();});
      const blob=new Blob(chunks,{type:mr.mimeType||'audio/webm'});
      recState[i]={blob:blob,url:URL.createObjectURL(blob)};
      document.getElementById('rec-status'+i).textContent='✓ Đã ghi âm xong. Nghe lại hoặc gửi chấm điểm.';
      document.querySelector('#rec'+i+' .rec-play').disabled=false;
      document.querySelector('#rec'+i+' .rec-submit').disabled=false;
      document.querySelector('#rec'+i+' .rec-start').disabled=false;
    };
    mr.start();
    recState[i]=recState[i]||{};
    recState[i].mr=mr;
    document.getElementById('rec-status'+i).textContent='🔴 Đang ghi âm... bấm ⏹ khi nói xong.';
    document.querySelector('#rec'+i+' .rec-start').disabled=true;
    document.querySelector('#rec'+i+' .rec-stop').disabled=false;
  }).catch(function(){
    document.getElementById('rec-status'+i).textContent='Không thể truy cập micro — hãy cho phép quyền micro rồi thử lại.';
  });
}
function recStop(i){
  if(recState[i]&&recState[i].mr&&recState[i].mr.state==='recording')recState[i].mr.stop();
  document.querySelector('#rec'+i+' .rec-stop').disabled=true;
}
function recPlay(i){
  if(!recState[i]||!recState[i].url)return;
  const a=new Audio(recState[i].url);a.play();
}
function recSubmit(i){
  if(!recState[i]||!recState[i].blob)return;
  const box=document.getElementById('rec'+i);
  const referenceText=box.dataset.ref;
  const resultEl=document.getElementById('rec-result'+i);
  const statusEl=document.getElementById('rec-status'+i);
  statusEl.textContent='⏳ Đang chấm điểm...';
  document.querySelector('#rec'+i+' .rec-submit').disabled=true;
  const reader=new FileReader();
  reader.onloadend=function(){
    const b64=reader.result.split(',')[1];
    fetch('/api/speech-assess',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({audioBase64:b64,mimeType:recState[i].blob.type,referenceText:referenceText})
    }).then(function(r){return r.json().then(function(j){return {ok:r.ok,data:j};});})
      .then(function(res){
        document.querySelector('#rec'+i+' .rec-submit').disabled=false;
        if(!res.ok){
          statusEl.textContent='';
          resultEl.innerHTML='<div class="rec-fallback">🙈 Chưa bật chấm điểm AI ('+(res.data.error||'')+'). Hãy tự nghe lại và đối chiếu với câu mẫu ở trên nhé — đó vẫn là cách luyện tập rất tốt!</div>';
          window.exerciseScores.speak=window.exerciseScores.speak||{done:0,total:0};
          window.exerciseScores.speak.done++;window.exerciseScores.speak.total++;
          return;
        }
        const d=res.data;
        resultEl.innerHTML='<div class="rec-scores">'+
          '<div class="rec-score-item"><span>Phát âm</span><b>'+Math.round(d.pronunciation)+'</b></div>'+
          '<div class="rec-score-item"><span>Độ chính xác</span><b>'+Math.round(d.accuracy)+'</b></div>'+
          '<div class="rec-score-item"><span>Trôi chảy</span><b>'+Math.round(d.fluency)+'</b></div>'+
          '<div class="rec-score-item"><span>Đầy đủ</span><b>'+Math.round(d.completeness)+'</b></div>'+
          '</div>'+(d.recognizedText?'<div class="rec-recognized">Máy nghe được: "'+d.recognizedText+'"</div>':'');
        statusEl.textContent='✓ Đã chấm điểm xong.';
        window.exerciseScores.speak=window.exerciseScores.speak||{done:0,total:0,scores:[]};
        window.exerciseScores.speak.done++;window.exerciseScores.speak.total++;
        window.exerciseScores.speak.scores=window.exerciseScores.speak.scores||[];
        window.exerciseScores.speak.scores.push(d.pronunciation);
      }).catch(function(){
        document.querySelector('#rec'+i+' .rec-submit').disabled=false;
        statusEl.textContent='';
        resultEl.innerHTML='<div class="rec-fallback">Không gửi được — hãy thử lại, hoặc tự đối chiếu với câu mẫu.</div>';
      });
  };
  reader.readAsDataURL(recState[i].blob);
}

// ══════════════════════════════════════════
// PHẦN 2 · NGHE (Listening comprehension — TTS + trắc nghiệm)
// ══════════════════════════════════════════
let listenAns=[];
function buildListen(){
  let qFlat=[];
  listenData.forEach(function(g,gi){g.questions.forEach(function(q,qi){qFlat.push({gi:gi,qi:qi});});});
  listenAns=Array(qFlat.length).fill(false);
  const wrap=document.getElementById('listen-wrap');
  wrap.innerHTML=listenData.map(function(g,gi){
    const qs=g.questions.map(function(q,qi){
      const flatIdx=qFlat.findIndex(function(f){return f.gi===gi&&f.qi===qi;});
      return '<div class="quiz-card" id="lq'+gi+'_'+qi+'">'+
        '<div class="q-text"><span class="q-num">'+(flatIdx+1)+'</span>'+q.q+'</div>'+
        '<div class="q-opts">'+q.opts.map(function(o,ci){return '<button class="q-opt" id="lo'+gi+'_'+qi+'_'+ci+'" data-action="check-listen" data-gi="'+gi+'" data-qi="'+qi+'" data-ci="'+ci+'">'+o+'</button>';}).join('')+'</div>'+
        '<div class="q-fb" id="lf'+gi+'_'+qi+'"></div></div>';
    }).join('');
    return '<div class="listen-passage">'+
      '<button type="button" class="listen-play-btn" data-action="speak" data-text="'+g.audio.replace(/"/g,'&quot;')+'">🔊 Nghe đoạn '+(gi+1)+'</button>'+
      qs+'</div>';
  }).join('');
  document.getElementById('listen-score').style.display='none';
}
function checkListenAnswer(gi,qi,chosen){
  const idKey=gi+'_'+qi;
  const q=listenData[gi].questions[qi];
  const fb=document.getElementById('lf'+idKey);
  if(fb.dataset.done)return;
  fb.dataset.done='1';
  const c=chosen===q.ans;
  q.opts.forEach(function(_,ci){
    const b=document.getElementById('lo'+gi+'_'+qi+'_'+ci);
    b.style.pointerEvents='none';
    if(ci===q.ans)b.classList.add('show-ok');
    else if(ci===chosen&&!c)b.classList.add('sel-err');
  });
  fb.className='q-fb '+(c?'ok':'err');
  fb.textContent=c?'✓ Đúng rồi!':'✗ Đáp án：「'+q.opts[q.ans]+'」';
  let total=0,ok=0,done=0;
  listenData.forEach(function(g,gi2){g.questions.forEach(function(qq,qi2){
    total++;
    const f=document.getElementById('lf'+gi2+'_'+qi2);
    if(f.dataset.done){done++;if(f.classList.contains('ok'))ok++;}
  });});
  const sb=document.getElementById('listen-score');sb.style.display='flex';
  document.getElementById('listen-sn').textContent=ok+'/'+total;
  document.getElementById('listen-sm').textContent=done===total?(ok===total?'🎉 Xuất sắc!':'👍 Xem lại câu sai nhé!'):'Đã trả lời '+done+'/'+total+' câu';
  window.exerciseScores.listen={correct:ok,total:total};
}

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI (Error correction — lỗi thường gặp của HS Việt)
// ══════════════════════════════════════════
let errAns=[];
function buildErrorFix(){
  errAns=Array(errorFixData.length).fill(false);
  const l=document.getElementById('errfix-list');
  l.innerHTML=errorFixData.map(function(q,i){
    const opts=q.opts.map(function(o,j){return '<button class="q-opt" id="eo'+i+'_'+j+'" data-action="check-errorfix" data-qi="'+i+'" data-ci="'+j+'">'+o+'</button>';}).join('');
    return '<div class="quiz-card" id="efq'+i+'">'+
      '<div class="q-text"><span class="q-num">'+(i+1)+'</span>❌ '+q.wrong+'</div>'+
      '<div style="font-size:0.82rem;color:var(--soft);margin:-6px 0 10px 30px;">👆 Câu này sai — chọn câu SỬA ĐÚNG bên dưới:</div>'+
      '<div class="q-opts">'+opts+'</div>'+
      '<div class="q-fb" id="ef'+i+'"></div></div>';
  }).join('');
  document.getElementById('errfix-score').style.display='none';
}
function checkErrorFix(qi,chosen){
  if(errAns[qi])return;errAns[qi]=true;
  const q=errorFixData[qi],c=chosen===q.ans;
  const fb=document.getElementById('ef'+qi);
  q.opts.forEach(function(_,j){
    const b=document.getElementById('eo'+qi+'_'+j);
    b.style.pointerEvents='none';
    if(j===q.ans)b.classList.add('show-ok');
    else if(j===chosen&&!c)b.classList.add('sel-err');
  });
  fb.className='q-fb '+(c?'ok':'err');
  fb.textContent=(c?'✓ Đúng rồi! ':'✗ Đáp án：「'+q.opts[q.ans]+'」 — ')+q.exp;
  const done=errAns.filter(Boolean).length;
  let ok=0;errorFixData.forEach(function(_,i){if(errAns[i]&&document.getElementById('ef'+i).classList.contains('ok'))ok++;});
  const sb=document.getElementById('errfix-score');sb.style.display='flex';
  document.getElementById('errfix-sn').textContent=ok+'/'+done;
  document.getElementById('errfix-sm').textContent=done===errorFixData.length?(ok===errorFixData.length?'🎉 Xuất sắc!':'💪 Xem lại giải thích nhé!'):'Đã trả lời '+done+'/'+errorFixData.length+' câu';
  window.exerciseScores.errorfix={correct:ok,total:errorFixData.length};
}

// ══════════════════════════════════════════
// PHẦN 5 · TỔNG KẾT (Score dashboard — thang 100 + huy hiệu)
// ══════════════════════════════════════════
function buildSummary(){
  const s=window.exerciseScores;
  function pct(part){return part&&part.total?part.correct/part.total:0;}
  const p1=pct(s.collocation)*15;
  const p2=pct(s.listen)*20;
  const gTotal=(s.fill?s.fill.total:0)+(s.sort?s.sort.total:0)+(s.errorfix?s.errorfix.total:0);
  const gCorrect=(s.fill?s.fill.correct:0)+(s.sort?s.sort.correct:0)+(s.errorfix?s.errorfix.correct:0);
  const p3=gTotal?(gCorrect/gTotal)*40:0;
  const p4=(s.speak&&s.speak.total)?Math.min(1,s.speak.done/3)*25:0;
  const total=Math.round(p1+p2+p3+p4);
  let badge,stars;
  if(total>=90){badge='🏆 Xuất sắc';stars='⭐⭐⭐';}
  else if(total>=70){badge='👍 Khá tốt';stars='⭐⭐';}
  else if(total>=50){badge='💪 Cần cố gắng thêm';stars='⭐';}
  else {badge='🌱 Hãy luyện tập lại';stars='';}
  const wrap=document.getElementById('summary-wrap');
  wrap.innerHTML=
    '<div class="sum-total"><div class="sum-total-n">'+total+'<span>/100</span></div><div class="sum-badge">'+badge+' '+stars+'</div></div>'+
    '<div class="sum-parts">'+
      '<div class="sum-part"><span>1️⃣ Ghép từ</span><b>'+Math.round(p1)+'/15</b></div>'+
      '<div class="sum-part"><span>2️⃣ Nghe hiểu</span><b>'+Math.round(p2)+'/20</b></div>'+
      '<div class="sum-part"><span>3️⃣ Ngữ pháp</span><b>'+Math.round(p3)+'/40</b></div>'+
      '<div class="sum-part"><span>4️⃣ Luyện nói</span><b>'+Math.round(p4)+'/25</b></div>'+
    '</div>'+
    '<div class="sum-tip">💡 Hoàn thành đủ cả 4 phần bài tập ở trên rồi quay lại đây để xem điểm chính xác nhất nhé!</div>';
}

// ══════════════════════════════════════════
// EVENT DELEGATION (thay cho onclick="..." nội tuyến — bị CSP chặn)
// ══════════════════════════════════════════
document.addEventListener('click', function(e){
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const action = el.dataset.action;
  if(action==='speak'){ e.stopPropagation(); speakZh(el.dataset.text); return; }
  if(action==='speak-seq'){ e.stopPropagation(); speakSeq(JSON.parse(el.dataset.texts)); return; }
  if(action==='show-tab'){ showTab(el.dataset.tab, el); return; }
  if(action==='filter-vocab'){ filterVocab(parseInt(el.dataset.lesson,10), el); return; }
  if(action==='show-dlg'){ showDlg(parseInt(el.dataset.idx,10), el); return; }
  if(action==='show-speak'){ showSpeak(parseInt(el.dataset.tier,10), el); return; }
  if(action==='flash-prev'){ flashPrev(); return; }
  if(action==='flash-next'){ flashNext(); return; }
  if(action==='flash-flip'){ flipFlash(); return; }
  if(action==='flash-shuffle'){ shuffleFlash(); return; }
  if(action==='check-fill'){ checkFill(); return; }
  if(action==='reset-fill'){ resetFill(); return; }
  if(action==='check-sort'){ checkSort(); return; }
  if(action==='reset-sort'){ resetSort(); return; }
  if(action==='reset-match'){ resetMatch(); return; }
  if(action==='toggle-hz'){ e.stopPropagation(); toggleHz(el, parseInt(el.dataset.vi,10)); return; }
  if(action==='hz-replay'){ e.stopPropagation(); hzReplay(parseInt(el.dataset.vi,10), parseInt(el.dataset.hi,10)); return; }
  if(action==='place-word'){ placeW(parseInt(el.dataset.si,10), parseInt(el.dataset.wi,10), el.dataset.word); return; }
  if(action==='check-mc'){ checkMC(parseInt(el.dataset.qi,10), parseInt(el.dataset.ci,10)); return; }
  if(action==='toggle-show'){ document.getElementById(el.dataset.target).classList.toggle('show'); return; }
  if(action==='check-listen'){ checkListenAnswer(parseInt(el.dataset.gi,10), parseInt(el.dataset.qi,10), parseInt(el.dataset.ci,10)); return; }
  if(action==='check-errorfix'){ checkErrorFix(parseInt(el.dataset.qi,10), parseInt(el.dataset.ci,10)); return; }
  if(action==='rec-start'){ e.stopPropagation(); recStart(parseInt(el.dataset.idx,10)); return; }
  if(action==='rec-stop'){ e.stopPropagation(); recStop(parseInt(el.dataset.idx,10)); return; }
  if(action==='rec-play'){ e.stopPropagation(); recPlay(parseInt(el.dataset.idx,10)); return; }
  if(action==='rec-submit'){ e.stopPropagation(); recSubmit(parseInt(el.dataset.idx,10)); return; }
});

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
if(typeof wuData!=='undefined')buildWarmup();
if(typeof vocabData!=='undefined')buildVocab();
if(typeof vocabData!=='undefined')updateFlash();
if(typeof dialogData!=='undefined')buildDialogs();
if(typeof fillData!=='undefined')buildFill();
if(typeof sortData!=='undefined')buildSort();
if(typeof matchData!=='undefined')buildMatch();
if(typeof mcData!=='undefined')buildMC();
if(typeof speakingData!=='undefined')buildSpeaking(1);
if(typeof listenData!=='undefined')buildListen();
if(typeof errorFixData!=='undefined')buildErrorFix();
