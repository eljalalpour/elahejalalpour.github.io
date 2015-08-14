var history = new Josh.History({key: '.history'});
var shell = Josh.Shell({history: history});
var promptCounter = 0;
shell.onNewPrompt(function (callback) {
    promptCounter++;
    callback("[" + promptCounter + "] $ ");
});
shell.activate();
