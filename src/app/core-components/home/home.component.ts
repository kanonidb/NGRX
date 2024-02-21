import {Component, OnInit, ViewChild} from '@angular/core';
import {MasterService} from '../../globalfeed/services/master.service';
import {Posts} from '../../globalfeed/model/posts';
import {MaterialModule} from '../../globalfeed/modules/material/material.module';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../states/app.state';
import {selectCount} from '../../states/counterstate/counter.selector';
import {AsyncPipe} from '@angular/common';
import { decrement, increment, reset } from '../../states/counterstate/counter.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'title', 'author'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  postData!: Posts[];
  constructor(private service: MasterService, private store: Store<AppState>) {
    
  }
  ngOnInit(): void {
    this.LoadInitialData();
  }

  LoadInitialData() {
    this.service.getAll().subscribe((item) => {
      this.postData = item;
      this.dataSource = new MatTableDataSource<Posts>(this.postData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.postData);
    });
  }

  reset() {
    this.store.dispatch(reset());
  }
  decreace() {
    this.store.dispatch(decrement());
  }
  increace() {
    this.store.dispatch(increment());
  }
}
