﻿var exports="",addthis_config={ui_508_compliant:true,data_track_clickback:true,ui_use_addressbook:true},$=function(){"use strict";if(typeof document.getElementById==='undefined'){return;}var i,element,elements=[];for(i=0;i<arguments.length;i+=1){element=arguments[i];if(typeof(element)==='string'){element=document.getElementById(element);}if(arguments.length===1){return element;}elements.push(element);}return elements;},o={au:$('ctype-auto'),ba:$('beau-tab'),bb:$('modebeautify'),bc:$('beau-char'),bd:$('Beautify'),bi:$('beautyinput'),bl:$('baselabel'),bn:$('beau-line'),bo:$('baseText'),bq:$('beau-quan'),bs:$('beau-space'),bt:$('diffBase'),bx:$('beautyoutput'),bw:$('beau-other'),bz:$('bo'),ch:$('csvchar'),cn:4,cv:$('ctype-csv'),cz:" ",da:$('diff-tab'),db:$('diffbeautify'),dc:$('diff-char'),dd:$('modediff'),dm:$('diffscolony'),dn:$('diffscolonn'),dp:$('diffwide'),dq:$('diff-quan'),dr:$('diffquotey'),ds:$('diff-space'),dt:$('difftall'),du:$('diffcontentn'),dv:$('diffoutput'),dw:$('diff-other'),dx:$('diffcontenty'),dy:$('diffquoten'),dz:$('diff-line'),hd:$('htmld-yes'),he:$('htmld-no'),hm:$('htmlm-yes'),hn:$('htmlm-no'),ht:$('htmlspecific'),hy:$('html-yes'),hz:$('html-no'),id:$('inscriptd-yes'),ie:$('inscriptd-no'),is:$('inscript-yes'),it:$('inscript-no'),iy:$('incomment-yes'),iz:$('incomment-no'),jd:$('jsindentd-all'),je:$('jsindentd-knr'),js:$('jsindent-all'),jt:$('jsindent-knr'),mb:$('topcoms-no'),mc:$('topcoms-yes'),md:$('Minify'),mi:$('minifyinput'),ml:$('minifyinputlines'),mm:$('modeminify'),mn:$('minifywindiff'),mo:$('minifyoutputsize'),mr:$('minifywinratiosize'),ms:$('minifyinputsize'),mt:$('minifyratiosize'),mu:$('minifyunixdiff'),mw:$('minifywinsize'),mx:$('minifyoutput'),nl:$('newlabel'),nt:$('diffNew'),nx:$('newText'),nz:$('no'),op:$('options'),ps:$('diff-save'),pt:$('ctype-text'),sh:$('hideOptions'),dqp:$('diffquanp'),dqt:$('difftypep'),htd:$('htmlspecificd'),ind:$('scriptindentd'),ins:$('scriptindent'),bops:$('beauops'),csvp:$('csvcharp'),dops:$('diffops'),mops:$('miniops'),context:$('contextSize'),inline:$('inline'),sideby:$('sidebyside'),option:$('option_comment')},recycle=function(x){"use strict";var lang="auto",comment="noindent",content=false,style="indent",html=false,quote=false,semicolon=false,topcoms=false,diffview="sidebyside",mode="beautify",js="",output,source,diffsource="";o.bb=$('modebeautify');o.jd=$('jsindentd-all');o.js=$('jsindent-all');o.ch=$('csvchar');o.cv=$('ctype-csv');o.dd=$('modediff');o.mm=$('modeminify');o.pt=$('ctype-text');o.dx=$('diffcontenty');if(o.cv.checked===true){lang="csv";}else if(o.pt.checked===true){lang="text";}else{lang="auto";}if(o.bb.checked){o.hy=$('html-yes');o.ba=$('beau-tab');o.bn=$('beau-line');o.bw=$('beau-other');o.bc=$('beau-char');o.bi=$('beautyinput');o.bq=$('beau-quan');o.is=$('inscript-yes');o.iz=$('incomment-no');if(o.ba.checked){o.cz="\t";}else if(o.bn.checked){o.cz="\n";}else if(o.bw.checked){o.cz=o.bc.value;}else{o.cz=" ";}if(!isNaN(o.bq.value)){o.cn=Number(o.bq.value);}if(!o.is.checked){style="noindent";}if(o.hy.checked){html="html-yes";}if(!o.iz.checked){comment="indent";}if(o.js.checked){js="allman";}source=o.bi.value;mode="beautify";}else if(o.dd.checked){o.context=$('contextSize');o.inline=$('inline');o.bl=$('baselabel');o.nl=$('newlabel');o.hd=$('htmld-yes');o.bo=$('baseText');o.nx=$('newText');o.dn=$('diffscolonn');o.dy=$('diffquoten');o.da=$('diff-tab');o.dw=$('diff-other');o.dz=$('diff-line');o.dc=$('diff-char');o.dq=$('diff-quan');o.du=$('diffcontentn');o.id=$('inscriptd-yes');o.ps=$('diff-save');if(o.du.checked){content=true;}if(o.da.checked){o.cz="\t";}else if(o.dz.checked){o.cz="\n";}else if(o.dw.checked.checked){o.cz=o.dc.value;}else{o.cz=" ";}if(!isNaN(o.dq.value)){o.cn=Number(o.dq.value);}if(!o.id.checked){style="noindent";}if(o.hd.checked){html="html-yes";}if(o.dy.checked){quote=true;}if(o.dn.checked){semicolon=true;}if(o.inline.checked){diffview="inline";}if(isNaN(o.context.value)){o.context.value="";}if(o.jd.checked){js="allman";}if(o.bo.value===""||o.bo.value==="Error: source code is missing."){o.bo.value="Error: source code is missing.";return;}if(o.nx.value===""||o.nx.value==="Error: diff code is missing."){o.nx.value="Error: diff code is missing.";return;}source=o.bo.value;diffsource=o.nx.value;mode="diff";}else if(o.mm.checked){o.hm=$('htmlm-yes');o.mc=$('topcoms-yes');o.mi=$('minifyinput');if(o.hm.checked){html="html-yes";}if(o.mc.checked){topcoms=true;}source=o.mi.value;mode="minify";}output=prettydiff(source,diffsource,mode,lang,o.ch.value,o.cn,o.cz,comment,js,style,html,o.context.value,content,quote,semicolon,diffview,o.bl.value,o.nl.value,topcoms,x);if(o.bb.checked){o.bx.value=output[0];o.dv.innerHTML=output[1];}else if(o.dd.checked){if(o.ps.checked){output[2]=output[1]+'<p>This is the generated diff output. Please copy the text output, paste into a text file, and save as a &quot;.html&quot; file.</p><textarea rows="40" cols="80" id="textreport">';output[0]='<?xml version="1.0" encoding="UTF-8" ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><head><title>Pretty Diff - The difference tool</title><meta name="robots" content="index, follow"/> <meta name="DC.title" content="Pretty Diff - The difference tool"/> <link rel="canonical" href="http://prettydiff.com/" type="application/xhtml+xml"/><meta http-equiv="Content-Type" content="application/xhtml+xml;charset=UTF-8"/><meta http-equiv="Content-Style-Type" content="text/css"/><style type="text/css">body{background-color:#a8b8c8;color:#000;font-family:"Arial";font-size:10px;}button{display:block;font-size:2em;font-weight:bold;margin:1em auto;padding:1em 2em;}button:hover{background:#ccf;}button:active{background:#c00;}h1{font-size:2em;}h1 span{color:#c00;font-size:.5em;}p{clear:both;font-size:1.2em;margin-top:.2em;}#diffoutput{width:100%;}p em{color:#c00;font-weight:bold;}table.diff{border-collapse:collapse;border:.1em solid darkgray;font-size:1em;white-space:pre;}table.diff tbody{font-family:"Courier New",Courier,"Lucida Console",monospace;font-size:1.1em;}table.diff tbody th{font-family:verdana,arial,"Bitstream Vera Sans",helvetica,sans-serif;background:#eed;font-weight:normal;border:.1em solid #bbc;color:#886;padding:.5em .6em 0em 2.4em;text-align:right;vertical-align:top;}table.diff thead{border-bottom:.1em solid #bbc;background:#efefef;font-family:Verdana;}table.diff thead th.texttitle{text-align:left;}table.diff tbody td{letter-spacing:.1em;padding:.5em .5em 0em .5em;vertical-align:top;}table.diff tbody td em{font-style:normal;padding:.05em 0em;margin:0-.09em;}table.diff .empty{background-color:#ddd;}table.diff .replace{background-color:#fd8;}table.diff .replace em{background-color:#ffc;border:.1em solid #cc3;}table.diff .delete{background-color:#e99;}table.diff .delete em{background-color:#fcf;border:.1em solid #900;}table.diff .equal{background-color:#fff;}table.diff .skip{background-color:#efefef;border:.1em solid #aaa;border-right:.1em solid #bbc;}table.diff .insert{background-color:#9e9;}table.diff .insert em{background-color:#ef9;border:1px solid #090;}table.diff th.author{text-align:right;border-top:.1em solid #bbc;background:#efefef;}@media print{html{font-size:.8em;}html table.diff{font-size:.8em;white-space:normal;}}</style></head><body><h1><a href="http://prettydiff.com/">Pretty Diff - The difference tool</a></h1>'+output[1]+'<p>Accessibility note. &lt;em&gt; tags in the output represent character differences per lines compared.</p>'+output[0]+'</body></html>';o.dv.innerHTML=output[2]+output[0].replace(/\&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;")+'</textarea>';}else{o.dv.innerHTML=output[1]+output[0];}}else if(o.mm.checked){o.mx.value=output[0];o.dv.innerHTML=output[1];}},pd={hideOptions:function(x){"use strict";o.bb=$('modebeautify');o.dd=$('modediff');o.mm=$('modeminify');o.au=$('ctype-auto');if(x.innerHTML==='Visually Hide Options'){o.op.style.display='none';o.bops.style.display='none';o.dops.style.display='none';o.mops.style.display='none';x.innerHTML='Visually Show Options';}else if(x.innerHTML==='Visually Show Options'){o.op.style.display='block';if(o.bb.checked&&o.au.checked){o.bops.style.display='block';}else if(o.dd.checked){o.dops.style.display='block';}else if(o.mm.checked&&o.au.checked){o.mops.style.display='block';}x.innerHTML='Visually Hide Options';}return false;},prettyvis:function(a){"use strict";var optioncheck=function(){o.au.disabled=false;if(o.pt.checked){o.au.checked=true;}o.cv.disabled=false;o.pt.disabled=true;o.pt.checked=false;};if(a===o.bb){optioncheck();o.bx.setAttribute("name","paste_code");o.mx.removeAttribute("name");if(o.bi.value===""&&o.mi.value!==""){o.bi.value=o.mi.value;}else if(o.bi.value===""&&o.bo.value!==""){o.bi.value=o.bo.value;}o.bt.style.display="none";o.nt.style.display="none";o.bd.style.display="block";o.md.style.display="none";o.dops.style.display="none";o.mops.style.display="none";if(o.cv.checked){o.bops.style.display="none";}else{o.bops.style.display="block";}}else if(a===o.mm){optioncheck();o.mx.setAttribute("name","paste_code");o.bx.removeAttribute("name");if(o.mi.value===""&&o.bi.value!==""){o.mi.value=o.bi.value;}else if(o.mi.value===""&&o.bo.value!==""){o.mi.value=o.bo.value;}if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}o.bt.style.display="none";o.nt.style.display="none";o.bd.style.display="none";o.md.style.display="block";o.dops.style.display="none";o.bops.style.display="none";}else if(a===o.dd){o.au.disabled=false;o.cv.disabled=false;o.pt.disabled=false;if(o.bo.value===""&&o.bi.value!==""){o.bo.value=o.bi.value;}else if(o.bo.value===""&&o.mi.value!==""){o.bo.value=o.mi.value;}o.bt.style.display="block";o.nt.style.display="block";o.bd.style.display="none";o.md.style.display="none";o.dops.style.display="block";o.bops.style.display="none";o.mops.style.display="none";if(o.cv.checked||o.pt.checked){o.dqp.style.display="none";o.dqt.style.display="none";o.db.style.display="none";}else{o.dqp.style.display="block";o.dqt.style.display="block";o.db.style.display="block";}}else if(a===o.dp){o.bt.className="diffwide";o.nt.className="diffwide";o.bd.className="wide";o.md.className="wide";}else if(a===o.dt){o.bt.className="difftall";o.nt.className="difftall";o.bd.className="tall";o.md.className="tall";}},codeOps:function(x){"use strict";o.bb=$('modebeautify');o.dd=$('modediff');o.mm=$('modeminify');o.au=$('ctype-auto');if(o.dd.checked){o.mops.style.display="none";o.bops.style.display="none";if(o.cv.checked||o.pt.checked){o.dqp.style.display="none";o.dqt.style.display="none";o.db.style.display="none";}else{o.dqp.style.display="block";o.dqt.style.display="block";o.db.style.display="block";}}else if(o.bb.checked){o.mops.style.display="none";o.dops.style.display="none";if(o.cv.checked){o.bops.style.display="none";}else{o.bops.style.display="block";}}else if(o.mm.checked){o.bops.style.display="none";o.dops.style.display="none";if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}}if(o.cv.checked){o.csvp.style.display="block";}else{o.csvp.style.display="none";}if(x===false){o.db.style.display="block";}else{o.db.style.display="none";}},indentchar:function(x){"use strict";if(o.bb.checked&&x==="beau-char"){o.bw.checked=true;}else if(o.dd.checked&&x==="diff-char"){o.dw.checked=true;}if(o.bw.checked){o.bc.style.background="#eef8ff";}else{o.bc.style.background="#eee";}if(o.dw.checked){o.dc.style.background="#eef8ff";}else{o.dc.style.background="#eee";}},optionString:[],webtool:[],options:function(x){"use strict";o.bb=$('modebeautify');o.dd=$('modediff');o.mm=$('modeminify');if(x===o.bb){pd.optionString[0]="apimode: beautify";}else if(x===o.mm){pd.optionString[0]="apimode: minify";}else if(x===o.dd){pd.optionString[0]="apimode: diff";}else if(x===o.au){pd.optionString[1]="apilang: auto";}else if(x===o.pt){pd.optionString[1]="apilang: text";}else if(x===o.cv){pd.optionString[1]="apilang: csv";}else if(x===o.ch){pd.optionString[2]="apicsvchar: \""+o.ch.value+"\"";}else if(x===o.bq&&o.bb.checked&&o.bq.value!==""&&!isNaN(Number(o.bq.value))){pd.optionString[3]="apiinsize: "+o.bq.value;}else if(x===o.dq&&o.dd.checked&&o.dq.value!==""&&!isNaN(Number(o.dq.value))){pd.optionString[3]="apiinsize: "+o.dq.value;}else if(x===o.bc&&o.bb.checked&&o.bw.checked){pd.optionString[4]="apiinchar: \""+o.bc.value+"\"";}else if(x===o.bw&&o.bb.checked){pd.optionString[4]="apiinchar: \""+o.bc.value+"\"";}else if(x===o.bs&&o.bb.checked){pd.optionString[4]="apiinchar: \" \"";}else if(x===o.ba&&o.bb.checked){pd.optionString[4]="apiinchar: \"\\t\"";}else if(x===o.bn&&o.bb.checked){pd.optionString[4]="apiinchar: \"\\n\"";}else if(x===o.dc&&o.dd.checked&&o.dw.checked){pd.optionString[4]="apiinchar: \""+o.dc.value+"\"";}else if(x===o.dw&&o.dd.checked){pd.optionString[4]="apiinchar: \""+o.dc.value+"\"";}else if(x===o.ds&&o.dd.checked){pd.optionString[4]="apiinchar: \" \"";}else if(x===o.da&&o.dd.checked){pd.optionString[4]="apiinchar: \"\\t\"";}else if(x===o.dz&&o.dd.checked){pd.optionString[4]="apiinchar: \"\\n\"";}else if(x===o.iy&&o.bb.checked){pd.optionString[5]="apicomments: indent";}else if(x===o.iz&&o.bb.checked){pd.optionString[5]="apicomments: noindent";}else if(x===o.js&&o.bb.checked){pd.optionString[6]="apiindent: allman";}else if(x===o.jt&&o.bb.checked){pd.optionString[6]="apiindent: knr";}else if(x===o.jd&&o.dd.checked){pd.optionString[6]="apiindent: allman";}else if(x===o.je&&o.dd.checked){pd.optionString[6]="apiindent: knr";}else if(x===o.is&&o.bb.checked){pd.optionString[7]="apistyle: indent";}else if(x===o.it&&o.bb.checked){pd.optionString[7]="apistylet: noindent";}else if(x===o.id&&o.dd.checked){pd.optionString[7]="apistyle: indent";}else if(x===o.ie&&o.dd.checked){pd.optionString[7]="apistyle: noindent";}else if(x===o.hy&&o.bb.checked){pd.optionString[8]="apihtml: html-yes";}else if(x===o.hz&&o.bb.checked){pd.optionString[8]="apihtml: html-no";}else if(x===o.hm&&o.mm.checked){pd.optionString[8]="apihtml: html-yes";}else if(x===o.hn&&o.mm.checked){pd.optionString[8]="apihtml: html-no";}else if(x===o.hd&&o.dd.checked){pd.optionString[8]="apihtml: html-yes";}else if(x===o.he&&o.dd.checked){pd.optionString[8]="apihtml: html-no";}else if(x===o.context){if(o.context.value===""||isNaN(Number(o.context.value))){pd.optionString[9]="apicontext: \"\"";}else{pd.optionString[9]="apicontext: "+o.context.value;}}else if(x===o.du){pd.optionString[10]="apicontent: true";}else if(x===o.dx){pd.optionString[10]="apicontent: false";}else if(x===o.dr){pd.optionString[11]="apiquote: false";}else if(x===o.dy){pd.optionString[11]="apiquote: true";}else if(x===o.dm){pd.optionString[12]="apisemicolon: false";}else if(x===o.dn){pd.optionString[12]="apisemicolon: true";}else if(x===o.inline){pd.optionString[13]="apidiffview: inline";}else if(x===o.sideby){pd.optionString[13]="apidiffview: sidebyside";}else if(x===o.bl){pd.optionString[14]="apisourcelabel: "+o.bl.value;}else if(x===o.nl){pd.optionString[15]="apidifflabel: "+o.nl.value;}else if(x===o.mb){pd.optionString[16]="apitopcoms: false";}else if(x===o.mc){pd.optionString[16]="apitopcoms: true";}else if(x===o.sh&&o.sh.innerHTML==="Visually Show Options"){pd.webtool[0]="showhide: hide";}else if(x===o.sh){pd.webtool[0]="showhide: show";}else if(x===o.dp){pd.webtool[1]="display: horizontal";}else if(x===o.dt){pd.webtool[1]="display: vertical";}else if(x===o.ps&&o.ps.checked){pd.webtool[2]="diffsave: true";}else if(x===o.ps){pd.webtool[2]="diffsave: false";}o.option.innerHTML=("/*prettydiff.com "+(pd.optionString.join(", ").replace(/(\,\s+\,\s+)+/g,", ")+" */").replace(/((\,? )+\*\/)$/," */")).replace(/^(\/\*prettydiff\.com (\, )+)/,"/*prettydiff.com ").replace(/(\,\s+\,\s+)+/g,", ");if(pd.optionString[0]===""||pd.optionString[0]===undefined){if(o.bb.checked){pd.optionString[0]="apimode: beautify";}else if(o.mm.checked){pd.optionString[0]="apimode: minify";}else{pd.optionString[0]="apimode: diff";}document.cookie="webtool="+encodeURIComponent(pd.optionString.concat(pd.webtool).join("prettydiffcsep").replace(/%/g,"prettydiffper"))+"; expires=Mon, 27 Jul 2099 11:11:11 UTC";pd.optionString[0]="";}else{document.cookie="webtool="+encodeURIComponent(pd.optionString.concat(pd.webtool).join("prettydiffcsep").replace(/%/g,"prettydiffper"))+"; expires=Mon, 27 Jul 2099 11:11:11 UTC";}},reset:function(){"use strict";document.cookie="";pd.optionString=[];o.op.style.display="block";o.bops.style.display="block";o.dops.style.display="none";o.mops.style.display="none";o.csvp.style.display="none";o.bd.style.display="block";o.bt.style.display="none";o.nt.style.display="none";o.md.style.display="none";o.bt.className="diffwide";o.nt.className="diffwide";o.bd.className="wide";o.md.className="wide";o.pt.disabled=true;o.bb.checked=true;o.au.checked=true;o.dp.checked=true;o.option.value="/*prettydiff.com */";o.sh.innerHTML="Visually Hide Options";o.bq.value="4";o.bc.value="";o.bc.disabled=true;o.bs.checked=true;o.je.checked=true;o.is.checked=true;o.hz.checked=true;o.ds.checked=true;o.dc.value="";o.dc.disabled=true;o.mb.checked=true;o.ps.checked=false;o.context.value="";o.dq.value="4";o.dx.checked=true;o.dr.checked=true;o.dm.checked=true;o.sideby.checked=true;o.he.checked=true;o.hn.checked=true;o.id.checked=true;o.jt.checked=true;},reload:function(){"use strict";var a,b,c,d,f,g,h;if(document.cookie){a=decodeURIComponent(document.cookie.split(";")[0]).replace(/prettydiffper/g,"%").replace(/^(webtool=)/,"").split("prettydiffcsep");c=a.length;for(b=0;b<c;b+=1){d=a[b].split(": ");if(d[1]){f=d[1].charAt(0);g=d[1].length-1;h=d[1].charAt(d[1].length-2);if((f==="\""||f==="'")&&f===d[1].charAt(g)&&h!=="\\"){d[1]=d[1].substring(1,g);}if(d[0]==="apimode"){if(d[1]==="minify"){o.mm.checked=true;o.mx.setAttribute("name","paste_code");o.bx.removeAttribute("name");o.bd.style.display="none";o.md.style.display="block";o.bops.style.display="none";if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}}else if(d[1]==="diff"){o.dd.checked=true;o.pt.disabled=false;o.bd.style.display="none";o.bt.style.display="block";o.nt.style.display="block";o.dops.style.display="block";o.bops.style.display="none";o.mops.style.display="none";if(o.pt.checked||o.cv.checked){o.db.style.display="none";}else{o.db.style.display="block";}if(o.au.checked){o.ind.style.display="block";o.htd.style.display="block";}else{o.ind.style.display="none";o.htd.style.display="none";}}else{o.bb.checked=true;o.dops.style.display="none";o.mops.style.display="none";if(o.au.checked){o.ins.style.display="block";o.ht.style.display="block";o.bops.style.display="block";}else{o.ins.style.display="none";o.ht.style.display="none";o.bops.style.display="none";}}}else if(d[0]==="apilang"){if(d[1]==="csv"||d[1]==="text"){o.db.style.display="none";o.bops.style.display="none";o.mops.style.display="none";if(o.dd.checked){o.dops.style.display="block";}if(d[1]==="csv"){o.cv.checked=true;}else{o.pt.checked=true;}}else{o.au.checked=true;}}else if(d[0]==="apicsvchar"){o.ch.value=d[1];}else if(d[0]==="apiinsize"){o.bq.value=d[1];o.dq.value=d[1];}else if(d[0]==="apiinchar"){if(d[1]===" "){o.bs.checked=true;o.ds.checked=true;o.bc.value="";o.dc.value="";}else if(d[1]==="\\t"){o.ba.checked=true;o.da.checked=true;o.bc.value="";o.dc.value="";}else if(d[1]==="\\n"){o.bn.checked=true;o.dz.checked=true;o.bc.value="";o.dc.value="";}else{o.bw.checked=true;o.dw.checked=true;o.bc.value=d[1];o.dc.value=d[1];}}else if(d[0]==="apicomments"&&d[1]==="noindent"){o.iz.checked=true;}else if(d[0]==="apiindent"&&d[1]==="allman"){o.jd.checked=true;o.js.checked=true;}else if(d[0]==="apistyle"&&d[1]==="noindent"){o.ie.checked=true;o.it.checked=true;}else if(d[0]==="apihtml"&&d[1]==="html-yes"){o.hd.checked=true;o.hm.checked=true;o.hy.checked=true;}else if(d[0]==="apicontent"&&!isNaN(d[1])){o.context.value=d[1];}else if(d[0]==="apicontent"&&d[1]==="true"){o.du.checked=true;}else if(d[0]==="apiquote"&&d[1]==="true"){o.dy.checked=true;}else if(d[0]==="apisemicolon"&&d[1]==="true"){o.dn.checked=true;}else if(d[0]==="apidiffview"&&d[1]==="inline"){o.inline.checked=true;}else if(d[0]==="apisourcelabel"){o.bl.value=d[1];}else if(d[0]==="apidifflabel"){o.nl.value=d[1];}else if(d[0]==="apitopcoms"&&d[1]==="true"){o.mc.checked=true;}else if(d[0]==="showhide"&&d[1]==="hide"){o.op.style.display="none";o.bops.style.display="none";o.dops.style.display="none";o.mops.style.display="none";o.sh.innerHTML="Visually Show Options";}else if(d[0]==="display"&&d[1]==="vertical"){o.dt.checked=true;o.bt.className="difftall";o.nt.className="difftall";o.bd.className="tall";o.md.className="tall";}else if(d[0]==="diffsave"&&d[1]==="true"){o.ps.checked=true;}}}if(o.cv.checked){o.csvp.style.display="block";}if(o.cv.checked||o.pt.checked){o.db.style.display="none";}if(o.bw.checked){o.bc.style.backgroundColor="#eef8ff";}if(o.dw.checked){o.dc.style.backgroundColor="#eef8ff";}}else{o.bb=$('modebeautify');o.dd=$('modediff');o.mm=$('modeminify');o.au=$('ctype-auto');if(o.cv.checked){o.csvp.style.display="block";}if(o.mm.checked){o.mx.setAttribute("name","paste_code");o.bx.removeAttribute("name");o.bd.style.display="none";o.md.style.display="block";o.bops.style.display="none";if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}}else if(o.dd.checked){o.bd.style.display="none";o.bt.style.display="block";o.nt.style.display="block";o.dops.style.display="block";o.bops.style.display="none";o.mops.style.display="none";if(o.pt.checked||o.cv.checked){o.db.style.display="none";}else{o.db.style.display="block";}if(o.au.checked){o.ind.style.display="block";o.htd.style.display="block";}else{o.ind.style.display="none";o.htd.style.display="none";}}else if(o.bb.checked){o.dops.style.display="none";o.mops.style.display="none";if(o.au.checked){o.ins.style.display="block";o.ht.style.display="block";o.bops.style.display="block";}else{o.ins.style.display="none";o.ht.style.display="none";o.bops.style.display="none";}}if(o.dt.checked){o.bt.className="difftall";o.nt.className="difftall";o.bd.className="tall";o.md.className="tall";}if(o.bw.checked){o.bc.style.background="#eef8ff";}if(o.dw.checked){o.dc.style.background="#eef8ff";}}}};