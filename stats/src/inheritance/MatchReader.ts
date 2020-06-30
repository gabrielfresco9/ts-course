import CsvFileReader from "./CsvFileReader";
import {MatchResult} from "../MatchResults";
import {parseDate} from '../utils';

type MatchRow = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
]
export default class MatchReader extends CsvFileReader<MatchRow> {
    constructor(public filename: string) {
        super(filename);
    }

    mapRow(row: string[]): MatchRow {
        return [
            parseDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}