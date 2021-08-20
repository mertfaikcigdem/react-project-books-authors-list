const BooksData = [
  {
    id: 1,
    authorName: "George Orwell",
    bookName: "1984",
    img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg",
    description:
      "George Orwell’in kült kitabı Bin Dokuz Yüz Seksen Dört, yazarın geleceğe ilişkin bir kâbus senaryosudur. Bireyselliğin yok edildiği, zihnin kontrol altına alındığı, insanların makineleşmiş kitlelere dönüştürüldüğü totaliter bir dünya düzeni, romanda inanılmaz bir hayal gücüyle, en ince ayrıntısına kadar kurgulanmıştır. Geçmişte ve günümüzde dünya sahnesinde tezgâhlanan oyunlar düşünüldüğünde, ütopik olduğu kadar gerçekçi bir romandır Bin Dokuz Yüz Seksen Dört. Güncelliğini hiçbir zaman yitirmeyen bir başyapıttır; yalnızca yarına değil, bugüne de ilişkin bir uyarı çığlığıdır. ",
    numberOfPages: "352",
    printYear: "2000",
    comments: [
      {
        userName: "mert",
        commentText: "Çok güzel bir kitap. Kesinlikle tavsiye ediyorum.",
      },
      {
        userName: "ahmet",
        commentText: "Harika bir kitap.",
      },
    ],
  },
  {
    id: 2,
    authorName: "Fyodor Dostoyevski",
    bookName: "Suç ve Ceza",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0001788076001-1.jpg",
    description:
      "Suç ve Ceza; Rodion Romanoviç Raskolnikov adındaki bir gencin işlediği çifte cinayet üzerine yaşadıklarını konu alıyor. Raskolnikov, bir yandan hukuk öğrenimi görürken diğer yandan yoksullukla boğuşan bir genç. Para ihtiyacını ise tefeci bir kadına eşyalarını bırakarak karşılıyor. Yoksulluğuna çare bulamadığı gibi tefeciden yakasını da kurtaramayan Raskolnikov, bu kadının toplumun iyiliği için ölmesi gerektiğini düşünmeye başlıyor.",
    numberOfPages: "687",
    printYear: "2018",
    comments: [
      {
        userName: "merve",
        commentText: "Uzun ve sürükleyici bir kitap.",
      },
      {
        userName: "tolga",
        commentText: "Çok etkilendim",
      },
    ],
  },
  {
    id: 3,
    authorName: "John Steinbeck",
    bookName: "Fareler ve İnsanlar",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0000000411500-1.jpg",
    description:
      "Nobel ödüllü yazar John Steinbeck’in ilk kez 1937 yılında yayınlanan eseri; çiftlikten çiftliğe dolaşarak çalışan iki yakın arkadaşın başından geçen maceraları ve onların hayallerine sıkı sıkıya olan bağlılığını konu ediniyor. Kendisi de bir dönem gezici çiftlik işçiliği yapmış olan John Steinback’in hayatından da izler taşıyan roman, realist yaklaşımı ile dikkat çekiyor. Gerçeğe yakın bir dil ile kurgulanan eser, oldukça sürükleyici ve etkileyici anlatımı ile günümüzde hala en çok okunan kitaplar arasında bulunuyor.",
    numberOfPages: "111",
    printYear: "2012",
    comments: [
      {
        userName: "derin",
        commentText: "Büyük küçük herkes okumalı.",
      },
      {
        userName: "elif",
        commentText: "çok güzeldi bir solukta okudum",
      },
    ],
  },
  {
    id: 4,
    authorName: "Anton Pavloviç Çehov",
    bookName: "Altıncı Koğuş",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0001717354001-1.jpg",
    description:
      "Çehov bir taşra kasabasındaki akıl hastanesinde geçen bu novellasında, eğitimli bir hasta olan İvan Dmitriç ile Doktor Andrey Yefimıç arasındaki felsefi çatışmaya odaklanır. İvan Dmitriç maruz kaldıkları adaletsizliğe, içinde yaşamaya zorlandıkları berbat koşullara karşı çıkarken, Andrey Yefimıç bunları görmezden gelmekte ısrar eder ve durumu değiştirmek için kılını bile kıpırdatmaz. Doktor sonunda içine düştüğü “felsefi” yanılgının farkına vardığında ise artık iş işten geçmiştir. Altıncı Koğuş, Rusya’nın ve ülkenin sorunlarıyla ilgilenmek yerine onları uzaktan izlemeyi tercih eden elit Rus aydınının “deliliği”nin simgesidir adeta. Altıncı Koğuş, Russkaya Mısl dergisinin 1892 kasım sayısında yayımlandığında büyük ilgi görmüştü. Hatta Lenin’in de yapıtı okuduktan sonra dehşete kapıldığı, “Kendimi Altıncı Koğuş’a kapatılmış gibi hissettim” dediği rivayet edilir.",
    numberOfPages: "80",
    printYear: "2017",
    comments: [
      {
        userName: "cehov",
        commentText:
          "Kendiside bir doktor olan çehovu tanımak için iyi bir tercih, kesinlikle okunmalı.",
      },
      {
        userName: "Ared de Nice",
        commentText:
          "ipince bir kitap, bir cirpida okudum.Kahramani Andrey Yefimic cok guzel anlatilmis. Carpici, huzunlu,  muazzam bir eser. Yerimizin siyahtan beyaza tavandan tabana kaymasi bir hicle bile olabilir",
      },
    ],
  },
  {
    id: 5,
    authorName: "Jack London",
    bookName: "Beyaz Diş",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0001776353001-1.jpg",
    description:
      "Asıl adı John Griffith Chaney olan Jack London 1876’da San Francisco’da doğdu, 1916’da öldü. Çocukluğu yoksulluk içinde geçti. On dört yaşından itibaren fabrika işçiliği, balıkçılık, tayfalık gibi işlerde çalıştı. Yirmi iki yaşında yazar olan Jack London, yirmi yedi yaşında Vahşetin Çağrısı adlı romanı ile dünyaca ün kazandı. Eserleri filme alınan ilk yazarlardandır. Eserlerinde hayat kavgasını ve düzen eleştirisini romantik bir üslupla anlatır. En bilinen kitapları Demir Ökçe, Martin Eden, Deniz Kurdu ve Beyaz Diş’tir. Beyaz Diş, vahşi doğanın çetin yaşam koşullarının tüm canlılar için hayatta kalma mücadelesi anlamına geldiğini anlatan en büyüleyici romanlardan biridir. Bir mağarada doğan Beyaz Diş’in büyürken, dünyanın kapılarını yavaş yavaş aralamasını, kendisini ve doğayı keşfederek ehlileşme serüvenini konu alır. Kitap, vahşi doğada bile her canlının sevgiye ihtiyacı olduğunu savunur.",
    numberOfPages: "258",
    printYear: "2018",
    comments: [
      {
        userName: "okursever",
        commentText: "Sağlam geldi çok hızlı jack london bir harika !!",
      },
      {
        userName: "ümit",
        commentText:
          "Kitaba hemen başladım akıcı gidiyor diyebilirim gönül rahatlığıyla. Kargo hızlı ve çabuk geldi. Deforme olmadan korunaklı şekilde elime ulaştı fiyatı da iyi, daha ne olsun.",
      },
    ],
  },
  {
    id: 6,
    authorName: "Lev Nikolayeviç Tolstoy",
    bookName: "İnsan Neyle Yaşar?",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0001698388001-1.jpg",
    description:
      "Rus edebiyatçı Tolstoy, İnsan Neyle Yaşar?’da yer alan hikâyeleriyle büyük bir yazar olmasının yanı sıra, topluma ayna tutarak filozof ve eğitimci kimliğini de öne çıkartır. Tolstoy’un bu eseri, her dönemde güncelliğini koruyan bir kaynaktır. Kitapta yer alan tüm hikâyeler insanın özündeki iyilik, açgözlülük, hırs ve her anlamda birleştirici bir güç olan sevgi kavramlarını ele alır. Öte yandan, genç veya yaşlı tüm okuyuculara, kendine bir adım dışarıdan bakabilme ve hayatın belki de en önemli sorularını sorabilme olanağı sunar. İnsanın içinde ne vardır? İnsana ne verilmemiştir? İnsan neyle yaşar?",
    numberOfPages: "116",
    printYear: "2017",
    comments: [
      {
        userName: "Mükemmel",
        commentText:
          "Tüm insanların okuması gereken,bir çok şey öğreten mükemmel bir kitap. Tolstoy'un yalın ve akıcı anlatımıyla bir saatte okumuş olduğum kitap.",
      },
      {
        userName: "okandemir",
        commentText: "Güzel ve kısaydı",
      },
    ],
  },
  {
    id: 7,
    authorName: "Victor Hugo",
    bookName: "Notre Dame'ın Kamburu",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0000000576984-1.jpg",
    description:
      "Victor Hugo (1802-1885): Fransız edebiyatının en ünlü yazarlarından biri olan sanatçı, edebi ününü şiirleri ve oyunları ile kazandı. Romantik akımın en tanınmış adları arasında yer aldı. Toplumsal sorunlar ve politikayla yakından ilgilendi, 1848 ayaklanmalarının ardından Kurucu Meclis'e katıldı, daha sonra milletvekilliği yaptı, l'Evénement adlı bir gazete çıkardı. 1852'de Louis Bonaparte'ın imparatorluğunu ilan ettiği hükümet darbesine karşı çıktığı için sürgün edildi. Cezası 1859'da sona erdi, fakat imparatorluk yıkılana kadar gönüllü olarak sürgünde kaldı, 1870'de Fransa'ya döndü. 1871'de Paris Komünü'nü desteklemese de komüncüleri savundu. 1831 yılında yayımlanan romanı Notre Dame'ın Kamburu klasik edebiyatın şaheserleri arasında yer alır.",
    numberOfPages: "572",
    printYear: "2016",
    comments: [
      {
        userName: "Harikaydı",
        commentText:
          "Hayal ettiğimden inanılmaz farklı bitti.. Bitsin istemediğim tek kitap diyebilirim. Notre Dame’ı en ilk müzikaliyle tanıdım ve daha sonra kitabını okudum. Okurken gözümde müzikali canlandı diyebilirim.. Kesinlikle alıp okumalısınız :)",
      },
      {
        userName: "Harika Bir Eser",
        commentText: "Gerçekten çok güzel bir kitap... ",
      },
    ],
  },
  {
    id: 8,
    authorName: "Stefan Zweig",
    bookName: "Lyon'da Düğün",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0001775354001-1.jpg",
    description:
      "Lyon’da Düğün Fransız Devrimi sırasında yaşanan kargaşa ve zulüm günlerinde ölüme yaklaşan insanlara umut veren bir aşkın hikâyesidir. 1793’te kentte kurşuna dizilmeyi bekleyen karşı devrimcilerin toplandığı hapishane tuhaf bir nikâha sahne olur. İki Yalnız İnsan, acı çeken iki çaresiz insanı buluşturur. Birinin yüreğinden kopan çığlık diğerininkinde karşılık bulurken, farkında olmadan birbirlerinin yıllar süren yalnızlığına son verirler. Wondrak ise yazarın savaş karşıtı yapıtlarından biridir. Bohemya’nın küçük bir kentinde çirkinliğiyle sürekli alaya maruz kalan bir kadın tecavüze uğradıktan sonra doğurduğu çocuk sayesinde yaşama tutunmuştur, ama patlak veren Birinci Dünya Savaşı yüzünden oğlunu askere alarak ondan koparmaları söz konusudur. Zweig bu öykülerde toplum dışına itilmiş karakterleri üzerinden insanlık durumunu analiz eder. Karakterlerinin başlarından geçenler “yazgı” değil, insanlığın iflasının sonucudur.",
    numberOfPages: "112",
    printYear: "2018",
    comments: [
      {
        userName: "Harikaydı",
        commentText: "Başarılı bir eserdi.",
      },
      {
        userName: "Harika Bir Eser",
        commentText: "Gerçekten çok güzel bir kitap... ",
      },
    ],
  },
  {
    id: 9,
    authorName: "Oscar Wilde",
    bookName: "Dorian Gray'in Portresi",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0001788062001-1.jpg",
    description:
      "Dorian Gray son derece yakışıklı genç bir adamdır. Arkadaşı ressam Basil Hallward, genç adamın güzelliğinden öylesine etkilenir ki bir portresini yapar. Ressamın evinde hedonist Lord Henry’ yle tanışan Dorian, bu yeni dostunun gençlik ve haz üzerine düşüncelerinden çok etkilenir; hayattaki en önemli şeyin güzellik olduğuna inanan genç adam, portresini kıskanmaya başlayınca, kendisinin yerine onun yaşlanmasını diler.",
    numberOfPages: "272",
    printYear: "2018",
    comments: [
      {
        userName: "Harikaydı",
        commentText: "Başarılı bir eserdi.",
      },
      {
        userName: "Harika Bir Eser",
        commentText: "Gerçekten çok güzel bir kitap... ",
      },
    ],
  },
  {
    id: 10,
    authorName: "Jules Verne",
    bookName: "Zacharius Usta",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0001743615001-1.jpg",
    description:
      "Anna girdiği her ortamda dikkatleri üzerine çeken güzel bir kadındır, üstelik zenginlik içinde geçen hayatında arzu ettiği her şeye sahiptir. Üst düzey bir devlet görevlisi olan nazik eşi Aleksey Aleksandroviç ve oğluyla yaşadığı hayat günbegün ona sıkıcı gelmeye başlar ve kendini derin mutsuzluğun koynunda bulur. Bir gün abisinin ve eşinin aralarını düzeltmek üzere Moskova’ya gittiğinde orada zengin bir subay olan Kont Vronski ile tanışır. Anna, Rusya’da kapitalizmin ve burjuvazinin altın çağını sürmeye başladığı bir dönemde, yasak aşkını kimseden çekinmeden ve saklanma gereği duymadan yaşamaya başlar. Onun dışlanması ise ahlak kurallarına bağlı kalmaması yüzünden değil, burjuvazinin ikiyüzlülüğüne bağlı kalmaması sebebiyle olur.",
    numberOfPages: "56",
    printYear: "2018",
    comments: [
      {
        userName: "Harikaydı",
        commentText: "Başarılı bir eserdi.",
      },
      {
        userName: "Harika Bir Eser",
        commentText: "Gerçekten çok güzel bir kitap... ",
      },
    ],
  },
];

export default BooksData;
