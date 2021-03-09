export interface StepInterface {
    stepNumberArray: StepInterfaceArray[];
}

export interface StepInterfaceArray {
 id: string;
 stepNumber: string;
 versionedContent: VersionedContent[];
}

export interface VersionedContent {
 titel: string;
 body: string;
 effectiveDate: string;
}