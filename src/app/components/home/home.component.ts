
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { StepInterfaceArray } from '../../model/api.model'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class Home implements OnInit {
    title = 'frontEndTest';

    public sortedArray:any = [];
    public sortedArrayDate:any = [];
    public versionContent: any;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {

        this.fetchData()

    }

    fetchData(): void {
        this.apiService.getApiData().subscribe((response: any) => {
            this.sortedArray = this.sortStepNumberAndVersionContent(response);
        }, (error: any) => {
            console.log(error);
        });
    }

    sortStepNumberAndVersionContent(response: any) {
        const compare = (a: any, b: any) => {
            const a1 = a.stepNumber;
            const b1 = b.stepNumber;
            let comparision = 0;
            if (a1 > b1) {
                comparision = 1;
            } else if (a1 < b1) {
                comparision = -1;
            }
            return comparision;
        }
        const unsortedVersionContent = response.sort(compare);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < unsortedVersionContent.length; i++) {
            const versionCOntent = unsortedVersionContent[i].versionContent;
            function compareDate(a: any, b: any) {
                const dateA = +new Date(a.effectiveDate);
                const dateB = +new Date(b.effectiveDate);
                return dateA - dateB;
            }
            versionCOntent.sort(compareDate);
            unsortedVersionContent[i].versionContent = versionCOntent[0];
        }
        return unsortedVersionContent;
    }
}
