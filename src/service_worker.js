async function load_filter() {
    const obj = await chrome.storage.local.get('filter');
    return obj.filter ?? {};
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

async function load_setting() {
    const obj = await chrome.storage.local.get('setting');
    return obj.setting ?? {};
}

async function store_setting(setting) {
    await chrome.storage.local.set({'setting': setting});
}

async function query_setting(message, sendResponse) {
    const setting = await load_setting();
    console.log('sendResponse', setting);
    sendResponse(setting);
}

async function update_setting(message, sendResponse) {
    await store_setting(message.setting);
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
    case 'query_setting':
        query_setting(message, sendResponse);
        return true;
    case 'update_setting':
        update_setting(message, sendResponse);
        return true;
    }
});
