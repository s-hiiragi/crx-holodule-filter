// 注：各key同士でvalueが重複しないこと (いずれかのkeyの設定がfalseのときにタレントが非表示となってしまうため)
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
    'hololive_en_justice': [],
    'hololive_en_justice_elizabeth': ['Elizabeth'],
    'hololive_en_justice_gigi': ['Gigi'],
    'hololive_en_justice_cecilia': ['Cecilia'],
    'hololive_en_justice_raora': ['Raora'],

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
    'hololive_dev_is_official': ['ReGLOSS', 'FLOW GLOW'],
    'hololive_dev_is_regloss': [],
    'hololive_dev_is_regloss_ao': ['火威青'],
    'hololive_dev_is_regloss_kanade': ['音乃瀬奏'],
    'hololive_dev_is_regloss_ririka': ['一条莉々華'],
    'hololive_dev_is_regloss_raden': ['儒烏風亭らでん'],
    'hololive_dev_is_regloss_hajime': ['轟はじめ'],
    'hololive_dev_is_flowglow': [],
    'hololive_dev_is_flowglow_riona': ['響咲リオナ'],
    'hololive_dev_is_flowglow_niko': ['虎金妃笑虎'],
    'hololive_dev_is_flowglow_su': ['水宮枢'],
    'hololive_dev_is_flowglow_chihaya': ['輪堂千速'],
    'hololive_dev_is_flowglow_vivi': ['綺々羅々ヴィヴィ'],

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
    'ときのそら': 'https://yt3.ggpht.com/ytc/AIdro_kT9PiLS8BWANuBdGG_-GHsNZxFqmF0YjMnzK55jISdca4=s88-c-k-c0x00ffffff-no-rj',
    'ロボ子さん': 'https://yt3.ggpht.com/GF0wbwZvZAGzYg8s8d6Yh1BDcWAE9UmLAh2uf3IMJ5l_ESi3sWeRqk2XfhW3IgzMeliHpt4cAw=s88-c-k-c0x00ffffff-no-rj',
    'AZKi': 'https://yt3.ggpht.com/so69WMDlrSwil0013l7MLKIBLV--U_zjya2tG9_Sgij5NBm7raSvbZXUJiiAbQgrZosseqKDobM=s88-c-k-c0x00ffffff-no-rj',
    'さくらみこ': 'https://yt3.ggpht.com/gxXHmXJq_kkZ0bvTmz7R1deyOAV44zZr2keaF0ojSq7MeiOGLSzFTCoYgYR4PGDWTCoLR7eK=s88-c-k-c0x00ffffff-no-rj',
    '星街すいせい': 'https://yt3.ggpht.com/ytc/AIdro_keEYAZh5Igxb3IkbLpj976AcmGVidfxLo3z5PalwnBYYg=s88-c-k-c0x00ffffff-no-rj',
    '夜空メル': 'https://yt3.ggpht.com/a/AGF-l788-g4hDYP2xcs7CJzeEBfsZ48EMSjcJCZjBA=s88-c-k-c0xffffffff-no-rj-mo',
    'アキロゼ': 'https://yt3.ggpht.com/Mb9fXGVoUZWSKCLz-W0NE_gMihhpESzfEFQ-1C9xZ3FjW6Az3979WPlZ9ga4l8cDPak6fpUQ=s88-c-k-c0x00ffffff-no-rj',
    '赤井はあと': 'https://yt3.ggpht.com/oVFvytNzD2n5Uks2Pu4yKFWkWRQivEQ8n9kk3BxZxECWamkG6Eqv_M0HmQDtQctHj_K-NOHNpA=s88-c-k-c0x00ffffff-no-rj',
    '白上フブキ': 'https://yt3.ggpht.com/ytc/AIdro_mGXEeXXCCPh-sl2jKYbYpLBuCsjEGDgJaL5RQziYhyugQ=s88-c-k-c0x00ffffff-no-rj',
    '夏色まつり': 'https://yt3.ggpht.com/wIqM7MWDN94PoibzPmeog7WOt8jFKTKZBOBFEbLBaiUAdKLwoqdLC_CN7B7Gby-FWH-076rN=s88-c-k-c0x00ffffff-no-rj',
    '湊あくあ': 'https://yt3.ggpht.com/ytc/AIdro_kaZLtKaya9TSJr3M4lpzV95R2rWdQtGk67fwedroUfSnE=s88-c-k-c0x00ffffff-no-rj',
    '紫咲シオン': 'https://yt3.ggpht.com/V3GVqD-sYadScSd8QYW4x1QTRfu2RyUNyKWVRb0IJxX0gj2PV6xH32d_BJHn3l0fouPLUw6Ref0=s88-c-k-c0x00ffffff-no-rj',
    '百鬼あやめ': 'https://yt3.ggpht.com/XDGhKwPZcT16Ppg2gQmLHEIYRhw9sY4rqG0HWbeCH68LHkhlVQrrFgxd5hWUuMb2nLfDOhu6=s88-c-k-c0x00ffffff-no-rj',
    '癒月ちょこ': 'https://yt3.ggpht.com/eB_qZXKL-jDhGyEstj9BvLL0qO_tHEMaIpkfp8M-qXYweZOpDm7uZgBwbWfxwAT7uKh_5tEj=s88-c-k-c0x00ffffff-no-rj',
    '大空スバル': 'https://yt3.ggpht.com/ytc/AIdro_k5mjdt1wcbaYCXKwmDpVXmSGtOc-LH3WjIyUHVC4soP28=s88-c-k-c0x00ffffff-no-rj',
    '大神ミオ': 'https://yt3.ggpht.com/Z78RNXxUqpOGYKFt-VrJV7nlehOHzl7Ta-l1cgPx5Ewucmr5kY64iGxmPSe7QqIdM1ZhvPlEOg=s88-c-k-c0x00ffffff-no-rj',
    '猫又おかゆ': 'https://yt3.ggpht.com/G92yBEhkf9R2mEpayuPvhwlA42tYAPOcNi2r77JeL7ic0ETS_FvTkwkBHjvR6iCqUk7TOlpROQ=s88-c-k-c0x00ffffff-no-rj',
    '戌神ころね': 'https://yt3.ggpht.com/ytc/AIdro_nrS6tFctvjyWv1mKzKBIetHJBfpqwHOpvRFc3KU2P_5yc=s88-c-k-c0x00ffffff-no-rj',
    '兎田ぺこら': 'https://yt3.ggpht.com/ytc/AIdro_n1iH9fDDGm8RHUzoB-XDfnTEwhlgBcP3OLjapDqHYoYVw=s88-c-k-c0x00ffffff-no-rj',
    '不知火フレア': 'https://yt3.ggpht.com/d9aIrGtZR0eI4k1Wnev5f_R4llIBsWnQOjkdsqkMycoAxA3g_zz-jyeBl8tEHfbm1iTg0SJj=s88-c-k-c0x00ffffff-no-rj',
    '白銀ノエル': 'https://yt3.ggpht.com/ytc/AIdro_kIKJPVEqJLs9FNMgdti5WWHtc1t0MwihOlW-ZK90nGUdk=s88-c-k-c0x00ffffff-no-rj',
    '宝鐘マリン': 'https://yt3.ggpht.com/Z2QpYUZ4-jKoFR7Ms330gRQzjI2gZ4CB_uVP6f39YysxUe1u8icrtE07ffpRxCtpu9U65MWNDA=s88-c-k-c0x00ffffff-no-rj',
    '天音かなた': 'https://yt3.ggpht.com/e5wX9w1xSFUjaUdyhFugYZKzDZ_KLTLWBgdtRohHQDu0pshH867pyOv6gLGuqkqy5Ik8bJ9MSZU=s88-c-k-c0x00ffffff-no-rj',
    '角巻わため': 'https://yt3.ggpht.com/4wLMmSJkzy4vmWfWYkmzn6YO9T__jp1cORNuFXN7YyihwvhGkqXCxNBaklKoXlgdik-Fp0Zu=s88-c-k-c0x00ffffff-no-rj',
    '常闇トワ': 'https://yt3.ggpht.com/meRnxbRUm5yPSwq8Q5QpI5maFApm5QTGQV_LGblQFsoO0yAV4LI-nSZ70GYwMZ_tbfSa_O8MTCU=s88-c-k-c0x00ffffff-no-rj',
    '姫森ルーナ': 'https://yt3.ggpht.com/CTvZ3dUO8LocQMKbGkjUPysC524gC4asm5roilZmzhpBpWAWpLrhpRv0SpEaJeWm1oVP5v0g=s88-c-k-c0x00ffffff-no-rj',
    '雪花ラミィ': 'https://yt3.ggpht.com/ytc/AIdro_nHPsjV8KMncrIzZh7NPGaG8xzAgzN8Vf9YAj12dRN7sCc=s88-c-k-c0x00ffffff-no-rj',
    '桃鈴ねね': 'https://yt3.ggpht.com/bMBMxmB1YVDVazU-8KbB6JZqUHn4YzmFiQRWwEUHCeqm5REPW7HHQChC5xE6e36aqqnXgK4a=s88-c-k-c0x00ffffff-no-rj',
    '獅白ぼたん': 'https://yt3.ggpht.com/CoKMtt9uQNGPOQP_t0LaCL4N21m0TUNCxzLtKRRTBmpH0xPc0s2cZQ-uUuQkxqerbGkxJkGU=s88-c-k-c0x00ffffff-no-rj',
    '尾丸ポルカ': 'https://yt3.ggpht.com/KE2NpU0fd43SXO-G46SSyPOEgyjHW7FnU_SAly2t5URFS4X-I85ILTAOzhrSZ6_3_jU4d6IjRvY=s88-c-k-c0x00ffffff-no-rj',
    'ラプラス': 'https://yt3.ggpht.com/roGS60A8a_lDbVakIg1JU3u3hbtjHSTilMGHMizuPKh7tuoY2nl46raxuW2f_83IKFGMjL6Z=s88-c-k-c0x00ffffff-no-rj',
    '鷹嶺ルイ': 'https://yt3.ggpht.com/gHSAYjapvrPWUKNofcX6zP8izFYK-CbsiZEpkuNgGpPluu7zyC_3yPu0IbpL2Rh_QjBxPKOjLA=s88-c-k-c0x00ffffff-no-rj',
    '博衣こより': 'https://yt3.ggpht.com/WO7ItKNmy6tW_NQ82g8c1y74CZSw6GsSdynsE5s2csuEok2fHRrAaGcBV3JJO-2BxEOXXA8lvw=s88-c-k-c0x00ffffff-no-rj',
    '沙花叉クロヱ': 'https://yt3.ggpht.com/_xNtPLKQcQxMTnOr4tAcGz0GEeESsi0bQX9mJEP3fx_50a8GUfUyOG1eyLIld2cCz6GvKABwpQ=s88-c-k-c0x00ffffff-no-rj',
    '風真いろは': 'https://yt3.ggpht.com/IzJcA0QlV4JwWH9yXi7Voa3359fHUB182xd_xxs92xd_3kuw_pa45dKeyQ9hvKl_1OhwbT6M3g=s88-c-k-c0x00ffffff-no-rj',
    '火威青': 'https://yt3.ggpht.com/-D2Cf4dIQGO_CcY_1F9i63TcHyY0EuPV1pYskJQmQHIClJGOt34BoI84zlgje_THCw8AprB6=s88-c-k-c0x00ffffff-no-rj',
    '音乃瀬奏': 'https://yt3.ggpht.com/o03i3rWw98BSquRZFhyiDQuunr1cr_9xEBVNNx3Cq8vqlJZVKXMgKsVLGW2AlbsFTvphGiHRCg0=s88-c-k-c0x00ffffff-no-rj',
    '一条莉々華': 'https://yt3.ggpht.com/TQwdYxMCQYmBQskSxmdAbfAqRR__ROlB-mFGlCFqLF4C-6vHpjYkWj9GbnlKOoOTaOMssRGw=s88-c-k-c0x00ffffff-no-rj',
    '儒烏風亭らでん': 'https://yt3.ggpht.com/45G_tYF-zPHIIC9q8ZCeXSabbQCOtGgNDuX6mJbf7wyeor94YTeqOmDC3OZ3Wl89I4xq8Fn3nQ=s88-c-k-c0x00ffffff-no-rj',
    '轟はじめ': 'https://yt3.ggpht.com/YlQvZ9qXXOriEXQzBl6pkIWpSNwa0P9RrMGm7ezpliTF-7OzxcE0_828GSX-0f2ak-HmshPb5mM=s88-c-k-c0x00ffffff-no-rj',
    '響咲リオナ': 'https://yt3.ggpht.com/qufYdKqJ9VaUNhkP3_Wv0RranzAiwtvtOoxI_NRNMP6pCFa3lMnUKXRPd7EL4x-5OlDFp1BSpFE=s88-c-k-c0x00ffffff-no-rj',
    '虎金妃笑虎': 'https://yt3.ggpht.com/CCOEFxhq858A_1QNu0VF9Y5vvXm9V4l7klSdL4FfMsOAAnVxoiAcxAlQO9RV0lCib6Fi_EkVrA=s88-c-k-c0x00ffffff-no-rj',
    '水宮枢': 'https://yt3.ggpht.com/N30qJOGhVGBgUiGF9R63P-TGeMXUwhVwx8FZ-4cmilivjqM1qTyqyrTZS0LznCWIahSJT_ZeXw=s88-c-k-c0x00ffffff-no-rj',
    '輪堂千速': 'https://yt3.ggpht.com/r_CG1_hNQIcnrbXOzIKbdq23Dt7lo_QGvdkVT_q1fzSOWPZxFyvlei5N4bJSeTUhwcn3JVmsh_I=s88-c-k-c0x00ffffff-no-rj',
    '綺々羅々ヴィヴィ': 'https://yt3.ggpht.com/0NYd0NnC9mCjdu6t_i-JylPkwpz-o3IZ1eLqgG4MdXS-KUPrP36e71UysuoV9eZA1-TRG3gZ=s88-c-k-c0x00ffffff-no-rj',
    'Risu': 'https://yt3.ggpht.com/ytc/AIdro_lfOOnprUv5xcScxIgQBTa2ZGUfS3TdfMEerPzr6BXED94=s88-c-k-c0x00ffffff-no-rj',
    'Moona': 'https://yt3.ggpht.com/w8ilN5YMfG3H6SX162Fkg71BaJdYUUoHOc91cryyfdvto94IpypSjvsLaMA1MyODr2V-w-ox-h8=s88-c-k-c0x00ffffff-no-rj',
    'Iofi': 'https://yt3.ggpht.com/bF91weVtAIL7Uhnr2HVwtCTLVKK5kVsn4FC_Ze3Gl8rkSsEjDwyey3AbQ1PDfJQ1Oeac5cePeg=s88-c-k-c0x00ffffff-no-rj',
    'Ollie': 'https://yt3.ggpht.com/Df9IibspJL2Dur37_ebWD6n6F0U8Fvp_1QOu5m-d7qqEAn1fRwsMiar4CvSpHrI3wA6uPw2h=s88-c-k-c0x00ffffff-no-rj',
    'Anya': 'https://yt3.ggpht.com/58uF1apTqtovpieDrBCSF5pUeNU2MA6n34bdj2EBEVnySKm-VvEznGNt2puk4v4tAnA3AYh5JA=s88-c-k-c0x00ffffff-no-rj',
    'Reine': 'https://yt3.ggpht.com/3Wp-qrvmEyR4I4CcqrzbERgqjZkKWpptZTV9veusoh9ZeIdBTx7WfUB3uT8bnMp5ApebFERHZ9I=s88-c-k-c0x00ffffff-no-rj',
    'Zeta': 'https://yt3.ggpht.com/-IdVo-vK7pr0VRjJDdza1-t1Edjce1Rd1R1hon_3SRIzuQ-XVBTWOJj-UfwYPp8y40KM197_y4o=s88-c-k-c0x00ffffff-no-rj',
    'Kaela': 'https://yt3.ggpht.com/i-aqA-4BPUKlCYErdtAkp2_s2AsG_8IB1saxXSSBXevz6bA8ptaIm53-SXB1_KIODP4SI4_l=s88-c-k-c0x00ffffff-no-rj',
    'Kobo': 'https://yt3.ggpht.com/Zi6DMbqTrk8jpNKnJgbw_NxGnggsKX1omQnPeHxrZTmrVmon7zfmg5Q4XbqsHO9AMidW49zCPw=s88-c-k-c0x00ffffff-no-rj',
    'Calli': 'https://yt3.ggpht.com/8B_T08sx8R7XVi5Mwx_l9sjQm5FGWGspeujSvVDvd80Zyr-3VvVTRGVLOnBrqNRxZp6ZeXAV=s88-c-k-c0x00ffffff-no-rj',
    'Kiara': 'https://yt3.ggpht.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s88-c-k-c0x00ffffff-no-rj',
    'Ina': 'https://yt3.ggpht.com/f4uYWHJxiGwyXm8NUlm818N1MRnywtgL6wM8JdWqWsKBzI7v1eg8dxDWG7igkWuukUSiufydqPg=s88-c-k-c0x00ffffff-no-rj',
    'Gura': 'https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s88-c-k-c0x00ffffff-no-rj',
    'Amelia': 'https://yt3.ggpht.com/RZ4Fp3L6_zyq6YA7s5WnH8-22iezMLwdJhtkBgs_EAb06mvMCnF59JKMNu9YPCqb7nhaeXMdPvY=s88-c-k-c0x00ffffff-no-rj',
    'IRyS': 'https://yt3.ggpht.com/cDSMiVy3Xa49Ci_YyouVNzfCwVXKRYmOeywWQ_UFKzvAp6tvyeMtXMyzWzQ2u8ft4EENsJKt7A=s88-c-k-c0x00ffffff-no-rj',
    'Fauna': 'https://yt3.ggpht.com/cBtserkb211p6If2OewgWd8oriIKRkfwTcP4_Vdq2YETG5TK9Q02v4cYmnLU03KBAJ0gcDha7oQ=s88-c-k-c0x00ffffff-no-rj',
    'Kronii': 'https://yt3.ggpht.com/flg7E5XnFWh-NhGZOydJ2QHMpFdkBGbou0OcYUiYjKVisv8UsY-FiPLrTtexXVUqPmIyDvgC=s88-c-k-c0x00ffffff-no-rj',
    'Mumei': 'https://yt3.ggpht.com/owZmjfnG_SGVmfkl3eS7Lv47pGvIr2SrS36imh6O8i0H3Wy41fYKD26U7wnyRB627fXoq0aQ0Q=s88-c-k-c0x00ffffff-no-rj',
    'Baelz': 'https://yt3.ggpht.com/9FFCT3cu9FxyLJUUFovpPI7WRj0I7_KuApwkEaLsD0NHVVL2OPTtGn8Qga5YFbeC_47-MoEXrA=s88-c-k-c0x00ffffff-no-rj',
    'Shiori': 'https://yt3.ggpht.com/ZlovVsPyh8NgS37S4dfONiCBySiboGPbT9cYuirb8JM3JhSnqlpJk-8SQUEA7jPfqXpMvjaa=s88-c-k-c0x00ffffff-no-rj',
    'Bijou': 'https://yt3.ggpht.com/75xH5tujXTVPHlQXask8_qTbOeyq0BY4hKxNfvgTrsuqhK_oActrFV197roYikUNZhzayfiLmg=s88-c-k-c0x00ffffff-no-rj',
    'Nerissa': 'https://yt3.ggpht.com/JDCIBWj11TgjY2Uyba_efZ0n5hzjysMB9GxkvHGkIN_sfFQJR5mx3iVPqgJ96IPcYjZpCLsb=s88-c-k-c0x00ffffff-no-rj',
    'FUWAMOCO': 'https://yt3.ggpht.com/zt63obGOD6fnCX0elnzt8xkylqOTnAENmSCKmwg_PSiC857DDgB28kEjQ-FJlWGtNYZ9lqzEag=s88-c-k-c0x00ffffff-no-rj',
    'Elizabeth': 'https://yt3.ggpht.com/FqoNiBb3ZY9FehjIWlzqQlUtmbaAXRak49X3WWZHEFlzuVCy0CVsaqtYxddltdmwCnJYN3xm=s88-c-k-c0x00ffffff-no-rj',
    'Gigi': 'https://yt3.ggpht.com/AD2BC7S_QlNSZEHrM-pyRR0C9DOPnfK2OnuFjTK8F842WydS1HDMe6TvhESY9Er96Kt3yu0-fQ=s88-c-k-c0x00ffffff-no-rj',
    'Cecilia': 'https://yt3.ggpht.com/LnJxTvrkHQFdFlyMY2HPtXVEwA7KHlUp8rNzBepF1GQfPQjUN9yKGIqSYOD31F22Ow9vSTn9=s88-c-k-c0x00ffffff-no-rj',
    'Raora': 'https://yt3.ggpht.com/8XQlrbkx1vBSpFZQ_GwV6hxep9EX0xHBH-CmWknoHusxXOKGnfVytVRzpt-36PxJOfumNjiBkAI=s88-c-k-c0x00ffffff-no-rj',
    '花咲みやび': 'https://yt3.ggpht.com/O6KhIGX91d99vduasQsqIQNvt1tC9DjDlTlLQr_k0aq0EtvgF4hM1YNAOmEOz9Vtqs1yyAkfkw=s88-c-k-c0x00ffffff-no-rj',
    '奏手イヅル': 'https://yt3.ggpht.com/dlq5H2SBaaAq9ilOfgGm0QvcVGEieSICsdk0Hv6oADZFn5Q0ctV1nxNAiQAJiS8u_svx5YlasQE=s88-c-k-c0x00ffffff-no-rj',
    'アルランディス': 'https://yt3.ggpht.com/Pr1gcKc8eVnFs4vsRdb_-6tDIGQbtjrckIsHRT5dF3MB44Zu5_yskKVIUlKC455WdeoO3HjZ4cY=s88-c-k-c0x00ffffff-no-rj',
    '律可': 'https://yt3.ggpht.com/tN30xU8lzi3a_lQM1ayELwyfQVZm3ojNLPnikkzdv0W3q0jDyoeEMVipbSn4F6wUG-PkeW72=s88-c-k-c0x00ffffff-no-rj',
    'アステル・レダ': 'https://yt3.ggpht.com/sr2RTZaWAFF20tSTiXUXp-BYRqWz4dZhFKbCzFS2dneTN5uSE53sSDjePN5dIM_sEz2U9-2qtRs=s88-c-k-c0x00ffffff-no-rj',
    '岸堂天真': 'https://yt3.ggpht.com/ytc/AIdro_nwurwFIJZ5Ekdq5WHp21uytJEo5ZmdXy-q4b8odSSThQ=s88-c-k-c0x00ffffff-no-rj',
    '夕刻ロベル': 'https://yt3.ggpht.com/yVTO0I6VAXBjBLBPvgLGlBlp1hganldhl6AY3PW_ZWOJ0sYwfLo1yc2Sqr5SMjXQf7Dm4U-2=s88-c-k-c0x00ffffff-no-rj',
    '影山シエン': 'https://yt3.ggpht.com/N20GfJbuG8BBl9CexUek023y2DXQAYqgYoRRqsVGAYoS-gZsGuH7W1Il0y-8TnIul19rBPG78Jo=s88-c-k-c0x00ffffff-no-rj',
    '荒咬オウガ': 'https://yt3.ggpht.com/ytc/AIdro_no8uiFd1WlhKoZYuEgmQqu4HfEdgKbvh5NF21Tw24b4A=s88-c-k-c0x00ffffff-no-rj',
    '夜十神封魔': 'https://yt3.ggpht.com/V_j0IIwkYF4rglwASfZ9-4-Vn6q6raVF7RNQCB3lr3YNL4YVZq-RbFl0FnoNnnps3-sO-NuBcVs=s88-c-k-c0x00ffffff-no-rj',
    '羽継烏有': 'https://yt3.ggpht.com/IU7hPSrqpET8vB5HWKnueKfXnjLFG8OvUn3U_bnJn2l2OrIQy6JZPz5hTEqCInQZ-xZJXUwS=s88-c-k-c0x00ffffff-no-rj',
    '緋崎ガンマ': 'https://yt3.ggpht.com/OppGI1TC0fD59_jquw30zSbyCErgKPdoxcnoxQBACyfsbUM9POxWzNC3Bg3fwZyuSYJXh4DQNw=s88-c-k-c0x00ffffff-no-rj',
    '水無世燐央': 'https://yt3.ggpht.com/ua_KNR81Fh4GOKyrintIr2Y8Zd0rjLqvJuylbRkjbfeM9ZEy3zl1axytKjKxdu5kWnKsYE-POQ=s88-c-k-c0x00ffffff-no-rj',
    'Altare': 'https://yt3.ggpht.com/sG4A7jG-abLoeeoxsttRgg-ZpI3XrB--rQRty8G6pcqnFT894SEjE-fMjFN2829CjTFwHcTtCw=s88-c-k-c0x00ffffff-no-rj',
    'Syrios': 'https://yt3.ggpht.com/R4NxwlGVKoR9spXGLAqVInfP-MML5mxdt1-kTOMlIrDWcq1gv2cOuxjoPYmf5RNd8Xqbz17r=s88-c-k-c0x00ffffff-no-rj',
    'Bettel': 'https://yt3.ggpht.com/UTMYJz0KkrjT7zdaUq_ofe2su2jFNxuGkDngCSdHH9OwPaYjWG6_7cuIpmrNi-npFiCc9ZsK=s88-c-k-c0x00ffffff-no-rj',
    'Flayon': 'https://yt3.ggpht.com/x44Mk1Ici4gC4VO7k-_i511Q1dVWcMrlLXj5AzogJpPpGFpMMzyF4-bjhE9IWCAjxpxYQbTh-2A=s88-c-k-c0x00ffffff-no-rj',
    'Hakka': 'https://yt3.ggpht.com/ypBB8F0lAeZamC4itxt41rUeAM0U8t6-7n5zVTNXr9Gf6ofjyPcUQfXIQcHkjUzIbafwVfTzQA=s88-c-k-c0x00ffffff-no-rj',
    'Shinri': 'https://yt3.ggpht.com/MzN3nqf5wjiJkPi8ZdvyqhU5BiwBaUpOJ9TuU7Rq3wb547j6sMbzTpl0qK9HfC_I_vaJ8g9u3w=s88-c-k-c0x00ffffff-no-rj',
    'Jurard': 'https://yt3.ggpht.com/cO_4MKUT2rY04iIvMqHtCA3vTSUzJed5Ofps1XaK18-XFX3a4XSWovOTd34htpOBhhKMbfaFqQ=s88-c-k-c0x00ffffff-no-rj',
    'Goldbullet': 'https://yt3.ggpht.com/Ouq6R6SS8IhOBZvIh98KePG_zZFPcU_smonBrMZw-DlQ-SDT0itJMb73CcYeEs1Hps1HzNm4_w=s88-c-k-c0x00ffffff-no-rj',
    'Octavio': 'https://yt3.ggpht.com/gIHnyS3rzWyP5H75gXbVkKy-AjWgq6SoSA5stdtffSmWLsudt1gxQ7_9U-VRrb7f8FgqrrbX6U4=s88-c-k-c0x00ffffff-no-rj',
    'Crimzon': 'https://yt3.ggpht.com/yzWpLfC1h3ewxv57y5ebtzUwYshCebcNx7_3uVjSX_2bTi_nqRJd4pjAsszVW2B_26zpX7fzFQ=s88-c-k-c0x00ffffff-no-rj',
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
            applyFilter(hololiveJpFilter, await getSetting());
            break;
        case 'ホロライブ全体':
            applyFilter(hololiveFilter, await getSetting());
            break;
        case 'ホロスターズ全体':
            applyFilter(holostarsFilter, await getSetting());
            break;
        case 'お気に入り':
            applyFilter(await getFilter(), await getSetting());

            // フィルターのチェック変更後すぐに反映する
            window.addEventListener('focus', async (event) => {
                applyFilter(await getFilter(), await getSetting());
            });
            break;
        }
    }
    else {
        logStreamCount();
    }
}

document.addEventListener('DOMContentLoaded', () => { main(); });
