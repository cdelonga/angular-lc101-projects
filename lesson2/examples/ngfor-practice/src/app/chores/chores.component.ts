import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work', 'clean Bathroom'];
   todoTitles = ["Monday's chores", "Wednesday's chores", "Friday's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
