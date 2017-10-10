import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'aw-consult-blogs',
  templateUrl: './consult-blogs.component.html',
  styleUrls: ['./consult-blogs.component.scss']
})
export class ConsultBlogsComponent implements OnInit {
  @Input() data;
  @Input() rssFeeds;
  @Input() language;

  constructor(private dataS: DataService) { }

  ngOnInit() {
  }

  parseDate(date) { return this.dataS.parseDate(date); }
  blogImg(desc) { return this.dataS.blogImg(desc); }

}
