import fs from "fs";

export default class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {
    }

    read(): void {
        const csvData = fs.readFileSync(this.filename, {encoding: "utf-8"})
        this.data = csvData.split("\n").map((row: string): string[] => row.split(","));
    }
}