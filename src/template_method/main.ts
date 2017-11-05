import { AbstractDisplay } from './abstractDisplay'
import { StringDisplay } from './stringDisplay'

var d1: AbstractDisplay = new StringDisplay("hogehoge");

d1.display();
