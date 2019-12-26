import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Document } from '../models/document';
import { DocumentService } from '../services/document.service';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  form: any = {};
  success = false;
  response: string;
  errorMessage = '';
  document: Document = new Document();

  company: Company = new Company();
  companies: Observable<Company[]>;

  constructor(private router: Router, private documentService: DocumentService, private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.listCompany();
  }

  createDocument(): void {
    console.log(this.form);

    this.documentService.createDocument(this.document).subscribe(
      data => {
        console.log(data);
        const userStr = JSON.stringify(data);
        JSON.parse(userStr, (key, value) => {
          if (typeof value === 'string') {
            this.response = value.toUpperCase();
          }
          return value;
        });
        this.success = true;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.success = false;
      }
    );
  }

  listCompany() {
    this.companies = this.companyService.getCompanies();
  }

  return(): void {
    this.router.navigate(['/', 'documents']);
  }
}


