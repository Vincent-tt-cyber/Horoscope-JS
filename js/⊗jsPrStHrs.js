let horoscopes = {};

const zodiacSignHoroscope = {
  Aries: [
    "Овнам сегодня стоит проявить инициативу в рабочих вопросах.",
    "Благоприятный день для решения давних проблем.",
    "Избегайте конфликтов - сегодня вы особенно эмоциональны.",
    "Звёзды советуют заняться физической активностью.",
    "Хороший день для финансовых операций.",
    "Проявите терпение в общении с близкими.",
    "День подходит для старта новых проектов.",
    "Возможны неожиданные встречи, будьте открыты новому.",
    "Сосредоточьтесь на саморазвитии и обучении.",
    "Избегайте импульсивных решений, всё тщательно обдумайте.",
    "Благоприятный период для творческой реализации.",
    "Возможны мелкие бытовые хлопоты - проявите терпение.",
    "День хорош для планирования будущих проектов.",
    "Проявите щедрость - это вернётся вам сторицей.",
    "Избегайте переутомления, найдите время для отдыха.",
    "Ваша энергия на пике - используйте этот день продуктивно.",
    "Возможны недопонимания в личных отношениях.",
    "День подходит для решения юридических вопросов.",
    "Звёзды советуют проявить дипломатичность.",
    "Хорошее время для инвестиций и сбережений.",
    "Избегайте спонтанных трат, контролируйте бюджет.",
    "День благоприятен для командировок и поездок.",
    "Проявите внимание к здоровью - возможны перегрузки.",
    "Ваша харизма на высоте - используйте это в общении.",
    "День хорош для завершения старых дел.",
    "Возможны творческие озарения - запишите свои идеи.",
    "Избегайте ненужного риска, действуйте расчётливо.",
    "Благоприятный период для романтических знакомств.",
    "Сосредоточьтесь на семейных вопросах.",
    "Подведите итоги месяца и составьте планы на будущее.",
  ],
  Taurus: [
    "Возможны недопонимания в личных отношениях.",
    "День хорош для завершения старых дел.",
    "Проявите терпение в общении с близкими.",
    "Возможны мелкие бытовые хлопоты - проявите терпение.",
    "День хорош для планирования будущих проектов.",
    "Проявите щедрость - это вернётся вам сторицей.",
    "Избегайте переутомления, найдите время для отдыха.",
    "Ваша энергия на пике - используйте этот день продуктивно.",
    "Возможны недопонимания в личных отношениях.",
    "День подходит для решения юридических вопросов.",
    "Звёзды советуют проявить дипломатичность.",
    "Хорошее время для инвестиций и сбережений.",
    "Избегайте спонтанных трат, контролируйте бюджет.",
    "День благоприятен для командировок и поездок.",
    "Проявите внимание к здоровью - возможны перегрузки.",
    "Ваша харизма на высоте - используйте это в общении.",
    "День хорош для завершения старых дел.",
    "Возможны творческие озарения - запишите свои идеи.",
    "Избегайте ненужного риска, действуйте расчётливо.",
    "Благоприятный период для романтических знакомств.",
    "Сосредоточьтесь на семейных вопросах.",
    "Подведите итоги месяца и составьте планы на будущее.",
  ],
};

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

  const birthDate = new Date(birthDateInput);
  const currentDate = new Date();

  // Получение знака зодиака
  const zodiacSingKey = getZodiacSign(birthDate);
  const zodiacSingInfo = zodiacSingDB[zodiacSingKey];

  generateMonthHoroscope(currentDate, zodiacSingKey);

  // радиокнопки
  // const selectedDay = document.querySelector(
  //   "input[type='radio']:checked"
  // ).value;

  // Текст гороскопа
  // let horoscopeText = "";

  // if (!horoscopes[selectedDay][zodiacSingKey]) {
  //   horoscopeText = "Гороскоп не готов";
  // }

  // Вывод гороскопа
  // document.querySelector(
  //   ".result"
  // ).innerHTML = `<h1>${zodiacSingInfo.russianName}</h1>
  //   <p>${horoscopeText}</p>
  // `;
}

// Генерация горосокопа на месяц
function generateMonthHoroscope(currentDate, sign) {
  // let dateNumber = new Date(date).getDate();
  let monthNumber = new Date(currentDate).getMonth();
  let yearNumber = new Date(currentDate).getFullYear();

  const datesArrForDB = generateMonthDays(yearNumber, monthNumber);

  console.log(`Гороскоп для ${zodiacSingDB[sign].russianName} на месяц:`);
  console.log("Даты месяца:", horoscopes);

  // Генерация гороскопа
  if (datesArrForDB) {
    datesArrForDB.map((date) => {
      horoscopes[date] = {
        [sign]: zodiacSignHoroscope[sign],
      };
    });
  }

  for (let horocope in horoscopes) {
    console.log(horocope, horoscopes[horocope]);
  }

  return datesArrForDB;
}

// Генерация дат месяца
function generateMonthDays(year, month) {
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  let datesArr = [];

  for (let day = 1; day <= daysInMonth; day++) {
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
