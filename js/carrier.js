function PlmnPh() {
$.get(link + 'api/net/current-plmn', function(data) {
var xml = data,xmlDoc = $.parseXML(xml),$xml = $(xmlDoc);

var numer = $xml.find('Numeric').text();
if ($xml.find('Numeric').text() == "") {
$(".nfo").css('display', 'none');
} else {
$(".nfo").css('display', '');
$('#numer').html(" " + numer);
}

if ($xml.find('Numeric').text() == "41201") {
$('#name').html('Afghanistan');$("#flag").html('🇦🇫');$("#photo").css('background', 'url(carriers/1.png)');
} else if ($xml.find('Numeric').text() == "41250") {
$('#name').html('Afghanistan');$("#flag").html('🇦🇫');$("#photo").css('background', 'url(carriers/2.png)');
} else if ($xml.find('Numeric').text() == "41240") {
$('#name').html('Afghanistan');$("#flag").html('🇦🇫');$("#photo").css('background', 'url(carriers/3.png)');
} else if ($xml.find('Numeric').text() == "41220") {
$('#name').html('Afghanistan');$("#flag").html('🇦🇫');$("#photo").css('background', 'url(carriers/4.png)');
} else if ($xml.find('Numeric').text() == "41280") {
$('#name').html('Afghanistan');$("#flag").html('🇦🇫');$("#photo").css('background', 'url(carriers/5.png)');
} else if ($xml.find('Numeric').text() == "41255") {
$('#name').html('Afghanistan');$("#flag").html('🇦🇫');$("#photo").css('background', 'url(carriers/6.png)');
} else if ($xml.find('Numeric').text() == "27603") {
$('#name').html('Albania');$("#flag").html('🇦🇱');$("#photo").css('background', 'url(carriers/7.png)');
} else if ($xml.find('Numeric').text() == "27601") {
$('#name').html('Albania');$("#flag").html('🇦🇱');$("#photo").css('background', 'url(carriers/8.png)');
} else if ($xml.find('Numeric').text() == "27602") {
$('#name').html('Albania');$("#flag").html('🇦🇱');$("#photo").css('background', 'url(carriers/9.png)');
} else if ($xml.find('Numeric').text() == "60302") {
$('#name').html('Algeria');$("#flag").html('🇩🇿');$("#photo").css('background', 'url(carriers/10.svg)');
} else if ($xml.find('Numeric').text() == "60301") {
$('#name').html('Algeria');$("#flag").html('🇩🇿');$("#photo").css('background', 'url(carriers/11.svg)');
} else if ($xml.find('Numeric').text() == "60309") {
$('#name').html('Algeria');$("#flag").html('🇩🇿');$("#photo").css('background', 'url(carriers/850.svg)');
} else if ($xml.find('Numeric').text() == "60303") {
$('#name').html('Algeria');$("#flag").html('🇩🇿');$("#photo").css('background', 'url(carriers/12.svg)');
} else if ($xml.find('Numeric').text() == "54411") {
$('#name').html('American Samoa');$("#flag").html('🇦🇸');$("#photo").css('background', 'url(carriers/13.png)');
} else if ($xml.find('Numeric').text() == "21303") {
$('#name').html('Andorra');$("#flag").html('🇦🇩');$("#photo").css('background', 'url(carriers/14.png)');
} else if ($xml.find('Numeric').text() == "63104") {
$('#name').html('Angola');$("#flag").html('🇦🇴');$("#photo").css('background', 'url(carriers/15.png)');
} else if ($xml.find('Numeric').text() == "63102") {
$('#name').html('Angola');$("#flag").html('🇦🇴');$("#photo").css('background', 'url(carriers/16.png)');
} else if ($xml.find('Numeric').text() == "365010") {
$('#name').html('Anguilla');$("#flag").html('🇦🇮');$("#photo").css('background', 'url(carriers/17.png)');
} else if ($xml.find('Numeric').text() == "365840") {
$('#name').html('Anguilla');$("#flag").html('🇦🇮');$("#photo").css('background', 'url(carriers/18.png)');
} else if ($xml.find('Numeric').text() == "344030") {
$('#name').html('Antigua and Barbuda');$("#flag").html('🇦🇬');$("#photo").css('background', 'url(carriers/19.png)');
} else if ($xml.find('Numeric').text() == "344050") {
$('#name').html('Antigua and Barbuda');$("#flag").html('🇦🇬');$("#photo").css('background', 'url(carriers/20.png)');
} else if ($xml.find('Numeric').text() == "344920") {
$('#name').html('Antigua and Barbuda');$("#flag").html('🇦🇬');$("#photo").css('background', 'url(carriers/21.png)');
} else if ($xml.find('Numeric').text() == "722310") {
$('#name').html('Argentina');$("#flag").html('🇦🇷');$("#photo").css('background', 'url(carriers/22.png)');
} else if ($xml.find('Numeric').text() == "722010") {
$('#name').html('Argentina');$("#flag").html('🇦🇷');$("#photo").css('background', 'url(carriers/23.png)');
} else if ($xml.find('Numeric').text() == "722020") {
$('#name').html('Argentina');$("#flag").html('🇦🇷');$("#photo").css('background', 'url(carriers/24.png)');
} else if ($xml.find('Numeric').text() == "722034") {
$('#name').html('Argentina');$("#flag").html('🇦🇷');$("#photo").css('background', 'url(carriers/25.png)');
} else if ($xml.find('Numeric').text() == "28301") {
$('#name').html('Armenia');$("#flag").html('🇦🇲');$("#photo").css('background', 'url(carriers/26.png)');
} else if ($xml.find('Numeric').text() == "28304") {
$('#name').html('Armenia');$("#flag").html('🇦🇲');$("#photo").css('background', 'url(carriers/27.png)');
} else if ($xml.find('Numeric').text() == "28310") {
$('#name').html('Armenia');$("#flag").html('🇦🇲');$("#photo").css('background', 'url(carriers/28.png)');
} else if ($xml.find('Numeric').text() == "28305") {
$('#name').html('Armenia');$("#flag").html('🇦🇲');$("#photo").css('background', 'url(carriers/29.png)');
} else if ($xml.find('Numeric').text() == "36302") {
$('#name').html('Aruba');$("#flag").html('🇦🇼');$("#photo").css('background', 'url(carriers/30.png)');
} else if ($xml.find('Numeric').text() == "36301") {
$('#name').html('Aruba');$("#flag").html('🇦🇼');$("#photo").css('background', 'url(carriers/31.png)');
} else if ($xml.find('Numeric').text() == "50506") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/32.png)');
} else if ($xml.find('Numeric').text() == "50514") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/33.png)');
} else if ($xml.find('Numeric').text() == "50524") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/34.png)');
} else if ($xml.find('Numeric').text() == "50504") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/35.png)');
} else if ($xml.find('Numeric').text() == "50510") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/36.png)');
} else if ($xml.find('Numeric').text() == "50508") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/37.png)');
} else if ($xml.find('Numeric').text() == "50536") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/38.png)');
} else if ($xml.find('Numeric').text() == "50521") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/39.png)');
} else if ($xml.find('Numeric').text() == "50501") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/40.png)');
} else if ($xml.find('Numeric').text() == "50538") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/41.png)');
} else if ($xml.find('Numeric').text() == "50502") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/42.png)');
} else if ($xml.find('Numeric').text() == "50503") {
$('#name').html('Australia');$("#flag").html('🇦🇺');$("#photo").css('background', 'url(carriers/43.png)');
} else if ($xml.find('Numeric').text() == "23205") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/44.png)');
} else if ($xml.find('Numeric').text() == "23201") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/45.png)');
} else if ($xml.find('Numeric').text() == "23211") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/46.png)');
} else if ($xml.find('Numeric').text() == "23208") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/47.png)');
} else if ($xml.find('Numeric').text() == "23206") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/48.png)');
} else if ($xml.find('Numeric').text() == "23203") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/49.png)');
} else if ($xml.find('Numeric').text() == "23207") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/50.png)');
} else if ($xml.find('Numeric').text() == "23215") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/51.png)');
} else if ($xml.find('Numeric').text() == "23212") {
$('#name').html('Alnamsa');$("#flag").html('🇦🇹');$("#photo").css('background', 'url(carriers/52.png)');
} else if ($xml.find('Numeric').text() == "40001") {
$('#name').html('Azerbaijan');$("#flag").html('🇦🇿');$("#photo").css('background', 'url(carriers/53.png)');
} else if ($xml.find('Numeric').text() == "40002") {
$('#name').html('Azerbaijan');$("#flag").html('🇦🇿');$("#photo").css('background', 'url(carriers/54.png)');
} else if ($xml.find('Numeric').text() == "40004") {
$('#name').html('Azerbaijan');$("#flag").html('🇦🇿');$("#photo").css('background', 'url(carriers/55.png)');
} else if ($xml.find('Numeric').text() == "40006") {
$('#name').html('Azerbaijan');$("#flag").html('🇦🇿');$("#photo").css('background', 'url(carriers/56.png)');
} else if ($xml.find('Numeric').text() == "36449") {
$('#name').html('Bahamas');$("#flag").html('🇧🇸');$("#photo").css('background', 'url(carriers/57.png)');
} else if ($xml.find('Numeric').text() == "36439") {
$('#name').html('Bahamas');$("#flag").html('🇧🇸');$("#photo").css('background', 'url(carriers/58.png)');
} else if ($xml.find('Numeric').text() == "42601") {
$('#name').html('Bahrain');$("#flag").html('🇧🇭');$("#photo").css('background', 'url(carriers/59.png)');
} else if ($xml.find('Numeric').text() == "42604") {
$('#name').html('Bahrain');$("#flag").html('🇧🇭');$("#photo").css('background', 'url(carriers/60.png)');
} else if ($xml.find('Numeric').text() == "42602") {
$('#name').html('Bahrain');$("#flag").html('🇧🇭');$("#photo").css('background', 'url(carriers/61.png)');
} else if ($xml.find('Numeric').text() == "47007") {
$('#name').html('Bangladesh');$("#flag").html('🇧🇩');$("#photo").css('background', 'url(carriers/62.png)');
} else if ($xml.find('Numeric').text() == "47003") {
$('#name').html('Bangladesh');$("#flag").html('🇧🇩');$("#photo").css('background', 'url(carriers/63.png)');
} else if ($xml.find('Numeric').text() == "47010") {
$('#name').html('Bangladesh');$("#flag").html('🇧🇩');$("#photo").css('background', 'url(carriers/64.png)');
} else if ($xml.find('Numeric').text() == "47001") {
$('#name').html('Bangladesh');$("#flag").html('🇧🇩');$("#photo").css('background', 'url(carriers/65.png)');
} else if ($xml.find('Numeric').text() == "47009") {
$('#name').html('Bangladesh');$("#flag").html('🇧🇩');$("#photo").css('background', 'url(carriers/66.png)');
} else if ($xml.find('Numeric').text() == "47002") {
$('#name').html('Bangladesh');$("#flag").html('🇧🇩');$("#photo").css('background', 'url(carriers/67.png)');
} else if ($xml.find('Numeric').text() == "47004") {
$('#name').html('Bangladesh');$("#flag").html('🇧🇩');$("#photo").css('background', 'url(carriers/68.png)');
} else if ($xml.find('Numeric').text() == "342750") {
$('#name').html('Barbados');$("#flag").html('🇧🇧');$("#photo").css('background', 'url(carriers/69.png)');
} else if ($xml.find('Numeric').text() == "342600") {
$('#name').html('Barbados');$("#flag").html('🇧🇧');$("#photo").css('background', 'url(carriers/70.png)');
} else if ($xml.find('Numeric').text() == "342800") {
$('#name').html('Barbados');$("#flag").html('🇧🇧');$("#photo").css('background', 'url(carriers/71.png)');
} else if ($xml.find('Numeric').text() == "25701") {
$('#name').html('Belarus');$("#flag").html('🇧🇾');$("#photo").css('background', 'url(carriers/72.png)');
} else if ($xml.find('Numeric').text() == "25706") {
$('#name').html('Belarus');$("#flag").html('🇧🇾');$("#photo").css('background', 'url(carriers/73.png)');
} else if ($xml.find('Numeric').text() == "25704") {
$('#name').html('Belarus');$("#flag").html('🇧🇾');$("#photo").css('background', 'url(carriers/74.png)');
} else if ($xml.find('Numeric').text() == "25702") {
$('#name').html('Belarus');$("#flag").html('🇧🇾');$("#photo").css('background', 'url(carriers/75.png)');
} else if ($xml.find('Numeric').text() == "20620") {
$('#name').html('Belgium');$("#flag").html('🇧🇪');$("#photo").css('background', 'url(carriers/76.png)');
} else if ($xml.find('Numeric').text() == "20606") {
$('#name').html('Belgium');$("#flag").html('🇧🇪');$("#photo").css('background', 'url(carriers/77.png)');
} else if ($xml.find('Numeric').text() == "20630") {
$('#name').html('Belgium');$("#flag").html('🇧🇪');$("#photo").css('background', 'url(carriers/78.png)');
} else if ($xml.find('Numeric').text() == "20610") {
$('#name').html('Belgium');$("#flag").html('🇧🇪');$("#photo").css('background', 'url(carriers/79.png)');
} else if ($xml.find('Numeric').text() == "20601") {
$('#name').html('Belgium');$("#flag").html('🇧🇪');$("#photo").css('background', 'url(carriers/80.png)');
} else if ($xml.find('Numeric').text() == "20605") {
$('#name').html('Belgium');$("#flag").html('🇧🇪');$("#photo").css('background', 'url(carriers/81.png)');
} else if ($xml.find('Numeric').text() == "70267") {
$('#name').html('Belize');$("#flag").html('🇧🇿');$("#photo").css('background', 'url(carriers/82.png)');
} else if ($xml.find('Numeric').text() == "70269") {
$('#name').html('Belize');$("#flag").html('🇧🇿');$("#photo").css('background', 'url(carriers/83.png)');
} else if ($xml.find('Numeric').text() == "61601") {
$('#name').html('Benin');$("#flag").html('🇧🇯');$("#photo").css('background', 'url(carriers/84.png)');
} else if ($xml.find('Numeric').text() == "61605") {
$('#name').html('Benin');$("#flag").html('🇧🇯');$("#photo").css('background', 'url(carriers/85.png)');
} else if ($xml.find('Numeric').text() == "61602") {
$('#name').html('Benin');$("#flag").html('🇧🇯');$("#photo").css('background', 'url(carriers/86.png)');
} else if ($xml.find('Numeric').text() == "61603") {
$('#name').html('Benin');$("#flag").html('🇧🇯');$("#photo").css('background', 'url(carriers/87.png)');
} else if ($xml.find('Numeric').text() == "35000") {
$('#name').html('Bermuda');$("#flag").html('🇧🇲');$("#photo").css('background', 'url(carriers/88.png)');
} else if ($xml.find('Numeric').text() == "338050") {
$('#name').html('Bermuda');$("#flag").html('🇧🇲');$("#photo").css('background', 'url(carriers/89.png)');
} else if ($xml.find('Numeric').text() == "40211") {
$('#name').html('Bhutan');$("#flag").html('🇧🇹');$("#photo").css('background', 'url(carriers/90.png)');
} else if ($xml.find('Numeric').text() == "40177") {
$('#name').html('Bhutan');$("#flag").html('🇧🇹');$("#photo").css('background', 'url(carriers/91.png)');
} else if ($xml.find('Numeric').text() == "73602") {
$('#name').html('Bolivia');$("#flag").html('🇧🇴');$("#photo").css('background', 'url(carriers/92.png)');
} else if ($xml.find('Numeric').text() == "73603") {
$('#name').html('Bolivia');$("#flag").html('🇧🇴');$("#photo").css('background', 'url(carriers/93.png)');
} else if ($xml.find('Numeric').text() == "73601") {
$('#name').html('Bolivia');$("#flag").html('🇧🇴');$("#photo").css('background', 'url(carriers/94.png)');
} else if ($xml.find('Numeric').text() == "21890") {
$('#name').html('Bosnia-and-herzegovina');$("#flag").html('🇧🇦');$("#photo").css('background', 'url(carriers/95.png)');
} else if ($xml.find('Numeric').text() == "21803") {
$('#name').html('Bosnia-and-herzegovina');$("#flag").html('🇧🇦');$("#photo").css('background', 'url(carriers/96.png)');
} else if ($xml.find('Numeric').text() == "21805") {
$('#name').html('Bosnia-and-herzegovina');$("#flag").html('🇧🇦');$("#photo").css('background', 'url(carriers/97.png)');
} else if ($xml.find('Numeric').text() == "65204") {
$('#name').html('Botswana');$("#flag").html('🇧🇼');$("#photo").css('background', 'url(carriers/98.png)');
} else if ($xml.find('Numeric').text() == "65201") {
$('#name').html('Botswana');$("#flag").html('🇧🇼');$("#photo").css('background', 'url(carriers/99.png)');
} else if ($xml.find('Numeric').text() == "65202") {
$('#name').html('Botswana');$("#flag").html('🇧🇼');$("#photo").css('background', 'url(carriers/100.png)');
} else if ($xml.find('Numeric').text() == "72432") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/101.png)');
} else if ($xml.find('Numeric').text() == "72424") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/102.png)');
} else if ($xml.find('Numeric').text() == "72416") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/103.png)');
} else if ($xml.find('Numeric').text() == "72405") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/104.png)');
} else if ($xml.find('Numeric').text() == "72417") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/105.png)');
} else if ($xml.find('Numeric').text() == "72418") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/106.png)');
} else if ($xml.find('Numeric').text() == "72400") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/107.png)');
} else if ($xml.find('Numeric').text() == "72430") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/108.png)');
} else if ($xml.find('Numeric').text() == "72415") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/109.png)');
} else if ($xml.find('Numeric').text() == "72402") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/110.png)');
} else if ($xml.find('Numeric').text() == "72406") {
$('#name').html('Brazil');$("#flag").html('🇧🇷');$("#photo").css('background', 'url(carriers/111.png)');
} else if ($xml.find('Numeric').text() == "348570") {
$('#name').html('British-virgin-islands');$("#flag").html('🇻🇬');$("#photo").css('background', 'url(carriers/112.png)');
} else if ($xml.find('Numeric').text() == "348770") {
$('#name').html('British-virgin-islands');$("#flag").html('🇻🇬');$("#photo").css('background', 'url(carriers/113.png)');
} else if ($xml.find('Numeric').text() == "348170") {
$('#name').html('British-virgin-islands');$("#flag").html('🇻🇬');$("#photo").css('background', 'url(carriers/114.png)');
} else if ($xml.find('Numeric').text() == "52811") {
$('#name').html('Brunei');$("#flag").html('🇧🇳');$("#photo").css('background', 'url(carriers/115.png)');
} else if ($xml.find('Numeric').text() == "52802") {
$('#name').html('Brunei');$("#flag").html('🇧🇳');$("#photo").css('background', 'url(carriers/116.png)');
} else if ($xml.find('Numeric').text() == "52801") {
$('#name').html('Brunei');$("#flag").html('🇧🇳');$("#photo").css('background', 'url(carriers/117.png)');
} else if ($xml.find('Numeric').text() == "28401") {
$('#name').html('Bulgaria');$("#flag").html('🇧🇬');$("#photo").css('background', 'url(carriers/118.png)');
} else if ($xml.find('Numeric').text() == "28411") {
$('#name').html('Bulgaria');$("#flag").html('🇧🇬');$("#photo").css('background', 'url(carriers/119.png)');
} else if ($xml.find('Numeric').text() == "28413") {
$('#name').html('Bulgaria');$("#flag").html('🇧🇬');$("#photo").css('background', 'url(carriers/120.png)');
} else if ($xml.find('Numeric').text() == "28405") {
$('#name').html('Bulgaria');$("#flag").html('🇧🇬');$("#photo").css('background', 'url(carriers/121.png)');
} else if ($xml.find('Numeric').text() == "28403") {
$('#name').html('Bulgaria');$("#flag").html('🇧🇬');$("#photo").css('background', 'url(carriers/122.png)');
} else if ($xml.find('Numeric').text() == "61301") {
$('#name').html('Burkina-faso');$("#flag").html('🇧🇫');$("#photo").css('background', 'url(carriers/123.png)');
} else if ($xml.find('Numeric').text() == "61302") {
$('#name').html('Burkina-faso');$("#flag").html('🇧🇫');$("#photo").css('background', 'url(carriers/124.png)');
} else if ($xml.find('Numeric').text() == "61303") {
$('#name').html('Burkina-faso');$("#flag").html('🇧🇫');$("#photo").css('background', 'url(carriers/125.png)');
} else if ($xml.find('Numeric').text() == "64201") {
$('#name').html('Burundi');$("#flag").html('🇧🇮');$("#photo").css('background', 'url(carriers/126.png)');
} else if ($xml.find('Numeric').text() == "64208") {
$('#name').html('Burundi');$("#flag").html('🇧🇮');$("#photo").css('background', 'url(carriers/127.png)');
} else if ($xml.find('Numeric').text() == "64203") {
$('#name').html('Burundi');$("#flag").html('🇧🇮');$("#photo").css('background', 'url(carriers/128.png)');
} else if ($xml.find('Numeric').text() == "64207") {
$('#name').html('Burundi');$("#flag").html('🇧🇮');$("#photo").css('background', 'url(carriers/129.png)');
} else if ($xml.find('Numeric').text() == "45601") {
$('#name').html('Cambodia');$("#flag").html('🇰🇭');$("#photo").css('background', 'url(carriers/130.png)');
} else if ($xml.find('Numeric').text() == "45608") {
$('#name').html('Cambodia');$("#flag").html('🇰🇭');$("#photo").css('background', 'url(carriers/131.png)');
} else if ($xml.find('Numeric').text() == "45603") {
$('#name').html('Cambodia');$("#flag").html('🇰🇭');$("#photo").css('background', 'url(carriers/132.png)');
} else if ($xml.find('Numeric').text() == "45611") {
$('#name').html('Cambodia');$("#flag").html('🇰🇭');$("#photo").css('background', 'url(carriers/133.png)');
} else if ($xml.find('Numeric').text() == "45602") {
$('#name').html('Cambodia');$("#flag").html('🇰🇭');$("#photo").css('background', 'url(carriers/134.png)');
} else if ($xml.find('Numeric').text() == "62401") {
$('#name').html('Cameroon');$("#flag").html('🇨🇲');$("#photo").css('background', 'url(carriers/135.png)');
} else if ($xml.find('Numeric').text() == "62404") {
$('#name').html('Cameroon');$("#flag").html('🇨🇲');$("#photo").css('background', 'url(carriers/136.png)');
} else if ($xml.find('Numeric').text() == "62402") {
$('#name').html('Cameroon');$("#flag").html('🇨🇲');$("#photo").css('background', 'url(carriers/137.png)');
} else if ($xml.find('Numeric').text() == "302290") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/138.png)');
} else if ($xml.find('Numeric').text() == "302610") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/139.png)');
} else if ($xml.find('Numeric').text() == "302270") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/140.png)');
} else if ($xml.find('Numeric').text() == "302370") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/141.png)');
} else if ($xml.find('Numeric').text() == "302490") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/142.png)');
} else if ($xml.find('Numeric').text() == "302710") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/143.png)');
} else if ($xml.find('Numeric').text() == "302620") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/144.png)');
} else if ($xml.find('Numeric').text() == "302380") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/145.png)');
} else if ($xml.find('Numeric').text() == "302220") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/146.png)');
} else if ($xml.find('Numeric').text() == "302660") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/147.png)');
} else if ($xml.find('Numeric').text() == "302320") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/148.png)');
} else if ($xml.find('Numeric').text() == "302680") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/149.png)');
} else if ($xml.find('Numeric').text() == "302650") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/150.png)');
} else if ($xml.find('Numeric').text() == "302220") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/151.png)');
} else if ($xml.find('Numeric').text() == "302500") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/152.png)');
} else if ($xml.find('Numeric').text() == "302610") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/153.png)');
} else if ($xml.find('Numeric').text() == "302130") {
$('#name').html('Canada');$("#flag").html('🇨🇦');$("#photo").css('background', 'url(carriers/154.png)');
} else if ($xml.find('Numeric').text() == "62501") {
$('#name').html('Cape-verde');$("#flag").html('🇨🇻');$("#photo").css('background', 'url(carriers/155.png)');
} else if ($xml.find('Numeric').text() == "62502") {
$('#name').html('Cape-verde');$("#flag").html('🇨🇻');$("#photo").css('background', 'url(carriers/156.png)');
} else if ($xml.find('Numeric').text() == "346050") {
$('#name').html('Cayman-islands');$("#flag").html('🇰🇾');$("#photo").css('background', 'url(carriers/157.png)');
} else if ($xml.find('Numeric').text() == "346140") {
$('#name').html('Cayman-islands');$("#flag").html('🇰🇾');$("#photo").css('background', 'url(carriers/158.png)');
} else if ($xml.find('Numeric').text() == "62304") {
$('#name').html('Central-african-republic');$("#flag").html('🇨🇫');$("#photo").css('background', 'url(carriers/159.png)');
} else if ($xml.find('Numeric').text() == "62301") {
$('#name').html('Central-african-republic');$("#flag").html('🇨🇫');$("#photo").css('background', 'url(carriers/160.png)');
} else if ($xml.find('Numeric').text() == "62303") {
$('#name').html('Central-african-republic');$("#flag").html('🇨🇫');$("#photo").css('background', 'url(carriers/161.png)');
} else if ($xml.find('Numeric').text() == "62302") {
$('#name').html('Central-african-republic');$("#flag").html('🇨🇫');$("#photo").css('background', 'url(carriers/162.png)');
} else if ($xml.find('Numeric').text() == "66201") {
$('#name').html('Chad');$("#flag").html('🇹🇩');$("#photo").css('background', 'url(carriers/163.png)');
} else if ($xml.find('Numeric').text() == "66207") {
$('#name').html('Chad');$("#flag").html('🇹🇩');$("#photo").css('background', 'url(carriers/164.png)');
} else if ($xml.find('Numeric').text() == "66203") {
$('#name').html('Chad');$("#flag").html('🇹🇩');$("#photo").css('background', 'url(carriers/165.png)');
} else if ($xml.find('Numeric').text() == "73003") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/166.png)');
} else if ($xml.find('Numeric').text() == "73001") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/167.png)');
} else if ($xml.find('Numeric').text() == "73019") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/168.png)');
} else if ($xml.find('Numeric').text() == "73002") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/169.png)');
} else if ($xml.find('Numeric').text() == "73004") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/170.png)');
} else if ($xml.find('Numeric').text() == "73006") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/171.png)');
} else if ($xml.find('Numeric').text() == "73013") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/172.png)');
} else if ($xml.find('Numeric').text() == "73008") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/173.png)');
} else if ($xml.find('Numeric').text() == "73004") {
$('#name').html('Chile');$("#flag").html('🇨🇱');$("#photo").css('background', 'url(carriers/174.png)');
} else if ($xml.find('Numeric').text() == "46000") {
$('#name').html('China');$("#flag").html('🇨🇳');$("#photo").css('background', 'url(carriers/175.png)');
} else if ($xml.find('Numeric').text() == "46003") {
$('#name').html('China');$("#flag").html('🇨🇳');$("#photo").css('background', 'url(carriers/176.png)');
} else if ($xml.find('Numeric').text() == "46020") {
$('#name').html('China');$("#flag").html('🇨🇳');$("#photo").css('background', 'url(carriers/177.png)');
} else if ($xml.find('Numeric').text() == "46001") {
$('#name').html('China');$("#flag").html('🇨🇳');$("#photo").css('background', 'url(carriers/178.png)');
} else if ($xml.find('Numeric').text() == "732130") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/179.png)');
} else if ($xml.find('Numeric').text() == "732101") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/180.png)');
} else if ($xml.find('Numeric').text() == "732101") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/181.png)');
} else if ($xml.find('Numeric').text() == "732176") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/182.png)');
} else if ($xml.find('Numeric').text() == "732002") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/183.png)');
} else if ($xml.find('Numeric').text() == "732187") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/184.png)');
} else if ($xml.find('Numeric').text() == "732101") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/185.png)');
} else if ($xml.find('Numeric').text() == "732020") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/186.png)');
} else if ($xml.find('Numeric').text() == "732154") {
$('#name').html('Colombia');$("#flag").html('🇨🇴');$("#photo").css('background', 'url(carriers/187.png)');
} else if ($xml.find('Numeric').text() == "65401") {
$('#name').html('Comoros');$("#flag").html('🇰🇲');$("#photo").css('background', 'url(carriers/188.png)');
} else if ($xml.find('Numeric').text() == "65402") {
$('#name').html('Comoros');$("#flag").html('🇰🇲');$("#photo").css('background', 'url(carriers/189.png)');
} else if ($xml.find('Numeric').text() == "54801") {
$('#name').html('Cook-islands');$("#flag").html('🇨🇰');$("#photo").css('background', 'url(carriers/190.png)');
} else if ($xml.find('Numeric').text() == "71203") {
$('#name').html('Costa-rica');$("#flag").html('🇨🇷');$("#photo").css('background', 'url(carriers/191.png)');
} else if ($xml.find('Numeric').text() == "71220") {
$('#name').html('Costa-rica');$("#flag").html('🇨🇷');$("#photo").css('background', 'url(carriers/192.png)');
} else if ($xml.find('Numeric').text() == "71201") {
$('#name').html('Costa-rica');$("#flag").html('🇨🇷');$("#photo").css('background', 'url(carriers/193.png)');
} else if ($xml.find('Numeric').text() == "71204") {
$('#name').html('Costa-rica');$("#flag").html('🇨🇷');$("#photo").css('background', 'url(carriers/194.png)');
} else if ($xml.find('Numeric').text() == "21910") {
$('#name').html('Croatia');$("#flag").html('🇭🇷');$("#photo").css('background', 'url(carriers/195.png)');
} else if ($xml.find('Numeric').text() == "21912") {
$('#name').html('Croatia');$("#flag").html('🇭🇷');$("#photo").css('background', 'url(carriers/196.png)');
} else if ($xml.find('Numeric').text() == "21902") {
$('#name').html('Croatia');$("#flag").html('🇭🇷');$("#photo").css('background', 'url(carriers/197.png)');
} else if ($xml.find('Numeric').text() == "21901") {
$('#name').html('Croatia');$("#flag").html('🇭🇷');$("#photo").css('background', 'url(carriers/198.png)');
} else if ($xml.find('Numeric').text() == "36801") {
$('#name').html('Cuba');$("#flag").html('🇨🇺');$("#photo").css('background', 'url(carriers/199.png)');
} else if ($xml.find('Numeric').text() == "28001") {
$('#name').html('Cyprus');$("#flag").html('🇨🇾');$("#photo").css('background', 'url(carriers/200.png)');
} else if ($xml.find('Numeric').text() == "28010") {
$('#name').html('Cyprus');$("#flag").html('🇨🇾');$("#photo").css('background', 'url(carriers/201.png)');
} else if ($xml.find('Numeric').text() == "28022") {
$('#name').html('Cyprus');$("#flag").html('🇨🇾');$("#photo").css('background', 'url(carriers/202.png)');
} else if ($xml.find('Numeric').text() == "28020") {
$('#name').html('Cyprus');$("#flag").html('🇨🇾');$("#photo").css('background', 'url(carriers/203.png)');
} else if ($xml.find('Numeric').text() == "23004") {
$('#name').html('Czech-republic');$("#flag").html('🇨🇿');$("#photo").css('background', 'url(carriers/204.png)');
} else if ($xml.find('Numeric').text() == "23002") {
$('#name').html('Czech-republic');$("#flag").html('🇨🇿');$("#photo").css('background', 'url(carriers/205.png)');
} else if ($xml.find('Numeric').text() == "23098") {
$('#name').html('Czech-republic');$("#flag").html('🇨🇿');$("#photo").css('background', 'url(carriers/206.png)');
} else if ($xml.find('Numeric').text() == "23001") {
$('#name').html('Czech-republic');$("#flag").html('🇨🇿');$("#photo").css('background', 'url(carriers/207.png)');
} else if ($xml.find('Numeric').text() == "23003") {
$('#name').html('Czech-republic');$("#flag").html('🇨🇿');$("#photo").css('background', 'url(carriers/208.png)');
} else if ($xml.find('Numeric').text() == "63090") {
$('#name').html('Democratic-republic-of-congo');$("#flag").html('🇨🇩');$("#photo").css('background', 'url(carriers/209.png)');
} else if ($xml.find('Numeric').text() == "63002") {
$('#name').html('Democratic-republic-of-congo');$("#flag").html('🇨🇩');$("#photo").css('background', 'url(carriers/210.png)');
} else if ($xml.find('Numeric').text() == "63086") {
$('#name').html('Democratic-republic-of-congo');$("#flag").html('🇨🇩');$("#photo").css('background', 'url(carriers/211.png)');
} else if ($xml.find('Numeric').text() == "63001") {
$('#name').html('Democratic-republic-of-congo');$("#flag").html('🇨🇩');$("#photo").css('background', 'url(carriers/212.png)');
} else if ($xml.find('Numeric').text() == "23806") {
$('#name').html('Denmark');$("#flag").html('🇩🇰');$("#photo").css('background', 'url(carriers/213.png)');
} else if ($xml.find('Numeric').text() == "23812") {
$('#name').html('Denmark');$("#flag").html('🇩🇰');$("#photo").css('background', 'url(carriers/214.png)');
} else if ($xml.find('Numeric').text() == "23801") {
$('#name').html('Denmark');$("#flag").html('🇩🇰');$("#photo").css('background', 'url(carriers/215.png)');
} else if ($xml.find('Numeric').text() == "23802") {
$('#name').html('Denmark');$("#flag").html('🇩🇰');$("#photo").css('background', 'url(carriers/216.png)');
} else if ($xml.find('Numeric').text() == "23820") {
$('#name').html('Denmark');$("#flag").html('🇩🇰');$("#photo").css('background', 'url(carriers/217.png)');
} else if ($xml.find('Numeric').text() == "23807") {
$('#name').html('Denmark');$("#flag").html('🇩🇰');$("#photo").css('background', 'url(carriers/218.png)');
} else if ($xml.find('Numeric').text() == "63801") {
$('#name').html('Djibouti');$("#flag").html('🇩🇯');$("#photo").css('background', 'url(carriers/219.png)');
} else if ($xml.find('Numeric').text() == "366020") {
$('#name').html('Dominica');$("#flag").html('🇩🇲');$("#photo").css('background', 'url(carriers/220.png)');
} else if ($xml.find('Numeric').text() == "366110") {
$('#name').html('Dominica');$("#flag").html('🇩🇲');$("#photo").css('background', 'url(carriers/221.png)');
} else if ($xml.find('Numeric').text() == "37001") {
$('#name').html('Dominican-republic');$("#flag").html('🇩🇴');$("#photo").css('background', 'url(carriers/222.png)');
} else if ($xml.find('Numeric').text() == "37002") {
$('#name').html('Dominican-republic');$("#flag").html('🇩🇴');$("#photo").css('background', 'url(carriers/223.png)');
} else if ($xml.find('Numeric').text() == "37004") {
$('#name').html('Dominican-republic');$("#flag").html('🇩🇴');$("#photo").css('background', 'url(carriers/224.png)');
} else if ($xml.find('Numeric').text() == "37005") {
$('#name').html('Dominican-republic');$("#flag").html('🇩🇴');$("#photo").css('background', 'url(carriers/225.png)');
} else if ($xml.find('Numeric').text() == "51403") {
$('#name').html('East-timor');$("#flag").html('🇹🇱');$("#photo").css('background', 'url(carriers/226.png)');
} else if ($xml.find('Numeric').text() == "51401") {
$('#name').html('East-timor');$("#flag").html('🇹🇱');$("#photo").css('background', 'url(carriers/227.png)');
} else if ($xml.find('Numeric').text() == "51402") {
$('#name').html('East-timor');$("#flag").html('🇹🇱');$("#photo").css('background', 'url(carriers/228.png)');
} else if ($xml.find('Numeric').text() == "74001") {
$('#name').html('Ecuador');$("#flag").html('🇪🇨');$("#photo").css('background', 'url(carriers/229.png)');
} else if ($xml.find('Numeric').text() == "74002") {
$('#name').html('Ecuador');$("#flag").html('🇪🇨');$("#photo").css('background', 'url(carriers/230.png)');
} else if ($xml.find('Numeric').text() == "74000") {
$('#name').html('Ecuador');$("#flag").html('🇪🇨');$("#photo").css('background', 'url(carriers/231.png)');
} else if ($xml.find('Numeric').text() == "74003") {
$('#name').html('Ecuador');$("#flag").html('🇪🇨');$("#photo").css('background', 'url(carriers/232.png)');
} else if ($xml.find('Numeric').text() == "60203") {
$('#name').html('Egypt');$("#flag").html('🇪🇬');$("#photo").css('background', 'url(carriers/233.png)');
} else if ($xml.find('Numeric').text() == "60201") {
$('#name').html('Egypt');$("#flag").html('🇪🇬');$("#photo").css('background', 'url(carriers/234.png)');
} else if ($xml.find('Numeric').text() == "60202") {
$('#name').html('Egypt');$("#flag").html('🇪🇬');$("#photo").css('background', 'url(carriers/235.png)');
} else if ($xml.find('Numeric').text() == "60204") {
$('#name').html('Egypt');$("#flag").html('🇪🇬');$("#photo").css('background', 'url(carriers/236.png)');
} else if ($xml.find('Numeric').text() == "70601") {
$('#name').html('El-salvador');$("#flag").html('🇸🇻');$("#photo").css('background', 'url(carriers/237.png)');
} else if ($xml.find('Numeric').text() == "70602") {
$('#name').html('El-salvador');$("#flag").html('🇸🇻');$("#photo").css('background', 'url(carriers/238.png)');
} else if ($xml.find('Numeric').text() == "70604") {
$('#name').html('El-salvador');$("#flag").html('🇸🇻');$("#photo").css('background', 'url(carriers/239.png)');
} else if ($xml.find('Numeric').text() == "70603") {
$('#name').html('El-salvador');$("#flag").html('🇸🇻');$("#photo").css('background', 'url(carriers/240.png)');
} else if ($xml.find('Numeric').text() == "62703") {
$('#name').html('Equatorial-guinea');$("#flag").html('🇬🇶');$("#photo").css('background', 'url(carriers/241.png)');
} else if ($xml.find('Numeric').text() == "62701") {
$('#name').html('Equatorial-guinea');$("#flag").html('🇬🇶');$("#photo").css('background', 'url(carriers/242.png)');
} else if ($xml.find('Numeric').text() == "65701") {
$('#name').html('Eritrea');$("#flag").html('🇪🇷');$("#photo").css('background', 'url(carriers/243.png)');
} else if ($xml.find('Numeric').text() == "24802") {
$('#name').html('Estonia');$("#flag").html('🇪🇪');$("#photo").css('background', 'url(carriers/244.png)');
} else if ($xml.find('Numeric').text() == "24803") {
$('#name').html('Estonia');$("#flag").html('🇪🇪');$("#photo").css('background', 'url(carriers/245.png)');
} else if ($xml.find('Numeric').text() == "24801") {
$('#name').html('Estonia');$("#flag").html('🇪🇪');$("#photo").css('background', 'url(carriers/246.png)');
} else if ($xml.find('Numeric').text() == "63601") {
$('#name').html('Ethiopia');$("#flag").html('🇪🇹');$("#photo").css('background', 'url(carriers/247.png)');
} else if ($xml.find('Numeric').text() == "28801") {
$('#name').html('Faroe-islands');$("#flag").html('🇫🇴');$("#photo").css('background', 'url(carriers/248.png)');
} else if ($xml.find('Numeric').text() == "28802") {
$('#name').html('Faroe-islands');$("#flag").html('🇫🇴');$("#photo").css('background', 'url(carriers/249.png)');
} else if ($xml.find('Numeric').text() == "54202") {
$('#name').html('Fiji');$("#flag").html('🇫🇯');$("#photo").css('background', 'url(carriers/250.png)');
} else if ($xml.find('Numeric').text() == "54203") {
$('#name').html('Fiji');$("#flag").html('🇫🇯');$("#photo").css('background', 'url(carriers/251.png)');
} else if ($xml.find('Numeric').text() == "54201") {
$('#name').html('Fiji');$("#flag").html('🇫🇯');$("#photo").css('background', 'url(carriers/252.png)');
} else if ($xml.find('Numeric').text() == "24414") {
$('#name').html('Finland');$("#flag").html('🇫🇮');$("#photo").css('background', 'url(carriers/253.png)');
} else if ($xml.find('Numeric').text() == "24403") {
$('#name').html('Finland');$("#flag").html('🇫🇮');$("#photo").css('background', 'url(carriers/254.png)');
} else if ($xml.find('Numeric').text() == "24405") {
$('#name').html('Finland');$("#flag").html('🇫🇮');$("#photo").css('background', 'url(carriers/255.png)');
} else if ($xml.find('Numeric').text() == "24420") {
$('#name').html('Finland');$("#flag").html('🇫🇮');$("#photo").css('background', 'url(carriers/256.png)');
} else if ($xml.find('Numeric').text() == "24435") {
$('#name').html('Finland');$("#flag").html('🇫🇮');$("#photo").css('background', 'url(carriers/257.png)');
} else if ($xml.find('Numeric').text() == "24433") {
$('#name').html('Finland');$("#flag").html('🇫🇮');$("#photo").css('background', 'url(carriers/258.png)');
} else if ($xml.find('Numeric').text() == "20820") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/259.png)');
} else if ($xml.find('Numeric').text() == "20815") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/260.png)');
} else if ($xml.find('Numeric').text() == "20805") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/261.png)');
} else if ($xml.find('Numeric').text() == "20810") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/262.png)');
} else if ($xml.find('Numeric').text() == "20826") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/263.png)');
} else if ($xml.find('Numeric').text() == "20801") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/264.png)');
} else if ($xml.find('Numeric').text() == "20808") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/265.png)');
} else if ($xml.find('Numeric').text() == "20822") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/266.png)');
} else if ($xml.find('Numeric').text() == "20810") {
$('#name').html('France');$("#flag").html('🇫🇷');$("#photo").css('background', 'url(carriers/267.png)');
} else if ($xml.find('Numeric').text() == "54720") {
$('#name').html('French-polynesia');$("#flag").html('🇵🇫');$("#photo").css('background', 'url(carriers/268.png)');
} else if ($xml.find('Numeric').text() == "54705") {
$('#name').html('French-polynesia');$("#flag").html('🇵🇫');$("#photo").css('background', 'url(carriers/269.png)');
} else if ($xml.find('Numeric').text() == "54715") {
$('#name').html('French-polynesia');$("#flag").html('🇵🇫');$("#photo").css('background', 'url(carriers/270.png)');
} else if ($xml.find('Numeric').text() == "62803") {
$('#name').html('Gabon');$("#flag").html('🇬🇦');$("#photo").css('background', 'url(carriers/271.png)');
} else if ($xml.find('Numeric').text() == "62804") {
$('#name').html('Gabon');$("#flag").html('🇬🇦');$("#photo").css('background', 'url(carriers/272.png)');
} else if ($xml.find('Numeric').text() == "62801") {
$('#name').html('Gabon');$("#flag").html('🇬🇦');$("#photo").css('background', 'url(carriers/273.png)');
} else if ($xml.find('Numeric').text() == "62802") {
$('#name').html('Gabon');$("#flag").html('🇬🇦');$("#photo").css('background', 'url(carriers/274.png)');
} else if ($xml.find('Numeric').text() == "60702") {
$('#name').html('Gambia');$("#flag").html('🇬🇲');$("#photo").css('background', 'url(carriers/275.png)');
} else if ($xml.find('Numeric').text() == "60703") {
$('#name').html('Gambia');$("#flag").html('🇬🇲');$("#photo").css('background', 'url(carriers/276.png)');
} else if ($xml.find('Numeric').text() == "60701") {
$('#name').html('Gambia');$("#flag").html('🇬🇲');$("#photo").css('background', 'url(carriers/277.png)');
} else if ($xml.find('Numeric').text() == "60706") {
$('#name').html('Gambia');$("#flag").html('🇬🇲');$("#photo").css('background', 'url(carriers/278.png)');
} else if ($xml.find('Numeric').text() == "60704") {
$('#name').html('Gambia');$("#flag").html('🇬🇲');$("#photo").css('background', 'url(carriers/279.png)');
} else if ($xml.find('Numeric').text() == "28204") {
$('#name').html('Georgia');$("#flag").html('🇬🇪');$("#photo").css('background', 'url(carriers/280.png)');
} else if ($xml.find('Numeric').text() == "28201") {
$('#name').html('Georgia');$("#flag").html('🇬🇪');$("#photo").css('background', 'url(carriers/281.png)');
} else if ($xml.find('Numeric').text() == "28202") {
$('#name').html('Georgia');$("#flag").html('🇬🇪');$("#photo").css('background', 'url(carriers/282.png)');
} else if ($xml.find('Numeric').text() == "28205") {
$('#name').html('Georgia');$("#flag").html('🇬🇪');$("#photo").css('background', 'url(carriers/283.png)');
} else if ($xml.find('Numeric').text() == "26215") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/284.png)');
} else if ($xml.find('Numeric').text() == "26213") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/285.png)');
} else if ($xml.find('Numeric').text() == "26212") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/286.png)');
} else if ($xml.find('Numeric').text() == "26243") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/287.png)');
} else if ($xml.find('Numeric').text() == "26292") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/288.png)');
} else if ($xml.find('Numeric').text() == "26203") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/289.png)');
} else if ($xml.find('Numeric').text() == "26233") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/290.png)');
} else if ($xml.find('Numeric').text() == "26201") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/291.png)');
} else if ($xml.find('Numeric').text() == "26202") {
$('#name').html('Germany');$("#flag").html('🇩🇪');$("#photo").css('background', 'url(carriers/292.png)');
} else if ($xml.find('Numeric').text() == "62003") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/293.png)');
} else if ($xml.find('Numeric').text() == "62010") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/294.png)');
} else if ($xml.find('Numeric').text() == "62007") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/295.png)');
} else if ($xml.find('Numeric').text() == "62001") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/296.png)');
} else if ($xml.find('Numeric').text() == "62008") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/297.png)');
} else if ($xml.find('Numeric').text() == "62002") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/298.png)');
} else if ($xml.find('Numeric').text() == "26601") {
$('#name').html('Gibraltar');$("#flag").html('🇬🇮');$("#photo").css('background', 'url(carriers/299.png)');
} else if ($xml.find('Numeric').text() == "20201") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/300.png)');
} else if ($xml.find('Numeric').text() == "20214") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/301.png)');
} else if ($xml.find('Numeric').text() == "20205") {
$('#name').html('Ghana');$("#flag").html('🇬🇭');$("#photo").css('background', 'url(carriers/302.png)');
} else if ($xml.find('Numeric').text() == "20209") {
$('#name').html('Greece');$("#flag").html('🇬🇷');$("#photo").css('background', 'url(carriers/303.png)');
} else if ($xml.find('Numeric').text() == "29002") {
$('#name').html('Greenland');$("#flag").html('🇬🇱');$("#photo").css('background', 'url(carriers/304.png)');
} else if ($xml.find('Numeric').text() == "29001") {
$('#name').html('Greenland');$("#flag").html('🇬🇱');$("#photo").css('background', 'url(carriers/305.png)');
} else if ($xml.find('Numeric').text() == "352030") {
$('#name').html('Grenada');$("#flag").html('🇬🇩');$("#photo").css('background', 'url(carriers/306.png)');
} else if ($xml.find('Numeric').text() == "352110") {
$('#name').html('Grenada');$("#flag").html('🇬🇩');$("#photo").css('background', 'url(carriers/307.png)');
} else if ($xml.find('Numeric').text() == "34020") {
$('#name').html('Guadeloupe');$("#flag").html('🇬🇵');$("#photo").css('background', 'url(carriers/308.png)');
} else if ($xml.find('Numeric').text() == "34001") {
$('#name').html('Guadeloupe');$("#flag").html('🇬🇵');$("#photo").css('background', 'url(carriers/309.png)');
} else if ($xml.find('Numeric').text() == "310140") {
$('#name').html('Guam');$("#flag").html('🇬🇺');$("#photo").css('background', 'url(carriers/310.png)');
} else if ($xml.find('Numeric').text() == "310400") {
$('#name').html('Guam');$("#flag").html('🇬🇺');$("#photo").css('background', 'url(carriers/311.png)');
} else if ($xml.find('Numeric').text() == "310032") {
$('#name').html('Guam');$("#flag").html('🇬🇺');$("#photo").css('background', 'url(carriers/312.png)');
} else if ($xml.find('Numeric').text() == "310370") {
$('#name').html('Guam');$("#flag").html('🇬🇺');$("#photo").css('background', 'url(carriers/313.png)');
} else if ($xml.find('Numeric').text() == "70401") {
$('#name').html('Guatemala');$("#flag").html('🇬🇹');$("#photo").css('background', 'url(carriers/314.png)');
} else if ($xml.find('Numeric').text() == "70403") {
$('#name').html('Guatemala');$("#flag").html('🇬🇹');$("#photo").css('background', 'url(carriers/315.png)');
} else if ($xml.find('Numeric').text() == "70402") {
$('#name').html('Guatemala');$("#flag").html('🇬🇹');$("#photo").css('background', 'url(carriers/316.png)');
} else if ($xml.find('Numeric').text() == "73801") {
$('#name').html('Guiana');$("#flag").html('🇬🇫');$("#photo").css('background', 'url(carriers/317.png)');
} else if ($xml.find('Numeric').text() == "738002") {
$('#name').html('Guiana');$("#flag").html('🇬🇫');$("#photo").css('background', 'url(carriers/318.png)');
} else if ($xml.find('Numeric').text() == "61105") {
$('#name').html('Guinea');$("#flag").html('🇬🇳');$("#photo").css('background', 'url(carriers/319.png)');
} else if ($xml.find('Numeric').text() == "61104") {
$('#name').html('Guinea');$("#flag").html('🇬🇳');$("#photo").css('background', 'url(carriers/320.png)');
} else if ($xml.find('Numeric').text() == "61101") {
$('#name').html('Guinea');$("#flag").html('🇬🇳');$("#photo").css('background', 'url(carriers/321.png)');
} else if ($xml.find('Numeric').text() == "61103") {
$('#name').html('Guinea');$("#flag").html('🇬🇳');$("#photo").css('background', 'url(carriers/322.png)');
} else if ($xml.find('Numeric').text() == "63202") {
$('#name').html('Guinea-bissau');$("#flag").html('🇬🇼');$("#photo").css('background', 'url(carriers/323.png)');
} else if ($xml.find('Numeric').text() == "63203") {
$('#name').html('Guinea-bissau');$("#flag").html('🇬🇼');$("#photo").css('background', 'url(carriers/324.png)');
} else if ($xml.find('Numeric').text() == "37202") {
$('#name').html('Haiti');$("#flag").html('🇭🇹');$("#photo").css('background', 'url(carriers/325.png)');
} else if ($xml.find('Numeric').text() == "37203") {
$('#name').html('Haiti');$("#flag").html('🇭🇹');$("#photo").css('background', 'url(carriers/326.png)');
} else if ($xml.find('Numeric').text() == "708001") {
$('#name').html('Honduras');$("#flag").html('🇭🇳');$("#photo").css('background', 'url(carriers/327.png)');
} else if ($xml.find('Numeric').text() == "708040") {
$('#name').html('Honduras');$("#flag").html('🇭🇳');$("#photo").css('background', 'url(carriers/328.png)');
} else if ($xml.find('Numeric').text() == "708030") {
$('#name').html('Honduras');$("#flag").html('🇭🇳');$("#photo").css('background', 'url(carriers/329.png)');
} else if ($xml.find('Numeric').text() == "708002") {
$('#name').html('Honduras');$("#flag").html('🇭🇳');$("#photo").css('background', 'url(carriers/330.png)');
} else if ($xml.find('Numeric').text() == "45403") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/331.png)');
} else if ($xml.find('Numeric').text() == "45412") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/332.png)');
} else if ($xml.find('Numeric').text() == "45407") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/333.png)');
} else if ($xml.find('Numeric').text() == "45411") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/334.png)');
} else if ($xml.find('Numeric').text() == "45401") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/335.png)');
} else if ($xml.find('Numeric').text() == "45400") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/336.png)');
} else if ($xml.find('Numeric').text() == "45414") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/337.png)');
} else if ($xml.find('Numeric').text() == "45416") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/338.png)');
} else if ($xml.find('Numeric').text() == "45415") {
$('#name').html('Hong-kong');$("#flag").html('🇭🇰');$("#photo").css('background', 'url(carriers/339.png)');
} else if ($xml.find('Numeric').text() == "21602") {
$('#name').html('Hungary');$("#flag").html('🇭🇺');$("#photo").css('background', 'url(carriers/340.png)');
} else if ($xml.find('Numeric').text() == "21630") {
$('#name').html('Hungary');$("#flag").html('🇭🇺');$("#photo").css('background', 'url(carriers/341.png)');
} else if ($xml.find('Numeric').text() == "21601") {
$('#name').html('Hungary');$("#flag").html('🇭🇺');$("#photo").css('background', 'url(carriers/342.png)');
} else if ($xml.find('Numeric').text() == "21670") {
$('#name').html('Hungary');$("#flag").html('🇭🇺');$("#photo").css('background', 'url(carriers/343.png)');
} else if ($xml.find('Numeric').text() == "27411") {
$('#name').html('Iceland');$("#flag").html('🇮🇸');$("#photo").css('background', 'url(carriers/344.png)');
} else if ($xml.find('Numeric').text() == "27408") {
$('#name').html('Iceland');$("#flag").html('🇮🇸');$("#photo").css('background', 'url(carriers/345.png)');
} else if ($xml.find('Numeric').text() == "27401") {
$('#name').html('Iceland');$("#flag").html('🇮🇸');$("#photo").css('background', 'url(carriers/346.png)');
} else if ($xml.find('Numeric').text() == "27402") {
$('#name').html('Iceland');$("#flag").html('🇮🇸');$("#photo").css('background', 'url(carriers/347.png)');
} else if ($xml.find('Numeric').text() == "40417") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/348.png)');
} else if ($xml.find('Numeric').text() == "40406") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/349.png)');
} else if ($xml.find('Numeric').text() == "40421") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/350.png)');
} else if ($xml.find('Numeric').text() == "40434") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/351.png)');
} else if ($xml.find('Numeric').text() == "40404") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/352.png)');
} else if ($xml.find('Numeric').text() == "405840") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/353.png)');
} else if ($xml.find('Numeric').text() == "40409") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/354.png)');
} else if ($xml.find('Numeric').text() == "405025") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/355.png)');
} else if ($xml.find('Numeric').text() == "40401") {
$('#name').html('India');$("#flag").html('🇮🇳');$("#photo").css('background', 'url(carriers/356.png)');
} else if ($xml.find('Numeric').text() == "51089") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/357.png)');
} else if ($xml.find('Numeric').text() == "51008") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/358.png)');
} else if ($xml.find('Numeric').text() == "51088") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/359.png)');
} else if ($xml.find('Numeric').text() == "51001") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/360.png)');
} else if ($xml.find('Numeric').text() == "51000") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/361.png)');
} else if ($xml.find('Numeric').text() == "51009") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/362.png)');
} else if ($xml.find('Numeric').text() == "51007") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/363.png)');
} else if ($xml.find('Numeric').text() == "51010") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/364.png)');
} else if ($xml.find('Numeric').text() == "51011") {
$('#name').html('Indonesia');$("#flag").html('🇮🇩');$("#photo").css('background', 'url(carriers/365.png)');
} else if ($xml.find('Numeric').text() == "43211") {
$('#name').html('Iran');$("#flag").html('🇮🇷');$("#photo").css('background', 'url(carriers/366.png)');
} else if ($xml.find('Numeric').text() == "43212") {
$('#name').html('Iran');$("#flag").html('🇮🇷');$("#photo").css('background', 'url(carriers/367.png)');
} else if ($xml.find('Numeric').text() == "43235") {
$('#name').html('Iran');$("#flag").html('🇮🇷');$("#photo").css('background', 'url(carriers/368.png)');
} else if ($xml.find('Numeric').text() == "43220") {
$('#name').html('Iran');$("#flag").html('🇮🇷');$("#photo").css('background', 'url(carriers/369.png)');
} else if ($xml.find('Numeric').text() == "43232") {
$('#name').html('Iran');$("#flag").html('🇮🇷');$("#photo").css('background', 'url(carriers/370.png)');
} else if ($xml.find('Numeric').text() == "43270") {
$('#name').html('Iran');$("#flag").html('🇮🇷');$("#photo").css('background', 'url(carriers/371.png)');
} else if ($xml.find('Numeric').text() == "41800") {
$('#name').html('Iraq');$("#flag").html('🇮🇶');$("#photo").css('background', 'url(carriers/372.png)');
} else if ($xml.find('Numeric').text() == "41840") {
$('#name').html('Iraq');$("#flag").html('🇮🇶');$("#photo").css('background', 'url(carriers/373.png)');
} else if ($xml.find('Numeric').text() == "41845") {
$('#name').html('Iraq');$("#flag").html('🇮🇶');$("#photo").css('background', 'url(carriers/374.png)');
} else if ($xml.find('Numeric').text() == "41892") {
$('#name').html('Iraq');$("#flag").html('🇮🇶');$("#photo").css('background', 'url(carriers/375.png)');
} else if ($xml.find('Numeric').text() == "41820") {
$('#name').html('Iraq');$("#flag").html('🇮🇶');$("#photo").css('background', 'url(carriers/376.png)');
} else if ($xml.find('Numeric').text() == "27202") {
$('#name').html('Ireland');$("#flag").html('🇮🇪');$("#photo").css('background', 'url(carriers/377.png)');
} else if ($xml.find('Numeric').text() == "27203") {
$('#name').html('Ireland');$("#flag").html('🇮🇪');$("#photo").css('background', 'url(carriers/378.png)');
} else if ($xml.find('Numeric').text() == "27213") {
$('#name').html('Ireland');$("#flag").html('🇮🇪');$("#photo").css('background', 'url(carriers/379.png)');
} else if ($xml.find('Numeric').text() == "27203") {
$('#name').html('Ireland');$("#flag").html('🇮🇪');$("#photo").css('background', 'url(carriers/380.png)');
} else if ($xml.find('Numeric').text() == "27202") {
$('#name').html('Ireland');$("#flag").html('🇮🇪');$("#photo").css('background', 'url(carriers/381.png)');
} else if ($xml.find('Numeric').text() == "27211") {
$('#name').html('Ireland');$("#flag").html('🇮🇪');$("#photo").css('background', 'url(carriers/382.png)');
} else if ($xml.find('Numeric').text() == "27201") {
$('#name').html('Ireland');$("#flag").html('🇮🇪');$("#photo").css('background', 'url(carriers/383.png)');
} else if ($xml.find('Numeric').text() == "42509") {
$('#name').html('Israel');$("#flag").html('🇮🇱');$("#photo").css('background', 'url(carriers/384.png)');
} else if ($xml.find('Numeric').text() == "42502") {
$('#name').html('Israel');$("#flag").html('🇮🇱');$("#photo").css('background', 'url(carriers/385.png)');
} else if ($xml.find('Numeric').text() == "42508") {
$('#name').html('Israel');$("#flag").html('🇮🇱');$("#photo").css('background', 'url(carriers/386.png)');
} else if ($xml.find('Numeric').text() == "42507") {
$('#name').html('Israel');$("#flag").html('🇮🇱');$("#photo").css('background', 'url(carriers/387.png)');
} else if ($xml.find('Numeric').text() == "42501") {
$('#name').html('Israel');$("#flag").html('🇮🇱');$("#photo").css('background', 'url(carriers/388.png)');
} else if ($xml.find('Numeric').text() == "42503") {
$('#name').html('Israel');$("#flag").html('🇮🇱');$("#photo").css('background', 'url(carriers/389.png)');
} else if ($xml.find('Numeric').text() == "42516") {
$('#name').html('Israel');$("#flag").html('🇮🇱');$("#photo").css('background', 'url(carriers/390.png)');
} else if ($xml.find('Numeric').text() == "22237") {
$('#name').html('Italy');$("#flag").html('🇮🇹');$("#photo").css('background', 'url(carriers/391.png)');
} else if ($xml.find('Numeric').text() == "22250") {
$('#name').html('Italy');$("#flag").html('🇮🇹');$("#photo").css('background', 'url(carriers/392.png)');
} else if ($xml.find('Numeric').text() == "22201") {
$('#name').html('Italy');$("#flag").html('🇮🇹');$("#photo").css('background', 'url(carriers/393.png)');
} else if ($xml.find('Numeric').text() == "22206") {
$('#name').html('Italy');$("#flag").html('🇮🇹');$("#photo").css('background', 'url(carriers/394.png)');
} else if ($xml.find('Numeric').text() == "22288") {
$('#name').html('Italy');$("#flag").html('🇮🇹');$("#photo").css('background', 'url(carriers/395.png)');
} else if ($xml.find('Numeric').text() == "61202") {
$('#name').html('Ivory-coast');$("#flag").html('🇨🇮');$("#photo").css('background', 'url(carriers/396.png)');
} else if ($xml.find('Numeric').text() == "61205") {
$('#name').html('Ivory-coast');$("#flag").html('🇨🇮');$("#photo").css('background', 'url(carriers/397.png)');
} else if ($xml.find('Numeric').text() == "61203") {
$('#name').html('Ivory-coast');$("#flag").html('🇨🇮');$("#photo").css('background', 'url(carriers/398.png)');
} else if ($xml.find('Numeric').text() == "338040") {
$('#name').html('Jamaica');$("#flag").html('🇯🇲');$("#photo").css('background', 'url(carriers/399.png)');
} else if ($xml.find('Numeric').text() == "338050") {
$('#name').html('Jamaica');$("#flag").html('🇯🇲');$("#photo").css('background', 'url(carriers/400.png)');
} else if ($xml.find('Numeric').text() == "338020") {
$('#name').html('Jamaica');$("#flag").html('🇯🇲');$("#photo").css('background', 'url(carriers/401.png)');
} else if ($xml.find('Numeric').text() == "44000") {
$('#name').html('Japan');$("#flag").html('🇯🇵');$("#photo").css('background', 'url(carriers/402.png)');
} else if ($xml.find('Numeric').text() == "44050") {
$('#name').html('Japan');$("#flag").html('🇯🇵');$("#photo").css('background', 'url(carriers/403.png)');
} else if ($xml.find('Numeric').text() == "44010") {
$('#name').html('Japan');$("#flag").html('🇯🇵');$("#photo").css('background', 'url(carriers/404.png)');
} else if ($xml.find('Numeric').text() == "44020") {
$('#name').html('Japan');$("#flag").html('🇯🇵');$("#photo").css('background', 'url(carriers/405.png)');
} else if ($xml.find('Numeric').text() == "41677") {
$('#name').html('Jordan');$("#flag").html('🇯🇴');$("#photo").css('background', 'url(carriers/406.png)');
} else if ($xml.find('Numeric').text() == "41603") {
$('#name').html('Jordan');$("#flag").html('🇯🇴');$("#photo").css('background', 'url(carriers/407.png)');
} else if ($xml.find('Numeric').text() == "41601") {
$('#name').html('Jordan');$("#flag").html('🇯🇴');$("#photo").css('background', 'url(carriers/408.png)');
} else if ($xml.find('Numeric').text() == "40107") {
$('#name').html('Kazakhstan');$("#flag").html('🇰🇿');$("#photo").css('background', 'url(carriers/409.png)');
} else if ($xml.find('Numeric').text() == "40101") {
$('#name').html('Kazakhstan');$("#flag").html('🇰🇿');$("#photo").css('background', 'url(carriers/410.png)');
} else if ($xml.find('Numeric').text() == "40108") {
$('#name').html('Kazakhstan');$("#flag").html('🇰🇿');$("#photo").css('background', 'url(carriers/411.png)');
} else if ($xml.find('Numeric').text() == "40102") {
$('#name').html('Kazakhstan');$("#flag").html('🇰🇿');$("#photo").css('background', 'url(carriers/412.png)');
} else if ($xml.find('Numeric').text() == "40177") {
$('#name').html('Kazakhstan');$("#flag").html('🇰🇿');$("#photo").css('background', 'url(carriers/413.png)');
} else if ($xml.find('Numeric').text() == "63903") {
$('#name').html('Kenya');$("#flag").html('🇰🇪');$("#photo").css('background', 'url(carriers/414.png)');
} else if ($xml.find('Numeric').text() == "63910") {
$('#name').html('Kenya');$("#flag").html('🇰🇪');$("#photo").css('background', 'url(carriers/415.png)');
} else if ($xml.find('Numeric').text() == "63901") {
$('#name').html('Kenya');$("#flag").html('🇰🇪');$("#photo").css('background', 'url(carriers/416.png)');
} else if ($xml.find('Numeric').text() == "63907") {
$('#name').html('Kenya');$("#flag").html('🇰🇪');$("#photo").css('background', 'url(carriers/417.png)');
} else if ($xml.find('Numeric').text() == "54501") {
$('#name').html('Kiribati');$("#flag").html('🇰🇮');$("#photo").css('background', 'url(carriers/418.png)');
} else if ($xml.find('Numeric').text() == "41903") {
$('#name').html('Kuwait');$("#flag").html('🇰🇼');$("#photo").css('background', 'url(carriers/419.png)');
} else if ($xml.find('Numeric').text() == "41904") {
$('#name').html('Kuwait');$("#flag").html('🇰🇼');$("#photo").css('background', 'url(carriers/420.png)');
} else if ($xml.find('Numeric').text() == "41902") {
$('#name').html('Kuwait');$("#flag").html('🇰🇼');$("#photo").css('background', 'url(carriers/421.png)');
} else if ($xml.find('Numeric').text() == "43701") {
$('#name').html('Kyrgyzstan');$("#flag").html('🇰🇬');$("#photo").css('background', 'url(carriers/422.png)');
} else if ($xml.find('Numeric').text() == "43705") {
$('#name').html('Kyrgyzstan');$("#flag").html('🇰🇬');$("#photo").css('background', 'url(carriers/423.png)');
} else if ($xml.find('Numeric').text() == "43709") {
$('#name').html('Kyrgyzstan');$("#flag").html('🇰🇬');$("#photo").css('background', 'url(carriers/424.png)');
} else if ($xml.find('Numeric').text() == "45708") {
$('#name').html('Laos');$("#flag").html('🇱🇦');$("#photo").css('background', 'url(carriers/425.png)');
} else if ($xml.find('Numeric').text() == "45702") {
$('#name').html('Laos');$("#flag").html('🇱🇦');$("#photo").css('background', 'url(carriers/426.png)');
} else if ($xml.find('Numeric').text() == "45701") {
$('#name').html('Laos');$("#flag").html('🇱🇦');$("#photo").css('background', 'url(carriers/427.png)');
} else if ($xml.find('Numeric').text() == "45703") {
$('#name').html('Laos');$("#flag").html('🇱🇦');$("#photo").css('background', 'url(carriers/428.png)');
} else if ($xml.find('Numeric').text() == "24705") {
$('#name').html('Latvia');$("#flag").html('🇱🇻');$("#photo").css('background', 'url(carriers/429.png)');
} else if ($xml.find('Numeric').text() == "24701") {
$('#name').html('Latvia');$("#flag").html('🇱🇻');$("#photo").css('background', 'url(carriers/430.png)');
} else if ($xml.find('Numeric').text() == "24706") {
$('#name').html('Latvia');$("#flag").html('🇱🇻');$("#photo").css('background', 'url(carriers/431.png)');
} else if ($xml.find('Numeric').text() == "24702") {
$('#name').html('Latvia');$("#flag").html('🇱🇻');$("#photo").css('background', 'url(carriers/432.png)');
} else if ($xml.find('Numeric').text() == "24703") {
$('#name').html('Latvia');$("#flag").html('🇱🇻');$("#photo").css('background', 'url(carriers/433.png)');
} else if ($xml.find('Numeric').text() == "41501") {
$('#name').html('Lebanon');$("#flag").html('🇱🇧');$("#photo").css('background', 'url(carriers/434.png)');
} else if ($xml.find('Numeric').text() == "41505") {
$('#name').html('Lebanon');$("#flag").html('🇱🇧');$("#photo").css('background', 'url(carriers/435.png)');
} else if ($xml.find('Numeric').text() == "41503") {
$('#name').html('Lebanon');$("#flag").html('🇱🇧');$("#photo").css('background', 'url(carriers/436.png)');
} else if ($xml.find('Numeric').text() == "65102") {
$('#name').html('Lesotho');$("#flag").html('🇱🇸');$("#photo").css('background', 'url(carriers/437.png)');
} else if ($xml.find('Numeric').text() == "65101") {
$('#name').html('Lesotho');$("#flag").html('🇱🇸');$("#photo").css('background', 'url(carriers/438.png)');
} else if ($xml.find('Numeric').text() == "61820") {
$('#name').html('Liberia');$("#flag").html('🇱🇷');$("#photo").css('background', 'url(carriers/439.png)');
} else if ($xml.find('Numeric').text() == "61801") {
$('#name').html('Liberia');$("#flag").html('🇱🇷');$("#photo").css('background', 'url(carriers/440.png)');
} else if ($xml.find('Numeric').text() == "61804") {
$('#name').html('Liberia');$("#flag").html('🇱🇷');$("#photo").css('background', 'url(carriers/441.png)');
} else if ($xml.find('Numeric').text() == "61807") {
$('#name').html('Liberia');$("#flag").html('🇱🇷');$("#photo").css('background', 'url(carriers/442.png)');
} else if ($xml.find('Numeric').text() == "60601") {
$('#name').html('Libya');$("#flag").html('🇱🇾');$("#photo").css('background', 'url(carriers/443.png)');
} else if ($xml.find('Numeric').text() == "60602") {
$('#name').html('Libya');$("#flag").html('🇱🇾');$("#photo").css('background', 'url(carriers/444.png)');
} else if ($xml.find('Numeric').text() == "60606") {
$('#name').html('Libya');$("#flag").html('🇱🇾');$("#photo").css('background', 'url(carriers/445.png)');
} else if ($xml.find('Numeric').text() == "60600") {
$('#name').html('Libya');$("#flag").html('🇱🇾');$("#photo").css('background', 'url(carriers/446.png)');
} else if ($xml.find('Numeric').text() == "29502") {
$('#name').html('Liechtenstein');$("#flag").html('🇱🇮');$("#photo").css('background', 'url(carriers/447.png)');
} else if ($xml.find('Numeric').text() == "29506") {
$('#name').html('Liechtenstein');$("#flag").html('🇱🇮');$("#photo").css('background', 'url(carriers/448.png)');
} else if ($xml.find('Numeric').text() == "29505") {
$('#name').html('Liechtenstein');$("#flag").html('🇱🇮');$("#photo").css('background', 'url(carriers/449.png)');
} else if ($xml.find('Numeric').text() == "29501") {
$('#name').html('Liechtenstein');$("#flag").html('🇱🇮');$("#photo").css('background', 'url(carriers/450.png)');
} else if ($xml.find('Numeric').text() == "24602") {
$('#name').html('Lithuania');$("#flag").html('🇱🇹');$("#photo").css('background', 'url(carriers/451.png)');
} else if ($xml.find('Numeric').text() == "24606") {
$('#name').html('Lithuania');$("#flag").html('🇱🇹');$("#photo").css('background', 'url(carriers/452.png)');
} else if ($xml.find('Numeric').text() == "24603") {
$('#name').html('Lithuania');$("#flag").html('🇱🇹');$("#photo").css('background', 'url(carriers/453.png)');
} else if ($xml.find('Numeric').text() == "24601") {
$('#name').html('Lithuania');$("#flag").html('🇱🇹');$("#photo").css('background', 'url(carriers/454.png)');
} else if ($xml.find('Numeric').text() == "27099") {
$('#name').html('Luxembourg');$("#flag").html('🇱🇺');$("#photo").css('background', 'url(carriers/455.png)');
} else if ($xml.find('Numeric').text() == "27001") {
$('#name').html('Luxembourg');$("#flag").html('🇱🇺');$("#photo").css('background', 'url(carriers/456.png)');
} else if ($xml.find('Numeric').text() == "27077") {
$('#name').html('Luxembourg');$("#flag").html('🇱🇺');$("#photo").css('background', 'url(carriers/457.png)');
} else if ($xml.find('Numeric').text() == "45503") {
$('#name').html('Macao');$("#flag").html('🇲🇴');$("#photo").css('background', 'url(carriers/458.png)');
} else if ($xml.find('Numeric').text() == "45507") {
$('#name').html('Macao');$("#flag").html('🇲🇴');$("#photo").css('background', 'url(carriers/459.png)');
} else if ($xml.find('Numeric').text() == "45504") {
$('#name').html('Macao');$("#flag").html('🇲🇴');$("#photo").css('background', 'url(carriers/460.png)');
} else if ($xml.find('Numeric').text() == "45506") {
$('#name').html('Macao');$("#flag").html('🇲🇴');$("#photo").css('background', 'url(carriers/461.png)');
} else if ($xml.find('Numeric').text() == "29404") {
$('#name').html('Macedonia');$("#flag").html('🇲🇰');$("#photo").css('background', 'url(carriers/462.png)');
} else if ($xml.find('Numeric').text() == "29401") {
$('#name').html('Macedonia');$("#flag").html('🇲🇰');$("#photo").css('background', 'url(carriers/463.png)');
} else if ($xml.find('Numeric').text() == "29402") {
$('#name').html('Macedonia');$("#flag").html('🇲🇰');$("#photo").css('background', 'url(carriers/464.png)');
} else if ($xml.find('Numeric').text() == "64601") {
$('#name').html('Madagascar');$("#flag").html('🇲🇬');$("#photo").css('background', 'url(carriers/465.png)');
} else if ($xml.find('Numeric').text() == "64602") {
$('#name').html('Madagascar');$("#flag").html('🇲🇬');$("#photo").css('background', 'url(carriers/466.png)');
} else if ($xml.find('Numeric').text() == "64604") {
$('#name').html('Madagascar');$("#flag").html('🇲🇬');$("#photo").css('background', 'url(carriers/467.png)');
} else if ($xml.find('Numeric').text() == "65002") {
$('#name').html('Malawi');$("#flag").html('🇲🇼');$("#photo").css('background', 'url(carriers/468.png)');
} else if ($xml.find('Numeric').text() == "65010") {
$('#name').html('Malawi');$("#flag").html('🇲🇼');$("#photo").css('background', 'url(carriers/469.png)');
} else if ($xml.find('Numeric').text() == "65001") {
$('#name').html('Malawi');$("#flag").html('🇲🇼');$("#photo").css('background', 'url(carriers/470.png)');
} else if ($xml.find('Numeric').text() == "50213") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/471.png)');
} else if ($xml.find('Numeric').text() == "50216") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/472.png)');
} else if ($xml.find('Numeric').text() == "50220") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/473.png)');
} else if ($xml.find('Numeric').text() == "50212") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/474.png)');
} else if ($xml.find('Numeric').text() == "502153") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/475.png)');
} else if ($xml.find('Numeric').text() == "50201") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/476.png)');
} else if ($xml.find('Numeric').text() == "502150") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/477.png)');
} else if ($xml.find('Numeric').text() == "50218") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/478.png)');
} else if ($xml.find('Numeric').text() == "502152") {
$('#name').html('Malaysia');$("#flag").html('🇲🇾');$("#photo").css('background', 'url(carriers/479.png)');
} else if ($xml.find('Numeric').text() == "47201") {
$('#name').html('Maldives');$("#flag").html('🇲🇻');$("#photo").css('background', 'url(carriers/480.png)');
} else if ($xml.find('Numeric').text() == "47202") {
$('#name').html('Maldives');$("#flag").html('🇲🇻');$("#photo").css('background', 'url(carriers/481.png)');
} else if ($xml.find('Numeric').text() == "61002") {
$('#name').html('Mali');$("#flag").html('🇲🇱');$("#photo").css('background', 'url(carriers/482.png)');
} else if ($xml.find('Numeric').text() == "61001") {
$('#name').html('Mali');$("#flag").html('🇲🇱');$("#photo").css('background', 'url(carriers/483.png)');
} else if ($xml.find('Numeric').text() == "27821") {
$('#name').html('Malta');$("#flag").html('🇲🇹');$("#photo").css('background', 'url(carriers/484.png)');
} else if ($xml.find('Numeric').text() == "27877") {
$('#name').html('Malta');$("#flag").html('🇲🇹');$("#photo").css('background', 'url(carriers/485.png)');
} else if ($xml.find('Numeric').text() == "27801") {
$('#name').html('Malta');$("#flag").html('🇲🇹');$("#photo").css('background', 'url(carriers/486.png)');
} else if ($xml.find('Numeric').text() == "60902") {
$('#name').html('Mauretania');$("#flag").html('🇲🇷');$("#photo").css('background', 'url(carriers/487.png)');
} else if ($xml.find('Numeric').text() == "60901") {
$('#name').html('Mauretania');$("#flag").html('🇲🇷');$("#photo").css('background', 'url(carriers/488.png)');
} else if ($xml.find('Numeric').text() == "60910") {
$('#name').html('Mauretania');$("#flag").html('🇲🇷');$("#photo").css('background', 'url(carriers/489.png)');
} else if ($xml.find('Numeric').text() == "61703") {
$('#name').html('Mauritius');$("#flag").html('🇲🇺');$("#photo").css('background', 'url(carriers/490.png)');
} else if ($xml.find('Numeric').text() == "61710") {
$('#name').html('Mauritius');$("#flag").html('🇲🇺');$("#photo").css('background', 'url(carriers/491.png)');
} else if ($xml.find('Numeric').text() == "61701") {
$('#name').html('Mauritius');$("#flag").html('🇲🇺');$("#photo").css('background', 'url(carriers/492.png)');
} else if ($xml.find('Numeric').text() == "334140") {
$('#name').html('Mexico');$("#flag").html('🇲🇽');$("#photo").css('background', 'url(carriers/493.png)');
} else if ($xml.find('Numeric').text() == "334010") {
$('#name').html('Mexico');$("#flag").html('🇲🇽');$("#photo").css('background', 'url(carriers/494.png)');
} else if ($xml.find('Numeric').text() == "334030") {
$('#name').html('Mexico');$("#flag").html('🇲🇽');$("#photo").css('background', 'url(carriers/495.png)');
} else if ($xml.find('Numeric').text() == "334020") {
$('#name').html('Mexico');$("#flag").html('🇲🇽');$("#photo").css('background', 'url(carriers/496.png)');
} else if ($xml.find('Numeric').text() == "334150") {
$('#name').html('Mexico');$("#flag").html('🇲🇽');$("#photo").css('background', 'url(carriers/497.png)');
} else if ($xml.find('Numeric').text() == "334040") {
$('#name').html('Mexico');$("#flag").html('🇲🇽');$("#photo").css('background', 'url(carriers/498.png)');
} else if ($xml.find('Numeric').text() == "55001") {
$('#name').html('Micronesia');$("#flag").html('🇫🇲');$("#photo").css('background', 'url(carriers/499.png)');
} else if ($xml.find('Numeric').text() == "25900") {
$('#name').html('Moldova');$("#flag").html('🇲🇩');$("#photo").css('background', 'url(carriers/500.png)');
} else if ($xml.find('Numeric').text() == "25902") {
$('#name').html('Moldova');$("#flag").html('🇲🇩');$("#photo").css('background', 'url(carriers/501.png)');
} else if ($xml.find('Numeric').text() == "25901") {
$('#name').html('Moldova');$("#flag").html('🇲🇩');$("#photo").css('background', 'url(carriers/502.png)');
} else if ($xml.find('Numeric').text() == "25903") {
$('#name').html('Moldova');$("#flag").html('🇲🇩');$("#photo").css('background', 'url(carriers/503.png)');
} else if ($xml.find('Numeric').text() == "21210") {
$('#name').html('Monaco');$("#flag").html('🇲🇨');$("#photo").css('background', 'url(carriers/504.png)');
} else if ($xml.find('Numeric').text() == "42898") {
$('#name').html('Mongolia');$("#flag").html('🇲🇳');$("#photo").css('background', 'url(carriers/505.png)');
} else if ($xml.find('Numeric').text() == "42899") {
$('#name').html('Mongolia');$("#flag").html('🇲🇳');$("#photo").css('background', 'url(carriers/506.png)');
} else if ($xml.find('Numeric').text() == "42891") {
$('#name').html('Mongolia');$("#flag").html('🇲🇳');$("#photo").css('background', 'url(carriers/507.png)');
} else if ($xml.find('Numeric').text() == "42888") {
$('#name').html('Mongolia');$("#flag").html('🇲🇳');$("#photo").css('background', 'url(carriers/508.png)');
} else if ($xml.find('Numeric').text() == "29703") {
$('#name').html('Montenegro');$("#flag").html('🇲🇪');$("#photo").css('background', 'url(carriers/509.png)');
} else if ($xml.find('Numeric').text() == "29702") {
$('#name').html('Montenegro');$("#flag").html('🇲🇪');$("#photo").css('background', 'url(carriers/510.png)');
} else if ($xml.find('Numeric').text() == "29701") {
$('#name').html('Montenegro');$("#flag").html('🇲🇪');$("#photo").css('background', 'url(carriers/511.png)');
} else if ($xml.find('Numeric').text() == "60402") {
$('#name').html('Morocco');$("#flag").html('🇲🇦');$("#photo").css('background', 'url(carriers/512.png)');
} else if ($xml.find('Numeric').text() == "60406") {
$('#name').html('Morocco');$("#flag").html('🇲🇦');$("#photo").css('background', 'url(carriers/513.png)');
} else if ($xml.find('Numeric').text() == "60400") {
$('#name').html('Morocco');$("#flag").html('🇲🇦');$("#photo").css('background', 'url(carriers/514.png)');
} else if ($xml.find('Numeric').text() == "64301") {
$('#name').html('Mozambique');$("#flag").html('🇲🇿');$("#photo").css('background', 'url(carriers/515.png)');
} else if ($xml.find('Numeric').text() == "64303") {
$('#name').html('Mozambique');$("#flag").html('🇲🇿');$("#photo").css('background', 'url(carriers/516.png)');
} else if ($xml.find('Numeric').text() == "64304") {
$('#name').html('Mozambique');$("#flag").html('🇲🇿');$("#photo").css('background', 'url(carriers/517.png)');
} else if ($xml.find('Numeric').text() == "41400") {
$('#name').html('Myanmar');$("#flag").html('🇲🇲');$("#photo").css('background', 'url(carriers/518.png)');
} else if ($xml.find('Numeric').text() == "41409") {
$('#name').html('Myanmar');$("#flag").html('🇲🇲');$("#photo").css('background', 'url(carriers/519.png)');
} else if ($xml.find('Numeric').text() == "41405") {
$('#name').html('Myanmar');$("#flag").html('🇲🇲');$("#photo").css('background', 'url(carriers/520.png)');
} else if ($xml.find('Numeric').text() == "41406") {
$('#name').html('Myanmar');$("#flag").html('🇲🇲');$("#photo").css('background', 'url(carriers/521.png)');
} else if ($xml.find('Numeric').text() == "64901") {
$('#name').html('Namibia');$("#flag").html('🇳🇦');$("#photo").css('background', 'url(carriers/522.png)');
} else if ($xml.find('Numeric').text() == "64903") {
$('#name').html('Namibia');$("#flag").html('🇳🇦');$("#photo").css('background', 'url(carriers/523.png)');
} else if ($xml.find('Numeric').text() == "53602") {
$('#name').html('Nauru');$("#flag").html('🇳🇷');$("#photo").css('background', 'url(carriers/524.png)');
} else if ($xml.find('Numeric').text() == "42902") {
$('#name').html('Nepal');$("#flag").html('🇳🇵');$("#photo").css('background', 'url(carriers/525.png)');
} else if ($xml.find('Numeric').text() == "42901") {
$('#name').html('Nepal');$("#flag").html('🇳🇵');$("#photo").css('background', 'url(carriers/526.png)');
} else if ($xml.find('Numeric').text() == "42904") {
$('#name').html('Nepal');$("#flag").html('🇳🇵');$("#photo").css('background', 'url(carriers/527.png)');
} else if ($xml.find('Numeric').text() == "42903") {
$('#name').html('Nepal');$("#flag").html('🇳🇵');$("#photo").css('background', 'url(carriers/528.png)');
} else if ($xml.find('Numeric').text() == "20408") {
$('#name').html('Netherlands');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/529.png)');
} else if ($xml.find('Numeric').text() == "20409") {
$('#name').html('Netherlands');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/530.png)');
} else if ($xml.find('Numeric').text() == "20416") {
$('#name').html('Netherlands');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/531.png)');
} else if ($xml.find('Numeric').text() == "20402") {
$('#name').html('Netherlands');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/532.png)');
} else if ($xml.find('Numeric').text() == "20412") {
$('#name').html('Netherlands');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/533.png)');
} else if ($xml.find('Numeric').text() == "20406") {
$('#name').html('Netherlands');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/534.png)');
} else if ($xml.find('Numeric').text() == "20404") {
$('#name').html('Netherlands');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/535.png)');
} else if ($xml.find('Numeric').text() == "20415") {
$('#name').html('Netherlands');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/536.png)');
} else if ($xml.find('Numeric').text() == "36268") {
$('#name').html('Netherlands-antilles');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/537.png)');
} else if ($xml.find('Numeric').text() == "36251") {
$('#name').html('Netherlands-antilles');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/538.png)');
} else if ($xml.find('Numeric').text() == "36259") {
$('#name').html('Netherlands-antilles');$("#flag").html('🇳🇱');$("#photo").css('background', 'url(carriers/539.png)');
} else if ($xml.find('Numeric').text() == "54601") {
$('#name').html('New-caledonia');$("#flag").html('🇳🇨');$("#photo").css('background', 'url(carriers/540.png)');
} else if ($xml.find('Numeric').text() == "53024") {
$('#name').html('New-zealand');$("#flag").html('🇳🇿');$("#photo").css('background', 'url(carriers/541.png)');
} else if ($xml.find('Numeric').text() == "53005") {
$('#name').html('New-zealand');$("#flag").html('🇳🇿');$("#photo").css('background', 'url(carriers/542.png)');
} else if ($xml.find('Numeric').text() == "53001") {
$('#name').html('New-zealand');$("#flag").html('🇳🇿');$("#photo").css('background', 'url(carriers/543.png)');
} else if ($xml.find('Numeric').text() == "71021") {
$('#name').html('Nicaragua');$("#flag").html('🇳🇮');$("#photo").css('background', 'url(carriers/544.png)');
} else if ($xml.find('Numeric').text() == "71030") {
$('#name').html('Nicaragua');$("#flag").html('🇳🇮');$("#photo").css('background', 'url(carriers/545.png)');
} else if ($xml.find('Numeric').text() == "61402") {
$('#name').html('Niger');$("#flag").html('🇳🇪');$("#photo").css('background', 'url(carriers/546.png)');
} else if ($xml.find('Numeric').text() == "61403") {
$('#name').html('Niger');$("#flag").html('🇳🇪');$("#photo").css('background', 'url(carriers/547.png)');
} else if ($xml.find('Numeric').text() == "61404") {
$('#name').html('Niger');$("#flag").html('🇳🇪');$("#photo").css('background', 'url(carriers/548.png)');
} else if ($xml.find('Numeric').text() == "61401") {
$('#name').html('Niger');$("#flag").html('🇳🇪');$("#photo").css('background', 'url(carriers/549.png)');
} else if ($xml.find('Numeric').text() == "62160") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/550.png)');
} else if ($xml.find('Numeric').text() == "62120") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/551.png)');
} else if ($xml.find('Numeric').text() == "62150") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/552.png)');
} else if ($xml.find('Numeric').text() == "62122") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/553.png)');
} else if ($xml.find('Numeric').text() == "62130") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/554.png)');
} else if ($xml.find('Numeric').text() == "62140") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/555.png)');
} else if ($xml.find('Numeric').text() == "62127") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/556.png)');
} else if ($xml.find('Numeric').text() == "62124") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/557.png)');
} else if ($xml.find('Numeric').text() == "62126") {
$('#name').html('Nigeria');$("#flag").html('🇳🇬');$("#photo").css('background', 'url(carriers/558.png)');
} else if ($xml.find('Numeric').text() == "55501") {
$('#name').html('Niue');$("#flag").html('🇳🇺');$("#photo").css('background', 'url(carriers/559.png)');
} else if ($xml.find('Numeric').text() == "46705") {
$('#name').html('North-korea');$("#flag").html('🇰🇵');$("#photo").css('background', 'url(carriers/560.png)');
} else if ($xml.find('Numeric').text() == "24206") {
$('#name').html('Norway');$("#flag").html('🇳🇴');$("#photo").css('background', 'url(carriers/561.png)');
} else if ($xml.find('Numeric').text() == "24223") {
$('#name').html('Norway');$("#flag").html('🇳🇴');$("#photo").css('background', 'url(carriers/562.png)');
} else if ($xml.find('Numeric').text() == "24208") {
$('#name').html('Norway');$("#flag").html('🇳🇴');$("#photo").css('background', 'url(carriers/563.png)');
} else if ($xml.find('Numeric').text() == "24204") {
$('#name').html('Norway');$("#flag").html('🇳🇴');$("#photo").css('background', 'url(carriers/564.png)');
} else if ($xml.find('Numeric').text() == "24201") {
$('#name').html('Norway');$("#flag").html('🇳🇴');$("#photo").css('background', 'url(carriers/565.png)');
} else if ($xml.find('Numeric').text() == "24202") {
$('#name').html('Norway');$("#flag").html('🇳🇴');$("#photo").css('background', 'url(carriers/566.png)');
} else if ($xml.find('Numeric').text() == "42202") {
$('#name').html('Oman');$("#flag").html('🇴🇲');$("#photo").css('background', 'url(carriers/567.png)');
} else if ($xml.find('Numeric').text() == "42203") {
$('#name').html('Oman');$("#flag").html('🇴🇲');$("#photo").css('background', 'url(carriers/568.png)');
} else if ($xml.find('Numeric').text() == "42204") {
$('#name').html('Oman');$("#flag").html('🇴🇲');$("#photo").css('background', 'url(carriers/567.png)');
} else if ($xml.find('Numeric').text() == "41002") {
$('#name').html('Pakistan');$("#flag").html('🇵🇰');$("#photo").css('background', 'url(carriers/569.png)');
} else if ($xml.find('Numeric').text() == "41001") {
$('#name').html('Pakistan');$("#flag").html('🇵🇰');$("#photo").css('background', 'url(carriers/570.png)');
} else if ($xml.find('Numeric').text() == "41005") {
$('#name').html('Pakistan');$("#flag").html('🇵🇰');$("#photo").css('background', 'url(carriers/571.png)');
} else if ($xml.find('Numeric').text() == "41006") {
$('#name').html('Pakistan');$("#flag").html('🇵🇰');$("#photo").css('background', 'url(carriers/572.png)');
} else if ($xml.find('Numeric').text() == "41003") {
$('#name').html('Pakistan');$("#flag").html('🇵🇰');$("#photo").css('background', 'url(carriers/573.png)');
} else if ($xml.find('Numeric').text() == "41004") {
$('#name').html('Pakistan');$("#flag").html('🇵🇰');$("#photo").css('background', 'url(carriers/574.png)');
} else if ($xml.find('Numeric').text() == "55101") {
$('#name').html('Palau');$("#flag").html('🇵🇼');$("#photo").css('background', 'url(carriers/575.png)');
} else if ($xml.find('Numeric').text() == "42505") {
$('#name').html('Palestine');$("#flag").html('🇵🇸');$("#photo").css('background', 'url(carriers/576.png)');
} else if ($xml.find('Numeric').text() == "42506") {
$('#name').html('Palestine');$("#flag").html('🇵🇸');$("#photo").css('background', 'url(carriers/577.png)');
} else if ($xml.find('Numeric').text() == "71403") {
$('#name').html('Panama');$("#flag").html('🇵🇦');$("#photo").css('background', 'url(carriers/578.png)');
} else if ($xml.find('Numeric').text() == "71404") {
$('#name').html('Panama');$("#flag").html('🇵🇦');$("#photo").css('background', 'url(carriers/579.png)');
} else if ($xml.find('Numeric').text() == "71401") {
$('#name').html('Panama');$("#flag").html('🇵🇦');$("#photo").css('background', 'url(carriers/580.png)');
} else if ($xml.find('Numeric').text() == "71402") {
$('#name').html('Panama');$("#flag").html('🇵🇦');$("#photo").css('background', 'url(carriers/581.png)');
} else if ($xml.find('Numeric').text() == "53701") {
$('#name').html('Papua-new-guinea');$("#flag").html('🇵🇬');$("#photo").css('background', 'url(carriers/582.png)');
} else if ($xml.find('Numeric').text() == "53703") {
$('#name').html('Papua-new-guinea');$("#flag").html('🇵🇬');$("#photo").css('background', 'url(carriers/583.png)');
} else if ($xml.find('Numeric').text() == "53702") {
$('#name').html('Papua-new-guinea');$("#flag").html('🇵🇬');$("#photo").css('background', 'url(carriers/584.png)');
} else if ($xml.find('Numeric').text() == "74402") {
$('#name').html('Paraguay');$("#flag").html('🇵🇾');$("#photo").css('background', 'url(carriers/585.png)');
} else if ($xml.find('Numeric').text() == "74406") {
$('#name').html('Paraguay');$("#flag").html('🇵🇾');$("#photo").css('background', 'url(carriers/586.png)');
} else if ($xml.find('Numeric').text() == "74405") {
$('#name').html('Paraguay');$("#flag").html('🇵🇾');$("#photo").css('background', 'url(carriers/587.png)');
} else if ($xml.find('Numeric').text() == "74404") {
$('#name').html('Paraguay');$("#flag").html('🇵🇾');$("#photo").css('background', 'url(carriers/588.png)');
} else if ($xml.find('Numeric').text() == "74401") {
$('#name').html('Paraguay');$("#flag").html('🇵🇾');$("#photo").css('background', 'url(carriers/589.png)');
} else if ($xml.find('Numeric').text() == "71615") {
$('#name').html('Peru');$("#flag").html('🇵🇪');$("#photo").css('background', 'url(carriers/590.png)');
} else if ($xml.find('Numeric').text() == "71610") {
$('#name').html('Peru');$("#flag").html('🇵🇪');$("#photo").css('background', 'url(carriers/591.png)');
} else if ($xml.find('Numeric').text() == "71607") {
$('#name').html('Peru');$("#flag").html('🇵🇪');$("#photo").css('background', 'url(carriers/592.png)');
} else if ($xml.find('Numeric').text() == "71606") {
$('#name').html('Peru');$("#flag").html('🇵🇪');$("#photo").css('background', 'url(carriers/593.png)');
} else if ($xml.find('Numeric').text() == "51502") {
$('#name').html('Philippines');$("#flag").html('🇵🇭');$("#photo").css('background', 'url(carriers/594.png)');
} else if ($xml.find('Numeric').text() == "51503") {
$('#name').html('Philippines');$("#flag").html('🇵🇭');$("#photo").css('background', 'url(carriers/595.png)');
} else if ($xml.find('Numeric').text() == "51505") {
$('#name').html('Philippines');$("#flag").html('🇵🇭');$("#photo").css('background', 'url(carriers/596.png)');
} else if ($xml.find('Numeric').text() == "26004") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/597.png)');
} else if ($xml.find('Numeric').text() == "26012") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/598.png)');
} else if ($xml.find('Numeric').text() == "26015") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/599.png)');
} else if ($xml.find('Numeric').text() == "26009") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/600.png)');
} else if ($xml.find('Numeric').text() == "26011") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/601.png)');
} else if ($xml.find('Numeric').text() == "26003") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/602.png)');
} else if ($xml.find('Numeric').text() == "26006") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/603.png)');
} else if ($xml.find('Numeric').text() == "26001") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/604.png)');
} else if ($xml.find('Numeric').text() == "26013") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/605.png)');
} else if ($xml.find('Numeric').text() == "26002") {
$('#name').html('Poland');$("#flag").html('🇵🇱');$("#photo").css('background', 'url(carriers/606.png)');
} else if ($xml.find('Numeric').text() == "26804") {
$('#name').html('Portugal');$("#flag").html('🇵🇹');$("#photo").css('background', 'url(carriers/607.png)');
} else if ($xml.find('Numeric').text() == "26802") {
$('#name').html('Portugal');$("#flag").html('🇵🇹');$("#photo").css('background', 'url(carriers/608.png)');
} else if ($xml.find('Numeric').text() == "26803") {
$('#name').html('Portugal');$("#flag").html('🇵🇹');$("#photo").css('background', 'url(carriers/609.png)');
} else if ($xml.find('Numeric').text() == "26801") {
$('#name').html('Portugal');$("#flag").html('🇵🇹');$("#photo").css('background', 'url(carriers/610.png)');
} else if ($xml.find('Numeric').text() == "330110") {
$('#name').html('Puerto-rico');$("#flag").html('🇵🇷');$("#photo").css('background', 'url(carriers/611.png)');
} else if ($xml.find('Numeric').text() == "330000") {
$('#name').html('Puerto-rico');$("#flag").html('🇵🇷');$("#photo").css('background', 'url(carriers/612.png)');
} else if ($xml.find('Numeric').text() == "42701") {
$('#name').html('Qatar');$("#flag").html('🇶🇦');$("#photo").css('background', 'url(carriers/613.png)');
} else if ($xml.find('Numeric').text() == "42702") {
$('#name').html('Qatar');$("#flag").html('🇶🇦');$("#photo").css('background', 'url(carriers/614.png)');
} else if ($xml.find('Numeric').text() == "62901") {
$('#name').html('Republic-of-congo');$("#flag").html('🇨🇬');$("#photo").css('background', 'url(carriers/615.png)');
} else if ($xml.find('Numeric').text() == "62910") {
$('#name').html('Republic-of-congo');$("#flag").html('🇨🇬');$("#photo").css('background', 'url(carriers/616.png)');
} else if ($xml.find('Numeric').text() == "62907") {
$('#name').html('Republic-of-congo');$("#flag").html('🇨🇬');$("#photo").css('background', 'url(carriers/617.png)');
} else if ($xml.find('Numeric').text() == "64702") {
$('#name').html('Reunion');$("#flag").html('🇷🇪');$("#photo").css('background', 'url(carriers/618.png)');
} else if ($xml.find('Numeric').text() == "64700") {
$('#name').html('Reunion');$("#flag").html('🇷🇪');$("#photo").css('background', 'url(carriers/619.png)');
} else if ($xml.find('Numeric').text() == "64710") {
$('#name').html('Reunion');$("#flag").html('🇷🇪');$("#photo").css('background', 'url(carriers/620.png)');
} else if ($xml.find('Numeric').text() == "22605") {
$('#name').html('Romania');$("#flag").html('🇷🇴');$("#photo").css('background', 'url(carriers/621.png)');
} else if ($xml.find('Numeric').text() == "22615") {
$('#name').html('Romania');$("#flag").html('🇷🇴');$("#photo").css('background', 'url(carriers/622.png)');
} else if ($xml.find('Numeric').text() == "22616") {
$('#name').html('Romania');$("#flag").html('🇷🇴');$("#photo").css('background', 'url(carriers/623.png)');
} else if ($xml.find('Numeric').text() == "22610") {
$('#name').html('Romania');$("#flag").html('🇷🇴');$("#photo").css('background', 'url(carriers/624.png)');
} else if ($xml.find('Numeric').text() == "22603") {
$('#name').html('Romania');$("#flag").html('🇷🇴');$("#photo").css('background', 'url(carriers/625.png)');
} else if ($xml.find('Numeric').text() == "22601") {
$('#name').html('Romania');$("#flag").html('🇷🇴');$("#photo").css('background', 'url(carriers/626.png)');
} else if ($xml.find('Numeric').text() == "25028") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/627.png)');
} else if ($xml.find('Numeric').text() == "25002") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/628.png)');
} else if ($xml.find('Numeric').text() == "25035") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/629.png)');
} else if ($xml.find('Numeric').text() == "25001") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/630.png)');
} else if ($xml.find('Numeric').text() == "25039") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/631.png)');
} else if ($xml.find('Numeric').text() == "25006") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/632.png)');
} else if ($xml.find('Numeric').text() == "25054") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/633.png)');
} else if ($xml.find('Numeric').text() == "25020") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/634.png)');
} else if ($xml.find('Numeric').text() == "25008") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/635.png)');
} else if ($xml.find('Numeric').text() == "25011") {
$('#name').html('Russia');$("#flag").html('🇷🇺');$("#photo").css('background', 'url(carriers/636.png)');
} else if ($xml.find('Numeric').text() == "63514") {
$('#name').html('Rwanda');$("#flag").html('🇷🇼');$("#photo").css('background', 'url(carriers/637.png)');
} else if ($xml.find('Numeric').text() == "63510") {
$('#name').html('Rwanda');$("#flag").html('🇷🇼');$("#photo").css('background', 'url(carriers/638.png)');
} else if ($xml.find('Numeric').text() == "63513") {
$('#name').html('Rwanda');$("#flag").html('🇷🇼');$("#photo").css('background', 'url(carriers/639.png)');
} else if ($xml.find('Numeric').text() == "356050") {
$('#name').html('Saint-kitts-and-nevis');$("#flag").html('🇰🇳');$("#photo").css('background', 'url(carriers/640.png)');
} else if ($xml.find('Numeric').text() == "356110") {
$('#name').html('Saint-kitts-and-nevis');$("#flag").html('🇰🇳');$("#photo").css('background', 'url(carriers/641.png)');
} else if ($xml.find('Numeric').text() == "358050") {
$('#name').html('Saint-lucia');$("#flag").html('🇱🇨');$("#photo").css('background', 'url(carriers/642.png)');
} else if ($xml.find('Numeric').text() == "358110") {
$('#name').html('Saint-lucia');$("#flag").html('🇱🇨');$("#photo").css('background', 'url(carriers/643.png)');
} else if ($xml.find('Numeric').text() == "360050") {
$('#name').html('Saint-vincent-and-the-grenadines');$("#flag").html('🇻🇨');$("#photo").css('background', 'url(carriers/644.png)');
} else if ($xml.find('Numeric').text() == "360110") {
$('#name').html('Saint-vincent-and-the-grenadines');$("#flag").html('🇻🇨');$("#photo").css('background', 'url(carriers/645.png)');
} else if ($xml.find('Numeric').text() == "30801") {
$('#name').html('Saint-pierre-and-miquelon');$("#flag").html('🇵🇲');$("#photo").css('background', 'url(carriers/646.png)');
} else if ($xml.find('Numeric').text() == "54927") {
$('#name').html('Samoa');$("#flag").html('🇼🇸');$("#photo").css('background', 'url(carriers/647.png)');
} else if ($xml.find('Numeric').text() == "54900") {
$('#name').html('Samoa');$("#flag").html('🇼🇸');$("#photo").css('background', 'url(carriers/648.png)');
} else if ($xml.find('Numeric').text() == "29201") {
$('#name').html('San-marino');$("#flag").html('🇸🇲');$("#photo").css('background', 'url(carriers/649.png)');
} else if ($xml.find('Numeric').text() == "62601") {
$('#name').html('Sao-tome-and-principe');$("#flag").html('🇸🇹');$("#photo").css('background', 'url(carriers/650.png)');
} else if ($xml.find('Numeric').text() == "62602") {
$('#name').html('Sao-tome-and-principe');$("#flag").html('🇸🇹');$("#photo").css('background', 'url(carriers/651.png)');
} else if ($xml.find('Numeric').text() == "42003") {
$('#name').html('Kingdom Saudi Arabia');$("#flag").html('🇸🇦');$("#photo").css('background', 'url(carriers/652.png)');
} else if ($xml.find('Numeric').text() == "42001") {
$('#name').html('Kingdom Saudi Arabia');$("#flag").html('🇸🇦');$("#photo").css('background', 'url(carriers/653.png)');
} else if ($xml.find('Numeric').text() == "42005") {
$('#name').html('Kingdom Saudi Arabia');$("#flag").html('🇸🇦');$("#photo").css('background', 'url(carriers/654.png)');
} else if ($xml.find('Numeric').text() == "42004") {
$('#name').html('Kingdom Saudi Arabia');$("#flag").html('🇸🇦');$("#photo").css('background', 'url(carriers/655.png)');
} else if ($xml.find('Numeric').text() == "60803") {
$('#name').html('Senegal');$("#flag").html('🇸🇳');$("#photo").css('background', 'url(carriers/656.png)');
} else if ($xml.find('Numeric').text() == "60801") {
$('#name').html('Senegal');$("#flag").html('🇸🇳');$("#photo").css('background', 'url(carriers/657.png)');
} else if ($xml.find('Numeric').text() == "60802") {
$('#name').html('Senegal');$("#flag").html('🇸🇳');$("#photo").css('background', 'url(carriers/658.png)');
} else if ($xml.find('Numeric').text() == "22011") {
$('#name').html('Serbia');$("#flag").html('🇷🇸');$("#photo").css('background', 'url(carriers/659.png)');
} else if ($xml.find('Numeric').text() == "22003") {
$('#name').html('Serbia');$("#flag").html('🇷🇸');$("#photo").css('background', 'url(carriers/660.png)');
} else if ($xml.find('Numeric').text() == "22007") {
$('#name').html('Serbia');$("#flag").html('🇷🇸');$("#photo").css('background', 'url(carriers/661.png)');
} else if ($xml.find('Numeric').text() == "22001") {
$('#name').html('Serbia');$("#flag").html('🇷🇸');$("#photo").css('background', 'url(carriers/662.png)');
} else if ($xml.find('Numeric').text() == "22005") {
$('#name').html('Serbia');$("#flag").html('🇷🇸');$("#photo").css('background', 'url(carriers/663.png)');
} else if ($xml.find('Numeric').text() == "63310") {
$('#name').html('Seychelles');$("#flag").html('🇸🇨');$("#photo").css('background', 'url(carriers/664.png)');
} else if ($xml.find('Numeric').text() == "63301") {
$('#name').html('Seychelles');$("#flag").html('🇸🇨');$("#photo").css('background', 'url(carriers/665.png)');
} else if ($xml.find('Numeric').text() == "61902") {
$('#name').html('Sierra-leone');$("#flag").html('🇸🇱');$("#photo").css('background', 'url(carriers/666.png)');
} else if ($xml.find('Numeric').text() == "61901") {
$('#name').html('Sierra-leone');$("#flag").html('🇸🇱');$("#photo").css('background', 'url(carriers/667.png)');
} else if ($xml.find('Numeric').text() == "61906") {
$('#name').html('Sierra-leone');$("#flag").html('🇸🇱');$("#photo").css('background', 'url(carriers/668.png)');
} else if ($xml.find('Numeric').text() == "52503") {
$('#name').html('Singapore');$("#flag").html('🇸🇬');$("#photo").css('background', 'url(carriers/669.png)');
} else if ($xml.find('Numeric').text() == "52501") {
$('#name').html('Singapore');$("#flag").html('🇸🇬');$("#photo").css('background', 'url(carriers/670.png)');
} else if ($xml.find('Numeric').text() == "52505") {
$('#name').html('Singapore');$("#flag").html('🇸🇬');$("#photo").css('background', 'url(carriers/671.png)');
} else if ($xml.find('Numeric').text() == "23103") {
$('#name').html('Slovakia');$("#flag").html('🇸🇰');$("#photo").css('background', 'url(carriers/672.png)');
} else if ($xml.find('Numeric').text() == "23106") {
$('#name').html('Slovakia');$("#flag").html('🇸🇰');$("#photo").css('background', 'url(carriers/673.png)');
} else if ($xml.find('Numeric').text() == "23101") {
$('#name').html('Slovakia');$("#flag").html('🇸🇰');$("#photo").css('background', 'url(carriers/674.png)');
} else if ($xml.find('Numeric').text() == "23102") {
$('#name').html('Slovakia');$("#flag").html('🇸🇰');$("#photo").css('background', 'url(carriers/675.png)');
} else if ($xml.find('Numeric').text() == "29340") {
$('#name').html('Slovenia');$("#flag").html('🇸🇮');$("#photo").css('background', 'url(carriers/676.png)');
} else if ($xml.find('Numeric').text() == "29364") {
$('#name').html('Slovenia');$("#flag").html('🇸🇮');$("#photo").css('background', 'url(carriers/677.png)');
} else if ($xml.find('Numeric').text() == "29341") {
$('#name').html('Slovenia');$("#flag").html('🇸🇮');$("#photo").css('background', 'url(carriers/678.png)');
} else if ($xml.find('Numeric').text() == "29370") {
$('#name').html('Slovenia');$("#flag").html('🇸🇮');$("#photo").css('background', 'url(carriers/679.png)');
} else if ($xml.find('Numeric').text() == "54002") {
$('#name').html('Solomon-islands');$("#flag").html('🇸🇧');$("#photo").css('background', 'url(carriers/680.png)');
} else if ($xml.find('Numeric').text() == "54001") {
$('#name').html('Solomon-islands');$("#flag").html('🇸🇧');$("#photo").css('background', 'url(carriers/681.png)');
} else if ($xml.find('Numeric').text() == "63730") {
$('#name').html('Somalia');$("#flag").html('🇸🇴');$("#photo").css('background', 'url(carriers/682.png)');
} else if ($xml.find('Numeric').text() == "63750") {
$('#name').html('Somalia');$("#flag").html('🇸🇴');$("#photo").css('background', 'url(carriers/683.png)');
} else if ($xml.find('Numeric').text() == "63710") {
$('#name').html('Somalia');$("#flag").html('🇸🇴');$("#photo").css('background', 'url(carriers/684.png)');
} else if ($xml.find('Numeric').text() == "63704") {
$('#name').html('Somalia');$("#flag").html('🇸🇴');$("#photo").css('background', 'url(carriers/685.png)');
} else if ($xml.find('Numeric').text() == "63720") {
$('#name').html('Somalia');$("#flag").html('🇸🇴');$("#photo").css('background', 'url(carriers/686.png)');
} else if ($xml.find('Numeric').text() == "63771") {
$('#name').html('Somalia');$("#flag").html('🇸🇴');$("#photo").css('background', 'url(carriers/687.png)');
} else if ($xml.find('Numeric').text() == "63701") {
$('#name').html('Somalia');$("#flag").html('🇸🇴');$("#photo").css('background', 'url(carriers/688.png)');
} else if ($xml.find('Numeric').text() == "65507") {
$('#name').html('South-africa');$("#flag").html('🇿🇦');$("#photo").css('background', 'url(carriers/689.png)');
} else if ($xml.find('Numeric').text() == "65510") {
$('#name').html('South-africa');$("#flag").html('🇿🇦');$("#photo").css('background', 'url(carriers/690.png)');
} else if ($xml.find('Numeric').text() == "65513") {
$('#name').html('South-africa');$("#flag").html('🇿🇦');$("#photo").css('background', 'url(carriers/691.png)');
} else if ($xml.find('Numeric').text() == "65502") {
$('#name').html('South-africa');$("#flag").html('🇿🇦');$("#photo").css('background', 'url(carriers/692.png)');
} else if ($xml.find('Numeric').text() == "65501") {
$('#name').html('South-africa');$("#flag").html('🇿🇦');$("#photo").css('background', 'url(carriers/693.png)');
} else if ($xml.find('Numeric').text() == "45002") {
$('#name').html('South-korea');$("#flag").html('🇰🇷');$("#photo").css('background', 'url(carriers/694.png)');
} else if ($xml.find('Numeric').text() == "45006") {
$('#name').html('South-korea');$("#flag").html('🇰🇷');$("#photo").css('background', 'url(carriers/695.png)');
} else if ($xml.find('Numeric').text() == "45005") {
$('#name').html('South-korea');$("#flag").html('🇰🇷');$("#photo").css('background', 'url(carriers/696.png)');
} else if ($xml.find('Numeric').text() == "21423") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/697.png)');
} else if ($xml.find('Numeric').text() == "21422") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/698.png)');
} else if ($xml.find('Numeric').text() == "21408") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/699.png)');
} else if ($xml.find('Numeric').text() == "21425") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/700.png)');
} else if ($xml.find('Numeric').text() == "21407") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/701.png)');
} else if ($xml.find('Numeric').text() == "21403") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/702.png)');
} else if ($xml.find('Numeric').text() == "21419") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/703.png)');
} else if ($xml.find('Numeric').text() == "21416") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/704.png)');
} else if ($xml.find('Numeric').text() == "21401") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/705.png)');
} else if ($xml.find('Numeric').text() == "21404") {
$('#name').html('Spain');$("#flag").html('🇪🇸');$("#photo").css('background', 'url(carriers/706.png)');
} else if ($xml.find('Numeric').text() == "41305") {
$('#name').html('Sri-lanka');$("#flag").html('🇱🇰');$("#photo").css('background', 'url(carriers/707.png)');
} else if ($xml.find('Numeric').text() == "41302") {
$('#name').html('Sri-lanka');$("#flag").html('🇱🇰');$("#photo").css('background', 'url(carriers/708.png)');
} else if ($xml.find('Numeric').text() == "41303") {
$('#name').html('Sri-lanka');$("#flag").html('🇱🇰');$("#photo").css('background', 'url(carriers/709.png)');
} else if ($xml.find('Numeric').text() == "41308") {
$('#name').html('Sri-lanka');$("#flag").html('🇱🇰');$("#photo").css('background', 'url(carriers/710.png)');
} else if ($xml.find('Numeric').text() == "41304") {
$('#name').html('Sri-lanka');$("#flag").html('🇱🇰');$("#photo").css('background', 'url(carriers/711.png)');
} else if ($xml.find('Numeric').text() == "41301") {
$('#name').html('Sri-lanka');$("#flag").html('🇱🇰');$("#photo").css('background', 'url(carriers/712.png)');
} else if ($xml.find('Numeric').text() == "41312") {
$('#name').html('Sri-lanka');$("#flag").html('🇱🇰');$("#photo").css('background', 'url(carriers/713.png)');
} else if ($xml.find('Numeric').text() == "63405") {
$('#name').html('Sudan');$("#flag").html('🇸🇩');$("#photo").css('background', 'url(carriers/714.png)');
} else if ($xml.find('Numeric').text() == "63402") {
$('#name').html('Sudan');$("#flag").html('🇸🇩');$("#photo").css('background', 'url(carriers/715.png)');
} else if ($xml.find('Numeric').text() == "63407") {
$('#name').html('Sudan');$("#flag").html('🇸🇩');$("#photo").css('background', 'url(carriers/716.png)');
} else if ($xml.find('Numeric').text() == "63401") {
$('#name').html('Sudan');$("#flag").html('🇸🇩');$("#photo").css('background', 'url(carriers/717.png)');
} else if ($xml.find('Numeric').text() == "75603") {
$('#name').html('Suriname');$("#flag").html('🇸🇷');$("#photo").css('background', 'url(carriers/718.png)');
} else if ($xml.find('Numeric').text() == "75605") {
$('#name').html('Suriname');$("#flag").html('🇸🇷');$("#photo").css('background', 'url(carriers/719.png)');
} else if ($xml.find('Numeric').text() == "56310") {
$('#name').html('Swaziland');$("#flag").html('🇸🇿');$("#photo").css('background', 'url(carriers/720.png)');
} else if ($xml.find('Numeric').text() == "24002") {
$('#name').html('Sweden');$("#flag").html('🇸🇪');$("#photo").css('background', 'url(carriers/721.png)');
} else if ($xml.find('Numeric').text() == "24017") {
$('#name').html('Sweden');$("#flag").html('🇸🇪');$("#photo").css('background', 'url(carriers/722.png)');
} else if ($xml.find('Numeric').text() == "24007") {
$('#name').html('Sweden');$("#flag").html('🇸🇪');$("#photo").css('background', 'url(carriers/723.png)');
} else if ($xml.find('Numeric').text() == "24006") {
$('#name').html('Sweden');$("#flag").html('🇸🇪');$("#photo").css('background', 'url(carriers/724.png)');
} else if ($xml.find('Numeric').text() == "24001") {
$('#name').html('Sweden');$("#flag").html('🇸🇪');$("#photo").css('background', 'url(carriers/725.png)');
} else if ($xml.find('Numeric').text() == "22805") {
$('#name').html('Switzerland');$("#flag").html('🇨🇭');$("#photo").css('background', 'url(carriers/726.png)');
} else if ($xml.find('Numeric').text() == "22803") {
$('#name').html('Switzerland');$("#flag").html('🇨🇭');$("#photo").css('background', 'url(carriers/727.png)');
} else if ($xml.find('Numeric').text() == "22802") {
$('#name').html('Switzerland');$("#flag").html('🇨🇭');$("#photo").css('background', 'url(carriers/728.png)');
} else if ($xml.find('Numeric').text() == "22801") {
$('#name').html('Switzerland');$("#flag").html('🇨🇭');$("#photo").css('background', 'url(carriers/729.png)');
} else if ($xml.find('Numeric').text() == "41702") {
$('#name').html('Syria');$("#flag").html('🇸🇾');$("#photo").css('background', 'url(carriers/730.png)');
} else if ($xml.find('Numeric').text() == "41701") {
$('#name').html('Syria');$("#flag").html('🇸🇾');$("#photo").css('background', 'url(carriers/731.png)');
} else if ($xml.find('Numeric').text() == "46605") {
$('#name').html('Taiwan');$("#flag").html('🇹🇼');$("#photo").css('background', 'url(carriers/732.png)');
} else if ($xml.find('Numeric').text() == "46611") {
$('#name').html('Taiwan');$("#flag").html('🇹🇼');$("#photo").css('background', 'url(carriers/733.png)');
} else if ($xml.find('Numeric').text() == "46601") {
$('#name').html('Taiwan');$("#flag").html('🇹🇼');$("#photo").css('background', 'url(carriers/734.png)');
} else if ($xml.find('Numeric').text() == "46689") {
$('#name').html('Taiwan');$("#flag").html('🇹🇼');$("#photo").css('background', 'url(carriers/735.png)');
} else if ($xml.find('Numeric').text() == "46697") {
$('#name').html('Taiwan');$("#flag").html('🇹🇼');$("#photo").css('background', 'url(carriers/736.png)');
} else if ($xml.find('Numeric').text() == "43604") {
$('#name').html('Tajikistan');$("#flag").html('🇹🇯');$("#photo").css('background', 'url(carriers/737.png)');
} else if ($xml.find('Numeric').text() == "43605") {
$('#name').html('Tajikistan');$("#flag").html('🇹🇯');$("#photo").css('background', 'url(carriers/738.png)');
} else if ($xml.find('Numeric').text() == "43603") {
$('#name').html('Tajikistan');$("#flag").html('🇹🇯');$("#photo").css('background', 'url(carriers/739.png)');
} else if ($xml.find('Numeric').text() == "43601") {
$('#name').html('Tajikistan');$("#flag").html('🇹🇯');$("#photo").css('background', 'url(carriers/740.png)');
} else if ($xml.find('Numeric').text() == "64005") {
$('#name').html('Tanzania');$("#flag").html('🇹🇿');$("#photo").css('background', 'url(carriers/741.png)');
} else if ($xml.find('Numeric').text() == "64009") {
$('#name').html('Tanzania');$("#flag").html('🇹🇿');$("#photo").css('background', 'url(carriers/742.png)');
} else if ($xml.find('Numeric').text() == "64011") {
$('#name').html('Tanzania');$("#flag").html('🇹🇿');$("#photo").css('background', 'url(carriers/743.png)');
} else if ($xml.find('Numeric').text() == "64002") {
$('#name').html('Tanzania');$("#flag").html('🇹🇿');$("#photo").css('background', 'url(carriers/744.png)');
} else if ($xml.find('Numeric').text() == "64007") {
$('#name').html('Tanzania');$("#flag").html('🇹🇿');$("#photo").css('background', 'url(carriers/745.png)');
} else if ($xml.find('Numeric').text() == "64004") {
$('#name').html('Tanzania');$("#flag").html('🇹🇿');$("#photo").css('background', 'url(carriers/746.png)');
} else if ($xml.find('Numeric').text() == "64003") {
$('#name').html('Tanzania');$("#flag").html('🇹🇿');$("#photo").css('background', 'url(carriers/747.png)');
} else if ($xml.find('Numeric').text() == "52001") {
$('#name').html('Thailand');$("#flag").html('🇹🇭');$("#photo").css('background', 'url(carriers/748.png)');
} else if ($xml.find('Numeric').text() == "52000") {
$('#name').html('Thailand');$("#flag").html('🇹🇭');$("#photo").css('background', 'url(carriers/749.png)');
} else if ($xml.find('Numeric').text() == "52018") {
$('#name').html('Thailand');$("#flag").html('🇹🇭');$("#photo").css('background', 'url(carriers/750.png)');
} else if ($xml.find('Numeric').text() == "52015") {
$('#name').html('Thailand');$("#flag").html('🇹🇭');$("#photo").css('background', 'url(carriers/751.png)');
} else if ($xml.find('Numeric').text() == "52099") {
$('#name').html('Thailand');$("#flag").html('🇹🇭');$("#photo").css('background', 'url(carriers/752.png)');
} else if ($xml.find('Numeric').text() == "61503") {
$('#name').html('Togo');$("#flag").html('🇹🇬');$("#photo").css('background', 'url(carriers/753.png)');
} else if ($xml.find('Numeric').text() == "61501") {
$('#name').html('Togo');$("#flag").html('🇹🇬');$("#photo").css('background', 'url(carriers/754.png)');
} else if ($xml.find('Numeric').text() == "53988") {
$('#name').html('Tonga');$("#flag").html('🇹🇴');$("#photo").css('background', 'url(carriers/755.png)');
} else if ($xml.find('Numeric').text() == "53901") {
$('#name').html('Tonga');$("#flag").html('🇹🇴');$("#photo").css('background', 'url(carriers/756.png)');
} else if ($xml.find('Numeric').text() == "37412") {
$('#name').html('Trinidad-and-tobago');$("#flag").html('🇹🇹');$("#photo").css('background', 'url(carriers/757.png)');
} else if ($xml.find('Numeric').text() == "374130") {
$('#name').html('Trinidad-and-tobago');$("#flag").html('🇹🇹');$("#photo").css('background', 'url(carriers/758.png)');
} else if ($xml.find('Numeric').text() == "60506") {
$('#name').html('Tunisia');$("#flag").html('🇹🇳');$("#photo").css('background', 'url(carriers/759.png)');
} else if ($xml.find('Numeric').text() == "60503") {
$('#name').html('Tunisia');$("#flag").html('🇹🇳');$("#photo").css('background', 'url(carriers/760.png)');
} else if ($xml.find('Numeric').text() == "60501") {
$('#name').html('Tunisia');$("#flag").html('🇹🇳');$("#photo").css('background', 'url(carriers/761.png)');
} else if ($xml.find('Numeric').text() == "60502") {
$('#name').html('Tunisia');$("#flag").html('🇹🇳');$("#photo").css('background', 'url(carriers/762.png)');
} else if ($xml.find('Numeric').text() == "28603") {
$('#name').html('Turkey');$("#flag").html('🇹🇷');$("#photo").css('background', 'url(carriers/763.png)');
} else if ($xml.find('Numeric').text() == "28601") {
$('#name').html('Turkey');$("#flag").html('🇹🇷');$("#photo").css('background', 'url(carriers/764.png)');
} else if ($xml.find('Numeric').text() == "28602") {
$('#name').html('Turkey');$("#flag").html('🇹🇷');$("#photo").css('background', 'url(carriers/765.png)');
} else if ($xml.find('Numeric').text() == "43801") {
$('#name').html('Turkmenistan');$("#flag").html('🇹🇲');$("#photo").css('background', 'url(carriers/766.png)');
} else if ($xml.find('Numeric').text() == "43802") {
$('#name').html('Turkmenistan');$("#flag").html('🇹🇲');$("#photo").css('background', 'url(carriers/767.png)');
} else if ($xml.find('Numeric').text() == "64114") {
$('#name').html('Uganda');$("#flag").html('🇺🇬');$("#photo").css('background', 'url(carriers/768.png)');
} else if ($xml.find('Numeric').text() == "64101") {
$('#name').html('Uganda');$("#flag").html('🇺🇬');$("#photo").css('background', 'url(carriers/769.png)');
} else if ($xml.find('Numeric').text() == "64110") {
$('#name').html('Uganda');$("#flag").html('🇺🇬');$("#photo").css('background', 'url(carriers/770.png)');
} else if ($xml.find('Numeric').text() == "64133") {
$('#name').html('Uganda');$("#flag").html('🇺🇬');$("#photo").css('background', 'url(carriers/771.png)');
} else if ($xml.find('Numeric').text() == "64111") {
$('#name').html('Uganda');$("#flag").html('🇺🇬');$("#photo").css('background', 'url(carriers/772.png)');
} else if ($xml.find('Numeric').text() == "25504") {
$('#name').html('Ukraine');$("#flag").html('🇺🇦');$("#photo").css('background', 'url(carriers/773.png)');
} else if ($xml.find('Numeric').text() == "25503") {
$('#name').html('Ukraine');$("#flag").html('🇺🇦');$("#photo").css('background', 'url(carriers/774.png)');
} else if ($xml.find('Numeric').text() == "25506") {
$('#name').html('Ukraine');$("#flag").html('🇺🇦');$("#photo").css('background', 'url(carriers/775.png)');
} else if ($xml.find('Numeric').text() == "25521") {
$('#name').html('Ukraine');$("#flag").html('🇺🇦');$("#photo").css('background', 'url(carriers/776.png)');
} else if ($xml.find('Numeric').text() == "25507") {
$('#name').html('Ukraine');$("#flag").html('🇺🇦');$("#photo").css('background', 'url(carriers/777.png)');
} else if ($xml.find('Numeric').text() == "25501") {
$('#name').html('Ukraine');$("#flag").html('🇺🇦');$("#photo").css('background', 'url(carriers/778.png)');
} else if ($xml.find('Numeric').text() == "42403") {
$('#name').html('United Arab Emirates');$("#flag").html('🇦🇪');$("#photo").css('background', 'url(carriers/779.png)');
} else if ($xml.find('Numeric').text() == "42402") {
$('#name').html('United Arab Emirates');$("#flag").html('🇦🇪');$("#photo").css('background', 'url(carriers/780.png)');
} else if ($xml.find('Numeric').text() == "23420") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/781.png)');
} else if ($xml.find('Numeric').text() == "23400") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/782.png)');
} else if ($xml.find('Numeric').text() == "23418") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/783.png)');
} else if ($xml.find('Numeric').text() == "23430") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/784.png)');
} else if ($xml.find('Numeric').text() == "23454") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/785.png)');
} else if ($xml.find('Numeric').text() == "23458") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/786.png)');
} else if ($xml.find('Numeric').text() == "23402") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/787.png)');
} else if ($xml.find('Numeric').text() == "23433") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/788.png)');
} else if ($xml.find('Numeric').text() == "23436") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/789.png)');
} else if ($xml.find('Numeric').text() == "23430") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/790.png)');
} else if ($xml.find('Numeric').text() == "234100") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/791.png)');
} else if ($xml.find('Numeric').text() == "23438") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/792.png)');
} else if ($xml.find('Numeric').text() == "23407") {
$('#name').html('United-kingdom');$("#flag").html('🇬🇧');$("#photo").css('background', 'url(carriers/793.png)');
} else if ($xml.find('Numeric').text() == "310016") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/794.png)');
} else if ($xml.find('Numeric').text() == "311440") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/795.png)');
} else if ($xml.find('Numeric').text() == "311870") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/796.png)');
} else if ($xml.find('Numeric').text() == "311230") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/797.png)');
} else if ($xml.find('Numeric').text() == "310130") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/798.png)');
} else if ($xml.find('Numeric').text() == "310320") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/799.png)');
} else if ($xml.find('Numeric').text() == "311010") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/800.png)');
} else if ($xml.find('Numeric').text() == "311040") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/801.png)');
} else if ($xml.find('Numeric').text() == "310016") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/802.png)');
} else if ($xml.find('Numeric').text() == "310970") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/803.png)');
} else if ($xml.find('Numeric').text() == "311030") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/804.png)');
} else if ($xml.find('Numeric').text() == "310530") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/805.png)');
} else if ($xml.find('Numeric').text() == "310340") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/806.png)');
} else if ($xml.find('Numeric').text() == "311960") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/807.png)');
} else if ($xml.find('Numeric').text() == "311660") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/808.png)');
} else if ($xml.find('Numeric').text() == "311080") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/809.png)');
} else if ($xml.find('Numeric').text() == "310100") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/810.png)');
} else if ($xml.find('Numeric').text() == "310120") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/811.png)');
} else if ($xml.find('Numeric').text() == "310999") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/812.png)');
} else if ($xml.find('Numeric').text() == "310160") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/813.png)');
} else if ($xml.find('Numeric').text() == "310260") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/814.png)');
} else if ($xml.find('Numeric').text() == "310999") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/815.png)');
} else if ($xml.find('Numeric').text() == "310020") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/816.png)');
} else if ($xml.find('Numeric').text() == "310066") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/817.png)');
} else if ($xml.find('Numeric').text() == "310004") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/818.png)');
} else if ($xml.find('Numeric').text() == "310450") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/819.png)');
} else if ($xml.find('Numeric').text() == "310053") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/820.png)');
} else if ($xml.find('Numeric').text() == "310180") {
$('#name').html('United-states');$("#flag").html('🇺🇸');$("#photo").css('background', 'url(carriers/821.png)');
} else if ($xml.find('Numeric').text() == "74800") {
$('#name').html('Uruguay');$("#flag").html('🇺🇾');$("#photo").css('background', 'url(carriers/822.png)');
} else if ($xml.find('Numeric').text() == "74810") {
$('#name').html('Uruguay');$("#flag").html('🇺🇾');$("#photo").css('background', 'url(carriers/823.png)');
} else if ($xml.find('Numeric').text() == "74807") {
$('#name').html('Uruguay');$("#flag").html('🇺🇾');$("#photo").css('background', 'url(carriers/824.png)');
} else if ($xml.find('Numeric').text() == "43404") {
$('#name').html('Uzbekistan');$("#flag").html('🇺🇿');$("#photo").css('background', 'url(carriers/825.png)');
} else if ($xml.find('Numeric').text() == "43406") {
$('#name').html('Uzbekistan');$("#flag").html('🇺🇿');$("#photo").css('background', 'url(carriers/826.png)');
} else if ($xml.find('Numeric').text() == "43405") {
$('#name').html('Uzbekistan');$("#flag").html('🇺🇿');$("#photo").css('background', 'url(carriers/827.png)');
} else if ($xml.find('Numeric').text() == "43407") {
$('#name').html('Uzbekistan');$("#flag").html('🇺🇿');$("#photo").css('background', 'url(carriers/828.png)');
} else if ($xml.find('Numeric').text() == "43408") {
$('#name').html('Uzbekistan');$("#flag").html('🇺🇿');$("#photo").css('background', 'url(carriers/829.png)');
} else if ($xml.find('Numeric').text() == "54105") {
$('#name').html('Vanuatu');$("#flag").html('🇻🇺');$("#photo").css('background', 'url(carriers/830.png)');
} else if ($xml.find('Numeric').text() == "54101") {
$('#name').html('Vanuatu');$("#flag").html('🇻🇺');$("#photo").css('background', 'url(carriers/831.png)');
} else if ($xml.find('Numeric').text() == "54107") {
$('#name').html('Vanuatu');$("#flag").html('🇻🇺');$("#photo").css('background', 'url(carriers/832.png)');
} else if ($xml.find('Numeric').text() == "73401") {
$('#name').html('Venezuela');$("#flag").html('🇻🇪');$("#photo").css('background', 'url(carriers/833.png)');
} else if ($xml.find('Numeric').text() == "73406") {
$('#name').html('Venezuela');$("#flag").html('🇻🇪');$("#photo").css('background', 'url(carriers/834.png)');
} else if ($xml.find('Numeric').text() == "73404") {
$('#name').html('Venezuela');$("#flag").html('🇻🇪');$("#photo").css('background', 'url(carriers/835.png)');
} else if ($xml.find('Numeric').text() == "45207") {
$('#name').html('Vietnam');$("#flag").html('🇻🇳');$("#photo").css('background', 'url(carriers/836.png)');
} else if ($xml.find('Numeric').text() == "45201") {
$('#name').html('Vietnam');$("#flag").html('🇻🇳');$("#photo").css('background', 'url(carriers/837.png)');
} else if ($xml.find('Numeric').text() == "45205") {
$('#name').html('Vietnam');$("#flag").html('🇻🇳');$("#photo").css('background', 'url(carriers/838.png)');
} else if ($xml.find('Numeric').text() == "45204") {
$('#name').html('Vietnam');$("#flag").html('🇻🇳');$("#photo").css('background', 'url(carriers/839.png)');
} else if ($xml.find('Numeric').text() == "45202") {
$('#name').html('Vietnam');$("#flag").html('🇻🇳');$("#photo").css('background', 'url(carriers/840.png)');
} else if ($xml.find('Numeric').text() == "42102") {
$('#name').html('Yemen');$("#flag").html('🇾🇪');$("#photo").css('background', 'url(carriers/841.png)');
} else if ($xml.find('Numeric').text() == "42101") {
$('#name').html('Yemen');$("#flag").html('🇾🇪');$("#photo").css('background', 'url(carriers/842.png)');
} else if ($xml.find('Numeric').text() == "42103") {
$('#name').html('Yemen');$("#flag").html('🇾🇪');$("#photo").css('background', 'url(carriers/843.png)');
} else if ($xml.find('Numeric').text() == "64501") {
$('#name').html('Zambia');$("#flag").html('🇿🇲');$("#photo").css('background', 'url(carriers/844.png)');
} else if ($xml.find('Numeric').text() == "64502") {
$('#name').html('Zambia');$("#flag").html('🇿🇲');$("#photo").css('background', 'url(carriers/845.png)');
} else if ($xml.find('Numeric').text() == "64503") {
$('#name').html('Zambia');$("#flag").html('🇿🇲');$("#photo").css('background', 'url(carriers/846.png)');
} else if ($xml.find('Numeric').text() == "64804") {
$('#name').html('Zimbabwe');$("#flag").html('🇿🇼');$("#photo").css('background', 'url(carriers/847.png)');
} else if ($xml.find('Numeric').text() == "64801") {
$('#name').html('Zimbabwe');$("#flag").html('🇿🇼');$("#photo").css('background', 'url(carriers/848.png)');
} else if ($xml.find('Numeric').text() == "64803") {
$('#name').html('Zimbabwe');$("#flag").html('🇿🇼');$("#photo").css('background', 'url(carriers/849.png)');
} else if ($xml.find('Numeric').text() == "63782") {
$('#name').html('Somalia');$("#flag").html('🇸🇴');$("#photo").css('background', 'url(carriers/687.png)');
} else if ($xml.find('Numeric').text() == "42105") {
$('#name').html('Yemen');$("#flag").html('🇾🇪');$("#photo").css('background', 'url(carriers/851.png)');
}
});
}