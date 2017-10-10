import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Feed, DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'aw-consulting-template',
  templateUrl: './consulting-template.component.html',
  styleUrls: ['./consulting-template.component.scss']
})
export class ConsultingTemplateComponent implements OnInit {
  @Input() data;
  @Input() language;

  rssFeeds$: Observable<Array<Feed>>;

  constructor(private dataS: DataService) { }

  ngOnInit() {
    this.rssFeeds$ = this.dataS.medium_feeds(this.language);
  }

  parseDate(date) { return this.dataS.parseDate(date); }
  blogImg(desc) { return this.dataS.blogImg(desc); }

}
