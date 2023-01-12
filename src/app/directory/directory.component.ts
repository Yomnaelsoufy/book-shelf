import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  linkList: any[] = [];

  constructor(
    private linkService: LinkService,
    private bookmarkService: BookmarkService
  ) {}

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

  addToBookmarks(bookmark: object): void {
    this.bookmarkService.addToBookmarks(bookmark);
    alert('Added!');
  }
}
