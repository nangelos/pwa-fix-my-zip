const db = require('../server/db');
const User = require('../server/db/models/users');
const Issue = require('../server/db/models/issues');
const faker = require('faker');
const issues = ['traffic-light', 'street-light', 'pothole'];
const fixedOptions = [true, false, false, false];

const generateIssue = () => {
  // let imageid = Math.ceil(Math.random() * 400) + '.jpg';
  let email = faker.internet.email();
  let issue = issues[Math.floor(Math.random() * issues.length)];
  let latitude = 41.8 - Math.random() / 100;
  let longitude = -87.64 + Math.random() / 100;
  let fixed = fixedOptions[Math.floor(Math.random() * fixedOptions.length)];
  return {
    // imageid: imageid,
    email: email,
    issueType: issue,
    latitude: latitude,
    longitude: longitude,
    fixed: fixed,
  };
};

User.hasMany(Issue);
Issue.belongsTo(User);

let createThirty = () => {
  let issueArr = [];
  for (var i = 0; i < 30; i++) {
    issueArr.push(generateIssue());
  }
  return issueArr;
};
let issueList = createThirty();

const userList = [
  {
    username: 'nick',
    email: 'nick@nick.nick',
    password: 'nick',
    admin: true,
    phone: '1234567890',
  },
  {
    username: 'brad',
    email: faker.internet.email(),
    password: '123',
  },
  {
    username: 'hector',
    email: faker.internet.email(),
    password: 'and',
    phone: '2125557890',
  },
  {
    username: 'emily',
    email: faker.internet.email(),
    password: 'zeke',
    phone: '2024444444',
  },
  {
    username: 'janice',
    email: faker.internet.email(),
    password: 'jan1',
    admin: true,
    phone: '7732123586',
  },
];

async function seed() {
  try {
    console.log('syncing db....');
    await db.sync({ force: true });

    //CAMPUSES
    const userPromises = userList.map(user => User.create(user));
    const [nick, brad, emily, janice] = await Promise.all(userPromises);
    //STUDENTS

    const issuePromises = issueList.map(issue => Issue.create(issue));
    const issueArray = await Promise.all(issuePromises);
    await issueArray.slice(0, 9).map(issue => issue.setUser(emily));
    await issueArray.slice(9, 18).map(issue => issue.setUser(emily));
    await issueArray.slice(18, 26).map(issue => issue.setUser(janice));
    await issueArray.slice(26).map(issue => issue.setUser(nick));
    console.log('all done');
  } catch (err) {
    console.error(err);
    db.close();
  }
}

seed();
