/**
 * Created by Administrator on 2016/9/11 0011.
 */

var http = require('http');

//��������
var server = http.createServer();

//ע������
server.on('request',function(request,response){
    console.log(123);
    response.write('hellow write');
    response.end();
});

//�����˿�
server.listen(3000);