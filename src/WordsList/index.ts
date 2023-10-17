import Column from "./Column";
import Filters from "./Filters";
import refresh from "./refresh";

export { default as Column, getColumnReadable } from "./Column";
export type { default as Filters } from "./Filters";

export default class WordsList {
	private columns: Column[];
	private filters: Filters;
	private sortBy: Column;
	private sortDirection: "asc" | "desc";
	private records: string[][];

	public constructor(columns: Column[]) {
		this.columns = columns;
		this.filters = {};
		this.records = [];
		this.sortBy = Column.Id;
		this.sortDirection = "asc";
	}

	public cloneRecordless(): WordsList {
		const clone = new WordsList(this.columns);
		clone.filters = this.filters;
		clone.sortBy = this.sortBy;
		clone.sortDirection = this.sortDirection;
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

	public setSortBy(column: Column): void {
		this.sortBy = column;
	}

	public getSortBy(): Column {
		return this.sortBy;
	}

	public setSortDirection(direction: "asc" | "desc"): void {
		this.sortDirection = direction;
	}

	public getSortDirection(): "asc" | "desc" {
		return this.sortDirection;
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
		this.records = await refresh(this.columns, this.filters, this.sortBy, this.sortDirection);
		console.log("After refresh:");
		console.log(Date.now());
	}
}
