(async () => {
    const filter = await chrome.runtime.sendMessage({'command': 'query_filter'});
    console.log('response', filter);

    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    // フィルタ設定を反映
    checkboxes.forEach(e => {
        const name = e.dataset.name;
        e.checked = filter[name] ?? false;
    });

    const gather_filter = () => {
        const filter = {};
        checkboxes.forEach(e => {
            const name = e.dataset.name;
            filter[name] = e.checked;
        });
        return filter;
    };

    function check_subgroup(group, checked) {
        checkboxes.forEach(e => {
            const name = e.dataset.name;
            if (name.startsWith(group) && name !== group) {
                e.checked = checked;
            }
        });
    }

    // フィルタ更新用のイベントハンドラを設定
    checkboxes.forEach(e => {
        e.onchange = () => {
            const name = e.dataset.name;
            check_subgroup(name, e.checked);

            const filter = gather_filter();
            chrome.runtime.sendMessage({'command': 'update_filter', 'filter': filter});
        };
    });
})();
