const zodiacSingDB = {
  Aries: {
    russianName: "Овен",
    englishName: "Aries",
  },
  Taurus: {
    russianName: "Телец",
    englishName: "Taurus",
  },
  Gemini: {
    russianName: "Близнецы",
    englishName: "Gemini",
  },
  Cancer: {
    russianName: "Рак",
    englishName: "Cancer",
  },
  Leo: {
    russianName: "Лев",
    englishName: "Leo",
  },
  Virgo: {
    russianName: "Дева",
    englishName: "Virgo",
  },
  Libra: {
    russianName: "Весы",
    englishName: "Libra",
  },
  Scorpio: {
    russianName: "Скорпион",
    englishName: "Scorpio",
  },
  Sagittarius: {
    russianName: "Стрелец",
    englishName: "Sagittarius",
  },
  Capricorn: {
    russianName: "Козерог",
    englishName: "Capricorn",
  },
  Aquarius: {
    russianName: "Водолей",
    englishName: "Aquarius",
  },
  Pisces: {
    russianName: "Рыбы",
    englishName: "Pisces",
  },
};

const data = {
  "13.08.2025": {
    Aries:
      "Сегодня Овнам стоит смотреть правде и реальности в глаза. Иллюзии будут то и дело туманить мозг – не поддавайтесь. Гороскоп на сегодня для знака Овна советует быть предельно внимательным, выбирая путь – сейчас велик риск пойти не той дорогой и очень сильно разочароваться как во всем мире, так и в самом себе. Так что прислушивайтесь к интуиции – она точно будет помогать.",
    Taurus:
      "Сегодня Тельцам многое само идет в руки, но, несмотря на это, не все будет даваться так уж и легко. Над некоторыми задачками придется серьезно поломать голову. Не бойтесь – в конечном итоге вы найдете ответ. Гороскоп на сегодня для знака Тельца советует в новых делах быть осторожнее – уж слишком велик риск совершить ошибку. Так что будьте аккуратнее, продумывайте каждый шаг.",
    Gemini:
      "Сегодня у Близнецов может не задаться утро, но не стоит унывать – вторая половинка дня будет о-го-го. Так что пейте больше кофе и копите силы. Гороскоп на сегодня для знака Близнецов советует быть аккуратнее в общении – возможно, кто-то будет не в духе или просто не поймет вашу мысль. Отнеситесь с пониманием к каждому собеседнику, проявите мягкость, и тогда отношения не испортятся.",
    Cancer:
      "Сегодня Ракам то и дело что-то будет мешать двигаться вперед, но не стоит заострять на этом много внимания – гните свою линию и добивайтесь желаемого. Гороскоп на сегодня для знака Рака советует общаться активно, но при этом аккуратнее выбирать собеседников, ведь далеко не все будут нести ценную информацию и позитив. Некоторые могут испортить весь день одним только словом.",
    Leo: "Сегодня Львам стоит браться за важные и серьезные дела с самого утра, потому что с каждым часом будут все сложнее варить голова и работать руки. После полудня всё и вовсе начнет буксовать. Гороскоп на сегодня для знака Льва советует к вечеру сбавить обороты и обратить внимание на свои желания – некоторые из них просто необходимо утолить, вы почувствуете себя куда лучше.",
    Virgo:
      "Сегодня Девам стоит быть осторожнее в словах – вас могут неправильно понять, и тогда все отношения начнут разваливаться у вас на глазах. Постарайтесь быть мягче и не бойтесь спрашивать – сейчас это залог отличного диалога. Гороскоп на сегодня для знака Девы говорит, что ошибок на работе будет пруд пруди. Постарайтесь двигаться медленно и продумывать каждый шаг – тогда все пойдет в правильном направлении.",
    Libra:
      "Сегодня Весам будет непросто найти общий язык даже с самыми близкими – придется выкручиваться и из кожи вон лезть, чтобы вас поняли. Возможно, лучше просто промолчать весь день и сохранить силы – завтра с этим будет проще. Гороскоп на сегодня для знака Весов говорит, что на работе будет немало осечек – старайтесь следить абсолютно за всем. Контроль поможет продержаться с наименьшим количеством ошибок.",
    Scorpio:
      "Сегодня Скорпионам стоит начать утро спокойно и лайтово, никуда не торопясь – у вас будет еще миллион возможностей добиться своего, а сейчас – просто расслабьтесь. Гороскоп на сегодня для знака Скорпиона советует быть осторожнее на протяжении всего дня – риск ошибок ну очень велик. Скорее всего, от недочетов вы не укроетесь, но серьезные неприятности могут обойти вас стороной.",
    Sagittarius:
      "Сегодня Стрельцам придется долго раскачиваться – мозг будет отказываться работать с самого утра. Но ничего страшного – днем вы зададите всем жару. Гороскоп на сегодня для знака Стрельца советует лишний раз не спорить, да и вообще крайне редко общаться – собеседники в эти сутки способны не просто испортить вам настроение, но и значительно подгрызть вашу самооценку.",
    Capricorn:
      "Сегодня Козерогам не стоит планировать что-то важное и серьезное – Вселенная будет подкидывать исключительно неприятные сюрпризы, и большее количество времени уйдет на них. Гороскоп на сегодня для знака Козерога советует не надеяться на свою память – лучше все записывать, иначе многое растеряете по пути. Вечер – тот самый момент, когда стоит поговорить начистоту с близкими.",
    Aquarius:
      "Сегодня Водолеям стоит быть аккуратнее абсолютно во всем, особенно в первой половинке дня – совершить фатальную ошибку будет проще простого, а вот исправить ее – практически невозможно. Гороскоп на сегодня для знака Водолея рекомендует просить совета у друзей – не принимайте важные решения в одиночку, поговорите с самыми близкими и дорогими.",
    Pisces:
      "Сегодня Рыбам стоит быть аккуратнее на каждом шагу – оступиться и сделать ошибку слишком легко, а вот исправить ее будет невозможно. Гороскоп на сегодня для знака Рыб советует меньше общаться, особенно с самыми любимыми – сейчас они не будут понимать вас от слова совсем, из-за чего отношения точно начнут трещать по швам. Так что переложить все обсуждения на завтра.",
  },
  "14.08.2025": {
    Aries: "гороскоп на 14.08.25",
    Taurus: "гороскоп на 14.08.25",
    Gemini: "гороскоп на 14.08.25",
    Cancer: "гороскоп на 14.08.25",
    Leo: "гороскоп на 14.08.25",
    Virgo: "гороскоп на 14.08.25",
    Libra: "гороскоп на 14.08.25",
    Scorpio: "гороскоп на 14.08.25",
    Sagittarius: "гороскоп на 14.08.25",
    Capricorn: "гороскоп на 14.08.25",
    Aquarius: "гороскоп на 14.08.25",
    Pisces: "гороскоп на 14.08.25",
  },
  "15.08.2025": {
    Aries: "гороскоп на 15.08.25",
    Taurus: "гороскоп на 15.08.25",
    Gemini: "гороскоп на 15.08.25",
    Cancer: "гороскоп на 15.08.25",
    Leo: "гороскоп на 15.08.25",
    Virgo: "гороскоп на 15.08.25",
    Libra: "гороскоп на 15.08.25",
    Scorpio: "гороскоп на 15.08.25",
    Sagittarius: "гороскоп на 15.08.25",
    Capricorn: "гороскоп на 15.08.25",
    Aquarius: "гороскоп на 15.08.25",
    Pisces: "гороскоп на 15.08.25",
  },
};

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const getHoroscopeBtn = document.querySelector(".getHoroscope");

getHoroscopeBtn.addEventListener("click", showHoroscope);

function getZodiacSign(birthDate) {
  const day = birthDate.getDate();
  const month = birthDate.getMonth();

  if ((month === 2 && day >= 21) || (month === 3 && day <= 20)) return "Aries";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) return "Taurus";
  if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) return "Gemini";
  if ((month === 5 && day >= 22) || (month === 6 && day <= 22)) return "Cancer";
  if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) return "Leo";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) return "Virgo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Libra";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
    return "Scorpio";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 22))
    return "Sagittarius";
  if ((month === 11 && day >= 22) || (month === 0 && day <= 20))
    return "Capricorn";
  if ((month === 0 && day >= 21) || (month === 1 && day <= 19))
    return "Aquarius";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 20)) return "Pisces";
}

function showHoroscope() {
  // DOM
  const birthDateInput = document.querySelector(".birth-date").value;

  // Если не введена дата рождения
  if (!birthDateInput) {
    document.querySelector(".result").textContent = "Введите дату рождения!";
  }

  let currentDate = new Date();
  let date;

  const birthDate = new Date(birthDateInput);

  // Получение знака зодиака
  const zodiacSingKey = getZodiacSign(birthDate);
  const zodiacSingInfo = zodiacSingDB[zodiacSingKey];

  // Радиокнопки
  let currentRadioButton = document.querySelector('input[name="day"]:checked');

  if (currentRadioButton.value == "today") {
    date = currentDate;
  }
  if (currentRadioButton.value == "tomorrow") {
    date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1
    );
  }
  if (currentRadioButton.value == "dayAfterTomorrow") {
    date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 2
    );
  }

  // console.log("currentDate", currentDate);
  generateMonth(currentDate);

  console.log("date", date);

  // Вывод данных
  document.querySelector(".result").innerHTML = `
  <h1>${zodiacSingInfo.russianName}</h1> `;
}

// Генерация горосокопа на месяц
function generateMonth(currentDate) {
  // let dateNumber = new Date(date).getDate();
  let monthNumber = new Date(currentDate).getMonth();
  let yearNumber = new Date(currentDate).getFullYear();

  const datesArrForDB = generateMonthDays(yearNumber, monthNumber);

  return datesArrForDB;
}

// Генерация дат месяца
function generateMonthDays(year, month) {
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  let datesArr = [];

  for (let day = new Date().getDate(); day <= daysInMonth; day++) {
    datesArr.push(new Date(year, month, day));
  }

  return formatDateHandler(datesArr);
}

// Форматирование дат
function formatDateHandler(dates) {
  return dates.map((date) => {
    const day = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  });
}

// Добавление нулей
function addZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
