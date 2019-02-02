class Subject {
  constructor(name, cheakerMissingMan, type) {
    this.name = name;
    this.cheakerMissingMan = cheakerMissingMan;
    this.type = type;
  }
}

const teacher = 'Препод';
const star = 'Староста';

const LR = 'ЛР';
const LK = 'ЛК';
const PZ = 'ПЗ';

const SUBJECTS = {
  KPIJP_LK: new Subject('КПиЯП', teacher, LK),
  KPIJP_LR: new Subject('КПиЯП', teacher, LK),
  KPIJP_PZ: new Subject('КПиЯП', teacher, PZ),
  INJGRA_LK: new Subject('ИГ', teacher, LK),
  INJGRA_PZ: new Subject('ИГ', teacher, PZ),
  FIZRA_LK: new Subject('Физ-ра', star, LK),
  SUBD_LK: new Subject('СУБД', teacher, LK),
  SUBD_LR: new Subject('СУБД', teacher, LR),
  Ist_LK: new Subject('ИстНиТ', teacher, LK),
  Ist_PZ: new Subject('ИстНиТ', teacher, PZ),
  B_LK: new Subject('БезЖЧ', teacher, LK),
  B_PZ: new Subject('БезЖЧ', teacher, PZ),
  TT_LK: new Subject('ТеорияТТ', teacher, LK),
  TT_PZ: new Subject('ТеорияТТ', teacher, PZ),
  TT_LR: new Subject('ТеорияТТ', teacher, LR),
  TES_LK: new Subject('ТЭЦ', teacher, LK),
  TES_PZ: new Subject('ТЭЦ', teacher, PZ),
  TES_LR: new Subject('ТЭЦ', teacher, LR),
  TRSPO_LK: new Subject('ТРиСПО', teacher, LK),
  TRSPO_PZ: new Subject('ТРиСПО', teacher, PZ),
  TRSPO_LR: new Subject('ТРиСПО', teacher, LR),
  NST_LK: new Subject('НСТ', teacher, LK),
  NST_PZ: new Subject('НСТ', teacher, PZ),
  NST_LR: new Subject('НСТ', teacher, LR),
  Eng_LK: new Subject('Англ', teacher, LK),
  Null: null
};
const SCHEDULE = {
  1: {
    1: {
      0: SUBJECTS.KPIJP_LK,
      1: SUBJECTS.FIZRA_LK,
      2: SUBJECTS.INJGRA_LK,
      3: SUBJECTS.SUBD_LK,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
    2: {
      0: SUBJECTS.Ist_LK,
      1: SUBJECTS.Ist_PZ,
      2: SUBJECTS.TRSPO_LK,
      3: SUBJECTS.Null,
      4: SUBJECTS.TES_LK,
      5: SUBJECTS.Null,
    },
    3: {
      0: SUBJECTS.Null,
      1: SUBJECTS.FIZRA_LK,
      2: SUBJECTS.TRSPO_PZ,
      3: SUBJECTS.TRSPO_LK,
      4: SUBJECTS.NST_LK,
      5: SUBJECTS.NST_PZ,
    },
    4: {
      0: SUBJECTS.Eng_LK,
      1: SUBJECTS.TT_LK,
      2: SUBJECTS.NST_LR,
      3: SUBJECTS.NST_LR,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
    5: {
      0: SUBJECTS.Null,
      1: SUBJECTS.Null,
      2: SUBJECTS.KPIJP_LR,
      3: SUBJECTS.KPIJP_LR,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
  },
  2: {
    1: {
      0: SUBJECTS.KPIJP_LK,
      1: SUBJECTS.FIZRA_LK,
      2: SUBJECTS.INJGRA_PZ,
      3: SUBJECTS.SUBD_LK,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
    2: {
      0: SUBJECTS.B_LK,
      1: SUBJECTS.B_PZ,
      2: SUBJECTS.TRSPO_LK,
      3: SUBJECTS.TT_PZ,
      4: SUBJECTS.TES_LK,
      5: SUBJECTS.Null,
    },
    3: {
      0: SUBJECTS.Null,
      1: SUBJECTS.FIZRA_LK,
      2: SUBJECTS.TRSPO_PZ,
      3: SUBJECTS.TRSPO_LK,
      4: SUBJECTS.NST_LK,
      5: SUBJECTS.Null,
    },
    4: {
      0: SUBJECTS.KPIJP_PZ,
      1: SUBJECTS.TT_LK,
      2: SUBJECTS.Null,
      3: SUBJECTS.Null,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
    5: {
      0: SUBJECTS.Null,
      1: SUBJECTS.TES_PZ,
      2: SUBJECTS.TRSPO_LR,
      3: SUBJECTS.TRSPO_LR,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
  },
  3: {
    1: {
      0: SUBJECTS.KPIJP_LK,
      1: SUBJECTS.FIZRA_LK,
      2: SUBJECTS.INJGRA_LK,
      3: SUBJECTS.SUBD_LK,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
    2: {
      0: SUBJECTS.Ist_LK,
      1: SUBJECTS.Ist_PZ,
      2: SUBJECTS.TRSPO_LK,
      3: SUBJECTS.Null,
      4: SUBJECTS.TES_LK,
      5: SUBJECTS.Null,
    },
    3: {
      0: SUBJECTS.Null,
      1: SUBJECTS.FIZRA_LK,
      2: SUBJECTS.TRSPO_PZ,
      3: SUBJECTS.TRSPO_LK,
      4: SUBJECTS.NST_LK,
      5: SUBJECTS.NST_PZ,
    },
    4: {
      0: SUBJECTS.Eng_LK,
      1: SUBJECTS.TT_LK,
      2: SUBJECTS.SUBD_LR,
      3: SUBJECTS.SUBD_LR,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
    5: {
      0: SUBJECTS.TES_LR,
      1: SUBJECTS.TES_LR,
      2: SUBJECTS.TT_LR,
      3: SUBJECTS.TT_LR,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
  },
  4: {
    1: {
      0: SUBJECTS.KPIJP_LK,
      1: SUBJECTS.FIZRA_LK,
      2: SUBJECTS.INJGRA_PZ,
      3: SUBJECTS.SUBD_LK,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
    2: {
      0: SUBJECTS.B_LK,
      1: SUBJECTS.B_PZ,
      2: SUBJECTS.TRSPO_LK,
      3: SUBJECTS.TT_PZ,
      4: SUBJECTS.TES_LK,
      5: SUBJECTS.Null,
    },
    3: {
      0: SUBJECTS.Null,
      1: SUBJECTS.FIZRA_LK,
      2: SUBJECTS.TRSPO_PZ,
      3: SUBJECTS.TRSPO_LK,
      4: SUBJECTS.NST_LK,
      5: SUBJECTS.Null,
    },
    4: {
      0: SUBJECTS.KPIJP_PZ,
      1: SUBJECTS.TT_LK,
      2: SUBJECTS.Null,
      3: SUBJECTS.Null,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
    5: {
      0: SUBJECTS.Null,
      1: SUBJECTS.TES_PZ,
      2: SUBJECTS.TRSPO_LR,
      3: SUBJECTS.TRSPO_LR,
      4: SUBJECTS.Null,
      5: SUBJECTS.Null,
    },
  },
};

window.onload = () => {
  getId('load').style.visibility = "hidden";
  setTimeout(() => {
    //getId('load').style.visibility = "hidden";
  }, 2000)
  setWeek();
}
//
function getId(id) {
  return document.getElementById(id);
}
function createElem(name) {
  return document.createElement(name);
}
function getMounth(date) {
  switch (date.getMonth()) {
    case 0:
    return 'Января'
    case 1:
    return 'Февраля'
    case 2:
    return 'Марта'
    case 3:
    return 'Апреля'
    case 4:
    return 'Мая'
    case 5:
    return 'Июня'
    case 6:
    return 'Июля'
    case 7:
    return 'Августа'
    case 8:
    return 'Сентября'
    case 9:
    return 'Октября'
    case 10:
    return 'Ноябра'
    case 11:
    return 'Декабря'
  }
}
function setDay(date) {
  switch (date.getDay()) {
    case 0:
    return new Date(date.setDate(date.getDate() + 1))
    case 6:
    return new Date(date.setDate(date.getDate() + 2))
    default:
    return date;
  }
}
//
function setWeek() { //Main function
  let weekD = getId('week');
  let nowD = new Date();
  let numberW = getWeek(nowD);
  weekD.innerHTML = `Сейчас ${numberW} неделя`
  let scheduleWeek = getScheduleWeek(numberW);

  nowD = setDay(nowD); // set working day

  createScheduale( getScheduleToday(nowD, scheduleWeek), 'today', nowD);
  nowD.setDate(nowD.getDate() + 1);
  createScheduale( getScheduleToday(nowD, scheduleWeek), 'tomorrow', nowD);
}








function createScheduale(scheduleToday, day, date) { 
  let text = `date${day}`;
  let mounth = getMounth(date);
  getId(`date${day}`).innerHTML = `${date.getDate()} ${mounth}`;
  createFields(day);
  fillFields(scheduleToday, day);

}

function fillFields(scheduleToday, day) {
  let i = 0;
  for (let key in scheduleToday) {
    fillField(scheduleToday[key], `${day}pare${i}`, i, day);
    i++;
  }
}

function fillField(pare, id, i, day) { // fill and draw filed
  let div = getId(id);
  
  if (pare !== null) {
    // Название
    let namePare = createElem('p'); 
    namePare.innerHTML = `${pare.name}`;
    namePare.className += 'namePare ';
    div.appendChild(namePare);
    // Кто проверяет журнал
    let cheakerPare = createElem('p'); 
    cheakerPare.innerHTML = `${pare.cheakerMissingMan}`;
    cheakerPare.className += 'cheaker ';
    div.appendChild(cheakerPare);
    // Тип
    let typePare = createElem('p'); 
    typePare.innerHTML = `${pare.type}`;
    typePare.className += 'typePare ';
    div.appendChild(typePare);
    // Colors
    if ((pare.cheakerMissingMan == teacher && pare.type ==  LK) || 
        (pare.cheakerMissingMan == star && pare.type == PZ)) {
      div.className += ' orangeDanger';
    } else if ((pare.cheakerMissingMan == star && pare.type == LK) || 
               (pare.name == 'Физ-ра')) {
      div.className += ' greenDanger';
    } else {
      div.className += ' redDanger';
    }
  } else {
    let chield = getId(`${day}pare${i}`);
    chield.remove();
  }
}

function createFields(day) { // создание полей
  dayDiv = getId(day);
  for (let i = 0; i < 6; i++) {
    let chield = createElem('div');
    chield.setAttribute('class', 'pare');
    chield.setAttribute('id', `${day}pare${i}`);
    dayDiv.appendChild(chield);
  }
}

function getScheduleToday(date, scheduleWeek) {
  if (date.getDay() < 1 || date.getDay > 5) {
    alert('Сегодня нет пар');
    return;
  }
  let x = date.getDay();
  for (let key in scheduleWeek) {
    if (key == x) {
      return scheduleWeek[key];
    }
  }
}

function getScheduleWeek(num) {
  for (let key in SCHEDULE) {
      if (key == num) {
        return SCHEDULE[key];
      }
  }
}

function getWeek(now) { // посылаешь нужную дату возвращет номер недели
  let first = new Date(2019, 0, 11);
  let now2 = new Date();
  now2.setDate(now.getDate() - first.getDate());
  return Math.ceil(((now2.getDate())/7)%4);
}  