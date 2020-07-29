ReactJs project

## Clone Project

```
git clone https://github.com/wmrsmile2018/takeoffStaff.git
```

## Installation:

```
cd takeoffStaff/project/
npm install
```

## Run Json-server

Json server work at ```localhost:3000```

```
cd takeoffStaff/db/
npm install -g json-server
json-server --watch db.json -p 3000
```

## Run Project

Project work at ```localhost:8080```

via npm start
```
cd takeoffStaff/project/
npm start
```

via npm run build
```
cd takeoffStaff/project
npm run build
npm install -g serve
serve -l 8080 -s dist
```

## Defalut users
```
user1: {
  username: hello1
  password: 1234
}

user2: {
  username: hello2
  password: 1234
}

user3: {
  username: hello3
  password: 1234
}

user4: {
  username: hello4
  password: 1234
}

user5: {
  username: hello5
  password: 1234
}
```
