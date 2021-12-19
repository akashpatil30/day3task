const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter rows', (rows) => {
    diamond(rows);
    rl.close();
  });

function diamond(rows){
    var str="";
    for(var i=0;i<rows;i++){
        for(var j=rows;j>i;j--){
            str+=" ";
        }
        for(var k=0;k<=i;k++){
            str+=" *";
        }
        str+="\n";
    }
    for(var i=rows;i>0;i--){
        for(var k=rows;k>=i;k--){
            str+=" ";
        }
        for(var j=0;j<i;j++){
            str+=" *";
        }
        str+="\n";
    }
    console.log(str);
}

