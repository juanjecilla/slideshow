ObjC.import('CoreGraphics');
function post(t,x,y){ const e=$.CGEventCreateMouseEvent(null,t,{x:x,y:y},0); $.CGEventPost($.kCGHIDEventTap,e); }
function run(argv){ const x=+argv[0], y=+argv[1];
  post($.kCGEventMouseMoved,x,y); delay(0.3); post($.kCGEventMouseMoved,x+1,y+1); delay(0.2);
  post($.kCGEventLeftMouseDown,x+1,y+1); delay(0.1); post($.kCGEventLeftMouseUp,x+1,y+1); }
