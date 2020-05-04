import { v4 as uuidv4 } from 'uuid';

const students = [
  {
    firstName: 'John',
    secondName: 'Johnson',
    birthday: '1978-02-23',
    email: 'johnjohnson@yahoo.com',
  },
  {
    firstName: 'Leanne',
    secondName: 'Graham',
    birthday: '1988-08-14',
    email: 'leanne88@gmail.com',
  },
  {
    firstName: 'Ervin',
    secondName: 'Howell',
    birthday: '1956-03-08',
    email: 'shadow.warrior@yahoo.com',
  },
  {
    firstName: 'Bauch',
    secondName: 'Clementine',
    birthday: '2002-12-29',
    email: 'miss.bauch@gmail.com',
  },
  {
    firstName: 'Patricia',
    secondName: 'Labsak',
    birthday: '1997-01-07',
    email: 'patricialabsak@gmail.com',
  },
  {
    firstName: 'Dennis',
    secondName: 'Schulz',
    birthday: '1973-05-18',
    email: 'dennisschulz@gmail.com',
  },
  {
    firstName: 'Kasey',
    secondName: 'Neistat',
    birthday: '1987-09-03',
    email: 'kasey.nyc@neistat.com',
  },
  {
    firstName: 'Glenna',
    secondName: 'Reichert',
    birthday: '2005-10-11',
    email: 'me@reicher.me',
  },
  {
    firstName: 'Elon',
    secondName: 'Musk',
    birthday: '1971-04-26',
    email: 'ceo@tesla.com',
  },
  {
    firstName: 'Peter',
    secondName: 'Jackson',
    birthday: '1964-07-30',
    email: 'hobbit@weta.nz',
  },
  {
    firstName: 'Andrew',
    secondName: 'Stampton',
    birthday: '1976-03-17',
    email: 'andrew@gmail.com',
  },
  {
    firstName: 'Helen',
    secondName: 'Mortensen',
    birthday: '1994-11-11',
    email: 'helen007@yahoo.com',
  },
];

students.forEach((student) => {
  // eslint-disable-next-line
  student.id = uuidv4();
});

export default students;
