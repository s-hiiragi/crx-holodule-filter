const default_filter = {
    'hololive_jp': true,
    'hololive_jp_official': true,
    'hololive_jp_gen0': true,
    'hololive_jp_gen1': true,
    'hololive_jp_gen2': true,
    'hololive_jp_gamers': true,
    'hololive_jp_gen3': true,
    'hololive_jp_gen4': true,
    'hololive_jp_gen5': true,
    'hololive_jp_gen6': true,
    'hololive_en': true,
    'hololive_en_official': true,
    'hololive_en_myth': true,
    'hololive_en_hope': true,
    'hololive_en_council': true,
    'hololive_en_advent': true,
    'hololive_id_': true,
    'hololive_id_official': true,
    'hololive_id_gen1': true,
    'hololive_id_gen2': true,
    'hololive_id_gen3': true,
    'hololive_dev_is': true,
    'hololive_dev_is_official': true,
    'hololive_dev_is_regloss': true,
    'holostars_jp': true,
    'holostars_jp_official': true,
    'holostars_jp_gen1': true,
    'holostars_jp_gen2': true,
    'holostars_jp_gen3': true,
    'holostars_jp_uproar': true,
    'holostars_en': true,
    'holostars_en_official': true,
    'holostars_en_tempus': true,
};

async function load_filter() {
    const obj = await chrome.storage.local.get('filter');
    return obj.filter ?? default_filter;
}

async function store_filter(filter) {
    await chrome.storage.local.set({'filter': filter});
}

async function query_filter(message, sendResponse) {
    const filter = await load_filter();
    console.log('sendResponse', filter);
    sendResponse(filter);
}

async function update_filter(message, sendResponse) {
    await store_filter(message.filter);
    sendResponse(null);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('onMessage', message?.command, message);

    switch (message.command)
    {
    case 'query_filter':
        query_filter(message, sendResponse);
        return true;
    case 'update_filter':
        update_filter(message, sendResponse);
        return true;
    }
});
