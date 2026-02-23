const taiwanData = ["台北市 中正區","台北市 大同區","台北市 中山區","台北市 松山區","台北市 大安區","台北市 萬華區","台北市 信義區","台北市 士林區","台北市 北投區","台北市 內湖區","台北市 南港區","台北市 文山區","新北市 板橋區","新北市 三重區","新北市 中和區","新北市 永和區","新北市 新莊區","新北市 新店區","新北市 樹林區","新北市 鶯歌區","新北市 三峽區","新北市 淡水區","新北市 汐止區","新北市 瑞芳區","新北市 土城區","新北市 蘆洲區","新北市 五股區","新北市 泰山區","新北市 林口區","新北市 深坑區","新北市 石碇區","新北市 坪林區","新北市 三芝區","新北市 石門區","新北市 八里區","新北市 平溪區","新北市 雙溪區","新北市 貢寮區","新北市 金山區","新北市 萬里區","新北市 烏來區","基隆市 仁愛區","基隆市 信義區","基隆市 中正區","基隆市 中山區","基隆市 安樂區","基隆市 暖暖區","基隆市 七堵區","桃園市 桃園區","桃園市 中壢區","桃園市 大溪區","桃園市 楊梅區","桃園市 蘆竹區","桃園市 大園區","桃園市 龜山區","桃園市 八德區","桃園市 龍潭區","桃園市 平鎮區","桃園市 新屋區","桃園市 觀音區","桃園市 復興區","新竹縣 竹北市","新竹縣 竹東鎮","新竹縣 新埔鎮","新竹縣 關西鎮","新竹縣 湖口鄉","新竹縣 新豐鄉","新竹縣 芎林鄉","新竹縣 橫山鄉","新竹縣 北埔鄉","新竹縣 寶山鄉","新竹縣 峨眉鄉","新竹縣 尖石鄉","新竹縣 五峰鄉","新竹市 東區","新竹市 北區","新竹市 香山區","苗栗縣 苗栗市","苗栗縣 頭份市","苗栗縣 竹南鎮","苗栗縣 後龍鎮","苗栗縣 通霄鎮","苗栗縣 苑裡鎮","苗栗縣 卓蘭鎮","苗栗縣 造橋鄉","苗栗縣 西湖鄉","苗栗縣 頭屋鄉","苗栗縣 公館鄉","苗栗縣 銅鑼鄉","苗栗縣 三義鄉","苗栗縣 大湖鄉","苗栗縣 獅潭鄉","苗栗縣 三灣鄉","苗栗縣 南庄鄉","苗栗縣 泰安鄉","台中市 中區","台中市 東區","台中市 南區","台中市 西區","台中市 北區","台中市 北屯區","台中市 西屯區","台中市 南屯區","台中市 太平區","台中市 大里區","台中市 霧峰區","台中市 烏日區","台中市 丰原區","台中市 后里區","台中市 石岡區","台中市 東勢區","台中市 和平區","台中市 新社區","台中市 潭子區","台中市 大雅區","台中市 神岡區","台中市 大肚區","台中市 沙鹿區","台中市 龍井區","台中市 梧棲區","台中市 清水區","台中市 大甲區","台中市 外埔區","台中市 大安區","彰化縣 彰化市","彰化縣 鹿港鎮","彰化縣 和美鎮","彰化縣 線西鄉","彰化縣 伸港鄉","彰化縣 福興鄉","彰化縣 秀水鄉","彰化縣 花壇鄉","彰化縣 芬園鄉","彰化縣 員林市","彰化縣 溪湖鎮","彰化縣 田中鎮","彰化縣 大村鄉","彰化縣 埔鹽鄉","彰化縣 埔心鄉","彰化縣 永靖鄉","彰化縣 社頭鄉","彰化縣 二水鄉","彰化縣 北斗鎮","彰化縣 二林鎮","彰化縣 田尾鄉","彰化縣 埤頭鄉","彰化縣 芳苑鄉","彰化縣 大城鄉","彰化縣 竹塘鄉","彰化縣 溪州鄉","南投縣 南投市","南投縣 埔里鎮","南投縣 草屯鎮","南投縣 竹山鎮","南投縣 集集鎮","南投縣 名間鄉","南投縣 鹿谷鄉","南投縣 中寮鄉","南投縣 魚池鄉","南投縣 國姓鄉","南投縣 水里鄉","南投縣 信義鄉","南投縣 仁愛鄉","雲林縣 斗六市","雲林縣 斗南鎮","雲林縣 虎尾鎮","雲林縣 西螺鎮","雲林縣 土庫鎮","雲林縣 北港鎮","雲林縣 古坑鄉","雲林縣 大埤鄉","雲林縣 莿桐鄉","雲林縣 林內鄉","雲林縣 二崙鄉","雲林縣 崙背鄉","雲林縣 麥寮鄉","雲林縣 東勢鄉","雲林縣 褒忠鄉","雲林縣 台西鄉","雲林縣 元長鄉","雲林縣 四湖鄉","雲林縣 口湖鄉","雲林縣 水林鄉","嘉義縣 太保市","嘉義縣 朴子市","嘉義縣 布袋鎮","嘉義縣 大林鎮","嘉義縣 民雄鄉","嘉義縣 溪口鄉","嘉義縣 新港鄉","嘉義縣 六腳鄉","嘉義縣 東石鄉","嘉義縣 義竹鄉","嘉義縣 鹿草鄉","嘉義縣 水上鄉","嘉義縣 中埔鄉","嘉義縣 竹崎鄉","嘉義縣 梅山鄉","嘉義縣 番路鄉","嘉義縣 大埔鄉","嘉義縣 阿里山鄉","嘉義市 東區","嘉義市 西區","台南市 中西區","台南市 東區","台南市 南區","台南市 北區","台南市 安平區","台南市 安南區","台南市 永康區","台南市 歸仁區","台南市 新化區","台南市 左鎮區","台南市 玉井區","台南市 楠西區","台南市 南化區","台南市 仁德區","台南市 關廟區","台南市 龍崎區","台南市 官田區","台南市 麻豆區","台南市 佳里區","台南市 西港區","台南市 七股區","台南市 將軍區","台南市 學甲區","台南市 北門區","台南市 新營區","台南市 後壁區","台南市 白河區","台南市 東山區","台南市 六甲區","台南市 下營區","台南市 柳營區","台南市 鹽水區","台南市 善化區","台南市 大內區","台南市 山上區","台南市 新市區","台南市 安定區","高雄市 楠梓區","高雄市 左營區","高雄市 鼓山區","高雄市 三民區","高雄市 苓雅區","高雄市 新興區","高雄市 前金區","高雄市 鹽埕區","高雄市 前鎮區","高雄市 旗津區","高雄市 小港區","高雄市 鳳山區","高雄市 大寮區","高雄市 鳥松區","高雄市 林園區","高雄市 仁武區","高雄市 大樹區","高雄市 大社區","高雄市 岡山區","高雄市 路竹區","高雄市 阿蓮區","高雄市 田寮區","高雄市 燕巢區","高雄市 橋頭區","高雄市 梓官區","高雄市 彌陀區","高雄市 永安區","高雄市 湖內區","高雄市 旗山區","高雄市 美濃區","高雄市 六龜區","高雄市 內門區","高雄市 杉林區","高雄市 甲仙區","高雄市 桃源區","高雄市 那瑪夏區","高雄市 茂林區","屏東縣 屏東市","屏東縣 三地門鄉","屏東縣 霧臺鄉","屏東縣 瑪家鄉","屏東縣 九如鄉","屏東縣 里港鄉","屏東縣 高樹鄉","屏東縣 鹽埔鄉","屏東縣 長治鄉","屏東縣 麟洛鄉","屏東縣 竹田鄉","屏東縣 內埔鄉","屏東縣 萬丹鄉","屏東縣 潮州鎮","屏東縣 泰武鄉","屏東縣 來義鄉","屏東縣 萬巒鄉","屏東縣 崁頂鄉","屏東縣 新埤鄉","屏東縣 南州鄉","屏東縣 林邊鄉","屏東縣 東港鎮","屏東縣 琉球鄉","屏東縣 佳冬鄉","屏東縣 新園鄉","屏東縣 枋寮鄉","屏東縣 枋山鄉","屏東縣 春日鄉","屏東縣 獅子鄉","屏東縣 車城鄉","屏東縣 牡丹鄉","屏東縣 恆春鎮","屏東縣 滿州鄉","宜蘭縣 宜蘭市","宜蘭縣 頭城鎮","宜蘭縣 礁溪鄉","宜蘭縣 壯圍鄉","宜蘭縣 員山鄉","宜蘭縣 羅東鎮","宜蘭縣 三星鄉","宜蘭縣 大同鄉","宜蘭縣 五結鄉","宜蘭縣 冬山鄉","宜蘭縣 蘇澳鎮","宜蘭縣 南澳鄉","花蓮縣 花蓮市","花蓮縣 鳳林鎮","花蓮縣 玉里鎮","花蓮縣 新城鄉","花蓮縣 吉安鄉","花蓮縣 壽豐鄉","花蓮縣 光復鄉","花蓮縣 豐濱鄉","花蓮縣 瑞穗鄉","花蓮縣 富里鄉","花蓮縣 秀林鄉","花蓮縣 萬榮鄉","花蓮縣 卓溪鄉","台東縣 台東市","台東縣 成功鎮","台東縣 關山鎮","台東縣 卑名鄉","台東縣 鹿野鄉","台東縣 池上鄉","台東縣 東河鄉","台東縣 長濱鄉","台東縣 太麻里鄉","台東縣 大武鄉","台東縣 綠島鄉","台東縣 蘭嶼鄉","台東縣 延平鄉","台東縣 海端鄉","台東縣 金峰鄉","台東縣 達仁鄉","澎湖縣 馬公市","澎湖縣 湖西鄉","澎湖縣 白沙鄉","澎湖縣 西嶼鄉","澎湖縣 望安鄉","澎湖縣 七美鄉","金門縣 金城鎮","金門縣 金湖鎮","金門縣 金沙鎮","金門縣 金寧鄉","金門縣 烈嶼鄉","金門縣 烏坵鄉","連江縣 南竿鄉","連江縣 北竿鄉","連江縣 莒光鄉","連江縣 東引鄉"];

const subjects = {
    1: { n: "太陽", loc: "陽光充足的開闊空地或廣場", color: "#FFD700" },
    2: { n: "騎士", loc: "帶有流動感的路口或車站周邊", color: "#85C1E9" },
    3: { n: "幸運草", loc: "不經意路過的微型綠地或小公園", color: "#82E0AA" },
    4: { n: "船", loc: "能眺望遠方的水岸、橋樑或港口", color: "#5DADE2" },
    5: { n: "房子", loc: "充滿生活氣息的老街或傳統住宅區", color: "#EDBB99" },
    6: { n: "樹", loc: "安靜的林蔭大道或老樹下", color: "#58D68D" },
    7: { n: "雲", loc: "地勢較高、視野開闊的觀景點", color: "#D5DBDB" },
    8: { n: "蛇", loc: "有點曲折的窄巷或神秘小徑", color: "#ABB2B9" },
    9: { n: "棺材", loc: "安靜的廢棄空間或歷史遺址", color: "#F4F6F7" },
    10: { n: "花束", loc: "氣氛不錯的選物店或植物空間", color: "#D7BDE2" },
    11: { n: "鐮刀", loc: "線條俐落的現代化建築或金屬地標", color: "#E74C3C" },
    12: { n: "鞭子", loc: "充滿活力的運動場或河濱步道", color: "#F1948A" },
    13: { n: "鳥", loc: "熱鬧的傳統市場或人潮聚集地", color: "#F8C471" },
    14: { n: "小孩", loc: "色彩鮮明或帶有童趣的空間", color: "#85E1E1" },
    15: { n: "狐狸", loc: "有設計感、獨具風格的小店", color: "#E67E22" },
    16: { n: "熊", loc: "給人穩重感的石造建築或自然岩貌", color: "#4f2f16" },
    17: { n: "星辰", loc: "適合欣賞夜景或燈火的高點", color: "#85c1e9" },
    18: { n: "鸛鳥", loc: "正在施工或有著新生氣息的街區", color: "#E8F8F5" },
    19: { n: "狗", loc: "充滿人情味與舊時代溫度的老店", color: "#F5CBA7" },
    20: { n: "高塔", loc: "可以仰望的醒目地標或高聳建築", color: "#333333" },
    21: { n: "公園", loc: "規劃整齊的公共綠地或自然步道", color: "#a2d149" },
    22: { n: "山", loc: "需要稍微爬坡或有高低落差的地方", color: "#4F4F4F" },
    23: { n: "路徑", loc: "對稱的街道或命運般的岔路口", color: "#828282" },
    24: { n: "老鼠", loc: "斑駁但充滿故事的舊物聚落", color: "#3C3C3C" },
    25: { n: "心", loc: "會讓人感到心情平靜的浪漫角落", color: "#EC7063" },
    26: { n: "戒指", loc: "有著圓形幾何元素或環狀設計的地方", color: "#f2c94c" },
    27: { n: "書本", loc: "安靜的圖書館或獨立書店", color: "#6FCF97" },
    28: { n: "信件", loc: "郵局附近或是有些懷舊感的街角", color: "#E0E0E0" },
    29: { n: "男人", loc: "工業風或帶有粗獷線條的區域", color: "#2F80ED" },
    30: { n: "女人", loc: "曲線柔和且帶有自然氣息的場景", color: "#F2994A" },
    31: { n: "百合", loc: "乾淨純粹的極簡空間或藝廊", color: "#FFFFFF" },
    32: { n: "月亮", loc: "光影交錯、氣氛稍顯曖昧的微光處", color: "#AF7AC5" },
    33: { n: "鑰匙", loc: "隱密但會讓人想一探究竟的入口", color: "#F4D03F" },
    34: { n: "魚", loc: "人潮來往、充滿流動感的熱鬧街區", color: "#273321" },
    35: { n: "錨", loc: "能給人滿滿安全感的堅固結構或避風港", color: "#4F4F4F" },
    36: { n: "十字架", loc: "安靜且帶有一點儀式感的地方", color: "#333333" }
};
const traits = { 1: "充滿陽光與活力", 2: "不期而遇的驚喜", 3: "讓人感到放鬆", 4: "安靜沈穩", 5: "自然生長", 6: "帶點奇幻感", 7: "神秘且深邃", 8: "煥然一新", 9: "生機盎然", 10: "俐落有型", 11: "充滿節奏感", 12: "熱鬧喧囂", 13: "純真質樸", 14: "有著職人精神", 15: "自信亮眼", 16: "細節豐富", 17: "新穎前衛", 18: "溫柔和諧", 19: "純淨美好", 20: "充滿日常感", 21: "視覺反差強烈", 22: "隨性自由", 23: "零散卻迷人", 24: "色彩濃烈", 25: "時間彷彿靜止", 26: "充滿未知感", 27: "帶有故事性", 28: "結構感強烈", 29: "憑著直覺", 30: "極簡純粹", 31: "獨特且美好", 32: "充滿詩意", 33: "能激發靈感", 34: "豐富且慵懶", 35: "平靜安穩", 36: "像是一種註定" };
const outfits = {
    "COLD": ["質感羊毛大衣配上舒適的圍巾", "高領毛衣搭配俐落的皮件單品", "燈芯絨套裝與好走的短靴", "保暖的羊羔毛夾克與直筒褲", "帶有層次感的針織衫與修身長褲", "深色系西裝外套加上一點銀飾點綴", "厚實的復古格紋外套與一頂貝蕾帽", "溫暖的長版風衣疊穿舒適內搭", "率性的皮革飛行外套與粗編織圍巾", "簡單的羊毛西裝配上輕薄羽絨", "寬鬆的衛衣搭配有點個性的工裝褲", "毛呢外套搭配簡單的襯衫", "深色麂皮單品與同色系的針織", "保暖又具結構感的羽絨服", "長版大衣配上一雙好走的皮靴", "厚實毛衣與休閒丹寧的經典組合", "莫蘭迪色系的大衣與皮革單品", "舒適的連帽上衣疊搭羊毛外套", "保暖披肩與一雙好活動的手套", "簡單卻有質感的全黑層次穿搭"],
    "MILD": ["剪裁舒適的休閒西裝與一副墨鏡", "輕薄的風衣搭配柔和色系的內搭", "率性的整套丹寧裝扮與平底鞋", "微寬鬆的襯衫配上高腰西裝寬褲", "飛行員夾克與材質柔軟的長裙", "帶點透視感的輕薄單品與極簡內搭", "馬卡龍色系的輕盈套裝", "好活動的工裝單品與漆皮靴", "有點細節的蕾絲上衣與牛仔褲", "復古領型的上衣與舒適寬褲", "透氣的亞麻單品搭配同色系短褲", "簡單俐落的無袖背心與寬鬆襯衫", "帶點法式風情的圓點單品或絲巾", "柔軟的薄針織套裝", "寬鬆舒適的大學T與絲滑長裙", "設計感襯衫搭配簡單的半身裙", "運動風單品與微正式長褲的混搭", "針織背心疊穿襯衫的微學院風", "美式復古外套與修身牛仔褲", "雪紡長袖與質感的皮革配件"],
    "HOT": ["滑順的絲緞單品與一點金屬首飾", "涼爽的綢緞裝束與細帶涼鞋", "透氣的亞麻套裝搭配簡單頸鍊", "設計感十足的純白棉質單品", "輕盈的鏤空上衣與舒適的棉麻寬褲", "充滿夏日感的印花單品與草編包", "微露背的設計感背心與丹寧", "通風舒適的連身裝與極簡涼鞋", "有點寬鬆的白襯衫與輕薄短裙", "帶點波西米亞風的罩衫與金屬配飾", "亮色系的平口或細肩帶單品", "輕薄的針織背心與亞麻長裙", "美式復古運動風搭配高腰長裙", "雪紡單品搭配貼身的羅紋背心", "全白亞麻襯衫與亮眼內搭", "一字領上衣與簡單的直筒短褲", "帶點透視感的微涼針織與高腰短裙", "充滿度假感的短袖襯衫與闊腿褲", "短版合身背心與輕柔的絲質長褲", "清爽的洋裝搭配簡單的配件"]
};

const API_URL = "https://script.google.com/macros/s/AKfycbzPZeJ8BZAXOMakvaL64QnlQf5sfrqsA8qsUnbO3DS2mKPPVbhxObKqiL3LBiYXaPoP/exec";
let cloudData = [];
let currentChannel = localStorage.getItem('route19_current_channel') || 'Wade&Cloudy';
let currentTemp = 'MILD';
let currentRecord = null;

function formatToDateOnly(rawDate) {
    if (!rawDate) return '';
    if (rawDate.includes('T')) return rawDate.split('T')[0].replace(/-/g, '.');
    return rawDate.replace(/\//g, '.');
}

window.onload = () => { 
    document.getElementById('current-channel-display').innerText = currentChannel;
    initLights(); 
    loadCloudData(); 
};

function showPage(pId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById(pId).classList.add('active');
    document.getElementById(`nav-${pId}`).classList.add('active');
    
    // 當切換到藏品或日誌頁面時，確保資料重新渲染
    if(pId === 'archive' || pId === 'timeline') {
        renderView();
    }
}

function changeChannel() {
    const newChannel = prompt("請輸入旅行電台頻段代碼 (例如你的名字或團隊名稱) :", currentChannel);
    if(newChannel && newChannel.trim() !== "") {
        currentChannel = newChannel.trim();
        localStorage.setItem('route19_current_channel', currentChannel);
        document.getElementById('current-channel-display').innerText = currentChannel;
        loadCloudData();
    }
}

async function loadCloudData() {
    document.getElementById('journal-list').innerHTML = `<div class="state-message">正在為你調頻至 [ ${currentChannel} ]，尋回相冊記憶...</div>`;
    
    try {
        const response = await fetch(`${API_URL}?channel=${encodeURIComponent(currentChannel)}`);
        const result = await response.json();
        
        if (result.status === "success") {
            cloudData = result.data || [];
            renderView();
        }
    } catch (error) {
        console.error("同步失敗:", error);
        document.getElementById('journal-list').innerHTML = `<div class="state-message" style="color:#e74c3c;">訊號微弱，暫時無法連接至電台資料庫，請稍後再試。</div>`;
    }
}

function initLights() {
    const container = document.getElementById('stamp-container');
    if(!container) return;
    container.innerHTML = '';

    const grouped = {};
    taiwanData.forEach((item, index) => {
        const [county, district] = item.split(' ');
        const cityName = county ? county.substring(0, 2) : item.substring(0, 2);
        
        if (!grouped[cityName]) grouped[cityName] = [];
        grouped[cityName].push({ district: district || item, index });
    });

    for (const city in grouped) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'stamp-group';

        const title = document.createElement('div');
        title.className = 'stamp-county-title';
        title.innerText = city;
        groupDiv.appendChild(title);

        const board = document.createElement('div');
        board.className = 'stamp-board-grouped';

        grouped[city].forEach(loc => {
            const stamp = document.createElement('div');
            stamp.className = 'stamp';
            stamp.id = `map-stamp-${loc.index}`;
            stamp.innerText = loc.district;
            
            // 新增：把行政區的字數存入 HTML 標籤，讓 CSS 可以抓取做排版平衡
            stamp.setAttribute('data-len', loc.district.length); 
            
            board.appendChild(stamp);
        });

        groupDiv.appendChild(board);
        container.appendChild(groupDiv);
    }
}

function renderView() {
    // 1. 徽章牆狀態重置
    document.querySelectorAll('.stamp').forEach(s => { 
        s.classList.remove('active'); 
        s.style.background = 'transparent';
        s.style.color = 'rgba(255,255,255,0.3)';
        s.style.borderColor = 'rgba(255,255,255,0.15)';
        s.style.boxShadow = 'none';
        s.style.fontWeight = 'normal';
        s.style.transform = 'scale(1)';
    });
    
    // 準備計算進度：不重複的地點數量
    const totalStamps = taiwanData.length; // 總數 368
    const collectedIndices = new Set();
    
    // 點亮徽章並記錄不重複進度
    cloudData.forEach(j => {
        if (!j.name) return; 
        const cleanName = j.name.replace(/\s+/g, '');
        const idx = taiwanData.findIndex(loc => loc.replace(/\s+/g, '') === cleanName);
        
        if (idx !== -1) {
            collectedIndices.add(idx); // 加入已探索的 Set
            
            const stamp = document.getElementById(`map-stamp-${idx}`);
            if (stamp) { 
                stamp.classList.add('active'); 
                const stampColor = j.color || '#FFD700'; 
                stamp.style.background = stampColor; 
                stamp.style.color = '#000'; 
                stamp.style.fontWeight = '700';
                stamp.style.borderColor = 'transparent';
                stamp.style.boxShadow = `0 0 12px ${stampColor}, 0 0 25px ${stampColor}`;
                stamp.style.transform = 'scale(1.05)';
            }
        }
    });

    // 更新進度條 UI
    const uniqueCount = collectedIndices.size;
    const percent = totalStamps > 0 ? ((uniqueCount / totalStamps) * 100).toFixed(1) : 0;
    
    const fillEl = document.getElementById('progress-bar-fill');
    const textCountEl = document.getElementById('progress-text-count');
    const percentEl = document.getElementById('progress-percent');
    
    if (fillEl) fillEl.style.width = `${percent}%`;
    if (textCountEl) textCountEl.innerText = `${uniqueCount} / ${totalStamps}`;
    if (percentEl) percentEl.innerText = `${percent}%`;

    // 2. 渲染獨立的 Timeline 日誌
    const listEl = document.getElementById('journal-list');
    if (listEl) {
        listEl.innerHTML = cloudData.length === 0 ? `<div class="state-message">頻段 [ ${currentChannel} ] 的日誌還空著，去抽取你的第一個靈感吧。</div>` :
            [...cloudData].reverse().map((log, i, arr) => `
                <div class="journal-card">
                    <div class="j-index">#${String(arr.length - i).padStart(3, '0')}</div>
                    <div style="font-size:0.45rem; letter-spacing:0.2em; color:#555; text-transform:uppercase; margin-bottom:10px;">${formatToDateOnly(log.date)} / ${log.combo}</div>
                    <span class="j-district">${log.name}</span>
                    <div class="j-row-info"><strong style="color:${log.color || '#FFD700'}">LOCATION</strong>${log.m_action}</div>
                    <div class="j-row-info"><strong style="color:${log.color || '#FFD700'}">TASTE</strong>${log.m_food}</div>
                    <div class="j-row-info"><strong style="color:${log.color || '#FFD700'}">STYLING</strong>${log.m_style}</div>
                </div>
            `).join('');
    }
}

function setTemp(t) {
    currentTemp = t;
    document.querySelectorAll('.temp-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${t}`).classList.add('active');
}

function drawFate() {
    const locEl = document.getElementById('loc-result');
    const comboEl = document.getElementById('combo-display');
    const panel = document.getElementById('mission-panel');
    panel.style.display = 'none';
    comboEl.style.visibility = 'hidden';
    
    let i = 0;
    const timer = setInterval(() => {
        locEl.innerText = taiwanData[Math.floor(Math.random() * taiwanData.length)];
        locEl.style.color = "var(--white)"; 
        i++;
        if (i > 25) {
            clearInterval(timer);
            const finalLoc = taiwanData[Math.floor(Math.random() * taiwanData.length)];
            
            const id1 = Math.floor(Math.random() * 36) + 1;
            let id2 = Math.floor(Math.random() * 36) + 1;
            while (id2 === id1) { id2 = Math.floor(Math.random() * 36) + 1; }
            
            const s1 = subjects[id1];
            const s2 = subjects[id2];
            
            const m_a = `去一趟「${s1.loc}」，試著為那裡「${traits[id2]}」的氛圍按一次快門。`;
            const m_f = `找一間風格「${id1 > 18 ? '豐富有層次' : '簡單舒服'}」的在地小店，享受屬於今天的味覺記憶。`;
            const m_s = `今天出門，很適合換上「${outfits[currentTemp][Math.floor(Math.random()*20)]}」的裝扮。`;

            locEl.innerText = finalLoc;
            document.getElementById('tag-1').innerText = s1.n.split(' ')[0];
            document.getElementById('tag-2').innerText = s2.n.split(' ')[0];
            comboEl.style.visibility = 'visible';
            document.getElementById('m-action').innerText = m_a;
            document.getElementById('m-food').innerText = m_f;
            document.getElementById('m-style').innerText = m_s;
            document.body.style.setProperty('--active-color', s1.color);
            panel.style.display = 'block';
            
            currentRecord = { 
                name: finalLoc, 
                combo: `${s1.n.split(' ')[0]} ✕ ${s2.n.split(' ')[0]}`, 
                card1: s1.n.split(' ')[0], 
                card2: s2.n.split(' ')[0], 
                m_action: m_a, m_food: m_f, m_style: m_s, 
                color: s1.color, 
                date: new Date().toISOString() 
            };
        }
    }, 60);
}

async function manualSave() {
    if (!currentRecord) return;
    
    const saveBtn = document.getElementById('btn-save');
    saveBtn.innerText = "正在溫柔地為你收藏...";
    saveBtn.disabled = true;

    currentRecord.channel = currentChannel;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(currentRecord)
        });
        
        const result = await response.json();
        if (result.status === "success") {
            alert(`已將這個瞬間，溫柔地存放至 [ ${currentChannel} ] 的雲端電台。`);
            await loadCloudData(); 
        }
    } catch (error) {
        alert("收藏失敗，請確認你的網路狀態，稍後再試。");
    } finally {
        saveBtn.innerText = "收藏這個瞬間";
        saveBtn.disabled = false;
    }
}

function generateIGStory() {
    if (!currentRecord) {
        alert("請先抽取今日靈感。");
        return;
    }

    let isSaved = cloudData.length > 0 && 
                  cloudData[cloudData.length - 1].date === currentRecord.date && 
                  cloudData[cloudData.length - 1].combo === currentRecord.combo;
    
    let displayIndex = isSaved ? cloudData.length : cloudData.length + 1;
    document.getElementById('poster-vol').innerText = `#${String(displayIndex).padStart(3, '0')}`;

    document.getElementById('poster-card-1').innerText = currentRecord.card1;
    document.getElementById('poster-card-2').innerText = currentRecord.card2;
    
    document.getElementById('poster-loc').innerText = currentRecord.name;
    document.getElementById('poster-action').innerText = currentRecord.m_action;
    document.getElementById('poster-food').innerText = currentRecord.m_food;
    document.getElementById('poster-style').innerText = currentRecord.m_style;
    
    document.getElementById('poster-date').innerText = formatToDateOnly(currentRecord.date);

    const posterTemplate = document.getElementById('poster-template');
    posterTemplate.style.setProperty('--active-color', currentRecord.color);

    setTimeout(() => {
        html2canvas(posterTemplate, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#030303"
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `Route19_${currentRecord.name.replace(' ', '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }, 150);
}
