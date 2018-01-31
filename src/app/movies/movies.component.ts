import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  public movies: any;

  constructor(private http: Http, private router: Router, private location: Location) { 
    console.log("-constructor-");
    this.movies = [];
  }

  ngOnInit() {
    console.log("-ngOnInit-");
    
    this.location.subscribe(() => {
      this.refresh();
    });

    this.refresh();
    
  }

  private refresh() {
    console.log("-refresh-");
    this.http.get("http://localhost:12345/movies")
      .map(result => result.json())
      .subscribe(result => {
        this.movies = result;
      });
  }

  public create() {
    console.log("-create-");
    this.router.navigate(["create"]);
  }
}
