const root = document.createElement('div')
const title = document.createElement('div')
const close = document.createElement('div')
const commentList = document.createElement('div')
const comments = document.createElement('div')
const commentTextArea = document.createElement('textarea')
const commentButton = document.createElement('button')

root.id = 'boothExtension'
root.className = 'boothExtension bpFloatingButton bpTextCenter bpBold bpBtn bpFontWhite'
root.innerText = 'Comment'

title.id = 'commentTitle'
title.innerText = 'Title'
title.className = 'bpTitle'

close.id = 'closeComment'
close.innerText = 'X'
close.className = 'bpClose'

commentList.id = 'commentList'
commentList.className = 'commentList'
comments.id = 'comments'
comments.className = 'comments'

commentTextArea.id = 'commentTextArea'
commentTextArea.className = 'commentTextArea'

commentButton.id = 'commentButton'
commentButton.className = 'commentSendBtn'
commentButton.innerText = 'Send'

close.onclick = () => {
    event.stopPropagation()
    if (!root.classList.contains('reverseExpandComment')) {
        root.classList.remove('expandComment')
        void root.offsetWidth;
        root.classList.add('bpBtn')
        root.classList.add('reverseExpandComment')
        root.innerText = 'Comment'
        console.log('close')
    }
}

root.onclick = () => {
    event.stopPropagation()
    if (!root.classList.contains('expandComment')) {
        root.classList.remove('reverseExpandComment')
        root.classList.remove('bpBtn')
        void root.offsetWidth;
        root.classList.add('expandComment')
        root.innerText = ''
        root.append(title)
        root.append(commentList)
        root.append(comments)
        console.log('click')
    }
}

commentButton.onclick = async () => {
    fetch('https://example.com/movies.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

title.append(close)
comments.append(commentTextArea)
comments.append(commentButton)
document.body.append(root)

// chrome.tabs.query()
