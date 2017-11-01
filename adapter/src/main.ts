import { PrintBanner } from './printBanner'
import { Print } from './print'

const p: Print = new PrintBanner("Hello");

p.printWeak();
p.printStrong();