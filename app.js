const taiwanData = ["台北市 中正區","台北市 大同區","台北市 中山區","台北市 松山區","台北市 大安區","台北市 萬華區","台北市 信義區","台北市 士林區","台北市 北投區","台北市 內湖區","台北市 南港區","台北市 文山區","新北市 板橋區","新北市 三重區","新北市 中和區","新北市 永和區","新北市 新莊區","新北市 新店區","新北市 樹林區","新北市 鶯歌區","新北市 三峽區","新北市 淡水區","新北市 汐止區","新北市 瑞芳區","新北市 土城區","新北市 蘆洲區","新北市 五股區","新北市 泰山區","新北市 林口區","新北市 深坑區","新北市 石碇區","新北市 坪林區","新北市 三芝區","新北市 石門區","新北市 八里區","新北市 平溪區","新北市 雙溪區","新北市 貢寮區","新北市 金山區","新北市 萬里區","新北市 烏來區","基隆市 仁愛區","基隆市 信義區","基隆市 中正區","基隆市 中山區","基隆市 安樂區","基隆市 暖暖區","基隆市 七堵區","桃園市 桃園區","桃園市 中壢區","桃園市 大溪區","桃園市 楊梅區","桃園市 蘆竹區","桃園市 大園區","桃園市 龜山區","桃園市 八德區","桃園市 龍潭區","桃園市 平鎮區","桃園市 新屋區","桃園市 觀音區","桃園市 復興區","新竹縣 竹北市","新竹縣 竹東鎮","新竹縣 新埔鎮","新竹縣 關西鎮","新竹縣 湖口鄉","新竹縣 新豐鄉","新竹縣 芎林鄉","新竹縣 橫山鄉","新竹縣 北埔鄉","新竹縣 寶山鄉","新竹縣 峨眉鄉","新竹縣 尖石鄉","新竹縣 五峰鄉","新竹市 東區","新竹市 北區","新竹市 香山區","苗栗縣 苗栗市","苗栗縣 頭份市","苗栗縣 竹南鎮","苗栗縣 後龍鎮","苗栗縣 通霄鎮","苗栗縣 苑裡鎮","苗栗縣 卓蘭鎮","苗栗縣 造橋鄉","苗栗縣 西湖鄉","苗栗縣 頭屋鄉","苗栗縣 公館鄉","苗栗縣 銅鑼鄉","苗栗縣 三義鄉","苗栗縣 大湖鄉","苗栗縣 獅潭鄉","苗栗縣 三灣鄉","苗栗縣 南庄鄉","苗栗縣 泰安鄉","台中市 中區","台中市 東區","台中市 南區","台中市 西區","台中市 北區","台中市 北屯區","台中市 西屯區","台中市 南屯區","台中市 太平區","台中市 大里區","台中市 霧峰區","台中市 烏日區","台中市 丰原區","台中市 后里區","台中市 石岡區","台中市 東勢區","台中市 和平區","台中市 新社區","台中市 潭子區","台中市 大雅區","台中市 神岡區","台中市 大肚區","台中市 沙鹿區","台中市 龍井區","台中市 梧棲區","台中市 清水區","台中市 大甲區","台中市 外埔區","台中市 大安區","彰化縣 彰化市","彰化縣 鹿港鎮","彰化縣 和美鎮","彰化縣 線西鄉","彰化縣 伸港鄉","彰化縣 福興鄉","彰化縣 秀水鄉","彰化縣 花壇鄉","彰化縣 芬園鄉","彰化縣 員林市","彰化縣 溪湖鎮","彰化縣 田中鎮","彰化縣 大村鄉","彰化縣 埔鹽鄉","彰化縣 埔心鄉","彰化縣 永靖鄉","彰化縣 社頭鄉","彰化縣 二水鄉","彰化縣 北斗鎮","彰化縣 二林鎮","彰化縣 田尾鄉","彰化縣 埤頭鄉","彰化縣 芳苑鄉","彰化縣 大城鄉","彰化縣 竹塘鄉","彰化縣 溪州鄉","南投縣 南投市","南投縣 埔里鎮","南投縣 草屯鎮","南投縣 竹山鎮","南投縣 集集鎮","南投縣 名間鄉","南投縣 鹿谷鄉","南投縣 中寮鄉","南投縣 魚池鄉","南投縣 國姓鄉","南投縣 水里鄉","南投縣 信義鄉","南投縣 仁愛鄉","雲林縣 斗六市","雲林縣 斗南鎮","雲林縣 虎尾鎮","雲林縣 西螺鎮","雲林縣 土庫鎮","雲林縣 北港鎮","雲林縣 古坑鄉","雲林縣 大埤鄉","雲林縣 莿桐鄉","雲林縣 林內鄉","雲林縣 二崙鄉","雲林縣 崙背鄉","雲林縣 麥寮鄉","雲林縣 東勢鄉","雲林縣 褒忠鄉","雲林縣 台西鄉","雲林縣 元長鄉","雲林縣 四湖鄉","雲林縣 口湖鄉","雲林縣 水林鄉","嘉義縣 太保市","嘉義縣 朴子市","嘉義縣 布袋鎮","嘉義縣 大林鎮","嘉義縣 民雄鄉","嘉義縣 溪口鄉","嘉義縣 新港鄉","嘉義縣 六腳鄉","嘉義縣 東石鄉","嘉義縣 義竹鄉","嘉義縣 鹿草鄉","嘉義縣 水上鄉","嘉義縣 中埔鄉","嘉義縣 竹崎鄉","嘉義縣 梅山鄉","嘉義縣 番路鄉","嘉義縣 大埔鄉","嘉義縣 阿里山鄉","嘉義市 東區","嘉義市 西區","台南市 中西區","台南市 東區","台南市 南區","台南市 北區","台南市 安平區","台南市 安南區","台南市 永康區","台南市 歸仁區","台南市 新化區","台南市 左鎮區","台南市 玉井區","台南市 楠西區","台南市 南化區","台南市 仁德區","台南市 關廟區","台南市 龍崎區","台南市 官田區","台南市 麻豆區","台南市 佳里區","台南市 西港區","台南市 七股區","台南市 將軍區","台南市 學甲區","台南市 北門區","台南市 新營區","台南市 後壁區","台南市 白河區","台南市 東山區","台南市 六甲區","台南市 下營區","台南市 柳營區","台南市 鹽水區","台南市 善化區","台南市 大內區","台南市 山上區","台南市 新市區","台南市 安定區","高雄市 楠梓區","高雄市 左營區","高雄市 鼓山區","高雄市 三民區","高雄市 苓雅區","高雄市 新興區","高雄市 前金區","高雄市 鹽埕區","高雄市 前鎮區","高雄市 旗津區","高雄市 小港區","高雄市 鳳山區","高雄市 大寮區","高雄市 鳥松區","高雄市 林園區","高雄市 仁武區","高雄市 大樹區","高雄市 大社區","高雄市 岡山區","高雄市 路竹區","高雄市 阿蓮區","高雄市 田寮區","高雄市 燕巢區","高雄市 橋頭區","高雄市 梓官區","高雄市 彌陀區","高雄市 永安區","高雄市 湖內區","高雄市 旗山區","高雄市 美濃區","高雄市 六龜區","高雄市 內門區","高雄市 杉林區","高雄市 甲仙區","高雄市 桃源區","高雄市 那瑪夏區","高雄市 茂林區","屏東縣 屏東市","屏東縣 三地門鄉","屏東縣 霧臺鄉","屏東縣 瑪家鄉","屏東縣 九如鄉","屏東縣 里港鄉","屏東縣 高樹鄉","屏東縣 鹽埔鄉","屏東縣 長治鄉","屏東縣 麟洛鄉","屏東縣 竹田鄉","屏東縣 內埔鄉","屏東縣 萬丹鄉","屏東縣 潮州鎮","屏東縣 泰武鄉","屏東縣 來義鄉","屏東縣 萬巒鄉","屏東縣 崁頂鄉","屏東縣 新埤鄉","屏東縣 南州鄉","屏東縣 林邊鄉","屏東縣 東港鎮","屏東縣 琉球鄉","屏東縣 佳冬鄉","屏東縣 新園鄉","屏東縣 枋寮鄉","屏東縣 枋山鄉","屏東縣 春日鄉","屏東縣 獅子鄉","屏東縣 車城鄉","屏東縣 牡丹鄉","屏東縣 恆春鎮","屏東縣 滿州鄉","宜蘭縣 宜蘭市","宜蘭縣 頭城鎮","宜蘭縣 礁溪鄉","宜蘭縣 壯圍鄉","宜蘭縣 員山鄉","宜蘭縣 羅東鎮","宜蘭縣 三星鄉","宜蘭縣 大同鄉","宜蘭縣 五結鄉","宜蘭縣 冬山鄉","宜蘭縣 蘇澳鎮","宜蘭縣 南澳鄉","花蓮縣 花蓮市","花蓮縣 鳳林鎮","花蓮縣 玉里鎮","花蓮縣 新城鄉","花蓮縣 吉安鄉","花蓮縣 壽豐鄉","花蓮縣 光復鄉","花蓮縣 豐濱鄉","花蓮縣 瑞穗鄉","花蓮縣 富里鄉","花蓮縣 秀林鄉","花蓮縣 萬榮鄉","花蓮縣 卓溪鄉","台東縣 台東市","台東縣 成功鎮","台東縣 關山鎮","台東縣 卑名鄉","台東縣 鹿野鄉","台東縣 池上鄉","台東縣 東河鄉","台東縣 長濱鄉","台東縣 太麻里鄉","台東縣 大武鄉","台東縣 綠島鄉","台東縣 蘭嶼鄉","台東縣 延平鄉","台東縣 海端鄉","台東縣 金峰鄉","台東縣 達仁鄉","澎湖縣 馬公市","澎湖縣 湖西鄉","澎湖縣 白沙鄉","澎湖縣 西嶼鄉","澎湖縣 望安鄉","澎湖縣 七美鄉","金門縣 金城鎮","金門縣 金湖鎮","金門縣 金沙鎮","金門縣 金寧鄉","金門縣 烈嶼鄉","金門縣 烏坵鄉","連江縣 南竿鄉","連江縣 北竿鄉","連江縣 莒光鄉","連江縣 東引鄉"];

const subjects = {
    1: { n: "太陽", loc: "陽光充足的開闊空地或廣場", color: "#F1C40F" },
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
    16: { n: "熊", loc: "給人穩重感的石造建築或自然岩貌", color: "#6e4a30" },
    17: { n: "星辰", loc: "適合欣賞夜景或燈火的高點", color: "#85c1e9" },
    18: { n: "鸛鳥", loc: "正在施工或有著新生氣息的街區", color: "#E8F8F5" },
    19: { n: "狗", loc: "充滿人情味與舊時代溫度的老店", color: "#F5CBA7" },
    20: { n: "高塔", loc: "可以仰望的醒目地標或高聳建築", color: "#555555" },
    21: { n: "公園", loc: "規劃整齊的公共綠地或自然步道", color: "#a2d149" },
    22: { n: "山", loc: "需要稍微爬坡或有高低落差的地方", color: "#777777" },
    23: { n: "路徑", loc: "對稱的街道或命運般的岔路口", color: "#828282" },
    24: { n: "老鼠", loc: "斑駁但充滿故事的舊物聚落", color: "#666666" },
    25: { n: "心", loc: "會讓人感到心情平靜的浪漫角落", color: "#EC7063" },
    26: { n: "戒指", loc: "有著圓形幾何元素或環狀設計的地方", color: "#f2c94c" },
    27: { n: "書本", loc: "安靜的圖書館或獨立書店", color: "#6FCF97" },
    28: { n: "信件", loc: "郵局附近或是有些懷舊感的街角", color: "#E0E0E0" },
    29: { n: "男人", loc: "工業風或帶有粗獷線條的區域", color: "#2F80ED" },
    30: { n: "女人", loc: "曲線柔和且帶有自然氣息的場景", color: "#F2994A" },
    31: { n: "百合", loc: "乾淨純粹的極簡空間或藝廊", color: "#FFFFFF" },
    32: { n: "月亮", loc: "光影交錯、氣氛稍顯曖昧的微光處", color: "#AF7AC5" },
    33: { n: "鑰匙", loc: "隱密但會讓人想一探究竟的入口", color: "#F4D03F" },
    34: { n: "魚", loc: "人潮來往、充滿流動感的熱鬧街區", color: "#5b704c" },
    35: { n: "錨", loc: "能給人滿滿安全感的堅固結構或避風港", color: "#5c5c5c" },
    36: { n: "十字架", loc: "安靜且帶有一點儀式感的地方", color: "#888888" }
};
const traits = { 1: "充滿陽光與活力", 2: "不期而遇的驚喜", 3: "讓人感到放鬆", 4: "安靜沈穩", 5: "自然生長", 6: "帶點奇幻感", 7: "神秘且深邃", 8: "煥然一新", 9: "生機盎然", 10: "俐落有型", 11: "充滿節奏感", 12: "熱鬧喧囂", 13: "純真質樸", 14: "有著職人精神", 15: "自信亮眼", 16: "細節豐富", 17: "新穎前衛", 18: "溫柔和諧", 19: "純淨美好", 20: "充滿日常感", 21: "視覺反差強烈", 22: "隨性自由", 23: "零散卻迷人", 24: "色彩濃烈", 25: "時間彷彿靜止", 26: "充滿未知感", 27: "帶有故事性", 28: "結構感強烈", 29: "憑著直覺", 30: "極簡純粹", 31: "獨特且美好", 32: "充滿詩意", 33: "能激發靈感", 34: "豐富且慵懶", 35: "平靜安穩", 36: "像是一種註定" };

const outfits = {
    "COLD": [
        "燕麥色的羊絨大衣疊穿高領針織，配上柔軟的羊毛圍巾與及踝皮靴",
        "帶有灰調的深海藍雙排扣風衣，搭配合身的深色丹寧與金屬扣皮帶",
        "柔軟的奶油白粗編織毛衣，配上燈芯絨寬褲與一雙好走的麂皮雀爾喜靴",
        "層次豐富的洋蔥式穿搭：純白高領、淺藍襯衫，外罩一件微寬鬆的毛呢西裝",
        "率性的焦糖色皮革飛行夾克，內搭極簡黑毛衣與修身直筒褲",
        "質感極佳的深灰長版大衣，點綴一條鮮豔跳色的喀什米爾圍巾",
        "充滿英倫氣息的復古格紋外套，搭配黑色高領與一頂法式貝蕾帽",
        "柔軟的羊羔毛翻領夾克，搭配稍微寬鬆的工裝褲與厚底軍靴",
        "剪裁俐落的黑色雙排扣西裝，內搭輕薄保暖的針織衫與低調的銀色長項鍊",
        "帶有一點慵懶感的Oversize連帽衛衣，外搭長版風衣製造視覺衝突",
        "莫蘭迪色系的整套針織居家服，外罩一件充滿份量感的長版羽絨",
        "深褐色的麂皮單品，內搭同色系的柔和針織，呈現大地色的純粹感",
        "剪裁優雅的無領毛呢外套，搭配簡潔的白色襯衫與高腰西裝褲",
        "具有挺度的厚棉大學T，疊穿露出下擺的長版襯衫，配上舒適的帆布鞋",
        "保暖的粗針織開襟衫，內搭絲質吊帶增添對比層次，下身選擇微喇叭長褲",
        "長版大衣配上一雙修飾腿型的過膝皮靴，展現俐落的冬日都會感",
        "帶點文藝氣息的牛角扣大衣，搭配大地色系燈芯絨裙與厚磅毛襪",
        "充滿細節的蕾絲內搭微露於V領毛衣之外，披上一件厚實的保暖披肩",
        "低調高級的全黑層次穿搭，僅利用皮革、羊毛與純棉的材質差異做出細節",
        "寬鬆舒適的針織背心疊穿素色襯衫，配上直筒牛仔褲展現微學院風"
    ],
    "MILD": [
        "低飽和度的灰綠色亞麻西裝套裝，內搭簡單的純白T恤與經典球鞋",
        "帶點法式慵懶的波卡圓點真絲襯衫，微微解開兩顆釦子，塞進高腰直筒褲",
        "剪裁俐落的莫蘭迪色西裝外套，搭配輕薄的羅紋背心與微喇叭丹寧褲",
        "柔軟的薄針織罩衫，配上帶有垂墜感的緞面長裙與一對溫潤的珍珠耳環",
        "輕薄的卡其色長版風衣輕輕繫上腰帶，微微露出內搭的蕾絲邊緣",
        "透氣的純白棉麻襯衫，搭配柔軟的寬鬆亞麻褲，營造漫不經心的鬆弛感",
        "率性的整套原色丹寧裝扮，內搭微透視的上衣，踩上一雙平底樂福鞋",
        "設計感十足的不對稱剪裁襯衫，搭配簡單的黑色修身半裙",
        "帶有復古領型的淺色上衣，配上高腰西裝寬褲與一條質感的細皮帶",
        "充滿活力的短版大學T，搭配絲滑的高腰長裙製造材質衝突的美感",
        "美式復古風的撞色棒球外套，內搭貼身短版背心與修身牛仔褲",
        "柔軟貼身的薄針織兩件式套裝，配上充滿存在感的琥珀色墨鏡",
        "簡單卻充滿細節的無袖背心，外罩一件不扣扣子的寬鬆條紋襯衫",
        "帶有運動元素的防風薄夾克，混搭微正式的西裝打褶長褲",
        "輕薄的雪紡長袖上衣，搭配高腰直筒褲與低跟涼鞋，展現初秋/春日的清爽",
        "帶點男孩感的寬鬆工裝短褲，搭配貼身羅紋上衣與長襪球鞋",
        "純淨的白T恤外搭一件質感極佳的深色針織背心，配上隨性的帆布包",
        "馬卡龍色系的輕盈亞麻套裝，點綴一條精緻的細緻鎖骨鍊",
        "充滿細節的刺繡或蕾絲上衣，搭配最經典的好版型牛仔褲",
        "微透膚的雪紡襯衫當作外罩，配上運動風的單車褲與老爹鞋"
    ],
    "HOT": [
        "純白色的細帶露背洋裝，戴上一頂優雅的寬簷草帽遮擋熱情陽光",
        "透氣的鼠尾草綠亞麻套裝，點綴極簡的金屬鎖骨鍊與編織涼鞋",
        "輕薄的絲滑羅紋削肩背心，搭配垂墜感極佳的闊腿褲與帆布托特包",
        "充滿夏日氣息的鵝黃色棉麻短褲套裝，配上復古貓眼墨鏡",
        "剪裁寬鬆的冰絲材質襯衫當作外罩，內搭大地色系平口背心",
        "剪裁俐落的黑色削肩連身褲，配上一雙極簡的細帶涼鞋",
        "滑順的絲緞單品微露肌膚，配上具份量感的金色手環與耳環",
        "清爽的法式方領短袖上衣，搭配高腰微喇叭牛仔褲與竹編包",
        "帶點波西米亞風的流蘇或鉤織罩衫，內搭簡單的素色比基尼與單寧短褲",
        "亮眼的飽和色系平口背心，搭配純白色的透氣棉麻長褲",
        "充滿度假感的印花短袖開襟襯衫，配上素色寬褲與舒服的休閒鞋",
        "輕盈的鏤空針織上衣，搭配舒適的棉質抽繩短褲",
        "微寬鬆的純白T恤捲起一點袖口，配上輕薄的印花短裙",
        "運動風的貼身短版背心，搭配高腰傘狀長裙，展現健康的活力感",
        "透氣的亞麻單品混搭，選擇深淺不一的大地色系營造高級層次",
        "一字領的雪紡上衣露出鎖骨線條，搭配簡單的直筒牛仔短褲",
        "充滿流動感的連身吊帶寬褲，內搭一件極薄的防曬透氣長袖",
        "絲滑柔軟的緞面長褲，上半身只搭一件剪裁極佳的純棉背心",
        "帶點透視感的微涼細針織短袖，搭配高腰A字短裙",
        "清爽的細肩帶碎花洋裝，配上小白鞋與一條精緻的腳鍊"
    ]
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
    
    if(pId === 'archive' || pId === 'timeline') {
        renderView();
    }
}

function changeChannel() {
    const newChannel = prompt("你想和誰一起共用這本漫遊護照？請輸入你們專屬的頻道名稱（例如你的名字，或你們的縮寫）：", currentChannel);
    if(newChannel && newChannel.trim() !== "") {
        currentChannel = newChannel.trim();
        localStorage.setItem('route19_current_channel', currentChannel);
        document.getElementById('current-channel-display').innerText = currentChannel;
        loadCloudData();
    }
}

async function loadCloudData() {
    document.getElementById('journal-list').innerHTML = `<div class="state-message">正在為你調頻至公路頻道 [ ${currentChannel} ]，翻閱過去的記憶切片...</div>`;
    
    try {
        const response = await fetch(`${API_URL}?channel=${encodeURIComponent(currentChannel)}`);
        const result = await response.json();
        
        if (result.status === "success") {
            cloudData = result.data || [];
            renderView();
        }
    } catch (error) {
        console.error("同步失敗:", error);
        document.getElementById('journal-list').innerHTML = `<div class="state-message" style="color:#e74c3c;">電台訊號微弱，暫時無法喚醒記憶，請稍後再試。</div>`;
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
            stamp.setAttribute('data-len', loc.district.length); 
            board.appendChild(stamp);
        });

        groupDiv.appendChild(board);
        container.appendChild(groupDiv);
    }
}

function renderView() {
    document.querySelectorAll('.stamp').forEach(s => { 
        s.classList.remove('active'); 
        s.style.background = 'transparent';
        s.style.color = 'rgba(255,255,255,0.25)';
        s.style.borderColor = 'rgba(255,255,255,0.12)';
        s.style.boxShadow = 'none';
        s.style.fontWeight = 'normal';
    });
    
    const totalStamps = taiwanData.length;
    const collectedIndices = new Set();
    
    cloudData.forEach(j => {
        if (!j.name) return; 
        const cleanName = j.name.replace(/\s+/g, '');
        const idx = taiwanData.findIndex(loc => loc.replace(/\s+/g, '') === cleanName);
        
        if (idx !== -1) {
            collectedIndices.add(idx); 
            
            const stamp = document.getElementById(`map-stamp-${idx}`);
            if (stamp) { 
                stamp.classList.add('active'); 
                const stampColor = j.color || '#F1C40F'; 
                stamp.style.background = stampColor; 
                stamp.style.color = '#000'; 
                stamp.style.fontWeight = '700';
                stamp.style.borderColor = 'transparent';
                stamp.style.boxShadow = `0 0 12px ${stampColor}, 0 0 20px ${stampColor}`;
            }
        }
    });

    const uniqueCount = collectedIndices.size;
    const percent = totalStamps > 0 ? ((uniqueCount / totalStamps) * 100).toFixed(1) : 0;
    
    const fillEl = document.getElementById('progress-bar-fill');
    const textCountEl = document.getElementById('progress-text-count');
    const percentEl = document.getElementById('progress-percent');
    
    if (fillEl) fillEl.style.width = `${percent}%`;
    if (textCountEl) textCountEl.innerText = `${uniqueCount} / ${totalStamps}`;
    if (percentEl) percentEl.innerText = `${percent}%`;

    const listEl = document.getElementById('journal-list');
    if (listEl) {
        listEl.innerHTML = cloudData.length === 0 ? `<div class="state-message">這本公路日記還是空白的呢。挑個好日子，給自己一個出發的理由吧。</div>` :
            [...cloudData].reverse().map((log, i, arr) => `
                <div class="journal-card">
                    <div class="j-index">VOL.${String(arr.length - i).padStart(3, '0')}</div>
                    <div style="font-size:0.5rem; letter-spacing:0.25em; color:#666; text-transform:uppercase; margin-bottom:12px;">${formatToDateOnly(log.date)} / ${log.combo}</div>
                    <span class="j-district">${log.name}</span>
                    <div class="j-row-info"><strong style="color:${log.color || '#F1C40F'}">Where to look</strong>${log.m_action}</div>
                    <div class="j-row-info"><strong style="color:${log.color || '#F1C40F'}">What to taste</strong>${log.m_food}</div>
                    <div class="j-row-info"><strong style="color:${log.color || '#F1C40F'}">OOTD</strong>${log.m_style}</div>
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
            
            const m_a = `帶上相機去一趟「${s1.loc}」，試著捕捉那裡「${traits[id2]}」的迷人瞬間。`;
            const m_f = `在附近尋覓一間「${id1 > 18 ? '風格層次豐富' : '純粹且舒心'}」的角落小店，讓今天的味蕾也有所記憶。`;
            const m_s = `今天出門，很適合換上「${outfits[currentTemp][Math.floor(Math.random()*20)]}」。`;

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
    saveBtn.innerText = "正在為你印上護照章...";
    saveBtn.disabled = true;

    currentRecord.channel = currentChannel;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(currentRecord)
        });
        
        const result = await response.json();
        if (result.status === "success") {
            alert(`已將這個瞬間，溫柔地存入 [ ${currentChannel} ] 的公路日記中。`);
            await loadCloudData(); 
        }
    } catch (error) {
        alert("收藏失敗，請確認你的網路狀態，稍後再試。");
    } finally {
        saveBtn.innerText = "把這趟旅程收進護照";
        saveBtn.disabled = false;
    }
}

function generateIGStory() {
    if (!currentRecord) {
        alert("給自己一個出發的理由吧，先點擊抽取今日提案。");
        return;
    }

    let isSaved = cloudData.length > 0 && 
                  cloudData[cloudData.length - 1].date === currentRecord.date && 
                  cloudData[cloudData.length - 1].combo === currentRecord.combo;
    
    let displayIndex = isSaved ? cloudData.length : cloudData.length + 1;
    document.getElementById('poster-vol').innerText = `VOL.${String(displayIndex).padStart(3, '0')}`;

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
            backgroundColor: "#050505"
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `Route19_${currentRecord.name.replace(' ', '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }, 150);
}
