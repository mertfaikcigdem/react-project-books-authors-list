const AuthorsData = [
  {
    id: "1",
    authorName: "Goerge Orwell",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/220px-George_Orwell_press_photo.jpg",
    dateOfBirth: "25 Haziran 1903",
    dateOfDeath: "21 Ocak 1950",
    country: "İngiliz",
    description:
      "Eric Arthur Blair veya daha bilinen takma adıyla George Orwell, 20. yüzyıl İngiliz edebiyatının önde gelen kalemleri arasında yer alan İngiliz romancı, gazeteci ve eleştirmen. En çok, dünyaca ünlü Bin Dokuz Yüz Seksen Dört adlı romanı ve bu romanda yarattığı Big Brother kavramı ile tanınır.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "2",
    authorName: "John Steinbeck",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8rxLYBKaLUUIOu_6svqXIHZ1CWNQsnWq25_QC2tdvSBXbzXHy",
    dateOfBirth: "27 Şubat 1902",
    dateOfDeath: "20 Aralık 1968",
    country: "Amerikan",
    description:
      "John Steinbeck, Amerikalı gerçekçi yazardır. Eserlerinde genellikle İşçi yaşamını ve toplumsal sorunları dile getirdi. Gençliğinde bir zamanlar çalıştığı Salinas Vadisi onun eserleri için vazgeçilmez bir mekandır.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "3",
    authorName: "Fyodor Dostoyevski",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dostoevsky_1872.jpg/1200px-Dostoevsky_1872.jpg",
    dateOfBirth: "11 Kasım 1821",
    dateOfDeath: "9 Şubat 1881",
    country: "Rus",
    description:
      "Fyodor Mihayloviç Dostoyevski, Rus roman yazarı. Çocukluğu sarhoş bir baba ve hasta bir anne arasında geçiren Dostoyevski, annesinin ölümünden sonra Petersburg'daki Mühendis Okulu'na girdi. Babasının ölüm haberini burada aldı. Okulu başarıyla bitirdikten sonra istihkâm bölüğüne girdi.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "4",
    authorName: "Anton Pavloviç Çehov",
    img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ6Be0lpjXunMbHIsIT2NJKAek0Lrmhrwe2QhiWKg7y8-KpGSojqb0cxld7mFmU",
    dateOfBirth: "29 Ocak 1860",
    dateOfDeath: "15 Temmuz 1904",
    country: "Rus",
    description:
      "Anton Pavloviç Çehov, Rus oyun ve kısa öykü yazarıdır. Kısa öykü alanında tarihteki en büyük yazarları arasında sayılmaktadır. Oyun yazarı olarak kariyerinde dört klasik eser üretmiş ve en iyi kısa öyküleri, yazarlar ve eleştirmenler tarafından olumlu eleştiriler almıştır.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar.",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "5",
    authorName: "Jack London",
    img: "data:image/jpeg;base64,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",
    dateOfBirth: "12 Ocak 1876",
    dateOfDeath: "22 Kasım 1916",
    country: "Amerikan",
    description:
      "John Griffith London, Amerikalı gazeteci ve roman yazarı. Vahşetin Çağrısı, Martin Eden, Demir Ökçe, Beyaz Diş ve Deniz Kurdu başta olmak üzere elliden fazla kitabın yazarı olan Jack London, Dünya ticari dergi romanının öncüsü ve yazarlıktan yüksek gelir elde edebilen Amerikalıların ilklerindendir.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "6",
    authorName: "Lev Tolstoy",
    img: "https://i.idefix.com/pimages/Content/Uploads/ArtistImages/artist__7113.jpg",
    dateOfBirth: "9 Eylül 1828",
    dateOfDeath: "20 Kasım 1910",
    country: "Rus",
    description: "Lev Nikolayeviç Tolstoy, Rus yazardır.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "7",
    authorName: "Victor Hugo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Victor_Hugo_001.jpg/1200px-Victor_Hugo_001.jpg",
    dateOfBirth: "26 Şubat 1802",
    dateOfDeath: "22 Mayıs 1885",
    country: "Fransız",
    description:
      "Victor Marie Hugo Romantik akıma bağlı Fransız şair, romancı ve oyun yazarı. En büyük ve ünlü Fransız yazarlardan biri kabul edilir. Hugo'nun Fransa'daki edebi ünü ilk olarak şiirlerinden sonra da romanlarından ve tiyatro oyunlarından gelir. ",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "8",
    authorName: "Stefan Zweig",
    img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR7A5a0_JsotjJJjb3L9v9_SYUdGaA_cvweaLIy0HrA8nDu3JYVxFDNt-EYkyVI",
    dateOfBirth: "28 Kasım 1881",
    dateOfDeath: "22 Şubat 1942",
    country: "Avusturyalı",
    description:
      "Stefan Zweig, Avusturyalı roman, oyun, biyografi yazarı ve gazetecidir. 1920'ler ile 1930'lar arasında edebiyat kariyerinin zirvesinde olmuş Zweig, dönemin dünyasının en çok tercüme edilen ve en popüler yazarlarından biriydi.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "9",
    authorName: "Oscar Wilde",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTV9dQb1kweIGwZylKyFoljZYQddagTN2v3DaErncU0dNWwOL5y",
    dateOfBirth: "16 Ekim 1854",
    dateOfDeath: "30 Kasım 1900",
    country: "İrlandalı",
    description:
      "Oscar Fingal O’Flahertie Wills Wilde, İrlandalı oyun yazarı, romancı, kısa öykücü ve şair. İğneli üslubu ile geç Victoria dönemi Büyük Britanya'sının en başarılı ve ünlü yazarları arasına girdi.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
  {
    id: "10",
    authorName: "Jules Verne",
    img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ4EAanXqp7tmWlhdrTuaG-VJdAXKU9-mKdnd0DmB5Cfsyf5Dks-E3c3nKikNgV",
    dateOfBirth: "8 Şubat 1828",
    dateOfDeath: "24 Mart 1905",
    country: "Fransız",
    description:
      "Jules Gabriel Verne, Fransız yazar ve gezgin. Verne, Hugo Gernsback ve H. G. Wells ile genellikle Bilim Kurgunun Babası olarak adlandırılır. Eserlerinde ayrıntılarıyla tarif ettiği buluşlar ve makinelerin o sıralarda gelişmekte olan Avrupa sanayisi ve teknolojisine ilham kaynağı olduğu düşünülür.",
    comments: [
      {
        userName: "merve",
        commentText: "etkileyici bir yazar",
      },
      {
        userName: "tolga",
        commentText: "etkileyici bir yazar",
      },
    ],
  },
];

export default AuthorsData;
