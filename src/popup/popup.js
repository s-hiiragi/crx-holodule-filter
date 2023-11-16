(async () => {
    {
        const setting = await chrome.runtime.sendMessage({'command': 'query_setting'});

        const settingCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"][data-setting]'));

        // 設定を反映
        settingCheckboxes.forEach(e => {
            const name = e.dataset.setting;
            e.checked = setting[name] ?? false;
        });

        const gather_setting = () => {
            const setting = {};
            settingCheckboxes.forEach(e => {
                const name = e.dataset.setting;
                setting[name] = e.checked;
            });
            return setting;
        };

        // 設定更新用のイベントハンドラを設定
        settingCheckboxes.forEach(e => {
            e.onchange = () => {
                const setting = gather_setting();
                chrome.runtime.sendMessage({'command': 'update_setting', 'setting': setting});
            };
        });
    }

    {
        const filter = await chrome.runtime.sendMessage({'command': 'query_filter'});

        const filterCheckboxs = Array.from(document.querySelectorAll('input[type="checkbox"][data-name]'));

        // フィルタ設定を反映
        filterCheckboxs.forEach(e => {
            const name = e.dataset.name;
            e.checked = filter[name] ?? false;
        });

        const gather_filter = () => {
            const filter = {};
            filterCheckboxs.forEach(e => {
                const name = e.dataset.name;
                filter[name] = e.checked;
            });
            return filter;
        };

        function check_subgroup(group, checked) {
            filterCheckboxs.forEach(e => {
                const name = e.dataset.name;
                if (name.startsWith(group) && name !== group) {
                    e.checked = checked;
                }
            });
        }

        // フィルタ更新用のイベントハンドラを設定
        filterCheckboxs.forEach(e => {
            e.onchange = () => {
                const name = e.dataset.name;
                check_subgroup(name, e.checked);

                const filter = gather_filter();
                chrome.runtime.sendMessage({'command': 'update_filter', 'filter': filter});
            };
        });
    }
})();
