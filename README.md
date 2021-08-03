# Football web game

This repository contains the code for the online 2D football game.
It is based on the [desktop] client.

[desktop]: https://github.com/lipinskipawel/LAN-Game

## Local development

This project is using `json-server` in order to mock the server responses. Run
following command:

```
npx json-server --watch data/db.json --port 8000
```

In a separate terminal window start the application by:

```
npm start
```

and open browser at http://localhost:3000 to see the application.
