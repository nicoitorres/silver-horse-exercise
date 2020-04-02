import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AlbumsService } from 'src/app/support/api/albums.service';
import { PostsService } from 'src/app/support/api/posts.service';
import { Post } from 'src/app/support/Post';
import { Album } from 'src/app/support/Album';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnDestroy, OnInit {

  constructor(private albumService: AlbumsService, private postService: PostsService, private modalService: NgbModal) { }

  @Input() public userId: number;
  @Input() public type: string;

  loading: boolean;
  userPosts: Post[];
  userAlbums: Album[];
  private ngUnsubscribe = new Subject();


  ngOnInit(): void {
    this.loading = true;
    if (this.type === "posts") this.loadUserPosts();
    else if (this.type === "albums") this.loadUserAlbums();
  }

  loadUserPosts() {
    this.postService.getUserPosts(this.userId).pipe(takeUntil(this.ngUnsubscribe)).subscribe(resp => {
      this.userPosts = resp;
      this.loading = false;
    }, error => {
      this.loading = false;

    });
  }

  loadUserAlbums() {
    this.albumService.getUserAlbums(this.userId).pipe(takeUntil(this.ngUnsubscribe)).subscribe(resp => {
      this.userAlbums = resp;
      this.loading = false;
    }, error => {
      this.loading = false;

    });
  }

  addItem(type: string) {
    const addItemModal = this.modalService.open(AddItemModalComponent, { windowClass: 'modal-md', backdrop: 'static', keyboard: false });
    addItemModal.componentInstance.type = type;
    addItemModal.componentInstance.userId = this.userId;
    addItemModal.result.then(resp => {
      if (type === 'post')
        this.userPosts.unshift(resp);
      else if (type === 'album')
        this.userAlbums.unshift(resp);
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}
}
