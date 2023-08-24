import { createContext } from "react";

import getWordsByIds from "@/actions/getWordsByIds";

export class Scratchpad {
	private recordIds: number[];
	private records: string[][];

	public constructor() {
		this.recordIds = [];
		this.records = [];
	}

	public cloneRecordless(): Scratchpad {
		let out = new Scratchpad();
		out.recordIds = this.recordIds;
		return out;
	}

	public addRecord(recordId: number): void {
		this.recordIds.push(recordId);
	}

	public removeRecord(recordId: number): void {
		this.recordIds = this.recordIds.filter((id) => id !== recordId);
	}

	public async refreshRecords(): Promise<void> {
		let newRecords = await getWordsByIds(this.recordIds);
		this.records = [];
		newRecords.forEach((record) => {
			this.records.push([
				record.id.toString(),
				record.english,
				record.language,
				record.sonetic,
				record.notes,
			]);
		});
	}

	public getRecords(): string[][] {
		return this.records;
	}
}

interface ScratchpadContext {
	scratchpad: Scratchpad;
	setScratchpad: (scratchpad: Scratchpad) => void;
}

const Context = createContext<ScratchpadContext>({
	scratchpad: new Scratchpad(),
	setScratchpad: () => {},
});

export default Context;
