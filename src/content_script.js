const groupNames = {
    'hololive_jp': [],

    'hololive_jp_official': [
        'ホロライブ',
        'Blue Journey',
    ],
    'hololive_jp_gen0': [
        'ときのそら',
        'ロボ子さん',
        'AZKi',
        'さくらみこ',
        '星街すいせい',
    ],
    'hololive_jp_gen1': [
        '夜空メル',
        'アキロゼ',
        '夏色まつり',
        '白上フブキ',
        '赤井はあと',
    ],
    'hololive_jp_gen2': [
        '湊あくあ',
        '紫咲シオン',
        '百鬼あやめ',
        '癒月ちょこ',
        '大空スバル',
    ],
    'hololive_jp_gamers': [
        '大神ミオ',
        '猫又おかゆ',
        '戌神ころね',
    ],
    'hololive_jp_gen3': [
        '兎田ぺこら',
        '不知火フレア',
        '白銀ノエル',
        '宝鐘マリン',
    ],
    'hololive_jp_gen4': [
        '角巻わため',
        '天音かなた',
        '常闇トワ',
        '姫森ルーナ',
    ],
    'hololive_jp_gen5': [
        '雪花ラミィ',
        '桃鈴ねね',
        '獅白ぼたん',
        '尾丸ポルカ',
    ],
    'hololive_jp_gen6': [
        'ラプラス',
        '鷹嶺ルイ',
        '博衣こより',
        '沙花叉クロヱ',
        '風真いろは',
    ],

    'hololive_en': [],
    'hololive_en_official': [
    ],
    'hololive_en_myth': [
        'Calli',
        'Kiara',
        'Ina',
        'Gura',
        'Amelia',
    ],
    'hololive_en_hope': [
        'IRyS',
    ],
    'hololive_en_council': [
        'Fauna',
        'Kronii',
        'Mumei',
        'Baelz',
    ],
    'hololive_en_advent': [
        'Shiori',
        'Bijou',
        'Nerissa',
        'FUWAMOCO',
    ],

    'hololive_id': [],
    'hololive_id_official': [
        'holo ID',
    ],
    'hololive_id_gen1': [
        'Risu',
        'Moona',
        'Iofi',
    ],
    'hololive_id_gen2': [
        'Ollie',
        'Anya',
        'Reine',
    ],
    'hololive_id_gen3': [
        'Zeta',
        'Kaela',
        'Kobo',
    ],

    'hololive_dev_is': [],
    'hololive_dev_is_official': [
        'hololive DEV_IS',
    ],
    'hololive_dev_is_regloss': [
        '火威青',
        '音乃瀬奏',
        '一条莉々華',
        '儒烏風亭らでん',
        '轟はじめ',
    ],

    'holostars_jp': [],
    'holostars_jp_official': [
        'ホロスターズ',
    ],
    'holostars_jp_gen1': [
        '花咲みやび',
        '奏手イヅル',
        'アルランディス',
        '律可',
    ],
    'holostars_jp_gen2': [
        'アステル',
        '岸堂天真',
        '夕刻ロベル',
    ],
    'holostars_jp_gen3': [
        '影山シエン',
        '荒咬オウガ',
    ],
    'holostars_jp_uproar': [
        '夜十神封魔',
        '羽継烏有',
        '緋崎ガンマ',
        '水無世燐央',
    ],

    'holostars_en': [],
    'holostars_en_official': [
        'HOLOSTARS EN',
    ],
    'holostars_en_tempus': [
        'Altare',
        'Syrios',
        'Bettel',
        'Flayon',
        'Hakka',
        'Shinri',
    ],
};

(async () => {
    const filter = await chrome.runtime.sendMessage({'command': 'query_filter'});
    console.log('response', filter);

    const names = Object.keys(filter).
        filter(name => !filter[name]).
        flatMap(name => groupNames[name]);

    console.log('names', names);

    const ls = Array.from(document.querySelectorAll('#all > .container > .row > div > .row > div > .thumbnail')).filter(e => {
        const name = e.querySelector('.name').textContent.trim();
        return names.includes(name);
    });

    ls.forEach(e => { e.parentNode.style.display = 'none'; });
})();
