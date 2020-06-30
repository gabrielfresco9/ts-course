import MatchReader from "./MatchReader";
import Summary from "./Summary";

const matchReader = MatchReader.createCsvMatchReader('/home/gabi/courses/typescript/stats/build/football.csv')
const summary = Summary.createWinsHtmlSummary('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);