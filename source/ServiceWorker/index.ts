chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: 'https://chat.openai.com/' });
});

export {};
