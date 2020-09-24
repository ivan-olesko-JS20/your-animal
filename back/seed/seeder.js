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
      sellerID: mongoose.Types.ObjectId('5f6cad713464140e6bc78bc4'),
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
      sellerID: mongoose.Types.ObjectId('5f6cad713464140e6bc78bc4'),
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
      gender: 'male',
      pedigree: 'не имеется',
      vaccinationРistory: 'не имеется',
      sellerID: mongoose.Types.ObjectId('5f6cad713464140e6bc78bc4'),
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
      sellerID: mongoose.Types.ObjectId('5f6cad713464140e6bc78bc4'),
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
      gender: 'male',
      pedigree: 'наследный принц',
      vaccinationРistory: 'все обязательные',
      sellerID: mongoose.Types.ObjectId('5f6cad713464140e6bc78bc4'),
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
      gender: 'female',
      pedigree: '-',
      vaccinationРistory: 'нет',
      sellerID: mongoose.Types.ObjectId('5f6cad713464140e6bc78bc4'),
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
      sellerID: mongoose.Types.ObjectId('5f6cad713464140e6bc78bc4'),
    },
    {
      type: 'Жираф',
      kind: 'Жираф Ротшильда (угандийский)',
      nickname: 'Звезда',
      photo: 'giraffe.jpg',
      description: 'Очень миролюбива. С уважением относится к остальным членам стад.',
      age: 8,
      pay: true,
      price: 4005000,
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
      gender: 'female',
      pedigree: 'отцы и деды призеры Нила',
      vaccinationРistory: 'нет',
      sellerID: mongoose.Types.ObjectId('5f6cad713464140e6bc78bc4'),
    },
  ]);
}

createDog();
createCat();
createOtherAnimal();
