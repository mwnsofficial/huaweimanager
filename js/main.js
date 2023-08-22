var appVersion = "8";
var link = '';
var is4G = false;
var is4Gplus = false;
var is2G = false;
var is3G = false;
var is5G = false;
var is5GPoint = false;
var is5GSA = false;
var isBit = true;
var isBits = false;
var isLongID = false;
var havename = false;
var haveread = false;
var nroption = '';
var rscp = 0;
var smsCount;
var intervalID;
var cid = '';
var arfcn = '';
var band = [1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 28, 29, 30, 31, 32, 34, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53];

var b1 = 0x1; var b2 = 0x2; var b3 = 0x4; var b4 = 0x8; var b5 = 0x10; var b7 = 0x40; var b8 = 0x80; var b11 = 0x400; var b12 = 0x800; var b13 = 0x1000; var b14 = 0x2000; var b17 = 0x10000; var b18 = 0x20000; var b19 = 0x40000; var b20 = 0x80000; var b21 = 0x100000; var b24 = 0x800000; var b25 = 0x1000000; var b26 = 0x2000000; var b28 = 0x8000000; var b29 = 0x10000000; var b30 = 0x20000000; var b31 = 0x40000000; var b32 = 0x80000000; var b34 = 0x200000000; var b37 = 0x1000000000; var b38 = 0x2000000000; var b39 = 0x4000000000; var b40 = 0x8000000000; var b41 = 0x10000000000; var b42 = 0x20000000000; var b43 = 0x40000000000; var b44 = 0x80000000000; var b46 = 0x200000000000; var b47 = 0x400000000000; var b48 = 0x800000000000; var b49 = 0x1000000000000; var b50 = 0x2000000000000; var b51 = 0x4000000000000; var b52 = 0x8000000000000; var b53 = 0x10000000000000;

yb = 1208925819614629174706176; zb = 1180591620717411303424; eb = 1152921504606846976; pb = 1125899906842624; tb = 1099511627776; gb = 1073741824; mb = 1048576; kb = 1024;

function Main() {
Status();
DeviceBoot();
Signal();
DeviceInfo();
Plmn();
PlmnPh();
check_notifications();
NetMode();
Traffic();
monthlytraffic();
if (haveread == false) {
ReadHardBand();
ReadBand();
haveread = true;
}
}

var find = function(xml, tag) {
return $(xml).find(tag).first().text();
}

function arfcntoband(arfcn) {
if (arfcn > 422000 && arfcn < 434000) return '1';
if (arfcn > 386000 && arfcn < 398000) return '2';
if (arfcn > 361000 && arfcn < 376000) return '3';
if (arfcn > 173800 && arfcn < 178800) return '5';
if (arfcn > 524000 && arfcn < 538000) return '7';
if (arfcn > 185000 && arfcn < 192000) return '8';
if (arfcn > 145800 && arfcn < 149200) return '12';
if (arfcn > 158200 && arfcn < 164200) return '20';
if (arfcn > 151600 && arfcn < 153600) return '28';
if (arfcn > 460000 && arfcn < 480000) return '40';
if (arfcn > 499200 && arfcn < 537999) return '41';
if (arfcn > 434000 && arfcn < 440000) return '66';
if (arfcn > 620000 && arfcn < 653333) return '78';
if (arfcn > 620000 && arfcn < 680000) return '77';
if (arfcn > 693334 && arfcn < 733333) return '79';
}

function Traffic() {
$.get(link + 'api/monitoring/traffic-statistics', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
$('#time').html(getTime($xml.find('CurrentConnectTime').text()));
if (isBit == true) {
$('#CurrentDownloadRate').html(dataCon($xml.find('CurrentDownloadRate').text(), '1','1'));
CurrentDownloadRate = strA($xml.find('CurrentDownloadRate').text(), '1','1');
$("#CurrentDownloadRate").css('background', colortraffic(CurrentDownloadRate, -800000, 10, 50000, 500000, 2500000, 5000000, 10000000, 22000000)).css('padding','1px 3px 1px 3px').css('border','0.5px solid rgb(255, 255, 255)').css('border-radius','0.5em');
$('#CurrentUploadRate').html(dataCon($xml.find('CurrentUploadRate').text(), '1','1'));
CurrentUploadRate = strA($xml.find('CurrentUploadRate').text(), '1','1');
$("#CurrentUploadRate").css('background', colortraffic(CurrentUploadRate, -800000, 10, 50000, 500000, 2500000, 5000000, 10000000, 15000000)).css('padding','1px 3px 1px 3px').css('border','0.5px solid rgb(255, 255, 255)').css('border-radius','0.5em');
} else {
$('#CurrentDownloadRate').html(dataCon($xml.find('CurrentDownloadRate').text(), '1','0'));
CurrentDownloadRate = strA($xml.find('CurrentDownloadRate').text(), '1','0');
$("#CurrentDownloadRate").css('background', colortraffic(CurrentDownloadRate, -800000, 10, 50000, 500000, 2500000, 5000000, 10000000, 22000000)).css('padding','1px 3px 1px 3px').css('border','0.5px solid rgb(255, 255, 255)').css('border-radius','0.5em');
$('#CurrentUploadRate').html(dataCon($xml.find('CurrentUploadRate').text(), '1','0'));
CurrentUploadRate = strA($xml.find('CurrentUploadRate').text(), '1','0');
$("#CurrentUploadRate").css('background', colortraffic(CurrentUploadRate, -800000, 10, 50000, 500000, 2500000, 5000000, 10000000, 15000000)).css('padding','1px 3px 1px 3px').css('border','0.5px solid rgb(255, 255, 255)').css('border-radius','0.5em');
}
if (isBits == true) {
$('#CurrentDownloadRates').html(dataCon($xml.find('CurrentDownloadRate').text(), '1','1'));
$('#CurrentUploadRates').html(dataCon($xml.find('CurrentUploadRate').text(), '1','1'));
} else {
$('#CurrentDownloadRates').html(dataCon($xml.find('CurrentDownloadRate').text(), '1','0'));
$('#CurrentUploadRates').html(dataCon($xml.find('CurrentUploadRate').text(), '1','0'));
}
$('#CurrentDownload').html(dataCon($xml.find('CurrentDownload').text(), '0','0'));
$('#CurrentUpload').html(dataCon($xml.find('CurrentUpload').text(), '0','0'));

var downs = $xml.find('CurrentDownload').text() * 1;
var ups = $xml.find('CurrentUpload').text() * 1;
$('#Tupdown').html(dataCon(ups + downs, 0, 0));
$('#TotalConnectTime').html(getTime1($xml.find('TotalConnectTime').text()));

var up = $xml.find('TotalUpload').text() * 1;
var down = $xml.find('TotalDownload').text() * 1;
$('#up').html(dataCon(up, 0, 0));
$('#down').html(dataCon(down, 0, 0));
$('#Tlupdown').html(dataCon(up + down, 0, 0));
window.clearTimeout(intervalID);
intervalID = window.setTimeout(Main, 300);
})
}

function monthlytraffic() {
$.get(link + 'api/monitoring/month_statistics', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
$('#MonthDuration').html(getTime1($xml.find('MonthDuration').text()));
$('#MonthDurationn').html(getTime1($xml.find('MonthDuration').text()));
$('#MonthLastClearTime').html($xml.find('MonthLastClearTime').text());
$('#MonthLastClearTimee').html($xml.find('MonthLastClearTime').text());

var ups = $xml.find('CurrentMonthUpload').text() * 1;
var downs = $xml.find('CurrentMonthDownload').text() * 1;
$('#updownmonthly').html(dataCon1(ups + downs) + "");

var up = $xml.find('CurrentMonthUpload').text() * 1;
var down = $xml.find('CurrentMonthDownload').text() * 1;
$('#updownmonthlyy').html(dataCon1(up + down) + "");
window.clearTimeout(intervalID);
intervalID = window.setTimeout(Main, 300);
})
}

function DeviceBoot() {
$.get(link + 'api/device/boot_time', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
if ($xml.find('boot_time').text() == "") {
$(".bootT").css('display','none');
} else {
$(".bootT").css('display','');
$('#bootTime').html($xml.find('boot_time').text().replace('[','').replace(']:[',':').replace(']:[',':').replace(']',''));
}
})
}

function Signal() {
$.get(link + 'api/net/cell-info', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
if ($xml.find('cellinfo').text() == "") {
$(".celi").css('display','none');
} else {
$(".celi").css('display','');
$('#celinf').html($xml.find('cellinfo').text());
}
if ($xml.find('lac').text() == "") {
$(".laci").css('display','none');
} else {
$(".laci").css('display','');
$('#lacinf').html($xml.find('lac').text());
}
})
$.ajax({url: link + 'api/device/signal',headers: { "__RequestVerificationToken": Token },success: function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
cid = $xml.find('cell_id').text();
mode = $xml.find('mode').text();
$('#moden').html(mode);
var hex = Number(cid).toString(16);
var rssi, rsrp, rsrq, sinr, rsrqRB;
//-------------------------------------4G--------------------------------------------------
if (is4G == true || is4Gplus == true) {
var hex2 = hex.substring(0, hex.length - 2);
var enbid = parseInt(hex2, 16);
var hex3 = hex.substring(hex.length - 2, hex.length);
var shortcid = parseInt(hex3, 16);
if (isLongID == true) {
$('#enbi').html(parseInt(hex, 16));
} else {
$('#enbi').html(enbid + '/' + shortcid);
}
$('.enbi1').html('eNBID/Cell');
$(".sig3g").css('display','none');
$(".rfmargin").css('display','');
$(".rfRBBrsrq").css('display','none');
$('.tlac').html('TAC');
$('.tarfcn').html('4G-Earfcn');
$('.set').html('4G');
$('.txt').html('4G-TxPower');
$(".nei_cell").css('display','');
$(".ballow").css('display','');

if ($xml.find('pci').text() == "") {
$(".pcit").css('display','none');
} else {
$(".pcit").css('display','');
$('#pci').html($xml.find('pci').text());
}
if ($xml.find('cell_id').text() == "") {
$(".cel-id").css('display','none');
$(".enbi1").css('display','none');
$(".enbi2").css('display','none');
} else {
$(".cel-id").css('display','');
$(".enbi1").css('display','');
$(".enbi2").css('display','');
$('#ceid').html(cid);
}
if ($xml.find('tac').text() == "") {
$(".tlac").css('display','none');
$(".tlac1").css('display','none');
} else {
$(".tlac").css('display','');
$(".tlac1").css('display','');
$('#lac').html($xml.find('tac').text());
}
var lufreq = $xml.find('lteulfreq').text();
var ldfreq = $xml.find('ltedlfreq').text();
if ($xml.find('ltedlfreq').text() == "") {
$(".4ulf").css('display', 'none');
} else if ($xml.find('ltedlfreq').text() == "0") {
$(".4ulf").css('display', 'none');
} else {
$(".4ulf").css('display', '');
$('#ludfreq').html('DL: ' + ldfreq + '  ' + 'UL: ' + lufreq);
}
var arfcn = $xml.find('earfcn').text().replace('DL:','DL: ').replace('UL:',' UL: ');
if ($xml.find('earfcn').text() == "") {
$(".earf4g").css('display', 'none');
} else if ($xml.find('earfcn').text() == "DL:0 UL:0") {
$(".earf4g").css('display', 'none');
} else if ($xml.find('earfcn').text() == "DL: UL:") {
$(".earf4g").css('display', 'none');
} else {
$(".earf4g").css('display', '');
$('#arfcn').html(arfcn);
}

rssi = strA($xml.find('rssi').text().replace('dBm',''));
$('#rssi').html($xml.find('rssi').text().replace('dBm',' dBm').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#rssireading").css('background', colorrssi(rssi, -124, -110, -95, -85, -75, -51));
rsrp = strA($xml.find('rsrp').text().replace('dBm',''));
$('#rsrp').html($xml.find('rsrp').text().replace('dBm',' dBm').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#rsrpreading").css('background', colorrsrp(rsrp, -124, -110, -95, -85, -75, -51));
rsrq = strA($xml.find('rsrq').text().replace('dB',''));
$('#rsrq').html($xml.find('rsrq').text().replace('dB',' dB').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#rsrqreading").css('background', colorrsrq(rsrq, -30, -20, -15, -10, -6, 0));
sinr = strA($xml.find('sinr').text().replace('dB',''));
$('#sinr').html($xml.find('sinr').text().replace('dB',' dB').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#sinrreading").css('background', colorsinr(sinr, -15, 3, 10, 15, 22, 30));
$('#marginrf').html(($xml.find('rsrp').text().replace('dBm', '').replace('-', '')) - ($xml.find('rssi').text().replace('dBm', '').replace('-', '')) + " dBm");
$("#rfreading").css('background', colorFR((rsrp - rssi), -30, -29, -28, -27, -26, -25, -24, 10));
}

//-------------------------------------3G--------------------------------------------------
if (is3G == true) {
var hex2 = hex.substring(0, hex.length - 4);
var enbid = parseInt(hex2, 16);
var hex3 = hex.substring(hex.length - 4, hex.length);
var shortcid = parseInt(hex3, 16);
if (isLongID == true) {
$('#enbi').html(parseInt(hex, 16));
} else {
$('#enbi').html(enbid + '/' + shortcid);
}
$('.enbi1').html('RNCID/Cell');
$(".sig4g").css('display','none');
$(".rfRBBecio").css('display','');
$('.tlac').html('RAC');
$('.tarfcn').html('3G-Uarfcn');
$('.set').html('3G');
$('.txt').html('3G-TxPower');
$(".ballow").css('display','none');
$("#arfcnreading").css('background','#008013');

if ($xml.find('sc').text() == "") {
$(".pcit").css('display','none');
} else {
$(".pcit").css('display','');
$('#pci').html($xml.find('sc').text());
}
if ($xml.find('cell_id').text() == "") {
$(".cel-id").css('display','none');
$(".enbi1").css('display','none');
$(".enbi2").css('display','none');
} else {
$(".cel-id").css('display','');
$(".enbi1").css('display','');
$(".enbi2").css('display','');
$('#ceid').html(cid);
}
if ($xml.find('rac').text() == "") {
$(".tlac").css('display','none');
$(".tlac1").css('display','none');
} else {
$(".tlac").css('display','');
$(".tlac1").css('display','');
$('#lac').html($xml.find('rac').text());
}
var arf3g = $xml.find('wdlfreq').text();
if ($xml.find('wdlfreq').text() == "") {
$(".earf4g").css('display','none');
} else {
$(".earf4g").css('display','');
$('#arfcn').html(arf3g);
}

rssi = strA($xml.find('rssi').text().replace('dBm',''));
$('#rssi').html($xml.find('rssi').text().replace('dBm',' dBm').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#rssireading").css('background', colorrssi(rssi, -124, -110, -95, -85, -75, -51));
rscp = strA($xml.find('rscp').text().replace('dBm',''));
$('#rscp').html($xml.find('rscp').text().replace('dBm',' dBm').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#rscpreading").css('background', colorrscp(rscp, -115, -100, -90, -80, -70, -60));
ecio = strA($xml.find('ecio').text().replace('dB',''));
$('#ecio').html($xml.find('ecio').text().replace('dB',' dB').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#ecioreading").css('background', colorecio(ecio, -20, -20, -15, -10, -5, 0));
}

//-------------------------------------2G--------------------------------------------------
if (is2G == true) {
$('.enbi1').html('Cell');
$('#enbi').html(cid);
$('.tlac').html('LAC');
$('.tarfcn').html('2G-Arfcn');
$('.set').html('2G');
$('.txt').html('2G-TxPower');
$(".sig3g").css('display','none');
$(".sig4g").css('display','none');
$(".ballow").css('display','none');
$("#arfcnreading").css('background','#008013');

if ($xml.find('bsic').text() == "") {
$(".pcit").css('display','none');
} else {
$(".pcit").css('display','');
$('#pci').html($xml.find('bsic').text());
}
if ($xml.find('cell_id').text() == "") {
$(".cel-id").css('display','none');
$(".enbi1").css('display','none');
$(".enbi2").css('display','none');
} else {
$(".cel-id").css('display','');
$(".enbi1").css('display','none');
$(".enbi2").css('display','none');
$('#ceid').html(cid);
}
if ($xml.find('lac').text() == "") {
$(".tlac").css('display','none');
$(".tlac1").css('display','none');
} else {
$(".tlac").css('display','');
$(".tlac1").css('display','');
$('#lac').html($xml.find('lac').text());
}
if ($xml.find('rac').text() == "") {
$(".tlac2g").css('display','none');
} else {
$(".tlac2g").css('display','');
$('#lac2g').html($xml.find('rac').text());
}
if ($xml.find('rxlev').text() == "") {
$(".rxlev2g").css('display','none');
} else {
$(".rxlev2g").css('display','');
$('#rxlev').html($xml.find('rxlev').text());
}
var arf2g = $xml.find('arfcn').text();
if ($xml.find('arfcn').text() == "") {
$(".earf4g").css('display','none');
} else {
$(".earf4g").css('display','');
$('#arfcn').html(arf2g);
}

rssi = strA($xml.find('rssi').text().replace('dBm',''));
$('#rssi').html($xml.find('rssi').text().replace('dBm',' dBm').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#rssireading").css('background', colorrssi(rssi, -112, -100, -95, -85, -75, -51));
rxlev = strA($xml.find('rxlev').text().replace('dBm',''));
$('#rxlev').html($xml.find('rxlev').text().replace('dBm',' dBm').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#rxlevreading").css('background', colorrxlev(rxlev, -113, -100, -90, -80, -70, -47));
}


//-------------------------------------2/3/4G--------------------------------------------------
if ($xml.find('nei_cellid').text() == "") {
$('#nei_cellid').html('N/A');
} else {
var nei = $xml.find('nei_cellid').text();
while (nei.indexOf('No') > -1) {
nei = nei.replace('No',', ');
}
nei = nei.slice(1);
$('#nei_cellid').html(nei);
}

if ($xml.find('ims').text() == "") {
$(".i29").css('display','none');
} else {
$(".i29").css('display','');
var ims = $xml.find('ims').text();
if (ims == '1') {
$('#ims').html('Terhubung');
} else if (ims == '0') {
$('#ims').html('Not Terhubung');
} else {
$('#ims').html('N/A');
}
}
if ($xml.find('rrc_status').text() == "") {
$(".i24").css('display','none');
} else {
$(".i24").css('display','');
var rrc = $xml.find('rrc_status').text();
if (rrc == '1') {
$('#rrc_status').html('Terhubung');
} else if (rrc == '0') {
$('#rrc_status').html('Not Terhubung');
} else {
$('#rrc_status').html('N/A');
}
}
if ($xml.find('transmode').text() == "") {
$(".i27").css('display','none');
} else {
$(".i27").css('display','');
$('#tm').html($xml.find('transmode').text());
}
if ($xml.find('enodeb_id').text() == "") {
$(".i33").css('display','none');
} else {
$(".i33").css('display','');
$('#enoid').html($xml.find('enodeb_id').text());
}
if ($xml.find('tdd').text() == "") {
$(".i30").css('display','none');
} else {
$(".i30").css('display','');
var tdd = $xml.find('tdd').text();
if (tdd == '') {
$('#tdd').html('N/A');
} else {
tdd = tdd.replace('SubframeAssign:','SA');
tdd = tdd.replace('SubframePatterns:','SP');
$('#tdd').html(tdd);
}
}
if ($xml.find('cqi0,cqi1').text() == "") {
$(".cqi01").css('display','none');
} else {
$(".cqi01").css('display','');

var cqi0;
var cqi1;
cqi0 = $xml.find('cqi0').text();
cqi1 = $xml.find('cqi1').text();
if (cqi0 != '' && cqi1 == '') {
$('#0cqi').html('N/A');
$('#1cqi').html('N/A');
} else {
$('#0cqi').html('DL0:' + cqi0).css('background', colorcqimcs1(cqi0, 2, 4, 7, 10, 13, 18));
$('#1cqi').html('DL1:' + cqi1).css('background', colorcqimcs2(cqi1, 2, 4, 7, 10, 13, 18));
}
}

if ($xml.find('dlbandwidth').text() == "") {
$(".dlbw4g").css('display','none');
} else {
$(".dlbw4g").css('display','');
}

var dlulbw = '';
var dbw = $xml.find('dlbandwidth').text();
var ubw = $xml.find('ulbandwidth').text();
if (dbw == '1400KHz') dbw = "1.4MHz";
if (ubw == '1400KHz') ubw = "1.4MHz";
if ($xml.find('dlbandwidth').text() == "20MHz") {
dlulbw = '100';
$("#dlulbandreading, #arfcnreading").css('background','#008013');
} else if ($xml.find('dlbandwidth').text() == "15MHz") {
dlulbw = '75';
$("#dlulbandreading, #arfcnreading").css('background','#00bb1c');
} else if ($xml.find('dlbandwidth').text() == "10MHz") {
dlulbw = '50';
$("#dlulbandreading, #arfcnreading").css('background','#c97f00');
} else if ($xml.find('dlbandwidth').text() == "5MHz") {
dlulbw = '25';
$("#dlulbandreading, #arfcnreading").css('background','#ebb400');
} else {
$("#dlulbandreading, #arfcnreading").css('background','#ffe600');
}
$('#dlulbandwidth').html('DL: ' + dbw + '  ' + 'UL: ' + ubw + ' (' + dlulbw + '%)');

if ($xml.find('band').text() != '' && $xml.find('band').text() != '0') {
$('#bandB').html('B' + $xml.find('band').text());
$(".bband").css('display','');
} else {
$(".bband").css('display','none');
}

var dlfrequency = $xml.find('dlfrequency').text().replace('kHz', '');
var dlfreq = Math.floor(dlfrequency / 1000);
console.log(dlfreq);
var ulfrequency = $xml.find('ulfrequency').text().replace('kHz','');
var ulfreq = Math.floor(ulfrequency / 1000);
console.log(ulfreq);
if ($xml.find('dlfrequency').text() == "") {
$(".dlfreq4g").css('display', 'none');
} else if ($xml.find('dlfrequency').text() == "0kHz") {
$(".dlfreq4g").css('display', 'none');
} else if ($xml.find('dlfrequency').text() == "kHz") {
$(".dlfreq4g").css('display', 'none');
} else {
$(".dlfreq4g").css('display', '');
$('#dlulfrequency').html('DL: ' + dlfreq + 'MHz' + '  ' + 'UL: ' + ulfreq + 'MHz');
}

var dlmcs = $xml.find('dl_mcs').text();
var dlmcs0 = $xml.find('dl_mcs').text().slice(21, dlmcs.indexOf(' '));
var dlmcs1 = $xml.find('dl_mcs').text().slice(dlmcs.indexOf('Code1:') + 6);
if (dlmcs == '') {
$(".mcstbs4g").css('display','none');
} else {
$(".mcstbs4g").css('display','');
$('#dlmcs0').html('DL0:' + dlmcs0);
$('#dlmcs1').html('DL1:' + dlmcs1);
$("#dlmcs0reading").css('background', colorcqimcs2(dlmcs0, 4, 8, 12, 20, 25, 32));
$("#dlmcs1reading").css('background', colorcqimcs1(dlmcs1, 4, 8, 12, 20, 25, 32));
}
var ul_mcs = $xml.find('ul_mcs').text().replace('mcsUpCarrier1:','');
$('#ulmcs').html('UL:' + ul_mcs);
$("#ulmcsreading").css('background', colorcqimcs1(ul_mcs, 4, 8, 12, 20, 25, 28));

var ultbs;
if (ul_mcs >= 0 && ul_mcs <= 9) {ultbs = ul_mcs;}
else if (ul_mcs >= 10 && ul_mcs <= 16) {ultbs = ul_mcs - 1;}
else if (ul_mcs >= 17 && ul_mcs <= 31) {ultbs = ul_mcs - 2;}
else {ultbs = 'Out';}
$('#ultbs').html('UL:' + ultbs);
$("#ultbsreading").css('background', colorcqimcs2(ultbs, 4, 8, 12, 20, 25, 28));

var dltbs0;
var dltbs1;
if (dlmcs0 >= 0 && dlmcs0 <= 4) {QAM0 = 'QPSK';$("#QAM0").css('background', '#ff7300');}
else if (dlmcs0 >= 5 && dlmcs0 <= 10) {QAM0 = '16QAM';$("#QAM0").css('background', '#e0ac00');}
else if (dlmcs0 >= 11 && dlmcs0 <= 19) {QAM0 = '64QAM';$("#QAM0").css('background', '#e28f00');}
else if (dlmcs0 >= 20 && dlmcs0 <= 27) {QAM0 = '256QAM';$("#QAM0").css('background', '#008013');}
else if (dlmcs0 == 28) {QAM0 = 'QPSK';$("#QAM0").css('background', '#ff7300');}
else if (dlmcs0 == 29) {QAM0 = '16QAM';$("#QAM0").css('background', '#e0ac00');}
else if (dlmcs0 == 30) {QAM0 = '64QAM';$("#QAM0").css('background', '#e28f00');}
else if (dlmcs0 == 31) {QAM0 = '256QAM';$("#QAM0").css('background', '#008013');}
else {QAM0 = 'Out';$("#QAM0").css('background', '#aa0000');}

if (dlmcs1 >= 0 && dlmcs1 <= 4) {QAM1 = 'QPSK';$("#QAM1").css('background', 'teal');}
else if (dlmcs1 >= 5 && dlmcs1 <= 10) {QAM1 = '16QAM';$("#QAM1").css('background', '#e0ac00');}
else if (dlmcs1 >= 11 && dlmcs1 <= 19) {QAM1 = '64QAM';$("#QAM1").css('background', '#e28f00');}
else if (dlmcs1 >= 20 && dlmcs1 <= 27) {QAM1 = '256QAM';$("#QAM1").css('background', '#008013');}
else if (dlmcs1 == 28) {QAM1 = 'QPSK';$("#QAM1").css('background', 'teal');}
else if (dlmcs1 == 29) {QAM1 = '16QAM';$("#QAM1").css('background', '#e0ac00');}
else if (dlmcs1 == 30) {QAM1 = '64QAM';$("#QAM1").css('background', '#e28f00');}
else if (dlmcs1 == 31) {QAM1 = '256QAM';$("#QAM1").css('background', '#008013');}
else {QAM1 = 'Out';$("#QAM1").css('background', '#aa0000');}

if (dlmcs0 == 0) {dltbs0 = dlmcs0;}
else if (dlmcs0 == 1) {dltbs0 = 2;}
else if (dlmcs0 == 2) {dltbs0 = 4;}
else if (dlmcs0 == 3) {dltbs0 = 6;}
else if (dlmcs0 == 4) {dltbs0 = 8;}
else if (dlmcs0 >= 5 && dlmcs0 <= 20) {dltbs0 = dlmcs0 - -5;}
else if (dlmcs0 >= 21 && dlmcs0 <= 27) {dltbs0 = dlmcs0 - -6;}
else if (dlmcs0 == 28) {dltbs0 = 8;}
else if (dlmcs0 == 29) {dltbs0 = 15;}
else if (dlmcs0 == 30) {dltbs0 = 24;}
else if (dlmcs0 == 31) {dltbs0 = 27;}
else {dltbs0 = 'Out';}

if (dlmcs1 == 0) {dltbs1 = dlmcs1;}
else if (dlmcs1 == 1) {dltbs1 = 2;}
else if (dlmcs1 == 2) {dltbs1 = 4;}
else if (dlmcs1 == 3) {dltbs1 = 6;}
else if (dlmcs1 == 4) {dltbs1 = 8;}
else if (dlmcs1 >= 5 && dlmcs1 <= 20) {dltbs1 = dlmcs1 - -5;}
else if (dlmcs1 >= 21 && dlmcs1 <= 27) {dltbs1 = dlmcs1 - -6;}
else if (dlmcs1 == 28) {dltbs1 = 8;}
else if (dlmcs1 == 29) {dltbs1 = 15;}
else if (dlmcs1 == 30) {dltbs1 = 24;}
else if (dlmcs1 == 31) {dltbs1 = 27;}
else {dltbs1 = 'Out';}

$('#QAM0').html(QAM0);
$('#QAM1').html(QAM1);
$('#dltbs0').html('DL0:' + dltbs0);
$("#dltbs0reading").css('background', colortbs2(dltbs0, -0, 4, 10, 16, 17, 31));
$('#dltbs1').html('DL1:' + dltbs1);
$("#dltbs1reading").css('background', colortbs1(dltbs1, -0, 4, 10, 16, 17, 31));

ecioRB = $xml.find('ecio').text();
ecioRB = parseInt(ecioRB.substring(0, ecioRB.length - 2));
ecioRB = (-3 - ecioRB) * 6, 06060606;
$('#RBBecio').html((100 - ecioRB) + ' %');
$("#RBBecioreading").css('background', colorRBecio(100 - ecioRB, 1, 4, 20, 36, 50, 60, 84));

rsrqRB = $xml.find('rsrq').text();
rsrqRB = parseInt(rsrqRB.substring(0, rsrqRB.length - 2));
rsrqPRB = (-3 - rsrqRB) * 6, 06060606;
RBBpp = (100 - rsrqPRB);
prb = (Math.round(RBBpp * dlulbw / 100));
$('#RBBrsrq').html(prb + ' RB');
$("#RBBrsrqreading").css('background', colorRBrsrq(RBBpp, 1, 4, 20, 36, 50, 60, 100));

if ($xml.find('txpower').text() == "") {
$(".tx").css('display','none');
} else {
$(".tx").css('display','');
}
var tx = $xml.find('txpower').text();
if (tx.indexOf('stxpwr') == -1) {
$('#tx').html($xml.find('txpower').text().replace('PPusch:','PPusch: ').replace('PPucch:','PPucch: ').replace('PSrs:','PSrs: ').replace('PPrach:','PPrach: ').replace('dBm',', ').replace('dBm',', ').replace('dBm',', ').replace('dBm',''));
tx=tx.slice(tx.indexOf('PPucch:')+7,tx.indexOf('PSrs:')-4);
$("#tx").css('background', colortxpower(tx, -20, 0, 5, 10, 20, 23));
} else {
$('#tx').html(tx.replace('dBm',' dBm').replace('stxpwr:','Stxpwr: '));
if (is3G == true) $("#tx").css('background', colortxpower(tx, -20, 0, 5, 10, 15, 23));
if (is2G == true) $("#tx").css('background', colortxpower(tx, 0, 5, 10, 20, 25, 33));
}

//-------------------------------------5G--------------------------------------------------
if ($xml.find('nrrsrp').text() != "") {
is5G = true;
$(".sig5g").css('display','');
} else {
is5G = false;
$(".sig5g").css('display','none');
$('#leftband').html('No service');
}
var nrarfcn = $xml.find('nrearfcn').text().replace('DL:','DL: ').replace('UL:',' UL: ');
if ($xml.find('nrearfcn').text() == "") {
$(".earf5g").css('display', 'none');
} else if ($xml.find('nrearfcn').text() == "DL:0 UL:0") {
$(".earf5g").css('display', 'none');
} else if ($xml.find('nrearfcn').text() == "DL: UL:") {
$(".earf5g").css('display', 'none');
} else {
$(".earf5g").css('display', '');
$('#nrerfcn').html(nrarfcn);
}
var hex2 = hex.substring(0, hex.length - 3);
var enbid = parseInt(hex2, 16);
var hex3 = hex.substring(hex.length - 3, hex.length);
var shortcid = parseInt(hex3, 16);
if (isLongID == true) {
$('#enbi').html(parseInt(hex, 16));
} else {
$('#enbi').html(enbid + '/' + shortcid);
}

rsrp = strA($xml.find('nrrsrp').text().replace('dBm',''));
$('#nrrsrp').html($xml.find('nrrsrp').text().replace('dBm',' dBm').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#nrrsrpreading").css('background', colornrrsrp(rsrp, -124, -115, -105, -95, -85, -85));
rsrq = strA($xml.find('nrrsrq').text().replace('dB',''));
$('#nrrsrq').html($xml.find('nrrsrq').text().replace('dB',' dB').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#nrrsrqreading").css('background', colornrrsrq(rsrq, -20, -20, -15, -10, -6, 0));
sinr = strA($xml.find('nrsinr').text().replace('dB',''));
$('#nrsinr').html($xml.find('nrsinr').text().replace('dB',' dB').replace('<','').replace('=','').replace('>','').replace('Unknown','0').replace('NaN','0'));
$("#nrsinrreading").css('background', colornrsinr(sinr, -10, 3, 10, 15, 22, 30));

var nrband = nrarfcn.slice(3, nrarfcn.indexOf(' UL:'));
if (nrband != '')
$('#bandNR').html("N" + arfcntoband(nrband));

var nrdl_mcs = $xml.find('nrdlmcs').text();
var nrdlmcs0 = $xml.find('nrdlmcs').text().slice(23, nrdl_mcs.indexOf(' '));
var nrdlmcs1 = $xml.find('nrdlmcs').text().slice(nrdl_mcs.indexOf('Code1:') + 6);
if (nrdl_mcs == '') {
$(".dlmcs5g").css('display','none');
} else {
$(".dlmcs5g").css('display','');
$('#nr0dlmcs').html('DL0:' + nrdlmcs0);
$('#nr1dlmcs').html('DL1:' + nrdlmcs1);
$("#nr0dlmcsreading").css('background', colorcqimcs2(nrdlmcs0, 4, 8, 12, 20, 25, 32));
$("#nr1dlmcsreading").css('background', colorcqimcs1(nrdlmcs1, 4, 8, 12, 20, 25, 32));
}
var nrul_mcs = $xml.find('nrulmcs').text().replace('NRmcsUpCarrier1:','');
$('#nrulmcs').html('UL:' + nrul_mcs);
$("#nrulmcsreading").css('background', colorcqimcs1(nrul_mcs, 4, 8, 12, 20, 25, 32));

var ndlf = $xml.find('nrdlfreq').text();
var nulf = $xml.find('nrulfreq').text();
if ($xml.find('nrdlfreq').text() == "") {
$(".dlfreq5g").css('display', 'none');
} else if ($xml.find('nrdlfreq').text() == "0kHz") {
$(".dlfreq5g").css('display', 'none');
} else if ($xml.find('nrdlfreq').text() == "kHz") {
$(".dlfreq5g").css('display', 'none');
} else {
$(".dlfreq5g").css('display', '');
$('#nrdlulfreq').html('DL: ' + ndlf + '  ' + 'UL: ' + nulf);
}

if ($xml.find('nrtxpower').text() == "") {
$(".nrtx").css('display','none');
} else {
$(".nrtx").css('display','');
}
var nrtx = $xml.find('nrtxpower').text();
$('#nrtx').html($xml.find('nrtxpower').text().replace('PPusch:','PPusch: ').replace('PPucch:','PPucch: ').replace('PSrs:','PSrs: ').replace('PPrach:','PPrach: ').replace('dBm',', ').replace('dBm',', ').replace('dBm',', ').replace('dBm',''));
nrtx=nrtx.slice(nrtx.indexOf('PPucch:')+7,nrtx.indexOf('PSrs:')-4);
$("#nrtxreading").css('background', colornrtxpower(nrtx, -20, 0, 5, 10, 20, 23));

if ($xml.find('nrdlbandwidth').text() == "") {
$(".dlbw5g").css('display','none');
} else {
$(".dlbw5g").css('display','');
}

var nrdlulbw = '';
var nrdbw = $xml.find('nrdlbandwidth').text();
var nrubw = $xml.find('nrulbandwidth').text();
if ($xml.find('nrdlbandwidth').text() == "100MHz") {
nrdlulbw = '100';
$("#nrdlulbandreading, #nrarfcnreading").css('background','#008013');
} else if ($xml.find('nrdlbandwidth').text() == "80MHz") {
nrdlulbw = '75';
$("#nrdlulbandreading, #nrarfcnreading").css('background','#00bb1c');
} else if ($xml.find('nrdlbandwidth').text() == "60MHz") {
nrdlulbw = '50';
$("#nrdlulbandreading, #nrarfcnreading").css('background','#c97f00');
} else if ($xml.find('nrdlbandwidth').text() == "40MHz") {
nrdlulbw = '25';
$("#nrdlulbandreading, #nrarfcnreading").css('background','#ebb400');
} else {
$("#nrdlulbandreading, #nrarfcnreading").css('background','#ffe600');
}
$('#nrdlulbandwidth').html('DL: ' + nrdbw + '  ' + 'UL: ' + nrubw + ' (' + nrdlulbw + '%)');
}
})
}

function Blog() {
$.get('blogku',
}

function Status() {
$.get(link + 'api/monitoring/status', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
if (conMod($xml.find('ConnectionStatus').text()) == "Terhubung") {
$("#conn").css('background','#00bb1c').css('color','white');
$("#conne").css('background','#00bb1c').css('color','white');
$(".home1").css('display','');
$(".home2").css('display','none');
} else if (conMod($xml.find('ConnectionStatus').text()) == "Hubungkan") {
$("#conn").css('background','#c97f00').css('color','white');
$("#conne").css('background','#c97f00').css('color','white');
} else {
$("#conn").css('background','#aa0000').css('color','white');
$("#conne").css('background','#aa0000').css('color','white');
$(".home1").css('display','none');
$(".home2").css('display','');
}
$('#conn').html(conMod($xml.find('ConnectionStatus').text()));
$('#conne').html(conMod($xml.find('ConnectionStatus').text()));

if (netType($xml.find('CurrentNetworkTypeEx').text()) == '4G+ LTE CA') {
$("#mode").css('color','#007dff');
} else if (netType($xml.find('CurrentNetworkTypeEx').text()) == '4G LTE') {
$("#mode").css('color','#00bb1c');
} else {
$("#mode").css('color','#f3a5f3');
}
$('#mode').html(netType($xml.find('CurrentNetworkTypeEx').text()));

$('#roaming').html(($xml.find('RoamingStatus').text() == 0 ? "Disabled" : "Enabled"));

var signalicon = $xml.find('SignalIcon').text();
$("#signal1").css('background','#b7d9fe');
$("#signal2").css('background','#b7d9fe');
$("#signal3").css('background','#b7d9fe');
$("#signal4").css('background','#b7d9fe');
$("#signal5").css('background','#b7d9fe');
if (signalicon >= '1') $("#signal1").css('background','#db110d');
if (signalicon >= '2') $("#signal2").css('background','#db890d');
if (signalicon >= '3') $("#signal3").css('background','#dbc00d');
if (signalicon >= '4') $("#signal4").css('background','#0ddb1b');
if (signalicon >= '5') $("#signal5").css('background','#0db2db');
if ($xml.find('EndcStatus').text() == "1") {
is5GPoint = true;
} else {
is5GPoint = false;
}
if (is5G == true) {
signalicon = $xml.find('SignalIconNr').text();
$("#nrsignal1").css('background','#b7d9fe');
$("#nrsignal2").css('background','#b7d9fe');
$("#nrsignal3").css('background','#b7d9fe');
$("#nrsignal4").css('background','#b7d9fe');
$("#nrsignal5").css('background','#b7d9fe');
if (signalicon >= '1') $("#nrsignal1").css('background','#db110d');
if (signalicon >= '2') $("#nrsignal2").css('background','#db890d');
if (signalicon >= '3') $("#nrsignal3").css('background','#dbc00d');
if (signalicon >= '4') $("#nrsignal4").css('background','#0ddb1b');
if (signalicon >= '5') $("#nrsignal5").css('background','#0db2db');
}

if ($xml.find('PrimaryDns').text() == "") {
$(".i28").css('display','none');
} else {
$(".i28").css('display','');
$('#wanipv4dns').html($xml.find('PrimaryDns').text() + ' / ' + $xml.find('SecondaryDns').text());
}
if ($xml.find('PrimaryIPv6Dns').text() == "") {
$(".i26").css('display','none');
} else {
$(".i26").css('display','');
$('#wanipv6dns').html($xml.find('PrimaryIPv6Dns').text() + ' / ' + $xml.find('SecondaryIPv6Dns').text());
}
if ($xml.find('BatteryPercent').text() == "") {
$(".Batt").css('display','none');
} else {
$(".Batt").css('display','');
}
if ($xml.find('SimStatus').text() == '1') {
$(".SimStatus").css('display','none');
} else {
$('#conn').html("SIM Error").css('color','black');
$('#conne').html("SIM Error").css('color','black');
$(".SimStatus").css('display','');
$('#nsim').html("SIM Error");
}
if (smsCount == "0") {
$('#smsCounts').html("✉&emsp;" + "0").css('color','darkred');
$('#smsCounts1').html("0").css('color','darkred');
$('#smsCounts2').html("✉&emsp;" + "0").css('color','darkred');
$('#smsCounts3').html("0").css('color','darkred');
} else {
$('#smsCounts').html("✉&emsp;" + smsCount).css('color','orange');
$('#smsCounts1').html(smsCount).css('color','orange');
$('#smsCounts2').html("✉&emsp;" + smsCount).css('color','orange');
$('#smsCounts3').html(smsCount).css('color','orange');
}

if ($xml.find('CurrentWifiUser').text() == "0") {
$("#wifiuser").css('background','red').css('border','0.5px solid rgb(255, 255, 255)');
} else {
$("#wifiuser").css('background','green').css('border','0.5px solid rgb(255, 255, 255)');
}

if ($xml.find('currenttotalwifiuser').text() == '') {
$('#wifiuser').html($xml.find('CurrentWifiUser').text()).css('padding','1.3px 3px 2px 3px').css('border','0.5px solid rgb(255, 255, 255)');
} else {
$('#wifiuser').html($xml.find('CurrentWifiUser').text() + '/' + $xml.find('currenttotalwifiuser').text()).css('border','0.5px solid rgb(255, 255, 255)');
}

if ($xml.find('currenttotalwifiuser').text() == "0") {
$('#wifiuser').html("Users").css('background','red').css('border','0.5px solid rgb(255, 255, 255)');
}

if ($xml.find('BatteryPercent').text() != '') {
strbattery = $xml.find('BatteryPercent').text() + '%';
if ($xml.find('usbup').text() == '1') {
strbattery = strbattery + '\u26A1';
} else if ($xml.find('BatteryStatus').text() == '1') {
strbattery = strbattery + '\u26A1';
}
$("#battery").css('background', colorbattery($xml.find('BatteryPercent').text(), 0, 20, 40, 60, 80, 100)).css('border','0.5px solid rgb(255, 255, 255)').css('padding','1px 2px 2px 2px');
} else {
strbattery = '\u26A1';
}
$('#battery').html(strbattery);
})
}

function DeviceInfo() {
$.get(link + 'api/device/information', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
devn = $xml.find('DeviceName').text();
$('#devicename').html(devn);
havename = true;
getantennastatus();
if ($xml.find('WanIPAddress').text() == "") {
ipAddr = $xml.find('SecondWanIPAddress').text(), $xml.find('WanIPAddress').text();
} else {
ipAddr = $xml.find('WanIPAddress').text(), $xml.find('SecondWanIPAddress').text();
}
$('#ipv4').html(ipAddr);

if (ipAddr != "") {
$('.i23').show();
$('#ipv4').html(ipAddr);
} else {
$('.i23').hide();
$('#ipv4').hide();
}
if ($xml.find('WanIPv6Address').text() == "") {
ipv6Addr = $xml.find('SecondWanIPv6Address').text(), $xml.find('WanIPv6Address').text();
} else {
ipv6Addr = $xml.find('WanIPv6Address').text(), $xml.find('SecondWanIPv6Address').text();
}
$('#ipv6').html(ipv6Addr);

if (ipv6Addr != "") {
$('.i25').show();
$('#ipv6').html(ipv6Addr);
} else {
$('.i25').hide();
$('#ipv6').hide();
}
if ($xml.find('DeviceName').text() == "") {
$(".i0").css('display','none');
} else {
$(".i0").css('display','');
$('#modemmodel').html(conMod($xml.find('DeviceName').text()));
}
if ($xml.find('code').text() != "") {
$("#frame").attr('src', link + '');
}
if ($xml.find('spreadname_en').text() == "") {
$('#spreadname').html('Informasi Modem');
} else {
$("#spreadname").css('display','');
$('#spreadname').html(conMod($xml.find('spreadname_en').text()));
}
if ($xml.find('Imei').text() == "") {
$(".i1").css('display','none');
} else {
$(".i1").css('display','');
$('#imei').html(conMod($xml.find('Imei').text()));
}
if ($xml.find('ImeiSvn').text() == "") {
$(".i2").css('display','none');
} else {
$(".i2").css('display','');
$('#Svn').html(conMod($xml.find('ImeiSvn').text()));
}
if ($xml.find('Imsi').text() == "") {
$(".i3").css('display','none');
} else {
$(".i3").css('display','');
$('#imsi').html(conMod($xml.find('Imsi').text()));
}
if ($xml.find('Serial,SerialNumber').text() == "") {
$(".i4").css('display','none');
} else {
$(".i4").css('display','');
$('#serial').html(conMod($xml.find('Serial,SerialNumber').text()));
}
if ($xml.find('Msisdn').text() == "") {
$(".i5").css('display','none');
} else {
$(".i5").css('display','');
$('#number').html(conMod($xml.find('Msisdn').text()));
}
if ($xml.find('Iccid').text() == "") {
$(".i6").css('display','none');
} else {
$(".i6").css('display','');
$('#ICCID').html(conMod($xml.find('Iccid').text()));
}
if ($xml.find('HardwareVersion').text() == "") {
$(".i7").css('display','none');
} else {
$(".i7").css('display','');
$('#hardware').html(conMod($xml.find('HardwareVersion').text()));
}
if ($xml.find('SoftwareVersion').text() == "") {
$(".i8").css('display','none');
} else {
$(".i8").css('display','');
$('#software').html(conMod($xml.find('SoftwareVersion').text()));
}
if ($xml.find('WebUIVersion').text() == "") {
$(".i9").css('display','none');
} else {
$(".i9").css('display','');
$('#webui').html(conMod($xml.find('WebUIVersion').text()));
}
if ($xml.find('iniversion').text() == "") {
$(".i10").css('display','none');
} else {
$(".i10").css('display','');
$('#iniversion').html(conMod($xml.find('iniversion').text()));
}
if ($xml.find('submask').text() == "") {
$(".i12").css('display','none');
} else {
$(".i12").css('display','');
$('#submask').html($xml.find('submask').text());
}
if ($xml.find('MacAddress1').text() == "") {
$(".i13").css('display','none');
} else {
$(".i13").css('display','');
$('#mac1').html(conMod($xml.find('MacAddress1').text()));
}
if ($xml.find('MacAddress2').text() == "") {
$(".i14").css('display','none');
} else {
$(".i14").css('display','');
$('#mac2').html(conMod($xml.find('MacAddress2').text()));
}
if ($xml.find('WifiMacAddrWl0').text() == "") {
$(".i15").css('display','none');
} else {
$(".i15").css('display','');
$('#WifiMac0').html(conMod($xml.find('WifiMacAddrWl0').text()));
}
if ($xml.find('WifiMacAddrWl1').text() == "") {
$(".i16").css('display','none');
} else {
$(".i16").css('display','');
$('#WifiMac1').html(conMod($xml.find('WifiMacAddrWl1').text()));
}
if ($xml.find('supportmode').text() == "") {
$(".i17").css('display','none');
} else {
$(".i17").css('display','');
$('#supportmode').html(conMod($xml.find('supportmode').text()));
}
if ($xml.find('ProductFamily').text() == "") {
$(".i18").css('display','none');
} else {
$(".i18").css('display','');
$('#productfam').html(conMod($xml.find('ProductFamily').text()));
}
if ($xml.find('Classify').text() == "") {
$(".i19").css('display','none');
} else {
$(".i19").css('display','');
$('#classify').html(conMod($xml.find('Classify').text()));
}
if ($xml.find('Esn').text() == "") {
$(".i20").css('display','none');
} else {
$(".i20").css('display','');
$('#Esn').html(conMod($xml.find('Esn').text()));
}
if ($xml.find('Meid').text() == "") {
$(".i21").css('display','none');
} else {
$(".i21").css('display','');
$('#Meid').html(conMod($xml.find('Meid').text()));
}
if ($xml.find('workmode').text() == "") {
$(".i22").css('display','none');
} else {
$(".i22").css('display','');
$('#wmode').html(conMod($xml.find('workmode').text()));
}
})
}

function Plmn() {
$.get(link + 'api/net/current-plmn', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var fullname = $xml.find('FullName').text();
$("#brand").html(fullname);
if (conMod($xml.find('FullName').text())) {
$("#brand").css('background','#00bb1c').css('color','white');
} else if ($xml.find('FullName').text() != "902") {
$("#brand").html('Unknown').css('background','#aa0000').css('color','black');
}
$('#Rat').html(netMod($xml.find('Rat').text()));
})
}

function B4GType(data) {
{
if ((data == '20800800C5') || (data == '7FFFFFFFFFFFFFFF') || (data == '1A000000001') || (data == '1A000000085') || (data == '2000000085') || (data == '7E2880800D5') || (data == '7A0880800D5') || (data == '20000800C5') || (data == '20880800C5') || (data == '3E2880800D5') || (data == '1A08A0C00DF') || (data == 'A0880800C1') || (data == '1A008080085 ') || (data == '1A000080085') || (data == '1E20A000095') || (data == '7E2880E00D5') || (data == '2000000680380')) { return "Auto"; }
data_out = "";
for (x = 0; x < band.length; x++) {
tb = Math.pow(2, band[x] - 1);
var t;
if (tb < 0x100000000) {
t = parseInt(data, 16) & (tb);
} else { t = parseInt(data, 16) / 0x100000000 & (tb / 0x100000000); }
if (t != 0) { data_out += "B" + String(band[x]) + "+"; }
}
data_out = data_out.replace(/\++$/, "");
return data_out;
}
}

function NetMode() {
$.get(link + 'api/net/net-mode', function(data) {
LTEBand = find(data, 'LTEBand');
NetworkBand = find(data, 'NetworkBand');
if (is4G == true)$('#band').html(B_4GType(LTEBand));
if (is3G == true)$('#band').html(B_2G_3GType(NetworkBand));
if (is2G == true)$('#band').html(B_2G_3GType(NetworkBand));
})
}

function conMod(mode){
switch (mode) {
case "900": return "Hubungkan";
case "901": return "Terhubung";
case "902": return "Not Terhubung";
case "903": return "Disconnect";
case "904": return "Connection Failed";
case "905": return "No Service";
case "906": return "Connection Error";
case "33": return "DisTerhubung";
case "0": return "DisTerhubung";
default: return mode;
}
}

function netMod(mode) {
switch (mode) {
case "0":
is2G = true;
is3G = false;
is4G = false;
is5GSA = false;
return;
case "2":
is2G = false;
is3G = true;
is4G = false;
is5GSA = false;
return;
case "5":
is2G = false;
is3G = true;
is4G = false;
is5GSA = false;
return;
case "7":
is2G = false;
is3G = false;
is4G = true;
is5GSA = false;
if (is5G == true) {
return 'NSA';
}
if (is5G == false && is5GPoint == true) {
return 'No Active NSA';
}
if (is4Gplus == true) {
return;
} else {
return;
}
case "12":
is2G = false;
is3G = false;
is4G = false;
is5GSA = true;
return 'NR SA';
default:
is2G = false;
is3G = false;
is4G = false;
is5GSA = false;
return mode;
}
}

function getTime(totalSeconds) {
var hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
var minutes = Math.floor(totalSeconds / 60);
var seconds = totalSeconds % 60;
if (minutes < 10) { minutes = "0" + minutes; }
if (seconds < 10) { seconds = "0" + seconds; }
return hours + ":" + minutes + ":" + seconds;
}

function getTime1(seconds) {
var numdays = Math.floor(seconds / 86400);
var numhours = Math.floor((seconds % 86400) / 3600);
var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
var numseconds = ((seconds % 86400) % 3600) % 60;
if (numdays < 1) { numdays = ""; }
if (numdays > 0) { numdays = numdays + " Hari "; }
return numdays + numhours + ":" + numminutes + ":" + numseconds;
}

function netType(value) {
var arr1 = ["No service", "GSM (2G)", "GPRS (2G)", "EDGE (2G)", "UMTS (3G)", "HSDPA (3G)", "HSUPA (3G)", "HSPA (3G)", "TDSCDMA", "HSPA+ (3.5G)", "EVDO rev.0", "EVDO rev.A", "EVDO rev.B", "1xRTT", "UMB", "1xEVDV", "3xRTT", "HSPA+64QAM", "HSPA+MIMO", "LTE (4G)", "LTE CA (4G+)", "NR (5G)", "IS95A", "IS95B", "CDMA1X", "EVDO rev.0", "EVDO rev.A", "EVDO rev.B", "Hybrid CDMA 1X", "Hybrid EVDO rev.0", "Hybrid EVDO rev.A", "Hybrid EVDO rev.B", "EHRPD rev.0", "EHRPD rev.A", "EHRPD rev.B", "The hybrid EHRPD rev.0", "The hybrid EHRPD rev.A", "The hybrid EHRPD rev.B"]
var arr2 = ["UMTS (3G)", "HSDPA (3G)", "HSUPA (3G)", "HSPA (3G)", "HSPA+ (3.5G)", "DC-HSPA+ (3.5G)"]
if (value == 0) return 'No service';
if (value == 1) return 'GSM (2G)';
if (value == 2) return 'GPRS (2G)';
if (value == 3) return 'EDGE (2G)';
if (value == 21) return 'IS95A';
if (value == 22) return 'IS95B';
if (value == 23) return 'CDMA 1X';
if (value == 24) return 'EVDO rev.0';
if (value == 25) return 'EVDO rev.A';
if (value == 26) return 'EVDO rev.B';
if (value == 27) return 'HYBRID CDMA 1X';
if (value == 28) return 'HYBRID EVDO rev.0';
if (value == 29) return 'HYBRID EVDO rev.A';
if (value == 30) return 'HYBRID EVDO rev.B';
if (value == 31) return 'eHRPD rel.0';
if (value == 32) return 'eHRPD rel.A';
if (value == 33) return 'eHRPD rel.B';
if (value == 34) return 'HYBRID eHRPD rel.0';
if (value == 35) return 'HYBRID eHRPD rel.A';
if (value == 36) return 'HYBRID eHRPD rel.B';
if (value == 41) return 'UMTS (3G)';
if (value == 42) return 'HSDPA (3G)';
if (value == 43) return 'HSUPA (3G)';
if (value == 44) return 'HSPA (3G)';
if (value == 45) return 'HSPA+ (3.5G)';
if (value == 46) return 'DC-HSPA+ (3.5G)';
if (value == 61) return 'TD-SCDMA (3G)';
if (value == 62) return 'TD-HSDPA (3G)';
if (value == 63) return 'TD-HSUPA (3G)';
if (value == 64) return 'TD-HSPA (3G)';
if (value == 65) return 'TD-HSPA+ (3.5G)';
if (value == 81) return '802.16E';
if (value == 101) return 'LTE (4G)';
if (value == 1011) return 'LTE CA (4G+)';
if (value == 111) return 'NR (5G)';
if (value < 37) return " " + arr1[value];
if (value < 47 && value > 40) return " " + arr2[value - 41];
if (value < 66 && value > 60) return " " + arr2[value - 61];
return ' ' + value;
}

function B_2G_3GType(value) {
switch (value) {
case "80": return "2G 1800MHz";
case "300": return "2G 900MHz";
case "80000": return "2G 850MHz";
case "400000":
$(".w01").css('background','green').css('color','yellow').css('font-weight','bold'); return "3G 2100MHz";
case "800000":
$(".w02").css('background','green').css('color','yellow').css('font-weight','bold'); return "3G 1900MHz";
case "2000000":
$(".w04").css('background','green').css('color','yellow').css('font-weight','bold'); return "3G 1700MHz";
case "4000000":
$(".w05").css('background','green').css('color','yellow').css('font-weight','bold'); return "3G 850MHz";
case "8000000":
$(".w06").css('background','green').css('color','yellow').css('font-weight','bold'); return "3G 800MHz";
case "2000000000000":
$(".w08").css('background','green').css('color','yellow').css('font-weight','bold'); return "3G 900MHz";
case "4000000000000":
$(".w09").css('background','green').css('color','yellow').css('font-weight','bold'); return "3G 1700MHz";
case "1000000000000000":
$(".w019").css('background','green').css('color','yellow').css('font-weight','bold'); return "3G 800MHz";
case "3FFFFFFF": return "Auto";
default: return "" + value;
}
}

function B_4GType(value) {
var lteBand = " ";
var lbm = parseInt(value, 16);
if ((value == '20800800C5') || (value == '7FFFFFFFFFFFFFFF') || (value == '1A000000001') || (value == '1A000000085') || (value == '2000000085') || (value == '7E2880800D5') || (value == '7A0880800D5') || (value == '20000800C5') || (value == '20880800C5') || (value == '3E2880800D5') || (value == '1A08A0C00DF') || (value == 'A0880800C1') || (value == '1A008080085') || (value == '1A000080085') || (value == '1E20A000095') || (value == '7E2880E00D5') || (value == '2000000680380')) {lteBand = "Auto";}
else {
if ((lbm & b1) != 0) {
lteBand = lteBand + "2100" + "\/";
$(".01").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b2) != 0) {
lteBand = lteBand + "1900" + "\/";
$(".02").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b3) != 0) {
lteBand = lteBand + "1800" + "\/";
$(".03").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b4) != 0) {
lteBand = lteBand + "1700" + "\/";
$(".04").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b5) != 0) {
lteBand = lteBand + "850" + "\/";
$(".05").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b7) != 0) {
lteBand = lteBand + "2600" + "\/";
$(".07").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b8) != 0) {
lteBand = lteBand + "900" + "\/";
$(".08").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b11) != 0) {
lteBand = lteBand + "1500" + "\/";
$(".011").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b12) != 0) {
lteBand = lteBand + "700" + "\/";
$(".012").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b13) != 0) {
lteBand = lteBand + "700" + "\/";
$(".013").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b14) != 0) {
lteBand = lteBand + "700" + "\/";
$(".014").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b17) != 0) {
lteBand = lteBand + "700" + "\/";
$(".017").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b18) != 0) {
lteBand = lteBand + "850" + "\/";
$(".018").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b19) != 0) {
lteBand = lteBand + "850" + "\/";
$(".019").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b20) != 0) {
lteBand = lteBand + "800" + "\/";
$(".020").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b21) != 0) {
lteBand = lteBand + "1500" + "\/";
$(".021").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b24) != 0) {
lteBand = lteBand + "1600" + "\/";
$(".024").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b25) != 0) {
lteBand = lteBand + "1900" + "\/";
$(".025").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b26) != 0) {
lteBand = lteBand + "850" + "\/";
$(".026").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b28) != 0) {
lteBand = lteBand + "700" + "\/";
$(".028").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b29) != 0) {
lteBand = lteBand + "700" + "\/";
$(".029").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b30) != 0) {
lteBand = lteBand + "2300" + "\/";
$(".030").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b31) != 0) {
lteBand = lteBand + "450" + "\/";
$(".031").css('background','green').css('color','yellow').css('font-weight','bold');
}
if ((lbm & b32) != 0) {
lteBand = lteBand + "1500" + "\/";
$(".032").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b34) != 0) {
lteBand = lteBand + "2000" + "\/";
$(".034").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b37) != 0) {
lteBand = lteBand + "1900" + "\/";
$(".037").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b38) != 0) {
lteBand = lteBand + "2600" + "\/";
$(".038").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b39) != 0) {
lteBand = lteBand + "1900" + "\/";
$(".039").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b40) != 0) {
lteBand = lteBand + "2300" + "\/";
$(".040").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b41) != 0) {
lteBand = lteBand + "2500" + "\/";
$(".041").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b42) != 0) {
lteBand = lteBand + "3500" + "\/";
$(".042").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b43) != 0) {
lteBand = lteBand + "3700" + "\/";
$(".043").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b44) != 0) {
lteBand = lteBand + "700" + "\/";
$(".044").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b46) != 0) {
lteBand = lteBand + "5200" + "\/";
$(".046").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b47) != 0) {
lteBand = lteBand + "5900" + "\/";
$(".047").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b48) != 0) {
lteBand = lteBand + "3500" + "\/";
$(".048").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b49) != 0) {
lteBand = lteBand + "3500" + "\/";
$(".049").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b50) != 0) {
lteBand = lteBand + "1500" + "\/";
$(".050").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b51) != 0) {
lteBand = lteBand + "1500" + "\/";
$(".051").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b52) != 0) {
lteBand = lteBand + "3300" + "\/";
$(".052").css('background','green').css('color','yellow').css('font-weight','bold');
}
if (BitwiseAndLarge(lbm, b53) != 0) {
lteBand = lteBand + "2500" + "\/";
$(".053").css('background','green').css('color','yellow').css('font-weight','bold');
}
}
if (lteBand.substring(lteBand.length - 1, lteBand.length) == "\/") {
lteBand = lteBand.substring(0, lteBand.length - 1);
}
return lteBand;
}

function BitwiseAndLarge(val1, val2) {
var shift = 0,
result = 0;
var mask = ~((~0) << 30);
var divisor = 1 << 30;
while ((val1 != 0) && (val2 != 0)) {
var rs = (mask & val1) & (mask & val2);
val1 = Math.floor(val1 / divisor);
val2 = Math.floor(val2 / divisor);
var i = shift++;
for (i; i--;) {
rs *= divisor;
}
result += rs;
}
return result;
}

function dataCon(bytes, isSpeed, toBit) {
if (bytes <= -1) return 0;
if (toBit == '0') {
if (bytes < 1024) {
bytes = bytes + 'B';
} else if (bytes < 1048576) {
bytes = parseInt(bytes / 1024 * 100) / 100 + 'KB';
} else if (bytes < 1073741824) {
bytes = parseInt(bytes / 1048576 * 100) / 100 + 'MB';
} else if (bytes < 1099511627776) {
bytes = parseInt(bytes / 1073741824 * 100) / 100 + 'GB';
} else if (bytes < 1125899906842624) {
bytes = parseInt(bytes / 1099511627776 * 100) / 100 + 'TB';
}
} else {
if (bytes < 128) {
bytes = bytes * 8 + 'b';
} else if (bytes < 128000) {
bytes = parseInt(bytes / 1.28) / 100 + 'Kb';
} else if (bytes < 128000000) {
bytes = parseInt(bytes / 1280) / 100 + 'Mb';
} else if (bytes < 128000000000) {
bytes = parseInt(bytes / 1280000) / 100 + 'Gb';
}
}
if (isSpeed == '1') {
if (toBit == '0') bytes = bytes + '/s';
if (toBit == '1') bytes = bytes + 'ps';
}
return bytes;
}

function dataCon1(bytes) {
if (bytes >= yb) {
bytes = (bytes / yb).toFixed(2) * 100 / 100 + " YB";
} else if (bytes >= zb) {
bytes = (bytes / zb).toFixed(2) * 100 / 100 + " ZB";
} else if (bytes >= eb) {
bytes = (bytes / eb).toFixed(2) * 100 / 100 + " EB";
} else if (bytes >= pb) {
bytes = (bytes / pb).toFixed(2) * 100 / 100 + " PB";
} else if (bytes >= tb) {
bytes = (bytes / tb).toFixed(2) * 100 / 100 + " TB";
} else if (bytes >= gb) {
bytes = (bytes / gb).toFixed(2) * 100 / 100 + " GB";
} else if (bytes >= mb) {
bytes = (bytes / mb).toFixed(2) * 100 / 100 + " MB";
} else if (bytes >= kb) {
bytes = (bytes / kb).toFixed(2) * 100 / 100 + " KB";
} else if (bytes > 1) {
bytes = bytes + " B";
} else if (bytes == 1) {
bytes = bytes + " B";
} else { bytes = "0 B"; }
return bytes;
}

function dis(val) {
document.getElementById("calc").value += val
}

function solve() {
let x = document.getElementById("calc").value
let y = eval(x)
document.getElementById("calc").value = y
}

function clrr() {
document.getElementById("calc").value = ""
}

function back() {
var txt = document.getElementById("calc").value;
txt = txt.slice(0, -1);
document.getElementById("calc").value = txt;
}

function showSlider() {
$('.slide')[0].style.left = '0px';
$('.slider')[0].style.width = '100%';
$('.header')[0].style.position = 'fixed';
$('.content')[0].style.position = 'fixed';
var newData = B4A.CallSub('isVisible', true, "true");
}

function hideSlider() {
$('.slide')[0].style.left = '-255px';
$('.slider')[0].style.width = '0px';
$('.header')[0].style.position = '';
$('.content')[0].style.position = '';
var newData = B4A.CallSub('isVisible', true, "false");
}

function toggleLight() {
var image = document.getElementById('eyad');
if (image.src.match("bulbon")) {
image.src = "images/pic_bulboff.png";
} else {
image.src = "images/pic_bulbon.png";
}
$('body').toggleClass('bodydark');
$('.label').toggleClass('labeldark');
$('.slide').toggleClass('slidedark');
$('.table, td').toggleClass('table, td');
$('.th').toggleClass('th');
$('.line-header').toggleClass('line-header-dark');
$('.fixreading').toggleClass('fixreadingDark');
$('.dropdown2').toggleClass('dropdown2d');
$('.dropdown-content2').toggleClass('dropdown-content2d');
$('.dropdown2:hover').toggleClass('dropdown2:hoverd');
$('.dropdown4').toggleClass('dropdown4d');
$('.dropdown-content4').toggleClass('dropdown-content4d');
$('.dropdown4:hover').toggleClass('dropdown4:hoverd');
$('.lte2').toggleClass('display');
$('.lte1').toggleClass('nodisplay');
var newData = B4A.CallSub('isDark', true, $('body').attr('class'));
}

function callOnLoad() {
$('#div-parent').remove();
$("#Speed").append("<div id=\"div-parent\"><iframe style=\"color:white;background:grey;position:fixed;top: 11%;left: 0.5%;width:99%;height:72%;border: 0px;border-radius: 20px;overflow:hidden !important;\" src=\"https://openspeedtest.com/Get-widget.php\"></iframe>");
}

function update_iframe() {
$('iframe').each(function() {
$(this).attr('src', $(this).attr('src'));
})
}

function showM() {
$('.dropdown-content')[0].style.display = '';
var newData = B4A.CallSub('isVisible', true, "true");
}

function hideM() {
$('.dropdown-content')[0].style.display = 'none';
var newData = B4A.CallSub('isVisible', true, "false");
}

function openPage(url, namee) {
var newData = B4A.CallSub('openPage', true, url, namee);
}

function showInfo(ver) {
var newData = B4A.CallSub('showInfo', true, ver);
}

function showLogin() {
var newData = B4A.CallSub('login', true);
}

function showLoginn() {
var newData = B4A.CallSub('login', true);
}

function setBand() {
if ($("#WB1, #WB01").is(':checked')) {refresh('02','400000','7FFFFFFFFFFFFFFF'); msg("The 3G is being activated"); setTimeout(function() { msgok(); }, 4000); return;}
if ($("#WB2, #WB02").is(':checked')) {refresh('02','800000','7FFFFFFFFFFFFFFF'); msg("The 3G is being activated"); setTimeout(function() { msgok(); }, 4000); return;}
if ($("#WB4, #WB04").is(':checked')) {refresh('02','2000000','7FFFFFFFFFFFFFFF'); msg("The 3G is being activated"); setTimeout(function() { msgok(); }, 4000); return;}
if ($("#WB5, #WB05").is(':checked')) {refresh('02','4000000','7FFFFFFFFFFFFFFF'); msg("The 3G is being activated"); setTimeout(function() { msgok(); }, 4000); return;}
if ($("#WB6, #WB06").is(':checked')) {refresh('02','8000000','7FFFFFFFFFFFFFFF'); msg("The 3G is being activated"); setTimeout(function() { msgok(); }, 4000); return;}
if ($("#WB8, #WB08").is(':checked')) {refresh('02','2000000000000','7FFFFFFFFFFFFFFF'); msg("The 3G is being activated"); setTimeout(function() { msgok(); }, 4000); return;}
if ($("#WB9, #WB09").is(':checked')) {refresh('02','4000000000000','7FFFFFFFFFFFFFFF'); msg("The 3G is being activated"); setTimeout(function() { msgok(); }, 4000); return;}
if ($("#WB19, #WB019").is(':checked')) {refresh('02','1000000000000000','7FFFFFFFFFFFFFFF'); msg("The 3G is being activated"); setTimeout(function() { msgok(); }, 4000); return;}
var val = 0;
var lbm = 0;
if ($("#B1, #B01").is(':checked')) {val = val + 1; lbm += b1;}
if ($("#B2, #B02").is(':checked')) {val = val + 2; lbm += b2;}
if ($("#B3, #B03").is(':checked')) {val = val + 4; lbm += b3;}
if ($("#B4, #B04").is(':checked')) {val = val + 8; lbm += b4;}
if ($("#B5, #B05").is(':checked')) {val = val + 10; lbm += b5;}
if ($("#B8, #B08").is(':checked')) {val = val + 80; lbm += b8;}
if ($("#B11, #B011").is(':checked')) {val = val + 400; lbm += b11;}
if ($("#B12, #B012").is(':checked')) {val = val + 800; lbm += b12;}
if ($("#B13, #B013").is(':checked')) {val = val + 1000; lbm += b13;}
if ($("#B14, #B014").is(':checked')) {val = val + 2000; lbm += b14;}
if ($("#B17, #B017").is(':checked')) {val = val + 10000; lbm += b17;}
if ($("#B18, #B018").is(':checked')) {val = val + 20000; lbm += b18;}
if ($("#B19, #B019").is(':checked')) {val = val + 40000; lbm += b19;}
if ($("#B20, #B020").is(':checked')) {val = val + 80000; lbm += b20;}
if ($("#B21, #B021").is(':checked')) {val = val + 100000; lbm += b21;}
if ($("#B24, #B024").is(':checked')) {val = val + 800000; lbm += b24;}
if ($("#B25, #B025").is(':checked')) {val = val + 1000000; lbm += b25;}
if ($("#B26, #B026").is(':checked')) {val = val + 2000000; lbm += b26;}
if ($("#B28, #B028").is(':checked')) {val = val + 8000000; lbm += b28;}
if ($("#B29, #B029").is(':checked')) {val = val + 10000000; lbm += b29;}
if ($("#B30, #B030").is(':checked')) {val = val + 20000000; lbm += b30;}
if ($("#B31, #B031").is(':checked')) {val = val + 40000000; lbm += b31;}
if ($("#B32, #B032").is(':checked')) {val = val + 80000000; lbm += b32;}
if ($("#B34, #B034").is(':checked')) {val = val + 200000000; lbm += b34;}
if ($("#B37, #B037").is(':checked')) {val = val + 1000000000; lbm += b37;}
if ($("#B38, #B038").is(':checked')) {val = val + 2000000000; lbm += b38;}
if ($("#B39, #B039").is(':checked')) {val = val + 4000000000; lbm += b39;}
if ($("#B40, #B040").is(':checked')) {val = val + 8000000000; lbm += b40;}
if ($("#B41, #B041").is(':checked')) {val = val + 10000000000; lbm += b41;}
if ($("#B42, #B042").is(':checked')) {val = val + 20000000000; lbm += b42;}
if ($("#B43, #B043").is(':checked')) {val = val + 40000000000; lbm += b43;}
if ($("#B44, #B044").is(':checked')) {val = val + 80000000000; lbm += b44;}
if ($("#B46, #B046").is(':checked')) {val = val + 200000000000; lbm += b46;}
if ($("#B47, #B047").is(':checked')) {val = val + 400000000000; lbm += b47;}
if ($("#B48, #B048").is(':checked')) {val = val + 800000000000; lbm += b48;}
if ($("#B49, #B049").is(':checked')) {val = val + 1000000000000; lbm += b49;}
if ($("#B50, #B050").is(':checked')) {val = val + 2000000000000; lbm += b50;}
if ($("#B51, #B051").is(':checked')) {val = val + 4000000000000; lbm += b51;}
if ($("#B52, #B052").is(':checked')) {val = val + 8000000000000; lbm += b52;}
if ($("#B53, #B053").is(':checked')) {val = val + 10000000000000; lbm += b53;}
if ($("#B7, #B07").is(':checked')) {hex_value = '' + val; val = parseInt(hex_value, 16); val = val + 64; lbm += b7; hex_value = val.toString(16);} else {hex_value = '' + val;}

if ($("#btnNSA, #btnNSAa").is(':checked')) {nroption = '0';}
if ($("#btnSA, #btnSAa").is(':checked')) {nroption = '1';}
if ($("#btnSANSA, #btnSANSAa").is(':checked')) {nroption = '2';}

if (hex_value == 0 + nroption) {
msg("Silakan Pilih Frekuensi Apapun Sebelum Selesai"); setTimeout(function() { window.location.reload(); }, 1000);}

if (hex_value == 0) {
if ($("#btnNSA, #btnNSAa").is(':checked')) {
refresh('00','00000000','7FFFFFFFFFFFFFFF','0'); msg("Activating the 5G NSA"); setTimeout(function() { msgok(); }, 4000);}
if ($("#btnSA, #btnSAa").is(':checked')) {
refresh('00','00000000','7FFFFFFFFFFFFFFF','1'); msg("Activating the 5G SA"); setTimeout(function() { msgok(); }, 4000);}
if ($("#btnSANSA, #btnSANSAa").is(':checked')) {
refresh('00','00000000','7FFFFFFFFFFFFFFF','2'); msg("Activating the 5G SA+NSA"); setTimeout(function() { msgok(); }, 4000);}
return;
}

if ($('#btnNR, #btnNRa').is(':checked')) {
refresh('00','00000000','' + hex_value,'' + nroption); msg("The 4G is being activated with the 5G"); setTimeout(function() { msgok(); }, 4000);
} else {
refresh('03','3FFFFFFF','' + hex_value); msg("The 4G is being activated"); setTimeout(function() { msgok(); }, 4000);}
}

function msgok() {
getTok();
}

function colorFR(cur, l0, l1, l2, l3, l4, l5, l6) {
if (cur < l0) cur = l0;
if (cur > l6) cur = l6;
var percent = parseInt((cur - l0) * 100 / (l6 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l6) {rftxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l5) {rftxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l4) {rftxStr = "Bagus"; color = 'green';
} else if (cur >= l3) {rftxStr = "Sedang"; color = 'orange';
} else if (cur >= l2) {rftxStr = "Jelek"; color = 'red';
} else if (cur >= l1) {rftxStr = "Sangat Jelek"; color = 'darkred';
} else {rftxStr = "Sangat Jelek"; color = '#f51000';
}
$('#rfcolor').css('background-color', color);
$('#rfpercent').html(whitepercent + "%" + "  " +  rftxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorRBecio(cur, l0, l1, l2, l3, l4, l5, l6) {
if (cur < l0) cur = l0;
if (cur > l6) cur = l6;
var percent = parseInt((cur - l0) * 100 / (l6 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l6) {rsrqRBBecio = "Master Suka"; color = '#1090b0';
} else if (cur >= l5) {rsrqRBBecio = "Sangat Bagus"; color = 'teal';
} else if (cur >= l4) {rsrqRBBecio = "Bagus"; color = 'green';
} else if (cur >= l3) {rsrqRBBecio = "Sedang"; color = 'orange';
} else if (cur >= l2) {rsrqRBBecio = "Jelek"; color = 'red';
} else if (cur >= l1) {rsrqRBBecio = "Sangat Jelek"; color = 'darkred';
} else {rsrqRBBecio = "Sangat Jelek"; color = '#f51000';
}
$('#RBBeciocolor').css('background-color', color);
$('#RBBecioIndicator').html(rsrqRBBecio);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}
    
function colorRBrsrq(cur, l0, l1, l2, l3, l4, l5, l6) {
if (cur < l0) cur = l0;
if (cur > l6) cur = l6;
var percent = parseInt((cur - l0) * 100 / (l6 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l6) {rsrqRBBpr = "Master Suka"; color = '#1090b0';
} else if (cur >= l5) {rsrqRBBpr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l4) {rsrqRBBpr = "Bagus"; color = 'green';
} else if (cur >= l3) {rsrqRBBpr = "Sedang"; color = 'orange';
} else if (cur >= l2) {rsrqRBBpr = "Jelek"; color = 'red';
} else if (cur >= l1) {rsrqRBBpr = "Sangat Jelek"; color = 'darkred';
} else {rsrqRBBpr = "Sangat Jelek"; color = '#f51000';
}
$('#RBBrsrqcolor').css('background-color', color);
$('#RBBrsrqIndicator').html(RBBpp + "%" + "  " +  rsrqRBBpr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}
function colorrssi(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {rssitxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {rssitxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {rssitxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {rssitxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {rssitxStr = "Jelek"; color = 'red';
} else {rssitxStr = "Sangat Jelek"; color = 'darkred';
}
$('#rssicolor').css('background-color', color);
$('#rssipercent').html(whitepercent + "%" + "  " +  rssitxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorrxlev(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {rxlevtxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {rxlevtxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {rxlevtxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {rxlevtxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {rxlevtxStr = "Jelek"; color = 'red';
} else {rxlevtxStr = "Sangat Jelek"; color = 'darkred';
}
$('#rxlevcolor').css('background-color', color);
$('#rxlevpercent').html(whitepercent + "%" + "  " +  rxlevtxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorrscp(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {rscptxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {rscptxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {rscptxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {rscptxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {rscptxStr = "Jelek"; color = 'red';
} else {rscptxStr = "Sangat Jelek"; color = 'darkred';
}
$('#rscpcolor').css('background-color', color);
$('#rscppercent').html(whitepercent + "%" + "  " +  rscptxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorecio(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {eciotxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {eciotxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {eciotxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {eciotxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {eciotxStr = "Jelek"; color = 'red';
} else {eciotxStr = "Sangat Jelek"; color = 'darkred';
}
$('#eciocolor').css('background-color', color);
$('#eciopercent').html(whitepercent + "%" + "  " +  eciotxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorrsrp(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {rsrptxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {rsrptxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {rsrptxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {rsrptxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {rsrptxStr = "Jelek"; color = 'red';
} else {rsrptxStr = "Sangat Jelek"; color = 'darkred';
}
$('#rsrpcolor').css('background-color', color);
$('#rsrppercent').html(whitepercent + "%" + "  " +  rsrptxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorrsrq(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {rsrqtxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {rsrqtxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {rsrqtxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {rsrqtxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {rsrqtxStr = "Jelek"; color = 'red';
} else {rsrqtxStr = "Sangat Jelek"; color = 'darkred';
}
$('#rsrqcolor').css('background-color', color);
$('#rsrqpercent').html(whitepercent + "%" + "  " +  rsrqtxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorsinr(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {sinrtxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {sinrtxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {sinrtxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {sinrtxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {sinrtxStr = "Jelek"; color = 'red';
} else {sinrtxStr = "Sangat Jelek"; color = 'darkred';
}
$('#sinrcolor').css('background-color', color);
$('#sinrpercent').html(whitepercent + "%" + "  " +  sinrtxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colortxpower(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
if (percent < 10) percent = 10;
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l4) {color = '#aa0000';
} else if (cur >= l3) {color = '#ff7300';
} else if (cur >= l2) {color = '#e28f00';
} else if (cur >= l1) {color = '#00bb1c';
} else {color = '#008013';
}
$('#txcolor').css('background-color', color);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colornrrsrp(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {nrrsrptxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {nrrsrptxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {nrrsrptxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {nrrsrptxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {nrrsrptxStr = "Jelek"; color = 'red';
} else {nrrsrptxStr = "Sangat Jelek"; color = 'darkred';
}
$('#nrrsrpcolor').css('background-color', color);
$('#nrrsrppercent').html(whitepercent + "%" + "  " +  nrrsrptxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colornrrsrq(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {nrrsrqtxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {nrrsrqtxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {nrrsrqtxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {nrrsrqtxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {nrrsrqtxStr = "Jelek"; color = 'red';
} else {nrrsrqtxStr = "Sangat Jelek"; color = 'darkred';
}
$('#nrrsrqcolor').css('background-color', color);
$('#nrrsrqpercent').html(whitepercent + "%" + "  " +  nrrsrqtxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colornrsinr(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {nrsinrtxStr = "Master Suka"; color = '#1090b0';
} else if (cur >= l4) {nrsinrtxStr = "Sangat Bagus"; color = 'teal';
} else if (cur >= l3) {nrsinrtxStr = "Bagus"; color = 'green';
} else if (cur >= l2) {nrsinrtxStr = "Sedang"; color = 'orange';
} else if (cur >= l1) {nrsinrtxStr = "Jelek"; color = 'red';
} else {nrsinrtxStr = "Sangat Jelek"; color = 'darkred';
}
$('#nrsinrcolor').css('background-color', color);
$('#nrsinrpercent').html(whitepercent + "%" + "  " +  nrsinrtxStr);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colornrtxpower(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
if (percent < 10) percent = 10;
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l4) {color = '#aa0000';
} else if (cur >= l3) {color = '#ff7300';
} else if (cur >= l2) {color = '#e28f00';
} else if (cur >= l1) {color = '#00bb1c';
} else {color = '#008013';
}
$('#nrtxcolor').css('background-color', color);
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorbattery(cur, l0, l1, l2, l3, l4, l5) {
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {color = '#008013';
} else if (cur >= l4) {color = '#00bb1c';
} else if (cur >= l3) {color = '#e28f00';
} else if (cur >= l2) {color = '#e0ac00';
} else if (cur >= l1) {color = '#ff7300';
} else {color = '#aa0000';
}
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, hsla(0,0%,100%,0.0) ' + whitepercent + '%)';
}

function colorcqimcs1(cur, l0, l1, l2, l3, l4, l5) {
if (cur == '') return 'linear-gradient(to right, black 100%, black 100%)';
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {color = '#008013';
} else if (cur >= l4) {color = '#00bb1c';
} else if (cur >= l3) {color = '#e28f00';
} else if (cur >= l2) {color = '#e0ac00';
} else if (cur >= l1) {color = '#ff7300';
} else {color = '#aa0000';
}
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, black 100% ' + whitepercent + '%)';
}

function colorcqimcs2(cur, l0, l1, l2, l3, l4, l5) {
if (cur == '') return 'linear-gradient(to right, black 100%, black 100%)';
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {color = '#008013';
} else if (cur >= l4) {color = '#00bb1c';
} else if (cur >= l3) {color = '#e28f00';
} else if (cur >= l2) {color = '#e0ac00';
} else if (cur >= l1) {color = '#ff7300';
} else {color = '#aa0000';
}
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, black 100% ' + whitepercent + '%)';
}

function colortbs1(cur, l0, l1, l2, l3, l4, l5) {
if (cur == '') return 'linear-gradient(to right, black 100%, black 100%)';
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {color = '#008013';
} else if (cur >= l4) {color = '#00bb1c';
} else if (cur >= l3) {color = '#e28f00';
} else if (cur >= l2) {color = '#e0ac00';
} else if (cur >= l1) {color = '#ff7300';
} else {color = '#aa0000';
}
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, black 100% ' + whitepercent + '%)';
}

function colortbs2(cur, l0, l1, l2, l3, l4, l5) {
if (cur == '') return 'linear-gradient(to right, black 100%, black 100%)';
if (cur < l0) cur = l0;
if (cur > l5) cur = l5;
var percent = parseInt((cur - l0) * 100 / (l5 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l5) {color = '#008013';
} else if (cur >= l4) {color = '#00bb1c';
} else if (cur >= l3) {color = '#e28f00';
} else if (cur >= l2) {color = '#e0ac00';
} else if (cur >= l1) {color = '#ff7300';
} else {color = '#aa0000';
}
return 'linear-gradient(to right, ' + color + ' ' + percent + '%, black 100% ' + whitepercent + '%)';
}

function colortraffic(cur, l0, l1, l2, l3, l4, l5, l6, l7){
if (cur < l0) cur = l0;
if (cur > l7) cur = l7;
var percent = parseInt((cur - l0) * 100 / (l7 - l0));
var whitepercent = percent + 1;
if (whitepercent > 100) whitepercent = 100;
if (cur >= l6){color = '#00e000';
} else if (cur >= l5){color = '#a0e600';
} else if (cur >= l4){color = '#e6e600';
} else if (cur >= l3){color = '#FFFF00';
} else if (cur >= l2){color = '#ffa500';
} else if (cur >= l1){color = '#FF0000';
} else {color = '#f04040';
}
return 'linear-gradient(to right, ' + color + ' ' + percent + '%' + whitepercent + '%)';
}

function bin_to_hex(str) {
var hex_array = [{ key: 0, val: "0000" }, { key: 1, val: "0001" }, { key: 2, val: "0010" }, { key: 3, val: "0011" }, { key: 4, val: "0100" }, { key: 5, val: "0101" }, { key: 6, val: "0110" }, { key: 7, val: "0111" },
{ key: 8, val: "1000" }, { key: 9, val: "1001" }, { key: 'a', val: "1010" }, { key: 'b', val: "1011" }, { key: 'c', val: "1100" }, { key: 'd', val: "1101" }, { key: 'e', val: "1110" }, { key: 'f', val: "1111" }
];
var value = '';
var list = [];
if (str.length % 4 !== 0) {
var a = "0000";
var b = a.substring(0, 4 - str.length % 4);
str = b.concat(str);
}
while (str.length > 4) {
list.push(str.substring(0, 4));
str = str.substring(4);
}
list.push(str);
for (var i = 0; i < list.length; i++) {
for (var j = 0; j < hex_array.length; j++) {
if (list[i] == hex_array[j].val) {
value = value.concat(hex_array[j].key);
break;
}
}
}
value = value.replace(/\b(0+)/gi, "");
if (value == '') value = '0';
return value;
}

function hex_to_bin(str) {
var hex_array = [{ key: 0, val: "0000" }, { key: 1, val: "0001" }, { key: 2, val: "0010" }, { key: 3, val: "0011" }, { key: 4, val: "0100" }, { key: 5, val: "0101" }, { key: 6, val: "0110" }, { key: 7, val: "0111" },
{ key: 8, val: "1000" }, { key: 9, val: "1001" }, { key: 'a', val: "1010" }, { key: 'b', val: "1011" }, { key: 'c', val: "1100" }, { key: 'd', val: "1101" }, { key: 'e', val: "1110" }, { key: 'f', val: "1111" }
];
str = str.toLowerCase();
var value = "";
for (var i = 0; i < str.length; i++) {
for (var j = 0; j < hex_array.length; j++) {
if (str.charAt(i) == hex_array[j].key) {
value = value.concat(hex_array[j].val);
break;
}
}
}
return value;
}

function strA(val) {
val = val.replace('&gt;=','');
val = val.replace('&amp;lt;=','');
val = val.replace('&lt;','');
val = val.replace('>','');
val = val.replace('<','');
val = val.replace('=','');
val = val.replace('NaN','0');
return val;
}

function check_notifications() {
$.get(link + 'api/monitoring/check-notifications', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
if ($xml.find('UnreadMessage').text() == "0") {
smsCount = "0";
} else {
smsCount = $xml.find('UnreadMessage').text();
}
})
}

function refresh(val, val2, val3, nroption) {
$('.btn').prop("disabled", true);
$.ajax({url: link + 'api/net/net-mode',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?><request><NetworkMode>' + val + '</NetworkMode><NetworkBand>' + val2 + '</NetworkBand><LTEBand>' + val3 + '</LTEBand><networkOption>' + nroption + '</networkOption></request>',headers: { "__RequestVerificationToken": Token },})}

function Restart(val1) {
$.ajax({url: link + 'api/device/control',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?><request><Control>' + val1 + '</Control></request>',headers: { "__RequestVerificationToken": Token },dataType: 'xml',success: function(data, textStatus, request) {
if (data.firstChild.textContent == "OK") {msg("Restarting"); setTimeout(function() { window.location.reload(); }, 30000);} else {msg("Restart Error");}},error: function(request, textStatus, errorThrown) {msg("Request Error Updating"); setTimeout(function() { window.location.reload(); }, 3000);}})}

function Poweroff(val1) {
$.ajax({url: link + 'api/device/control',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?><request><Control>' + val1 + '</Control></request>',headers: { "__RequestVerificationToken": Token },dataType: 'xml',success: function(data, textStatus, request) {
if (data.firstChild.textContent == "OK") {msg("Shutdown"); setTimeout(function() { window.location.reload(); }, 5000);} else {msg("Shutdown Error");}},error: function(request, textStatus, errorThrown) {msg("Request Error Updating"); setTimeout(function() { window.location.reload(); }, 3000);}})}

function changeip() {
$.get(link + 'api/net/plmn-list', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var sp = '';
while (xml.indexOf('<Network>') > -1) {
sp = xml.slice(xml.indexOf('<Network>'), xml.indexOf('</Network>') + 1);
var tr = document.createElement("tr");
tr.innerHTML = "<td style=font-size:smaller>"
table_body.appendChild(tr);
xml = xml.replace(sp, '');
}
})
$.ajax({url: link + 'api/net/net-mode',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?>',headers: { "__RequestVerificationToken": Token },dataType: 'xml',success: function(data, textStatus, request) {
if (data.firstChild.textContent == "OK") {msg("");} else {msg("Mengganti Alamat IP"); setTimeout(function() { window.location.reload(); }, 5000);}},error: function(request, textStatus, errorThrown) {msg("Request Error Updating"); setTimeout(function() { window.location.reload(); }, 3000);}})}

function clearStats() {
$.ajax({url: link + 'api/monitoring/clear-traffic',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?><request><ClearTraffic>1</ClearTraffic></request>',headers: { "__RequestVerificationToken": Token },dataType: 'xml',success: function(data, textStatus, request) {
if (data.firstChild.textContent == "OK") {msg("Berhasil Hapus Data"); setTimeout(function() { window.location.reload(); }, 3000);} else {msg("Error Clear Data");}},error: function(request, textStatus, errorThrown) {msg("Request Error Updating"); setTimeout(function() { window.location.reload(); }, 3000);}})}

function DataConnectOn() {
$.ajax({url: link + 'api/dialup/mobile-dataswitch',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?><request><dataswitch>1</dataswitch></request>',headers: { "__RequestVerificationToken": Token },dataType: 'xml',success: function(data, textStatus, request) {
if (data.firstChild.textContent == "OK") {msg("Berhasil Hubungkan"); setTimeout(function() { window.location.reload(); }, 3000);} else {msg("Gagal Hubungkan Ulang");}},error: function(request, textStatus, errorThrown) {msg("Request Error Updating"); setTimeout(function() { window.location.reload(); }, 3000);}})}

function DataConnectOff() {
$.ajax({url: link + 'api/dialup/mobile-dataswitch',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?><request><dataswitch>0</dataswitch></request>',headers: { "__RequestVerificationToken": Token },dataType: 'xml',success: function(data, textStatus, request) {
if (data.firstChild.textContent == "OK") {msg("Berhasil Putuskan"); setTimeout(function() { window.location.reload(); }, 3000);} else {msg("Gagal Putuskan");}},error: function(request, textStatus, errorThrown) {msg("Request Error Updating"); setTimeout(function() { window.location.reload(); }, 3000);}})}

function ReadAntenna() {
$.get(link + 'api/device/antenna_type', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var antennastat1;
antennastat1 = $xml.find('antenna1type').text();
if (antennastat1 == '0') {
antennastat1 = 'Internal'; $("#antenna1").css('background','#0d10b4');
} else if (antennastat1 == '1') {
antennastat1 = 'External'; $("#antenna1").css('background','#b4710d');
} else {
antennastat1 = 'Unknown'; $("#antenna2").css('background','#e00700');
}
$('#antenna1').html(antennastat1);

var antennastat2;
antennastat2 = $xml.find('antenna2type').text();
if (antennastat2 == '0') {
antennastat2 = 'Internal'; $("#antenna2").css('background','#0d10b4');
} else if (antennastat2 == '1') {
antennastat2 = 'External'; $("#antenna2").css('background','#b4710d');
} else {
antennastat2 = 'Unknown'; $("#antenna2").css('background','#e00700');
}
$('#antenna2').html(antennastat2);
})
$.get(link + 'api/device/antenna_status', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var antennasta1;
antennasta1 = $xml.find('antenna1_status').text();
if (antennasta1 == '0') {
antennasta1 = 'Internal'; $("#antenna1").css('background','#0d10b4');
} else if (antennasta1 == '1') {
antennasta1 = 'External'; $("#antenna1").css('background','#b4710d');
} else {
antennasta1 = 'Unknown'; $("#antenna1").css('background','#e00700');
}
$('#antenna1').html(antennasta1);

var antennasta2;
antennasta2 = $xml.find('antenna2_status').text();
if (antennasta2 == '0') {
antennasta2 = 'Internal'; $("#antenna2").css('background','#0d10b4');
} else if (antennasta2 == '1') {
antennasta2 = 'External'; $("#antenna2").css('background','#b4710d');
} else {
antennasta2 = 'Unknown'; $("#antenna2").css('background','#e00700');
}
$('#antenna2').html(antennasta2);
})
$.get(link + 'api/device/antenna_set_type', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var antcolor = $xml.find('antennasettype').text();
if (antcolor == '0') { $("#antcolor").css('background','#11dada');
} else if (antcolor == '1') { $("#antcolor").css('background','#b4710d');
} else if (antcolor == '2') { $("#antcolor").css('background','#0d10b4');
} else if (antcolor == '3') { $("#antcolor").css('background','#f80099');
}
if ($xml.find('antennasettype').text() == "") {
$("#antenna").css('display','none');
$("#SaveAntenna").css('display','none');
} else {
$("#antenna").css('display','');
$("#SaveAntenna").css('display','');
$("#infAntena").css('display','none');
$("#antenna").val($xml.find('antennasettype').text());
}
})
$.get(link + 'api/device/antenna_settings', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var antclr = $xml.find('antenna_type').text();
if (antclr == '3') { $("#antcolor").css('background','#11dada');
} else if (antclr == '1') { $("#antcolor").css('background','#b4710d');
} else if (antclr == '0') { $("#antcolor").css('background','#0d10b4');
} else if (antclr == '2') { $("#antcolor").css('background','#f80099');
}
if ($xml.find('antenna_type').text() == "") {
$("#antennao").css('display','none');
$("#SaveAntennao").css('display','none');
} else {
$("#antennao").css('display','');
$("#SaveAntennao").css('display','');
$("#infAntena").css('display','none');
$("#antennao").val($xml.find('antenna_type').text());
}
})
}

function getantennastatus() {
$.get(link + 'api/device/antenna_type', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var ant1 = $xml.find('antenna1type').text();
var ant2 = $xml.find('antenna2type').text();
if (ant1 == '0' && ant2 == '0') {
$('#antennastatus').html('Internal').css('background','#0d10b4');
$('#antennastatuss').html('Internal').css('background','#0d10b4');
} else if (ant1 == '1' && ant2 == '1') {
$('#antennastatus').html('External').css('background','#b4710d');
$('#antennastatuss').html('External').css('background','#b4710d');
} else if (ant1 == '0' && ant2 == '1') {
$('#antennastatus').html('Mixed').css('background','#f80099');
$('#antennastatuss').html('Mixed').css('background','#f80099');
} else if (ant1 == '1' && ant2 == '0') {
$('#antennastatus').html('Mixed').css('background','#f80099');
$('#antennastatuss').html('Mixed').css('background','#f80099');
}
if (xml == '') {
$('#antennastatus').html('Unknown').css('background','#e00700');
$('#antennastatuss').html('Unknown').css('background','#e00700');
return;
}
})
$.get(link + 'api/device/antenna_set_type', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var ant1t = $xml.find('antennasettype').text();
if (ant1t == '0') {
$('#antennastatus').html('Auto').css('background','#11dada');
$('#antennastatuss').html('Auto').css('background','#11dada');
} else if (ant1t == '1') {
$('#antennastatus').html('External').css('background','#b4710d');
$('#antennastatuss').html('External').css('background','#b4710d');
} else if (ant1t == '2') {
$('#antennastatus').html('Internal').css('background','#0d10b4');
$('#antennastatuss').html('Internal').css('background','#0d10b4');
} else if (ant1t == '3') {
$('#antennastatus').html('Mixed').css('background','#f80099');
$('#antennastatuss').html('Mixed').css('background','#f80099');
}
if (xml == '') {
$('#antennastatus').html('Unknown').css('background','#e00700');
$('#antennastatuss').html('Unknown').css('background','#e00700');
return;
}
})
$.get(link + 'api/device/antenna_status', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var ant1i = $xml.find('antenna1_status').text();
var ant2i = $xml.find('antenna2_status').text();
if (ant1i == '0' && ant2i == '0') {
$('#antennastatus').html('Internal').css('background','#0d10b4');
$('#antennastatuss').html('Internal').css('background','#0d10b4');
} else if (ant1i == '1' && ant2i == '1') {
$('#antennastatus').html('External').css('background','#b4710d');
$('#antennastatuss').html('External').css('background','#b4710d');
} else if (ant1i == '0' && ant2i == '1') {
$('#antennastatus').html('Mixed').css('background','#f80099');
$('#antennastatuss').html('Mixed').css('background','#f80099');
} else if (ant1i == '1' && ant2i == '0') {
$('#antennastatus').html('Mixed').css('background','#f80099');
$('#antennastatuss').html('Mixed').css('background','#f80099');
}
if (xml == '') {
$('#antennastatus').html('Unknown').css('background','#e00700');
$('#antennastatuss').html('Unknown').css('background','#e00700');
return;
}
})
}

function SaveAntenna() {
$.ajax({url: link + 'api/device/antenna_set_type',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?><request><antennasettype>' + $("#antenna").val() + '</antennasettype></request>',headers: { "__RequestVerificationToken": Token },dataType: 'xml',success: function(data, textStatus, request) {
if (data.firstChild.textContent == "OK") {msg("Antenna has been switched"); setTimeout(function() { window.location.reload(); }, 3000);} else {msg("Antenna Not Switched");}},error: function(request, textStatus, errorThrown) {msg("Request Error Updating"); setTimeout(function() { window.location.reload(); }, 3000);}})}

function SaveAntennao() {
$.ajax({url: link + 'api/device/antenna_settings',type: 'post',data: '<?xml version="1.0" encoding="UTF-8"?><request><antenna_type>' + $("#antennao").val() + '</antenna_type></request>',headers: { "__RequestVerificationToken": Token },dataType: 'xml',success: function(data, textStatus, request) {
if (data.firstChild.textContent == "OK") {msg("Antenna has been switched"); setTimeout(function() { window.location.reload(); }, 3000);} else {msg("Antenna Not Switched");}},error: function(request, textStatus, errorThrown) {msg("Request Error Updating"); setTimeout(function() { window.location.reload(); }, 3000);}})}

function ReadBand() {
$.get(link + 'api/net/net-mode', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
nroption = $xml.find('networkOption').text();
if (nroption != '') {
if (nroption == '0') {
$('#leftband').html('5G NSA').css('color','#f3a5f3');
$('#btnNSA').prop('checked', false);
$(".nsacol").css('color','yellow').css('background','green').css('font-weight','bold');
$('#btnNSAa').prop('checked', false);
} else if (nroption == '1') {
$('#leftband').html('5G SA').css('color','#00bb1c');
$('#btnSA').prop('checked', false);
$(".sacol").css('color','yellow').css('background','green').css('font-weight','bold');
$('#btnSAa').prop('checked', false);
} else if (nroption == '2') {
$('#leftband').html('5G SA+NSA').css('color','#007dff');
$('#btnSANSA').prop('checked', false);
$(".sansacol").css('color','yellow').css('background','green').css('font-weight','bold');
$('#btnSANSAa').prop('checked', false);
}
nroption = "<networkOption>" + nroption + "</networkOption>";
}
var nroption = $xml.find('networkOption').text();
if ($xml.find('networkOption').text() == "") {
$(".nop").css('display','none');
} else {
$(".nop").css('display','');
$('#NetOption').html($xml.find('networkOption').text());
}
var NetMode = $xml.find('NetworkMode').text();
$('#LNetMode').html($xml.find('NetworkMode').text());
var NetworkBand = $xml.find('NetworkBand').text();
$('#LNetworkBand').html($xml.find('NetworkBand').text());
var LTEBand = $xml.find('LTEBand').text();
$('#LLTEBand').html($xml.find('LTEBand').text());
if (is4G == true || is4Gplus == true || is3G == false) {
var lteband = $xml.find('LTEBand').text();
$('#allowed').html(B4GType(lteband));
}
switch (NetMode) {
case '00': $('#btnAuto').prop('checked', false); break;
case '01': $('#btn2G').prop('checked', false); break;
case '02': $('#btn3G').prop('checked', false); break;
case '03': $('#btnLTE').prop('checked', false); break;
case '08': $('#btnNR').prop("checked", false); break;
}
(NetworkBand);
(LTEBand);
})
}

function ReadHardBand() {
$.get(link + 'api/net/net-mode-list', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var NetMode = $xml.find('Access').text();
if (NetMode.indexOf("00") > -1) {$(".sAuto").css('display','');} else {$(".sAuto").css('display','none');}
if (NetMode.indexOf("01") > -1) {$(".s2G").css('display','');} else {$(".s2G").css('display','none');}
if (NetMode.indexOf("02") > -1) {$(".s3G").css('display','');} else {$(".s3G").css('display','none');}
if (NetMode.indexOf("03") > -1) {$(".s4G").css('display','');} else {$(".s4G").css('display','none');}
if (NetMode.indexOf("08") > -1) {$(".s5G").css('display','');} else {$(".s5G").css('display','none');}

if ($xml.find('Access').text() == "", passType == 0) {
setTimeout(function() { window.location.reload(); }, 1000);
} else {}
var BandList = $xml.find('BandList').text();
$('#BandList').html($xml.find('BandList').text());
var xmlt = xml.slice(xml.indexOf("<BandList>"), xml.indexOf("</BandList>"));
if (xmlt.indexOf("All bands") > -1) {
xmlt = xmlt.slice(0, xmlt.indexOf("All bands"));
}
var val = '';
while (xmlt.indexOf("<Value>") > -1) {
val = xmlt.slice(xmlt.indexOf("<Value>") + 7, xmlt.indexOf("</Value>"));
show3G(val);
xmlt = xmlt.replace('<Value>' + val + '</Value>', "");
}
xmlt = xml.slice(xml.indexOf("<LTEBand>"), xml.indexOf("</LTEBand>"));
val = xmlt.slice(xmlt.indexOf("<Value>") + 7, xmlt.indexOf("</Value>"));
show4G(val);
(BandList);
})
}

function show3G(val) {
var x = hex_to_bin(val);
x = x.split("").reverse().join("");
if (x.charAt(22) == '1') {$(".sWB1").css('display','');} else {$(".sWB1").css('display','none');}
if (x.charAt(23) == '1') {$(".sWB2").css('display','');} else {$(".sWB2").css('display','none');}
if (x.charAt(25) == '1') {$(".sWB4").css('display','');} else {$(".sWB4").css('display','none');}
if (x.charAt(26) == '1') {$(".sWB5").css('display','');} else {$(".sWB5").css('display','none');}
if (x.charAt(27) == '1') {$(".sWB6").css('display','');} else {$(".sWB6").css('display','none');}
if (x.charAt(49) == '1') {$(".sWB8").css('display','');} else {$(".sWB8").css('display','none');}
if (x.charAt(50) == '1') {$(".sWB9").css('display','');} else {$(".sWB9").css('display','none');}
if (x.charAt(60) == '1') {$(".sWB19").css('display','');} else {$(".sWB19").css('display','none');}
}

function show4G(val) {
var x = hex_to_bin(val);
x = '2' + x.split("").reverse().join("");
if (x.charAt(1) == '1') {$(".sB1").css('display','');} else {$(".sB1").css('display','none');}
if (x.charAt(2) == '1') {$(".sB2").css('display','');} else {$(".sB2").css('display','none');}
if (x.charAt(3) == '1') {$(".sB3").css('display','');} else {$(".sB3").css('display','none');}
if (x.charAt(4) == '1') {$(".sB4").css('display','');} else {$(".sB4").css('display','none');}
if (x.charAt(5) == '1') {$(".sB5").css('display','');} else {$(".sB5").css('display','none');}
if (x.charAt(7) == '1') {$(".sB7").css('display','');} else {$(".sB7").css('display','none');}
if (x.charAt(8) == '1') {$(".sB8").css('display','');} else {$(".sB8").css('display','none');}
if (x.charAt(12) == '1') {$(".sB12").css('display','');} else {$(".sB12").css('display','none');}
if (x.charAt(13) == '1') {$(".sB13").css('display','');} else {$(".sB13").css('display','none');}
if (x.charAt(17) == '1') {$(".sB17").css('display','');} else {$(".sB17").css('display','none');}
if (x.charAt(18) == '1') {$(".sB18").css('display','');} else {$(".sB18").css('display','none');}
if (x.charAt(19) == '1') {$(".sB19").css('display','');} else {$(".sB19").css('display','none');}
if (x.charAt(20) == '1') {$(".sB20").css('display','');} else {$(".sB20").css('display','none');}
if (x.charAt(25) == '1') {$(".sB25").css('display','');} else {$(".sB25").css('display','none');}
if (x.charAt(26) == '1') {$(".sB26").css('display','');} else {$(".sB26").css('display','none');}
if (x.charAt(27) == '1') {$(".sB27").css('display','');} else {$(".sB27").css('display','none');}
if (x.charAt(28) == '1') {$(".sB28").css('display','');} else {$(".sB28").css('display','none');}
if (x.charAt(29) == '1') {$(".sB29").css('display','');} else {$(".sB29").css('display','none');}
if (x.charAt(30) == '1') {$(".sB30").css('display','');} else {$(".sB30").css('display','none');}
if (x.charAt(32) == '1') {$(".sB32").css('display','');} else {$(".sB32").css('display','none');}
if (x.charAt(34) == '1') {$(".sB34").css('display','');} else {$(".sB34").css('display','none');}
if (x.charAt(38) == '1') {$(".sB38").css('display','');} else {$(".sB38").css('display','none');}
if (x.charAt(39) == '1') {$(".sB39").css('display','');} else {$(".sB39").css('display','none');}
if (x.charAt(40) == '1') {$(".sB40").css('display','');} else {$(".sB40").css('display','none');}
if (x.charAt(41) == '1') {$(".sB41").css('display','');} else {$(".sB41").css('display','none');}
if (x.charAt(42) == '1') {$(".sB42").css('display','');} else {$(".sB42").css('display','none');}
if (x.charAt(43) == '1') {$(".sB43").css('display','');} else {$(".sB43").css('display','none');}
if (x.charAt(44) == '1') {$(".sB44").css('display','');} else {$(".sB44").css('display','none');}
if (x.charAt(46) == '1') {$(".sB46").css('display','');} else {$(".sB46").css('display','none');}
if (x.charAt(47) == '1') {$(".sB47").css('display','');} else {$(".sB47").css('display','none');}
if (x.charAt(48) == '1') {$(".sB48").css('display','');} else {$(".sB48").css('display','none');}
if (x.charAt(49) == '1') {$(".sB49").css('display','');} else {$(".sB49").css('display','none');}
if (x.charAt(50) == '1') {$(".sB50").css('display','');} else {$(".sB50").css('display','none');}
if (x.charAt(51) == '1') {$(".sB51").css('display','');} else {$(".sB51").css('display','none');}
if (x.charAt(52) == '1') {$(".sB52").css('display','');} else {$(".sB52").css('display','none');}
if (x.charAt(53) == '1') {$(".sB53").css('display','');} else {$(".sB53").css('display','none');}
}

function doConfirm(msg, yesFn, noFn) {
var confirmBox = $("#confirmBox");
confirmBox.find(".message").text(msg);
confirmBox.find(".yes,.no").unbind().click(function() {
confirmBox.hide();
})
confirmBox.find(".yes").click(yesFn);
confirmBox.find(".no").click(noFn);
confirmBox.show();
}
$(function() {
$("form").submit(function(e) {
e.preventDefault();
var form = this;
doConfirm("Apakah Anda Ingin Memulai Ulang Perangkat ⚠", function yes() {
Restart(1);
}, function no() {
msg("Nyalakan Ulang Dibatalkan");
showM();
})
})
})

$(document).ready(function() {

$('#ReadAntenna').click(function() {ReadAntenna();})
$('#SaveAntenna').click(function() {SaveAntenna();})
$('#SaveAntennao').click(function() {SaveAntennao();})
$('#refreship').click(function() {changeip();})
$('#speedrun').click(function() {callOnLoad();})
$('#ClearStats').click(function() {clearStats();})
$('#ClearStats1').click(function() {clearStats();})
$('#accept').click(function() {setBand();})
$('#accept1').click(function() {setBand();})
$('#Reboot').click(function() {Restart(1);})
$('#Reboot1').click(function() {Restart(1);})
$('#Shutdown').click(function() {Poweroff(4);})
$('#Shutdown1').click(function() {Poweroff(4);})
$('#dataon').click(function() {DataConnectOn();})
$('#dataoff').click(function() {DataConnectOff();})

$('#btnAuto').click(function() {refresh('00','3FFFFFFF','7FFFFFFFFFFFFFFF'); msg("Activating automatic mode"); setTimeout(function() { msgok(); }, 4000);})
$('#btn2G').click(function() {refresh('01','3FFFFFFF','7FFFFFFFFFFFFFFF'); msg("The 2G automatic mode is being activated"); setTimeout(function() { msgok(); }, 4000);})
$('#btn3G').click(function() {refresh('02','3FFFFFFF','7FFFFFFFFFFFFFFF'); msg("The 3G automatic mode is being activated"); setTimeout(function() { msgok(); }, 4000);})
$('#btnLTE').click(function() {refresh('03','3FFFFFFF','7FFFFFFFFFFFFFFF'); msg("The 4G automatic mode is being activated"); setTimeout(function() { msgok(); }, 4000);})
$('#btn5G').click(function() {refresh('00','00000000','7FFFFFFFFFFFFFFF'); msg("The 5G automatic mode is being activated"); setTimeout(function() { msgok(); }, 4000);})

$('#RefreshClient').click(function() {
var table_body = document.getElementById("tbclient");
if (table_body !== "undefined") {
while (table_body.hasChildNodes()) {
table_body.removeChild(table_body.lastChild);
}
}
var thead = document.createElement("thead");
thead.innerHTML = "<td class=\"labeldev\" style=\"font-size:smaller\" colspan=\"2\">Networked Devices</td>";
table_body.appendChild(thead);
$.get(link + 'api/wlan/host-list', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var s1 = '';
while (xml.indexOf('<Host>') > -1) {
s1 = xml.slice(xml.indexOf('<Host>'), xml.indexOf('</Host>') + 7);
var tr = document.createElement("tr");
var time = s1.slice(s1.indexOf('<AssociatedTime>') + 16, s1.indexOf('</AssociatedTime>'));
if (time != '') {
time = getTime(time);
}
tr.innerHTML = "<td style=font-size:7px;color:#00f7ff>WIFI" + "<br/>" + "<span style=font-weight:bold;font-size:10px;color:#aa0000;text-align:center>" + s1.slice(s1.indexOf('<HostName>') + 10, s1.indexOf('</HostName>')) + "</td>" +
"<td style=font-weight:bold;font-size:8px;text-align:left;color:#10df10>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;IP:&nbsp;</span>" + s1.slice(s1.indexOf('<IpAddress>') + 10, s1.indexOf('</IpAddress>')).replace('>','').replace(';','<br>&nbsp;IPv6:&nbsp;') + "<br/>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;MAC:&nbsp;</span>" + s1.slice(s1.indexOf('<MacAddress>') + 12, s1.indexOf('</MacAddress>')) + "<br/>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;Time:&nbsp;</span>" + time + "</td>";
table_body.appendChild(tr);
xml = xml.replace(s1, '');
}
})
var thead = document.createElement("thead");
thead.innerHTML = "";
table_body.appendChild(thead);
$.get(link + 'api/lan/HostInfo', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);
var s1 = '';
while (xml.indexOf('<Host>') > -1) {
s1 = xml.slice(xml.indexOf('<Host>'), xml.indexOf('</Host>') + 7);
var time = s1.slice(s1.indexOf('<AssociatedTime>') + 16, s1.indexOf('</AssociatedTime>'));
if (time != '') {
time = getTime(time);
}
var tr = document.createElement("tr");
var tActiv = '';
if (s1.indexOf('<Active>1') !== -1) {
tActiv = s1.slice(s1.indexOf('<Active>1') + 1, s1.indexOf('</Active>'));
var tInterface = '';
if (s1.indexOf('<InterfaceType>Ethernet') !== -1) {
tInterface = s1.slice(s1.indexOf('<InterfaceType>') + 1, s1.indexOf('</InterfaceType>'));
tr.innerHTML = "<td style=font-size:7px;color:#00f7ff>LAN" + "<br/>" + "<span style=font-weight:bold;font-size:10px;color:#aa0000;text-align:center>" + s1.slice(s1.indexOf('<HostName>') + 10, s1.indexOf('</HostName>')) + "</td>" +
"<td style=font-weight:bold;font-size:8px;text-align:left;color:#10df10>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;IP:&nbsp;</span>" + s1.slice(s1.indexOf('<IpAddress>') + 10, s1.indexOf('</IpAddress>')).replace('>','').replace(';','<br>&nbsp;IPv6:&nbsp;') + "<br/>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;MAC:&nbsp;</span>" + s1.slice(s1.indexOf('<MacAddress>') + 12, s1.indexOf('</MacAddress>')) + "<br/>" +
"<span style=font-weight:bold;font-size:9px;text-align:left;color:#cad809>&nbsp;Time:&nbsp;</span>" + time + "</td>";
}
}
table_body.appendChild(tr);
xml = xml.replace(s1, '');
}
})
})
})