/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import '../misc/db.js';
import CatModel from '../models/cat.js';
import DogModel from '../models/dog.js';
import OtherAnimalModel from '../models/otherAnimal.js';

async function createDog() {
  await DogModel.insertMany([
    {
      kind: 'Котон-де-тулеар',
      nickname: 'Грид',
      photo: 'coton de_tulear.jpeg',
      description: 'Щенок Котон-де-тулеар: миниатюрной домашней собаки родом с острова Мадагаскар. Обладают удивительно мягкой белой шерстью, напоминающей по своей структуре и свойствам хлопок — потомки мальтийских болонок, которые почти не линяют и не пахнут. Очень умны, живы, задорны и сообразительны. Легко поддаются дрессировке, отлично ладят с детьми и взрослыми.',
      age: 0.3,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '5-6 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dcc4bb25f063438386d3a'),
      gender: 'мальчик',
      pedigree: 'нет',
      vaccinationРistory: 'нет',
    },
    {
      kind: 'Лабрадор-ретривер',
      nickname: 'Кана',
      photo: 'Labrador_retriever.jpg',
      description: 'Собака, 6 лет прослужившая поводырем. Хорошо общается с другими собаками, домашними животными и детьми.',
      age: 8,
      price: 270000,
      pay: false,
      adultSize: 'Большое (ориентир: как сенбернар)',
      adultweight: '29-36кг',
      possibleForAllergySufferers: false,
      longHaired: false,
      guideВog: true,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dcc4bb25f063438386d3a'),
      gender: 'male',
      pedigree: 'длиннющая',
      vaccinationРistory: 'проставлены',
    },
    {
      kind: 'Босерон',
      nickname: 'Бен',
      photo: 'beauceron.jpeg',
      description: 'Аборигенная порода, прямой потомок волка. Изначально незаменимая пастушья собака, сегодня она по праву считается первоклассным сторожем и полноценным членом семьи, заслужившим абсолютное доверие человека. Босероны воплощают в себе лучшие черты семейства псовых: силу, выносливость, бесконечную преданность, умение быть компаньонами и готовность защищать тех, кого любят. Отменная служебная собака, которая с успехом применяется и в армии, и в полицейской работе.',
      age: 1,
      price: 40000,
      pay: false,
      adultSize: 'Среднее (ориентир: как бульдог)',
      adultweight: '30 - 45кг',
      possibleForAllergySufferers: false,
      longHaired: false,
      guideВog: false,
      warDog: true,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: false,
      gender: 'мальчик',
      pedigree: 'не имеется',
      vaccinationРistory: 'не имеется',
      sellerID: mongoose.Types.ObjectId('5f6dcc4bb25f063438386d3a'),
    },
    {
      kind: 'Бишон фризе',
      nickname: 'Бард',
      photo: 'Bichon_Frize.jpeg',
      description: ' Мелкая собака, отлично подходит для квартиры. Терпеливая, отличается высоким интеллектом',
      age: 2,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '5-6 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dcc4bb25f063438386d3a'),
      gender: 'мальчик',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
    },
    {
      kind: 'Йоркширский терьер',
      nickname: 'Верон',
      photo: 'Yorkshire_Terrier.jpeg',
      description: 'Умный, но требовательный в плане ухода',
      age: 6,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '2-3 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: false,
      sellerID: mongoose.Types.ObjectId('5f6dcc4bb25f063438386d3a'),
      gender: 'мальчик',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
    },
    {
      kind: 'Мальтезе',
      nickname: 'Чак',
      photo: 'Maltese.jpeg',
      description: 'Собака игривая, с спокойный нравом и очень нежная',
      age: 8,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '2-3 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dcc4bb25f063438386d3a'),
      gender: 'мальчик',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
    },
    {
      kind: 'Гриффон',
      nickname: 'Мелисса',
      photo: 'Griffon.jpeg',
      description: 'Милая собака с добрым характером, игривая и любят целоваться',
      age: 2,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '5-6 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dcc4bb25f063438386d3a'),
      gender: 'девочка',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
    },
    {
      kind: 'Аффенпинчер',
      nickname: 'Жаклин',
      photo: 'Affenpinscher.jpeg',
      description: 'Мелкая собачка, рекомендуется для семей с детьми, может жить в маленькой квартире',
      age: 6,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '3-5 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dccb916166a55de83dae7'),
      gender: 'девочка',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
    },
    {
      kind: 'Ирландский водяной спаниель',
      nickname: 'Зара',
      photo: 'Irish_water_spaniel.jpeg',
      description: 'Добрая и выносливая собака, не проявляет агрессии, мало лает, но необходим частый выгул',
      age: 8,
      pay: false,
      price: 0,
      adultSize: 'Среднее (ориентир: как бульдог)',
      adultweight: '20-26 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dccb916166a55de83dae7'),
      gender: 'девочка',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
    },
    {
      kind: 'Эштрельская овчарка',
      nickname: 'Венера',
      photo: 'Estrel_Shepherd.jpg',
      description: 'Высокоинтеллектуальная, смелая и самоуверенная собака. Склонна сама принимать решения, даже в сложных ситуациях. Необычайно вынослива, Обладает спортивным телосложением, азартом, может выступать в качестве достойного противника любого хищного животного. В спокойной обстановке питомец уравновешен, вальяжен, но при появлении опасности за секунды собирается и может сразу действовать. Он бесстрашно будет защищать дом и семью, не глядя на количество и размеры злоумышленников, порой, значительно превышающие самого эштрельца. Благодаря внимательности и бдительности эштрельская овчарка является идеальным сторожем. Семья, купившая такую собаку, получает не только отменного охранника и сторожа, но и верного, ласкового четвероногого друга. Пес будет защищать семью, особенно детей, считая их самыми слабыми и уязвимыми членами стада',
      age: 3,
      pay: true,
      price: 45000,
      adultSize: 'Большое (ориентир: как сенбернар)',
      adultweight: '30-40 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dccb916166a55de83dae7'),
      gender: 'девочка',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
    },
    {
      kind: 'Тибетский мастиф',
      nickname: 'Честер',
      photo: 'Tibetan_mastiff.jpg',
      description: 'Очень спокойная, сдержанная, послушная собака, сочетающая в себе способность охранять дом и быть хорошим другом семье, в которой живет. Главная отличительная черта породы – удивительная чистоплотность (отчасти схожая с кошачьей).',
      age: 4,
      pay: false,
      price: 0,
      adultSize: 'Большое (ориентир: как сенбернар)',
      adultweight: '60-82 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      guideВog: false,
      warDog: true,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f6dccb916166a55de83dae7'),
      gender: 'мальчик',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
    },
  ]);
}

async function createCat() {
  await CatModel.insertMany([
    {
      kind: 'Сфинкс',
      nickname: 'Айма',
      photo: 'sphinx.jpeg',
      description: 'Мягкий темперамент, высокий интеллект и отличная память. Кошки этой породы очень преданны и сильно привязываются к хозяину, внимательно изучают его привычки и предпочтения, отчасти даже перенимают у него манеру поведения. Им всегда нужно находиться в центре внимания, они очень общительны и ориентированы на человека, а одиночество переносят крайне тяжело Прекрасно поддаются дрессировке. Отдельного внимания заслуживает любовь этих питомцев к детям. Сфинксы очень любят общаться и играть с детьми, им совершенно чужда агрессия, с малышами кошки ведут себя очень аккуратно и дружелюбно, никогда не царапаются и не кусаются. Общительные питомцы также ладят с другими кошками и собаками, они очень миролюбивы, никого не боятся, относятся к окружающим уважительно и требуют такого же уважения в ответ.',
      age: 0.3,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '3-5 кг',
      possibleForAllergySufferers: true,
      longHaired: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      gender: 'девочка',
      pedigree: 'есть',
      vaccinationРistory: 'есть',
      sellerID: mongoose.Types.ObjectId('5f6dccb916166a55de83dae7'),
    },
    {
      kind: 'Мейн-кун',
      nickname: 'Барбарис',
      photo: 'Maine_Coon.jpeg',
      description: 'Улетаю на пмж в другую страну, не могу взять с собой! Барбарис прекрасен! Спокоен, уравновешен, независим. Очень умен. Срочно!',
      age: 6,
      pay: true,
      price: 5500,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '10 кг',
      possibleForAllergySufferers: false,
      longHaired: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: false,
      gender: 'мальчик',
      pedigree: 'наследный принц',
      vaccinationРistory: 'все обязательные',
      sellerID: mongoose.Types.ObjectId('5f6dccb916166a55de83dae7'),
    },
    {
      kind: 'Невская маскарадная',
      nickname: 'Семен',
      photo: 'Neva_Masquerade.jpeg',
      description: 'Молодой, очень ласковый котик Семен ищет новую семью, проживающую в частном доме! Семочке 2 года, кастрирован. Очень любит гулять на свежем воздухе, но всегда возвращается домой. В квартире Семочке скучно и тесно. Кушает сухой корм. Ходит в лоток. Будут вопросы, звоните.',
      age: 2,
      pay: true,
      price: 1000,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '6 кг',
      possibleForAllergySufferers: false,
      longHaired: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      gender: 'девочка',
      pedigree: '-',
      vaccinationРistory: 'нет',
      sellerID: mongoose.Types.ObjectId('5f6dccb916166a55de83dae7'),
    },
    {
      kind: 'Балинезийская кошка',
      nickname: 'Белла',
      photo: 'Balinese_cat.jpeg',
      description: 'По-собачьи преданная своему хозяину. Это исключительной грациозности полудлинношёрстая кошка. Нежность сочетается с общительностью, ей очень важно внимание своего хозяина.',
      age: 2,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '2-4 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      gender: 'девочка',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
      sellerID: mongoose.Types.ObjectId('5f6dcd27ac4baa56d7e1a4d6'),
    },
    {
      kind: 'Яванская кошка',
      nickname: 'Чайна',
      photo: 'Javanese_cat.jpg',
      description: 'Яванские кошки очень любят своих хозяев, крепко привязываются к ним и не могут покинуть ни на минуту. Им нравится постоянно быть недалеко от человека, спать в хозяйской постели, сидеть на руках. Как и сиамские кошки, яванезы известны своим упрямством. Им нравится быть в центре внимания и держать ситуацию под контролем. Представители породы являются очень ловкими, умными и выносливыми кошками. Котята всегда играют и с большим удовольствием лазают по когтеточкам и деревьям. Некоторые владельцы выгуливают взрослых кошек на поводке. По мнению экспертов, возле кота всегда надо оставлять хотя бы одну игрушку, в противном случае животное начнет переворачивать все, что находится в комнате. Порода явно не подойдет педантичным и спокойным людям. Яванез хорошо справляется с одиночеством, но от скуки начинает шалить. Неплохой вариант — завести двух котов в доме, чтобы они всегда были друг у друга. Но надо быть начеку, ведь вдвоем они смогут учинить еще более разрушительный ураган в доме.',
      age: 4,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '2-5 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      gender: 'девочка',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
      sellerID: mongoose.Types.ObjectId('5f6dcd27ac4baa56d7e1a4d6'),
    },
    {
      kind: 'Ориентальная кошка',
      nickname: 'Зарема',
      photo: 'Oriental_cat.jpg',
      description: 'Если вы хотите завести кошку и ищете верного друга, то стоит обратить внимание на ориентальную породу. Они отлично уживаются с людьми и с легкостью становятся не просто питомцами, а членами семьи.',
      age: 8,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '3-5 кг',
      possibleForAllergySufferers: true,
      longHaired: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      gender: 'девочка',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
      sellerID: mongoose.Types.ObjectId('5f6dcd27ac4baa56d7e1a4d6'),
    },
    {
      kind: 'Сибирская кошка',
      nickname: 'Норд',
      photo: 'Siberian_cat.jpg',
      description: 'Сибирская кошка отличается умом и сообразительностью, также у них хорошо развит охотничий инстинкт. Эта порода отличается сильной привязанностью к хозяину, дружелюбностью и общительностью. Хотя многие владельцы отмечают своенравный характер у своих питомцев: гордый и независимый. Также сибирцев часто сравнивают со сторожевыми собаками: они настороженно относятся к чужакам, не любят громкие звуки и могут самоотверженно защищать свою территорию. При этом представители породы хорошо ладят с детьми, хотя и требуют уважительного к себе отношения и не позволят дергать их за хвост или излишне тискать. С другими животными уживаются редко и неохотно, часто могут с ними драться. В целом, сибирская кошка считается спокойной и уравновешенной, хотя любит поиграть и пошалить',
      age: 2,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '6-10 кг',
      possibleForAllergySufferers: true,
      longHaired: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      gender: 'мальчик',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
      sellerID: mongoose.Types.ObjectId('5f6dcd27ac4baa56d7e1a4d6'),
    },
    {
      kind: 'Девон-рекс',
      nickname: 'Горец',
      photo: 'Devon_rex.jpeg',
      description: 'Девон-рекс – преданный друг и ласковый надоеда в теле глазастого «пришельца» из соседней Галактики. Стать владельцем такого симпатяги – это значит навсегда забыть об уединении и не раздражаться, обнаруживая под боком мурчащее ушастое создание, каждый раз как только садишься в кресло. И это при том, что по типу темперамента девоны – отнюдь не тюфячки, а скорее заводные бесята. Более того, в каждом представителе этой породы чутко дремлет неутомимый альпинист, с легкостью покоряющий любые комнатные «эвересты», начиная от стола и заканчивая карнизом для штор.',
      age: 4,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '2-4 кг',
      possibleForAllergySufferers: true,
      longHaired: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      gender: 'мальчик',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
      sellerID: mongoose.Types.ObjectId('5f6dcd27ac4baa56d7e1a4d6'),
    },
    {
      kind: 'Ликои',
      nickname: 'Дрозд',
      photo: 'Likoi.jpeg',
      description: 'Ликои считается естественной мутацией домашней кошки. Внешне эти животные производят неоднозначное впечатление: шерсть у них прорастает клоками. Их даже называют кошками-оборотнями.=Но такая странная и даже пугающая внешность обманчива: ликои — очень дружелюбные и милые создания. Они отличаются ласковым нравом, очень общительны, любят находиться рядом с хозяином. При этом кошки этой породы редко сидят на месте — их жизнь проходит в движении. Они постоянно играют, и хозяевам следует это учитывать, уделяя животному достаточно внимания. У кошек этой породы очень сильно развиты инстинкты. Они отличные охотники и с удовольствием совершенствуют свое мастерство. Заигравшись, они могут броситься на человека. Так же ликои могут повести себя по отношению к незнакомцу, который попал на их территорию.По этой причине не рекомендуется заводить кошек этой породы в семьях, где есть маленькие дети, — кошка может проявлять агрессию в ответ на неловкие попытки ребенка погладить ее или обнять. Ликои очень умны. Они легко запоминают команды, свое имя и правила, к которым их приучает владелец. Однако иногда они могут проявлять упрямство и демонстративно не реагировать на замечания хозяина. Всему виной независимый и дикий нрав, присутствующий в кошках этой породы на генетическом уровне',
      age: 8,
      pay: false,
      price: 0,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '2-4 кг',
      possibleForAllergySufferers: true,
      longHaired: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: false,
      gender: 'мальчик',
      pedigree: 'нет',
      vaccinationРistory: 'есть',
      sellerID: mongoose.Types.ObjectId('5f6dcd27ac4baa56d7e1a4d6'),
    },
  ]);
}

async function createOtherAnimal() {
  await OtherAnimalModel.insertMany([
    {
      type: 'Бык',
      kind: 'Красный горбатовский',
      nickname: 'Гомер',
      photo: 'bull.jpeg',
      description: 'Скромен и прилежен, терпелив, немногословен, настойчив и выносливыв',
      age: 13,
      pay: true,
      price: 230000,
      adultSize: 'Очень большое (ориентир: как лошадь и более)',
      adultweight: '700-800 кг',
      possibleForAllergySufferers: true,
      serviceAnimal: false,
      longHaired: false,
      pet: false,
      onlyInNonApartments: true,
      specialConditionsOfDetention: true,
      childrenInTheHouse: true,
      exotic: false,
      farmAnimal: true,
      gender: 'мальчик',
      pedigree: 'в наличии',
      vaccinationРistory: 'есть',
      sellerID: mongoose.Types.ObjectId('5f6dcd27ac4baa56d7e1a4d6'),
    },
    {
      type: 'Жираф',
      kind: 'Жираф Ротшильда (угандийский)',
      nickname: 'Звезда',
      photo: 'giraffe.jpg',
      description: 'Очень миролюбива. С уважением относится к остальным членам стад.',
      age: 8,
      pay: true,
      price: 4500000,
      adultSize: 'Очень большое (ориентир: как лошадь и более)',
      adultweight: '500-1900 кг',
      possibleForAllergySufferers: true,
      serviceAnimal: false,
      longHaired: false,
      pet: false,
      onlyInNonApartments: true,
      specialConditionsOfDetention: true,
      childrenInTheHouse: true,
      exotic: true,
      farmAnimal: false,
      gender: 'девочка',
      pedigree: 'отцы и деды призеры Нила',
      vaccinationРistory: 'нет',
      sellerID: mongoose.Types.ObjectId('5f6dcd27ac4baa56d7e1a4d6'),
    },
  ]);
}

createDog();
createCat();
createOtherAnimal();
