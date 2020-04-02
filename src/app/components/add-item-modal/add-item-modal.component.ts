import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/support/User';
import { UsersService } from 'src/app/support/api/users.service';
import { Post } from 'src/app/support/Post';
import { Album } from 'src/app/support/Album';
import { PostsService } from 'src/app/support/api/posts.service';
import { AlbumsService } from 'src/app/support/api/albums.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {

  constructor(public modal: NgbActiveModal, private albumService: AlbumsService, private postService: PostsService) { }
  type: string = "";
  userId: number;
  loading:boolean = false;
  itemTitle: string = '';
  itemBody: string = '';

  ngOnInit(): void {
  }

  addItem(){
    this.loading = true;
    if(this.type === 'post'){
      let postDto:Post = {
        userId:this.userId,
        title:this.itemTitle,
        body:this.itemBody
      }
      this.postService.newPost(postDto).subscribe(resp=>{
        this.modal.close(resp);
      }, error=>alert("An Error occurred adding the post"), ()=>this.loading = false);

    }
    else if(this.type === 'album'){
      let albumDto:Album = {
        userId:this.userId,
        title:this.itemTitle
      }
      this.albumService.newAlbum(albumDto).subscribe(resp=>{
        this.modal.close(resp);
      }, error=>alert("An Error occurred adding the album"), ()=>this.loading = false);
    }
  }

}
