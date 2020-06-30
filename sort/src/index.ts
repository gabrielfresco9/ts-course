import Sorter from "./Sorter";
import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numberCollection = new NumbersCollection([10, 2, -15, 25]);
const charsCollection = new CharactersCollection("gabi");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(31);
linkedList.add(67);
linkedList.add(-89);

linkedList.sort();
linkedList.print();