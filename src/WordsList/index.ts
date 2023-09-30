import Column from "./Column";
import Filters from "./Filters";
import refresh from "./refresh";

export { default as Column, getColumnReadable } from "./Column";
export type { default as Filters } from "./Filters";

export default class WordsList {
	private columns: Column[];
	private filters: Filters;
	private records: string[][];

	public constructor(columns: Column[]) {
		this.columns = columns;
		this.filters = {};
		this.records = [];
	}

	public cloneRecordless(): WordsList {
		const clone = new WordsList(this.columns);
		clone.filters = this.filters;
		return clone;
	}

	public getColumns(): Column[] {
		return this.columns;
	}

	public toggleColumn(column: Column): void {
		if (this.columns.includes(column))
			this.columns.splice(this.columns.indexOf(column), 1);
		else this.columns.push(column);

		this.columns.sort((a, b) => a - b);
	}

	public getFilters(): Filters {
		return this.filters;
	}

	public setFilters(filters: Filters): void {
		this.filters = filters;
	}

	public getRecords(): string[][] {
		return this.records;
	}

	public totalRecords(): number {
		return this.records.length;
	}

	public async runRefresh(): Promise<void> {
		console.log("Before refresh:");
		console.log(Date.now());
		this.records = await refresh(this.columns, this.filters);
		console.log("After refresh:");
		console.log(Date.now());
	}
}
