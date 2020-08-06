let input = document.querySelector('#start');
let processingButton = document.querySelector(".processing-button");
let outputUl = document.querySelector('.output-ul');

const exist = param => param ? param : '';
const lineConstr = (line) => {
    let desc = '';
    line.replace('/', ' ').replace('|', '').trim().split(' ').forEach((item,i) => {
        if (i) {
            desc = `${desc} ${exist(item)}`;
        }
    })
    return desc;
}


processingButton.addEventListener('click', () => {
    let data = input.value;
    outputUl.innerHTML = '';
    let arr = data.split('<');
    arr.forEach((item, i) => {
        if (i) {
            const line = item.split(`": `)[1].replace(/\s+/g,' ').replace('/', ' ').replace('|', ' ').replace('\\', ' ');
            let fullLine = `${line.split(' ')[0].replace('/', '').trim()} / ${lineConstr(line)}`.replace(/\s+/g,' ');
            if (line.includes('===')) {
                fullLine = line;
            }
            const code = `<li class="output-item">${fullLine}</li>`;
            outputUl.insertAdjacentHTML('beforeEnd', code);
        }
    });
});