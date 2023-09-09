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
