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
  TRSPO_LK: new Subject('ТРиСПО', star, LK),
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
      5: SUBJECTS.NST_PZ,
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
      5: SUBJECTS.NST_PZ,
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
  showTodayTomorrow();
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
function showTodayTomorrow() { //Main function
  let weekD = getId('week');
  let nowD = new Date();
  let numberW = getWeek(nowD);
  weekD.children[0].innerHTML = `Сейчас ${numberW} неделя`
  let scheduleWeek = getScheduleWeek(numberW);

  nowD = setDay(nowD); // set working day

  createScheduale( getScheduleToday(nowD, scheduleWeek), 'today', nowD);
  getId(`datetoday`).innerHTML = ``;
  nowD.setDate(nowD.getDate() + 1);
  createScheduale( getScheduleToday(nowD, scheduleWeek), 'tomorrow', nowD);
  getId(`datetomorrow`).innerHTML = ``;
}

function showFullWeek() {
  let nowD = new Date();
  switch (nowD.getDay()) {
    case 6:
    nowD = new Date(nowD.setDate(nowD.getDate() + 2));  
    break;
    case 0:
    nowD = new Date(nowD.setDate(nowD.getDate() + 1));  
    break;
    case 1:
    nowD = new Date(nowD);  
    break;
    default:
    nowD = new Date(nowD.setDate(nowD.getDate() - (nowD.getDay() - 1)));
    break;
  }
  let numberW = getWeek(nowD);
  let scheduleWeek = getScheduleWeek(numberW);
  createDivsForFullWeek();
  for (let i = 1; i < 6; i++) {
    createScheduale( getScheduleToday(nowD, scheduleWeek), `${i}${i}`, nowD);
    nowD.setDate(nowD.getDate() + 1);
  }
}

// for Full Week
function createDivsForFullWeek() {
  getId('today').remove();
  getId('tomorrow').remove();
  for (let i = 1; i < 6; i++) {
    let div = createElem('div');
    div.id = `${i}${i}`;
    div.className = 'schedule header-h1';
    getId('main').appendChild(div);
    let datediv = createElem('h1');
    datediv.id = `date${i}${i}`;
    datediv.className = 'title';
    div.appendChild(datediv);
  }
}

// for Today and Tomorrow
function createScheduale(scheduleToday, day, date) { 
  createFields(day);
  let mounth = getMounth(date);
  getId(`date${day}`).innerHTML = `${date.getDate()} ${mounth}`;
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
  let pareLeft = getId(id).firstChild;
  let pareRight = getId(id).lastChild;
  if (pare !== null) {
    // Название
    let namePare = createElem('p'); 
    namePare.innerHTML = `${pare.name}`;
    namePare.className += 'namePare ';
    pareLeft.appendChild(namePare);
    // Кто проверяет журнал
    let cheakerPare = createElem('p'); 
    cheakerPare.innerHTML = `${pare.cheakerMissingMan}`;
    cheakerPare.className += 'cheaker ';
    pareRight.appendChild(cheakerPare);
    // Тип
    let typePare = createElem('p'); 
    typePare.innerHTML = `${pare.type}`;
    typePare.className += 'typePare ';
    pareRight.appendChild(typePare);
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
  
  p = createElem('p');
  p.className = 'date';
  p.id = `date${day}`;
  dayDiv.appendChild(p);

  entire = createElem('div');
  entire.className = 'entire';
  dayDiv.appendChild(entire);

  for (let i = 0; i < 6; i++) {
    let pare = createElem('div');
    pare.setAttribute('class', 'pare');
    pare.setAttribute('id', `${day}pare${i}`);
    dayDiv.insertBefore(pare, dayDiv.lastChild);

    let pareLeft = createElem('div');
    pareLeft.setAttribute('class', 'pareLeft');
    pare.appendChild(pareLeft);

    let pareRight = createElem('div');
    pareRight.setAttribute('class', 'pareRight');
    pare.appendChild(pareRight);

    let p = createElem('p');
    p.className = 'pareTime';
    switch (i) {
      case 0: p.innerHTML = '8:00 - 9:40';
      break;
      case 1: p.innerHTML = '9:55 - 11:35';
      break;
      case 2: p.innerHTML = '12:15 - 13:55';
      break;
      case 3: p.innerHTML = '14:10 - 15:50';
      break;
      case 4: p.innerHTML = '16:20 - 18:00';
      break;
      case 5: p.innerHTML = '18:15 - 19:55';
      break;
    }
    pareLeft.appendChild(p);
  }
}

function getScheduleToday(date, scheduleWeek) {
  if (date.getDay() < 1 || date.getDay > 5) {
    throw new Error('function getScheduleToday() get bad data');
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
  let difference = now - first
  result = Math.ceil(((difference)/1000/3600/24/7)%4);
  if (result == 0) {
    return 4;
  } else {
    return result;
  }
}  