/**
 * Created by Administrator on 2016/9/12 0012.
 */
var obj = require('./init.js');
var param = process.argv[2];

switch (param){
    case 'init':
        //ʵ�ֳ�ʼ������
        obj.init();
        break;
    case '-v':
        console.log('�汾��Ϣ');
        break;
    case '-h':
        console.log('������Ϣ');
        break;
}