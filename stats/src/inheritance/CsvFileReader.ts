import fs from "fs";

export default abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public filename: string) {
    }

    read(): void {
        const csvData = fs.readFileSync(this.filename, {encoding: "utf-8"})
        this.data = csvData.split("\n").map((row: string): string[] => row.split(",")).map(this.mapRow);
    }

    abstract mapRow(row: string[]): T;
}