(() => {
    let descElem = document.getElementsByClassName("_1l1MA");
    let solElem = document.getElementsByClassName("view-lines");
    let questionDesc = descElem[0].textContent.trim();
    let solution = solElem[0].textContent.trim();
    let titleElem = document.querySelector('span.mr-2.text-label-1.dark\\:text-dark-label-1.text-lg.font-medium');
    let title = titleElem.textContent.trim();
    let final =
        `/*
        ${title}
        \n
        ${questionDesc}
        */
        \n
        #include <bits/stdc++.h>
        using namespace std;
        ${solution}
`
    const fileName = `${title}.cpp`;
    final = final.replaceAll("\u00A0", " ")
    chrome.runtime.sendMessage({ action: 'download', text: final, filename: fileName });
})()
