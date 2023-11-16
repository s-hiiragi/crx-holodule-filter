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
    'hololive_jp_gamers_okayu': ['猫又おかゆ'],
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
    'hololive_id_gen3': [],
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
    'holostars_en_armis': [],
    'holostars_en_armis_jurard': ['Jurard'],
    'holostars_en_armis_goldbullet': ['Goldbullet'],
    'holostars_en_armis_octavio': ['Octavio'],
    'holostars_en_armis_crimzon': ['Crimzon'],
};

const hololiveJpFilter = {};
Object.keys(groupNames).forEach(name => {
    hololiveJpFilter[name] = name.startsWith('hololive_jp_') || name.startsWith('hololive_dev_is_');
});

const hololiveFilter = {};
Object.keys(groupNames).forEach(name => {
    hololiveFilter[name] = name.startsWith('hololive_');
});

const holostarsFilter = {};
Object.keys(groupNames).forEach(name => {
    holostarsFilter[name] = name.startsWith('holostars_');
});

const iconUrlByTalentName = {
    'ときのそら': 'https://yt3.ggpht.com/a/AGF-l79dHleIBmBtLP2TfcmFpIJjmH7fa8tfG1qTKg=s88-c-k-c0xffffffff-no-rj-mo',
    'ロボ子さん': 'https://yt3.ggpht.com/a/AGF-l79oElMmkIk3cuUa-CZY72QHuWT-P8ETYWvZLw=s88-c-k-c0xffffffff-no-rj-mo',
    'AZKi': 'https://yt3.ggpht.com/so69WMDlrSwil0013l7MLKIBLV--U_zjya2tG9_Sgij5NBm7raSvbZXUJiiAbQgrZosseqKDobM=s176-c-k-c0x00ffffff-no-rj',
    'さくらみこ': 'https://yt3.ggpht.com/ytc/AKedOLQlZnbXr-RooUQezemDKu7alJrZcEMy8_5P07ILug=s176-c-k-c0x00ffffff-no-rj',
    '星街すいせい': 'https://yt3.ggpht.com/a/AGF-l797EAYufHUsLlwTxj7Vk_WIuQ0rBjEGEtgR6w=s88-c-k-c0xffffffff-no-rj-mo',
    '夜空メル': 'https://yt3.ggpht.com/a/AGF-l788-g4hDYP2xcs7CJzeEBfsZ48EMSjcJCZjBA=s88-c-k-c0xffffffff-no-rj-mo',
    'アキロゼ': 'https://yt3.ggpht.com/a/AGF-l7-MKGs8oe830HpPIlyQ3pNAVqUgqiMdSg8TwQ=s88-c-k-c0xffffffff-no-rj-mo',
    '赤井はあと': 'https://yt3.ggpht.com/B2tq3IQAFxUe9W3MaMc0V62bmlTWCSoTuCk-Y-Ab8yXkZKdIswQhHABZhz2e4YM1-B_Kxen_7w=s176-c-k-c0x00ffffff-no-rj',
    '白上フブキ': 'https://yt3.ggpht.com/a/AGF-l7-oeSvjxgdwMoDyT1LMH8nyqkWJCZH8MAOjzg=s88-c-k-c0xffffffff-no-rj-mo',
    '夏色まつり': 'https://yt3.ggpht.com/wIqM7MWDN94PoibzPmeog7WOt8jFKTKZBOBFEbLBaiUAdKLwoqdLC_CN7B7Gby-FWH-076rN=s176-c-k-c0x00ffffff-no-rj',
    '湊あくあ': 'https://yt3.ggpht.com/a/AGF-l79lFypl4LxY5kf60UpCL6gakgSGHtN-t8hq1g=s88-c-k-c0xffffffff-no-rj-mo',
    '紫咲シオン': 'https://yt3.ggpht.com/V3GVqD-sYadScSd8QYW4x1QTRfu2RyUNyKWVRb0IJxX0gj2PV6xH32d_BJHn3l0fouPLUw6Ref0=s176-c-k-c0x00ffffff-no-rj',
    '百鬼あやめ': 'https://yt3.ggpht.com/XDGhKwPZcT16Ppg2gQmLHEIYRhw9sY4rqG0HWbeCH68LHkhlVQrrFgxd5hWUuMb2nLfDOhu6=s176-c-k-c0x00ffffff-no-rj',
    '癒月ちょこ': 'https://yt3.ggpht.com/a/AGF-l79qZWKzqRbNcbmfTY-kzLAcHtjui-IvB2ktDw=s48-c-k-c0xffffffff-no-rj-mo',
    '癒月ちょこ': 'https://yt3.ggpht.com/a/AGF-l79rj4svlTtPimVkcxdUJS8VGt01u_mqZWZIbA=s88-c-k-c0xffffffff-no-rj-mo',
    '大空スバル': 'https://yt3.ggpht.com/a/AGF-l79ydxWz0XWeOkKy59UT9X_pPEMBzIO2-W0GTg=s88-c-k-c0xffffffff-no-rj-mo',
    '大神ミオ': 'https://yt3.ggpht.com/a/AGF-l78s_0WRnL7hthbRZPmmLSKSCKsxM2DI9FXyAQ=s88-c-k-c0xffffffff-no-rj-mo',
    '猫又おかゆ': 'https://yt3.ggpht.com/a/AGF-l79MqKq01ItJYUYJ1i5lp0AL0AEnnTTNh62aug=s88-c-k-c0xffffffff-no-rj-mo',
    '戌神ころね': 'https://yt3.ggpht.com/ytc/AKedOLSegxVNNn4QGDwO-jO89ZDcYLSyPUQS3a4KU6QPCw=s176-c-k-c0x00ffffff-no-rj',
    '兎田ぺこら': 'https://yt3.ggpht.com/a/AGF-l783JgU1dmBOzvsmUfnbMLLOD1c0Gvuo7TKiVw=s88-c-k-c0xffffffff-no-rj-mo',
    '不知火フレア': 'https://yt3.ggpht.com/d9aIrGtZR0eI4k1Wnev5f_R4llIBsWnQOjkdsqkMycoAxA3g_zz-jyeBl8tEHfbm1iTg0SJj=s176-c-k-c0x00ffffff-no-rj',
    '白銀ノエル': 'https://yt3.ggpht.com/a/AGF-l7_JlV2irL6SKbyQWEuyWXU0UnMQqFP87bxzTg=s88-c-k-c0xffffffff-no-rj-mo',
    '宝鐘マリン': 'https://yt3.ggpht.com/a/AGF-l7_dX9d8sMDya_L_ApF7pxUSiwtSOId7Bufd-g=s88-c-k-c0xffffffff-no-rj-mo',
    '天音かなた': 'https://yt3.ggpht.com/TlH8nz5O9UYo5JZ_5fo4JfXdT18N0Ck27wWrulni-c1g5bwes0tVmFiSKICzI1SW7itaTkk9GA=s176-c-k-c0x00ffffff-no-rj',
    '角巻わため': 'https://yt3.ggpht.com/a/AGF-l78pYNGWXckjVjmMsSz4iPeCzmWB2DHFW3lLdQ=s88-c-k-c0xffffffff-no-rj-mo',
    '常闇トワ': 'https://yt3.ggpht.com/meRnxbRUm5yPSwq8Q5QpI5maFApm5QTGQV_LGblQFsoO0yAV4LI-nSZ70GYwMZ_tbfSa_O8MTCU=s176-c-k-c0x00ffffff-no-rj',
    '姫森ルーナ': 'https://yt3.ggpht.com/O7m_5HMY_O8yxR3Jhn9cEO1fLNL_GifMERExnAmfY7JrdTRsTjNijTcNYTPN97Llj3zGn8Susw=s176-c-k-c0x00ffffff-no-rj',
    '雪花ラミィ': 'https://yt3.ggpht.com/a/AATXAJzN5Oo_0gI5qPUclliWy8EzU9x5z4oIYliAB3bf=s100-c-k-c0xffffffff-no-rj-mo',
    '桃鈴ねね': 'https://yt3.ggpht.com/bMBMxmB1YVDVazU-8KbB6JZqUHn4YzmFiQRWwEUHCeqm5REPW7HHQChC5xE6e36aqqnXgK4a=s176-c-k-c0x00ffffff-no-rj',
    '獅白ぼたん': 'https://yt3.ggpht.com/a/AATXAJzO_bOBHuKPycvddNd88hozl2OjaNC-uR7lOAXa=s100-c-k-c0xffffffff-no-rj-mo',
    '尾丸ポルカ': 'https://yt3.ggpht.com/a/AATXAJzMPMCRzpyIsPyp8cOdA2FUwkBotqe6Dh0CmKgA=s100-c-k-c0xffffffff-no-rj-mo',
    'ラプラス': 'https://yt3.ggpht.com/roGS60A8a_lDbVakIg1JU3u3hbtjHSTilMGHMizuPKh7tuoY2nl46raxuW2f_83IKFGMjL6Z=s176-c-k-c0x00ffffff-no-rj',
    '鷹嶺ルイ': 'https://yt3.ggpht.com/R_IzGiw1xDQp0y9zVvGkF9e8Gj8wtr2_551Ez3X6gOMIj3e6jra1I1suuK_jH9FqigBj8ywg=s176-c-k-c0x00ffffff-no-rj',
    '博衣こより': 'https://yt3.ggpht.com/WO7ItKNmy6tW_NQ82g8c1y74CZSw6GsSdynsE5s2csuEok2fHRrAaGcBV3JJO-2BxEOXXA8lvw=s176-c-k-c0x00ffffff-no-rj',
    '沙花叉クロヱ': 'https://yt3.ggpht.com/_xNtPLKQcQxMTnOr4tAcGz0GEeESsi0bQX9mJEP3fx_50a8GUfUyOG1eyLIld2cCz6GvKABwpQ=s176-c-k-c0x00ffffff-no-rj',
    '風真いろは': 'https://yt3.googleusercontent.com/IzJcA0QlV4JwWH9yXi7Voa3359fHUB182xd_xxs92xd_3kuw_pa45dKeyQ9hvKl_1OhwbT6M3g=s176-c-k-c0x00ffffff-no-rj',
    '火威青': 'https://yt3.googleusercontent.com/BMxDs7A7M3V9j0AqMOo961EtEu6_ov1bBKzbE0HknzzvgwgAZYxCDVZb-rc2JzETtChifywu_g4=s176-c-k-c0x00ffffff-no-rj',
    '音乃瀬奏': 'https://yt3.googleusercontent.com/ykOXtaBh702CXcq9QRuQDto1DeUsz6BUrTsbKZiiZ8uRhEqTgIx_K2qrDFUJLO58ku-2Cu7Sjto=s176-c-k-c0x00ffffff-no-rj',
    '一条莉々華': 'https://yt3.googleusercontent.com/mhr8msX_630L_tltEgE4MlaY_CWWxNi5qdQRFg8Ts4qMVQ8F5IoES1sj9t7uL8x8qfvUY-uy=s176-c-k-c0x00ffffff-no-rj',
    '儒烏風亭らでん': 'https://yt3.googleusercontent.com/-Xzgu-tUrGEdLLNKSTU7POcZZ2kEJa-6wpqIBcuCr8933fcpPufaV3KAa42Q8iMxH5MG8Sef=s176-c-k-c0x00ffffff-no-rj',
    '轟はじめ': 'https://yt3.googleusercontent.com/9HHEOkz5Tf_JmUrjbJOEXQp-7zQOwo03x6DelKVWoz2jBDA67y41TqoYK2dXL1FNzWWG_nL0Ig=s176-c-k-c0x00ffffff-no-rj',
    'Risu': 'https://yt3.ggpht.com/a/AATXAJzvG6PrsG9XN6wssTgZuTRuPkUmVNd4eUOeHA=s288-c-k-c0xffffffff-no-rj-mo',
    'Moona': 'https://yt3.ggpht.com/n_5KNxDFB0kCwGg4irLDJCL4y9S3sTOyKcPCtH6tbromGGIZxdogYvPi3di2B7TnrsZhiny8wQ=s176-c-k-c0x00ffffff-no-rj',
    'Iofi': 'https://yt3.ggpht.com/bF91weVtAIL7Uhnr2HVwtCTLVKK5kVsn4FC_Ze3Gl8rkSsEjDwyey3AbQ1PDfJQ1Oeac5cePeg=s176-c-k-c0x00ffffff-no-rj',
    'Ollie': 'https://yt3.ggpht.com/okAbP3i7wWmBb4JaDuqjkFsGzMCg-05LOu5K0kKGoVwhGWsLUwun8pnXTzQ_uNBoimpiVoLp4D8=s176-c-k-c0x00ffffff-no-rj',
    'Anya': 'https://yt3.ggpht.com/ytc/AAUvwnjtG59rMdKU3b_wYRIX_EnfAUKVuAM5s-ePaw=s176-c-k-c0x00ffffff-no-rj',
    'Reine': 'https://yt3.ggpht.com/ytc/AAUvwngRWmguZ0ERjbs2KgMeZoj9kSWVGVXmwZb-CA=s176-c-k-c0x00ffffff-no-rj',
    'Zeta': 'https://yt3.googleusercontent.com/-IdVo-vK7pr0VRjJDdza1-t1Edjce1Rd1R1hon_3SRIzuQ-XVBTWOJj-UfwYPp8y40KM197_y4o=s176-c-k-c0x00ffffff-no-rj',
    'Kaela': 'https://yt3.googleusercontent.com/i-aqA-4BPUKlCYErdtAkp2_s2AsG_8IB1saxXSSBXevz6bA8ptaIm53-SXB1_KIODP4SI4_l=s176-c-k-c0x00ffffff-no-rj',
    'Kobo': 'https://yt3.googleusercontent.com/Zi6DMbqTrk8jpNKnJgbw_NxGnggsKX1omQnPeHxrZTmrVmon7zfmg5Q4XbqsHO9AMidW49zCPw=s176-c-k-c0x00ffffff-no-rj',
    'Calli': 'https://yt3.ggpht.com/8B_T08sx8R7XVi5Mwx_l9sjQm5FGWGspeujSvVDvd80Zyr-3VvVTRGVLOnBrqNRxZp6ZeXAV=s176-c-k-c0x00ffffff-no-rj',
    'Kiara': 'https://yt3.ggpht.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s176-c-k-c0x00ffffff-no-rj',
    'Ina': 'https://yt3.ggpht.com/a/AATXAJzxDWqRp17fR1oUJtIKD3o-hRjs0HE-4GQmtQ=s100-c-k-c0xffffffff-no-rj-mo',
    'Gura': 'https://yt3.ggpht.com/a/AATXAJzvdjbcKIP9RDDQJjcBh8t6AK-pQSV_zQqFtA=s100-c-k-c0xffffffff-no-rj-mo',
    'Amelia': 'https://yt3.ggpht.com/RZ4Fp3L6_zyq6YA7s5WnH8-22iezMLwdJhtkBgs_EAb06mvMCnF59JKMNu9YPCqb7nhaeXMdPvY=s176-c-k-c0x00ffffff-no-rj',
    'IRyS': 'https://yt3.ggpht.com/oC30wBZ04ibFN7AQVHAjdUX-3nS-h4DDjJBYVlsKt0OF6t1CZwrgzWlr3rS6Q12kXrw3-mt9gg=s176-c-k-c0x00ffffff-no-rj',
    'Fauna': 'https://yt3.ggpht.com/cBtserkb211p6If2OewgWd8oriIKRkfwTcP4_Vdq2YETG5TK9Q02v4cYmnLU03KBAJ0gcDha7oQ=s176-c-k-c0x00ffffff-no-rj',
    'Kronii': 'https://yt3.ggpht.com/flg7E5XnFWh-NhGZOydJ2QHMpFdkBGbou0OcYUiYjKVisv8UsY-FiPLrTtexXVUqPmIyDvgC=s176-c-k-c0x00ffffff-no-rj',
    'Mumei': 'https://yt3.ggpht.com/owZmjfnG_SGVmfkl3eS7Lv47pGvIr2SrS36imh6O8i0H3Wy41fYKD26U7wnyRB627fXoq0aQ0Q=s176-c-k-c0x00ffffff-no-rj',
    'Baelz': 'https://yt3.googleusercontent.com/SSZxkgjfV0O05zq1bBLOI0PszOCoxuPrANQ0Ysngsd0t81mnkwzEgIW2ypSIQJLn8swR14zLJQ=s176-c-k-c0x00ffffff-no-rj',
    'Shiori': 'https://yt3.googleusercontent.com/ZlovVsPyh8NgS37S4dfONiCBySiboGPbT9cYuirb8JM3JhSnqlpJk-8SQUEA7jPfqXpMvjaa=s176-c-k-c0x00ffffff-no-rj',
    'Bijou': 'https://yt3.googleusercontent.com/75xH5tujXTVPHlQXask8_qTbOeyq0BY4hKxNfvgTrsuqhK_oActrFV197roYikUNZhzayfiLmg=s176-c-k-c0x00ffffff-no-rj',
    'Nerissa': 'https://yt3.googleusercontent.com/JDCIBWj11TgjY2Uyba_efZ0n5hzjysMB9GxkvHGkIN_sfFQJR5mx3iVPqgJ96IPcYjZpCLsb=s176-c-k-c0x00ffffff-no-rj',
    'FUWAMOCO': 'https://yt3.googleusercontent.com/zt63obGOD6fnCX0elnzt8xkylqOTnAENmSCKmwg_PSiC857DDgB28kEjQ-FJlWGtNYZ9lqzEag=s176-c-k-c0x00ffffff-no-rj',
    '花咲みやび': 'https://yt3.ggpht.com/O6KhIGX91d99vduasQsqIQNvt1tC9DjDlTlLQr_k0aq0EtvgF4hM1YNAOmEOz9Vtqs1yyAkfkw=s176-c-k-c0x00ffffff-no-rj',
    '奏手イヅル': 'https://yt3.ggpht.com/dlq5H2SBaaAq9ilOfgGm0QvcVGEieSICsdk0Hv6oADZFn5Q0ctV1nxNAiQAJiS8u_svx5YlasQE=s176-c-k-c0x00ffffff-no-rj',
    'アルランディス': 'https://yt3.ggpht.com/Pr1gcKc8eVnFs4vsRdb_-6tDIGQbtjrckIsHRT5dF3MB44Zu5_yskKVIUlKC455WdeoO3HjZ4cY=s176-c-k-c0x00ffffff-no-rj',
    '律可': 'https://yt3.ggpht.com/0MLL-S2KKu4PlhedunMhvg4VPJGm6Fpx2C4QV2PWJvkcG1eA6XqUYULUZGqBF2M4iNY7FxBt=s176-c-k-c0x00ffffff-no-rj',
    'アステル・レダ': 'https://yt3.ggpht.com/sr2RTZaWAFF20tSTiXUXp-BYRqWz4dZhFKbCzFS2dneTN5uSE53sSDjePN5dIM_sEz2U9-2qtRs=s176-c-k-c0x00ffffff-no-rj',
    '岸堂天真': 'https://yt3.ggpht.com/a/AGF-l78r-BLKS2x8csXx1EjyYIKVNB1XinLx-ngefQ=s88-c-k-c0xffffffff-no-rj-mo',
    '夕刻ロベル': 'https://yt3.ggpht.com/yVTO0I6VAXBjBLBPvgLGlBlp1hganldhl6AY3PW_ZWOJ0sYwfLo1yc2Sqr5SMjXQf7Dm4U-2=s176-c-k-c0x00ffffff-no-rj',
    '影山シエン': 'https://yt3.ggpht.com/N20GfJbuG8BBl9CexUek023y2DXQAYqgYoRRqsVGAYoS-gZsGuH7W1Il0y-8TnIul19rBPG78Jo=s176-c-k-c0x00ffffff-no-rj',
    '荒咬オウガ': 'https://yt3.ggpht.com/a/AATXAJw1uO0nfGubUVQ_ubZbdwO4ELqkyAJde43HfA=s100-c-k-c0xffffffff-no-rj-mo',
    '夜十神封魔': 'https://yt3.googleusercontent.com/V_j0IIwkYF4rglwASfZ9-4-Vn6q6raVF7RNQCB3lr3YNL4YVZq-RbFl0FnoNnnps3-sO-NuBcVs=s176-c-k-c0x00ffffff-no-rj',
    '羽継烏有': 'https://yt3.googleusercontent.com/IU7hPSrqpET8vB5HWKnueKfXnjLFG8OvUn3U_bnJn2l2OrIQy6JZPz5hTEqCInQZ-xZJXUwS=s176-c-k-c0x00ffffff-no-rj',
    '緋崎ガンマ': 'https://yt3.googleusercontent.com/OppGI1TC0fD59_jquw30zSbyCErgKPdoxcnoxQBACyfsbUM9POxWzNC3Bg3fwZyuSYJXh4DQNw=s176-c-k-c0x00ffffff-no-rj',
    '水無世燐央': 'https://yt3.googleusercontent.com/R0Hi-1llrejl1xy--CrjpK1dfd3ZK_21VIwABJmL9FQ7_JAA4hMC1pYOHzFWHtU2oZTFLn991FQ=s176-c-k-c0x00ffffff-no-rj',
    'Altare': 'https://yt3.googleusercontent.com/ugF0dbsvgd4jnOy7FXw6lDr2r12Lo2tsEv56ZI5hcm5-MfZhPaxWTPBSGtJ51m2ZoyMg-jbn=s176-c-k-c0x00ffffff-no-rj',
    'Syrios': 'https://yt3.googleusercontent.com/R4NxwlGVKoR9spXGLAqVInfP-MML5mxdt1-kTOMlIrDWcq1gv2cOuxjoPYmf5RNd8Xqbz17r=s176-c-k-c0x00ffffff-no-rj',
    'Bettel': 'https://yt3.googleusercontent.com/KCOi00Trc1KOPpHdwlkQiktd4ejGi7meB7A5kaoTjitcTDo1A10b3c-68L0VfnIvKoEMj6yY=s176-c-k-c0x00ffffff-no-rj',
    'Flayon': 'https://yt3.googleusercontent.com/4_CFVqKaaM7_qrWwzIvVAhevS1i4fP4GfjPULgZXzFCIh9ga6jYeUq6ySqsBCh7u3q5tNj1Tcw=s176-c-k-c0x00ffffff-no-rj',
    'Hakka': 'https://yt3.googleusercontent.com/cgq7GevjPwVIuZcjDBvSF5JlnJJLo2RRpVHTWNF0lxLSGAsaScy1k931WGhJSg74lsCs7UbNlA=s176-c-k-c0x00ffffff-no-rj',
    'Shinri': 'https://yt3.googleusercontent.com/dfezjBBjUFLzo8J7IF0zJ3cYQ3c9JdaJMHdD_2h62qzQXve602lyv5LjkRv2QaCTB2Ibg6NA5w=s176-c-k-c0x00ffffff-no-rj',
    'Jurard': 'https://yt3.googleusercontent.com/H7Ri-u8tdYxh9xCoy5V2_xPhnQRSNenvH6hjS3isY1EAxMl7PLYnjVxdQPt4jNCe69OWkN34dQ=s176-c-k-c0x00ffffff-no-rj',
    'Goldbullet': 'https://yt3.googleusercontent.com/mz1KpEtCbqLQKNfT69z5dVNaSu8xMeKzlblJg69aV1B3c1KNLgEE2vv6KJFXkozEEz4AV56g=s176-c-k-c0x00ffffff-no-rj',
    'Octavio': 'https://yt3.googleusercontent.com/ppHxUJr0Hztrj25HH0HztRnVnwF5vNzsTqjEgozYRtfrTrVE6msqDYWBFhFQZpG3ItU0mBMEXQ=s176-c-k-c0x00ffffff-no-rj',
    'Crimzon': 'https://yt3.googleusercontent.com/XpIerF9VXISYsTtYMMwxZyHYjZVUpEXCzsJgs2dWYpx9k3N9dnb6N4A5rruU3_SsQd-q-W2m=s176-c-k-c0x00ffffff-no-rj',
};

const talentNameByIconUrl = new Map(Object.entries(iconUrlByTalentName).map(([k, v]) => [v, k]));

function logStreamCount()
{
    const streams = Array.from(document.querySelectorAll('.row > div > .thumbnail'));
    const shownStreams = Array.from(document.querySelectorAll('.row > div > .thumbnail')).
        filter(e => e.parentNode.style.display !== 'none');

    console.debug(`logStreamCount ${shownStreams.length}/${streams.length}`);
}

async function getSetting()
{
    let setting = {};
    try {
        setting = await chrome.runtime.sendMessage({'command': 'query_setting'});
        //console.debug('getSetting response', setting);
    } catch (e) {
        // "Extension context invalidated."エラーを無視する
        // このエラーは拡張機能の更新後、ホロジュールのタブをアクティブにした場合に発生する
        console.debug(e.message);
    }

    return setting;
}

async function getFilter()
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

    return filter;
}

function applyFilter(filter, setting)
{
    //console.debug('applyFilter', filter, setting);

    let hiddenNames = Object.keys(filter).
        filter(name => !filter[name]).
        flatMap(name => groupNames[name] ?? []);

    //console.debug('applyFilter hiddenNames', hiddenNames);

    if (hiddenNames.length === 0) {
        return;
    }

    const streams = Array.from(document.querySelectorAll('.row > div > .thumbnail'));

    streams.forEach(e => {
        const owner = e.querySelector('.name').textContent.trim();
        const talents = [owner];

        if (setting.including_collab) {
            const iconUrls = Array.from(e.querySelectorAll('.row > div:nth-of-type(3) img')).map(e => e.src);

            // アイコンの各URLからコラボタレント名を取得
            const collabTalents = iconUrls.
                map(url => talentNameByIconUrl.get(url) ?? '').
                filter(n => n != '');

            talents.push(...collabTalents);
        }

        e.parentNode.style.display = talents.every(name => hiddenNames.includes(name)) ? 'none' : '';
    });

    logStreamCount();
}

function modifyPresetMenuItems()
{
    const menuItemAnchors = Array.from(document.querySelectorAll('.drawer-menu-item'));

    menuItemAnchors.forEach(e => {
        e.addEventListener('click', () => {
            localStorage.setItem('selected_menu_item', '');
        });
    });
}

function selectMenuItem(selectName)
{
    const menuItemAnchors = Array.from(document.querySelectorAll('.drawer-menu-item'));

    menuItemAnchors.forEach(e => {
        const name = e.textContent.trim();
        if (name === selectName) {
            e.style.cssText = 'background-color: lightskyblue;color:#303030;text-decoration: none;';
        } else {
            e.style.cssText = 'color:skyblue;';
        }
    });
}

function addMenuItem(options)
{
    const li = document.createElement('li');
    li.innerHTML = `<a class="drawer-menu-item" href="/lives">${options.name}</a>`;

    const anchor = li.firstChild;
    anchor.style.cssText = 'color:skyblue;';
    anchor.addEventListener('click', () => {
        localStorage.setItem('selected_menu_item', options.name);
    });

    const menu = document.querySelector('.drawer-menu');
    menu.appendChild(li);
}

async function main()
{
    let selectedMenuItem = localStorage.getItem('selected_menu_item') ?? '';

    if (location.pathname !== '/lives') {
        selectedMenuItem = '';
    }

    modifyPresetMenuItems();
    addMenuItem({name: 'ホロライブ+DEV_IS'});
    addMenuItem({name: 'ホロライブ全体'});
    addMenuItem({name: 'ホロスターズ全体'});
    addMenuItem({name: 'お気に入り'});

    if (selectedMenuItem !== '') {
        selectMenuItem(selectedMenuItem);

        switch (selectedMenuItem)
        {
        case 'ホロライブ+DEV_IS':
            applyFilter(hololiveJpFilter);
            break;
        case 'ホロライブ全体':
            applyFilter(hololiveFilter);
            break;
        case 'ホロスターズ全体':
            applyFilter(holostarsFilter);
            break;
        case 'お気に入り':
            window.addEventListener('focus', async (event) => {
                applyFilter(await getFilter(), await getSetting());
            });

            applyFilter(await getFilter(), await getSetting());
            break;
        }
    }
    else {
        logStreamCount();
    }
}

document.addEventListener('DOMContentLoaded', () => { main(); });
