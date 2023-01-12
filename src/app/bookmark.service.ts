import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarkList: object[] = [];

  constructor() {
    this.bookmarkList = [
      {
        id: 5,
        name: 'Angular Twitter',
        url: 'https://twitter.com/angular',
      },
    ];
  }

  getBookmarks() {
    return this.bookmarkList;
  }

  addToBookmarks(bookmark: any) {
    this.bookmarkList.push(bookmark);
    return this.bookmarkList;
  }

  clearBookmarks() {
    this.bookmarkList = [];
    return this.bookmarkList;
  }
}
