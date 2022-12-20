$(document).ready(() => {

  const $showData = $('#show-data');
  const $showAyah = $('#show-ayah');

  const $raw = $('pre');

  // get json di endpoint
  $.getJSON('https://api.alquran.cloud/v1/surah', (respon) => {
    console.log(respon.code);
    console.log(respon.status);

    // mengatur ulang format respon dari json menjadi html
    const markup = respon.data
      .map(item => `
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Nama Surat:</th>
        <th scope="col">Jumlah Ayat:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="surat" data-nomer="${item.number}">${item.number}.</td>
        <td class="surat" data-nomer="${item.number}">${item.englishName}</td>
        <td class="surat" data-nomer="${item.number}">${item.numberOfAyahs}</td>
      </tr>
    </tbody>`)
      .join('');

    const list = $('<table class="table table-success table-striped"></table>').html(markup);
    // tampilkan di kolom ke pertama
    $showData.html(list);

    $('.surat').on('click', function (event) {
      var id = $(event.target).data("nomer");
      $.getJSON(`https://api.alquran.cloud/v1/surah/${id}?offset=0&limit=10`, function (respon2) {
        console.log(respon2);
        const markup = respon2.data.ayahs
          .map(item => `
          <thead>
          <tr>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><li> ${item.text} </li></td>
          </tr>
        </tbody>`)
          .join('');

        const list = $('<table class="table table-success table-striped"></table>').html(markup);

        // tampilkan di kolom ke dua
        $showAyah.html(list);
      });
    });

  });


});
