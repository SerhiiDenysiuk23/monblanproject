let isDatePickerVisible = false;

const options = {
  accentColor: '#3d8eda',
  isDark: false,
  zIndex: 2,
  customClass: ['date-picker'],
  onChange: (calendarify) => console.log(calendarify),
  quickActions: false,
  locale: {
    format: "DD-MM-YYYY",
  },
  onShow: () => { isDatePickerVisible = true; },
  onHide: () => { isDatePickerVisible = false; }
}



const calendarify_to = new Calendarify('#date-to', { ...options })
calendarify_to.init()

const calendarify_from = new Calendarify('#date-from', { ...options })
calendarify_from.init()



let datepickerClose = document.querySelector('.datepicker__close');
let datepickerInput = document.querySelector('#date-from');

datepickerClose.addEventListener('click', function() {
  datepickerInput.value = '';
});




let blockListStyle = document.querySelector('#block-list-style');
let rowListStyle = document.querySelector('#row-list-style');
let cardList = document.querySelector('.card-list');

rowListStyle.addEventListener('click', function() {
  cardList.classList.add('rows');
  cardList.classList.remove('blocks');
  this.classList.add('active');
  blockListStyle.classList.remove('active');
});

blockListStyle.addEventListener('click', function() {
  cardList.classList.add('blocks');
  cardList.classList.remove('rows');
  this.classList.add('active');
  rowListStyle.classList.remove('active');
});