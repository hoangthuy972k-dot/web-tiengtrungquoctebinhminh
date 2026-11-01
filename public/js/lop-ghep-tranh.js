/* Tranh an cho tro choi "Lat manh ghep" (lop-ghep.js) — ve tay bang SVG phang,
   chu de Trung Quoc / van hoa Trung Hoa. Moi tranh viewBox 0 0 400 300 va phu kin
   khung de manh nao lat ra cung thay mot phan hinh. Khong dung id ben trong SVG
   (tranh co the hien hai lan tren trang cung luc).
   Them tranh: day them { zh, py, vn, svg } vao mang. */
(function () {
  'use strict';

  function svg(body) {
    return '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + body + '</svg>';
  }

  window.LopGhepTranh = [
    {
      zh: '长城', py: 'Chángchéng', vn: 'Vạn Lý Trường Thành',
      svg: svg(
        '<rect width="400" height="300" fill="#bfe3f5"/>' +
        '<circle cx="335" cy="58" r="30" fill="#ffd45c"/>' +
        '<path d="M28 74q8-16 26-10q10-14 28-4q16-2 16 14z" fill="#fff"/>' +
        '<path d="M190 48q8-12 22-8q8-10 22-2q12 0 12 10z" fill="#fff" opacity=".85"/>' +
        '<path d="M140 60q6-6 12 0q6-6 12 0M168 74q5-5 10 0q5-5 10 0" fill="none" stroke="#4a5560" stroke-width="2"/>' +
        '<path d="M0 200L60 120L120 175L190 95L265 165L330 110L400 150V300H0z" fill="#8cbf86"/>' +
        '<path d="M0 245L80 185L160 235L250 168L330 225L400 195V300H0z" fill="#5f9e5b"/>' +
        '<path d="M0 252L80 192L160 242L250 175L330 232L400 202" fill="none" stroke="#c9a36b" stroke-width="20" stroke-linejoin="round"/>' +
        '<path d="M0 238L80 178L160 228L250 161L330 218L400 188" fill="none" stroke="#c9a36b" stroke-width="8" stroke-dasharray="8 7"/>' +
        '<path d="M0 252L80 192L160 242L250 175L330 232L400 202" fill="none" stroke="#a07c4a" stroke-width="2" stroke-dasharray="14 10"/>' +
        '<rect x="60" y="141" width="41" height="55" fill="#d9b77e" stroke="#8a6a3e" stroke-width="2"/>' +
        '<path d="M60 142V130h9v5h7v-5h9v5h7v-5h9v12z" fill="#d9b77e" stroke="#8a6a3e" stroke-width="2"/>' +
        '<rect x="76" y="150" width="9" height="11" fill="#5a4026"/>' +
        '<path d="M74 196v-17a6.5 6.5 0 0 1 13 0v17z" fill="#5a4026"/>' +
        '<rect x="230" y="119" width="41" height="59" fill="#d9b77e" stroke="#8a6a3e" stroke-width="2"/>' +
        '<path d="M230 120V108h9v5h7v-5h9v5h7v-5h9v12z" fill="#d9b77e" stroke="#8a6a3e" stroke-width="2"/>' +
        '<rect x="246" y="129" width="9" height="11" fill="#5a4026"/>' +
        '<path d="M244 178v-17a6.5 6.5 0 0 1 13 0v17z" fill="#5a4026"/>' +
        '<path d="M0 278q50-16 100 0t100 0t100 0t100 0V300H0z" fill="#4a8a47"/>'
      )
    },
    {
      zh: '熊猫', py: 'xióngmāo', vn: 'gấu trúc',
      svg: svg(
        '<rect width="400" height="300" fill="#dff2cf"/>' +
        '<rect y="232" width="400" height="68" fill="#9ccc7a"/>' +
        '<g fill="#5fa64a"><rect x="30" y="0" width="16" height="240" rx="4"/><rect x="335" y="0" width="16" height="240" rx="4"/><rect x="364" y="20" width="12" height="220" rx="4"/></g>' +
        '<path d="M30 60h16M30 130h16M30 195h16M335 80h16M335 160h16M364 110h12M364 190h12" stroke="#3f7f33" stroke-width="3"/>' +
        '<g fill="#6fbf55"><path d="M46 60q30-20 52-6q-28 14-52 6z"/><path d="M335 80q-30-22-56-8q30 16 56 8z"/><path d="M46 130q26-6 40 10q-26 4-40-10z"/><path d="M364 110q-22-18-44-10q22 14 44 10z"/></g>' +
        '<ellipse cx="200" cy="205" rx="78" ry="68" fill="#fff" stroke="#222" stroke-width="3"/>' +
        '<ellipse cx="145" cy="255" rx="32" ry="24" fill="#222"/><ellipse cx="255" cy="255" rx="32" ry="24" fill="#222"/>' +
        '<ellipse cx="145" cy="259" rx="13" ry="9" fill="#f2c9c9"/><ellipse cx="255" cy="259" rx="13" ry="9" fill="#f2c9c9"/>' +
        '<rect x="268" y="112" width="10" height="112" rx="3" fill="#5fa64a" transform="rotate(20 273 168)"/>' +
        '<path d="M282 120q22-16 40-6q-22 12-40 6z" fill="#6fbf55"/>' +
        '<ellipse cx="135" cy="192" rx="22" ry="40" fill="#222" transform="rotate(25 135 192)"/>' +
        '<ellipse cx="262" cy="190" rx="22" ry="40" fill="#222" transform="rotate(-35 262 190)"/>' +
        '<circle cx="148" cy="62" r="24" fill="#222"/><circle cx="252" cy="62" r="24" fill="#222"/>' +
        '<ellipse cx="200" cy="105" rx="70" ry="60" fill="#fff" stroke="#222" stroke-width="3"/>' +
        '<ellipse cx="172" cy="100" rx="17" ry="23" fill="#222" transform="rotate(30 172 100)"/>' +
        '<ellipse cx="228" cy="100" rx="17" ry="23" fill="#222" transform="rotate(-30 228 100)"/>' +
        '<circle cx="175" cy="97" r="6" fill="#fff"/><circle cx="225" cy="97" r="6" fill="#fff"/>' +
        '<circle cx="176" cy="98" r="3" fill="#222"/><circle cx="224" cy="98" r="3" fill="#222"/>' +
        '<ellipse cx="200" cy="124" rx="10" ry="7" fill="#222"/>' +
        '<path d="M190 138q10 9 20 0" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="160" cy="128" r="8" fill="#f7b7b7"/><circle cx="240" cy="128" r="8" fill="#f7b7b7"/>'
      )
    },
    {
      zh: '灯笼', py: 'dēnglong', vn: 'đèn lồng',
      svg: svg(
        '<rect width="400" height="300" fill="#2b1236"/>' +
        '<g fill="#fff3d0"><circle cx="40" cy="30" r="1.6"/><circle cx="160" cy="18" r="1.4"/><circle cx="250" cy="22" r="1.8"/><circle cx="380" cy="110" r="1.5"/><circle cx="24" cy="120" r="1.4"/><circle cx="370" cy="250" r="1.6"/><circle cx="30" cy="260" r="1.5"/></g>' +
        '<circle cx="345" cy="52" r="22" fill="#ffe7a8"/>' +
        '<g fill="#ff7a4a" opacity=".22"><circle cx="100" cy="150" r="82"/><circle cx="200" cy="168" r="100"/><circle cx="300" cy="150" r="82"/></g>' +
        '<path d="M0 30Q200 80 400 30" fill="none" stroke="#c9a46a" stroke-width="3"/>' +
        '<path d="M100 49v43M300 49v43M200 55v40" stroke="#c9a46a" stroke-width="2"/>' +
        '<rect x="84" y="92" width="32" height="10" rx="3" fill="#f2c14e"/>' +
        '<ellipse cx="100" cy="150" rx="52" ry="48" fill="#e23b2e"/>' +
        '<ellipse cx="100" cy="150" rx="32" ry="48" fill="none" stroke="#a8231a" stroke-width="3"/>' +
        '<ellipse cx="100" cy="150" rx="12" ry="48" fill="none" stroke="#a8231a" stroke-width="3"/>' +
        '<rect x="84" y="196" width="32" height="10" rx="3" fill="#f2c14e"/>' +
        '<path d="M92 206v34M100 206v42M108 206v34" stroke="#f2c14e" stroke-width="3"/>' +
        '<rect x="284" y="92" width="32" height="10" rx="3" fill="#f2c14e"/>' +
        '<ellipse cx="300" cy="150" rx="52" ry="48" fill="#e23b2e"/>' +
        '<ellipse cx="300" cy="150" rx="32" ry="48" fill="none" stroke="#a8231a" stroke-width="3"/>' +
        '<ellipse cx="300" cy="150" rx="12" ry="48" fill="none" stroke="#a8231a" stroke-width="3"/>' +
        '<rect x="284" y="196" width="32" height="10" rx="3" fill="#f2c14e"/>' +
        '<path d="M292 206v34M300 206v42M308 206v34" stroke="#f2c14e" stroke-width="3"/>' +
        '<rect x="178" y="95" width="44" height="12" rx="3" fill="#f2c14e"/>' +
        '<ellipse cx="200" cy="165" rx="68" ry="60" fill="#e8402f"/>' +
        '<ellipse cx="200" cy="165" rx="44" ry="60" fill="none" stroke="#a8231a" stroke-width="3"/>' +
        '<ellipse cx="200" cy="165" rx="18" ry="60" fill="none" stroke="#a8231a" stroke-width="3"/>' +
        '<circle cx="200" cy="165" r="27" fill="#ffd56b"/>' +
        '<text x="200" y="178" font-size="36" text-anchor="middle" fill="#c22a1f" font-family="Noto Sans SC, sans-serif" font-weight="700">福</text>' +
        '<rect x="178" y="223" width="44" height="12" rx="3" fill="#f2c14e"/>' +
        '<path d="M188 235v44M200 235v54M212 235v44" stroke="#f2c14e" stroke-width="3"/>' +
        '<ellipse cx="78" cy="132" rx="9" ry="16" fill="#fff" opacity=".25"/><ellipse cx="172" cy="140" rx="10" ry="20" fill="#fff" opacity=".22"/><ellipse cx="278" cy="132" rx="9" ry="16" fill="#fff" opacity=".25"/>'
      )
    },
    {
      zh: '饺子', py: 'jiǎozi', vn: 'sủi cảo',
      svg: svg(
        '<rect width="400" height="300" fill="#c98b55"/>' +
        '<path d="M0 50q100 12 200 0t200 0M0 140q100 12 200 0t200 0M0 240q100 12 200 0t200 0" stroke="#b5773f" stroke-width="4" fill="none"/>' +
        '<ellipse cx="175" cy="172" rx="152" ry="102" fill="#f4f1ea" stroke="#d9d2c3" stroke-width="4"/>' +
        '<ellipse cx="175" cy="172" rx="122" ry="80" fill="none" stroke="#3f7cc0" stroke-width="3"/>' +
        '<g fill="#fbf3dc" stroke="#d8c49a" stroke-width="3">' +
          '<path d="M80 150Q82 110 120 108Q158 110 160 150Q120 162 80 150z"/>' +
          '<path d="M165 140Q167 100 205 98Q243 100 245 140Q205 152 165 140z"/>' +
          '<path d="M110 215Q112 175 150 173Q188 175 190 215Q150 227 110 215z"/>' +
          '<path d="M195 212Q197 172 235 170Q273 172 275 212Q235 224 195 212z"/>' +
        '</g>' +
        '<path d="M96 126l4 8M110 118l2 9M124 116v9M138 120l-3 8M181 116l4 8M195 108l2 9M209 106v9M223 110l-3 8M126 191l4 8M140 183l2 9M154 181v9M168 185l-3 8M211 188l4 8M225 180l2 9M239 178v9M253 182l-3 8" stroke="#d8c49a" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M190 92q-10-15 0-30t0-30M216 92q-10-15 0-30t0-30" stroke="#fff" stroke-opacity=".75" stroke-width="4" fill="none" stroke-linecap="round"/>' +
        '<ellipse cx="340" cy="236" rx="45" ry="28" fill="#fff" stroke="#d9d2c3" stroke-width="3"/>' +
        '<ellipse cx="340" cy="231" rx="34" ry="17" fill="#5a2e1a"/>' +
        '<path d="M300 36L396 150M320 28L400 124" stroke="#7a3b1e" stroke-width="7" stroke-linecap="round"/>' +
        '<path d="M300 36l12 14M320 28l11 13" stroke="#e8c27a" stroke-width="7" stroke-linecap="round"/>'
      )
    },
    {
      zh: '龙舟', py: 'lóngzhōu', vn: 'thuyền rồng',
      svg: svg(
        '<rect width="400" height="300" fill="#bfe6f0"/>' +
        '<circle cx="60" cy="55" r="26" fill="#ffd45c"/>' +
        '<path d="M250 50q8-14 24-8q10-12 26-2q14 0 14 12z" fill="#fff"/>' +
        '<path d="M0 160Q60 112 120 150T240 140T400 150V180H0z" fill="#8fc49a"/>' +
        '<rect y="172" width="400" height="128" fill="#3d8fc6"/>' +
        '<path d="M0 250q20-10 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0M0 282q20-10 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f0" stroke-width="3" fill="none"/>' +
        '<path d="M60 202V138" stroke="#7a4a24" stroke-width="3"/><path d="M60 138L94 149L60 162z" fill="#f2c14e"/>' +
        '<g fill="#f1c27d"><circle cx="105" cy="182" r="9"/><circle cx="150" cy="182" r="9"/><circle cx="195" cy="182" r="9"/><circle cx="240" cy="182" r="9"/><circle cx="285" cy="182" r="9"/></g>' +
        '<g fill="#e23b2e"><path d="M96 180a9 7 0 0 1 18 0z"/><path d="M141 180a9 7 0 0 1 18 0z"/><path d="M186 180a9 7 0 0 1 18 0z"/><path d="M231 180a9 7 0 0 1 18 0z"/><path d="M276 180a9 7 0 0 1 18 0z"/></g>' +
        '<g fill="#fff"><rect x="98" y="190" width="14" height="12" rx="3"/><rect x="143" y="190" width="14" height="12" rx="3"/><rect x="188" y="190" width="14" height="12" rx="3"/><rect x="233" y="190" width="14" height="12" rx="3"/><rect x="278" y="190" width="14" height="12" rx="3"/></g>' +
        '<path d="M112 194L92 236M157 194L137 236M202 194L182 236M247 194L227 236M292 194L272 236" stroke="#7a4a24" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M40 200H350L330 226H70Z" fill="#d9372b" stroke="#8c1f17" stroke-width="3"/>' +
        '<path d="M50 209H342" stroke="#f2c14e" stroke-width="4"/>' +
        '<path d="M80 218q8-6 16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0" stroke="#8c1f17" stroke-width="2" fill="none"/>' +
        '<path d="M44 202Q20 190 24 158Q34 178 54 186z" fill="#f2c14e" stroke="#8c1f17" stroke-width="3"/>' +
        '<path d="M338 206Q362 162 346 136" stroke="#d9372b" stroke-width="16" fill="none" stroke-linecap="round"/>' +
        '<path d="M334 122Q350 104 372 114L392 128L372 134L382 146L356 146Q336 140 334 122z" fill="#e04a33" stroke="#8c1f17" stroke-width="3"/>' +
        '<path d="M344 114L336 94M352 111L354 90" stroke="#f2c14e" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M336 132Q320 140 326 158M340 142Q326 152 334 168" stroke="#f2c14e" stroke-width="4" fill="none" stroke-linecap="round"/>' +
        '<circle cx="356" cy="122" r="5" fill="#fff"/><circle cx="357" cy="122" r="2.4" fill="#222"/>'
      )
    },
    {
      zh: '茶', py: 'chá', vn: 'trà',
      svg: svg(
        '<rect width="400" height="300" fill="#f3e6cf"/>' +
        '<path d="M330 30q-30 20 0 50q30-30 0-50z" fill="#9cc98a"/><path d="M360 60q-36 4-24 40q32-10 24-40z" fill="#7db86a"/>' +
        '<rect y="222" width="400" height="78" fill="#8a5a3b"/>' +
        '<ellipse cx="200" cy="238" rx="172" ry="22" fill="#6f4529"/>' +
        '<path d="M78 150Q28 158 50 206Q62 218 82 206" fill="none" stroke="#2a6354" stroke-width="12" stroke-linecap="round"/>' +
        '<path d="M218 172Q258 160 266 118L282 121Q278 182 226 202z" fill="#3f8f7a" stroke="#2a6354" stroke-width="3"/>' +
        '<ellipse cx="150" cy="182" rx="80" ry="60" fill="#3f8f7a" stroke="#2a6354" stroke-width="3"/>' +
        '<path d="M92 184q58 24 116 0" stroke="#e9d59a" stroke-width="5" fill="none"/>' +
        '<g fill="#e9d59a"><circle cx="122" cy="160" r="7"/><circle cx="150" cy="154" r="7"/><circle cx="178" cy="160" r="7"/></g>' +
        '<ellipse cx="150" cy="127" rx="44" ry="12" fill="#4fa58d" stroke="#2a6354" stroke-width="3"/>' +
        '<circle cx="150" cy="111" r="9" fill="#4fa58d" stroke="#2a6354" stroke-width="3"/>' +
        '<path d="M268 200h74l-9 36h-56z" fill="#fff" stroke="#c9b9a0" stroke-width="3"/>' +
        '<ellipse cx="305" cy="200" rx="37" ry="7" fill="#b5852c"/>' +
        '<path d="M290 222q15-14 30 0q-15 8-30 0z" fill="#5aa04a"/>' +
        '<path d="M294 186q-10-14 0-28t0-28M318 186q-10-14 0-28t0-28" stroke="#9c8a72" stroke-opacity=".6" stroke-width="4" fill="none" stroke-linecap="round"/>' +
        '<path d="M40 262q20-16 40 0q-20 10-40 0zM100 270q18-14 36 0q-18 9-36 0z" fill="#5aa04a"/>' +
        '<path d="M40 262h40M100 270h36" stroke="#3f7a35" stroke-width="2"/>'
      )
    },
    {
      zh: '月饼', py: 'yuèbing', vn: 'bánh trung thu',
      svg: svg(
        '<rect width="400" height="300" fill="#1f2a55"/>' +
        '<g fill="#fff3d0"><circle cx="40" cy="40" r="1.6"/><circle cx="120" cy="22" r="1.4"/><circle cx="200" cy="56" r="1.8"/><circle cx="240" cy="18" r="1.4"/><circle cx="20" cy="140" r="1.5"/><circle cx="390" cy="160" r="1.5"/></g>' +
        '<circle cx="320" cy="70" r="46" fill="#ffe9a8"/>' +
        '<g fill="#f3d98a"><circle cx="305" cy="58" r="8"/><circle cx="334" cy="84" r="6"/><circle cx="330" cy="52" r="4"/></g>' +
        '<path d="M28 96q6-20 30-14q12-16 32-4q22-2 22 18z" fill="#3a4a80"/>' +
        '<ellipse cx="190" cy="236" rx="152" ry="46" fill="#e8e1d0"/>' +
        '<ellipse cx="190" cy="232" rx="126" ry="34" fill="#f6f1e4"/>' +
        '<path d="M95 176v38a95 30 0 0 0 190 0v-38z" fill="#b8742d"/>' +
        '<ellipse cx="190" cy="176" rx="95" ry="30" fill="#d9954a" stroke="#b8742d" stroke-width="3"/>' +
        '<ellipse cx="190" cy="176" rx="86" ry="25" fill="none" stroke="#c98238" stroke-width="7" stroke-dasharray="7 6"/>' +
        '<ellipse cx="190" cy="176" rx="48" ry="14" fill="none" stroke="#b8742d" stroke-width="3"/>' +
        '<path d="M150 176h80M190 163v26M164 168l52 16M164 184l52-16" stroke="#b8742d" stroke-width="2.5"/>' +
        '<path d="M298 210h58v30h-58z" fill="#e8b56c"/>' +
        '<rect x="298" y="203" width="58" height="9" fill="#b8742d"/>' +
        '<circle cx="327" cy="225" r="10" fill="#f29b1d"/>'
      )
    },
    {
      zh: '天安门', py: 'Tiān\'ānmén', vn: 'Thiên An Môn',
      svg: svg(
        '<rect width="400" height="300" fill="#bfe0f5"/>' +
        '<path d="M30 50q8-14 24-8q10-12 26-2q14 0 14 12z" fill="#fff"/><path d="M300 36q8-12 22-6q10-10 24 0q12 0 12 10z" fill="#fff"/>' +
        '<rect y="252" width="400" height="48" fill="#cfc6b8"/>' +
        '<rect x="20" y="170" width="360" height="84" fill="#c8312a"/>' +
        '<rect x="15" y="164" width="370" height="8" fill="#e9e2d0"/>' +
        '<g fill="#7a1a15"><path d="M64 254v-28a12 12 0 0 1 24 0v28z"/><path d="M121 254v-30a12 12 0 0 1 24 0v30z"/><path d="M185 254v-36a15 15 0 0 1 30 0v36z"/><path d="M255 254v-30a12 12 0 0 1 24 0v30z"/><path d="M312 254v-28a12 12 0 0 1 24 0v28z"/></g>' +
        '<rect x="186" y="178" width="28" height="22" fill="#f2c14e"/>' +
        '<rect x="0" y="250" width="400" height="7" fill="#f2efe8"/>' +
        '<rect x="60" y="150" width="280" height="16" fill="#e9e2d0"/>' +
        '<rect x="84" y="110" width="232" height="42" fill="#d33c30"/>' +
        '<path d="M100 110v42M128 110v42M156 110v42M184 110v42M216 110v42M244 110v42M272 110v42M300 110v42" stroke="#9e231b" stroke-width="4"/>' +
        '<path d="M48 113H352L330 95H70z" fill="#f2b51d" stroke="#b37a0c" stroke-width="2"/>' +
        '<path d="M48 113q-9-2-14-13M352 113q9-2 14-13" stroke="#b37a0c" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<rect x="108" y="86" width="184" height="11" fill="#d33c30"/>' +
        '<path d="M88 90H312L282 60H118z" fill="#f2b51d" stroke="#b37a0c" stroke-width="2"/>' +
        '<path d="M88 90q-9-2-13-12M312 90q9-2 13-12" stroke="#b37a0c" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<rect x="114" y="54" width="172" height="8" rx="3" fill="#e0a514"/>' +
        '<g fill="#e23b2e"><ellipse cx="140" cy="128" rx="9" ry="11"/><ellipse cx="260" cy="128" rx="9" ry="11"/></g>' +
        '<path d="M40 252V196M360 252V196" stroke="#888" stroke-width="3"/>' +
        '<path d="M40 196h24l-5 7 5 7H40zM360 196h24l-5 7 5 7h-24z" fill="#e23b2e"/>'
      )
    },
    {
      zh: '红包', py: 'hóngbāo', vn: 'bao lì xì',
      svg: svg(
        '<rect width="400" height="300" fill="#ffe1a8"/>' +
        '<g fill="#f7b3b8"><circle cx="40" cy="40" r="8"/><circle cx="52" cy="48" r="8"/><circle cx="36" cy="54" r="8"/><circle cx="360" cy="270" r="8"/><circle cx="372" cy="260" r="8"/><circle cx="350" cy="256" r="8"/></g>' +
        '<g fill="#f5c542"><circle cx="45" cy="48" r="4"/><circle cx="361" cy="262" r="4"/></g>' +
        '<rect x="232" y="72" width="120" height="170" rx="10" fill="#e8453c" transform="rotate(15 292 157)"/>' +
        '<rect x="120" y="40" width="160" height="230" rx="12" fill="#d92b2b"/>' +
        '<path d="M120 52Q200 142 280 52A12 12 0 0 0 268 40H132A12 12 0 0 0 120 52z" fill="#b81f1f"/>' +
        '<circle cx="200" cy="122" r="29" fill="#f5c542" stroke="#c9971d" stroke-width="3"/>' +
        '<text x="200" y="134" font-size="32" text-anchor="middle" fill="#b81f1f" font-family="Noto Sans SC, sans-serif" font-weight="700">福</text>' +
        '<path d="M140 228h120M140 244h120" stroke="#f5c542" stroke-width="3"/>' +
        '<path d="M150 200q10-12 20 0q10-12 20 0M210 200q10-12 20 0q10-12 20 0" stroke="#f5c542" stroke-width="3" fill="none"/>' +
        '<circle cx="70" cy="220" r="26" fill="#f5c542" stroke="#c9971d" stroke-width="3"/><rect x="62" y="212" width="16" height="16" fill="#ffe1a8" stroke="#c9971d" stroke-width="2"/>' +
        '<circle cx="338" cy="70" r="22" fill="#f5c542" stroke="#c9971d" stroke-width="3"/><rect x="331" y="63" width="14" height="14" fill="#ffe1a8" stroke="#c9971d" stroke-width="2"/>' +
        '<circle cx="96" cy="262" r="18" fill="#f5c542" stroke="#c9971d" stroke-width="3"/><rect x="90" y="256" width="12" height="12" fill="#ffe1a8" stroke="#c9971d" stroke-width="2"/>'
      )
    },
    {
      zh: '风筝', py: 'fēngzheng', vn: 'con diều',
      svg: svg(
        '<rect width="400" height="300" fill="#a9daf5"/>' +
        '<path d="M30 70q8-16 26-10q10-14 28-4q16-2 16 14z" fill="#fff"/><path d="M300 150q8-14 24-8q10-12 26-2q14 0 14 12z" fill="#fff"/>' +
        '<path d="M330 40q6-6 12 0q6-6 12 0M70 130q5-5 10 0q5-5 10 0" fill="none" stroke="#4a5560" stroke-width="2"/>' +
        '<path d="M0 252Q100 212 200 246T400 236V300H0z" fill="#7cc26a"/>' +
        '<path d="M0 276Q120 256 240 278T400 270V300H0z" fill="#5ea94e"/>' +
        '<path d="M220 112Q120 200 40 296" stroke="#555" stroke-width="1.6" fill="none"/>' +
        '<path d="M220 40L290 112L220 200L150 112z" fill="#e2453c" stroke="#8c1f17" stroke-width="3"/>' +
        '<path d="M220 40L290 112H220zM150 112L220 200V112z" fill="#f5c542"/>' +
        '<path d="M220 40V200M150 112H290" stroke="#8c1f17" stroke-width="3"/>' +
        '<circle cx="220" cy="112" r="12" fill="#fff" stroke="#8c1f17" stroke-width="2"/>' +
        '<path d="M220 200Q200 228 226 252T214 300" stroke="#8c1f17" stroke-width="2" fill="none"/>' +
        '<g fill="#3a7bd5"><path d="M208 222l12 5-12 6zM232 222l-12 5 12 6z"/><path d="M212 250l12 5-12 6zM236 250l-12 5 12 6z"/><path d="M204 278l12 5-12 6zM228 278l-12 5 12 6z"/></g>'
      )
    }
  ];
})();
