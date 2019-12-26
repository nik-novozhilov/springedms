import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Document } from '../models/document';
import { DocumentService } from '../services/document.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styles: []
})
export class DocumentComponent implements OnInit {

  documents: Observable<Document[]>;

  constructor(private router: Router, private documentService: DocumentService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.documents = this.documentService.getDocumentList();
  }

  deleteDocument(id: number) {
    this.documentService.deleteDocument(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

/*  deleteDocument(document: Document): void {
    this.documentService.deleteDocument(document)
      .subscribe( data => {
        this.documents = this.documents.filter(u => u !== document);
      });
  }*/

}
