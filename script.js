const app = document.getElementById('root');

const container = document.createElement('row');

var request = new XMLHttpRequest();
request.open('GET', 'http://api.icndb.com/jokes/random/3', true);
request.onload = function () {

  var data = JSON.parse(this.resposne);

  if(request.status >= 200 && request.status < 400 && data.type == 'success'){
    var jokes = data.value;

    const frst = document.createElement('div');
    frst.setAttribute('class','col-sm-4');
    const text1 = document.createElement ('p');
    text1.textContent = `${jokes[0].joke}`
    frst.appendChild(text1);
    const img1 = document.createElement('img');
    img1.setAttribute('src','images/chuckNorris.jpc');
    img1.setAttribute('class', 'img-responsive img-circle margin');
    img1.setAttribute('style', 'width:100%');
    img1.setAttribute('alt','Image');
    first.appendChild(img1);

    const second = document.createElement('div');
    second.setAttribute('class','col-sm-4');
    const text2 = document.createElement ('p');
    text2.textContent = `${jokes[1].joke}`
    second.appendChild(text2);
    const img2 = document.createElement('img');
    img2.setAttribute('src','images/:parrot:.gif');
    img2.setAttribute('class', 'img-responsive img-circle margin');
    img2.setAttribute('style', 'width:100%');
    img2.setAttribute('alt','Image');
    second.appendChild(img2);

    const third = document.createElement('div');
    third.setAttribute('class','col-sm-4');
    const text2 = document.createElement ('p');
    text2.textContent = `${jokes[2].joke}`
    third.appendChild(text2);
    const img3 = document.createElement('img');
    img3.setAttribute('src','images/chuckNorris.jpc');
    img3.setAttribute('class', 'img-responsive img-circle margin');
    img3.setAttribute('style', 'width:100%');
    img3.setAttribute('alt','Image');
    third.appendChild(img3);

    row.appendChild(first);
    row.appendChild(second);
    row.appendChild(third);

  }else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Sorry but the API it's not working!`;
      app.appendChild(errorMessage);
    }
}

app.appendChild(row);
request.send();
