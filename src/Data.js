import { v4 as uuidv4 } from 'uuid';

const students = [
  {
    firstName: 'John',
    secondName: 'Johnson',
    birthday: '02/23/1978',
  },
  {
    firstName: 'Leanne',
    secondName: 'Graham',
    birthday: '08/14/1988',
  },
  {
    firstName: 'Ervin',
    secondName: 'Howell',
    birthday: '03/08/1956',
  },
  {
    firstName: 'Bauch',
    secondName: 'Clementine',
    birthday: '12/29/2002',
  },
  {
    firstName: 'Patricia',
    secondName: 'Labsak',
    birthday: '01/07/1997',
  },
  {
    firstName: 'Dennis',
    secondName: 'Schulz',
    birthday: '05/18/1973',
  },
  {
    firstName: 'Kasey',
    secondName: 'Neistat',
    birthday: '09/03/1987',
  },
  {
    firstName: 'Glenna',
    secondName: 'Reichert',
    birthday: '10/11/2005',
  },
  {
    firstName: 'Elon',
    secondName: 'Musk',
    birthday: '04/26/1971',
  },
  {
    firstName: 'Peter',
    secondName: 'Jackson',
    birthday: '07/30/1964',
  },
  {
    firstName: 'Andrew',
    secondName: 'Stampton',
    birthday: '03/17/1976',
  },
  {
    firstName: 'Helen',
    secondName: 'Mortensen',
    birthday: '11/11/1994',
  },
];

students.forEach((student) => {
  // eslint-disable-next-line
  student.id = uuidv4();
});

export default students;
