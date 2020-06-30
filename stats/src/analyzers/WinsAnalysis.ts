import {Analyzer} from "../Summary";
import {MatchData} from "../MatchData";
import {MatchResult} from "../MatchResults";

export default class WinsAnalysis implements Analyzer {
    constructor(public teamName: string) {
    }

    run(matches: MatchData[]): string {
        let wins = 0;
        matches.forEach(match => {
            if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) wins++;
            else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) wins++;
        })

        return `${this.teamName} won ${wins} games`;
    }
}