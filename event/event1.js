const EventEmitter = require('events');

let emitter = new EventEmitter();

//핸들러, 리스너 등록 > 두 문장 같은 역할
emitter.addListener('event1', func_print);
emitter.on('event1', func_print);
//한 번만 유효한 이벤트 > 실행 후 자동 제거 
emitter.once('event1', func_print); 

//이벤트 발생
emitter.emit('event1','메세지1');
emitter.emit('event1','메세지2');

//이벤트 제거
emitter.removeListener('event1', func_print);
emitter.emit('event1','메세지3');

function func_print(msg){
    console.log("내용 : ",msg);
}