const groupNames = {
    'hololive_jp': [],
    'hololive_jp_official': ['ホロライブ', 'Blue Journey'],
    'hololive_jp_gen0': [],
    'hololive_jp_gen0_sora': ['ときのそら'],
    'hololive_jp_gen0_roboco': ['ロボ子さん'],
    'hololive_jp_gen0_azki': ['AZKi'],
    'hololive_jp_gen0_miko': ['さくらみこ'],
    'hololive_jp_gen0_suisei': ['星街すいせい'],
    'hololive_jp_gen1': [],
    'hololive_jp_gen1_mel': ['夜空メル'],
    'hololive_jp_gen1_akirose': ['アキロゼ'],
    'hololive_jp_gen1_haato': ['赤井はあと'],
    'hololive_jp_gen1_fubuki': ['白上フブキ'],
    'hololive_jp_gen1_matsuri': ['夏色まつり'],
    'hololive_jp_gen2': [],
    'hololive_jp_gen2_aqua': ['湊あくあ'],
    'hololive_jp_gen2_shion': ['紫咲シオン'],
    'hololive_jp_gen2_ayame': ['百鬼あやめ'],
    'hololive_jp_gen2_choco': ['癒月ちょこ'],
    'hololive_jp_gen2_subaru': ['大空スバル'],
    'hololive_jp_gamers': [],
    'hololive_jp_gamers_mio': ['大神ミオ'],
    'hololive_jp_gamers_okayu': ['猫又おかゆ', '戌神ころね'],
    'hololive_jp_gamers_korone': ['戌神ころね'],
    'hololive_jp_gen3': [],
    'hololive_jp_gen3_pekora': ['兎田ぺこら'],
    'hololive_jp_gen3_flare': ['不知火フレア'],
    'hololive_jp_gen3_noel': ['白銀ノエル'],
    'hololive_jp_gen3_marine': ['宝鐘マリン'],
    'hololive_jp_gen4': [],
    'hololive_jp_gen4_kanata': ['天音かなた'],
    'hololive_jp_gen4_watame': ['角巻わため'],
    'hololive_jp_gen4_towa': ['常闇トワ'],
    'hololive_jp_gen4_luna': ['姫森ルーナ'],
    'hololive_jp_gen5': [],
    'hololive_jp_gen5_lamy': ['雪花ラミィ'],
    'hololive_jp_gen5_nene': ['桃鈴ねね'],
    'hololive_jp_gen5_botan': ['獅白ぼたん'],
    'hololive_jp_gen5_polka': ['尾丸ポルカ'],
    'hololive_jp_gen6': [],
    'hololive_jp_gen6_laplus': ['ラプラス'],
    'hololive_jp_gen6_lui': ['鷹嶺ルイ'],
    'hololive_jp_gen6_koyori': ['博衣こより'],
    'hololive_jp_gen6_chloe': ['沙花叉クロヱ'],
    'hololive_jp_gen6_iroha': ['風真いろは'],
    'hololive_en': [],
    'hololive_en_official': ['holo EN'],
    'hololive_en_myth': [],
    'hololive_en_myth_calli': ['Calli'],
    'hololive_en_myth_kiara': ['Kiara'],
    'hololive_en_myth_ina': ['Ina'],
    'hololive_en_myth_gura': ['Gura'],
    'hololive_en_myth_amelia': ['Amelia'],
    'hololive_en_hope': [],
    'hololive_en_hope_irys': ['IRyS'],
    'hololive_en_council': [],
    'hololive_en_council_fauna': ['Fauna'],
    'hololive_en_council_kronii': ['Kronii'],
    'hololive_en_council_mumei': ['Mumei'],
    'hololive_en_council_baelz': ['Baelz'],
    'hololive_en_advent': [],
    'hololive_en_advent_shiori': ['Shiori'],
    'hololive_en_advent_bijou': ['Bijou'],
    'hololive_en_advent_nerissa': ['Nerissa'],
    'hololive_en_advent_fuwamoco': ['FUWAMOCO'],
    'hololive_id': [],
    'hololive_id_official': ['holo ID'],
    'hololive_id_gen1': [],
    'hololive_id_gen1_risu': ['Risu'],
    'hololive_id_gen1_moona': ['Moona'],
    'hololive_id_gen1_iofi': ['Iofi'],
    'hololive_id_gen2': [],
    'hololive_id_gen2_ollie': ['Ollie'],
    'hololive_id_gen2_anya': ['Anya'],
    'hololive_id_gen2_reine': ['Reine'],
    'hololive_id_gen3': ['Zeta', 'Kaela', 'Kobo'],
    'hololive_id_gen3_zeta': ['Zeta'],
    'hololive_id_gen3_kaela': ['Kaela'],
    'hololive_id_gen3_kobo': ['Kobo'],
    'hololive_dev_is': [],
    'hololive_dev_is_official': ['hololive DEV_IS'],
    'hololive_dev_is_regloss': [],
    'hololive_dev_is_regloss_ao': ['火威青'],
    'hololive_dev_is_regloss_kanade': ['音乃瀬奏'],
    'hololive_dev_is_regloss_ririka': ['一条莉々華'],
    'hololive_dev_is_regloss_raden': ['儒烏風亭らでん'],
    'hololive_dev_is_regloss_hajime': ['轟はじめ'],

    'holostars_jp': [],
    'holostars_jp_official': ['ホロスターズ'],
    'holostars_jp_gen1': [],
    'holostars_jp_gen1_miyabi': ['花咲みやび'],
    'holostars_jp_gen1_izuru': ['奏手イヅル'],
    'holostars_jp_gen1_aruran': ['アルランディス'],
    'holostars_jp_gen1_rikka': ['律可'],
    'holostars_jp_gen2': [],
    'holostars_jp_gen2_astel': ['アステル・レダ'],
    'holostars_jp_gen2_temma': ['岸堂天真'],
    'holostars_jp_gen2_roberu': ['夕刻ロベル'],
    'holostars_jp_gen3': [],
    'holostars_jp_gen3_shien': ['影山シエン'],
    'holostars_jp_gen3_oga': ['荒咬オウガ'],
    'holostars_jp_uproar': [],
    'holostars_jp_uproar_fuma': ['夜十神封魔'],
    'holostars_jp_uproar_uyu': ['羽継烏有'],
    'holostars_jp_uproar_gamma': ['緋崎ガンマ'],
    'holostars_jp_uproar_rio': ['水無世燐央'],
    'holostars_en': [],
    'holostars_en_official': ['HOLOSTARS EN'],
    'holostars_en_tempus': [],
    'holostars_en_tempus_altare': ['Altare'],
    'holostars_en_tempus_syrios': ['Syrios'],
    'holostars_en_tempus_bettel': ['Bettel'],
    'holostars_en_tempus_flayon': ['Flayon'],
    'holostars_en_tempus_hakka': ['Hakka'],
    'holostars_en_tempus_shinri': ['Shinri'],
};

function logStreamCount()
{
    const streams = Array.from(document.querySelectorAll('.row > div > .thumbnail'));
    const shownStreams = Array.from(document.querySelectorAll('.row > div > .thumbnail')).
        filter(e => e.parentNode.style.display !== 'none');

    console.debug(`logStreamCount ${shownStreams.length}/${streams.length}`);
}

async function applyFilter()
{
    let filter = {};
    try {
        filter = await chrome.runtime.sendMessage({'command': 'query_filter'});
        //console.debug('getFilter response', filter);
    } catch (e) {
        // "Extension context invalidated."エラーを無視する
        // このエラーは拡張機能の更新後、ホロジュールのタブをアクティブにした場合に発生する
        console.debug(e.message);
    }

    const unknownFilters = Object.keys(filter).filter(name => !(name in groupNames));
    if (unknownFilters.length > 0) {
        console.debug('getFilter unknownFilters', unknownFilters);
    }

    let hiddenNames = Object.keys(filter).
        filter(name => !filter[name]).
        flatMap(name => groupNames[name] ?? []);

    if (hiddenNames.length === 0) {
        hiddenNames = Object.values(groupNames).flat();
    }

    console.debug('applyFilter hiddenNames', hiddenNames);

    const streams = Array.from(document.querySelectorAll('.row > div > .thumbnail'));

    streams.forEach(e => {
        const name = e.querySelector('.name').textContent.trim();
        e.parentNode.style.display = hiddenNames.includes(name) ? 'none' : '';
    });

    logStreamCount();
}

function addFavoriteMenuItem(isFavoriteSelected)
{
    const menu = document.querySelector('.drawer-menu');
    const otherItemAnchors = Array.from(menu.querySelectorAll('.drawer-menu-item'));
    const zentaiItemAnchor = otherItemAnchors[0];

    otherItemAnchors.forEach(e => {
        e.addEventListener('click', () => {
            localStorage.setItem('is_favorite_selected', false);
        });
    });

    if (isFavoriteSelected) {
        zentaiItemAnchor.style.cssText = 'color:skyblue;';
    }

    const li = document.createElement('li');
    li.innerHTML = '<a class="drawer-menu-item" href="/lives">お気に入り</a>';

    const anchor = li.firstChild;

    if (isFavoriteSelected) {
        anchor.style.cssText = 'background-color: lightskyblue;color:#303030;text-decoration: none;';
    } else {
        anchor.style.cssText = 'color:skyblue;';
    }

    anchor.addEventListener('click', () => {
        localStorage.setItem('is_favorite_selected', true);
    });

    menu.appendChild(li);
}

function main()
{
    let isFavoriteSelected = JSON.parse(localStorage.getItem('is_favorite_selected')) ?? false;

    if (location.pathname !== '/lives') {
        isFavoriteSelected = false;
        localStorage.setItem('is_favorite_selected', false);
    }

    addFavoriteMenuItem(isFavoriteSelected);

    if (isFavoriteSelected) {
        window.addEventListener('focus', (event) => {
            applyFilter();
        });

        applyFilter();
    } else {
        logStreamCount();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main();
});
