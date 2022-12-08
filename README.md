
# User Authentication

This project handles user registration and logging.



## Screenshots

![App Screenshot](https://media.discordapp.net/attachments/853157623846141952/1050349269699268628/image.png)

![App Screenshot](https://media.discordapp.net/attachments/853157623846141952/1050349336095105124/image.png?width=918&height=615)

![App Screenshot](https://media.discordapp.net/attachments/853157623846141952/1050349369850859540/image.png?width=920&height=615)


## Demo

Insert gif or link to demo


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Please fill <> with your details also don't include <> for example.

`JWT_SECRET=<secret>` X

`JWT_SECRET=secret` O

`PORT=5000`

`NODE_ENV=DEVELOPMENT`

`JWT_SECRET=<some-secret-of-your-choice>`

`JWT_EXPIRE_TIME=7d`

`COOKIE_EXPIRE_TIME=7d`

`DB_URI=<your-mongo-uri>`


## Run Locally

Clone the project

```bash
  git clone https://github.com/rhinoxD/user-authentication.git
```

Go to the project directory

```bash
  cd user-authentication
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Go to http://localhost:3000 to access the application.

## Tech Stack

**Client:** React, Redux, Bootstrap

**Server:** Node, Express


## License

[MIT](https://choosealicense.com/licenses/mit/)

