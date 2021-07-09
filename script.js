// DOM Selection
const container = document.querySelector('.container');
const cards = document.querySelector('.cards');

// ajax
function getDataBuah(url, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.response);
            }else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}



// proses reques data
getDataBuah('data/data.json', result => {
    // console.table(JSON.parse(result));

    const buahBuahan = JSON.parse(result);
    let buah = '';

    buahBuahan.forEach((b, i)=> {
        buah += element(b);
    })

    // arrow function satu baris;
    // buahBuahan.forEach(b => buah += element(b));

    cards.innerHTML = buah;
});




function element(b) {
return `<div class="card">
            <div class="icon">${b.icon}</div>
                <ul>
                    <li>${b.nama}</li>
                    <li>${b.jenis}</li>
                    <li>${b.harga}</li>
                </ul>
        </div>`;
};