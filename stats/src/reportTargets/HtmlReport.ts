import fs from 'fs';
import {OutputTarget} from "../Summary";

export default class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
            <div>
               <h1>Analysis report</h1> 
               <p>${report}</p>
            </div>`;

        fs.writeFileSync('report.html', html);
    }
}