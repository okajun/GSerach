(function() {
    typeof msBrowser != "undefined" ? chrome = msBrowser : typeof browser != "undefined" ? chrome = browser : chrome = null;
     
    chrome.contextMenus.create({
        id: 'gsearchWordSelection',
        title: 'Googleで検索 "%s"', // %s は選択している文字列で置き換わる
        contexts: ['selection'], // 選択しているときのみメニューに表示される
        onclick: (info, tab) => {
            // クリックのイベント
            // 新しいタブを開いてGoogleで検索する
            chrome.tabs.create({
                url: 'https://www.google.com/search?q=' + info.selectionText
            });
        }
    });
    chrome.contextMenus.create({
        id: 'gsearchImageSelection',
        title: 'Googleで類似画像検索', 
        contexts: ['image'], // 選択しているときのみメニューに表示される
        onclick: (info, tab) => {
            // クリックのイベント
            // 新しいタブを開いてGoogleで検索する
            chrome.tabs.create({
                url: 'https://www.google.co.jp/searchbyimage?hl=ja%safe=off&site=search&image_url=' + info.srcUrl
            });
        }
    });
})()
