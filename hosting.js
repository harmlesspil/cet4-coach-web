// The public Sites edition has no model backend. Learning records stay in the browser.
const hostedSettingsBase=settings;
settings=function(){hostedSettingsBase();const section=document.querySelector('#app .stack > section:last-child');if(section)section.innerHTML='<h2>模型能力</h2><span class="tag">在线版未启用模型</span><p>已有题库解析、单词与错题复习、学习进度和写作自查可以正常使用。此托管版暂不提供模型批改，不会发送你的草稿或学习记录。</p>'};
modelFeedback=function(){toast('此在线版未启用模型批改，请使用写作自查与参考对照。')};
if(route==='settings')settings();
