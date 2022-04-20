const {exec} = require('child_process');

exec("cd data && http-server . --cors");
