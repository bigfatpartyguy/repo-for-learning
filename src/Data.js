import { v4 as uuidv4 } from 'uuid';

const students = [
  {
    firstName: 'John',
    secondName: 'Johnson',
    birthday: '1978-02-23',
  },
  {
    firstName: 'Leanne',
    secondName: 'Graham',
    birthday: '1988-08-14',
  },
  {
    firstName: 'Ervin',
    secondName: 'Howell',
    birthday: '1956-03-08',
  },
  {
    firstName: 'Bauch',
    secondName: 'Clementine',
    birthday: '2002-12-29',
  },
  {
    firstName: 'Patricia',
    secondName: 'Labsak',
    birthday: '1997-01-07',
  },
  {
    firstName: 'Dennis',
    secondName: 'Schulz',
    birthday: '1973-05-18',
  },
  {
    firstName: 'Kasey',
    secondName: 'Neistat',
    birthday: '1987-09-03',
  },
  {
    firstName: 'Glenna',
    secondName: 'Reichert',
    birthday: '2005-10-11',
  },
  {
    firstName: 'Elon',
    secondName: 'Musk',
    birthday: '1971-04-26',
  },
  {
    firstName: 'Peter',
    secondName: 'Jackson',
    birthday: '1964-07-30',
  },
  {
    firstName: 'Andrew',
    secondName: 'Stampton',
    birthday: '1976-03-17',
  },
  {
    firstName: 'Helen',
    secondName: 'Mortensen',
    birthday: '1994-11-11',
  },
];

students.forEach((student) => {
  // eslint-disable-next-line
  student.id = uuidv4();
});

export default students;
