const horoscopes = {
  today: {
    Aries:
      "Сегодня Овнам стоит утром браться за плевые дела, которые можно решить за секунду. Не нужно работать над тем, что дается с трудом и тратит много нервов – вы измотаетесь. Гороскоп на сегодня для знака Овна советует вечером браться за что-то новенькое и интересное – общение с людьми вдохнет в вас новые силы, которых хватит на все планы с лихвой. Не теряйте это время.Сегодня Овнам стоит утром браться за плевые дела, которые можно решить за секунду. Не нужно работать над тем, что дается с трудом и тратит много нервов – вы измотаетесь. Гороскоп на сегодня для знака Овна советует вечером браться за что-то новенькое и интересное – общение с людьми вдохнет в вас новые силы, которых хватит на все планы с лихвой. Не теряйте это время.",
    Taurus:
      "Сегодня Тельцам стоит начать день мягко и спокойно – не нужно торопиться или прыгать выше головы. Вам необходимо насладиться каждым глотком кофе и каждым словом близкого человека за завтраком. Гороскоп на сегодня для знака Тельца советует больше мечтать – даже если ваши грезы будут слишком далеки от реальности, важно крутить их в голове, ведь это настроит и вдохновит на новые победы.",
    Twins: "",
    Cancer: "",
    Leo: "",
    Virdo: "",
    Libra: "",
    Scorpio: "",
    Sagittarius: "",
    Capricorn: "",
    Aquarius: "",
    Pisces: "",
  },
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

  // Получение знака зодиака
  const zodiacSingKey = getZodiacSign(birthDate);
  const zodiacSingInfo = zodiacSingDB[zodiacSingKey];

  // Вывод гороскопа
  document.querySelector(".result").innerHTML = `
  <h3>${zodiacSingInfo.russianName}</h3>`;
}

const getHoroscopeBtn = document.querySelector(".getHoroscope");

getHoroscopeBtn.addEventListener("click", showHoroscope);
