import { Manager } from "./manager";
import { MessageBox } from './messageBox';
import { Product } from './product';
import { UnderlinePen } from './underlinePen';

var manager: Manager = new Manager();
var upen: UnderlinePen = new UnderlinePen("~");
var mbox: MessageBox = new MessageBox("*");
var sbox: MessageBox = new MessageBox("/");

manager.register("strong message", upen);
manager.register("warning box", mbox);
manager.register("slash box", sbox);

var p1: Product = manager.create("strong message")
var p2: Product = manager.create("warning box");
var p3: Product = manager.create("slash box");

p1.use("Hello world.");
p2.use("Hello world.");
p3.use("Hello world.");

